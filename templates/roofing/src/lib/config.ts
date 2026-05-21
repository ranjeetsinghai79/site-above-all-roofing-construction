import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Above All Roofing & Construction",
    tagline: "Your Roof, Our Priority. Always.",
    phone: "(713) 298-2225",
    phoneHref: "tel:+17132982225",
    email: "larry@heisaboveall.com",
    address: "902 Walker School Rd, Sugar Land, TX 77479",
    city: "Sugar Land",
    serviceAreas: ["Sugar Land, TX", "Greater Houston Area", "Texas"],
    license: "Not specified",
    since: "1993",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "forest",
    niche: "roofing",
  },

  services: [
    { icon: "home", title: "Roof Replacement & Installation", desc: "Expert replacement and installation for lasting protection and curb appeal.", urgent: false },
    { icon: "hammer", title: "New Roof Construction", desc: "Building durable, high-quality roofs for new homes and commercial properties.", urgent: false },
    { icon: "shield-check", title: "Asphalt Shingle Roofing", desc: "Specializing in durable and aesthetically pleasing asphalt shingle roof systems.", urgent: false },
    { icon: "droplets", title: "Hail Damage Repair", desc: "Prompt and effective repairs for roofs damaged by hail storms.", urgent: true },
    { icon: "wrench", title: "Gutter Installation", desc: "Professional gutter installation to protect your home's foundation and landscaping.", urgent: false },
    { icon: "briefcase", title: "Roofing Insurance Claims Assistance", desc: "Guiding you through the insurance claims process for stress-free roof repairs.", urgent: false }
  ],

  testimonials: [
    { name: "Brian S.", location: "Sugar Land, TX", stars: 5, text: "A is not a good enough grade for Larry and his crew. A+++ might suffice. I had to fight my insurance to pay for my new roof and after 3 inspections, it was finally approved. Larry came for all 3 inspections at no charge. Larry noticed many other areas around the roof that needed repair and provided photos of the damage. He quoted an excellent price for the repair work and even included many items at no charge. The roof and all the other work came out great and every bit of trash was thoroughly removed. I would not hesitate to hire Larry for any job in the future." },
    { name: "Asha Vaidya", location: "Houston, TX", stars: 5, text: "I wanted to take a moment to express my sincere appreciation for the excellent job you did installing my new roof. Your attention to detail and expertise in the field were evident from the moment you arrived on the job site, and I couldn't be happier with the final product. Not only did you complete the job in a timely and efficient manner, but you also went above and beyond to ensure that everything was done to the highest standard- especially your son who came back to the site the day after and doing a thorough job cleaning up. Your professionalism and dedication to your craft truly set you apart, and I feel lucky to have had the opportunity to work with someone as skilled as you. I am so grateful for the hard work and care you put into this project, and I want you to know that it did not go unnoticed. Thanks to you, my home is now protected from the elements- especially the rain and looking better than ever. I will not hesitate to recommend you to anyone in need of roofing services. Once again, thank you for your outstanding work and for helping to make my home a safer and more beautiful place." },
    { name: "Arun", location: "Sugar Land, TX", stars: 5, text: "If you are in need of any type of roof repair or replacement, I highly recommend Larry Posten and Above All Roofing. We had a great experience with Larry and his team as they replaced our roof in June of 2022 and did an outstanding job. The team was very professional, did great quality work, and did a very thorough job in cleaning up all the nails and debris after the work was complete. Larry was very responsive throughout the whole process in a timely manner." }
  ],

  trustBadges: [
    "GAF Master Elite Certified", "BBB Accredited Business", "30+ Years Experience", "Flexible Financing Options", "Storm Damage Experts"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Roofs Installed", suffix: "+", decimals: 0 },
    { value: 30, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize quick responses to your roofing needs, especially during emergencies." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Clear, honest pricing with no hidden fees, ensuring transparency from start to finish." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of GAF Master Elite certified professionals, guaranteeing top-tier craftsmanship." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our AI reception is available around the clock to assist with your inquiries and scheduling." },
    { icon: "truck", title: "Fully Equipped", desc: "Our crews arrive with all the necessary tools and materials for efficient, high-quality service." }
  ],

  formServiceOptions: ["Roof Replacement & Installation", "New Roof Construction", "Asphalt Shingle Roofing", "Hail Damage Repair", "Gutter Installation", "Roofing Insurance Claims Assistance"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!