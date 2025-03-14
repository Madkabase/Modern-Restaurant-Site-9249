import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lapin-chap-chap-logo.png" 
              alt="Lapin Chap Chap" 
              className="h-12 w-12"
            />
            <span className="text-xl font-bold text-gray-900">Lapin Chap Chap</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-600 transition">Accueil</Link>
            <Link to="/menu" className="text-gray-700 hover:text-amber-600 transition">Menu</Link>
            <Link to="/about" className="text-gray-700 hover:text-amber-600 transition">À Propos</Link>
            <Link to="/contact" className="text-gray-700 hover:text-amber-600 transition">Contact</Link>
          </div>
          
          <Link 
            to="/reserve" 
            className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition"
          >
            Réserver
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;