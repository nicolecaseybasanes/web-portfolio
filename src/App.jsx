import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Work from './pages/Work';
import SplashScreen from './components/SplashScreen';

function ScrollToHashElement() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // 1. I-disable ang browser scroll restoration (para hindi mag-jump sa huling scroll)
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. I-force sa taas (Hero section) kapag nagbago ang page
    window.scrollTo(0, 0);

    // 3. Kung may hash (e.g. /#activities), doon pumunta
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
    }
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <SplashScreen />
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