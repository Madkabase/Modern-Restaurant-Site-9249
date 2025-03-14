import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Notre Histoire</h1>
            <div className="w-20 h-1 bg-amber-600"></div>
            <p className="text-gray-600">
              Fondé avec une passion pour la cuisine exceptionnelle du lapin, 
              Lapin Chap Chap sert des plats authentiques et innovants qui 
              combinent les saveurs traditionnelles avec des techniques culinaires modernes.
            </p>
            <p className="text-gray-600">
              Nous croyons en des pratiques durables et travaillons en étroite 
              collaboration avec les agriculteurs locaux pour garantir des 
              ingrédients de la plus haute qualité tout en soutenant notre communauté.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="/lapin-chap-chap-logo.png"
              alt="Lapin Chap Chap Restaurant"
              className="w-full h-[400px] object-contain bg-black"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;