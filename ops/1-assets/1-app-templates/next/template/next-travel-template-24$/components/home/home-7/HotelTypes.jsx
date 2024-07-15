import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const HotelTypes = () => {
  const hotelTypeContent = [
    {
      id: 1,
      img: "/img/stays/1/1.png",
      type: "Apartments",
      numberOfProperties: "4090",
      delayAnimation: "100",
    },
    {
      id: 2,
      img: "/img/stays/1/2.png",
      type: "Resort",
      numberOfProperties: "4090",
      delayAnimation: "200",
    },
    {
      id: 3,
      img: "/img/stays/1/3.png",
      type: "Villas",
      numberOfProperties: "4090",
      delayAnimation: "300",
    },
    {
      id: 4,
      img: "/img/stays/1/4.png",
      type: "Cabins",
      numberOfProperties: "4090",
      delayAnimation: "400",
    },
    {
      id: 5,
      img: "/img/stays/1/5.png",
      type: "Tiny Houses",
      numberOfProperties: "4090",
      delayAnimation: "500",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
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
    <>
      <Slider {...settings} arrows={false}>
        {hotelTypeContent.map((item) => (
          <div
            key={item.id}
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            <Link href="/rental/rental-list-v2" className="citiesCard -type-2 ">
              <div className="citiesCard__image rounded-4 ratio ratio-23:18">
                <Image
                  className="img-ratio rounded-4 js-lazy"
                  src={item.img}
                  alt="image"
                  width={236}
                  height={185}
                />
              </div>
              <div className="citiesCard__content mt-10">
                <h4 className="text-18 lh-13 fw-500 text-dark-1">
                  {item.type}
                </h4>
                <div className="text-14 text-light-1">
                  {item.numberOfProperties} properties
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default HotelTypes;
