const DiscountsBanner = () => {
  return (
    <div
      className="ctaCard -type-1 rounded-4"
      data-aos="fade"
      data-aos-dealy="100"
    >
      <div className="ctaCard__image ratio ratio-63:55">
        <img
          className="img-ratio js-lazy"
          src="/img/backgrounds/6.png"
          alt="image"
        />
      </div>

      <div className="ctaCard__content py-50 px-50 lg:py-30 lg:px-30">
        <div className="text-15 fw-500 text-white mb-10">
          Enjoy Summer Deals
        </div>
        <h4 className="text-30 lg:text-24 text-white">Book Early to Save</h4>
        <div className="d-inline-block mt-30">
          <a
            href="#"
            className="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiscountsBanner;
