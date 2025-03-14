import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez-Nous</h1>
          <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-amber-600" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                <p className="text-gray-600">+225 0789632541</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-amber-600" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">contact@lapinchapchap.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-amber-600" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                <p className="text-gray-600">Abidjan, Côte d'Ivoire</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
          >
            <div>
              <label className="block text-gray-700 mb-2">Nom</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"></textarea>
            </div>
            <button type="submit" className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition">
              Envoyer le Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;