import { Link, useLocation } from "react-router-dom";
import {
  HeartPulse,
  LayoutDashboard,
  Users,
  Stethoscope,
  CalendarCheck,
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "bg-blue-100 text-blue-700"
      : "text-gray-600 hover:bg-gray-50";
  };

  const navItems = [
    { path: "/", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { path: "/patients", label: "Patients", icon: <Users size={20} /> },
    { path: "/services", label: "Services", icon: <Stethoscope size={20} /> },
    {
      path: "/bookings",
      label: "My Bookings",
      icon: <CalendarCheck size={20} />,
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <HeartPulse className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-none">
                  Jhilmil Homecare
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  Caring for your loved ones
                </p>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex space-x-2 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(
                  item.path
                )}`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
