import { useParams } from 'react-router-dom';
import products from '../data';
import ProductShow from '../features/product/ProductShow';
import Container from '../ui/Container';
import SuggestionList from '../features/products/SuggestionList';
import Categories from '../features/home/Categories';
import About from '../features/home/About';

export default function ProductPage() {
  const { productName, productId } = useParams();
  const product = products[productName].find(
    (product) => product.id === +productId
  );
  return (
    <div className="pb-24">
      <ProductShow product={product} />
      <Container className="flex flex-col gap-16 sm:gap-24">
        <SuggestionList />
        <Categories />
        <About />
      </Container>
    </div>
  );
}
