import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import carsData from "../../data/cars";
import isTextMatched from "../../utils/isTextMatched";

const Cars = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  var itemSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function Arrow(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      <Slider {...settings}>
        {carsData.slice(0, 4).map((item) => (
          <div
            key={item.id}
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            <Link
              href={`/car/car-single/5`}
              className="carCard -type-1 d-block rounded-4 hover-inside-slider"
            >
              <div className="carCard__image">
                <div className="cardImage inside-slider">
                  <div className="border-light rounded-4 overflow-hidden">
                    {" "}
                    <Slider
                      {...itemSettings}
                      arrows={true}
                      nextArrow={<Arrow type="next" />}
                      prevArrow={<Arrow type="prev" />}
                    >
                      {item?.slideImg?.map((slide, i) => (
                        <div className="cardImage ratio ratio-6:5" key={i}>
                          <div className="cardImage__content ">
                            <Image
                              width={300}
                              height={300}
                              className="col-12 js-lazy"
                              src={slide}
                              alt="image"
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>

                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div>

                  <div className="cardImage__leftBadge">
                    <div
                      className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase  ${
                        isTextMatched(item?.tag, "best seller")
                          ? "bg-blue-1 text-white"
                          : ""
                      }`}
                    >
                      {item?.tag}
                    </div>
                  </div>
                </div>
              </div>
              {/* End image card */}

              <div className="carCard__content mt-10">
                <div className="d-flex items-center lh-14 mb-5">
                  <div className="text-14 text-light-1">{item?.location}</div>
                  <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                  <div className="text-14 text-light-1 uppercase">
                    {item?.type}
                  </div>
                </div>

                <h4 className="text-dark-1 text-18 lh-16 fw-500">
                  {item?.title}{" "}
                  <span className="text-15 text-light-1 fw-400">
                    or similar
                  </span>
                </h4>
                <p className="text-light-1 lh-14 text-14 mt-5" />

                <div className="row x-gap-20 y-gap-10 items-center pt-5">
                  <div className="col-auto">
                    <div className="d-flex items-center text-14 text-dark-1">
                      <i className="icon-user-2 mr-10" />
                      <div className="lh-14">{item?.seat}</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center text-14 text-dark-1">
                      <i className="icon-luggage mr-10" />
                      <div className="lh-14">{item?.luggage}</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center text-14 text-dark-1">
                      <i className="icon-transmission mr-10" />
                      <div className="lh-14">{item?.transmission} </div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center text-14 text-dark-1">
                      <i className="icon-speedometer mr-10" />
                      <div className="lh-14">{item?.speed}</div>
                    </div>
                  </div>
                </div>
                {/* End .row */}

                <div className="d-flex items-center mt-20">
                  <div className="flex-center bg-yellow-1 rounded-4 size-30 text-12 fw-600 text-dark-1">
                    {item.ratings}
                  </div>
                  <div className="text-14 text-dark-1 fw-500 ml-10">
                    Exceptional
                  </div>
                  <div className="text-14 text-light-1 ml-10">
                    {item?.numberOfReviews} reviews
                  </div>
                </div>
                <div className="mt-5">
                  <div className="text-light-1">
                    <span className="fw-500 text-dark-1">US${item?.price}</span>{" "}
                    total
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Cars;
