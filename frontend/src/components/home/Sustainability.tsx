import { Link } from "react-router-dom";
import { ArrowRight, RefreshCw, TrendingUp, Globe } from "lucide-react";

const Sustainability = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Committed to a{" "}
              <span className="text-green-accent">Circular Economy</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At E Swachha Green Tech Solutions, we believe in extending the 
              lifecycle of electronics through professional refurbishment. Every 
              device we restore is one less device in a landfill, contributing 
              to a more sustainable future.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-green-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Lifecycle Extension
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We give electronics a second life through careful restoration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Resource Conservation
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Refurbishment uses fewer resources than manufacturing new devices.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-green-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Environmental Impact
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Reducing e-waste through responsible reuse and refurbishment.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-green-accent font-semibold hover:gap-3 transition-all"
            >
              Learn More About Our Mission
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-accent/20 to-green-accent/5 rounded-3xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto bg-green-accent/20 rounded-full flex items-center justify-center mb-8">
                  <RefreshCw className="w-16 h-16 text-green-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Reduce. Reuse. Refurbish.
                </h3>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  Join us in building a sustainable future, one device at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
