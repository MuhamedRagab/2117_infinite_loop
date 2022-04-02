// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./TestimonialsSwipper.css";

// import required modules
import { Pagination, Navigation, Autoplay, FreeMode } from "swiper";

export default function TestimonialsSwipper({ swiperData }) {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, FreeMode]}
        slidesPerView={3}
        spaceBetween={30}
        navigation
        autoplay={{ delay: 10000 }}
        freeMode
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 1030px
          680: {
            width: 680,
            slidesPerView: 2,
          },
          // when window width is >= 640px
          320: {
            width: 0,
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <>
          {swiperData.map((e) => (
            <SwiperSlide key={e.id}>
              <img src={e.image} alt="img" />
              <p className=".testimonials__article--para">{e.description}</p>
              <h4 className=".testimonials__article--para jop">{e.jop}</h4>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </>
  );
}
