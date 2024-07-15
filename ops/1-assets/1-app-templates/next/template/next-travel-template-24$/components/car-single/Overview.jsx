import Amenities from "./Amenities";
import Specifications from "./Specifications";

const Overview = () => {
  return (
    <>
      <div className="border-top-light mt-40 pt-40 mb-40">
        <h3 className="text-22 fw-500">Overview</h3>
        <p className="text-dark-1 text-15 mt-20">
          Unless you hire a car, visiting Stonehenge, Bath, and Windsor Castle
          in one day is next to impossible. Designed specifically for travelers
          with limited time in London, this tour allows you to check off a range
          of southern England&lsquo;s historical attractions in just one day by
          eliminating the hassle of traveling between each one independently.
          Travel by comfortable coach and witness your guide bring each UNESCO
          World Heritage Site to life with commentary. Plus, all admission
          tickets are included in the tour price.
        </p>
        <a
          href="#"
          className="d-block text-14 text-blue-1 fw-500 underline mt-10"
        >
          Show More
        </a>
        <div className="mt-60 lg:mt-40 md:mt-30">
          <h5 className="text-16 fw-500">Highlights</h5>
          <ul className="list-disc text-15 mt-10">
            <li>
              Travel between the UNESCO World Heritage sites aboard a
              comfortable coach
            </li>
            <li>Explore with a guide to delve deeper into the history</li>
            <li>Great for history buffs and travelers with limited time</li>
          </ul>
        </div>
      </div>
      {/* End overview */}

      <div className="border-top-light mt-40 pt-40 mb-40">
        <h3 className="text-22 fw-500">Specifications</h3>
        <div className="col-xl-9">
          <Specifications />
        </div>
      </div>
      {/* End specifications */}

      <div className="border-top-light mt-40 pt-40 mb-40">
        <h3 className="text-22 fw-500">Amenities</h3>
        <Amenities />
      </div>
    </>
  );
};

export default Overview;
