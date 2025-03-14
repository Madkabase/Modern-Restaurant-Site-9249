import { motion } from 'framer-motion';

const Menu = () => {
  const categories = [
    {
      name: "Lapin (Rabbit)",
      items: [
        {
          name: "Lapin Pané + Frite",
          price: "16500 CFA",
          description: "Lapin assaisonné et cuit à la panure",
          image: "path_to_lapin_pane.jpg"
        },
        {
          name: "Lapin Fumé + Attiéké",
          price: "15500 CFA",
          description: "Lapin assaisonné et cuit au feu de bois ou de charbon",
          image: "path_to_lapin_fume.jpg"
        },
        {
          name: "Lapin Pané",
          price: "15500 CFA",
          description: "Lapin assaisonné et cuit à la panure",
          image: "path_to_lapin_pane_simple.jpg"
        }
      ]
    },
    {
      name: "Spécialités",
      items: [
        {
          name: "Kedjenou de pintade",
          price: "16000 CFA",
          description: "Pintade soupée",
          image: "path_to_kedjenou.jpg"
        },
        {
          name: "Soupe D'un Lapin",
          price: "15500 CFA",
          description: "Kedjenou de lapin à multiples saveurs",
          image: "path_to_soupe_lapin.jpg"
        },
        {
          name: "Lapin entier sauté",
          price: "15500 CFA",
          description: "Citrouille de lapin",
          image: "path_to_lapin_saute.jpg"
        }
      ]
    },
    {
      name: "Portions",
      items: [
        {
          name: "Demi-Lapin Fumé + Attiéké",
          price: "8000 CFA",
          description: "Lapin assaisonné et cuit au feu de bois ou de charbon",
          image: "path_to_demi_fume.jpg"
        },
        {
          name: "Demi-Lapin Pané",
          price: "8000 CFA",
          description: "Lapin assaisonné et cuit à la panure",
          image: "path_to_demi_pane.jpg"
        },
        {
          name: "Demi-lapin sauté",
          price: "8000 CFA",
          description: "Citrouille de Lapin",
          image: "path_to_demi_saute.jpg"
        },
        {
          name: "Poulet Kéch",
          price: "7500 CFA",
          description: "Poulet grillé à la sauce verte",
          image: "path_to_poulet_kech.jpg"
        }
      ]
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Notre Menu</h1>
          <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{category.name}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xl font-bold text-amber-600">{item.price}</span>
                        <button 
                          onClick={() => window.location.hash = `/checkout?item=${encodeURIComponent(item.name)}&price=${item.price}`}
                          className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition text-sm"
                        >
                          Commander
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;