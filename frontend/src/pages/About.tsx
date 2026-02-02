import Layout from "@/components/layout/Layout";
import { Target, Eye, CheckCircle, Shield, Search, Package, Wrench } from "lucide-react";

const whyChooseUs = [
  {
    icon: Search,
    title: "Rigorous Testing Processes",
    description: "Every device undergoes comprehensive functionality and performance testing.",
  },
  {
    icon: Shield,
    title: "Transparent Device Grading",
    description: "Clear grading system so you know exactly what you're getting.",
  },
  {
    icon: Package,
    title: "Responsible Sourcing",
    description: "We source devices from verified channels with proper documentation.",
  },
  {
    icon: Wrench,
    title: "Professional Handling",
    description: "Expert technicians handle every step of the refurbishment process.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-header py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-header-foreground mb-6">
              About <span className="text-green-accent">E Swachha</span>
            </h1>
            <p className="text-xl text-footer-foreground">
              Dedicated to making quality electronics accessible while reducing environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <strong className="text-foreground">E Swachha Green Tech Solutions</strong> was 
                  founded in 2023 with a clear vision: to transform the way people think about 
                  refurbished electronics.
                </p>
                <p>
                  We specialize in the refurbishment and resale of electronic devices, 
                  giving them a second life through professional testing, repair, and 
                  quality assurance. Our focus is on creating value — for our customers 
                  and for the environment.
                </p>
                <p>
                  We serve individuals seeking affordable quality devices, businesses 
                  looking to optimize their IT budgets, and institutions requiring 
                  reliable bulk electronics supply.
                </p>
              </div>
            </div>
            <div className="bg-section-light rounded-2xl p-10">
              <div className="text-7xl font-bold text-green-accent mb-4">2023</div>
              <p className="text-foreground font-semibold text-xl mb-2">Established</p>
              <p className="text-muted-foreground">
                Founded with a commitment to quality refurbishment and sustainable electronics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-section-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card p-10 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-green-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                "To make quality electronics accessible while reducing environmental 
                impact through professional refurbishment and responsible reuse."
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card p-10 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-green-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-green-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                "To build trust in refurbished electronics through transparency, 
                quality, and a commitment to sustainable practices."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-green-accent">Us</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We're committed to quality, transparency, and professionalism in 
              everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-6 p-8 bg-card rounded-xl border border-border card-hover"
              >
                <div className="w-14 h-14 bg-green-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-green-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values CTA */}
      <section className="bg-header py-16">
        <div className="container-custom text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-header-foreground mb-4">
            Quality. Transparency. Sustainability.
          </h3>
          <p className="text-footer-foreground text-lg max-w-2xl mx-auto">
            These are the values that drive everything we do at E Swachha Green Tech Solutions.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
