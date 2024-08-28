import { useState } from 'react';
import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Counter from '../../ui/Counter';
import Heading from '../../ui/Heading';
import InfoBox from '../../ui/InfoBox';
import Text from '../../ui/Text';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

export default function ProductShow({ product, reverse }) {
  const { name, isNew, description, image, alt, details, id } = product;
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  const { setCartData } = useCart();

  function handleAddToCart() {
    setCartData((prev) => {
      const check = prev.find((product) => product.id === id);
      if (check) {
        return prev.map((product) =>
          product.id === id
            ? { ...product, count: product.count + value }
            : product
        );
      } else {
        return [...prev, { ...product, count: value }];
      }
    });
  }

  return (
    <Container>
      <button
        onClick={() => navigate(-1)}
        className="text-darkGray hover:text-primary bg-transparent my-8 sm:my-12"
      >
        Go Back
      </button>
      <div className="flex flex-col gap-16 sm:gap-24 items-center">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}
        >
          <picture className="w-full">
            <source srcSet={image.desktop} media="(min-width: 1024px)" />
            <source srcSet={image.tablet} media="(min-width: 768px)" />
            <img
              src={image.mobile}
              alt={alt}
              className="w-full rounded-[0.5rem] object-cover"
            />
          </picture>
          <InfoBox className="flex flex-col gap-4">
            {isNew && (
              <Text type="overline" className="text-primary">
                New Product
              </Text>
            )}
            <Heading as="h2" className="text-center md:text-left">
              {name}
            </Heading>
            <Text type="body" className="text-black opacity-75">
              {description}
            </Text>
            <Heading as="h6">${details.price}</Heading>
            <div className="flex gap-4 mt-4">
              <Counter min={1} max={10} value={value} setValue={setValue} />
              <Button type="btn-1" onClick={handleAddToCart}>
                ADD to cart
              </Button>
            </div>
          </InfoBox>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 sm:gap-16">
          <div className="flex flex-col gap-4">
            <Heading as="h3">Features</Heading>
            <Text type="body">{details.features}</Text>
          </div>
          <div className="flex flex-col gap-4">
            <Heading as="h3">In The Box</Heading>
            <ul className="flex flex-col gap-2">
              {details.inBox.map((ele) => (
                <li key={ele.title} className="flex gap-4">
                  <span className="text-primary font-bold">{ele.count}x</span>
                  <Text type="body">{ele.title}</Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <img
              src={details.images[0]}
              alt={`${name} detail 1`}
              className="rounded-[0.5rem] w-full object-cover"
            />
            <img
              src={details.images[2]}
              alt={`${name} detail 2`}
              className="rounded-[0.5rem] w-full object-cover"
            />
          </div>
          <div>
            <img
              src={details.images[1]}
              alt={`${name} detail 3`}
              className="rounded-[0.5rem] w-full object-cover h-full"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
