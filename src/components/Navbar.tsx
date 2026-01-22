import { useEffect, useMemo, useState } from "react";
import { Menu as MenuIcon, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "menu", label: "Menu" },
      { id: "gallery", label: "Gallery" },
      { id: "reviews", label: "Reviews" },
      { id: "location", label: "Location" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const handleSectionNav = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    // Navigate to home with hash; Index page handles scrolling.
    navigate(`/#${sectionId}`);
  };

  const WHATSAPP_URL = "https://wa.me/60176966988";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl font-bold text-primary">
              DULU-DULU
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleSectionNav(link.id)}
                className="text-foreground/90 hover:text-primary transition-colors font-semibold text-sm uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="default" size="sm" asChild className="rounded-full">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-md shadow-lg animate-fade-in">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleSectionNav(link.id)}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/50"
                >
                  {link.label}
                </button>
              ))}
              <Button variant="default" className="mt-4 rounded-full" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
