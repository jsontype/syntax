import Image from "next/image";
import Link from "next/link";

const Slights = () => {
  const slightContent = [
    {
      id: 1,
      img: "/img/backgrounds/1.png",
      title: "The British Museum",
      text: ` Learn about British history at the Tower of London, a medieval
            castle that was first built in 1066 by William the Conqueror.`,
      delayAnimation: "100",
    },
    {
      id: 2,
      img: "/img/backgrounds/2.png",
      title: "London Eye",
      text: ` Learn about British history at the Tower of London, a medieval
            castle that was first built in 1066 by William the Conqueror.`,
      delayAnimation: "200",
    },
    {
      id: 3,
      img: "/img/backgrounds/3.png",
      title: "Tower of London",
      text: ` Learn about British history at the Tower of London, a medieval
            castle that was first built in 1066 by William the Conqueror.`,
      delayAnimation: "300",
    },
    {
      id: 4,
      img: "/img/backgrounds/4.png",
      title: "Tower Bridge",
      text: ` Learn about British history at the Tower of London, a medieval
            castle that was first built in 1066 by William the Conqueror.`,
      delayAnimation: "400",
    },
  ];
  return (
    <>
      {slightContent.map((item) => (
        <div
          className="col-lg-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <div className="rounded-4 border-light">
            <div className="d-flex flex-wrap y-gap-30">
              <div className="col-auto">
                <div className="ratio ratio-1:1 w-200">
                  <Image
                    width={200}
                    height={200}
                    src={item.img}
                    alt="image"
                    className="img-ratio"
                  />
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column justify-center h-full px-30 py-20">
                  <h3 className="text-18 fw-500">{item.title}</h3>
                  <p className="text-15 mt-5">{item.text}</p>
                  <Link
                    href="#"
                    className="d-block text-14 text-blue-1 fw-500 underline mt-5"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Slights;
