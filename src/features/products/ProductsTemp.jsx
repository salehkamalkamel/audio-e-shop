import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import About from '../home/About';
import Categories from '../home/Categories';
import ProductItem from './ProductItem';

export default function ProductTemp({ title, products }) {
  return (
    <div>
      <div className="bg-black-1 flex justify-center py-24">
        <Heading as="h2" className="text-white">
          {title}
        </Heading>
      </div>
      <Container>
        <div className="flex flex-col gap-12">
          {products.map((product, idx) => (
            <ProductItem product={product} key={idx} reverse={idx % 2} />
          ))}
        </div>
        <Categories />
        <About />
      </Container>
    </div>
  );
}
