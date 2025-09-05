import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X } from 'lucide-react';
import { toast } from "./ui/use-toast";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Remodelación Completa - Casa Familiar',
      category: 'Remodelación Integral',
      beforeImage: 'Old family house before renovation with outdated interior',
      afterImage: 'Modern renovated family house with contemporary design',
      description: 'Transformación completa de una casa familiar de 150m². Incluye renovación de cocina, baños, pisos y pintura general.'
    },
    {
      id: 2,
      title: 'Renovación de Cocina Moderna',
      category: 'Cocinas',
      beforeImage: 'Old outdated kitchen with worn cabinets and appliances',
      afterImage: 'Modern kitchen with white cabinets and granite countertops',
      description: 'Diseño y construcción de cocina moderna con isla central, gabinetes de madera y electrodomésticos de última generación.'
    },
    {
      id: 3,
      title: 'Baño Principal de Lujo',
      category: 'Baños',
      beforeImage: 'Old bathroom with outdated tiles and fixtures',
      afterImage: 'Luxury bathroom with marble tiles and modern fixtures',
      description: 'Renovación completa de baño principal con acabados de lujo, ducha de cristal y vanidad doble.'
    },
    {
      id: 4,
      title: 'Fachada Exterior Contemporánea',
      category: 'Exteriores',
      beforeImage: 'House exterior with old paint and worn facade',
      afterImage: 'Modern house exterior with fresh paint and contemporary design',
      description: 'Renovación de fachada exterior con pintura, jardinería y elementos decorativos modernos.'
    },
    {
      id: 5,
      title: 'Sala de Estar Elegante',
      category: 'Interiores',
      beforeImage: 'Old living room with outdated furniture and decor',
      afterImage: 'Elegant modern living room with stylish furniture',
      description: 'Rediseño completo de sala de estar con pisos nuevos, pintura y diseño de interiores contemporáneo.'
    },
    {
      id: 6,
      title: 'Oficina en Casa Funcional',
      category: 'Espacios Especiales',
      beforeImage: 'Empty room before home office conversion',
      afterImage: 'Modern functional home office with built-in desk and shelving',
      description: 'Conversión de habitación en oficina funcional con escritorio empotrado y sistema de almacenamiento.'
    }
  ];

  const handleViewProject = (project) => {
    setSelectedProject(project);
  };

  const handleQuoteRequest = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! pronto estara! 🚀",
      duration: 5000,
    });
  };

  return (
    <section id="trabajos" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nuestros <span className="text-blue-600">Trabajos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las increíbles transformaciones que hemos realizado. 
            Cada proyecto cuenta una historia de renovación y mejora.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale"
            >
              <div className="relative group">
                <div className="grid grid-cols-2 h-48">
                  <div className="relative overflow-hidden">
                    <img  
                      className="w-full h-full object-cover"
                      alt={`Antes - ${project.title}`}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      ANTES
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img  
                      className="w-full h-full object-cover"
                      alt={`Después - ${project.title}`}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      DESPUÉS
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleViewProject(project)}
                    className="bg-white text-gray-800 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                  >
                    <Eye size={18} />
                    <span>Ver Detalles</span>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                <button
                  onClick={handleQuoteRequest}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
                >
                  Solicitar Cotización Similar
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                  
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative">
                      <img  
                        className="w-full h-64 md:h-96 object-cover"
                        alt={`Antes - ${selectedProject.title}`}
                       src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded font-semibold">
                        ANTES
                      </div>
                    </div>
                    <div className="relative">
                      <img  
                        className="w-full h-64 md:h-96 object-cover"
                        alt={`Después - ${selectedProject.title}`}
                       src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded font-semibold">
                        DESPUÉS
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="text-sm text-blue-600 font-semibold mb-2">{selectedProject.category}</div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedProject.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{selectedProject.description}</p>
                    <button
                      onClick={handleQuoteRequest}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
                    >
                      Solicitar Cotización Similar
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;