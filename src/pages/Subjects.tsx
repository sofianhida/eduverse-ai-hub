
import React from 'react';
import Navbar from '../components/Navbar';
import SubjectFeatures from '../components/SubjectFeatures';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Subjects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-br from-edu-primary to-edu-accent py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link to="/" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span>Kembali ke Beranda</span>
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mata Pelajaran</h1>
            <p className="text-xl max-w-3xl">
              Pelajari berbagai mata pelajaran dengan bantuan teknologi AI yang menyesuaikan dengan gaya belajar Anda
            </p>
          </div>
        </div>

        <SubjectFeatures />
        
        {/* Additional Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 bg-edu-secondary rounded-full text-edu-primary font-medium text-sm mb-4">
                Fitur Pembelajaran
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Fitur Utama Pembelajaran
              </h2>
              <p className="text-lg text-edu-dark/80">
                Nikmati berbagai fitur yang membantu proses belajar menjadi lebih efektif dan menyenangkan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-soft border border-edu-primary/10 p-6 hover:shadow-medium transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-edu-primary/10 flex items-center justify-center mb-6 text-edu-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Pembelajaran Adaptif</h3>
                <p className="text-edu-dark/70">
                  Sistem {formatBoldText("**pembelajaran adaptif**")} yang menyesuaikan dengan kecepatan dan gaya belajar Anda, memastikan pemahaman yang optimal
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-soft border border-edu-primary/10 p-6 hover:shadow-medium transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-edu-primary/10 flex items-center justify-center mb-6 text-edu-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Latihan Interaktif</h3>
                <p className="text-edu-dark/70">
                  {formatBoldText("**Latihan interaktif**")} yang membantu mengukur pemahaman dan memberikan umpan balik langsung untuk perbaikan
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-soft border border-edu-primary/10 p-6 hover:shadow-medium transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-edu-primary/10 flex items-center justify-center mb-6 text-edu-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Diskusi Kolaboratif</h3>
                <p className="text-edu-dark/70">
                  Ruang {formatBoldText("**diskusi kolaboratif**")} untuk membahas materi dengan teman sekelas dan guru, memperkaya pemahaman melalui perspektif berbeda
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-edu-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 EduVerse AI. Semua Hak Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
};

export default Subjects;
