import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const SlideGallery = ({ rental }) => {
  return (
    <>
      <Gallery>
        <div className="galleryGrid -type-1 relative">
          <div className="galleryGrid__item">
            <Item
              original="/img/rentals/single/1.png"
              thumbnail="/img/rentals/single/1.png"
              width={1006}
              height={765}
            >
              {({ ref, open }) => (
                <Image
                  width={600}
                  height={500}
                  src="/img/rentals/single/1.png"
                  ref={ref}
                  onClick={open}
                  alt="image"
                  role="button"
                  className="rounded-4"
                />
              )}
            </Item>
          </div>
          {/* End .galleryGrid__item */}

          <div className="galleryGrid__item">
            <Item
              original="/img/rentals/single/2.png"
              thumbnail="/img/rentals/single/2.png"
              width={450}
              height={375}
            >
              {({ ref, open }) => (
                <Image
                  width={450}
                  height={375}
                  ref={ref}
                  onClick={open}
                  src="/img/rentals/single/2.png"
                  alt="image"
                  className="rounded-4"
                  role="button"
                />
              )}
            </Item>
          </div>
          {/* End .galleryGrid__item */}

          <div className="galleryGrid__item">
            <Item
              original="/img/rentals/single/3.png"
              thumbnail="/img/rentals/single/3.png"
              width={450}
              height={375}
            >
              {({ ref, open }) => (
                <Image
                  width={450}
                  height={375}
                  ref={ref}
                  onClick={open}
                  src="/img/rentals/single/3.png"
                  alt="image"
                  className="rounded-4"
                  role="button"
                />
              )}
            </Item>
          </div>
          {/* End .galleryGrid__item */}

          <div className="galleryGrid__item">
            <Item
              original="/img/rentals/single/4.png"
              thumbnail="/img/rentals/single/4.png"
              width={450}
              height={375}
            >
              {({ ref, open }) => (
                <Image
                  width={450}
                  height={375}
                  ref={ref}
                  onClick={open}
                  src="/img/rentals/single/4.png"
                  alt="image"
                  className="rounded-4"
                  role="button"
                />
              )}
            </Item>
          </div>
          {/* End .galleryGrid__item */}

          <div className="galleryGrid__item relative">
            <Image
              width={450}
              height={375}
              src="/img/rentals/single/5.png"
              alt="image"
              className="rounded-4"
            />
            <div className="absolute h-full col-12 z-2 px-20 py-20 d-flex justify-end items-end bottom-0 end-0">
              <Item
                original="/img/rentals/single/5.png"
                thumbnail="/img/rentals/single/5.png"
                width={450}
                height={375}
              >
                {({ ref, open }) => (
                  <div
                    className="button -blue-1 px-24 py-15 bg-white text-dark-1 js-gallery"
                    ref={ref}
                    onClick={open}
                    role="button"
                  >
                    See All Photos
                  </div>
                )}
              </Item>
            </div>
          </div>
          {/* End .galleryGrid__item */}
        </div>
      </Gallery>
    </>
  );
};

export default SlideGallery;
