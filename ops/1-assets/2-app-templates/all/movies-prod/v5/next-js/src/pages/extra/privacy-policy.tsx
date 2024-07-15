import { Fragment, memo } from "react";

//react bootstrap
import { Container } from "react-bootstrap";

//custom hook
import { useBreadcrumb } from "@/utilities/usePage";

const PrivacyPolicy = memo(() => {
  useBreadcrumb('Privacy Policy')
  return (
    <Fragment>
      <div className="section-padding">
        <Container>
          <div className="title-box">
            <h4 className="mb-4">
              1. What Personal Information About Users Does streamit
              Collect?
            </h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              quis nisl dignissim, placerat diam ac, egestas ante. Morbi
              varius quis orci feugiat hendrerit. Morbi ullamcorper
              consequat justo, in posuere nisi efficitur sed. Vestibulum
              semper dolor id arcu finibus volutpat. Integer condimentum ex
              tellus, ac finibus metus sodales in. Proin blandit congue
              ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus
              finibus in. Aliquam non urna ut leo vestibulum mattis ac nec
              dolor. Nulla libero mauris, dapibus non aliquet viverra,
              elementum eget lorem
            </p>
          </div>
          <div className="title-box">
            <h4 className="mb-4">2. Cookies and Web Beacons</h4>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              quis nisl dignissim, placerat diam ac, egestas ante. Morbi
              varius quis orci feugiat hendrerit. Morbi ullamcorper
              consequat justo, in posuere nisi efficitur sed.
            </p>
            <p className="mb-0">
              Vestibulum semper dolor id arcu finibus volutpat. Integer
              condimentum ex tellus, ac finibus metus sodales in. Proin
              blandit congue ipsum ac dapibus. Integer blandit eros elit,
              vel luctus tellus finibus in. Aliquam non urna ut leo
              vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus
              non aliquet viverra, elementum eget lorem
            </p>
          </div>
          <div className="title-box">
            <h4 className="mb-4">
              3. Third Party Payment Gateway – Financial Information
            </h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              quis nisl dignissim, placerat diam ac, egestas ante. Morbi
              varius quis orci feugiat hendrerit. Morbi ullamcorper
              consequat justo, in posuere nisi efficitur sed. Vestibulum
              semper dolor id arcu finibus volutpat. Integer condimentum ex
              tellus, ac finibus metus sodales in. Proin blandit congue
              ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus
              finibus in. Aliquam non urna ut leo vestibulum mattis ac nec
              dolor. Nulla libero mauris, dapibus non aliquet viverra,
              elementum eget lorem
            </p>
          </div>
          <div className="title-box">
            <h4 className="mb-4">4. Disclosure Children’s Privacy</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              quis nisl dignissim, placerat diam ac, egestas ante. Morbi
              varius quis orci feugiat hendrerit. Morbi ullamcorper
              consequat justo, in posuere nisi efficitur sed. Vestibulum
              semper dolor id arcu finibus volutpat. Integer condimentum ex
              tellus, ac finibus metus sodales in. Proin blandit congue
              ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus
              finibus in. Aliquam non urna ut leo vestibulum mattis ac nec
              dolor. Nulla libero mauris, dapibus non aliquet viverra,
              elementum eget lorem
            </p>
          </div>
          <div className="title-box">
            <h4 className="mb-4">
              5. Data transfer, storage &amp; processing globally
            </h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              quis nisl dignissim, placerat diam ac, egestas ante. Morbi
              varius quis orci feugiat hendrerit. Morbi ullamcorper
              consequat justo, in posuere nisi efficitur sed. Vestibulum
              semper dolor id arcu finibus volutpat. Integer condimentum ex
              tellus, ac finibus metus sodales in. Proin blandit congue
              ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus
              finibus in. Aliquam non urna ut leo vestibulum mattis ac nec
              dolor. Nulla libero mauris, dapibus non aliquet viverra,
              elementum eget lorem
            </p>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

PrivacyPolicy.displayName = "PrivacyPolicy";
export default PrivacyPolicy;
