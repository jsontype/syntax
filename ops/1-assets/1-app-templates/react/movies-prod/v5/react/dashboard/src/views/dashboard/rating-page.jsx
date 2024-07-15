import React, { memo, Fragment, useRef } from "react";
import Swal from "sweetalert2";

//react-bootstrap
import { Card, Col, Row } from "react-bootstrap";

//Hooks
import useDataTable from "../../hooks/useDatatable";

//plugins
import "flatpickr/dist/flatpickr.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";

// the hook
import { useTranslation } from "react-i18next";

//Data
const tableData = [
  {
    no: "1",
    category: "Movie",
    Name: "Man Of Street",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur...",
    release_date: "2017",
    rating: "9.2",
  },
  {
    no: "2",
    category: "Show",
    Name: "Cursed",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur...",
    release_date: "2012",
    rating: "8.5",
  },
  {
    no: "3",
    category: "Movie",
    Name: "Veronica",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur...",
    release_date: "2018",
    rating: "7.2",
  },
  {
    no: "4",
    category: "Movie",
    Name: "Troll Hunters",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur...",
    release_date: "2020",
    rating: "9.5",
  },
  {
    no: "5",
    category: "Show",
    Name: "Gran Torino",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur...",
    release_date: "2019",
    rating: "7.0",
  },
  {
    no: "6",
    category: "Movie",
    Name: "Man Of Street",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur...",
    release_date: "2017",
    rating: "9.2",
  },
  {
    no: "7",
    category: "Show",
    Name: "Cursed",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur...",
    release_date: "2012",
    rating: "8.5",
  },
  {
    no: "8",
    category: "Movie",
    Name: "Veronica",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur...",
    release_date: "2018",
    rating: "7.2",
  },
  {
    no: "9",
    category: "Movie",
    Name: "Troll Hunters",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur...",
    release_date: "2020",
    rating: "9.5",
  },
  {
    no: "10",
    category: "Show",
    Name: "Gran Torino",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur...",
    release_date: "2019",
    rating: "7.0",
  },
];

const RatingPage = memo(() => {
  const { t } = useTranslation();
  const columns = useRef([
    { data: "no", title: " No" },
    { data: "category", title: "Category" },
    { data: "Name", title: "Name" },
    { data: "description", title: "Description" },
    { data: "release_date", title: "Release Date" },
    { data: "rating", title: "Rating" },
    {
      data: null,
      orderable: false,
      searchable: false,
      title: "Action",
      render: function () {
        return `
          <div class="d-flex gap-1 align-items-center">
            <a title="Delete" class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#"><i class="fa-solid fa-trash"></i></a>
          </div>
        `;
      },
    },
  ]);

  const showAlert = () => {
    deleteSwal();
  };

  const tableRef = useRef(null);
  useDataTable({
    tableRef: tableRef,
    columns: columns.current,
    data: tableData,
    actionCallback: (data) => {
      switch (data.method) {
        case "delete":
          showAlert();
          break;

        default:
          break;
      }
    },
  });

  const deleteSwal = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item",
      icon: "error",
      showCancelButton: true,
      backdrop: `rgba(60,60,60,0.8)`,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#c03221",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card>
            <div className="card-header border-bottom d-flex justify-content-between align-items-center py-3">
              <Card.Title>
                <h4 className="m-0">{t("rating.Rating_List")}</h4>
              </Card.Title>
            </div>
            <Card.Body>
              <div className="table-view table-responsive table-space">
                <table
                  id="datatable"
                  ref={tableRef}
                  className="data-tables table custom-table movie_table"
                  data-toggle="data-table"
                ></table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

RatingPage.displayName = "RatingPage";
export default RatingPage;
