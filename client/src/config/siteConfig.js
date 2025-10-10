/**
 * Site Configuration
 * This file contains all configurable content for the website
 * Last updated: 2025-10-10T17:41:32.625Z
 */

// contactInfo configuration
export const contactInfo = {
  agent: {
    name: "Rick R",
    photo: "https://app.salesgenius.co/api/user-images/49676a71-ecc7-4a46-84d4-dab365d32c0d?v=a0db7c5a5fb253add231abbda097035d42a34d8023417a40c8bea3d785169365",
    phone: "(416) 555-0123",
    email: "rroccasa1@gmail.com",
    company: "HomeLife Partners",
    license: "RECO #84397152",
    repo: "New-Listing-186"
  },
  social: {
    instagram: "https://www.instagram.com/homelifeintl/",
    facebook: "https://www.facebook.com/HomeLifeIntl",
    twitter: "https://twitter.com/executivehomesrealtyinc",
    linkedin: "https://linkedin.com/company/executivehomesrealtyinc"
  }
};

// galleryImages configuration
export const galleryImages = [
  {
    id: 1,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117821674-Wallasey 1.png",
    alt: "Property image 1",
    category: "interior"
  },
  {
    id: 2,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117822015-Wallasey 2.png",
    alt: "Property image 2",
    category: "kitchen"
  },
  {
    id: 3,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117822166-Wallasey 3.png",
    alt: "Property image 3",
    category: "bedroom"
  },
  {
    id: 4,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117822288-Wallasey 4.png",
    alt: "Property image 4",
    category: "bathroom"
  },
  {
    id: 5,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117822423-Wallasey 5.png",
    alt: "Property image 5",
    category: "exterior"
  },
  {
    id: 6,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117822565-Wallasey 6.png",
    alt: "Property image 6",
    category: "interior"
  },
  {
    id: 7,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117822707-Wallasey 7.png",
    alt: "Property image 7",
    category: "kitchen"
  },
  {
    id: 8,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117822849-Wallasey 8.png",
    alt: "Property image 8",
    category: "bedroom"
  },
  {
    id: 9,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117822972-Wallasey 9.png",
    alt: "Property image 9",
    category: "bathroom"
  },
  {
    id: 10,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117823106-Wallasey 10.png",
    alt: "Property image 10",
    category: "exterior"
  },
  {
    id: 11,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117823222-Wallasey 11.png",
    alt: "Property image 11",
    category: "interior"
  },
  {
    id: 12,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117823409-Wallasey 12.png",
    alt: "Property image 12",
    category: "kitchen"
  },
  {
    id: 13,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117823540-Wallasey 13.png",
    alt: "Property image 13",
    category: "bedroom"
  }
];

// heroVideo configuration
export const heroVideo = {
  url: "https://mediatours.ca/property/55-wallasey-avenue-north-york/?access_token=27e8cbc52520b946c9e975e884cf94dc",
  type: "video/mp4",
  autoplay: true,
  loop: true,
  muted: true,
  playsInline: true
};

// homeShowcaseSections configuration  
export const homeShowcaseSections = [
  {
    id: "section1",
    title: "4 Bedrooms",
    description: "Grand Entrance Double closets at the front entrance Expansive kitchen",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117821674-Wallasey 1.png"
  },
  {
    id: "section2",
    title: "4 Bathrooms",
    description: "",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117822015-Wallasey 2.png"
  },
  {
    id: "section3",
    title: "3768 SqFt",
    description: "Spacious living area with ample room for your lifestyle",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117822166-Wallasey 3.png"
  },
  {
    id: "section4",
    title: "$$2,285,000",
    description: "Den on the main floor",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117822288-Wallasey 4.png"
  }
];

// neighborhood configuration
export const neighborhood = {
  name: "Toronto",
  city: "Toronto",
  description: "Toronto's premier destination for culture, dining, and urban living.",
  highlights: [
    "Steps to theaters, dining, and entertainment venues",
    "Direct access to PATH underground walkway", 
    "TTC subway and streetcar connections",
    "Walk to financial district and shopping",
    "Vibrant urban lifestyle with excellent walk score"
  ]
};

