import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import blogsData from "../../data/blogs";
import BlogPagination from "./BlogPagination";

const Blog1 = () => {
  const [filterOption, setFilterOption] = useState("art_culture");
  const filterOptions = [
    { label: "Art and culture", value: "art_culture" },
    { label: "Beaches", value: "beaches" },
    { label: "Adventure travel", value: "adventure_travel" },
    { label: "Explore", value: "explore" },
    { label: "Family holidays", value: "family_holidays" },
    { label: "Air travel", value: "air_travel" },
    { label: "Food and drink", value: "food_drink" },
    // add more options as needed
  ];

  return (
    <>
      <div className="tabs -pills-3 pt-30 js-tabs">
        <div className="tabs__controls row x-gap-10 justify-center js-tabs-controls">
          {filterOptions.map((option) => (
            <div className="col-auto" key={option.value}>
              <button
                className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button ${
                  filterOption === option.value ? "is-tab-el-active" : ""
                }`}
                onClick={() => setFilterOption(option.value)}
              >
                {option.label}
              </button>
            </div>
          ))}
        </div>
        {/* End tab-controls */}

        <div className="row y-gap-30 pt-30">
          {blogsData.slice(0, 9).map((item) => (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <Link
                href={`/blog/blog-details/${item.id}`}
                className="blogCard -type-1 d-block "
              >
                <div className="blogCard__image">
                  <div className="rounded-8">
                    <Image
                      width={400}
                      height={300}
                      className="cover w-100 img-fluid"
                      src={item.img}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="pt-20">
                  <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
                  <div className="text-light-1 text-15 lh-14 mt-5">
                    {item.date}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* End .row */}

        <BlogPagination />
      </div>
    </>
  );
};

export default Blog1;
