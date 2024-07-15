import React, { memo } from "react";

// react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

//router
import { useLocation } from "react-router-dom";

const SubHeader = memo(() => {
  let location = useLocation();
  let banner_titile;
  switch (location.pathname) {
    case "/tv-shows/movielist":
      banner_titile = "Movie List";
      break;
    case "/tv-shows/showlist":
      banner_titile = "Show Lists";
      break;
    case "/tv-shows/episodes":
      banner_titile = "Episodes";
      break;
    case "/tv-shows/seasons":
      banner_titile = "Seasons";
      break;
    case "/extra/blank-page":
      banner_titile = "Blank Page";
      break;
    case "/font-awesome":
      banner_titile = "FontAwesome";
      break;
  }
  return <></>;
});

SubHeader.displayName = "SubHeader";
export default SubHeader;
