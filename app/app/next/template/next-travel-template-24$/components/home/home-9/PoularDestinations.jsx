import Link from "next/link";
import Slider from "react-slick";
import { destinations9 } from "../../../data/desinations";

const PoularDestinations = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
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
      {destinations9.map((item) => (
        <div
          className="col-xl col-lg-3 col-6"
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href="/cruise/cruise-list-v2"
            className="citiesCard -type-5 d-flex items-center sm:flex-column sm:items-start px-20 py-20 sm:px-15 sm:py-20 bg-light-2 rounded-4"
          >
            <i className="icon-destination text-24" />
            <div className="ml-10 sm:ml-0 sm:mt-10">
              <h4 className="text-16 fw-500">{item.location}</h4>
              <p className="text-14">{item.numberOfProperties} properties</p>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default PoularDestinations;
