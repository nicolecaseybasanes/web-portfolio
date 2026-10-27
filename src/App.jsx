import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Work from './pages/Work';

// This component listens for URL hash changes (like #activities) and scrolls to them
function ScrollToHashElement() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Timeout ensures the page has fully rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
    } else {
      // Scroll to top if there is no hash (e.g., when clicking "Home" in the navbar)
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="min-h-screen font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;