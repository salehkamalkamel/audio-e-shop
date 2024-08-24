import { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';

export default function Speaker2() {
  const imgRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

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
        <div
          className="flex items-center justify-start rounded-[8px] relative w-full bg-darkGray"
          style={{ height: imageHeight ? `${imageHeight}px` : 'auto' }}
        >
          <picture className="absolute inset-0 rounded-[0.5rem] w-full">
            <source
              srcSet="/home/desktop/image-speaker-zx7.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/home/tablet/image-speaker-zx7.jpg"
              media="(min-width: 768px)"
            />
            <img
              ref={imgRef}
              src="/home/mobile/image-speaker-zx7.jpg"
              className="rounded-[0.5rem] w-full"
              onLoad={handleImageLoad}
            />
          </picture>
          <div className="flex flex-col  justify-center items-start h-full gap-8 ml-16 z-10">
            <Heading as="h3" className="text-black">
              ZX7 SPEAKER
            </Heading>
            <Button type="btn-2">See Product</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
