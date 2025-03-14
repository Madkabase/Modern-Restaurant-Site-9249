import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-[url('/lapin-plat.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Découvrez une Expérience Culinaire Unique
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Savourez chaque moment avec notre cuisine exquise et notre ambiance élégante
          </p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-amber-700 transition">
            Voir le Menu
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;