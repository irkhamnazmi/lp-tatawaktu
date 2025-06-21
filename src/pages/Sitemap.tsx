
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Heart, Users, Award, FileText, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Sitemap = () => {
  const sitemapData = [
    {
      category: "Halaman Utama",
      icon: Home,
      links: [
        { name: "Beranda", url: "/", description: "Halaman utama Tatawaktu ID" },
        { name: "Hero Section", url: "/#hero", description: "Bagian pembuka dengan penawaran utama" }
      ]
    },
    {
      category: "Produk & Layanan",
      icon: Heart,
      links: [
        { name: "Tema Undangan", url: "/#themes", description: "Koleksi tema undangan pernikahan" },
        { name: "Custom Design", url: "/custom-design", description: "Layanan desain khusus" },
        { name: "Video Invitation", url: "/video-invitation", description: "Undangan dalam bentuk video" }
      ]
    },
    {
      category: "Tentang Perusahaan",
      icon: Users,
      links: [
        { name: "Tentang Kami", url: "/#about", description: "Informasi lengkap tentang Tatawaktu ID" },
        { name: "Tim Kami", url: "/team", description: "Profil tim kreatif kami" },
        { name: "Visi & Misi", url: "/vision-mission", description: "Visi dan misi perusahaan" }
      ]
    },
    {
      category: "Testimoni & Portfolio",
      icon: Award,
      links: [
        { name: "Testimoni", url: "/#testimonials", description: "Ulasan dari klien kami" },
        { name: "Portfolio", url: "/portfolio", description: "Galeri karya undangan terbaik" },
        { name: "Case Studies", url: "/case-studies", description: "Studi kasus proyek sukses" }
      ]
    },
    {
      category: "Informasi & Bantuan",
      icon: FileText,
      links: [
        { name: "FAQ", url: "/faq", description: "Pertanyaan yang sering diajukan" },
        { name: "Panduan Pemesanan", url: "/guide", description: "Cara memesan undangan digital" },
        { name: "Kebijakan Privasi", url: "/privacy-policy", description: "Kebijakan privasi dan data" },
        { name: "Syarat & Ketentuan", url: "/terms", description: "Syarat dan ketentuan layanan" }
      ]
    },
    {
      category: "Kontak & Dukungan",
      icon: Mail,
      links: [
        { name: "Hubungi Kami", url: "/contact", description: "Informasi kontak dan alamat" },
        { name: "Dukungan Pelanggan", url: "/support", description: "Bantuan dan dukungan teknis" },
        { name: "Permintaan Quote", url: "/quote", description: "Minta penawaran harga" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Peta Situs
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan semua halaman dan layanan yang tersedia di Tatawaktu ID
            </p>
          </div>

          {/* Sitemap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {sitemapData.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg">
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <span>{section.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="font-medium text-gray-800 group-hover:text-pink-600 transition-colors">
                            {link.name}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {link.description}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Siap Membuat Undangan Impian Anda?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Hubungi kami sekarang dan wujudkan undangan pernikahan digital yang sempurna
            </p>
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full">
              Mulai Konsultasi
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sitemap;
