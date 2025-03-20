
import { Avatar } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";

const teamMembers = [
  {
    name: "Dr. Alifa Ramadhani",
    role: "Pendiri & CEO",
    bio: "Doktor Ilmu Komputer dengan pengalaman 15 tahun di bidang AI dan pendidikan.",
    image: "/placeholder.svg"
  },
  {
    name: "Budi Santoso",
    role: "CTO",
    bio: "Mantan kepala riset AI di Google Indonesia dengan pengalaman 10+ tahun pengembangan teknologi pendidikan.",
    image: "/placeholder.svg"
  },
  {
    name: "Larasati Widya",
    role: "Kepala Pendidikan",
    bio: "Pendidik dengan 12 tahun pengalaman mengembangkan kurikulum berbasis teknologi.",
    image: "/placeholder.svg"
  },
  {
    name: "Dimas Prayoga",
    role: "Kepala Produk",
    bio: "Ahli UX dengan fokus pengembangan produk edukasi yang mudah digunakan untuk semua usia.",
    image: "/placeholder.svg"
  },
];

const milestones = [
  {
    year: "2018",
    title: "Awal Perjalanan",
    description: "EduVerse didirikan dengan visi mengubah cara belajar di Indonesia melalui teknologi AI."
  },
  {
    year: "2019",
    title: "Prototype Pertama",
    description: "Meluncurkan versi beta EduTutor AI untuk 5 sekolah di Jakarta dan Bandung."
  },
  {
    year: "2020",
    title: "Pendanaan Seri A",
    description: "Mendapatkan pendanaan 2 juta USD untuk mengembangkan teknologi dan memperluas jangkauan."
  },
  {
    year: "2021",
    title: "Ekspansi Nasional",
    description: "Layanan tersedia di 100+ sekolah di seluruh Indonesia dengan 50.000+ pengguna aktif."
  },
  {
    year: "2022",
    title: "EduAdmin AI",
    description: "Meluncurkan solusi khusus untuk administrator pendidikan dan manajemen sekolah."
  },
  {
    year: "2023",
    title: "Platform Baru",
    description: "Merilis platform generasi baru dengan fitur personalisasi pembelajaran yang lebih canggih."
  }
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="container px-4 md:px-6">
          <div className="text-center space-y-4 py-10 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight lg:text-6xl">
              Tentang <span className="text-gradient">EduVerse AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Membangun masa depan pendidikan Indonesia dengan kekuatan kecerdasan buatan.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="container py-12 px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <h2 className="text-3xl font-bold">Kisah Kami</h2>
              <p className="text-muted-foreground">
                EduVerse AI berawal dari keprihatinan atas ketimpangan akses pendidikan berkualitas di Indonesia. Didirikan pada tahun 2018 oleh sekelompok pendidik dan ahli teknologi, kami bermimpi menciptakan solusi pendidikan yang dapat menjangkau semua kalangan.
              </p>
              <p className="text-muted-foreground">
                Setelah 5 tahun pengembangan dan penelitian, kami kini memiliki platform pembelajaran berbasis AI yang dapat memahami kebutuhan individu siswa dan memberikan bimbingan yang dipersonalisasi sesuai gaya belajar mereka.
              </p>
              <p className="text-muted-foreground">
                Misi kami sederhana: membuat pendidikan berkualitas dapat diakses oleh semua orang, di mana pun mereka berada. Teknologi kami dirancang untuk melengkapi—bukan menggantikan—peran guru, membebaskan mereka untuk fokus pada aspek humanis dari pendidikan.
              </p>
            </div>
            <div className="relative h-80 md:h-auto order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-accent/20 rounded-lg transform -rotate-3"></div>
              <div className="relative h-full bg-white/90 rounded-lg p-8 shadow-soft">
                <blockquote className="text-lg italic">
                  "Kami percaya bahwa teknologi dapat membuka pintu pendidikan berkualitas untuk semua anak Indonesia, tidak peduli di mana mereka tinggal."
                  <footer className="mt-4 font-medium not-italic">— Dr. Alifa Ramadhani, Pendiri EduVerse AI</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-muted/30 py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Nilai-Nilai Kami</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-soft">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Akses Universal</h3>
                <p className="text-muted-foreground">Kami berkomitmen membuat teknologi pendidikan berkualitas dapat dijangkau oleh semua kalangan.</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-soft">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Personalisasi</h3>
                <p className="text-muted-foreground">Setiap siswa belajar dengan cara yang berbeda. Teknologi kami menyesuaikan dengan gaya belajar individual.</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-soft">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Etika AI</h3>
                <p className="text-muted-foreground">Kami mengembangkan AI dengan memperhatikan aspek etika, privasi, dan keamanan data penggunanya.</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-soft">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Kolaborasi</h3>
                <p className="text-muted-foreground">Kami bekerja sama dengan pendidik, sekolah, dan orang tua untuk menciptakan ekosistem pendidikan yang holistik.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container py-16 px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Perjalanan Kami</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted"></div>
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                    <div className="hidden md:block w-5/12"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-background"></div>
                    </div>
                    <div className="w-full md:w-5/12">
                      <div className="bg-background p-6 rounded-lg shadow-soft">
                        <span className="text-primary font-bold">{milestone.year}</span>
                        <h3 className="text-xl font-medium mt-1 mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-muted/30 py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Tim Kami</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Dibalik EduVerse AI terdapat tim ahli yang berdedikasi untuk mengubah masa depan pendidikan Indonesia.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-background p-6 rounded-lg shadow-soft text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <img src={member.image} alt={member.name} />
                  </Avatar>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
