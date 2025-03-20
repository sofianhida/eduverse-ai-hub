
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const pricingPlans = [
  {
    name: "Gratis",
    price: "Rp 0",
    description: "Untuk siswa dan pengajar yang baru memulai",
    features: [
      "5 percakapan AI per hari",
      "Akses ke materi dasar",
      "Rangkuman pembelajaran singkat",
      "Histori chat tersimpan 7 hari",
    ],
    popular: false,
    buttonText: "Mulai Gratis",
    buttonVariant: "outline" as const,
  },
  {
    name: "Standard",
    price: "Rp 99.000",
    period: "per bulan",
    description: "Untuk siswa dan pengajar yang serius belajar",
    features: [
      "100 percakapan AI per hari",
      "Akses ke semua materi pembelajaran",
      "Analisis kemajuan belajar",
      "Rangkuman pembelajaran detail",
      "Histori chat tersimpan 30 hari",
      "Dukungan prioritas",
    ],
    popular: true,
    buttonText: "Pilih Paket",
    buttonVariant: "default" as const,
  },
  {
    name: "Premium",
    price: "Rp 249.000",
    period: "per bulan",
    description: "Untuk institusi pendidikan dan kelas besar",
    features: [
      "Percakapan AI tak terbatas",
      "Akses ke materi premium & eksklusif",
      "Analisis kemajuan belajar lanjutan",
      "Fitur kolaborasi tim",
      "Histori chat tersimpan permanen",
      "Dukungan prioritas 24/7",
      "Pelatihan khusus untuk pengajar"
    ],
    popular: false,
    buttonText: "Pilih Paket",
    buttonVariant: "default" as const,
  },
];

const Pricing = () => {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <section className="container space-y-12 px-4 md:px-6">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight lg:text-6xl">
              Paket Harga <span className="text-gradient">EduVerse AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan belajar Anda. Upgrade atau downgrade kapan saja.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${billingInterval === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>Bulanan</span>
            <button
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => setBillingInterval(billingInterval === "monthly" ? "yearly" : "monthly")}
            >
              <span
                className={`${
                  billingInterval === "yearly" ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 rounded-full bg-background transition-transform`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center ${billingInterval === "yearly" ? "text-foreground" : "text-muted-foreground"}`}>
              Tahunan
              <span className="ml-1.5 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                Hemat 20%
              </span>
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg scale-105" : "border-border"}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 -mt-2 -mr-2">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Populer
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="ml-1 text-muted-foreground">{plan.period}</span>}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant={plan.buttonVariant} className="w-full">
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto mt-12 p-6 border border-border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Butuh solusi khusus?</h3>
            <p className="text-muted-foreground mb-4">
              Kami menawarkan paket kustom untuk institusi pendidikan dan perusahaan dengan kebutuhan khusus.
            </p>
            <Button variant="outline">Hubungi Kami</Button>
          </div>
        </section>

        <section className="container mt-20 px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Pertanyaan Umum</h3>
              <p className="text-muted-foreground">
                Dapatkan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami.
              </p>
              <Button variant="link" className="p-0 mt-2">Lihat FAQ →</Button>
            </div>
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Dukungan 24/7</h3>
              <p className="text-muted-foreground">
                Tim dukungan kami siap membantu Anda kapan saja.
              </p>
              <Button variant="link" className="p-0 mt-2">Hubungi Dukungan →</Button>
            </div>
            <div className="bg-secondary/50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Kebijakan Pengembalian Dana</h3>
              <p className="text-muted-foreground">
                Puas atau uang kembali dalam 14 hari pertama berlangganan.
              </p>
              <Button variant="link" className="p-0 mt-2">Pelajari Lebih Lanjut →</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
