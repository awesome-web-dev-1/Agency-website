import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import { teamItems } from "../../constant/data";
import TeamCard from "./TeamCard";

const TeamSec = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section">
      <div className="container">
        <p>/ Meet Our Experts /</p>
        <h2>Our Leadership Team</h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mt-[50px]"
        >
          {teamItems.map((item, index) => (
            <SwiperSlide key={item.id + index}>
              <TeamCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="flex justify-center gap-1 mt-8">
          {teamItems.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index ? "w-5 bg-black" : "w-2 bg-black/50"
              }`}
            ></div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 justify-center mt-8">
          <button className="prev-btn bg-black text-white p-2 hover:bg-black/90">
            <IoChevronBack />
          </button>
          <button className="next-btn bg-black text-white p-2 hover:bg-black/90">
            <IoChevronForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSec;
