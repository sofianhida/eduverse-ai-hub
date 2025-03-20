
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, School, BookOpen } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      
      elements.forEach((el, index) => {
        const speed = 1 - (index % 3) * 0.2;
        const htmlEl = el as HTMLElement;
        htmlEl.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-edu-primary/10 rounded-full blur-3xl parallax-element"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-edu-accent/10 rounded-full blur-3xl parallax-element"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-edu-success/10 rounded-full blur-3xl parallax-element"></div>
      </div>
      
      <div className="container-fluid relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-edu-secondary text-edu-primary font-medium animate-fade-in">
            <span className="flex items-center text-sm">
              <Brain className="inline-block w-4 h-4 mr-2" />
              Platform Pendidikan Berbasis AI untuk Indonesia
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up text-balance">
            Revolusi Pendidikan dengan 
            <span className="text-gradient"> Kecerdasan Buatan</span>
          </h1>
          
          <p className="text-lg md:text-xl text-edu-dark/80 mb-10 max-w-2xl mx-auto animate-slide-up animate-delay-100 text-balance">
            Platform AI all-in-one untuk manajemen sekolah dan pembelajaran siswa yang 
            membantu meningkatkan efisiensi dan hasil belajar di seluruh Indonesia.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-200">
            <Link to="/login?register=true" className="button-primary group w-full sm:w-auto">
              <span className="flex items-center justify-center">
                Mulai Gratis
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link to="/features" className="button-secondary w-full sm:w-auto">
              Pelajari Fitur
            </Link>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
          <div className="card group hover:scale-105 transition-transform animate-slide-up animate-delay-300">
            <div className="bg-edu-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-edu-primary/20 transition-colors">
              <School className="w-6 h-6 text-edu-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-1">300+</h3>
            <p className="text-edu-dark/70">Sekolah di Seluruh Indonesia</p>
          </div>
          
          <div className="card group hover:scale-105 transition-transform animate-slide-up animate-delay-400">
            <div className="bg-edu-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-edu-accent/20 transition-colors">
              <BookOpen className="w-6 h-6 text-edu-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-1">50,000+</h3>
            <p className="text-edu-dark/70">Siswa Aktif Belajar</p>
          </div>
          
          <div className="card group hover:scale-105 transition-transform animate-slide-up animate-delay-500">
            <div className="bg-edu-success/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-edu-success/20 transition-colors">
              <Brain className="w-6 h-6 text-edu-success" />
            </div>
            <h3 className="text-2xl font-bold mb-1">1 Juta+</h3>
            <p className="text-edu-dark/70">Pertanyaan Dijawab oleh AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
