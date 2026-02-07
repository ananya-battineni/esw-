import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-header py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-header-foreground mb-6">
              Contact <span className="text-green-accent">Us</span>
            </h1>
            <p className="text-xl text-footer-foreground">
              Reach out to us for product availability, pricing, or any general
              enquiries. We’re happy to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Office Address
                    </h4>
                    <p className="text-muted-foreground">
                      No 721 1st F cross 3rd stage , 4th Block ,15th Main<br />
                      Basaveshwaranagar, Bengaluru - 560079<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Phone Number
                    </h4>
                    <a
                      href="tel:+919482272449"
                      className="text-muted-foreground hover:text-green-accent transition-colors"
                    >
                      +91 94822 72449
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Email Address
                    </h4>
                    <a
                      href="eswachhagreentech@gmail.com"
                      className="text-muted-foreground hover:text-green-accent transition-colors"
                    >
                      eswachhagreentech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Working Hours
                    </h4>
                    <p className="text-muted-foreground">
                      Monday – Saturday: 9:00 AM – 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Our Location
              </h2>

              <div className="rounded-xl overflow-hidden border border-border h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d124379.7230745051!2d77.47837495522663!3d13.044178267576397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSLN%20TECHNOLOGIES%2C%20584%2C%20opp.%20PES%20DEGREE%20COLLEGE%2C%20Mysore%20Bank%20Colony%2C%20Nagendra%20Block%2C%20Banashankari%203rd%20Stage%2C%20Banashankari%2C%20Bengaluru%2C%20Karnataka%20560050!5e0!3m2!1sen!2sin!4v1769587393988!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="E Swachha Office Location"
                />
              </div>

              {/* Quick Actions */}
              <div className="mt-6 flex gap-4">
                <a
                  href="https://wa.me/919482272449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-green-accent text-header py-3 rounded-lg font-semibold hover:bg-green-accent-hover transition-colors"
                >
                  Contact on WhatsApp
                </a>

                <a
                  href="tel:+919482272449"
                  className="flex-1 text-center border border-border py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
