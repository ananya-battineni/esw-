import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="E Swachha Green Tech Solutions"
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-footer-foreground text-sm leading-relaxed max-w-md">
              E Swachha Green Tech Solutions specializes in refurbishment, resale, 
              and responsible reuse of electronic devices. We give electronics a 
              second life through quality testing and professional refurbishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-header-foreground font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-footer-foreground text-sm hover:text-green-accent transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-footer-foreground text-sm hover:text-green-accent transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-footer-foreground text-sm hover:text-green-accent transition-colors"
              >
                What We Offer
              </Link>
              <Link
                to="/contact"
                className="text-footer-foreground text-sm hover:text-green-accent transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-header-foreground font-semibold text-lg mb-6">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-accent flex-shrink-0 mt-0.5" />
                <span className="text-footer-foreground text-sm">
                  123 Tech Park, Industrial Area<br />
                  Bengaluru, Karnataka 560001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-accent flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-footer-foreground text-sm hover:text-green-accent transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-accent flex-shrink-0" />
                <a
                  href="mailto:info@eswachha.com"
                  className="text-footer-foreground text-sm hover:text-green-accent transition-colors"
                >
                  info@eswachha.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-footer-foreground text-sm">
              © {new Date().getFullYear()} E Swachha Green Tech Solutions. All rights reserved.
            </p>
            <p className="text-footer-foreground text-sm">
              Give your old electronics a second life.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
