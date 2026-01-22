import { useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Review = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
};

const curatedReviews: Review[] = [
  {
    author: "Siti Nurhafiza",
    rating: 5,
    relativeTime: "a month ago",
    text:
      "Stopped by for lunch. The food tasted great. The atmosphere was lively but still comfortable. Service was top-tier—our server checked on us often and made sure we had everything we needed. Will definitely return!\n\nFood: 5/5  |  Service: 5/5  |  Atmosphere: 5/5",
  },
  {
    author: "Tiffany T",
    rating: 5,
    relativeTime: "a month ago",
    text:
      "Always come here for their Matcha Toast and Pan Mee! The butter melts into the matcha, making it buttery smooth, and the pan mee texture together with the egg is just nice. Very reasonably priced too.\n\nIt’s also a perfect work / study spot in PJ. Plenty of plug points, which is hard to find elsewhere, + super chill vibe with soft music.\n\nWill get to spot the Owners around most of the time, and it really adds to how cozy and welcoming the place and its interior feel.\n\nFood: 5/5  |  Service: 5/5  |  Atmosphere: 5/5",
  },
  {
    author: "Tan Joey",
    rating: 5,
    relativeTime: "a month ago",
    text:
      "Love the cozy modern kopitiam vibe. Mee Siam is really flavourful, pan mee & polo bun’s a must try. Portions are generous and definitely worth the price !\n\nFood: 5/5  |  Service: 5/5  |  Atmosphere: 5/5",
  },
  {
    author: "Colton Tommy",
    rating: 5,
    relativeTime: "a month ago",
    text:
      "Service, food and atmosphere 👍🏻👍🏻👍🏻\n\nFinally found another place where Muslim can have Pan Mee and the Pan Mee is the bomb. Mee Siam tastes equally good as well. Music selection is super relaxing and not too loud so you can still chit chat.\n\nFood: 5/5  |  Service: 5/5  |  Atmosphere: 5/5",
  },
  {
    author: "Ta Lep",
    rating: 4,
    relativeTime: "3 weeks ago",
    text:
      "Tried this new spot in PJ for brunch.\nRoti bakar was slightly dry, but the fried rice was nice.\nNasi lemak ayam goreng was acceptable.\n\nThe ambience is quiet and comfortable, making it a pleasant place to dine.\nA good new option to have around the PJ area.",
  },
];

const Reviews = () => {
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  const PLACE_ID = "ChIJWa-a1_VOzDERtpwEfXsWVjs";
  const GOOGLE_REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=DULU%20DULU&query_place_id=${PLACE_ID}`;
  const WRITE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`;

  const toggleExpand = (index: number) => {
    const next = new Set(expandedReviews);
    if (next.has(index)) next.delete(index);
    else next.add(index);
    setExpandedReviews(next);
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-cream/30"}`}
      />
    ));

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <section id="reviews" className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-10 left-10 text-primary-foreground/10 text-[200px] font-serif leading-none select-none">
        "
      </div>
      <div className="absolute bottom-10 right-10 text-primary-foreground/10 text-[200px] font-serif leading-none select-none rotate-180">
        "
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cream font-semibold text-sm uppercase tracking-wider">Reviews</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-4 text-primary-foreground">
            What Guests Say
          </h2>
          <p className="text-cream text-lg leading-relaxed">
            A few recent highlights from Google Reviews.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto mb-10 gap-4">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cream/90 hover:text-cream transition-colors font-medium"
          >
            Read more on Google
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream text-brown-dark px-6 py-3 rounded-full font-medium hover:bg-white transition-colors shadow-lg"
          >
            Review us on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Reviews Carousel */}
        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-4">
            {curatedReviews.map((review, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col border border-cream/20">
                  <div className="flex justify-center mb-4">{renderStars(review.rating)}</div>

                  <div className="flex-1 mb-5">
                    <p className="text-cream text-sm leading-relaxed text-center font-medium whitespace-pre-line">
                      {review.text.length > 260 && !expandedReviews.has(index)
                        ? `${review.text.slice(0, 260)}...`
                        : review.text}
                    </p>
                    {review.text.length > 260 && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(index)}
                        className="mt-3 mx-auto block text-cream/90 hover:text-cream underline text-sm"
                      >
                        {expandedReviews.has(index) ? "Show less" : "Read more"}
                      </button>
                    )}
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-4 border-t border-cream/20">
                    <div className="w-10 h-10 rounded-full bg-cream/10 text-cream flex items-center justify-center font-semibold">
                      {getInitials(review.author)}
                    </div>
                    <div className="text-center">
                      <p className="text-cream font-semibold">{review.author}</p>
                      <p className="text-cream/80 text-xs">{review.relativeTime}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-12 bg-cream/10 border-cream/20 hover:bg-cream/20 text-cream" />
          <CarouselNext className="hidden md:flex -right-12 bg-cream/10 border-cream/20 hover:bg-cream/20 text-cream" />
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
