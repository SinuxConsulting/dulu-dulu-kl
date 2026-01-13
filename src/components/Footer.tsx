import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleSectionNav = (sectionId: string) => {
    if (isHomePage) {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    navigate(`/#${sectionId}`);
  };

  return (
    <footer className="bg-brown-dark text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold mb-2">DULU-DULU</h3>
            <p className="text-cream/80 text-sm font-medium">
              Where Classic Local Flavours Meet Modern Twists
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6">
            <button onClick={() => handleSectionNav("about")} className="text-cream/90 hover:text-cream transition-colors text-sm font-medium">About</button>
            <button onClick={() => handleSectionNav("menu")} className="text-cream/90 hover:text-cream transition-colors text-sm font-medium">Menu</button>
            <button onClick={() => handleSectionNav("gallery")} className="text-cream/90 hover:text-cream transition-colors text-sm font-medium">Gallery</button>
            <button onClick={() => handleSectionNav("reviews")} className="text-cream/90 hover:text-cream transition-colors text-sm font-medium">Reviews</button>
            <button onClick={() => handleSectionNav("location")} className="text-cream/90 hover:text-cream transition-colors text-sm font-medium">Location</button>
            <button onClick={() => handleSectionNav("contact")} className="text-cream/90 hover:text-cream transition-colors text-sm font-medium">Contact</button>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/duludulu.kl/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/people/DULU-DULU/61580928525538/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/80">
            <p className="font-medium">© 2026 DULU-DULU. All rights reserved.</p>

            <p className="text-sm">
              <span className="text-cream/70">Designed by </span>
              <a
                href="https://sinuxconsulting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline transition-colors"
              >
                Sinux Consulting
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
