import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <App />
    <Footer />
  </StrictMode>
  
);