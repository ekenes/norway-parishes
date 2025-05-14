import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LazyLoad from 'vanilla-lazyload';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
    useEffect(() => {
        // Initialize LazyLoad when the app starts
        const lazyLoadInstance = new LazyLoad({
            elements_selector: ".lazy"
        });

        return () => lazyLoadInstance.destroy(); // clean up on unmount
    }, []);
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;