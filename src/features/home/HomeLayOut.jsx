import About from './About';
import Categories from './Categories';
import Earbods from './Earbods';
import Hero from './Hero';
import Speaker1 from './Speaker1';
import Speaker2 from './Speaker2';

export default function HomeLayOut() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Categories />
      <div className="flex flex-col gap-4">
        <Speaker1 />
        <Speaker2 />
        <Earbods />
      </div>
      <About />
    </div>
  );
}
