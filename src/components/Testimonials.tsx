
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Budi",
      location: "Jakarta",
      rating: 5,
      text: "Tatawaktu ID membuat undangan pernikahan kami menjadi sangat istimewa! Prosesnya mudah dan hasilnya melampaui ekspektasi. Terima kasih!",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dini & Rizki",
      location: "Bandung",
      rating: 5,
      text: "Pelayanan yang luar biasa! Tim sangat responsif dan membantu kami membuat undangan yang sempurna. Highly recommended!",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Maya & Andi",
      location: "Surabaya",
      rating: 5,
      text: "Undangan digitalnya elegant banget dan mudah dibagikan ke keluarga. Guests juga pada bilang bagus dan unik!",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Kata Mereka
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman pasangan bahagia yang telah mempercayakan momen spesial mereka kepada kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-gradient-to-br from-pink-50 to-purple-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-pink-400 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[2] ? testimonial.name.split(' ')[2][0] : testimonial.name.split(' ')[1][0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
