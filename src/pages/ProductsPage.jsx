import ProductShow from '../features/product/ProductShow';
import SuggestionList from '../features/products/SuggestionList';

const products = [
  {
    name: 'XX99 Mark II Headphones',
    isNew: true,
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    image: {
      mobile: '/product-xx99-mark-two-headphones/mobile/image-product.jpg',
      tablet: '/product-xx99-mark-two-headphones/tablet/image-product.jpg',
      desktop: '/product-xx99-mark-two-headphones/desktop/image-product.jpg',
    },
    alt: 'XX99 Mark II Headphones',
    id: 1,
    details: {
      price: 12.3,
      images: [
        '/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg',
        '/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg',
        '/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
      ],
      inBox: [
        { title: 'Headphone Unit', count: 1 },
        { title: 'Replacement Earcups', count: 2 },
        { title: 'User Manual', count: 1 },
        { title: '3.5mm 5m Audio Cable', count: 1 },
        { title: 'Travel Bag', count: 1 },
      ],
      features: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
    },
  },
  {
    name: 'XX99 Mark II Headphones',
    isNew: true,
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    image: {
      mobile: '/product-xx99-mark-two-headphones/mobile/image-product.jpg',
      tablet: '/product-xx99-mark-two-headphones/tablet/image-product.jpg',
      desktop: '/product-xx99-mark-two-headphones/desktop/image-product.jpg',
    },
    alt: 'XX99 Mark II Headphones',
    id: 1,
    details: {
      price: 12.3,
      images: [
        '/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg',
        '/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg',
        '/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
      ],
      inBox: [
        { title: 'Headphone Unit', count: 1 },
        { title: 'Replacement Earcups', count: 2 },
        { title: 'User Manual', count: 1 },
        { title: '3.5mm 5m Audio Cable', count: 1 },
        { title: 'Travel Bag', count: 1 },
      ],
      features: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
    },
  },
  {
    name: 'XX99 Mark II Headphones',
    isNew: true,
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    image: {
      mobile: '/product-xx99-mark-two-headphones/mobile/image-product.jpg',
      tablet: '/product-xx99-mark-two-headphones/tablet/image-product.jpg',
      desktop: '/product-xx99-mark-two-headphones/desktop/image-product.jpg',
    },
    alt: 'XX99 Mark II Headphones',
    id: 1,
    details: {
      price: 12.3,
      images: [
        '/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg',
        '/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg',
        '/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
      ],
      inBox: [
        { title: 'Headphone Unit', count: 1 },
        { title: 'Replacement Earcups', count: 2 },
        { title: 'User Manual', count: 1 },
        { title: '3.5mm 5m Audio Cable', count: 1 },
        { title: 'Travel Bag', count: 1 },
      ],
      features: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
    },
  },
];
export default function ProductsPage() {
  return (
    <>
      <SuggestionList />
      <ProductShow product={products[0]} />;
    </>
  );
}
