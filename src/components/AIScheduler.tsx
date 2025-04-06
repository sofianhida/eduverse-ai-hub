
import React, { useState } from 'react';
import { useGeminiAI } from '../utils/geminiAI';
import AIChat from './AIChat';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Bot, Calendar, Zap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoadingSpinner from './LoadingSpinner';

type SchoolLevel = 'sd' | 'smp' | 'sma';

const AIScheduler: React.FC<{ activeTab: SchoolLevel }> = ({ activeTab }) => {
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

Berikan penjelasan singkat kenapa jadwal disusun seperti itu dan bagaimana AI membantu dalam penyusunannya.
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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-edu-secondary rounded-full text-edu-primary font-medium text-sm mb-4">
              Teknologi AI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sistem AI untuk Penyusunan Jadwal
            </h2>
            <p className="text-lg text-edu-dark/80">
              Gunakan teknologi AI untuk membantu menyusun jadwal pelajaran yang optimal sesuai Kurikulum Merdeka
            </p>
          </div>

          <Tabs defaultValue="info" className="mt-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
              <TabsTrigger value="info">Cara Kerja</TabsTrigger>
              <TabsTrigger value="demo">Simulasi</TabsTrigger>
            </TabsList>
            
            <TabsContent value="info" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cara Kerja Sistem AI Penjadwalan</CardTitle>
                  <CardDescription>Bagaimana AI membantu mengoptimalkan jadwal sekolah</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">AI Mempertimbangkan:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Menghindari bentrokan jadwal guru dan kelas</li>
                    <li>Fleksibilitas Kurikulum Merdeka dengan mata pelajaran wajib dan pilihan</li>
                    <li>Personalisasi berdasarkan minat siswa (khususnya SMA)</li>
                    <li>Efisiensi penggunaan waktu dan sumber daya</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mt-6">Proses AI:</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Menerima input data (siswa, guru, mata pelajaran, dan infrastruktur)</li>
                    <li>Menggunakan algoritma seperti Genetic Algorithm atau Constraint Satisfaction</li>
                    <li>Melakukan iterasi untuk menemukan solusi optimal</li>
                    <li>Menghasilkan output jadwal yang rapi dan sesuai kebutuhan</li>
                  </ol>
                  
                  <div className="bg-edu-light p-4 rounded-lg mt-6">
                    <h4 className="font-medium mb-2">Keunggulan Sistem:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Menyusun jadwal dalam hitungan detik, bukan hari</li>
                      <li>Dapat dengan cepat menyesuaikan perubahan (guru sakit, ruang tidak tersedia)</li>
                      <li>Mendukung fleksibilitas Kurikulum Merdeka</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="demo" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Simulasi Penjadwalan dengan AI</CardTitle>
                  <CardDescription>Lihat bagaimana AI menyusun jadwal untuk {activeTab.toUpperCase()}</CardDescription>
                </CardHeader>
                <CardContent>
                  {isGenerating ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <LoadingSpinner size="large" text="AI sedang menyusun jadwal optimal..." />
                      <p className="text-edu-dark/70 mt-4 text-center">
                        AI sedang mempertimbangkan mata pelajaran, alokasi waktu, dan keseimbangan beban kognitif
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
                        Coba simulasikan bagaimana AI menyusun jadwal pelajaran untuk satu kelas di jenjang {activeTab.toUpperCase()} 
                        berdasarkan Kurikulum Merdeka.
                      </p>
                      
                      <div className="bg-edu-light p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Parameter Simulasi:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Jenjang: {activeTab === 'sd' ? 'Sekolah Dasar' : activeTab === 'smp' ? 'Sekolah Menengah Pertama' : 'Sekolah Menengah Atas'}</li>
                          <li>Kurikulum: Kurikulum Merdeka terbaru</li>
                          <li>Jumlah hari: 5 hari (Senin-Jumat)</li>
                          <li>Mata pelajaran: Sesuai panduan Kurikulum Merdeka</li>
                        </ul>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                        <Button 
                          onClick={handleGenerateSchedule} 
                          className="flex items-center gap-2"
                        >
                          <Zap className="w-4 h-4" />
                          Generate Jadwal dengan AI
                        </Button>
                        
                        <Button 
                          variant="outline"
                          onClick={() => setShowChat(true)}
                          className="flex items-center gap-2"
                        >
                          <Bot className="w-4 h-4" />
                          Tanya AI tentang Penjadwalan
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {showChat && (
                <div className="mt-6 h-[500px]">
                  <AIChat 
                    initialSystemPrompt={`Kamu adalah asisten AI khusus untuk membantu penyusunan jadwal sekolah berdasarkan Kurikulum Merdeka. Kamu sangat memahami semua mata pelajaran di jenjang ${activeTab.toUpperCase()} dan cara menyusun jadwal yang optimal. Jawab pertanyaan pengguna dengan informatif dan berikan contoh jika diperlukan.`}
                    placeholder="Tanyakan tentang jadwal pelajaran, Kurikulum Merdeka, atau cara menyusun jadwal..."
                    chatTitle="AI Konsultan Jadwal Sekolah"
                  />
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AIScheduler;
