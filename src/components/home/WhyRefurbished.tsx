import { DollarSign, Leaf, ShieldCheck, Recycle } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description:
      "Get premium electronics at a fraction of the cost without compromising on quality or performance.",
  },
  {
    icon: Leaf,
    title: "Environmentally Responsible",
    description:
      "Reduce electronic waste and contribute to a sustainable future by choosing refurbished devices.",
  },
  {
    icon: ShieldCheck,
    title: "Professionally Tested",
    description:
      "Every device undergoes rigorous quality testing and inspection to ensure optimal functionality.",
  },
  {
    icon: Recycle,
    title: "Reduced Electronic Waste",
    description:
      "Extend the lifecycle of electronics and help minimize the environmental impact of e-waste.",
  },
];

const WhyRefurbished = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-green-accent">Refurbished</span> Electronics?
          </h2>
          <p className="text-muted-foreground text-lg">
            Smart, sustainable, and reliable — refurbished electronics offer 
            exceptional value while making a positive environmental impact.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 bg-card rounded-xl border border-border card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-green-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-accent/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-green-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRefurbished;
