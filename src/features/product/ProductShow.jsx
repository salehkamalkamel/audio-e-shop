import { useState } from 'react';
import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Counter from '../../ui/Counter';
import Heading from '../../ui/Heading';
import InfoBox from '../../ui/InfoBox';
import Text from '../../ui/Text';
import { useNavigate } from 'react-router-dom';

export default function ProductShow({ product, reverse }) {
  const { name, isNew, description, image, alt, details } = product;
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  return (
    <Container>
      <button
        onClick={() => navigate(-1)}
        className="text-darkGray hover:text-primary outline-none bg-transparent my-12"
      >
        Go Back
      </button>
      <div className="flex flex-col gap-24 items-center">
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
            <Heading as="h6">${details.price}</Heading>
            <div className="flex gap-4">
              <Counter min={0} max={10} value={value} setValue={setValue} />
              <Button type="btn-1">SEE PRODUCT</Button>
            </div>
          </InfoBox>
        </div>
        <div className="grid grid-flow-row md:grid-cols-[2fr_1fr] gap-x-24 items-start">
          <div className="flex flex-col items-start justify-center gap-8">
            <Heading as="h3">Features</Heading>
            <Text type="body">{details.features}</Text>
          </div>
          <div className="flex flex-col items-start justify-center gap-8">
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
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-8">
            <img src={details.images[0]} className="rounded-[0.5rem]" />
            <img src={details.images[2]} className="rounded-[0.5rem]" />
          </div>
          <div>
            <img
              src={details.images[1]}
              className="rounded-[0.5rem] row-span-2"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
