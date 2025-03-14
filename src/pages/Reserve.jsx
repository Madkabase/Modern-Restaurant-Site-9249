import { motion } from 'framer-motion';
import { useState } from 'react';

const Reserve = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Réservation soumise:', formData);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Réserver une Table</h1>
          <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Date</label>
              <input 
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Heure</label>
              <input 
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Nombre de Personnes</label>
            <select 
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              {[1,2,3,4,5,6,7,8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Personne' : 'Personnes'}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Nom Complet</label>
            <input 
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Téléphone</label>
              <input 
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Demandes Spéciales</label>
            <textarea 
              value={formData.specialRequests}
              onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700 transition font-medium"
          >
            Confirmer la Réservation
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Reserve;