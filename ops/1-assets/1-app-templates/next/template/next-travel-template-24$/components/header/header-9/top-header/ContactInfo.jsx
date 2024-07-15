import React from "react";

const ContactInfo = () => {
  return (
    <div className="row x-gap-15 y-gap-15 items-center">
      <div className="col-auto md:d-none">
        <a href="tel:+(1) 123 456 7890" className="text-12 text-white">
          +(1) 123 456 7890
        </a>
      </div>
      {/* End .col-auto */}
      <div className="col-auto md:d-none">
        <div className="w-1 h-20 bg-white-20" />
      </div>
      {/* End .col-auto */}
      <div className="col-auto">
        <a href="mailto:xyz@abc.com" className="text-12 text-white">
          hi@gotrip.com
        </a>
      </div>
      {/* End .col-auto */}
    </div>
  );
};

export default ContactInfo;
