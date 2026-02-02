// Events data structure - easily replaceable with API data
export interface EventData {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  galleryImages: string[];
}

// Placeholder images - replace with real event photos
const placeholderImage = "/placeholder.svg";

export const eventsData: EventData[] = [
  {
    slug: "workspace-testing-benches",
    title: "Workspace & Testing Benches",
    shortDescription: "A look at our professional refurbishment workspace and testing stations.",
    fullDescription: "Our state-of-the-art workspace is equipped with dedicated testing benches where every device undergoes rigorous quality checks. Each workstation is designed to handle specific types of electronics, ensuring thorough inspection and refurbishment. Our technicians use professional-grade tools and diagnostic software to verify that every component meets our high standards before a device is approved for sale.",
    coverImage: placeholderImage,
    galleryImages: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    slug: "refurbishment-process",
    title: "Refurbishment Process",
    shortDescription: "Behind the scenes of our careful refurbishment workflow.",
    fullDescription: "Our refurbishment process follows a strict multi-step protocol. Each device is first thoroughly cleaned and inspected for physical damage. Then, all components are tested individually - from processors and memory to displays and keyboards. Any faulty parts are replaced with quality components. Finally, fresh operating systems are installed and the device undergoes a final quality assurance check before being packaged for delivery.",
    coverImage: placeholderImage,
    galleryImages: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    slug: "device-quality-checks",
    title: "Device Quality Checks",
    shortDescription: "How we ensure every device meets our quality standards.",
    fullDescription: "Quality is at the heart of everything we do. Every device that enters our facility goes through a comprehensive 50-point inspection checklist. We test battery health, screen quality, keyboard functionality, port connectivity, and much more. Our diagnostic tools measure performance benchmarks to ensure each device performs like new. Only devices that pass all tests receive our quality certification.",
    coverImage: placeholderImage,
    galleryImages: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    slug: "team-activities",
    title: "Team Activities",
    shortDescription: "Our team building events and collaborative moments.",
    fullDescription: "We believe that a strong team creates strong products. Our team regularly participates in skill-building workshops, technology training sessions, and team bonding activities. From celebrating milestones together to learning new refurbishment techniques, our collaborative culture ensures that every team member is motivated and equipped to deliver the best refurbished electronics to our customers.",
    coverImage: placeholderImage,
    galleryImages: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    slug: "packaging-dispatch",
    title: "Packaging & Dispatch",
    shortDescription: "How we carefully package and ship your orders.",
    fullDescription: "The final step in our process is just as important as the first. Each refurbished device is carefully packaged using eco-friendly materials that provide maximum protection during transit. We include all necessary accessories, documentation, and warranty information. Our dispatch team ensures that orders are processed quickly and shipped with reliable courier partners for safe and timely delivery.",
    coverImage: placeholderImage,
    galleryImages: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    slug: "events-partnerships",
    title: "Events & Partnerships",
    shortDescription: "Highlights from our industry events and partner collaborations.",
    fullDescription: "We actively participate in technology expos, sustainability conferences, and industry events to stay connected with the latest trends and best practices. Our partnerships with leading technology companies and environmental organizations help us source quality components and promote sustainable electronics consumption. These collaborations strengthen our commitment to providing affordable, eco-friendly technology solutions.",
    coverImage: placeholderImage,
    galleryImages: [placeholderImage, placeholderImage, placeholderImage],
  },
];

// Helper function to get event by slug
export const getEventBySlug = (slug: string): EventData | undefined => {
  return eventsData.find((event) => event.slug === slug);
};
