export const site = {
  name: "Shammah Movers & Cleaners",
  short: "Shammah",
  tagline: "Reliable. Professional. Trusted. Clean.",
  headline: "Your trusted moving and cleaning partners",
  sub: "We make your move smooth and your space spotless. Home and office solutions you can rely on.",
  phone: "+254 181 460 645",
  phoneHref: "tel:+254181460645",
  whatsapp: "254181460645",
  email: "business.shammah@gmail.com",
  support: "support.shammah@gmail.com",
  website: "shammah-movers.vercel.app",
  hours: "Available 7 days a week",
};

export type ServiceIcon = "house" | "building" | "spray" | "sofa" | "desk" | "box";

export const services: { title: string; text: string; icon: ServiceIcon }[] = [
  { title: "House Moving", text: "Safe and efficient residential moving for homes and apartments.", icon: "house" },
  { title: "Office Relocation", text: "Seamless office moves with minimal downtime for your business.", icon: "building" },
  { title: "Deep Cleaning", text: "Thorough deep cleaning for homes, kitchens, bathrooms and more.", icon: "spray" },
  { title: "Sofa & Carpet Cleaning", text: "Professional cleaning to refresh sofas, carpets and upholstery.", icon: "sofa" },
  { title: "Office Cleaning", text: "Regular scheduled office cleaning to keep workplaces fresh and tidy.", icon: "desk" },
  { title: "Move In / Move Out Cleaning", text: "Complete cleaning for move-ins and move-outs, ready for handover.", icon: "box" },
];

export const reasons = [
  "Licensed and experienced team",
  "Punctual and reliable service",
  "Affordable and transparent pricing",
];
