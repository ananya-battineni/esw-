import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { API_URL } from "@/config/api";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Event = {
  slug: string;
  title: string;
  description: string;
  gallery: string[];
};

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  if (!slug) return;

  const fetchEvent = async () => {
    try {
      const res = await fetch(`${API_URL}/events/${slug}`);
      if (!res.ok) {
        throw new Error("Event not found");
      }
      const data = await res.json();
      setEvent(data);
    } catch (err) {
      console.error("Failed to fetch event:", err);
      setEvent(null);
    } finally {
      setLoading(false);
    }
  };

  fetchEvent();
}, [slug]);

  // Loading state
  if (loading) {
    return (
      <Layout>
        <div className="section-padding text-center text-muted-foreground">
          Loading event...
        </div>
      </Layout>
    );
  }

  // Redirect if event not found
  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-header py-12">
        <div className="container-custom">
          <Link to="/events">
            <Button
              variant="ghost"
              className="text-header-foreground hover:bg-white/10 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-header-foreground">
            {event.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Auto-rotating Image Carousel */}
            <div className="order-2 lg:order-1">
              <Carousel
                className="w-full"
                opts={{
                  loop: true,
                  align: "start",
                }}
                plugins={[
                  Autoplay({
                    delay: 3500,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                  }),
                ]}
              >
                <CarouselContent>
                  {event.gallery.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-section-light border border-border">
                        <img
                          src={image}
                          alt={`${event.title} - Image ${index + 1}`}
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

            {/* Description */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                About This Event
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg">
                {event.description}
              </p>

              <div className="mt-8 p-6 bg-section-light rounded-xl border border-border">
                <p className="text-sm text-muted-foreground">
                  Photos will be updated with real images from this event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventDetail;
