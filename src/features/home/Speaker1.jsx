import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import InfoBox from '../../ui/InfoBox';
import Text from '../../ui/Text';

export default function Speaker1() {
  return (
    <div>
      <Container>
        <div className="bg-primary rounded-[8px] grid grid-flow-row md:grid-cols-2 items py-12 px-8 gap-12 sm:py-14 sm:px-10 sm:gap-14 md:py-0 md:gap-24 md:px-24 md:pt-24 overflow-hidden">
          <div className="flex flex-col items-center justify-center md:justify-end">
            <picture className="md:mb-[-1rem]">
              <source
                srcSet="/home/desktop/image-speaker-zx9.png"
                media="(min-width: 1024px)"
              />
              <source
                srcSet="/home/tablet/image-speaker-zx9.png"
                media="(min-width: 768px)"
              />
              <img
                src="/home/mobile/image-speaker-zx9.png"
                alt="ZX9 Speaker"
                className=""
              />
            </picture>
          </div>
          <div>
            <InfoBox>
              <Heading as="h2" className="text-white">
                ZX9 <br />
                SPEAKER
              </Heading>
              <Text type="body" className="text-lightGray sm:max-w-[70%]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </Text>
              <Button type="btn-4">See Product</Button>
            </InfoBox>
          </div>
        </div>
      </Container>
    </div>
  );
}
