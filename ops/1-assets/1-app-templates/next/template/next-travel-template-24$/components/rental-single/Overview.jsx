import Amenities from "./Amenities";

const Overview = () => {
  return (
    <>
      <div>
        <h3 className="text-22 fw-500">Overview</h3>
        <p className="text-dark-1 text-15 mt-20">
          You can directly book the best price if your travel dates are
          available, all discounts are already included. In the following house
          description you will find all information about our listing.
          <br />
          <br />
          2-room terraced house on 2 levels. Comfortable and cosy furnishings: 1
          room with 1 french bed and radio. Shower, sep. WC. Upper floor: (steep
          stair) living/dining room with 1 sofabed (110 cm, length 180 cm), TV.
          Exit to the balcony. Small kitchen (2 hot plates, oven,
        </p>

        <a
          href="#"
          className="d-block text-14 text-blue-1 fw-500 underline mt-10"
        >
          Show More
        </a>
      </div>

      <div className="border-top-light mt-40 mb-40"></div>
      {/* End border-top-light */}

      <div>
        <h3 className="text-22 fw-500">Amenities</h3>
        <Amenities />
        <a
          href="#"
          className="d-block text-14 text-blue-1 fw-500 underline mt-20"
        >
          Show all 29 amenities
        </a>
      </div>
      {/* End aminities */}
    </>
  );
};

export default Overview;
