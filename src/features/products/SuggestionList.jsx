import Container from '../../ui/Container';
import ProductForYou from '../product/ProductForYou';

export default function SuggestionList() {
  return (
    <Container>
      <div className="flex flex-col sm:flex-row">
        <ProductForYou />
        <ProductForYou />
        <ProductForYou />
      </div>
    </Container>
  );
}
