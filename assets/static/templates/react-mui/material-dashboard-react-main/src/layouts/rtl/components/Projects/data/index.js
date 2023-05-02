/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (أعضاء) =>
    أعضاء.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "المشروع", accessor: "المشروع", width: "45%", align: "left" },
      { Header: "أعضاء", accessor: "أعضاء", width: "10%", align: "left" },
      { Header: "ميزانية", accessor: "ميزانية", align: "center" },
      { Header: "إكمال", accessor: "إكمال", align: "center" },
    ],

    rows: [
      {
        المشروع: (
          <Company
            image={logoXD}
            name="/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ الإصدار"
          />
        ),
        أعضاء: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        ميزانية: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </MDTypography>
        ),
        إكمال: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        المشروع: <Company image={logoAtlassian} name="أضف مسار التقدم إلى التطبيق الداخلي" />,
        أعضاء: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        ميزانية: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </MDTypography>
        ),
        إكمال: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={10} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        المشروع: <Company image={logoSlack} name="إصلاح أخطاء النظام الأساسي" />,
        أعضاء: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team3, "Alexander Smith"],
            ])}
          </MDBox>
        ),
        ميزانية: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            غير مضبوط
          </MDTypography>
        ),
        إكمال: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        المشروع: <Company image={logoSpotify} name="إطلاق تطبيق الهاتف المحمول الخاص بنا" />,
        أعضاء: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </MDBox>
        ),
        ميزانية: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $20,500
          </MDTypography>
        ),
        إكمال: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        المشروع: <Company image={logoJira} name="أضف صفحة التسعير الجديدة" />,
        أعضاء: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        ميزانية: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $500
          </MDTypography>
        ),
        إكمال: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        المشروع: <Company image={logoInvesion} name="إعادة تصميم متجر جديد على الإنترنت" />,
        أعضاء: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        ميزانية: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $2,000
          </MDTypography>
        ),
        إكمال: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
