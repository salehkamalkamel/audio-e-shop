import { useParams } from 'react-router-dom';
import products from '../data';
import ProductItem from '../features/products/ProductItem';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Categories from '../features/home/Categories';
import About from '../features/home/About';

export default function ProductsPage() {
  const { productName } = useParams();
  return (
    <div className="flex flex-col items-center justify-center gap-32 pb-40">
      <div className="w-full text-center bg-black-1 text-white py-20">
        <Heading as="h2">{productName}</Heading>
      </div>
      <Container className="flex flex-col gap-32">
        <div className="flex flex-col items-center justify-center gap-20 sm:gap-32">
          {products[productName].map((product, idx) => {
            return (
              <ProductItem product={product} key={idx} reverse={idx % 2} />
            );
          })}
        </div>
        <Categories />
        <About />
      </Container>
    </div>
  );
}
