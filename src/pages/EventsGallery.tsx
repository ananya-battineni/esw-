import Layout from "@/components/layout/Layout";

const galleryItems = [
  { title: "Workspace & Testing Benches", alt: "Workspace and testing benches" },
  { title: "Refurbishment Process", alt: "Refurbishment process in progress" },
  { title: "Device Quality Checks", alt: "Device quality checks being performed" },
  { title: "Team Activities", alt: "Team activities and collaboration" },
  { title: "Packaging & Dispatch", alt: "Packaging refurbished electronics" },
  { title: "Events & Partnerships", alt: "Events and partnership moments" },
];

const EventsGallery = () => {
  return (
    <Layout>
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

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <figure
                key={item.title}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                <div className="aspect-[4/3] bg-section-light">
                  <img
                    src="/placeholder.svg"
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="p-5">
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Photos will be updated with real images.
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventsGallery;
