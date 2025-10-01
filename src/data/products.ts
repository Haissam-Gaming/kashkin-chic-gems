import { Product } from '@/contexts/CartContext';
import productRing from '@/assets/product-ring.jpg';
import productBracelet from '@/assets/product-bracelet.jpg';
import productNecklace from '@/assets/product-necklace.jpg';
import productEarrings from '@/assets/product-earrings.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Gold Ring',
    price: 12.5,
    category: 'Rings',
    description: 'Elegant gold-plated ring with a timeless design. Perfect for everyday wear or special occasions.',
    image: productRing,
  },
  {
    id: '2',
    name: 'Delicate Chain Bracelet',
    price: 15.0,
    category: 'Bracelets',
    description: 'Beautiful gold-plated chain bracelet that adds a touch of elegance to any outfit.',
    image: productBracelet,
  },
  {
    id: '3',
    name: 'Pendant Necklace',
    price: 18.0,
    category: 'Necklaces',
    description: 'Stunning gold-plated necklace with a delicate pendant. A perfect gift or treat for yourself.',
    image: productNecklace,
  },
  {
    id: '4',
    name: 'Hoop Earrings',
    price: 10.0,
    category: 'Earrings',
    description: 'Classic gold-plated hoop earrings that never go out of style. Lightweight and comfortable.',
    image: productEarrings,
  },
  {
    id: '5',
    name: 'Statement Ring',
    price: 14.0,
    category: 'Rings',
    description: 'Bold gold-plated ring that makes a statement. Perfect for adding glamour to your look.',
    image: productRing,
  },
  {
    id: '6',
    name: 'Layered Necklace',
    price: 22.0,
    category: 'Necklaces',
    description: 'Trendy layered gold-plated necklace for a modern, sophisticated look.',
    image: productNecklace,
  },
  {
    id: '7',
    name: 'Charm Bracelet',
    price: 16.5,
    category: 'Bracelets',
    description: 'Adorable gold-plated charm bracelet with beautiful detailing.',
    image: productBracelet,
  },
  {
    id: '8',
    name: 'Stud Earrings',
    price: 8.5,
    category: 'Earrings',
    description: 'Simple yet elegant gold-plated stud earrings for everyday elegance.',
    image: productEarrings,
  },
];
