import { Link } from "react-router-dom";
import { ArrowRight, Shield, Leaf, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-header relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-accent/5 to-transparent" />
      
      <div className="container-custom relative">
        <div className="py-20 md:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-accent/10 rounded-full mb-8 animate-fade-in">
              <Leaf className="w-4 h-4 text-green-accent" />
              <span className="text-green-accent text-sm font-medium">
                Certified Refurbished Electronics
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-header-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              High-Quality Refurbished Electronics{" "}
              <span className="text-green-accent">You Can Trust</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-footer-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We specialize in certified refurbishment and sustainable reuse of 
              electronic devices. Every product undergoes rigorous testing to 
              ensure quality, reliability, and performance you can depend on.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-accent" />
                <span className="text-footer-foreground text-sm">Quality Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-accent" />
                <span className="text-footer-foreground text-sm">Professional Grading</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-accent" />
                <span className="text-footer-foreground text-sm">Eco-Friendly</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-accent text-header rounded-md font-semibold hover:bg-green-accent-hover transition-colors duration-200"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-header-foreground rounded-md font-semibold hover:bg-white/5 transition-colors duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
