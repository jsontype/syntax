const IntroTown = () => {
  return (
    <>
      <div className="col-xl-8">
        <p className="text-15 text-dark-1">
          London is a shining example of a metropolis at the highest peak of
          modernity and boasts an economy and cultural diversity that’s the envy
          of other global superpowers.
          <br />
          <br />
          Take the opportunity to acquaint yourself with its fascinating history
          chronicled by institutions like the British Museum as well as see how
          far it has come by simply riding the Tube and passing by celebrated
          landmarks like Buckingham Palace, Westminster Abbey, and marvels like
          Big Ben, the London Eye, and the Tower Bridge.
          <br />
          <br />
          You can also immerse yourself in its ever-evolving and impactful
          culture by visiting places like the National Gallery, the Tate Modern,
          West End, Abbey Road, the Royal Albert Hall, Oxford Street and the
          Westfield Shopping Centers, and areas referenced and seen in
          literature and film.
        </p>
        <a
          href="#"
          className="d-block text-14 fw-500 text-blue-1 underline mt-20"
        >
          Show More
        </a>
      </div>
      {/* End .col */}

      <div className="col-xl-4">
        <div className="relative d-flex ml-35 xl:ml-0">
          <img
            src="/img/pages/destinations/map.png"
            alt="image"
            className="col-12 rounded-4"
          />
          <div className="absolute d-flex justify-center items-end col-12 h-full z-1 px-35 py-20">
            <button className="button h-50 px-25 -blue-1 bg-white text-dark-1 text-14 fw-500 col-12">
              <i className="icon-eye text-18 mr-10" />
              See popular activities on the map
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroTown;
