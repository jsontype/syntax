import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";

const PopularRoutes = () => {
  const rentalRoutes = [
    {
      id: 1,
      tag: "",
      img: "/img/rentals/1.png",
      destination: "Istanbul - New York",
      tripType: "Round-trip",
      data: "Wed, Jun 1 - Sun, Jun 5",
      price: "72",
      delayAnimation: "100",
    },
    {
      id: 2,
      tag: "",
      img: "/img/rentals/2.png",
      destination: "Istanbul - Paris",
      tripType: "Round-trip",
      data: "Wed, Jun 1 - Sun, Jun 5",
      price: "72",
      delayAnimation: "200",
    },
    {
      id: 3,
      tag: "",
      img: "/img/rentals/3.png",
      destination: "Istanbul - Antalya",
      tripType: "Round-trip",
      data: "Wed, Jun 1 - Sun, Jun 5",
      price: "72",
      delayAnimation: "300",
    },
    {
      id: 4,
      tag: "",
      img: "/img/rentals/4.png",
      destination: "Istanbul - London",
      tripType: "Round-trip",
      data: "Wed, Jun 1 - Sun, Jun 5",
      price: "72",
      delayAnimation: "400",
    },
    {
      id: 5,
      tag: "",
      img: "/img/rentals/1.png",
      destination: "Istanbul - New York",
      tripType: "Round-trip",
      data: "Wed, Jun 1 - Sun, Jun 5",
      price: "72",
      delayAnimation: "500",
    },
    {
      id: 6,
      tag: "",
      img: "/img/rentals/2.png",
      destination: "Istanbul - Paris",
      tripType: "Round-trip",
      data: "Wed, Jun 1 - Sun, Jun 5",
      price: "72",
      delayAnimation: "600",
    },
  ];
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".js-routes-routes_next",
          prevEl: ".js-routes-routes_prev",
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {rentalRoutes.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href="/rental/rental-list-v2"
              className="rentalCard -type-2"
              data-aos="fade"
              data-aos-delay={item.delayAnimation}
            >
              <div className="rentalCard__image">
                <div className="cardImage ratio ratio-6:5">
                  <div className="cardImage__content">
                    <Image
                      width={300}
                      height={250}
                      className="rounded-4 col-12"
                      src={item.img}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              <div className="rentalCard__content mt-10">
                <h4 className="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                  <span>{item.destination}</span>
                </h4>
                <div className="d-flex items-center text-light-1">
                  <div className="text-14">{item.tripType}</div>
                  <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                  <div className="text-14">{item.date}</div>
                </div>
                <div className="text-light-1  mt-5">
                  <span className="fw-500 text-dark-1">US${item.price}</span>/
                  per night
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* start navigation pagination */}

      <button className="section-slider-nav -prev flex-center button -blue-1 bg-white text-dark-1 size-40 rounded-full shadow-1 sm:d-none js-routes-routes_prev">
        <i className="icon icon-chevron-left text-12" />
      </button>
      <button className="section-slider-nav -next flex-center button -blue-1 bg-white text-dark-1 size-40 rounded-full shadow-1 sm:d-none js-routes-routes_next">
        <i className="icon icon-chevron-right text-12" />
      </button>

      {/* end navigation pagination */}
    </>
  );
};

export default PopularRoutes;
