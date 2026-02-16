import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Trustees from './pages/Trustees';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Galley from './pages/Gallery';
// import ChurchStandard from './pages/Galley';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = 'Power Embassy Tabernacle - Power Outreach Ministries';
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
      case 'aboutus':
        return <About />;
      case 'trustees':
        return <Trustees />;
      case 'contact':
        return <Contact />;
      case 'donate':
        return <Donate />;
      case 'standard':
      case 'gallery':
        return <Galley />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
