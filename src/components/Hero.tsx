
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-400 via-pink-400 to-purple-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-white mr-3 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Tatawaktu ID
            </h1>
            <Sparkles className="w-8 h-8 text-white ml-3 animate-pulse" />
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Ciptakan undangan pernikahan digital yang indah dan berkesan untuk hari bahagia Anda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 px-8 py-3 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              Buat Undangan Sekarang
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg rounded-full backdrop-blur-sm">
              Lihat Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Pasangan Bahagia</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Template Cantik</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Dukungan Pelanggan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
