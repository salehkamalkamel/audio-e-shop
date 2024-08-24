import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';

export default function ProductForYou() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-y-8">
        <picture>
          <source
            srcSet="/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
            media="(min-width:1024px)"
          />
          <source
            srcSet="/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
            media="(min-width:768px)"
          />
          <img
            src="/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
            className="rounded-[0.5rem]"
          />
        </picture>
        <Heading as="h5">XX99 MARK II</Heading>
        <Button type="btn-1">See Product</Button>
      </div>
    </Container>
  );
}
