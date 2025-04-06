
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useGeminiAI } from '../utils/geminiAI';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Bot, School, Zap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import LoadingSpinner from '../components/LoadingSpinner';
import AIChat from '../components/AIChat';

type SchoolLevel = 'sd' | 'smp' | 'sma';

const Schedule = () => {
  const [activeTab, setActiveTab] = useState<SchoolLevel>('smp');
  const [showChat, setShowChat] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [schedulingResult, setSchedulingResult] = useState<string | null>(null);
  const { sendMessage, isLoading } = useGeminiAI();

  const schedulingPrompt = `
### Sistem AI untuk Penyusunan Jadwal Sekolah
Buat jadwal pelajaran sekolah untuk jenjang ${activeTab === 'sd' ? 'Sekolah Dasar' : 
  activeTab === 'smp' ? 'Sekolah Menengah Pertama' : 'Sekolah Menengah Atas'} 
yang mengikuti Kurikulum Merdeka. 

Gunakan mata pelajaran untuk jenjang ${activeTab.toUpperCase()} sesuai dengan Kurikulum Merdeka.
Buat jadwal pelajaran untuk 1 kelas selama 1 minggu (Senin-Jumat).
Format jadwal dalam tabel yang memperlihatkan waktu, hari, dan mata pelajaran.
Alokasikan waktu yang tepat untuk setiap mata pelajaran sesuai standar pendidikan.
Pertimbangkan keseimbangan beban kognitif siswa dalam menyusun jadwal.
Masukkan waktu untuk Proyek Penguatan Profil Pelajar Pancasila (P5) sesuai kebutuhan.

Jelaskan juga secara singkat algoritma yang digunakan (misalnya Constraint Satisfaction Problem atau Genetic Algorithm),
dan bagaimana AI mempertimbangkan berbagai batasan (constraints) dalam menyusun jadwal tersebut.
  `;

  const handleGenerateSchedule = async () => {
    setIsGenerating(true);
    try {
      const result = await sendMessage(schedulingPrompt);
      setSchedulingResult(result);
    } catch (error) {
      console.error("Error generating schedule:", error);
      setSchedulingResult("Maaf, terjadi kesalahan dalam membuat jadwal. Silakan coba lagi nanti.");
    } finally {
      setIsGenerating(false);
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sistem Penjadwalan AI</h1>
            <p className="text-xl max-w-3xl">
              Gunakan teknologi AI untuk membuat jadwal optimal yang memenuhi semua batasan dan kebutuhan kurikulum
            </p>
          </div>
        </div>

        {/* AI Scheduling System Description */}
        <section className="py-12 bg-edu-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-edu-primary">Cara Kerja Sistem AI</h2>
              <p className="text-lg text-edu-dark mb-6">
                Sistem penjadwalan AI bekerja dengan menggunakan algoritma canggih untuk membuat jadwal optimal. Berikut adalah proses yang terjadi di balik layar:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-edu-primary/10 flex items-center justify-center mb-2 text-edu-primary">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <CardTitle>Pengumpulan Data</CardTitle>
                    <CardDescription>Langkah awal penyusunan jadwal</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-edu-dark/80">
                      AI memproses data penting seperti guru, siswa, mata pelajaran, alokasi waktu, dan batasan khusus. Semakin lengkap data, semakin optimal jadwal yang dihasilkan.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-edu-primary/10 flex items-center justify-center mb-2 text-edu-primary">
                      <Bot className="w-6 h-6" />
                    </div>
                    <CardTitle>Algoritma Cerdas</CardTitle>
                    <CardDescription>Penerapa algoritma untuk optimasi</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-edu-dark/80">
                      AI menggunakan algoritma seperti Constraint Satisfaction Problem (CSP) atau Genetic Algorithm yang mencari solusi optimal dengan mempertimbangkan semua batasan.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-edu-primary/10 flex items-center justify-center mb-2 text-edu-primary">
                      <School className="w-6 h-6" />
                    </div>
                    <CardTitle>Pertimbangan Khusus</CardTitle>
                    <CardDescription>Adaptasi untuk Kurikulum Merdeka</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-edu-dark/80">
                      AI memastikan jadwal mengakomodasi kebutuhan Kurikulum Merdeka seperti Proyek P5, fleksibilitas mata pelajaran pilihan, dan keseimbangan beban belajar.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-edu-primary/10 flex items-center justify-center mb-2 text-edu-primary">
                      <Zap className="w-6 h-6" />
                    </div>
                    <CardTitle>Hasil Optimal</CardTitle>
                    <CardDescription>Jadwal efisien tanpa konflik</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-edu-dark/80">
                      Dalam hitungan detik, AI menghasilkan jadwal yang memenuhi semua batasan tanpa bentrokan, efisien, dan bisa disesuaikan dengan cepat jika ada perubahan.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* AI Scheduling Generator */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-edu-secondary rounded-full text-edu-primary font-medium text-sm mb-4">
                  Simulasi Jadwal
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Buat Jadwal dengan AI
                </h2>
                <p className="text-lg text-edu-dark/80">
                  Lihat bagaimana AI menyusun jadwal optimal untuk jenjang pendidikan yang dipilih
                </p>
              </div>

              <Tabs defaultValue={activeTab} value={activeTab} onValueChange={(value) => setActiveTab(value as SchoolLevel)} className="mt-8">
                <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
                  <TabsTrigger value="sd">SD</TabsTrigger>
                  <TabsTrigger value="smp">SMP</TabsTrigger>
                  <TabsTrigger value="sma">SMA</TabsTrigger>
                </TabsList>
                
                <TabsContent value="sd" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Jadwal SD - Kurikulum Merdeka</CardTitle>
                      <CardDescription>Fase A (Kelas 1-2), Fase B (Kelas 3-4), dan Fase C (Kelas 5-6)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {isGenerating ? (
                        <div className="flex flex-col items-center justify-center py-12">
                          <LoadingSpinner size="large" text="AI sedang menyusun jadwal optimal..." />
                          <p className="text-edu-dark/70 mt-4 text-center">
                            AI menggunakan algoritma Constraint Satisfaction untuk menyusun jadwal terbaik
                          </p>
                        </div>
                      ) : schedulingResult ? (
                        <div className="prose max-w-none">
                          <div dangerouslySetInnerHTML={{ __html: schedulingResult.replace(/\n/g, '<br/>') }} />
                          <div className="mt-6 flex justify-center">
                            <Button onClick={() => setSchedulingResult(null)} variant="outline">
                              Reset & Buat Ulang
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <p>
                            Buat jadwal pelajaran untuk SD dengan mempertimbangkan semua mata pelajaran Kurikulum Merdeka dan Proyek P5.
                          </p>
                          
                          <div className="bg-edu-light p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Yang Dipertimbangkan:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Mata pelajaran SD: Pendidikan Agama, Pancasila, Bahasa Indonesia, Matematika, IPAS, dll</li>
                              <li>Durasi: 1 JP = 35 menit</li>
                              <li>Keseimbangan kognitif: pelajaran berat tidak di jam terakhir</li>
                              <li>P5: proyek kolaboratif lintas mata pelajaran</li>
                            </ul>
                          </div>
                          
                          <div className="flex justify-center mt-4">
                            <Button 
                              onClick={handleGenerateSchedule} 
                              className="flex items-center gap-2"
                            >
                              <Zap className="w-4 h-4" />
                              Generate Jadwal SD
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="smp" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Jadwal SMP - Kurikulum Merdeka</CardTitle>
                      <CardDescription>Fase D (Kelas 7-9)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {isGenerating ? (
                        <div className="flex flex-col items-center justify-center py-12">
                          <LoadingSpinner size="large" text="AI sedang menyusun jadwal optimal..." />
                          <p className="text-edu-dark/70 mt-4 text-center">
                            AI menggunakan algoritma Genetic Algorithm untuk mengoptimalkan penyusunan jadwal
                          </p>
                        </div>
                      ) : schedulingResult ? (
                        <div className="prose max-w-none">
                          <div dangerouslySetInnerHTML={{ __html: schedulingResult.replace(/\n/g, '<br/>') }} />
                          <div className="mt-6 flex justify-center">
                            <Button onClick={() => setSchedulingResult(null)} variant="outline">
                              Reset & Buat Ulang
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <p>
                            Buat jadwal pelajaran untuk SMP dengan mempertimbangkan semua mata pelajaran Kurikulum Merdeka dan Proyek P5.
                          </p>
                          
                          <div className="bg-edu-light p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Yang Dipertimbangkan:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Mata pelajaran SMP: Pendidikan Agama, Pancasila, Bahasa Indonesia, Matematika, IPA, IPS, dll</li>
                              <li>Durasi: 1 JP = 40 menit</li>
                              <li>Keseimbangan kognitif: mata pelajaran berat di jam pagi</li>
                              <li>Kebutuhan ruang khusus: Lab IPA, Lab Komputer, dll</li>
                            </ul>
                          </div>
                          
                          <div className="flex justify-center mt-4">
                            <Button 
                              onClick={handleGenerateSchedule} 
                              className="flex items-center gap-2"
                            >
                              <Zap className="w-4 h-4" />
                              Generate Jadwal SMP
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="sma" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Jadwal SMA - Kurikulum Merdeka</CardTitle>
                      <CardDescription>Fase E (Kelas 10) dan Fase F (Kelas 11-12)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {isGenerating ? (
                        <div className="flex flex-col items-center justify-center py-12">
                          <LoadingSpinner size="large" text="AI sedang menyusun jadwal optimal..." />
                          <p className="text-edu-dark/70 mt-4 text-center">
                            AI menggunakan algoritma Simulated Annealing untuk jadwal fleksibel mata pelajaran pilihan
                          </p>
                        </div>
                      ) : schedulingResult ? (
                        <div className="prose max-w-none">
                          <div dangerouslySetInnerHTML={{ __html: schedulingResult.replace(/\n/g, '<br/>') }} />
                          <div className="mt-6 flex justify-center">
                            <Button onClick={() => setSchedulingResult(null)} variant="outline">
                              Reset & Buat Ulang
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <p>
                            Buat jadwal pelajaran untuk SMA dengan mempertimbangkan mata pelajaran wajib dan pilihan Kurikulum Merdeka.
                          </p>
                          
                          <div className="bg-edu-light p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Yang Dipertimbangkan:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              <li>Mata pelajaran wajib dan pilihan SMA (termasuk peminatan MIPA, IPS, Bahasa)</li>
                              <li>Durasi: 1 JP = 45 menit</li>
                              <li>Fleksibilitas mata pelajaran pilihan (untuk kelas 11-12)</li>
                              <li>Kebutuhan ruang khusus: Lab Fisika, Kimia, Biologi, Komputer, dll</li>
                            </ul>
                          </div>
                          
                          <div className="flex justify-center mt-4">
                            <Button 
                              onClick={handleGenerateSchedule} 
                              className="flex items-center gap-2"
                            >
                              <Zap className="w-4 h-4" />
                              Generate Jadwal SMA
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              {/* Chat with AI */}
              {!showChat ? (
                <div className="flex justify-center mt-8">
                  <Button 
                    variant="outline"
                    onClick={() => setShowChat(true)}
                    className="flex items-center gap-2"
                  >
                    <Bot className="w-4 h-4" />
                    Tanya AI tentang Penjadwalan
                  </Button>
                </div>
              ) : (
                <div className="mt-8 h-[500px]">
                  <AIChat 
                    initialSystemPrompt={`Kamu adalah asisten AI khusus untuk membantu penyusunan jadwal sekolah berdasarkan Kurikulum Merdeka. 
                    
Kamu sangat memahami:
1. Algoritma penjadwalan (CSP, Genetic Algorithm, Simulated Annealing)
2. Batasan (constraints) penjadwalan sekolah
3. Semua mata pelajaran di jenjang SD, SMP, dan SMA sesuai Kurikulum Merdeka
4. Cara menyusun jadwal yang optimal dengan mempertimbangkan keseimbangan kognitif siswa

Jawab pertanyaan pengguna dengan informatif dan berikan contoh konkret jika diperlukan.`}
                    placeholder="Tanyakan tentang algoritma penjadwalan, batasan jadwal, atau contoh jadwal khusus..."
                    chatTitle="AI Konsultan Penjadwalan Sekolah"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-edu-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-edu-primary">Keunggulan Penjadwalan dengan AI</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white border border-edu-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl">Kecepatan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-edu-dark/70">
                      Menyusun jadwal dalam hitungan detik, bukan hari atau minggu seperti penjadwalan manual.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border border-edu-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl">Tanpa Konflik</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-edu-dark/70">
                      Menghilangkan bentrokan jadwal guru, kelas, atau ruangan yang biasa terjadi pada penjadwalan manual.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border border-edu-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl">Adaptif</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-edu-dark/70">
                      Dengan cepat menyesuaikan perubahan seperti guru sakit, ruang tidak tersedia, atau kegiatan mendadak.
                    </p>
                  </CardContent>
                </Card>
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

export default Schedule;
