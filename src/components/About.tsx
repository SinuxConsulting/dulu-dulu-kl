import { Clock, MapPin, Users, Heart } from "lucide-react";
import cafeInterior1 from "@/assets/cafe-interior-1.webp";
import cafeInterior2 from "@/assets/cafe-interior-2.webp";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish crafted with passion and traditional recipes",
    },
    {
      icon: Users,
      title: "Muslim Friendly",
      description: "Halal-certified with a welcoming atmosphere for all",
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Ingredients prepared fresh every morning",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-texture relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cream-dark/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={cafeInterior1}
                  alt="DULU-DULU cafe interior rustic ambiance"
                  className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
                  <p className="font-display text-3xl font-bold text-primary">4.6</p>
                  <p className="text-muted-foreground text-sm">Google Rating</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">34 Reviews</p>
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="bg-sage/10 backdrop-blur-sm rounded-2xl p-6 border border-sage/20">
                  <p className="font-display text-3xl font-bold text-sage">RM 1-20</p>
                  <p className="text-muted-foreground text-sm">Per Person</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">Affordable & Delicious</p>
                </div>
                <img
                  src={cafeInterior2}
                  alt="DULU-DULU cafe cozy seating area"
                  className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card px-6 py-3 rounded-full shadow-xl border border-border/50 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium text-sm">PJ New Town</span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 leading-tight">
                A Taste of <span className="text-primary italic">Nostalgia</span>
              </h2>
            </div>

            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              <p>
                <span className="font-display text-2xl text-foreground font-semibold">"Dulu-Dulu"</span> — meaning "long ago" in Malay — 
                captures our essence perfectly. We're PJ State's rustic new cafe where 
                nostalgia rules in every corner and every dish.
              </p>
              <p>
                Step into our charming heritage-inspired space and be transported to simpler times, 
                where the aroma of traditional Malaysian comfort food fills the air and every bite 
                tells a story of generations past.
              </p>
            </div>

            {/* Features */}
            <div className="grid gap-6 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
