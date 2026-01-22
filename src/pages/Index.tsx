import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    // Small delay to ensure layout is painted
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>DULU-DULU | Nostalgic Malaysian Cafe in PJ New Town</title>
        <meta
          name="description"
          content="DULU-DULU is PJ New Town's rustic cafe serving classic Malaysian comfort food with a modern twist. Pan mee, nasi ayam Nyonya assam, fish head noodles & more. Muslim friendly."
        />
        <meta
          name="keywords"
          content="DULU-DULU, Dulu Dulu Cafe, PJ New Town cafe, Malaysian cafe, halal cafe Petaling Jaya, pan mee, Nyonya food, nostalgic cafe"
        />
        <meta property="og:title" content="DULU-DULU | Nostalgic Malaysian Cafe" />
        <meta
          property="og:description"
          content="Where classic local flavours meet modern twists. Experience authentic Malaysian comfort food at PJ New Town's rustic cafe."
        />
        <meta property="og:type" content="restaurant" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://duludulu.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <Reviews />
          <Location />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
