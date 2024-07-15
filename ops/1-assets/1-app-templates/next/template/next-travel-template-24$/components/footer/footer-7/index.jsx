import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";
import AppButton from "./AppButton";
import Subscribe from "./Subscribe";

const index = () => {
  return (
    <footer className="footer -type-1 text-white bg-blue-1 footer-blue_custom">
      <div className="container">
        <div className="pt-60 pb-60">
          <Subscribe />
          {/* End .row */}
          <div className="row y-gap-40 justify-between xl:justify-start layout-pt-sm">
            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Contact Us</h5>
              <ContactInfo />
            </div>
            {/* End col */}

            <FooterContent />
            {/* End footer menu content */}

            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Mobile</h5>
              <AppButton />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-white-15">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
