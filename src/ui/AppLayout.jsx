import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <main className="relative">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
