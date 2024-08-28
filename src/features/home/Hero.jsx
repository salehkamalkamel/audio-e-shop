import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import InfoBox from '../../ui/InfoBox';
import Text from '../../ui/Text';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function Hero() {
  const imgRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);
  const navigate = useNavigate();

  const updateImageHeight = useCallback(() => {
    if (imgRef.current) {
      setImageHeight(imgRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    if (imgRef.current.complete) {
      updateImageHeight();
    }
    window.addEventListener('resize', updateImageHeight);

    return () => {
      window.removeEventListener('resize', updateImageHeight);
    };
  }, [updateImageHeight]);

  return (
    <div
      className="relative bg-black-1 flex items-center justify-center"
      style={{ height: imageHeight ? `${imageHeight}px` : 'auto' }}
    >
      <Container>
        <div className="flex items-center justify-center md:justify-start w-full">
          <InfoBox className="z-20 text-center md:text-left">
            <Text type="overline" className="text-darkGray">
              NEW PRODUCT
            </Text>
            <Heading className="text-white text-4xl sm:text-5xl">
              XX99 Mark II <br /> Headphones
            </Heading>
            <Text type="body" className="text-darkGray sm:max-w-[70%]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Text>
            <Button
              type="btn-1"
              onClick={() => navigate('/products/headphones/product/1')}
            >
              See Product
            </Button>
          </InfoBox>
        </div>
      </Container>

      {/* Picture Background */}
      <div className="absolute inset-0 z-0 w-full h-full flex justify-center items-center">
        <picture>
          {/* Desktop image */}
          <source
            srcSet="/home/desktop/image-hero.jpg"
            media="(min-width: 1024px)"
          />
          {/* Tablet image */}
          <source
            srcSet="/home/tablet/image-header.jpg"
            media="(min-width: 768px)"
          />
          {/* Mobile image */}
          <img
            ref={imgRef}
            src="/home/mobile/image-header.jpg"
            className="w-full object-contain"
            alt="Hero Image"
          />
        </picture>
      </div>
    </div>
  );
}
