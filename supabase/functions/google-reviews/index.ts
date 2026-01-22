import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// DULU-DULU Cafe Place ID (from Google Maps)
const PLACE_ID = "ChIJWa-a1_VOzDERtpwEfXsWVjs";

// Cache duration in minutes (refresh every 60 minutes)
const CACHE_DURATION_MINUTES = 60;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client with service role for cache management
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if we have cached data that's still fresh
    console.log('Checking cache for Place ID:', PLACE_ID);
    
    const { data: cachedData, error: cacheError } = await supabase
      .from('google_reviews_cache')
      .select('*')
      .eq('place_id', PLACE_ID)
      .single();

    if (cachedData && !cacheError) {
      const cacheAge = Date.now() - new Date(cachedData.updated_at).getTime();
      const cacheAgeMinutes = cacheAge / (1000 * 60);
      
      if (cacheAgeMinutes < CACHE_DURATION_MINUTES) {
        console.log(`Returning cached data (${Math.round(cacheAgeMinutes)} minutes old)`);
        return new Response(
          JSON.stringify({ success: true, data: cachedData.data, cached: true }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      console.log('Cache expired, fetching fresh data');
    } else {
      console.log('No cache found, fetching fresh data');
    }

    // Fetch fresh data from Google Places API
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    if (!apiKey) {
      console.error('GOOGLE_PLACES_API_KEY not configured');
      
      // Return cached data if available, even if expired
      if (cachedData) {
        console.log('API key missing, returning stale cache');
        return new Response(
          JSON.stringify({ success: true, data: cachedData.data, cached: true, stale: true }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ success: false, error: 'Google Places API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Fetching reviews from Google Places API for:', PLACE_ID);

    // Use Google Places API (New) - Place Details
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=displayName,rating,userRatingCount,reviews&key=${apiKey}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Places API error:', errorText);
      
      // Return cached data if available when API fails
      if (cachedData) {
        console.log('API error, returning stale cache');
        return new Response(
          JSON.stringify({ success: true, data: cachedData.data, cached: true, stale: true }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ success: false, error: `Google API error: ${response.status}` }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log('Successfully fetched reviews, count:', data.reviews?.length || 0);

    // Transform reviews to a cleaner format
    const reviews = (data.reviews || []).map((review: any) => ({
      author: review.authorAttribution?.displayName || 'Anonymous',
      authorPhoto: review.authorAttribution?.photoUri || null,
      rating: review.rating || 5,
      text: review.text?.text || review.originalText?.text || '',
      relativeTime: review.relativePublishTimeDescription || '',
      publishTime: review.publishTime || null,
    }));

    const responseData = {
      name: data.displayName?.text || 'DULU-DULU',
      rating: data.rating || 4.4,
      totalReviews: data.userRatingCount || 0,
      reviews,
      placeId: PLACE_ID,
    };

    // Update cache
    console.log('Updating cache with fresh data');
    const { error: upsertError } = await supabase
      .from('google_reviews_cache')
      .upsert({
        place_id: PLACE_ID,
        data: responseData,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'place_id' });

    if (upsertError) {
      console.error('Failed to update cache:', upsertError);
    } else {
      console.log('Cache updated successfully');
    }

    return new Response(
      JSON.stringify({ success: true, data: responseData, cached: false }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching reviews:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch reviews';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
