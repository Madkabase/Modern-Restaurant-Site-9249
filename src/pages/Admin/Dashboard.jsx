import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { FaUsers, FaShoppingCart, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';

const Dashboard = () => {
  const salesData = {
    xAxis: {
      type: 'category',
      data: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      smooth: true
    }],
    tooltip: {
      trigger: 'axis'
    }
  };

  const popularDishes = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [{
      type: 'pie',
      radius: '50%',
      data: [
        { value: 235, name: 'Lapin Pané' },
        { value: 274, name: 'Kedjenou' },
        { value: 310, name: 'Lapin Fumé' },
        { value: 335, name: 'Poulet Kéch' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tableau de Bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Ventes Totales</p>
              <h3 className="text-2xl font-bold">1,234,567 CFA</h3>
            </div>
            <FaMoneyBillWave className="text-3xl text-amber-600" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Commandes</p>
              <h3 className="text-2xl font-bold">156</h3>
            </div>
            <FaShoppingCart className="text-3xl text-amber-600" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Clients</p>
              <h3 className="text-2xl font-bold">1,893</h3>
            </div>
            <FaUsers className="text-3xl text-amber-600" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Croissance</p>
              <h3 className="text-2xl font-bold">+12.5%</h3>
            </div>
            <FaChartLine className="text-3xl text-amber-600" />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Ventes Hebdomadaires</h2>
          <ReactECharts option={salesData} style={{ height: '300px' }} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Plats Populaires</h2>
          <ReactECharts option={popularDishes} style={{ height: '300px' }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;