
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-edu-light p-6">
      <div className="w-full max-w-md text-center animate-fade-in">
        <div className="w-24 h-24 rounded-xl bg-edu-primary/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-6xl font-bold text-edu-primary">404</span>
        </div>
        
        <h1 className="text-3xl font-bold text-edu-dark mb-4">Halaman Tidak Ditemukan</h1>
        
        <p className="text-lg text-edu-dark/70 mb-8">
          Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="button-primary w-full sm:w-auto">
            <span className="flex items-center justify-center">
              <Home className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </span>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="button-secondary w-full sm:w-auto"
          >
            <span className="flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
