const TopComment = () => {
  return (
    <div className="row y-gap-30">
      <div className="col-auto">
        <img
          src="/img/avatars/4.png"
          alt="image"
          className="size-70 rounded-full"
        />
      </div>
      <div className="col-md">
        <h3 className="text-18 fw-500">Brooklyn Simmons</h3>
        <div className="text-14 text-light-1">Medical Assistant</div>
        <div className="text-15 mt-10">
          Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies
          risus, vel rutrum erat commodo ut. Praesent finibus congue euismod.
          Nullam scelerisque massa vel augue placerat, a tempor sem egestas.
          Curabitur placerat finibus lacus.
        </div>
      </div>
    </div>
  );
};

export default TopComment;
