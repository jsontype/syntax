const Map = () => {
  return (
    <div
      className="flex-center"
      style={{
        backgroundImage: "url(/img/general/map.png)",
        height: "180px",
      }}
    >
      <button
        className="button py-15 px-24 -blue-1 bg-white text-dark-1 absolute"
        data-x-click="mapFilter"
      >
        <i className="icon-destination text-22 mr-10" />
        Show on map
      </button>
    </div>
  );
};

export default Map;
