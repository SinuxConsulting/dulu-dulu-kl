import { useMemo, useState } from "react";
import { ThumbsUp, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import food1 from "@/assets/food-1.webp";
import food2 from "@/assets/food-2.webp";
import food3 from "@/assets/food-3.webp";
import food4 from "@/assets/food-4.webp";
import food5 from "@/assets/food-5.webp";
import food6 from "@/assets/food-6.webp";

import { BEST_SELLERS, MENU_CATEGORIES, getItemsByCategory, type MenuCategory, type MenuItem } from "@/data/menu-data";

const imagePool = [food1, food2, food3, food4, food5, food6];

function imageForIndex(i: number) {
  return imagePool[i % imagePool.length];
}

export default function Menu() {
  const [active, setActive] = useState<MenuCategory>("Best Seller");

  const bestSellers = useMemo(() => BEST_SELLERS.slice(0, 6), []);
  const activeItems = useMemo(() => getItemsByCategory(active), [active]);

  return (
    <section id="menu" className="py-16 md:py-20 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-texture opacity-50" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Menu</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Flavours of <span className="text-primary italic">Yesterday</span>
          </h2>
          <p className="text-foreground/75 text-lg leading-relaxed">
            Best sellers on top, then browse categories the same way you would on a real menu.
          </p>
        </div>

        {/* Best Sellers Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <ThumbsUp className="h-5 w-5 text-primary" />
              <h3 className="font-display text-2xl font-semibold">Best Sellers</h3>
            </div>
            <Button asChild variant="secondary" className="rounded-full">
              <Link to="/menu">View more →</Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bestSellers.map((item, idx) => (
              <Card key={item.id} className="overflow-hidden border-border/50 hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-square w-full overflow-hidden bg-muted">
                    <img
                      src={imageForIndex(idx)}
                      alt={item.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-lg font-semibold leading-snug">{item.name}</p>
                      {item.description ? (
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">{item.description}</p>
                      ) : null}
                      <div className="mt-3 inline-flex items-center gap-2 text-xs">
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-3 py-1">
                          <ThumbsUp className="h-3.5 w-3.5" />
                          Best Seller
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-xs text-muted-foreground">RM</p>
                      <p className="text-xl font-semibold tabular-nums">{item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Category Browser */}
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="font-display text-2xl font-semibold">Browse by Category</h3>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
              {MENU_CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={[
                    "whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors",
                    c === active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background/60 border-border/60 hover:bg-background",
                  ].join(" ")}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="mt-5 grid lg:grid-cols-12 gap-6">
              {/* Category Hero */}
              <div className="lg:col-span-4">
                <Card className="overflow-hidden border-border/50">
                  <CardContent className="p-0">
                    <div className="aspect-square w-full relative overflow-hidden">
                      <img
                        src={imageForIndex(MENU_CATEGORIES.indexOf(active))}
                        alt={active}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white/90 text-xs uppercase tracking-wider">Category</p>
                        <h4 className="text-white font-display text-2xl font-semibold leading-tight">{active}</h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-4 flex gap-3">
                  <Button asChild className="rounded-full w-full">
                    <Link to="/menu">Open full menu</Link>
                  </Button>
                </div>
              </div>

              {/* Items List */}
              <div className="lg:col-span-8">
                <div className="space-y-3">
                  {activeItems.slice(0, 10).map((item, idx) => (
                    <Card key={item.id} className="border-border/50 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-14 rounded-xl overflow-hidden bg-muted shrink-0">
                            <img
                              src={imageForIndex(idx + 3)}
                              alt={item.name}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <p className="font-display font-semibold leading-snug truncate">{item.name}</p>
                                {item.description ? (
                                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                    {item.description}
                                  </p>
                                ) : null}
                                <div className="mt-2 flex gap-2">
                                  {item.isBestSeller ? (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2.5 py-1 text-xs">
                                      <ThumbsUp className="h-3.5 w-3.5" />
                                      Best Seller
                                    </span>
                                  ) : null}
                                  {item.isNew ? (
                                    <span className="inline-flex items-center rounded-full bg-foreground/85 text-background px-2.5 py-1 text-xs">
                                      New
                                    </span>
                                  ) : null}
                                </div>
                              </div>

                              <div className="shrink-0 text-right">
                                <p className="text-xs text-muted-foreground">RM</p>
                                <p className="text-lg font-semibold tabular-nums">{item.price.toFixed(2)}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-4 flex justify-end">
                  <Button asChild variant="secondary" className="rounded-full">
                    <Link to="/menu">See everything →</Link>
                  </Button>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Note: Images shown here are placeholders from the current site assets. When you provide the real dish photos, we’ll map them 1:1 to items.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
