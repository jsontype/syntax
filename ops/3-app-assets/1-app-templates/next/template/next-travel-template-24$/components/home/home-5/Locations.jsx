import Link from "next/link";
import { destinations6 } from "../../../data/desinations";

const Locations = () => {
  return (
    <>
      {destinations6.map((item) => (
        <div
          className="col-xl-3 col-lg-4 col-md-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnim}
        >
          <Link href="/tour/tour-list-v3" className="destCard -type-1 d-block">
            <div className="row x-gap-20 y-gap-20 items-center">
              <div className="col-auto">
                <div className="destCard__image rounded-4">
                  <img
                    className="size-100 rounded-4"
                    src={item.img}
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-auto">
                <div className="text-18 fw-500">{item.location}</div>
                <div className="text-14 lh-14 text-light-1 mt-5">
                  {item.properties} properties
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Locations;
