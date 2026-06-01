// Test Types
export interface Test {
  id: string;
  name: string;
  price: number;
  description: string;
  duration: string;
  fasting: boolean;
  sample: string;
  preparation: string[];
  reportTime: string;
  category: string;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  tests: string[];
  discount?: number;
  validity: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  qualification: string;
  image: string;
  phone: string;
  email: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  city: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  testId: string;
  date: string;
  time: string;
  collectionType: 'home' | 'center';
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface HomeCollection {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  tests: string[];
  preferredDate: string;
  preferredTime: string;
  status: 'pending' | 'scheduled' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'replied' | 'resolved';
  createdAt: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface InsurancePartner {
  id: string;
  name: string;
  logo: string;
  coverageTypes: string[];
}
