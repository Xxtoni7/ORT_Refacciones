import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";


function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>ORT refacciones - Especialistas en Refacciones Generales</title>
        <meta name="description" content="Empresa líder en refacciones generales. Transformamos espacios con calidad y profesionalismo. Contáctanos para tu próximo proyecto." />
        <meta property="og:title" content="ORTRefacciones - Especialistas en Refacciones Generales" />
        <meta property="og:description" content="Empresa líder en refacciones generales. Transformamos espacios con calidad y profesionalismo." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <Toaster />
      </motion.div>
    </div>
  );
}

export default App;