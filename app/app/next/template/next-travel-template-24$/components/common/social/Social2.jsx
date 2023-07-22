const Social2 = () => {
  const socialContent = [
    { id: 1, icon: "icon-facebook", link: "http://facebok.com/" },
    { id: 2, icon: "icon-twitter", link: "http://twitter.com/" },
    { id: 3, icon: "icon-instagram", link: "http://instagram.com/" },
    { id: 4, icon: "icon-linkedin", link: "http://linkedin.com/" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-center size-40 rounded-full"
          key={item.id}
        >
          <i className={`${item.icon} text-14`} />
        </a>
      ))}
    </>
  );
};

export default Social2;