// neighborhoodAmenities configuration
export const neighborhoodAmenities = [
  {
    id: 1,
    name: "Local Grocery Store",
    distance: "0.2 miles",
    category: "shopping",
    iconName: "ShoppingBag"
  },
  {
    id: 2,
    name: "Nearby Park",
    distance: "0.1 miles", 
    category: "recreation",
    iconName: "Leaf"
  },
  {
    id: 3,
    name: "Public School",
    distance: "0.6 miles",
    category: "education", 
    iconName: "School"
  },
  {
    id: 4,
    name: "Fine Dining",
    distance: "0.2 miles",
    category: "dining",
    iconName: "Wine"
  },
  {
    id: 5,
    name: "Casual Dining",
    distance: "0.4 miles",
    category: "dining",
    iconName: "Utensils"
  },
  {
    id: 6,
    name: "Transit Station",
    distance: "0.4 miles",
    category: "transportation",
    iconName: "Train"
  }
];

// neighborhoodStats configuration
export const neighborhoodStats = [
  {
    id: 1,
    title: "Walk Score",
    value: "95/100",
    caption: "Walker's Paradise",
    iconName: "BadgeCheck",
    color: "bg-green-500"
  },
  {
    id: 2,
    title: "Transit Score", 
    value: "94/100",
    caption: "Excellent Transit",
    iconName: "Compass",
    color: "bg-blue-500"
  },
  {
    id: 3,
    title: "School Rating",
    value: "8/10", 
    caption: "Great Schools",
    iconName: "School",
    color: "bg-indigo-500"
  },
  {
    id: 4,
    title: "Commute Time",
    value: "8 min",
    caption: "To Financial District",
    iconName: "Clock", 
    color: "bg-amber-500"
  }
];

// openHouseBenefits configuration
export const openHouseBenefits = [
  {
    id: 1,
    title: "Detailed Floor Plans",
    description: "Complete architectural layouts showing the 4 bedroom, 4 bathroom configuration with precise measurements.",
    iconName: "FileText"
  },
  {
    id: 2,
    title: "Recent Neighborhood Sales",
    description: "Comparative market analysis of recent Detached sales in Toronto.",
    iconName: "BarChart2"
  },
  {
    id: 3,
    title: "School District Information", 
    description: "Backs on to a school with full privacy",
    iconName: "GraduationCap"
  },
  {
    id: 4,
    title: "Property Inspection Report",
    description: "Professional assessment highlighting recent upgrades and maintenance history.",
    iconName: "CheckSquare"
  },
  {
    id: 5,
    title: "Financing Options Guide",
    description: "Current mortgage rates and financing programs available for this price range.",
    iconName: "DollarSign"
  },
  {
    id: 6,
    title: "Neighborhood Amenities Map",
    description: "Interactive guide to nearby amenities and transportation options.",
    iconName: "Map"
  }
];

// openHouseDetails configuration
export const openHouseDetails = {
  nextDate: "Saturday, October 18, 2025",
  time: "2:00 PM - 4:00 PM",
  host: "Rick R",
  phone: "undefined",
  email: "rroccasa1@gmail.com",
  ctaText: "RSVP for Open House",
  virtualTourAvailable: false,
  virtualTourUrl: "",
  allOpenHouses: [{"date":"Saturday, October 18, 2025","time":"2:00 PM - 4:00 PM"},{"date":"Sunday, October 19, 2025","time":"2:00 PM - 4:00 PM"}]
};

