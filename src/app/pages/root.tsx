import { Outlet } from 'react-router';
import { NavbarPremium } from '../components/navbar-premium';

export default function Root() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <NavbarPremium />
      <Outlet />
    </div>
  );
}
