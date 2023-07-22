import Image from "next/image";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const ReviewGallery = () => {
  const reviewGalleryImg = [
    "/img/testimonials/1/1.png",
    "/img/testimonials/1/2.png",
    "/img/testimonials/1/3.png",
    "/img/testimonials/1/4.png",
  ];
  return (
    <Gallery>
      <div className="row x-gap-30 y-gap-30 pt-20">
        {reviewGalleryImg.map((img, i) => (
          <div className="col-auto" key={i}>
            <Item original={img} thumbnail={img} width={110} height={110}>
              {({ ref, open }) => (
                <Image
                  width={110}
                  height={110}
                  src={img}
                  ref={ref}
                  onClick={open}
                  alt="image"
                  role="button"
                  className="rounded-4"
                />
              )}
            </Item>
          </div>
        ))}
      </div>
    </Gallery>
  );
};

export default ReviewGallery;
