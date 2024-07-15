const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Toll Free Customer Care",
      action: "tel:+(1) 123 456 7890",
      text: "+(1) 123 456 7890",
    },
    {
      id: 2,
      title: "Need live support?",
      action: "mailto:xyz@abc.com",
      text: "hi@gotrip.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className="mt-30">
            <div className="text-14 mt-30">{item.title}</div>
            <a href="#" className="text-18 fw-500 mt-5">
              {item.text}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
