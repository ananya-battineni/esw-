import { Link } from "react-router-dom";
import { Laptop, Smartphone, ClipboardCheck, Building2, ArrowRight } from "lucide-react";

const offerings = [
  {
    icon: Laptop,
    title: "Refurbished Laptops & Desktops",
    description:
      "High-performance computers tested and certified for reliable everyday use.",
  },
  {
    icon: Smartphone,
    title: "Refurbished Mobile Devices",
    description:
      "Quality smartphones and tablets with thorough functionality verification.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Testing & Certification",
    description:
      "Comprehensive testing protocols and transparent device grading systems.",
  },
  {
    icon: Building2,
    title: "Bulk & Institutional Sales",
    description:
      "Custom solutions for businesses, schools, and organizations at scale.",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="section-padding bg-section-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We <span className="text-green-accent">Offer</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From individual devices to bulk supply, we provide comprehensive 
              refurbishment solutions tailored to your needs.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-green-accent font-semibold hover:gap-3 transition-all"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((offering, index) => (
            <div
              key={offering.title}
              className="group flex gap-6 p-8 bg-card rounded-xl border border-border card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-green-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-accent/20 transition-colors">
                <offering.icon className="w-7 h-7 text-green-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {offering.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
