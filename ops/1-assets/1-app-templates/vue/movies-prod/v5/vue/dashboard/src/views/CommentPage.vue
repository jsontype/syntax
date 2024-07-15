<template>
  <b-row>
    <b-col sm="12">
      <b-card no-body>
        <b-card-header class="border-bottom d-flex justify-content-between align-items-center py-3">
          <b-card-title class="text-dark">{{ $t('comments.Comment_List') }}</b-card-title>
        </b-card-header>
        <b-card-body>
          <div class="table-view table-responsive table-space mb-0">
            <table id="datatable" ref="tableRef" class="data-tables table custom-table movie_table" data-toggle="data-table"></table>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import useDataTable from '../hooks/useDatatable';

const tableData = ref([
  { no: '1', title: 'Lorem Ipsum Dolor', author: 'Nick Allen', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '21 Jul, 2020' },
  { no: '2', title: 'Lorem Ipsum Dolor', author: 'Hans Olo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '12 Jun, 2020' },
  { no: '3', title: 'Lorem Ipsum Dolor', author: 'Lynn Guini', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '01 Jan, 2020' },
  { no: '4', title: 'Lorem Ipsum Dolor', author: 'Aaronottix', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '19 Mar, 2020' },
  { no: '5', title: 'Lorem Ipsum Dolor', author: 'Marge Arita', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '21 Aug, 2020' },
  { no: '6', title: 'Lorem Ipsum Dolor', author: 'Bill Dabear', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '15 May, 2020' },
  { no: '7', title: 'Lorem Ipsum Dolor', author: 'Brock Lee', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '07 Jul, 2020' },
  { no: '8', title: 'Lorem Ipsum Dolor', author: 'Nick Allen', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '21 Jul, 2020' },
  { no: '9', title: 'Lorem Ipsum Dolor', author: 'Hans Olo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '12 Jun, 2020' },
  { no: '10', title: 'Lorem Ipsum Dolor', author: 'Lynn Guini', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '01 Jan, 2020' },
  { no: '11', title: 'Lorem Ipsum Dolor', author: 'Aaronottix', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '19 Mar, 2020' },
  { no: '12', title: 'Lorem Ipsum Dolor', author: 'Marge Arita', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', created_date: '21 Aug, 2020' },
]);

const columns = ref([
  { data: 'no', title: ' No' },
  { data: 'title', title: ' Title' },
  { data: 'author', title: 'Author' },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Description',
    render: function (row) {
      return `
       <p class="mb-0">
        ${row.description}
        </p>
        `;
    },
  },
  { data: 'created_date', title: 'Created Date' },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Action',
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
const tableRef = ref(null);
useDataTable({
  tableRef: tableRef,
  columns: columns.value,
  data: tableData.value,
  actionCallback: (data) => {
    switch (data.method) {
      case 'edit':
        showOffcanvas();
        break;

      case 'delete':
        showAlert();
        break;

      default:
        break;
    }
  },
});
const offcanvasEnd = ref(false);

const deleteSwal = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to delete this item',
    icon: 'error',
    showCancelButton: true,
    backdrop: 'rgba(60,60,60,0.8)',
    confirmButtonText: 'Yes, delete it!',
    confirmButtonColor: '#c03221',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
    }
  });
};
</script>
