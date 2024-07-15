import Categories from "./components/Categories";
import RecentPost from "./components/RecentPost";
import SearchBox from "./components/SearchBox";
import Tags from "./components/Tags";

const index = () => {
  return (
    <div className="sidebar -blog">
      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Search</h5>
        <SearchBox />
      </div>
      {/* End searchbox */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Categories</h5>
        <div className="y-gap-5">
          <Categories />
        </div>
      </div>
      {/* End .Categories */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Recent Posts</h5>
        <div className="row y-gap-20 pt-10">
          <RecentPost />
        </div>
      </div>
      {/* End RecentPost */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Tags</h5>
        <div className="row x-gap-10 y-gap-10 pt-10">
          <Tags />
        </div>
      </div>
    </div>
  );
};

export default index;
