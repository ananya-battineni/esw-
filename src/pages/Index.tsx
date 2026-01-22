import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import WhyRefurbished from "@/components/home/WhyRefurbished";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import Sustainability from "@/components/home/Sustainability";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhyRefurbished />
      <WhatWeOffer />
      <Sustainability />
    </Layout>
  );
};

export default Index;
