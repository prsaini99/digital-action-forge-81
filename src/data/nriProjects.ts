
export interface Project {
  id: number;
  name: string;
  location: string;
  type: string;
  price: string;
  bedrooms: string;
  area: string;
  completion: string;
  description: string;
  highlights: string[];
  image: string;
  fallbackImage: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Sobha Marina One",
    location: "Marine Drive, Kochi",
    type: "Luxury Apartments",
    price: "₹1.5 Cr onwards",
    bedrooms: "2, 3 & 4 BHK",
    area: "1250 - 3200 sq.ft.",
    completion: "Ready to Move",
    description: "Waterfront luxury apartments with panoramic views of the Arabian Sea and backwaters. Premium amenities include infinity pool, smart home features, and 24/7 concierge services.",
    highlights: [
      "Premium waterfront location",
      "World-class amenities",
      "High rental potential",
      "RERA approved"
    ],
    image: "/lovable-uploads/9599c049-2f74-4eb8-ae00-033fcb539de2.png",
    fallbackImage: "https://via.placeholder.com/600x400?text=Sobha+Marina+One"
  },
  {
    id: 2,
    name: "Sobha Atlantis",
    location: "Edappally, Kochi",
    type: "Premium Apartments",
    price: "₹1.2 Cr onwards",
    bedrooms: "2 & 3 BHK",
    area: "1300 - 2600 sq.ft.",
    completion: "Dec 2025",
    description: "Iconic residential towers with modern design and luxury amenities. Features include clubhouse, swimming pool, fitness center, and landscaped gardens in a prime location.",
    highlights: [
      "Iconic architecture",
      "Premium amenities",
      "Strategic location",
      "Smart home features"
    ],
    image: "/lovable-uploads/75e88124-96b4-4c9d-b48f-3a62f0fa8f21.png",
    fallbackImage: "https://via.placeholder.com/600x400?text=Sobha+Atlantis"
  },
  {
    id: 3,
    name: "Sobha Metropolis",
    location: "City Center, Thrissur",
    type: "Luxury Apartments",
    price: "₹1.4 Cr onwards",
    bedrooms: "3 & 4 BHK",
    area: "1800 - 3200 sq.ft.",
    completion: "Ready to Move",
    description: "Urban luxury living in the heart of Thrissur's cultural district. Spacious apartments with premium finishes, dedicated workspace, and proximity to major cultural landmarks.",
    highlights: [
      "Central location",
      "Cultural district",
      "Spacious layouts",
      "Premium specifications"
    ],
    image: "/lovable-uploads/5812dcfb-d442-48cc-8a22-a17ad92bc106.png",
    fallbackImage: "https://via.placeholder.com/600x400?text=Sobha+Metropolis"
  },
  {
    id: 4,
    name: "Sobha Silver Estate",
    location: "Puzhakkal, Thrissur",
    type: "Premium Villas",
    price: "₹1.8 Cr onwards",
    bedrooms: "3 & 4 BHK",
    area: "2500 - 4000 sq.ft.",
    completion: "June 2026",
    description: "Exclusive gated villa community with silver-themed architecture and landscaping. Features spacious plots, private gardens, and premium community facilities.",
    highlights: [
      "Gated community",
      "Spacious villa plots",
      "Exclusive clubhouse",
      "Premium landscaping"
    ],
    image: "/lovable-uploads/cb74d1bf-f525-4c2f-9deb-2a09ac7ee6fe.png",
    fallbackImage: "https://via.placeholder.com/600x400?text=Sobha+Silver+Estate"
  }
];
