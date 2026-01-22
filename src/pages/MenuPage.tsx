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

import { MENU_CATEGORIES, getItemsByCategory, type MenuCategory } from "@/data/menu-data";

const imagePool = [food1, food2, food3, food4, food5, food6];

function imageForIndex(i: number) {
  return imagePool[i % imagePool.length];
}

export default function MenuPage() {
  const [active, setActive] = useState<MenuCategory>("Best Seller");

  const items = useMemo(() => getItemsByCategory(active), [active]);

  return (
    <>
      <Helmet>
        <title>Menu | DULU-DULU</title>
        <meta
          name="description"
          content="Explore DULU-DULU’s full menu — best sellers, new items, breakfast, local favourites, nasi lemak, westerns, drinks and desserts."
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="container py-10">
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <Button asChild variant="ghost" className="gap-2">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
            </Button>

            <div className="text-right">
              <p className="text-sm text-muted-foreground">DULU-DULU</p>
              <h1 className="font-display text-2xl md:text-3xl font-semibold leading-tight">Full Menu</h1>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 mb-6">
            {MENU_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setActive(c);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
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

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Category Hero */}
            <div className="lg:col-span-4">
              <Card className="overflow-hidden border-border/50 lg:sticky lg:top-6">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] w-full relative overflow-hidden">
                    <img
                      src={imageForIndex(MENU_CATEGORIES.indexOf(active))}
                      alt={active}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white/90 text-xs uppercase tracking-wider">Category</p>
                      <h2 className="text-white font-display text-3xl font-semibold leading-tight">{active}</h2>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-4 text-sm text-muted-foreground">
                Prices shown in RM. Images are current site placeholders until real dish photos are provided.
              </div>
            </div>

            {/* Items */}
            <div className="lg:col-span-8">
              <div className="space-y-3">
                {items.map((item, idx) => (
                  <Card key={item.id} className="border-border/50 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-2xl overflow-hidden bg-muted shrink-0">
                          <img
                            src={imageForIndex(idx + 2)}
                            alt={item.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="font-display text-lg font-semibold leading-snug">{item.name}</p>
                              {item.description ? (
                                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
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
                              <p className="text-xl font-semibold tabular-nums">{item.price.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <Button asChild variant="secondary" className="rounded-full">
                  <Link to="/">Back to site</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
