import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';

export default function About() {
  return (
    <div>
      <Container>
        <div className="grid grid-flow-row md:grid-cols-2 gap-16">
          <div className="flex flex-col items-center justify-center gap-8 text-center md:text-start md:items-start order-2 md:order-1">
            <Heading as="h2" className="text-black">
              Bringing you the
              <br /> <span className="text-primary">best</span> audio gear
            </Heading>
            <Text type="body" className="text-black opacity-75">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </Text>
          </div>
          <div className="flex items-center justify-center order-1 md:order-2">
            <img src="/home/image-best-gear.jpg" className="rounded-[0.5rem]" />
          </div>
        </div>
      </Container>
    </div>
  );
}
