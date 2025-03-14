import { motion } from 'framer-motion';

const FoodRecommendation = () => {
  const recommendations = [
    {
      name: "Lapin Pané + Frite",
      image: "/path_to_your_image1.jpg",
      price: "16500 CFA",
      rating: 4.9,
      reviews: 128,
      description: "Lapin assaisonné et cuit à la panure"
    },
    {
      name: "Kedjenou de pintade",
      image: "/path_to_your_image2.jpg",
      price: "16000 CFA",
      rating: 4.8,
      reviews: 156,
      description: "Pintade soupée"
    },
    {
      name: "Lapin Fumé + Attiéké",
      image: "/path_to_your_image3.jpg",
      price: "15500 CFA",
      rating: 4.7,
      reviews: 142,
      description: "Lapin assaisonné et cuit au feu de bois ou de charbon"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Plats les Plus Populaires</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <span className="text-amber-500">★</span>
                    <span className="font-medium">{item.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">{item.reviews} avis</span>
                  <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                </div>
                <button 
                  onClick={() => window.location.hash = `/checkout?item=${encodeURIComponent(item.name)}&price=${item.price}`}
                  className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition"
                >
                  Commander
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodRecommendation;