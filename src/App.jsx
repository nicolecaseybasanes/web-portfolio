import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Work from './pages/Work';

function App() {
  return (
    <Router>
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