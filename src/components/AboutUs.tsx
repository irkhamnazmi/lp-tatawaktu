
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Clock } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: Heart,
      title: "Dibuat dengan Cinta",
      description: "Setiap undangan dirancang dengan detail dan perhatian penuh untuk momen spesial Anda"
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Designer berpengalaman dan customer service yang siap membantu 24/7"
    },
    {
      icon: Award,
      title: "Kualitas Terbaik",
      description: "Standar kualitas tinggi dengan teknologi terkini untuk hasil yang sempurna"
    },
    {
      icon: Clock,
      title: "Proses Cepat",
      description: "Undangan Anda akan selesai dalam waktu 1-3 hari kerja"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Tentang Tatawaktu ID
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Tatawaktu ID hadir untuk membantu pasangan Indonesia menciptakan undangan pernikahan digital yang indah, modern, dan berkesan. Kami memahami bahwa setiap momen pernikahan adalah istimewa dan unik.
              </p>
              <p>
                Dengan pengalaman lebih dari 3 tahun melayani ribuan pasangan di seluruh Indonesia, kami berkomitmen memberikan pelayanan terbaik dengan harga yang terjangkau.
              </p>
              <p>
                Tim kreatif kami terdiri dari designer profesional yang berpengalaman dalam industri wedding dan teknologi digital terkini.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
