-- Create a table to cache Google Reviews data
CREATE TABLE public.google_reviews_cache (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  place_id TEXT NOT NULL UNIQUE,
  data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.google_reviews_cache ENABLE ROW LEVEL SECURITY;

-- Allow public read access (reviews are public data)
CREATE POLICY "Anyone can read cached reviews"
ON public.google_reviews_cache
FOR SELECT
USING (true);

-- Only service role can insert/update (edge function uses service role)
CREATE POLICY "Service role can manage cache"
ON public.google_reviews_cache
FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');