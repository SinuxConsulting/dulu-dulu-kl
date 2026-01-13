import { Mail, MessageCircle, Briefcase, Handshake, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const WHATSAPP_BASE = "https://wa.me/60176966988";
  const EMAIL = "duludulu.kl@gmail.com";

  const lanes = [
    {
      icon: Briefcase,
      title: "Catering",
      desc: "Events, group orders, and catering enquiries.",
      whatsappText: "Hi DULU DULU, I'd like to enquire about catering.",
      emailSubject: "Catering Enquiry",
    },
    {
      icon: Package,
      title: "Lunchbox / Corporate Orders",
      desc: "Bulk lunchboxes for teams, meetings, and corporate events.",
      whatsappText: "Hi DULU DULU, I'd like to enquire about lunchbox / corporate orders.",
      emailSubject: "Lunchbox / Corporate Order Enquiry",
    },
    {
      icon: Handshake,
      title: "Collaborations",
      desc: "Brand collaborations, content, partnerships, and media.",
      whatsappText: "Hi DULU DULU, I'd like to discuss a collaboration.",
      emailSubject: "Collaboration Enquiry",
    },
  ];

  const buildWaLink = (text: string) => `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
  const buildMailto = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
            Let’s <span className="text-primary italic">Talk</span>
          </h2>
          <p className="text-foreground/75 text-lg leading-relaxed">
            For catering, lunchboxes, or collaborations — reach us instantly on WhatsApp or email.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {lanes.map((lane) => (
            <Card key={lane.title} className="border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <lane.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold">{lane.title}</h3>
                    <p className="text-foreground/70 text-sm mt-2 leading-relaxed">{lane.desc}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <Button asChild className="rounded-full">
                    <a href={buildWaLink(lane.whatsappText)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="rounded-full">
                    <a href={buildMailto(lane.emailSubject)}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 text-center text-sm text-muted-foreground">
          <p>
            WhatsApp: <a className="text-primary hover:underline" href={WHATSAPP_BASE} target="_blank" rel="noopener noreferrer">+60 17-696 6988</a>
             · 
            Email: <a className="text-primary hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
