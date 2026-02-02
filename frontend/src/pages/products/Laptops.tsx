import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "919482272449";

const Laptops = () => {
  const [laptops, setLaptops] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then((res) => res.json())
      .then((data) => {
        const laptopProducts = data.filter(
          (item: any) =>
            item.category?.toLowerCase() === "laptop" &&
            item.inStock === true
        );

        setLaptops(laptopProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
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
              <span className="text-green-accent">Laptops</span>
            </h1>
            <p className="text-lg text-footer-foreground">
              Browse our available refurbished laptops. Click “Contact on
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
              Loading laptops...
            </p>
          ) : laptops.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No laptops available at the moment.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {laptops.map((laptop) => (
                <ProductCard
                  key={laptop.name}
                  name={laptop.name}
                  specs={laptop.specs}
                  originalPrice={`₹${laptop.originalPrice}`}
                  discountedPrice={`₹${laptop.discountedPrice}`}
                  image={laptop.imageUrl}
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
            Don’t see the laptop you’re looking for?  
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

export default Laptops;
