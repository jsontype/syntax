import Link from "next/link";
import { destinations7 } from "../../../data/desinations";

const TopDestinations = () => {
  return (
    <>
      {destinations7.map((item) => (
        <div
          className={item.colClass}
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href="/rental/rental-list-v3"
            className="citiesCard -type-3 d-block h-full rounded-4 "
          >
            <div className="citiesCard__image ratio ratio-1:1">
              <img className="col-12 js-lazy" src={item.img} alt="image" />
            </div>
            <div className="citiesCard__content px-30 py-30">
              <h4 className="text-26 fw-600 text-white text-capitalize">
                {item.name}
              </h4>
              <div className="text-15 text-white">
                {item.numberOfProperties} properties
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TopDestinations;
