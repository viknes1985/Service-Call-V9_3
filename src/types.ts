export enum Category {
  ELECTRICAL = "Electrical related",
  PLUMBER = "Plumber",
  CONSTRUCTION = "Construction",
  ROOF_CLEANING = "Roof Cleaning",
  PAINTING = "Painting",
  CLEANING = "Cleaning",
  WELDING = "Welding",
  PLANTING = "Planting",
  CARPENTERING = "Carpentering",
  OTHERS = "Others"
}

export interface Rating {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  isHidden: boolean;
  createdAt: number;
  raterName?: string;
}

export interface Service {
  id: string;
  state: string;
  town: string;
  category: Category;
  providerName: string;
  description: string;
  contactNumber: string;
  operatingHours: string;
  photoUrls?: string[];
  createdAt: number;
  createdBy: string;
  creatorName?: string;
  avgRating?: number;
  ratingCount?: number;
  userRating?: number;
  status: 'pending' | 'approved' | 'rejected';
  nudgeCount: number;
  lastNudgeAt: number;
  isSponsored?: boolean;
  type: 'Provider' | 'Consumer' | 'Admin';
  isVerified: boolean;
  allRatings?: Rating[];
}

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
}

export interface Sponsor {
  id: string;
  name: string;
  phone: string;
  email: string;
  photoUrls: string[];
  isEnabled: boolean;
  createdAt: number;
}
