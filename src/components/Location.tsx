import { MapPin, Clock, Navigation, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  const hours = [
    { day: "Tuesday - Sunday", time: "10:00 AM - 10:00 PM" },
    { day: "Monday", time: "Closed" },
  ];

  return (
    <section id="location" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-texture opacity-30" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Location</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
            Visit <span className="text-primary italic">DULU DULU</span>
          </h2>
          <p className="text-foreground/75 text-lg leading-relaxed">
            Find us in Bandar Baru Petaling Jaya — drop by for brunch, lunch, or a cozy work session.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden border-border/50 shadow-xl">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0583!2d101.6285!3d3.0789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4bff0c23aadd%3A0xfd42257f1004b19a!2sDULU-DULU!5e0!3m2!1sen!2smy!4v1"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DULU DULU Location Map"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </CardContent>
            </Card>

            <Button variant="default" size="lg" className="w-full mt-4 rounded-full" asChild>
              <a
                href="https://www.google.com/maps/search/?api=1&query=40%2C%20Jalan%2052%2F18%2C%20Bandar%20Baru%20Petaling%20Jaya%2C%2046200%20Petaling%20Jaya%2C%20Selangor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Open in Google Maps
              </a>
            </Button>
          </div>

          {/* Info */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Address */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Address</p>
                  <p className="font-semibold text-lg">40, Jalan 52/18, Bandar Baru Petaling Jaya</p>
                  <p className="text-muted-foreground text-sm mt-1">46200 Petaling Jaya, Selangor, Malaysia</p>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="border-border/50">
              <CardContent className="p-5">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Opening Hours</p>
                    <p className="font-semibold text-lg">Daily Schedule</p>
                  </div>
                </div>
                <div className="space-y-3 mt-4 pt-4 border-t border-border/50">
                  {hours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className={`font-medium ${schedule.time === "Closed" ? "text-destructive" : "text-foreground"}`}>
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">Hours subject to change.</p>
              </CardContent>
            </Card>

            {/* Parking */}
            <Card className="border-border/50">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Parking</p>
                    <p className="font-semibold text-lg">Nearby options</p>
                    <ul className="mt-3 space-y-2 text-foreground/75 text-sm leading-relaxed">
                      <li>Street parking available nearby.</li>
                      <li>Public parking available within walking distance.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
