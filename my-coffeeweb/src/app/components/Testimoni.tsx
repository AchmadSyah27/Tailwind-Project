"use client";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Testimoni() {
  return (
    <section id="testimoni" className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white text-center mb-8">Testimoni</h2>
        <p className="text-xl text-white text-center mb-12 font-normal">
          Semua Pesan Baik dari Customer Kami
        </p>
        <div className="max-w-[1200px] px-4 mx-auto">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="testimonial__card swiper-slide bg-cream rounded p-8 h-full shadow-md flex flex-col">
                <div className="flex text-accent mb-4">
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                </div>
                <p className="italic mb-6 text-black leading-relaxed">
                  "Rasa kopinya enak sekali, saya selalu kembali untuk
                  menikmatinya."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center text-white">
                    <i data-feather="user"></i>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg text-black">
                      John Doe
                    </h3>
                    <p className="text-sm text-gray-600">Coffee Enthusiast</p>
                  </div>
                </div>
              </div>

              <div className="testimonial__card swiper-slide bg-cream rounded p-8 h-full shadow-md flex flex-col">
                <div className="flex text-accent mb-4">
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                </div>
                <p className="italic mb-6 text-black leading-relaxed">
                  "Tempat yang nyaman dan pelayanan yang ramah. Sangat
                  recommended!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center text-white">
                    <i data-feather="user"></i>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg text-black">
                      Tonny Stark
                    </h3>
                    <p className="text-sm text-gray-600">Regular Customer</p>
                  </div>
                </div>
              </div>

              <div className="testimonial__card swiper-slide bg-cream rounded p-8 h-full shadow-md flex flex-col">
                <div className="flex text-accent mb-4">
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                </div>
                <p className="italic mb-6 text-black leading-relaxed">
                  "Menu kopinya bervariasi dan harga sangat terjangkau.
                  Perfect!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center text-white">
                    <i data-feather="user"></i>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg text-black">
                      Mark Geats
                    </h3>
                    <p className="text-sm text-gray-600">Coffee Blogger</p>
                  </div>
                </div>
              </div>

              <div className="testimonial__card swiper-slide bg-cream rounded p-8 h-full shadow-md flex flex-col">
                <div className="flex text-accent mb-4">
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                  <i data-feather="star" className="mr-2"></i>
                </div>
                <p className="italic mb-6 text-black leading-relaxed">
                  "Suasana cafe yang cozy dan wifi kencang, cocok untuk kerja
                  remote."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center text-white">
                    <i data-feather="user"></i>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg text-black">
                      Itsuna Kei
                    </h3>
                    <p className="text-sm text-gray-600">Digital Nomad</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
