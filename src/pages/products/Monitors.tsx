import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";

// Product images
import monitorDell from "@/assets/products/monitor-dell.jpg";
import monitorHp from "@/assets/products/monitor-hp.jpg";
import monitorLenovo from "@/assets/products/monitor-lenovo.jpg";

// WhatsApp number for enquiries (without + or spaces)
const WHATSAPP_NUMBER = "919876543210";

const monitors = [
  {
    name: "Dell UltraSharp U2419H",
    specs: "24 inch, Full HD, IPS Panel",
    originalPrice: "₹18,000",
    discountedPrice: "₹8,500",
    image: monitorDell,
  },
  {
    name: "HP EliteDisplay E243",
    specs: "24 inch, Full HD, LED Backlit",
    originalPrice: "₹16,500",
    discountedPrice: "₹7,800",
    image: monitorHp,
  },
  {
    name: "Lenovo ThinkVision T24i",
    specs: "24 inch, Full HD, IPS Panel",
    originalPrice: "₹15,000",
    discountedPrice: "₹7,500",
    image: monitorLenovo,
  },
  {
    name: "Dell P2419H",
    specs: "24 inch, Full HD, LED Monitor",
    originalPrice: "₹14,000",
    discountedPrice: "₹6,800",
    image: monitorDell,
  },
  {
    name: "HP Z24n G2",
    specs: "24 inch, WUXGA, IPS Panel",
    originalPrice: "₹22,000",
    discountedPrice: "₹9,200",
    image: monitorHp,
  },
  {
    name: "Dell UltraSharp U2717D",
    specs: "27 inch, QHD, IPS Panel",
    originalPrice: "₹32,000",
    discountedPrice: "₹14,500",
    image: monitorDell,
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
                originalPrice={monitor.originalPrice}
                discountedPrice={monitor.discountedPrice}
                image={monitor.image}
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
