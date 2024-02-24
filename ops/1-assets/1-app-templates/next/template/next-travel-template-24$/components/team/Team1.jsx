import Image from "next/image";
import Slider from "react-slick";
import teamData from "../../data/teamData";

const Team1 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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
          dots: true,
        },
      },
    ],
  };

  // custom navigation
  function Arrow(props) {
    let name =
      props.type === "next"
        ? "arrow-top-right d-flex items-center text-24 arrow-right-hover arrow-next"
        : "arrow-top-right d-flex items-center text-24 arrow-left-hover arro-prev";

    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-arrow-right"></i>
        </>
      ) : (
        <>
          <span className="icon icon-arrow-left"></span>
        </>
      );
    return (
      <button className={name} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      <Slider
        {...settings}
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
      >
        {teamData.map((item) => (
          <div className="swiper-slide" key={item.id}>
            <Image
              width={234}
              height={300}
              src={item.img}
              alt="image"
              className="rounded-4 col-12"
            />
            <div className="mt-10">
              <div className="text-18 lh-15 fw-500">{item.name}</div>
              <div className="text-14 lh-15">{item.designation}</div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Team1;
