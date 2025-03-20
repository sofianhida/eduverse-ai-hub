
import { useQuery } from "@tanstack/react-query";
import { getAdminFeatures, getStudentFeatures } from "@/integrations/supabase/client";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";

// Dynamic icon component
const DynamicIcon = ({ name }: { name: string }) => {
  // @ts-ignore - LucideIcons has dynamic keys
  const Icon = LucideIcons[name] || LucideIcons.HelpCircle;
  return <Icon className="w-10 h-10" />;
};

const Features = () => {
  const { toast } = useToast();

  // Query untuk fitur admin
  const adminFeaturesQuery = useQuery({
    queryKey: ["adminFeatures"],
    queryFn: getAdminFeatures,
    onError: () => {
      toast({
        title: "Error",
        description: "Gagal memuat fitur admin, silakan coba lagi nanti.",
        variant: "destructive",
      });
    },
  });

  // Query untuk fitur siswa
  const studentFeaturesQuery = useQuery({
    queryKey: ["studentFeatures"],
    queryFn: getStudentFeatures,
    onError: () => {
      toast({
        title: "Error",
        description: "Gagal memuat fitur siswa, silakan coba lagi nanti.",
        variant: "destructive",
      });
    },
  });

  // Apakah salah satu atau kedua kueri sedang loading
  const isLoading = adminFeaturesQuery.isLoading || studentFeaturesQuery.isLoading;

  // Apakah salah satu atau kedua kueri error
  const isError = adminFeaturesQuery.isError || studentFeaturesQuery.isError;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <LoadingSpinner size="large" />
        <p className="mt-4 text-edu-dark/70">Memuat data fitur...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <LucideIcons.AlertTriangle className="w-16 h-16 text-edu-error mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Terjadi Kesalahan</h2>
          <p className="text-edu-dark/70 mb-6">
            Gagal memuat data fitur. Silakan refresh halaman atau coba lagi nanti.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-edu-primary text-white rounded-lg hover:bg-edu-primary/90 transition-colors"
          >
            Refresh Halaman
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-edu-light">
      {/* Header */}
      <div className="bg-gradient-to-br from-edu-primary to-edu-accent py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Fitur EduVerse AI</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Inovasi pendidikan berbasis AI untuk memperkuat pembelajaran dan pengelolaan sekolah di Indonesia
          </p>
        </div>
      </div>

      {/* Konten */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="admin" className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="admin" className="text-lg py-3">
                <LucideIcons.School className="mr-2 h-5 w-5" /> EduAdmin AI
              </TabsTrigger>
              <TabsTrigger value="student" className="text-lg py-3">
                <LucideIcons.GraduationCap className="mr-2 h-5 w-5" /> EduTutor AI
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="admin" className="mt-6">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-edu-primary/10 rounded-full text-edu-primary font-medium text-sm mb-4">
                Untuk Admin & Guru
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Manajemen Sekolah Cerdas</h2>
              <p className="text-lg text-edu-dark/80 max-w-3xl mx-auto">
                Sistem manajemen sekolah pintar yang membantu efisiensi administrasi,
                monitoring siswa, dan pengambilan keputusan berbasis data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adminFeaturesQuery.data?.map((feature) => (
                <Card key={feature.id} className="border-edu-primary/10 hover:border-edu-primary/30 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-edu-primary/10 flex items-center justify-center mb-4">
                      <DynamicIcon name={feature.icon_name} />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-edu-primary/5 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Mengapa Menggunakan EduAdmin AI?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <LucideIcons.CheckCircle className="text-edu-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Otomatisasi tugas administratif yang memakan waktu</span>
                    </li>
                    <li className="flex items-start">
                      <LucideIcons.CheckCircle className="text-edu-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Analisis data siswa untuk pengambilan keputusan yang lebih baik</span>
                    </li>
                    <li className="flex items-start">
                      <LucideIcons.CheckCircle className="text-edu-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Komunikasi yang lebih efektif antar guru, siswa, dan orang tua</span>
                    </li>
                    <li className="flex items-start">
                      <LucideIcons.CheckCircle className="text-edu-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Manajemen sumber daya sekolah yang lebih efisien</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-edu-primary to-edu-accent opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <LucideIcons.BarChart4 className="w-20 h-20 text-edu-primary opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="student" className="mt-6">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-edu-accent/10 rounded-full text-edu-accent font-medium text-sm mb-4">
                Untuk Siswa
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Asisten Belajar Personal</h2>
              <p className="text-lg text-edu-dark/80 max-w-3xl mx-auto">
                Asisten pembelajaran personal yang memahami kebutuhan siswa, menyediakan materi
                sesuai kurikulum, dan membantu pemahaman lebih cepat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentFeaturesQuery.data?.map((feature) => (
                <Card key={feature.id} className="border-edu-accent/10 hover:border-edu-accent/30 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-edu-accent/10 flex items-center justify-center mb-4">
                      <DynamicIcon name={feature.icon_name} />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-edu-accent/5 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-edu-accent to-edu-primary opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <LucideIcons.BrainCircuit className="w-20 h-20 text-edu-accent opacity-50" />
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Mengapa Menggunakan EduTutor AI?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <LucideIcons.CheckCircle className="text-edu-accent mt-1 mr-3 flex-shrink-0" />
                      <span>Bantuan 24/7 untuk pertanyaan dan kesulitan belajar</span>
                    </li>
                    <li className="flex items-start">
                      <LucideIcons.CheckCircle className="text-edu-accent mt-1 mr-3 flex-shrink-0" />
                      <span>Pembelajaran yang disesuaikan dengan gaya dan kecepatan belajar siswa</span>
                    </li>
                    <li className="flex items-start">
                      <LucideIcons.CheckCircle className="text-edu-accent mt-1 mr-3 flex-shrink-0" />
                      <span>Latihan soal yang menyesuaikan dengan tingkat kemampuan</span>
                    </li>
                    <li className="flex items-start">
                      <LucideIcons.CheckCircle className="text-edu-accent mt-1 mr-3 flex-shrink-0" />
                      <span>Persiapan ujian yang lebih efektif dengan simulasi tryout</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Features;
