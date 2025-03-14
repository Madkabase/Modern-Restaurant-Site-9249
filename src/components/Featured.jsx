import { motion } from 'framer-motion';

const Featured = () => {
  const dishes = [
    {
      name: "Lapin Fumé + Attiéké",
      description: "Lapin assaisonné et cuit au feu de bois",
      price: "15500 CFA",
      image: "/path_to_lapin_fume.jpg"
    },
    {
      name: "Kedjenou de Pintade",
      description: "Pintade mijotée aux épices traditionnelles",
      price: "16000 CFA",
      image: "/path_to_kedjenou.jpg"
    },
    {
      name: "Lapin Pané + Frite",
      description: "Lapin croustillant servi avec des frites maison",
      price: "16500 CFA",
      image: "/path_to_lapin_pane.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Plats Vedettes</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">{dish.price}</span>
                  <button className="text-amber-600 hover:text-amber-700 font-medium">
                    Commander
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;