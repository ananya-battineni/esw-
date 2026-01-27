import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";

// WhatsApp number for enquiries (without + or spaces)
const WHATSAPP_NUMBER = "919876543210";

const laptops = [
  {
    name: "Lenovo ThinkPad T480",
    specs: "Intel Core i5, 16GB RAM, 512GB SSD",
    price: "₹28,500",
  },
  {
    name: "HP EliteBook 840 G5",
    specs: "Intel Core i7, 16GB RAM, 256GB SSD",
    price: "₹32,000",
  },
  {
    name: "Dell Latitude 5490",
    specs: "Intel Core i5, 8GB RAM, 256GB SSD",
    price: "₹24,000",
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    specs: "Intel Core i7, 16GB RAM, 512GB SSD",
    price: "₹45,000",
  },
  {
    name: "HP ProBook 450 G6",
    specs: "Intel Core i5, 8GB RAM, 500GB HDD",
    price: "₹22,000",
  },
  {
    name: "Dell Inspiron 15 5000",
    specs: "AMD Ryzen 5, 8GB RAM, 512GB SSD",
    price: "₹26,500",
  },
];

const Laptops = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-header py-16">
        <div className="container-custom">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-footer-foreground hover:text-green-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-header-foreground mb-4">
              <span className="text-green-accent">Laptops</span>
            </h1>
            <p className="text-lg text-footer-foreground">
              Browse our available laptops. Click "Contact on WhatsApp" to enquire about any product.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {laptops.map((laptop) => (
              <ProductCard
                key={laptop.name}
                name={laptop.name}
                specs={laptop.specs}
                price={laptop.price}
                whatsappNumber={WHATSAPP_NUMBER}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-12">
        <div className="container-custom text-center">
          <p className="text-muted-foreground mb-4">
            Don't see what you're looking for? Contact us with your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-accent text-header rounded-md font-medium hover:bg-green-accent-hover transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Laptops;
