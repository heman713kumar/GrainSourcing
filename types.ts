export enum ProductCategory {
  RICE = 'Rice',
  MILLET = 'Millet',
  ANCIENT = 'Ancient Grains',
  PULSES = 'Pulses'
}

export interface Farm {
  id: string;
  name: string;
  location: string;
  country: string;
  coordinates: [number, number]; // lat, long mockup
  certifications: string[];
  story: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  pricePerKg: number;
  minOrderKg: number;
  origin: Farm;
  description: string;
  specifications: Record<string, string>;
  imageUrl: string;
  inStock: boolean;
  certifications: string[];
}

export interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Pending Certification';
  total: number;
  items: { productName: string; quantityKg: number }[];
  documents: string[]; // URLs to PDFs
}

export type ViewState = 'OPENING' | 'HOME' | 'CATALOG' | 'SOURCING' | 'DASHBOARD' | 'PRODUCT_DETAIL';