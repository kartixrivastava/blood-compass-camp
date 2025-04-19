
export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type Gender = 'Male' | 'Female' | 'Other';

export interface Donor {
  id: string;
  name: string;
  age: number;
  gender: Gender;
  bloodGroup: BloodGroup;
  contact: string;
  email: string;
  campParticipated: string;
  lastDonationDate: string;
  photoUrl?: string;
}

export interface Camp {
  id: string;
  name: string;
  organizerName: string;
  date: string;
  time: string;
  venue: string;
  contactInfo: string;
  donorsCount?: number;
  bloodUnitsCollected?: number;
  location?: {
    lat: number;
    lng: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  role: string;
  imageUrl?: string;
}

export interface Statistic {
  id: string;
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
}

export interface BloodStock {
  bloodGroup: BloodGroup;
  units: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'organizer' | 'hospital' | 'volunteer';
}
