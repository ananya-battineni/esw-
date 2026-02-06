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

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
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
    const message = `Hi, I'm interested in buying the ${laptop.name} (${laptop.specs}).`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <Layout>
      <section className="bg-header py-12">
        <div className="container-custom">
          <Link to="/products/laptops">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Laptops
            </Button>
          </Link>

          <h1 className="text-3xl font-bold">{laptop.name}</h1>
          <p className="mt-2">{laptop.specs}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 container-custom">
          <Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 3500 })]}
          >
            <CarouselContent>
              {laptop.galleryImages.map((img: string, i: number) => (
                <CarouselItem key={i} className="basis-full">
                  <img src={img} className="rounded-xl w-full h-full object-cover" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div>
            <h2 className="text-2xl font-semibold mb-4">About this laptop</h2>
            <p className="mb-6">{laptop.description}</p>

            <div className="mb-6">
              <span className="line-through mr-4">{laptop.originalPrice}</span>
              <span className="text-3xl font-bold">{laptop.discountedPrice}</span>
            </div>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-lg"
            >
              <MessageCircle /> Contact for Buying
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LaptopDetail;
