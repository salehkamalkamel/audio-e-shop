import { useNavigate } from 'react-router-dom';
import CheckOutMenu from './CheckOutMenu';
import Container from '../../ui/Container';
import SummaryMenu from './SummaryMenu';

export default function CheckOutLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-12 items-start">
      <Container>
        <button
          onClick={() => navigate(-1)}
          className="text-darkGray hover:text-primary outline-none bg-transparent my-12"
        >
          Go Back
        </button>
        <div className="flex flex-col  justify-center md:grid grid-cols-[2fr_1fr] gap-8">
          <CheckOutMenu />
          <SummaryMenu />
        </div>
      </Container>
    </div>
  );
}
