import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "919482272449";
import { API_URL } from "@/config/api";

const Desktops = () => {
  const [desktops, setDesktops] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        const desktopProducts = data.filter(
          (item: any) =>
            item.category?.toLowerCase() === "desktop" &&
            item.inStock === true
        );

        setDesktops(desktopProducts);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);



  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-header py-16">
        <div className="container-custom">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-footer-foreground hover:text-green-accent mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-header-foreground mb-4">
              <span className="text-green-accent">Desktops</span>
            </h1>
            <p className="text-lg text-footer-foreground">
              Browse our available refurbished desktops. Click “Contact on
              WhatsApp” to enquire about any product.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {loading ? (
            <p className="text-center text-muted-foreground">
              Loading desktops...
            </p>
          ) : desktops.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No desktops available at the moment.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {desktops.map((desktop) => (
                <ProductCard
                  key={desktop.name}
                  name={desktop.name}
                  specs={desktop.specs}
                  originalPrice={`₹${desktop.originalPrice}`}
                  discountedPrice={`₹${desktop.discountedPrice}`}
                  image={desktop.imageUrl}
                  whatsappNumber={WHATSAPP_NUMBER}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-12">
        <div className="container-custom text-center">
          <p className="text-muted-foreground mb-4">
            Don’t see the desktop you’re looking for?  
            Contact us with your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-accent text-header rounded-md font-medium hover:bg-green-accent-hover transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Desktops;
