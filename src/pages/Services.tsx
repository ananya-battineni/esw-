import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Laptop, Monitor, Computer } from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Refurbished Laptops",
    description:
      "Professionally tested and refurbished laptops suitable for individuals, teams, and institutional use.",
  },
  {
    icon: Monitor,
    title: "Refurbished Monitors",
    description:
      "Quality-checked monitors verified for performance, display clarity, and reliable daily operation.",
  },
  {
    icon: Computer,
    title: "Refurbished Desktops",
    description:
      "Reliable desktops refurbished to deliver consistent everyday performance for work and learning.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-header py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-header-foreground mb-6">
              Our <span className="text-green-accent">Services</span>
            </h1>
            <p className="text-xl text-footer-foreground">
              Purchases are handled through direct communication (no online checkout).
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 bg-card rounded-2xl border border-border card-hover flex flex-col"
              >
                <div className="w-16 h-16 bg-green-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-green-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  To buy, please contact us directly. We don’t offer online checkout.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-green-accent text-header rounded-md font-medium text-sm hover:bg-green-accent-hover transition-colors duration-200"
                >
                  Contact Us to Buy
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-header py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-header-foreground mb-6">
            Want to buy refurbished devices?
          </h2>
          <p className="text-footer-foreground text-lg max-w-2xl mx-auto mb-8">
            Share the device type and quantity you need, and we’ll respond with availability and next steps.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-accent text-header rounded-md font-semibold hover:bg-green-accent-hover transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
