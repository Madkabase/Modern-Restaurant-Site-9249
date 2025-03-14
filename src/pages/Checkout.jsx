import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const itemName = queryParams.get('item');
  const price = queryParams.get('price');

  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', { 
      state: { 
        orderDetails,
        itemName,
        price
      } 
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
          
          <div className="mb-8 p-4 bg-amber-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between items-center">
              <span>{itemName}</span>
              <span className="font-bold">{price}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                required
                value={orderDetails.name}
                onChange={(e) => setOrderDetails({...orderDetails, name: e.target.value})}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                value={orderDetails.email}
                onChange={(e) => setOrderDetails({...orderDetails, email: e.target.value})}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Delivery Address</label>
              <textarea
                required
                value={orderDetails.address}
                onChange={(e) => setOrderDetails({...orderDetails, address: e.target.value})}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                rows="3"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                required
                value={orderDetails.phone}
                onChange={(e) => setOrderDetails({...orderDetails, phone: e.target.value})}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Special Instructions</label>
              <textarea
                value={orderDetails.notes}
                onChange={(e) => setOrderDetails({...orderDetails, notes: e.target.value})}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                rows="2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700 transition font-medium"
            >
              Proceed to Payment
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;