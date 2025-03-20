
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-soft py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-fluid flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-2xl font-bold text-edu-dark"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-edu-primary to-edu-accent flex items-center justify-center text-white font-bold">
            E
          </div>
          <span className="hidden sm:inline">EduVerse AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-edu-primary transition-colors">
            Beranda
          </Link>
          <Link to="/features" className="font-medium hover:text-edu-primary transition-colors">
            Fitur
          </Link>
          <Link to="/pricing" className="font-medium hover:text-edu-primary transition-colors">
            Harga
          </Link>
          <Link to="/about" className="font-medium hover:text-edu-primary transition-colors">
            Tentang Kami
          </Link>
          <Link to="/contact" className="font-medium hover:text-edu-primary transition-colors">
            Kontak
          </Link>
        </nav>

        {/* Login/Register Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="button-ghost flex items-center space-x-2">
            <LogIn className="w-4 h-4" />
            <span>Masuk</span>
          </Link>
          <Link to="/login?register=true" className="button-primary flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>Daftar</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-edu-primary/5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-edu-dark" />
          ) : (
            <Menu className="w-6 h-6 text-edu-dark" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-medium p-4 rounded-b-2xl animate-slide-down">
          <nav className="flex flex-col space-y-4 pb-4">
            <Link 
              to="/" 
              className="p-2 rounded-lg hover:bg-edu-primary/5 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link 
              to="/features" 
              className="p-2 rounded-lg hover:bg-edu-primary/5 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fitur
            </Link>
            <Link 
              to="/pricing" 
              className="p-2 rounded-lg hover:bg-edu-primary/5 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Harga
            </Link>
            <Link 
              to="/about" 
              className="p-2 rounded-lg hover:bg-edu-primary/5 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link 
              to="/contact" 
              className="p-2 rounded-lg hover:bg-edu-primary/5 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontak
            </Link>
          </nav>
          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100">
            <Link 
              to="/login" 
              className="p-2 rounded-lg border border-edu-primary/20 text-edu-primary font-medium text-center transition-colors hover:bg-edu-primary/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Masuk
            </Link>
            <Link 
              to="/login?register=true" 
              className="p-2 rounded-lg bg-edu-primary text-white font-medium text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Daftar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
