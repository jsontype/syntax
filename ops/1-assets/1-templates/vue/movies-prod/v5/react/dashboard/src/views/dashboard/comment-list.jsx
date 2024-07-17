import React, { memo, Fragment, useRef } from "react";
import Swal from "sweetalert2";

//react-bootstrap
import { Card, Col, Row } from "react-bootstrap";

//Hooks
import useDataTable from "../../hooks/useDatatable";

// the hook
import { useTranslation } from "react-i18next";

//plugins
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
import "flatpickr/dist/flatpickr.css";

//DATA
const tableData = [
  {
    no: "1",
    title: "Lorem Ipsum Dolor",
    author: "Nick Allen",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adip...",
    created_date: "21 Jul, 2020",
  },
  {
    no: "2",
    title: "Lorem Ipsum Dolor",
    author: "Hans Olo",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur Adip...",
    created_date: "12 Jun, 2020",
  },
  {
    no: "3",
    title: "Lorem Ipsum Dolor",
    author: "Lynn Guini",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur Adip...",
    created_date: "01 Jan, 2020",
  },
  {
    no: "4",
    title: "Lorem Ipsum Dolor",
    author: "Aaronottix",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur Adip...",
    created_date: "19 Mar, 2020",
  },
  {
    no: "5",
    title: "Lorem Ipsum Dolor",
    author: "Marge Arita",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur Adip...",
    created_date: "21 Aug, 2020",
  },
  {
    no: "6",
    title: "Lorem Ipsum Dolor",
    author: "Bill Dabear",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur Adip...",
    created_date: "15 May, 2020",
  },
  {
    no: "7",
    title: "Lorem Ipsum Dolor",
    author: "Brock Lee",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur Adip...",
    created_date: "07 Jul, 2020",
  },
  {
    no: "8",
    title: "Lorem Ipsum Dolor",
    author: "Nick Allen",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur Adip...",
    created_date: "21 Jul, 2020",
  },
  {
    no: "9",
    title: "Lorem Ipsum Dolor",
    author: "Hans Olo",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur Adip...",
    created_date: "12 Jun, 2020",
  },
  {
    no: "10",
    title: "Lorem Ipsum Dolor",
    author: "Lynn Guini",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur Adip...",
    created_date: "01 Jan, 2020",
  },
  {
    no: "11",
    title: "Lorem Ipsum Dolor",
    author: "Aaronottix",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur Adip...",
    created_date: "19 Mar, 2020",
  },
  {
    no: "12",
    title: "Lorem Ipsum Dolor",
    author: "Marge Arita",
    description: "	Lorem Ipsum Dolor Sit Amet, Consectetur Adip...",
    created_date: "21 Aug, 2020",
  },
];

const CommentList = memo(() => {
  const { t } = useTranslation();
  const columns = useRef([
    { data: "no", title: " No" },
    { data: "title", title: " Title" },
    { data: "author", title: "Author" },
    { data: "description", title: "Description" },
    { data: "created_date", title: "Created Date" },
    {
      data: null,
      orderable: false,
      searchable: false,
      title: "Action",
      render: function () {
        return `
       <div class="d-flex align-items-center list-user-action">
         <a title="Edit" class="btn btn-sm btn-icon btn-success rounded" data-table="action" data-id="0" data-method="edit" href="#"><i class="fa-solid fa-pen"></i></a>
        <a title="Delete" class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#"><i class="fa-solid fa-trash"></i></a>
      </div>
        `;
      },
    },
  ]);
  const showOffcanvas = () => {
    offcanvasEnd.value = true;
  };
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
        case "edit":
          showOffcanvas();
          break;

        case "delete":
          showAlert();
          break;

        default:
          break;
      }
    },
  });

  const offcanvasEnd = useRef(false);

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
            <Card.Header className="card-header border-bottom d-flex justify-content-between align-items-center py-3">
              <Card.Title>
                <h4 className="m-0">{t("comments.Comment_List")}</h4>
              </Card.Title>
            </Card.Header>
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

CommentList.displayName = "CommentList";
export default CommentList;
