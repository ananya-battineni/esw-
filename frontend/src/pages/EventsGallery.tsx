import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

type Event = {
  slug: string;
  title: string;
  short_description: string;
  cover_image: string;
};

const EventsGallery = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch events:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-header py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-header-foreground mb-6">
              Events & <span className="text-green-accent">Gallery</span>
            </h1>
            <p className="text-xl text-footer-foreground">
              A glimpse into our refurbishment process, workspace, and team activities.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {loading ? (
            <p className="text-center text-muted-foreground">
              Loading events...
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Link
                  key={event.slug}
                  to={`/events/${event.slug}`}
                  className="group"
                >
                  <figure className="bg-card rounded-2xl border border-border overflow-hidden card-hover">
                    <div className="aspect-[4/3] bg-section-light overflow-hidden">
                      <img
                       src={event.cover_image || "/placeholder-event.jpg"}
                       alt={event.title}
                       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                       loading="lazy"
                       />
                    </div>

                    <figcaption className="p-5">
                      <p className="font-semibold text-foreground group-hover:text-green-accent transition-colors">
                        {event.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {event.short_description}
                      </p>
                    </figcaption>
                  </figure>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default EventsGallery;
