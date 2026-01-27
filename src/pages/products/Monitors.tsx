import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";

// WhatsApp number for enquiries (without + or spaces)
const WHATSAPP_NUMBER = "919876543210";

const monitors = [
  {
    name: "Dell UltraSharp U2419H",
    specs: "24 inch, Full HD, IPS Panel",
    price: "₹8,500",
  },
  {
    name: "HP EliteDisplay E243",
    specs: "24 inch, Full HD, LED Backlit",
    price: "₹7,800",
  },
  {
    name: "Lenovo ThinkVision T24i",
    specs: "24 inch, Full HD, IPS Panel",
    price: "₹7,500",
  },
  {
    name: "Dell P2419H",
    specs: "24 inch, Full HD, LED Monitor",
    price: "₹6,800",
  },
  {
    name: "HP Z24n G2",
    specs: "24 inch, WUXGA, IPS Panel",
    price: "₹9,200",
  },
  {
    name: "Dell UltraSharp U2717D",
    specs: "27 inch, QHD, IPS Panel",
    price: "₹14,500",
  },
];

const Monitors = () => {
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
              <span className="text-green-accent">Monitors</span>
            </h1>
            <p className="text-lg text-footer-foreground">
              Browse our available monitors. Click "Contact on WhatsApp" to enquire about any product.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {monitors.map((monitor) => (
              <ProductCard
                key={monitor.name}
                name={monitor.name}
                specs={monitor.specs}
                price={monitor.price}
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

export default Monitors;
