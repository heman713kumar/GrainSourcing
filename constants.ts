import { Farm, Product, ProductCategory, Order } from './types';

export const MOCK_FARMS: Farm[] = [
  {
    id: 'f1',
    name: 'Himalayan Organic Estate',
    location: 'Uttarakhand, India',
    country: 'India',
    coordinates: [30.0668, 79.0193],
    certifications: ['USDA Organic', 'EU Organic', 'Fair Trade'],
    story: 'Nestled in the foothills of the Himalayas, this estate uses glacial water for irrigation.',
    imageUrl: 'https://picsum.photos/id/1020/800/600',
  },
  {
    id: 'f2',
    name: 'Golden Plains Cooperative',
    location: 'Saskatchewan, Canada',
    country: 'Canada',
    coordinates: [52.9399, -106.4509],
    certifications: ['COR', 'Non-GMO Project'],
    story: 'A cooperative of 50 family farms dedicated to regenerative agriculture.',
    imageUrl: 'https://picsum.photos/id/1056/800/600',
  },
  {
    id: 'f3',
    name: 'Rift Valley Millets',
    location: 'Nakuru, Kenya',
    country: 'Kenya',
    coordinates: [-0.3031, 36.0800],
    certifications: ['Rainforest Alliance', 'EU Organic'],
    story: 'Preserving ancient millet varieties resilient to climate change.',
    imageUrl: 'https://picsum.photos/id/1068/800/600',
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Premium Basmati Rice',
    category: ProductCategory.RICE,
    pricePerKg: 4.50,
    minOrderKg: 25,
    origin: MOCK_FARMS[0],
    description: 'Extra long grain aromatic rice aged for 18 months.',
    specifications: {
      'Moisture': '< 12%',
      'Purity': '98%',
      'Average Length': '8.2mm'
    },
    imageUrl: 'https://picsum.photos/id/1080/600/400',
    inStock: true,
    certifications: ['USDA Organic', 'EU Organic']
  },
  {
    id: 'p2',
    name: 'Heritage Red Rice',
    category: ProductCategory.RICE,
    pricePerKg: 3.80,
    minOrderKg: 10,
    origin: MOCK_FARMS[0],
    description: 'Nutrient-rich unpolished red rice with a nutty flavor.',
    specifications: {
      'Iron Content': 'High',
      'Fiber': '4g/100g',
      'Crop Year': '2023'
    },
    imageUrl: 'https://picsum.photos/id/1063/600/400',
    inStock: true,
    certifications: ['EU Organic']
  },
  {
    id: 'p3',
    name: 'Finger Millet (Ragi)',
    category: ProductCategory.MILLET,
    pricePerKg: 2.20,
    minOrderKg: 50,
    origin: MOCK_FARMS[2],
    description: 'Calcium-rich supergrain, perfect for gluten-free flour.',
    specifications: {
      'Calcium': '344mg/100g',
      'Protein': '7.3g/100g',
      'Gluten': 'None'
    },
    imageUrl: 'https://picsum.photos/id/1047/600/400',
    inStock: true,
    certifications: ['Rainforest Alliance']
  },
  {
    id: 'p4',
    name: 'Organic Quinoa',
    category: ProductCategory.ANCIENT,
    pricePerKg: 6.50,
    minOrderKg: 20,
    origin: MOCK_FARMS[1],
    description: 'Tri-color quinoa mix, pre-washed and saponin free.',
    specifications: {
      'Protein': 'Complete',
      'Origin': 'Canada',
      'Type': 'Royal'
    },
    imageUrl: 'https://picsum.photos/id/1078/600/400',
    inStock: false,
    certifications: ['COR']
  },
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-7829',
    date: '2023-10-15',
    status: 'Delivered',
    total: 1250.00,
    items: [{ productName: 'Premium Basmati Rice', quantityKg: 200 }, { productName: 'Finger Millet', quantityKg: 100 }],
    documents: ['Invoice-7829.pdf', 'Cert-Batch-A99.pdf', 'Origin-Cert.pdf']
  },
  {
    id: 'ORD-8901',
    date: '2023-11-02',
    status: 'Shipped',
    total: 450.00,
    items: [{ productName: 'Heritage Red Rice', quantityKg: 100 }],
    documents: ['Invoice-8901.pdf']
  },
  {
    id: 'ORD-9102',
    date: '2023-11-20',
    status: 'Processing',
    total: 2100.00,
    items: [{ productName: 'Organic Quinoa', quantityKg: 300 }],
    documents: ['Pro-Forma-Invoice.pdf']
  }
];