
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ThemeList = () => {
  const themes = [
    {
      name: "Classic Elegance",
      description: "Desain klasik dengan sentuhan emas dan putih yang elegan",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      color: "from-amber-100 to-amber-200"
    },
    {
      name: "Modern Minimalist",
      description: "Tampilan bersih dan modern dengan tipografi yang indah",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      color: "from-blue-100 to-blue-200"
    },
    {
      name: "Rustic Garden",
      description: "Nuansa natural dengan bunga-bunga dan dedaunan",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      color: "from-green-100 to-green-200"
    },
    {
      name: "Royal Palace",
      description: "Kemewahan istana dengan ornamen yang menawan",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      color: "from-purple-100 to-purple-200"
    },
    {
      name: "Beach Romance",
      description: "Romantis pantai dengan warna biru dan putih",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      color: "from-cyan-100 to-cyan-200"
    },
    {
      name: "Vintage Love",
      description: "Gaya vintage dengan sentuhan retro yang menawan",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      color: "from-rose-100 to-rose-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="themes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tema Undangan Pilihan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pilih dari koleksi tema yang telah dirancang khusus untuk membuat undangan pernikahan Anda menjadi istimewa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={theme.image} 
                  alt={theme.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${theme.color} opacity-20`}></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{theme.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{theme.description}</p>
                <button className="mt-4 text-pink-600 font-medium hover:text-pink-700 transition-colors">
                  Lihat Detail →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeList;
