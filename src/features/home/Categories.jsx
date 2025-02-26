import Container from '../../ui/Container';
import MobileMenuItem from '../../ui/MobileMenuItem';

const categoryItems = [
  {
    imageSrc: '/mobile-menu/headphone.svg',
    altText: 'Headphone image',
    label: 'Headphones',
    path: '/products/headphones',
  },
  {
    imageSrc: '/mobile-menu/speaker.svg',
    altText: 'Speaker image',
    label: 'Speakers',
    path: '/products/speakers',
  },
  {
    imageSrc: '/mobile-menu/earphone.svg',
    altText: 'Earphone image',
    label: 'Earphones',
    path: '/products/earphones',
  },
];

export default function Categories() {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-12 my-12">
          {categoryItems.map((item, index) => (
            <MobileMenuItem
              key={index}
              imageSrc={item.imageSrc}
              altText={item.altText}
              label={item.label}
              path={item.path}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
