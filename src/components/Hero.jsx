import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Star, Award, Users } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const stats = [
    { icon: Star, value: '500+', label: 'Proyectos Completados' },
    { icon: Award, value: '15+', label: 'Años de Experiencia' },
    { icon: Users, value: '100%', label: 'Clientes Satisfechos' }
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-shadow leading-tight"
          >
            Transformamos
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Tu Hogar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
            Especialistas en refacciones generales con más de 15 años de experiencia. 
            Convertimos tus ideas en realidad con calidad y profesionalismo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale"
            >
              <a href="#trabajos">Ver Nuestros Trabajos</a>
            </Button>
            <Button
              href="#contacto"
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <a href="#contacto">Solicitar Cotización</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                className="glass-effect rounded-2xl p-6 text-center hover-scale"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 👇 Scroll Indicator fuera del container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-white/70"
        >
          <span className="text-sm mb-2">Desliza para conocer más</span>
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
