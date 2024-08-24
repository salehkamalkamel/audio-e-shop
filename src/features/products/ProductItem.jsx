import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import InfoBox from '../../ui/InfoBox';
import Text from '../../ui/Text';

export default function ProductItem({ product, reverse }) {
  const { name, isNew, description, image, alt, id } = product;
  const navigate = useNavigate();
  return (
    <Container>
      <div className="grid grid-flow-row md:grid-cols-2 items-center justify-center  md:justify-start gap-x-24 gap-y-8">
        <div className={`flex ${reverse && 'md:order-2'}`}>
          <picture>
            <source srcSet={image.desktop} media="(min-width: 1024px)" />
            <source srcSet={image.tablet} media="(min-width: 768px)" />
            <img src={image.mobile} alt={alt} />
          </picture>
        </div>
        <InfoBox className={`${reverse && 'order-1'}`}>
          {isNew && (
            <Text type="overline" className="text-primary">
              New Product
            </Text>
          )}
          <Heading as="h2">{name}</Heading>
          <Text type="body" className="text-black opacity-75">
            {description}
          </Text>
          <Button type="btn-1" onClick={() => navigate(`product/${id}`)}>
            SEE PRODUCT
          </Button>
        </InfoBox>
      </div>
    </Container>
  );
}
