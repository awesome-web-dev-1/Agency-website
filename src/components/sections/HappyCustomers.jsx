import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { customersText } from "../../constant/data";

const HappyCustomers = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 items-center gap-12">
        {/* Image Section */}
        <figure className="order-1 md:-order-1">
          <img
            src="/images/h1-customer.png"
            alt="Customer Banner"
            className="rounded-s-[20px] rounded-se-[120px] rounded-es-[120px] rounded-ee-[20px]"
          />
        </figure>

        {/* Testimonial Section */}
        <div>
          <img src="/images/quote.svg" alt="Quote Icon" />
          <h2 className="mt-[23px]">Our Happy Customers</h2>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ 
                delay: 4000,
                disableOnInteraction: true
             }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="my-[25px]"
          >
            {customersText.map((item, index) => (
              <SwiperSlide key={item.id} className="text-center">
                <p className="font-semibold text-neutral-700 italic text-[18px]">
                  {item.text}
                </p>
                <h4 className="text-neutral-800 text-[18px] my-2">
                  {item.author}
                </h4>
                <p>{item.job}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="flex gap-2 justify-center mt-4">
            {customersText.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-5 bg-black" : "w-2 bg-black/50"
                }`}
              ></div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 justify-center mt-4">
            <button className="prev-btn bg-black text-white p-2 hover:bg-black/90">
              <ChevronLeftIcon />
            </button>
            <button className="next-btn bg-black text-white p-2 hover:bg-black/90">
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
