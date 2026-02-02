import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Laptop, Monitor, Computer } from "lucide-react";

const categories = [
  {
    icon: Laptop,
    title: "Laptops",
    description: "Browse our selection of professionally tested laptops suitable for work, learning, and personal use.",
    path: "/products/laptops",
  },
  {
    icon: Monitor,
    title: "Monitors",
    description: "Quality-checked monitors verified for display clarity and reliable everyday performance.",
    path: "/products/monitors",
  },
  {
    icon: Computer,
    title: "Desktops",
    description: "Reliable desktop computers built for consistent performance in office and home environments.",
    path: "/products/desktops",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-header py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-header-foreground mb-6">
              Our <span className="text-green-accent">Products</span>
            </h1>
            <p className="text-xl text-footer-foreground">
              Browse our categories and contact us directly via WhatsApp to enquire about any product.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.path}
                className="group p-8 bg-card rounded-2xl border border-border card-hover flex flex-col"
              >
                <div className="w-16 h-16 bg-green-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-accent/20 transition-colors">
                  <category.icon className="w-8 h-8 text-green-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-green-accent font-medium text-sm group-hover:underline">
                  View Products →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-header py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-header-foreground mb-6">
            How to Purchase
          </h2>
          <p className="text-footer-foreground text-lg max-w-2xl mx-auto mb-8">
            Select a category, browse available products, and click "Contact on WhatsApp" to enquire. All purchases are handled through direct communication.
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

export default Products;
