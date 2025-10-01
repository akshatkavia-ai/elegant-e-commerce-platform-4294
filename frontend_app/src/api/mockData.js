export const mockProducts = [
  {
    id: 'soap-001',
    title: 'Himalaya Herbal Soap',
    price: 250,
    oldPrice: 349,
    badge: '50% Off',
    image: '/assets/figmaimages/figma_image_11_632.png',
  },
  {
    id: 'chips-002',
    title: 'Lays Chips 200gm',
    price: 50,
    oldPrice: 80,
    badge: 'Deal',
    image: '/assets/figmaimages/figma_image_11_505.png',
  },
  {
    id: 'oil-003',
    title: 'Engine Oil 10 Litres',
    price: 2500,
    oldPrice: 2799,
    badge: 'Buy 3 -10%',
    image: '/assets/figmaimages/figma_image_11_379.png',
  },
  {
    id: 'shampoo-004',
    title: 'Pro Shine Shampoo 500ml',
    price: 500,
    oldPrice: 650,
    badge: 'Free delivery',
    image: '/assets/figmaimages/figma_image_15_193.png',
  },
];

export const mockProductById = (id) => mockProducts.find(p => p.id === id);

export function simulateDelay(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
