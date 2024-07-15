import Image from "next/image";

const HelpBlock = () => {
  const helpBlockContent = [
    {
      id: 1,
      icon: "/img/pages/help/icons/1.svg",
      title: "Booking your activity",
      text: `Lorem ipsum is placeholder text commonly used in site.`,
    },
    {
      id: 2,
      icon: "/img/pages/help/icons/2.svg",
      title: "Payment & receipts",
      text: `Lorem ipsum is placeholder text commonly used in site.`,
    },
    {
      id: 3,
      icon: "/img/pages/help/icons/3.svg",
      title: "Booking changes & refunds",
      text: `Lorem ipsum is placeholder text commonly used in site.`,
    },
    {
      id: 4,
      icon: "/img/pages/help/icons/4.svg",
      title: "Promo codes & credits",
      text: `Lorem ipsum is placeholder text commonly used in site.`,
    },
    {
      id: 5,
      icon: "/img/pages/help/icons/5.svg",
      title: "On the participation day",
      text: `Lorem ipsum is placeholder text commonly used in site.`,
    },
    {
      id: 6,
      icon: "/img/pages/help/icons/6.svg",
      title: "Value Packs",
      text: `Lorem ipsum is placeholder text commonly used in site.`,
    },
  ];
  return (
    <>
      {helpBlockContent.map((item) => (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <div className="bg-blue-1-05 rounded-4 px-50 py-40">
            <div className="size-70 bg-white rounded-full flex-center">
              <Image width={30} height={30} src={item.icon} alt="icon" />
            </div>
            <div className="mt-24">
              <div className="text-18 fw-500">{item.title}</div>
              <p className="mt-5">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HelpBlock;
