import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaTachometerAlt, 
  FaShoppingBag, 
  FaClipboardList, 
  FaUsers, 
  FaCog,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { path: '/admin', icon: FaTachometerAlt, label: 'Tableau de Bord' },
    { path: '/admin/products', icon: FaShoppingBag, label: 'Produits' },
    { path: '/admin/orders', icon: FaClipboardList, label: 'Commandes' },
    { path: '/admin/customers', icon: FaUsers, label: 'Clients' },
    { path: '/admin/settings', icon: FaCog, label: 'Paramètres' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        className={`bg-white w-64 shadow-lg fixed h-full z-20`}
      >
        <div className="p-4 border-b">
          <Link to="/admin" className="flex items-center space-x-2">
            <img src="/lapin-chap-chap-logo.png" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">Admin Panel</span>
          </Link>
        </div>
        <nav className="p-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-600 hover:bg-amber-50'
              }`}
            >
              <item.icon className="text-xl" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'ml-64' : ''}`}>
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Admin</span>
              <img
                src="/admin-avatar.jpg"
                alt="Admin"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;