import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { 
  Laptop, 
  Smartphone, 
  ClipboardCheck, 
  Building2, 
  RefreshCw, 
  ArrowRight,
  CheckCircle,
  Monitor,
  Keyboard,
  Headphones
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Refurbished Electronics",
    description:
      "High-quality laptops, desktops, and accessories professionally tested and restored to excellent working condition.",
    features: [
      "Laptops (business & consumer)",
      "Desktop computers",
      "Monitors & displays",
      "Keyboards & peripherals",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Devices",
    description:
      "Professionally refurbished smartphones and tablets with thorough functionality verification and cosmetic restoration.",
    features: [
      "Smartphones",
      "Tablets",
      "Feature phones",
      "Mobile accessories",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Assurance & Testing",
    description:
      "Comprehensive testing protocols ensure every device meets our strict quality standards before reaching customers.",
    features: [
      "Multi-point functionality testing",
      "Battery health verification",
      "Cosmetic grading system",
      "Data sanitization",
    ],
  },
  {
    icon: Building2,
    title: "Bulk & Institutional Supply",
    description:
      "Custom solutions for businesses, educational institutions, and organizations requiring quality devices at scale.",
    features: [
      "Volume discounts available",
      "Custom configuration options",
      "Dedicated account support",
      "Flexible delivery schedules",
    ],
  },
  {
    icon: RefreshCw,
    title: "Responsible Reuse & Lifecycle Extension",
    description:
      "We focus on extending the useful life of electronics through proper refurbishment, reducing electronic waste.",
    features: [
      "Professional restoration",
      "Component-level repairs",
      "Software optimization",
      "Extended product lifecycle",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-header py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-header-foreground mb-6">
              What We <span className="text-green-accent">Offer</span>
            </h1>
            <p className="text-xl text-footer-foreground">
              Comprehensive refurbishment solutions for individuals, businesses, and institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 md:p-10 bg-card rounded-2xl border border-border card-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Icon & Title */}
                  <div>
                    <div className="w-16 h-16 bg-green-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-accent/20 transition-colors">
                      <service.icon className="w-8 h-8 text-green-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-foreground mb-4">What's Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Types */}
      <section className="section-padding bg-section-light">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Devices We <span className="text-green-accent">Handle</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From personal devices to enterprise equipment, we refurbish a wide 
              range of electronics.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Laptop, name: "Laptops" },
              { icon: Monitor, name: "Desktops" },
              { icon: Smartphone, name: "Smartphones" },
              { icon: Keyboard, name: "Accessories" },
            ].map((device) => (
              <div
                key={device.name}
                className="flex flex-col items-center p-8 bg-card rounded-xl border border-border text-center"
              >
                <div className="w-16 h-16 bg-green-accent/10 rounded-full flex items-center justify-center mb-4">
                  <device.icon className="w-8 h-8 text-green-accent" />
                </div>
                <span className="font-semibold text-foreground">{device.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-header py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-header-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-footer-foreground text-lg max-w-2xl mx-auto mb-8">
            Whether you're looking for a single device or bulk supply, we're here 
            to help. Get in touch to discuss your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-accent text-header rounded-md font-semibold hover:bg-green-accent-hover transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
