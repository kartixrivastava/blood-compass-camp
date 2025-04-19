
import { BloodGroup, BloodStock, Camp, Donor, FAQ, Testimonial } from "@/types";

export const BLOOD_GROUPS: BloodGroup[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const mockCamps: Camp[] = [
  {
    id: '1',
    name: 'City Hospital Annual Drive',
    organizerName: 'City Hospital',
    date: '2024-05-10',
    time: '09:00-17:00',
    venue: 'City Hospital Main Lobby',
    contactInfo: '123-456-7890',
    donorsCount: 45,
    bloodUnitsCollected: 42,
    location: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: '2',
    name: 'University Campus Drive',
    organizerName: 'Student Medical Association',
    date: '2024-05-15',
    time: '10:00-16:00',
    venue: 'University Main Hall',
    contactInfo: '123-456-7891',
    donorsCount: 60,
    bloodUnitsCollected: 55,
    location: {
      lat: 40.7282,
      lng: -73.9942
    }
  },
  {
    id: '3',
    name: 'Community Center Collection',
    organizerName: 'Red Cross Society',
    date: '2024-05-20',
    time: '08:00-18:00',
    venue: 'Downtown Community Center',
    contactInfo: '123-456-7892',
    donorsCount: 75,
    bloodUnitsCollected: 70,
    location: {
      lat: 40.7112,
      lng: -74.0134
    }
  },
  {
    id: '4',
    name: 'Corporate Wellness Drive',
    organizerName: 'Tech Solutions Inc.',
    date: '2024-05-25',
    time: '10:00-15:00',
    venue: 'Tech Solutions HQ',
    contactInfo: '123-456-7893',
    donorsCount: 30,
    bloodUnitsCollected: 28,
    location: {
      lat: 40.7589,
      lng: -73.9851
    }
  },
  {
    id: '5',
    name: 'Emergency Response Collection',
    organizerName: 'Emergency Services Department',
    date: '2024-06-01',
    time: '08:00-20:00',
    venue: 'City Mall',
    contactInfo: '123-456-7894',
    donorsCount: 120,
    bloodUnitsCollected: 115,
    location: {
      lat: 40.7549,
      lng: -73.9840
    }
  }
];

export const mockDonors: Donor[] = [
  {
    id: '1',
    name: 'John Smith',
    age: 28,
    gender: 'Male',
    bloodGroup: 'A+',
    contact: '123-456-7890',
    email: 'john@example.com',
    campParticipated: 'City Hospital Annual Drive',
    lastDonationDate: '2024-01-15'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    age: 35,
    gender: 'Female',
    bloodGroup: 'O-',
    contact: '123-456-7891',
    email: 'sarah@example.com',
    campParticipated: 'University Campus Drive',
    lastDonationDate: '2024-02-20'
  },
  {
    id: '3',
    name: 'Michael Brown',
    age: 42,
    gender: 'Male',
    bloodGroup: 'B+',
    contact: '123-456-7892',
    email: 'michael@example.com',
    campParticipated: 'Community Center Collection',
    lastDonationDate: '2024-03-05'
  },
  {
    id: '4',
    name: 'Emily Wilson',
    age: 29,
    gender: 'Female',
    bloodGroup: 'AB+',
    contact: '123-456-7893',
    email: 'emily@example.com',
    campParticipated: 'Corporate Wellness Drive',
    lastDonationDate: '2024-03-15'
  },
  {
    id: '5',
    name: 'David Lee',
    age: 31,
    gender: 'Male',
    bloodGroup: 'A-',
    contact: '123-456-7894',
    email: 'david@example.com',
    campParticipated: 'Emergency Response Collection',
    lastDonationDate: '2024-04-10'
  },
  {
    id: '6',
    name: 'Lisa Chen',
    age: 27,
    gender: 'Female',
    bloodGroup: 'O+',
    contact: '123-456-7895',
    email: 'lisa@example.com',
    campParticipated: 'City Hospital Annual Drive',
    lastDonationDate: '2024-04-20'
  }
];

export const mockBloodStock: BloodStock[] = [
  { bloodGroup: 'A+', units: 120 },
  { bloodGroup: 'A-', units: 45 },
  { bloodGroup: 'B+', units: 85 },
  { bloodGroup: 'B-', units: 30 },
  { bloodGroup: 'AB+', units: 25 },
  { bloodGroup: 'AB-', units: 15 },
  { bloodGroup: 'O+', units: 150 },
  { bloodGroup: 'O-', units: 70 }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Robert Martinez',
    quote: 'Donating blood was so easy and the staff was incredibly friendly. It feels great knowing my donation could save someone\'s life!',
    role: 'Regular Donor',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop'
  },
  {
    id: '2',
    name: 'Amanda Clark',
    quote: "After my accident, I needed multiple blood transfusions. I'm alive today because strangers took the time to donate blood. Now I donate regularly to give back.",
    role: 'Blood Recipient',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop'
  },
  {
    id: '3',
    name: 'Dr. James Wilson',
    quote: 'Through our hospital\'s partnership with this platform, we\'ve seen a 40% increase in blood donation, helping us save countless lives during emergencies.',
    role: 'Hospital Director',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&fit=crop'
  }
];

export const mockFAQs: FAQ[] = [
  {
    id: '1',
    question: 'Who can donate blood?',
    answer: 'Most healthy adults who are at least 17 years old (16 in some states with parental consent) and weigh at least 110 pounds can donate blood. However, eligibility criteria can vary based on local regulations.'
  },
  {
    id: '2',
    question: 'How often can I donate blood?',
    answer: 'You can donate whole blood every 56 days (about 8 weeks). If you donate platelets, you can give every 7 days up to 24 times a year.'
  },
  {
    id: '3',
    question: 'How long does the donation process take?',
    answer: 'The entire blood donation process takes about one hour, though the actual donation takes only about 8-10 minutes.'
  },
  {
    id: '4',
    question: 'Is donating blood safe?',
    answer: 'Yes, donating blood is very safe. All equipment is sterile and used only once. You cannot get any infectious disease by donating blood.'
  },
  {
    id: '5',
    question: 'How much blood is taken?',
    answer: "For a whole blood donation, approximately one pint (about 500 ml) is collected, which is about 10% of the blood in an adult's body."
  },
  {
    id: '6',
    question: 'How should I prepare for blood donation?',
    answer: 'Eat a healthy meal, drink plenty of fluids, wear comfortable clothing with sleeves that can be rolled up, and bring your ID and a list of medications you take.'
  }
];

export const bloodDonationFacts = [
  {
    id: '1',
    fact: 'One donation can save up to 3 lives',
    description: 'Your single donation can be separated into red cells, plasma and platelets to help multiple patients.'
  },
  {
    id: '2',
    fact: 'Someone needs blood every 2 seconds',
    description: 'In emergencies and for ongoing medical care, the need for blood is constant.'
  },
  {
    id: '3',
    fact: 'Only 38% of the population is eligible to donate',
    description: 'Yet less than 10% of those eligible actually donate each year.'
  },
  {
    id: '4',
    fact: 'Blood cannot be manufactured',
    description: 'Despite medical and technological advances, blood cannot be artificially made and can only come from donors.'
  }
];
