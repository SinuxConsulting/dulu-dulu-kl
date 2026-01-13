import { Utensils, Coffee, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import food1 from "@/assets/food-1.webp";
import food2 from "@/assets/food-2.webp";
import food3 from "@/assets/food-3.webp";
import food4 from "@/assets/food-4.webp";

const Menu = () => {
  const menuItems = [
    {
      name: "Pan Mee",
      description: "Hand-pulled noodles in savory broth with minced pork, anchovies & leafy greens",
      category: "Noodles",
      image: food1,
      featured: true,
    },
    {
      name: "Nasi Ayam Nyonya Assam",
      description: "Fragrant rice with tangy Nyonya-style chicken cooked in assam (tamarind)",
      category: "Rice",
      image: food2,
      featured: true,
    },
    {
      name: "Fish Head Noodles",
      description: "Rich milky soup with tender fish head, tomatoes & tangy notes",
      category: "Noodles",
      image: food3,
      featured: true,
    },
    {
      name: "Mee Siam",
      description: "Sweet & tangy vermicelli in spiced gravy with prawns & beancurd",
      category: "Noodles",
      image: food4,
      featured: false,
    },
  ];

  const categories = [
    { icon: Utensils, name: "Main Course", count: "10+ dishes" },
    { icon: Coffee, name: "Beverages", count: "Jasmine coffee & more" },
    { icon: Leaf, name: "Snacks", count: "Kaya polo buns" },
  ];

  return (
    <section id="menu" className="py-20 md:py-32 bg-secondary/30 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-texture opacity-50" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Menu</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
            Flavours of <span className="text-primary italic">Yesterday</span>
          </h2>
          <p className="text-foreground/75 text-lg leading-relaxed">
            Classic Malaysian dishes prepared with love and served with a modern twist. 
            Every recipe carries the warmth of traditional home cooking.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex items-center gap-3 bg-card px-5 py-3 rounded-full border border-border/50 shadow-sm hover:border-primary/30 transition-colors"
            >
              <cat.icon className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="font-medium text-sm">{cat.name}</p>
                <p className="text-xs text-muted-foreground">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {menuItems.map((item, index) => (
            <Card
              key={item.name}
              className={`overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group ${
                item.featured ? "bg-card" : "bg-card/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary/90 text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="sm:w-3/5 p-5 sm:p-6 flex flex-col justify-center">
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    {item.featured && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-sage rounded-full" />
                        <span className="text-sage text-xs font-medium">Popular Choice</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/menu">View more →</Link>
          </Button>
        </div>

        {/* Specialty Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card/80 backdrop-blur-sm px-8 py-5 rounded-2xl border border-border/50 shadow-lg">
            <div className="flex items-center gap-3">
              <Coffee className="w-6 h-6 text-primary" />
              <span className="font-display text-lg">Try our signature</span>
            </div>
            <span className="font-display text-xl font-semibold text-primary">Jasmine Chunk Coffee</span>
            <span className="text-muted-foreground">& Iron Butter Ketchup Toast</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
