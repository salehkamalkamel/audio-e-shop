import { useEffect, useState, useRef, useCallback } from 'react';
import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import { useNavigate } from 'react-router-dom';

export default function Earbods() {
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

  const handleImageLoad = () => {
    updateImageHeight();
  };

  return (
    <div>
      <Container>
        <div className="grid grid-flow-row md:grid-cols-2 gap-4">
          <div
            className="rounded-[0.5rem] flex relative"
            style={{ height: imageHeight ? `${imageHeight}px` : 'auto' }}
          >
            <picture className="absolute inset-0 rounded-[0.5rem]">
              <source
                srcSet="/home/desktop/image-earphones-yx1.jpg"
                media="(min-width: 1024px)"
              />
              <source
                srcSet="/home/tablet/image-earphones-yx1.jpg"
                media="(min-width: 768px)"
              />
              <img
                src="/home/mobile/image-earphones-yx1.jpg"
                className="rounded-[0.5rem] w-full"
                id="earphones-image"
                ref={imgRef}
                onLoad={handleImageLoad}
              />
            </picture>
          </div>
          <div className="bg-darkGray rounded-[0.5rem] flex flex-col items-center justify-center gap-8 py-12">
            <Heading as="h3" className="text-black">
              YX1 EARPHONES
            </Heading>
            <Button
              type="btn-2"
              onClick={() => navigate('/products/earphones/product/6')}
            >
              See Product
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
