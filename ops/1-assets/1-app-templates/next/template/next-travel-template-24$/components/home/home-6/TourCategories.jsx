import Link from "next/link";
import Slider from "react-slick";
import { tourCategories1 } from "../../../data/tourCategories";

const TourCategories = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
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
    <Slider {...settings} arrows={false}>
      {tourCategories1.slice(8, 13).map((item) => (
        <div
          className="col-xl col-md-4 col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.dealyAimation}
        >
          <Link
            href="/activity/activity-list-v3"
            className="tourTypeCard -type-1 d-block rounded-4 bg-blue-1-05 rounded-4"
          >
            <div className="tourTypeCard__content text-center pt-60 pb-24 px-30">
              <i className={`${item.icon} text-60 sm:text-40 text-blue-1`}></i>
              <h4 className="text-dark-1 text-18 fw-500 mt-50 md:mt-30">
                {item.name}
              </h4>
              <p className="text-light-1 lh-14 text-14 mt-5">
                {item.tourNumber} Tours From ${item.price}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default TourCategories;
