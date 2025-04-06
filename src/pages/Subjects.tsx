
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SubjectFeatures from '../components/SubjectFeatures';
import AIScheduler from '../components/AIScheduler';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { formatBoldText } from '../utils/textFormatting';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Subjects = () => {
  const [activeTab, setActiveTab] = useState("sd");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pb-16">
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

        {/* Curriculum Introduction */}
        <section className="py-12 bg-edu-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-edu-primary">Kurikulum Merdeka</h2>
              <p className="text-lg text-edu-dark mb-6">
                Berikut adalah daftar mata pelajaran berdasarkan kurikulum terbaru di Indonesia, yaitu {formatBoldText("**Kurikulum Merdeka**")}, yang mulai diterapkan secara bertahap sejak tahun 2022 untuk jenjang SD, SMP, dan SMA. Kurikulum ini memberikan fleksibilitas kepada sekolah dan siswa, sehingga beberapa mata pelajaran dapat bersifat wajib, pilihan, atau muatan lokal tergantung pada jenjang dan kebutuhan siswa.
              </p>
              
              <Tabs defaultValue="sd" value={activeTab} onValueChange={setActiveTab} className="mt-8">
                <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
                  <TabsTrigger value="sd">SD</TabsTrigger>
                  <TabsTrigger value="smp">SMP</TabsTrigger>
                  <TabsTrigger value="sma">SMA</TabsTrigger>
                </TabsList>
                
                <TabsContent value="sd" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Jenjang Sekolah Dasar (SD)</CardTitle>
                      <CardDescription>Fase A (Kelas 1-2), Fase B (Kelas 3-4), dan Fase C (Kelas 5-6)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Di SD, Kurikulum Merdeka membagi pembelajaran menjadi tiga fase. Mata pelajaran disusun dengan pendekatan intrakurikuler dan Proyek Penguatan Profil Pelajar Pancasila (P5).
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="smp" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Jenjang Sekolah Menengah Pertama (SMP)</CardTitle>
                      <CardDescription>Fase D (Kelas 7-9)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        SMP berada pada Fase D (Kelas 7-9). Kurikulum Merdeka di SMP mulai memisahkan beberapa mata pelajaran yang sebelumnya terintegrasi di SD, dengan tambahan pilihan untuk mendukung minat siswa.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="sma" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Jenjang Sekolah Menengah Atas (SMA)</CardTitle>
                      <CardDescription>Fase E (Kelas 10) dan Fase F (Kelas 11-12)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        SMA berada pada Fase E (Kelas 10) dan Fase F (Kelas 11-12). Kurikulum Merdeka di SMA menghapus peminatan jurusan (IPA, IPS, Bahasa) seperti pada Kurikulum 2013. Siswa kelas 10 wajib mengikuti mata pelajaran umum, sedangkan di kelas 11-12 mereka bisa memilih mata pelajaran sesuai minat.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Subject List by Level */}
        <SubjectFeatures activeTab={activeTab} />
        
        {/* AI Scheduler */}
        <AIScheduler activeTab={activeTab as 'sd' | 'smp' | 'sma'} />
        
        {/* Future Plans Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 bg-edu-secondary rounded-full text-edu-primary font-medium text-sm mb-4">
                Pembaruan 2025
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Rencana Kurikulum Masa Depan
              </h2>
              <p className="text-lg text-edu-dark/80">
                Berdasarkan informasi terbaru dari pemerintah (diperbarui hingga April 2025), ada rencana pengembangan kurikulum dengan tambahan mata pelajaran baru
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-soft border border-edu-primary/10 p-8 hover:shadow-medium transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-edu-primary/10 flex items-center justify-center mb-6 text-edu-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Artificial Intelligence (AI)</h3>
                <p className="text-edu-dark/70">
                  {formatBoldText("**Artificial Intelligence (AI)**")} direncanakan sebagai mata pelajaran pilihan di SD dan SMP. Di SMA, ini kemungkinan akan diperluas dalam mata pelajaran Informatika atau sebagai bagian dari proyek P5.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-soft border border-edu-primary/10 p-8 hover:shadow-medium transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-edu-primary/10 flex items-center justify-center mb-6 text-edu-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Coding</h3>
                <p className="text-edu-dark/70">
                  {formatBoldText("**Coding**")} akan menjadi mata pelajaran penting untuk mendukung literasi digital dan mempersiapkan siswa menghadapi era digital. Hal ini masih dalam tahap pengembangan dan akan bergantung pada kesiapan sekolah.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-edu-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 EduVerse AI. Semua Hak Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
};

export default Subjects;
