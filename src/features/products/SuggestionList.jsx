import products from '../../data';
import Container from '../../ui/Container';
import ProductForYou from '../product/ProductForYou';

export default function SuggestionList() {
  return (
    <Container>
      <div className="flex flex-col sm:flex-row">
        {products.headphones.map((product) => (
          <ProductForYou product={product} key={product.id} />
        ))}
      </div>
    </Container>
  );
}
