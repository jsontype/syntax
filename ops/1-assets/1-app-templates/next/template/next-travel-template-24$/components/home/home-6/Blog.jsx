import Image from "next/image";
import Link from "next/link";
import blogsData from "../../../data/blogs";

const Blog = () => {
  return (
    <>
      {blogsData.slice(9, 11).map((item) => (
        <div
          className="col-lg-6"
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href={`/blog/blog-details/${item.id}`}
            className="row y-gap-20 items-center"
          >
            <div className="col-auto">
              <Image
                width={250}
                height={250}
                className="size-250 rounded-4"
                src={item.img}
                alt="image"
              />
            </div>
            <div className="col">
              <div className="text-15 text-light-1">{item.date}</div>
              <h4 className="text-22 fw-600 text-dark-1 mt-10">{item.title}</h4>
              <p className="mt-10">{item.details}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Blog;
