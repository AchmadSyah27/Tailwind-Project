import Image from "next/image";
export default function Advertisement() {
  return (
    <section id="advertisement" className="bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-capitalize text-3xl font-semibold text-white py-8">
          Promo Spesial
        </h2>
        <div className="max-w-[1200px] px-4 mx-auto">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">

              {/* Card 1 */}
              <div className="promo_card swiper-slide bg-cream rounded p-8 h-full shadow-md relative">
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-s font-bold px-3 py-1 rounded-full">
                  <s>Rp45.000</s>
                </div>
                <Image 
                src="/images/1.png" alt="Product Image" 
                fill
                className="mx-auto w-60 object-contain" />
                <h2 className="text-xl font-bold text-primary mt-4">LATTE</h2>
                <p className="text-primary text-sm mt-2">Spesial memperingati ...</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-teal text-white font-medium rounded-lg shadow-md hover:bg-white hover:text-black transition">
                  ✨Rp30.000✨
                </a>
              </div>

              {/* Card 2 */}
              <div className="promo_card swiper-slide bg-cream rounded p-8 h-full shadow-md relative">
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-s font-bold px-3 py-1 rounded-full">
                  <s>Rp50.000</s>
                </div>
                <Image src="/images/2.png" alt="Product Image" 
                fill 
                className="mx-auto w-60 object-contain" />
                <h2 className="text-xl font-bold text-primary mt-4">FRAPPUCINO</h2>
                <p className="text-primary text-sm mt-2">Spesial memperingati ....</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-teal text-white font-medium rounded-lg shadow-md hover:bg-white hover:text-black transition">
                  ✨Rp40.000✨
                </a>
              </div>

              {/* Card 3 */}
              <div className="promo_card swiper-slide bg-cream rounded p-8 h-full shadow-md relative">
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-s font-bold px-3 py-1 rounded-full">
                  <s>Rp45.000</s>
                </div>
                <Image src="/images/3.png" alt="Product Image" 
                fill
                className="mx-auto w-60 object-contain" />
                <h2 className="text-xl font-bold text-primary mt-4">ESPRESSO</h2>
                <p className="text-primary text-sm mt-2">Spesial memperingati ...</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-teal text-white font-medium rounded-lg shadow-md hover:bg-white hover:text-black transition">
                  ✨Rp30.000✨
                </a>
              </div>

              {/* Card 4 */}
              <div className="promo_card swiper-slide bg-cream rounded p-8 h-full shadow-md relative">
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-s font-bold px-3 py-1 rounded-full">
                  <s>Rp35.000</s>
                </div>
                <Image src="/images/4.png" alt="Product Image" 
                fill 
                className="mx-auto w-60 object-contain" />
                <h2 className="text-xl font-bold text-primary mt-4">MOCHA</h2>
                <p className="text-primary text-sm mt-2">Spesial memperingati ....</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-teal text-white font-medium rounded-lg shadow-md hover:bg-white hover:text-black transition">
                  ✨Rp30.000✨
                </a>
              </div>

            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
