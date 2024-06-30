import React, { memo, Fragment } from "react";

// react-bootsrap
import { Container, Row, Col, Placeholder } from "react-bootstrap";

// components



const CardgenraShimmer = memo((props) => {
  

  return (
    <Fragment>
      <div className=" pb-3">
        <div className="iq-blog-image clearfix ">
        <Placeholder as="p" animation="glow">
                  <Placeholder className=""
                    style={{
                      backgroundColor: "#3e3e3e",
                      height: "11.8rem",
                      width: "20.9rem",
                    }}
                  >
                        <Placeholder 
                         xs={3}
                         style={{marginTop:"5em",
                            marginLeft: "7.5em",
                         }}
                        />
                    </Placeholder>
                    </Placeholder>
          {/* <Placeholder as="p" animation="glow" className="mb-0">
            <Placeholder
              style={{
                
                height: "11.8rem",
                width:"20.9rem"
              }}
            />
          </Placeholder> */}
          
        </div>
      </div>
    </Fragment>
  );
});

CardgenraShimmer.displayName = "CardgenraShimmer";
export default CardgenraShimmer;