// packageItems configuration
export const packageItems = [
  {
    id: 1,
    title: "Detailed Floor Plans",
    description: "Complete architectural layouts showing the 4 bedroom, 4 bathroom configuration with precise measurements.",
    iconName: "FileText"
  },
  {
    id: 2,
    title: "Recent Neighborhood Sales",
    description: "Comparative market analysis of recent Detached sales in Toronto.",
    iconName: "BarChart2"
  },
  {
    id: 3,
    title: "School District Information", 
    description: "Backs on to a school with full privacy",
    iconName: "GraduationCap"
  },
  {
    id: 4,
    title: "Property Inspection Report",
    description: "Professional assessment highlighting recent upgrades and maintenance history.",
    iconName: "CheckSquare"
  },
  {
    id: 5,
    title: "Financing Options Guide",
    description: "Current mortgage rates and financing programs available for this price range.",
    iconName: "DollarSign"
  },
  {
    id: 6,
    title: "Neighborhood Amenities Map",
    description: "Interactive guide to nearby amenities and transportation options.",
    iconName: "Map"
  }
];

// property configuration
export const property = {
  name: "55 Wallasey Ave",
  address: {
    street: "55 Wallasey Ave",
    city: "Toronto",
    state: "Ontario",
    zip: "M9M 1E1",
    country: "Canada"
  },
  price: "$2,285,000",
  beds: 4,
  baths: 4,
  sqft: 3768,
  lotSize: "30 x 120 ft",
  yearBuilt: 2010,
  type: "Detached",
  status: "For Sale",
  description: "Huge Lot - 77ft x 166 ft
Custom solid oak floating circular staircase
Finished basement with additional kitchen for multigenerational living",
  shortDescription: "4 BEDS + 4 BATHS in Toronto",
longDescription: "Custom Built Home 3-Car Garage, 9 Car parking Huge 77ft X 166 ft Lot Finished Basement Separate entrance for Basement and Service Stairs",
  mainFeatures: [],
  propertyType: "Detached",
  heroImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117821674-Wallasey 1.png",
  heroCaption: "Custom Built + 3-Car Garage + Huge Lot = Your Perfect Family Home Just Listed!"
};

// propertyFeatures configuration
export const propertyFeatures = [
  "Custom built for existing owner, first time on the market, no wasted space",
  "200 amp service",
  "Den on the main floor",
  "Massive 77ft x 166 ft lot pool size lot, unique to the area",
  "Custom Built large Home at 3,768 sq ft",
  "3-Car Garage"
];

// siteBranding configuration
export const siteBranding = {
  logoUrl: "/logo.svg",
  logoAlt: "55 Wallasey Ave",
  favicon: "/favicon.ico",
  colors: {
    primary: "#D9A566",
    primaryDark: "#8B6839", 
    primaryLight: "#E6C38C",
    dark: "#111111",
    light: "#FFFFFF"
  },
  heroImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117821674-Wallasey 1.png",
  footer: {
    copyrightText: "© 2024 55 Wallasey Ave. All rights reserved.",
    disclaimer: "This website is for informational purposes only. Details are subject to change."
  }
};

// siteMetadata configuration
export const siteMetadata = {
  title: "55 Wallasey Ave | Detached | Toronto",
  description: "Custom Built + 3-Car Garage + Huge Lot = Your Perfect Family Home Just Listed!",
  keywords: "detached, Toronto real estate, 4 bedroom, 4 bathroom, $2,285,000",
  ogImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760117821674-Wallasey 1.png",
  ogType: "website",
  twitterCard: "summary_large_image",
  canonical: "https://55wallaseyave.com"
};

// testimonials configuration
export const testimonials = [
  {
    id: 1,
    name: "David Chen",
    role: "Recent Homebuyer", 
    content: "Rick R provided exceptional service and found us exactly what we were looking for in Toronto.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 2,
    name: "Jennifer Liu",
    role: "Interior Designer",
    content: "The attention to detail and quality of finishes in this property is outstanding. Rick R presented every detail clearly.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Mark Williams", 
    role: "Neighborhood Resident",
    content: "Living in this area, you appreciate the convenience and lifestyle. Rick R knows the market incredibly well.",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg"
  }
];