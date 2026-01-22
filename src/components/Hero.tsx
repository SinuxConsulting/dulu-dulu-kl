import { ArrowDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import cafeExterior from "@/assets/cafe-exterior.webp";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={cafeExterior}
          alt="DULU-DULU Cafe rustic exterior in PJ New Town"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/70 via-brown-dark/50 to-brown-dark/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-cream/20 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-gold/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-full border border-cream/20 animate-fade-up">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-cream/90 text-sm font-medium">4.6 Rating • Muslim Friendly</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            DULU-DULU
          </h1>

          {/* Tagline */}
          <p className="text-cream text-lg md:text-xl font-medium animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Where Classic Local Flavours Meet Modern Twists
          </p>

          {/* Description */}
          <p className="text-cream/90 text-base md:text-lg max-w-2xl mx-auto animate-fade-up font-normal leading-relaxed" style={{ animationDelay: "0.3s" }}>
            Step back in time at PJ New Town's rustic new cafe where nostalgia rules. 
            Experience authentic Malaysian comfort food — pan mee, nasi ayam Nyonya assam, 
            fish head noodles & more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="default" size="lg" className="min-w-[160px]" asChild>
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button variant="outline" size="lg" className="min-w-[160px] bg-transparent border-cream/30 text-cream hover:bg-cream/10 hover:text-cream" asChild>
              <a href="#contact">Find Us</a>
            </Button>
          </div>

          {/* Location */}
          <div className="pt-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-cream/80 text-sm font-medium tracking-wide">
              40, Jalan 52/18, Bandar Baru PJ • 10AM - 10PM (Closed Mondays)
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-cream/50 hover:text-cream transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
