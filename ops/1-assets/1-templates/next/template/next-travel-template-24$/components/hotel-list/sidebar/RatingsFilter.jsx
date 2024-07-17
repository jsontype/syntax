import { useState } from "react";

const RatingsFilter = () => {
  const ratings = [1, 2, 3, 4, 5];
  const [activeRating, setActiveRating] = useState(null);

  const handleRatingClick = (rating) => {
    setActiveRating(rating === activeRating ? null : rating);
  };

  return (
    <>
      {ratings.map((rating) => (
        <div className="col-auto" key={rating}>
          <button
            className={`button -blue-1 bg-blue-1-05 text-blue-1 py-5 px-20 rounded-100 ${
              rating === activeRating ? "active" : ""
            }`}
            onClick={() => handleRatingClick(rating)}
          >
            {rating}
          </button>
        </div>
      ))}
    </>
  );
};

export default RatingsFilter;
