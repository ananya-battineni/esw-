import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL;
const WHATSAPP_NUMBER = "919482272449";

const LaptopDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [laptop, setLaptop] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch(`${API_BASE_URL}/laptops/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Laptop not found");
        return res.json();
      })
      .then((data) => {
        setLaptop(data);
        setLoading(false);
      })
      .catch(() => {
        setLaptop(null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="section-padding text-center text-muted-foreground">
          Loading laptop details...
        </div>
      </Layout>
    );
  }

  if (!laptop) {
    return <Navigate to="/products/laptops" replace />;
  }

  const generateWhatsAppLink = () => {
    let message = `Hi, I'm interested in buying the ${laptop.name} (${laptop.specs}).`;
    message += ` Listed price: ${laptop.discountedPrice}.`;
    message += " Please share more details and availability.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-header py-12">
        <div className="container-custom">
          <Link to="/products/laptops">
            <Button
              variant="ghost"
              className="text-header-foreground hover:bg-white/10 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Laptops
            </Button>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-header-foreground">
            {laptop.name}
          </h1>
          <p className="text-footer-foreground mt-2">{laptop.specs}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Carousel */}
            <div>
              <Carousel
                className="w-full"
                opts={{ loop: true, align: "start" }}
                plugins={[
                  Autoplay({
                    delay: 3500,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                  }),
                ]}
              >
                <CarouselContent>
                  {laptop.galleryImages.map((img: string, index: number) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-section-light border border-border">
                        <img
                          src={img}
                          alt={`${laptop.name} image ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <p className="text-sm text-muted-foreground text-center mt-3">
                Images rotate automatically
              </p>
            </div>

            {/* Details */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                About This Laptop
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {laptop.description}
              </p>

              {/* Pricing */}
              <div className="p-6 bg-section-light rounded-xl border border-border mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-destructive line-through text-lg">
                    {laptop.originalPrice}
                  </span>
                  <span className="text-green-accent font-bold text-3xl">
                    {laptop.discountedPrice}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Price includes warranty and quality assurance
                </p>
              </div>

              {/* CTA */}
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-accent text-header rounded-lg font-semibold text-lg hover:bg-green-accent-hover transition-colors duration-200 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Contact for Buying
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LaptopDetail;
