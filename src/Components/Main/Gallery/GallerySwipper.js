// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./GallerySwipper.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function TestimonialsSwipper({ galleryData }) {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={2}
        navigation
        autoplay={{ delay: 10000 }}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 1030px
          1080: {
            width: 1080,
            slidesPerView: 5,
            spaceBetween: 30,
          },
          680: {
            width: 680,
            slidesPerView: 3,
            spaceBetween: 50,
          },
          // when window width is >= 640px
          320: {
            width: 0,
            slidesPerView: 1,
            spaceBetween: 70,
          },
        }}
        className="mySwiper"
      >
        <>
          {galleryData.map((e) => (
            <SwiperSlide key={Math.random()}>
              <div className="gallery__images">
                <img
                  className="gallery__images--image"
                  src={e.image}
                  alt="aaa"
                />
                <h3 className="gallery__images--title">
                  Just Above <br /> <span>The City</span>
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </>
  );
}
