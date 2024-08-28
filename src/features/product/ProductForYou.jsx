import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';

export default function ProductForYou({ product }) {
  const { name, image, id, category } = product;
  const navigate = useNavigate();
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-y-8">
        <picture>
          <source srcSet={image.desktop} media="(min-width:1024px)" />
          <source srcSet={image.tablet} media="(min-width:768px)" />
          <img src={image.mobile} className="rounded-[0.5rem]" />
        </picture>
        <Heading as="h5" className="text-center">
          {name}
        </Heading>
        <Button
          type="btn-1"
          onClick={() => navigate(`/products/${category}/product/${id}`)}
        >
          See Product
        </Button>
      </div>
    </Container>
  );
}
