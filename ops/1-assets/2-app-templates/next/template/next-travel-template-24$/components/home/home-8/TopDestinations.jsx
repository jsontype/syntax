import { destinations8 } from "../../../data/desinations";
import Slider from "react-slick";
import Link from "next/link";

const TopDestinations = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {destinations8.map((item) => (
        <div
          className="col-xl-2 col-lg-3 col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href="/destinations"
            className="citiesCard -type-4 d-block text-center"
          >
            <div className="citiesCard__image size-160 rounded-full mx-auto">
              <img
                className="object-cover js-lazy"
                src={item.img}
                alt="image"
              />
            </div>
            <div className="citiesCard__content mt-10">
              <h4 className="text-18 lh-13 fw-500 text-dark-1">
                {item.location}
              </h4>
              <div className="text-14 text-light-1">
                From US ${item.price} per day
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default TopDestinations;
