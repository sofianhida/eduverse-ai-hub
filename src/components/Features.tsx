
import { useRef, useEffect } from 'react';
import { 
  BookOpenCheck, 
  GraduationCap, 
  Calendar, 
  BrainCircuit, 
  LineChart, 
  MessageSquare,
  ClipboardCheck,
  School,
  BarChart4,
  FileText
} from 'lucide-react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.feature-card');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={featuresRef} className="section bg-edu-light" id="features">
      <div className="container-fluid">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-edu-secondary rounded-full text-edu-primary font-medium text-sm mb-4">
            Fitur Utama
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Dua Sistem AI Terintegrasi untuk Pendidikan
          </h2>
          <p className="text-lg text-edu-dark/80">
            Platform kami menyediakan solusi lengkap untuk manajemen sekolah dan pembelajaran siswa, 
            didukung oleh teknologi AI mutakhir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 bg-edu-primary/10 rounded-full text-edu-primary font-medium text-sm mb-4">
              Untuk Admin & Guru
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              EduAdmin AI
            </h3>
            <p className="text-lg text-edu-dark/80 mb-8">
              Sistem manajemen sekolah pintar yang membantu efisiensi administrasi, 
              monitoring siswa, dan pengambilan keputusan berbasis data.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="feature-card opacity-0 p-4 rounded-xl border border-edu-primary/10 hover:border-edu-primary/30 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
                <Calendar className="w-8 h-8 text-edu-primary mb-3" />
                <h4 className="font-semibold mb-2">Jadwal & Pengingat</h4>
                <p className="text-sm text-edu-dark/70">
                  Manajemen jadwal otomatis dengan pengingat untuk tugas dan ujian
                </p>
              </div>
              
              <div className="feature-card opacity-0 p-4 rounded-xl border border-edu-primary/10 hover:border-edu-primary/30 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
                <MessageSquare className="w-8 h-8 text-edu-primary mb-3" />
                <h4 className="font-semibold mb-2">Chatbot Pengumuman</h4>
                <p className="text-sm text-edu-dark/70">
                  Kirim pengumuman otomatis kepada siswa, guru & orang tua
                </p>
              </div>
              
              <div className="feature-card opacity-0 p-4 rounded-xl border border-edu-primary/10 hover:border-edu-primary/30 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
                <LineChart className="w-8 h-8 text-edu-primary mb-3" />
                <h4 className="font-semibold mb-2">Analisis Prestasi</h4>
                <p className="text-sm text-edu-dark/70">
                  Analisis data nilai dan rekomendasi peningkatan akademik
                </p>
              </div>
              
              <div className="feature-card opacity-0 p-4 rounded-xl border border-edu-primary/10 hover:border-edu-primary/30 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
                <School className="w-8 h-8 text-edu-primary mb-3" />
                <h4 className="font-semibold mb-2">Manajemen Konseling</h4>
                <p className="text-sm text-edu-dark/70">
                  Pencatatan dan analisis awal untuk bimbingan konseling
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-hard">
              <div className="absolute inset-0 bg-edu-primary/5"></div>
              <div className="glass-card absolute top-0 left-0 right-0 p-4 backdrop-blur-lg bg-white/90 border-b border-white/20">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-edu-error mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-edu-warning mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-edu-success mr-2"></div>
                  <div className="ml-4 text-sm text-edu-dark/70">EduAdmin AI Dashboard</div>
                </div>
              </div>
              
              <div className="absolute top-14 inset-x-0 bottom-0 p-4 flex flex-col">
                <div className="flex-1 grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-3 shadow-soft">
                    <h5 className="font-medium text-sm mb-2">Ringkasan Harian</h5>
                    <div className="space-y-2">
                      <div className="bg-edu-gray h-2 rounded-full w-full"></div>
                      <div className="bg-edu-gray h-2 rounded-full w-3/4"></div>
                      <div className="bg-edu-gray h-2 rounded-full w-1/2"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 shadow-soft">
                    <h5 className="font-medium text-sm mb-2">Jadwal Hari Ini</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-xs">
                        <div className="w-2 h-2 rounded-full bg-edu-primary mr-2"></div>
                        <span>Matematika - 08:00</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <div className="w-2 h-2 rounded-full bg-edu-accent mr-2"></div>
                        <span>Bahasa Indonesia - 10:15</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <div className="w-2 h-2 rounded-full bg-edu-success mr-2"></div>
                        <span>IPA - 13:00</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 bg-white rounded-lg p-3 shadow-soft">
                  <h5 className="font-medium text-sm mb-2">Analisis Performa Kelas</h5>
                  <div className="h-20 flex items-end space-x-2">
                    <div className="w-1/12 bg-edu-primary/20 rounded-t-md h-[30%]"></div>
                    <div className="w-1/12 bg-edu-primary/30 rounded-t-md h-[50%]"></div>
                    <div className="w-1/12 bg-edu-primary/40 rounded-t-md h-[80%]"></div>
                    <div className="w-1/12 bg-edu-primary/50 rounded-t-md h-[60%]"></div>
                    <div className="w-1/12 bg-edu-primary/60 rounded-t-md h-[90%]"></div>
                    <div className="w-1/12 bg-edu-primary/70 rounded-t-md h-[70%]"></div>
                    <div className="w-1/12 bg-edu-primary/80 rounded-t-md h-[100%]"></div>
                    <div className="w-1/12 bg-edu-primary/90 rounded-t-md h-[85%]"></div>
                    <div className="w-1/12 bg-edu-primary rounded-t-md h-[75%]"></div>
                    <div className="w-1/12 bg-edu-primary/80 rounded-t-md h-[65%]"></div>
                    <div className="w-1/12 bg-edu-primary/70 rounded-t-md h-[55%]"></div>
                    <div className="w-1/12 bg-edu-primary/60 rounded-t-md h-[40%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-hard">
              <div className="absolute inset-0 bg-edu-accent/5"></div>
              <div className="glass-card absolute top-0 left-0 right-0 p-4 backdrop-blur-lg bg-white/90 border-b border-white/20">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-edu-error mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-edu-warning mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-edu-success mr-2"></div>
                  <div className="ml-4 text-sm text-edu-dark/70">EduTutor AI Interface</div>
                </div>
              </div>
              
              <div className="absolute top-14 inset-x-0 bottom-0 p-4 flex flex-col">
                <div className="flex-1 bg-white rounded-lg shadow-soft overflow-hidden flex flex-col">
                  <div className="p-3 border-b border-gray-100">
                    <div className="flex items-center space-x-2 text-sm font-medium">
                      <BrainCircuit className="w-4 h-4 text-edu-accent" />
                      <span>AI Tutor Matematika</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-3 overflow-y-auto space-y-3">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-edu-accent/20 flex items-center justify-center text-edu-accent mr-2 flex-shrink-0">
                        AI
                      </div>
                      <div className="bg-edu-light rounded-lg p-2 text-xs">
                        Selamat datang di AI Tutor Matematika! Apa yang ingin kamu pelajari hari ini?
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-end">
                      <div className="bg-edu-accent/10 rounded-lg p-2 text-xs">
                        Saya kesulitan memahami soal persamaan kuadrat
                      </div>
                      <div className="w-8 h-8 rounded-full bg-edu-primary/20 flex items-center justify-center text-edu-primary ml-2 flex-shrink-0">
                        S
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-edu-accent/20 flex items-center justify-center text-edu-accent mr-2 flex-shrink-0">
                        AI
                      </div>
                      <div className="bg-edu-light rounded-lg p-2 text-xs">
                        Baik, saya akan membantu kamu memahami persamaan kuadrat. Mari kita mulai dari dasarnya. Persamaan kuadrat memiliki bentuk umum ax² + bx + c = 0, di mana a ≠ 0...
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 border-t border-gray-100">
                    <div className="flex">
                      <input 
                        type="text" 
                        className="flex-1 bg-edu-light rounded-l-lg px-3 py-2 text-sm focus:outline-none"
                        placeholder="Ketik pertanyaanmu di sini..."
                      />
                      <button className="bg-edu-accent text-white rounded-r-lg px-4 py-2 text-sm">
                        Kirim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <span className="inline-block px-3 py-1 bg-edu-accent/10 rounded-full text-edu-accent font-medium text-sm mb-4">
              Untuk Siswa
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              EduTutor AI
            </h3>
            <p className="text-lg text-edu-dark/80 mb-8">
              Asisten pembelajaran personal yang memahami kebutuhan siswa, menyediakan materi 
              sesuai kurikulum, dan membantu pemahaman lebih cepat.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="feature-card opacity-0 p-4 rounded-xl border border-edu-accent/10 hover:border-edu-accent/30 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
                <GraduationCap className="w-8 h-8 text-edu-accent mb-3" />
                <h4 className="font-semibold mb-2">AI Tutor Interaktif</h4>
                <p className="text-sm text-edu-dark/70">
                  Tutor personal untuk semua mata pelajaran sesuai kurikulum
                </p>
              </div>
              
              <div className="feature-card opacity-0 p-4 rounded-xl border border-edu-accent/10 hover:border-edu-accent/30 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
                <BrainCircuit className="w-8 h-8 text-edu-accent mb-3" />
                <h4 className="font-semibold mb-2">Chatbot Tutor Belajar</h4>
                <p className="text-sm text-edu-dark/70">
                  Penjelasan interaktif untuk konsep-konsep yang sulit dipahami
                </p>
              </div>
              
              <div className="feature-card opacity-0 p-4 rounded-xl border border-edu-accent/10 hover:border-edu-accent/30 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
                <ClipboardCheck className="w-8 h-8 text-edu-accent mb-3" />
                <h4 className="font-semibold mb-2">Latihan Soal Otomatis</h4>
                <p className="text-sm text-edu-dark/70">
                  Soal-soal latihan yang disesuaikan dengan tingkat kemampuan
                </p>
              </div>
              
              <div className="feature-card opacity-0 p-4 rounded-xl border border-edu-accent/10 hover:border-edu-accent/30 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
                <FileText className="w-8 h-8 text-edu-accent mb-3" />
                <h4 className="font-semibold mb-2">Rangkuman Materi</h4>
                <p className="text-sm text-edu-dark/70">
                  Rangkuman otomatis dari materi pelajaran untuk belajar efisien
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
