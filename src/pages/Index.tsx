
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { Link } from 'react-router-dom';
import { BookOpen, School, Download, Mail, ArrowRight, Phone, MapPin, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <Features />
        
        {/* How It Works Section */}
        <section className="section bg-white">
          <div className="container-fluid">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 bg-edu-secondary rounded-full text-edu-primary font-medium text-sm mb-4">
                Cara Kerja
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pendidikan yang Dibantu Kecerdasan Buatan
              </h2>
              <p className="text-lg text-edu-dark/80">
                Gabungkan kekuatan manajemen sekolah modern dan pembelajaran personal
                dengan platform AI all-in-one kami.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center p-8 group">
                <div className="w-16 h-16 rounded-xl bg-edu-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-edu-primary/20 transition-colors">
                  <School className="w-8 h-8 text-edu-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Daftarkan Sekolah</h3>
                <p className="text-edu-dark/70">
                  Daftarkan sekolah Anda dan atur akun untuk guru, 
                  admin, dan siswa dengan mudah.
                </p>
              </div>
              
              <div className="card text-center p-8 group">
                <div className="w-16 h-16 rounded-xl bg-edu-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-edu-primary/20 transition-colors">
                  <BookOpen className="w-8 h-8 text-edu-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Pilih Kurikulum</h3>
                <p className="text-edu-dark/70">
                  Sesuaikan konten dengan kurikulum pendidikan Indonesia
                  untuk SD, SMP, atau SMA/SMK.
                </p>
              </div>
              
              <div className="card text-center p-8 group">
                <div className="w-16 h-16 rounded-xl bg-edu-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-edu-primary/20 transition-colors">
                  <Download className="w-8 h-8 text-edu-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Mulai Gunakan</h3>
                <p className="text-edu-dark/70">
                  Akses dashboard admin untuk sekolah dan AI tutor untuk
                  siswa dari browser atau aplikasi.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="section bg-edu-light">
          <div className="container-fluid">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 bg-edu-secondary rounded-full text-edu-primary font-medium text-sm mb-4">
                Testimoni
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Digunakan dan Dipercaya
              </h2>
              <p className="text-lg text-edu-dark/80">
                Lihat apa kata para guru, siswa, dan administrator sekolah tentang platform kami.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-edu-primary/20 flex items-center justify-center mr-4">
                    <span className="text-edu-primary font-bold">S</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Siti Nurhayati</h4>
                    <p className="text-sm text-edu-dark/70">Guru Matematika, SMAN 1 Jakarta</p>
                  </div>
                </div>
                <p className="text-edu-dark/80">
                  "Platform ini membantu saya memantau perkembangan siswa dengan lebih efektif. Analisis data yang diberikan
                  sangat membantu untuk menyesuaikan pendekatan pembelajaran."
                </p>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-edu-accent/20 flex items-center justify-center mr-4">
                    <span className="text-edu-accent font-bold">B</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Budi Santoso</h4>
                    <p className="text-sm text-edu-dark/70">Siswa Kelas XI, SMAN 3 Bandung</p>
                  </div>
                </div>
                <p className="text-edu-dark/80">
                  "AI Tutor benar-benar membantu saya memahami konsep-konsep sulit dalam fisika. Saya bisa bertanya
                  kapan saja dan mendapatkan penjelasan yang jelas."
                </p>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-edu-success/20 flex items-center justify-center mr-4">
                    <span className="text-edu-success font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Ahmad Supriyadi</h4>
                    <p className="text-sm text-edu-dark/70">Kepala Sekolah, SD Negeri 05 Surabaya</p>
                  </div>
                </div>
                <p className="text-edu-dark/80">
                  "EduVerse AI telah membantu efisiensi administrasi sekolah kami. Manajemen jadwal dan pengumuman
                  menjadi lebih mudah dan komunikasi dengan orang tua meningkat."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-edu-primary to-edu-accent text-white">
          <div className="container-fluid text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Untuk Memulai?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ratusan sekolah yang telah meningkatkan kualitas
              pendidikan mereka dengan EduVerse AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/login?register=true" className="button-primary bg-white text-edu-primary">
                <span className="flex items-center">
                  Mulai Gratis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
              <Link to="/contact" className="glass-button text-white px-6 py-3">
                <span className="flex items-center">
                  Hubungi Kami
                  <Phone className="ml-2 w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-edu-dark text-white py-12">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-edu-primary to-edu-accent flex items-center justify-center text-white font-bold">
                  E
                </div>
                <span className="ml-2 font-bold text-xl">EduVerse AI</span>
              </div>
              <p className="text-white/70 mb-4">
                Platform pendidikan berbasis AI untuk sekolah-sekolah di Indonesia.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <i className="text-sm">f</i>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <i className="text-sm">t</i>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <i className="text-sm">i</i>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <i className="text-sm">in</i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Fitur</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">EduAdmin AI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">EduTutor AI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manajemen Jadwal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analisis Prestasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Latihan Soal</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Tentang</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Kontak</h3>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-white/50" />
                  <span>info@eduverse-ai.id</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-white/50" />
                  <span>+62 21 1234 5678</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0 text-white/50" />
                  <span>Jl. Pendidikan No. 123, Jakarta Selatan, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-6 border-t border-white/10 text-center text-white/50 text-sm">
            <p className="flex items-center justify-center">
              <span>© 2023 EduVerse AI. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-edu-primary" />
              <span>in Indonesia</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
