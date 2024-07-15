import Image from "next/image";
import Link from "next/link";
import blogsData from "../../data/blogs";

const Blog2 = () => {
  return (
    <>
      {blogsData.slice(4, 9).map((item) => (
        <Link
          href={`/blog/blog-details/${item.id}`}
          className="blogCard -type-1 col-12"
          key={item.id}
        >
          <div className="row y-gap-15 items-center md:justify-center md:text-center">
            <div className="col-lg-4">
              <div className="blogCard__image rounded-4">
                <Image
                  width={250}
                  height={250}
                  className="cover w-100 img-fluid"
                  src={item.img}
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="text-15 text-light-1">{item.date}</div>
              <h3 className="text-22 text-dark-1 mt-10 md:mt-5">
                {item.title}
              </h3>
              <div className="text-15 lh-16 text-light-1 mt-10 md:mt-5">
                {item.details}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Blog2;
