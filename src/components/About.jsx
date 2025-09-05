import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Hammer, Shield, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Hammer,
      title: 'Experiencia Comprobada',
      description: 'Más de 15 años transformando hogares con técnicas profesionales y materiales de primera calidad.'
    },
    {
      icon: Shield,
      title: 'Garantía Total',
      description: 'Todos nuestros trabajos incluyen garantía completa. Tu tranquilidad es nuestra prioridad.'
    },
    {
      icon: Clock,
      title: 'Entrega Puntual',
      description: 'Cumplimos con los tiempos acordados. Planificamos cada proyecto para entregar en fecha.'
    }
  ];

  const services = [
    'Remodelación completa de casas',
    'Renovación de cocinas y baños',
    'Pintura interior y exterior',
    'Instalaciones eléctricas y plomería',
    'Pisos y azulejos',
    'Techos y impermeabilización'
  ];

  return (
    <section id="nosotros" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre <span className="text-blue-600">Nosotros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una empresa familiar dedicada a las refacciones generales, 
            comprometidos con la excelencia y la satisfacción de nuestros clientes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Transformamos Espacios, Creamos Hogares
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Desde nuestros inicios, hemos trabajado con la filosofía de que cada hogar 
              merece ser un espacio especial. Nuestro equipo de profesionales altamente 
              capacitados se dedica a convertir tus ideas en realidad, utilizando las 
              mejores técnicas y materiales del mercado.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Nos especializamos en refacciones integrales, desde pequeñas renovaciones 
              hasta transformaciones completas. Cada proyecto es único y lo tratamos 
              con el cuidado y atención que merece.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Nuestros Servicios:</h4>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img  
                className="w-full h-96 object-cover"
                alt="Equipo de trabajo profesional en refacciones"
               src="https://images.unsplash.com/photo-1629195352955-850830e4d6c9" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Equipo Profesional</h4>
                <p className="text-gray-200">Comprometidos con la excelencia</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;