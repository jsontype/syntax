import Image from "next/image";

const ItineraryContent = () => {
  const itineraryContent = [
    {
      id: 1,
      targetCollapse: "item_1",
      itemNo: "1",
      title: "Windsor Castle",
      img: "/img/tours/list.png",
      content: `Our first stop is Windsor Castle, the ancestral home of the British Royal family for more than 900 years and the largest, continuously occupied castle in Europe.`,
      classShowHide: "",
    },
    {
      id: 2,
      targetCollapse: "item_2",
      itemNo: "2",
      title: "St. George's Chapel",
      img: "/img/tours/list.png",
      content: `Our first stop is Windsor Castle, the ancestral home of the British Royal family for more than 900 years and the largest, continuously occupied castle in Europe.`,
      classShowHide: "show",
    },
    {
      id: 3,
      targetCollapse: "item_3",
      itemNo: "3",
      title: "The Roman Baths",
      img: "/img/tours/list.png",
      content: `Our first stop is Windsor Castle, the ancestral home of the British Royal family for more than 900 years and the largest, continuously occupied castle in Europe.`,
      classShowHide: "",
    },
    {
      id: 4,
      targetCollapse: "item_4",
      itemNo: "4",
      title: "Stonehenge",
      img: "/img/tours/list.png",
      content: `Our first stop is Windsor Castle, the ancestral home of the British Royal family for more than 900 years and the largest, continuously occupied castle in Europe.`,
      classShowHide: "",
    },
  ];

  return (
    <>
      {itineraryContent.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item ">
            <div className="d-flex">
              <div className="accordion__icon size-40 flex-center bg-blue-2 text-blue-1 rounded-full">
                <div className="text-14 fw-500">{item.itemNo}</div>
              </div>
              {/* End item number */}

              <div className="ml-20">
                <div className="text-16 lh-15 fw-500">{item.title}</div>
                <div className="text-14 lh-15 text-light-1 mt-5">
                  Stop: 60 minutes - Admission included
                </div>
                <div
                  className={`accordion-collapse collapse ${item.classShowHide}`}
                  id={item.targetCollapse}
                  data-bs-parent="#itineraryContent"
                >
                  <div className="pt-15 pb-15">
                    <Image
                      width={350}
                      height={160}
                      src={item.img}
                      alt="image"
                      className="rounded-4 mt-15"
                    />
                    <div className="text-14 lh-17 mt-15">{item.content}</div>
                  </div>
                </div>
                {/* End accordion conent */}

                <div
                  className="accordion__button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.targetCollapse}`}
                >
                  <button className="d-block lh-15 text-14 text-blue-1 underline fw-500 mt-5">
                    See details &amp; photo
                  </button>
                </div>
                {/* End accordion button */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItineraryContent;
