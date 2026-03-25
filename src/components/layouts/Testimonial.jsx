import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { testimonials } from '../../data/menu';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonial = () => {
  // Fonction pour afficher les étoiles
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="bg-orange-500 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Avis Clients</h2>
          <p className="text-orange-100">Ils ont aimé, vous allez adorer</p>
          <div className="flex justify-center mt-6">
            <div className="w-20 h-1 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Slider des avis */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-xl p-6 shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                {/* Étoiles */}
                <div className="text-center mb-4">
                  <span className="text-2xl text-yellow-500">
                    {renderStars(testimonial.rating)}
                  </span>
                </div>
                
                {/* Commentaire */}
                <p className="text-gray-600 text-center italic mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                {/* Date */}
                <p className="text-gray-400 text-center text-xs mb-3">
                  {testimonial.date}
                </p>
                
                {/* Infos client */}
                <div className="flex items-center justify-center gap-3 border-t pt-4 mt-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                  />
                  <div>
                    <span className="font-semibold text-gray-800 block">
                      {testimonial.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      Client satisfait
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx>{`
          :global(.swiper-pagination-bullet-active) {
            background-color: white !important;
          }
          :global(.swiper-button-next),
          :global(.swiper-button-prev) {
            color: white !important;
          }
          :global(.swiper-button-next:hover),
          :global(.swiper-button-prev:hover) {
            color: #fed7aa !important;
          }
          :global(.swiper-pagination-bullet) {
            background-color: rgba(255, 255, 255, 0.5);
          }
          :global(.swiper-pagination-bullet-active) {
            background-color: white !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonial;