import { Helmet } from "react-helmet-async";
import { ArrowLeft, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

import food1 from "@/assets/food-1.webp";
import food2 from "@/assets/food-2.webp";
import food3 from "@/assets/food-3.webp";
import food4 from "@/assets/food-4.webp";
import food5 from "@/assets/food-5.webp";
import food6 from "@/assets/food-6.webp";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  category:
    | "Breakfast & Toast"
    | "Noodles"
    | "Rice Dishes"
    | "Mee Siam & Nasi Lemak"
    | "Western"
    | "Drinks"
    | "Dessert";
  image?: string;
  popular?: boolean;
};

const MenuPage = () => {
  const categories = useMemo(
    () => [
      "Breakfast & Toast",
      "Noodles",
      "Rice Dishes",
      "Mee Siam & Nasi Lemak",
      "Western",
      "Drinks",
      "Dessert",
    ] as const,
    []
  );

  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(
    "Breakfast & Toast"
  );

  const items: MenuItem[] = [
    // Breakfast & Toast
    {
      category: "Breakfast & Toast",
      name: "Dulu-Dulu Big Breakfast",
      description:
        "Hash brown, grilled tomato, scrambled eggs, chicken slices & peppered sausage with garden salad",
      price: "RM 21.90",
      image: food5,
      popular: true,
    },
    {
      category: "Breakfast & Toast",
      name: "Matcha Croissant",
      description:
        "Croissant filled with premium matcha spread & creamy butter",
      price: "RM 15.90",
      image: food1,
      popular: true,
    },
    {
      category: "Breakfast & Toast",
      name: "Kaya Butter Polo Bun",
      description:
        "Crispy sweet crust polo bun with kaya and a thick slice of butter",
      price: "RM 8.90",
      image: food6,
      popular: true,
    },
    {
      category: "Breakfast & Toast",
      name: "Matcha Toast",
      description: "Toasted bread with matcha spread and butter",
      price: "RM 9.90",
      image: food2,
    },
    {
      category: "Breakfast & Toast",
      name: "Iron Butter Ketchup Toast",
      description:
        "Crispy toast pressed on iron, slathered with butter & house ketchup spread",
      price: "RM 6.00",
      image: food4,
      popular: true,
    },

    // Noodles
    {
      category: "Noodles",
      name: "Pan Mee",
      description:
        "Hand-pulled noodles served dry or in broth, with minced meat, anchovies & greens",
      price: "RM 12.00",
      image: food1,
      popular: true,
    },
    {
      category: "Noodles",
      name: "Fish Head Noodles",
      description:
        "Rich milky soup with tender fish head, tomatoes & tangy notes",
      price: "RM 18.00",
      image: food3,
      popular: true,
    },

    // Rice Dishes
    {
      category: "Rice Dishes",
      name: "Nasi Ayam Nyonya Assam",
      description:
        "Fragrant rice with tangy Nyonya-style chicken cooked in assam (tamarind)",
      price: "RM 15.00",
      image: food2,
      popular: true,
    },
    {
      category: "Rice Dishes",
      name: "Fried Rice",
      description: "Comforting fried rice with wok hei and classic flavours",
      price: "RM 12.90",
      image: food5,
    },

    // Mee Siam & Nasi Lemak
    {
      category: "Mee Siam & Nasi Lemak",
      name: "Mee Siam",
      description:
        "Sweet & tangy vermicelli in spiced gravy with prawns, beancurd & egg",
      price: "RM 14.00",
      image: food4,
      popular: true,
    },
    {
      category: "Mee Siam & Nasi Lemak",
      name: "Nasi Lemak Ayam Goreng",
      description:
        "Coconut rice with sambal, fried anchovies, peanuts, cucumber, egg & fried chicken",
      price: "RM 14.00",
      image: food5,
      popular: true,
    },

    // Western
    {
      category: "Western",
      name: "Chicken Chop",
      description: "Juicy chicken chop with black pepper sauce & sides",
      price: "RM 18.90",
      image: food3,
    },

    // Drinks
    {
      category: "Drinks",
      name: "Jasmine Chunk Coffee",
      description: "Signature iced coffee infused with jasmine & brown sugar chunks",
      price: "RM 10.00",
      image: food6,
      popular: true,
    },
    {
      category: "Drinks",
      name: "Teh Tarik",
      description: "Pulled milk tea, frothy and creamy the traditional way",
      price: "RM 5.00",
      image: food2,
    },

    // Dessert
    {
      category: "Dessert",
      name: "Gula Melaka Pudding",
      description: "Silky pudding with gula melaka & coconut cream",
      price: "RM 8.90",
      image: food6,
    },
  ];

  const filtered = items.filter((i) => i.category === activeCategory);
  const heroImage = filtered.find((i) => i.image)?.image ?? food1;

  return (
    <>
      <Helmet>
        <title>Menu | DULU DULU</title>
        <meta
          name="description"
          content="Explore the DULU DULU menu — breakfast & toast, noodles, rice dishes, mee siam & nasi lemak, western, drinks and dessert."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Top header */}
        <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              to="/#menu"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </Link>
            <Link to="/" className="font-display text-2xl font-bold text-primary">
              DULU DULU
            </Link>
          </div>

          {/* Category nav */}
          <div className="border-t border-border/50">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 overflow-x-auto py-3">
                {categories.map((cat) => {
                  const active = cat === activeCategory;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                        active
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-transparent text-foreground/80 border-border/60 hover:border-primary/40"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </header>

        {/* Category hero + list */}
        <section className="pt-8 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-stretch">
              {/* Hero */}
              <div className="relative overflow-hidden rounded-3xl border border-border/50 min-h-[360px]">
                <img
                  src={heroImage}
                  alt={activeCategory}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <p className="text-cream/80 text-sm uppercase tracking-wider font-semibold">
                    Menu
                  </p>
                  <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mt-2">
                    {activeCategory}
                  </h1>
                  <p className="text-cream/80 mt-4 max-w-md leading-relaxed">
                    Curated comfort flavours — best enjoyed fresh, with good company.
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {filtered.map((item) => (
                  <Card key={item.name} className="border-border/50 hover:border-primary/30 transition-colors">
                    <CardContent className="p-0">
                      <div className="flex gap-4 p-5">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden border border-border/50 shrink-0">
                          {item.image ? (
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-secondary/40" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-display text-xl font-bold">{item.name}</h3>
                                {item.popular && (
                                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                                    <ThumbsUp className="w-3 h-3" /> Popular
                                  </span>
                                )}
                              </div>
                              <p className="text-foreground/70 text-sm mt-2 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <div className="text-right font-semibold text-primary whitespace-nowrap">
                              {item.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="pt-4 text-xs text-muted-foreground">
                  Prices subject to change.
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline" asChild className="rounded-full">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MenuPage;
