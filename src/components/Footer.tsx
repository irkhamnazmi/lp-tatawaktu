
import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-pink-500" />
              <span className="text-xl font-bold">Tatawaktu ID</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Menciptakan undangan pernikahan digital yang indah dan berkesan untuk momen bahagia Anda.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Undangan Digital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Video Invitation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">RSVP Management</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu Cepat</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#themes" className="hover:text-white transition-colors">Tema</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimoni</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>hello@tatawaktu.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Tatawaktu ID. Hak Cipta Dilindungi. Dibuat dengan ❤️ untuk pasangan Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
