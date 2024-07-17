<template>
  <b-container fluid class="px-0">
    <b-row>
      <b-col sm="12">
        <b-card no-body>
          <b-card-header class="border-bottom d-flex justify-content-between align-items-center py-3">
            <b-card-title class="text-white">{{ $t('rating.Rating_List') }}</b-card-title>
          </b-card-header>
          <b-card-body>
            <div class="table-view table-responsive table-space mb-0">
              <table id="datatable" ref="tableRef" class="data-tables table custom-table movie_table" data-toggle="data-table"></table>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import useDataTable from '../../hooks/useDatatable';

const tableData = ref([
  { no: '1', category: 'Movie', Name: 'Man Of Street', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2017', rating: '9.2' },
  { no: '2', category: 'Show', Name: 'Cursed', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2012', rating: '8.5' },
  { no: '3', category: 'Movie', Name: 'Veronica', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2018', rating: '7.2' },
  { no: '4', category: 'Movie', Name: 'Troll Hunters', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2020', rating: '9.5' },
  { no: '5', category: 'Show', Name: 'Gran Torino', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2019', rating: '7.0' },
  { no: '6', category: 'Movie', Name: 'Man Of Street', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2017', rating: '9.2' },
  { no: '7', category: 'Show', Name: 'Cursed', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2012', rating: '8.5' },
  { no: '8', category: 'Movie', Name: 'Veronica', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2018', rating: '7.2' },
  { no: '9', category: 'Movie', Name: 'Troll Hunters', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2020', rating: '9.5' },
  { no: '10', category: 'Show', Name: 'Gran Torino', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet', release_date: '2019', rating: '7.0' },
]);

const columns = ref([
  { data: 'no', title: ' No' },
  { data: 'category', title: 'Category' },
  { data: 'Name', title: 'Name' },
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
  { data: 'release_date', title: 'Release Date' },
  { data: 'rating', title: 'Rating' },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Action',
    render: function () {
      return `
       <div class="d-flex align-items-center list-user-action">
        <a title="Delete" class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#"><i class="fa-solid fa-trash"></i></a>
      </div>
        `;
    },
  },
]);
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
      case 'delete':
        showAlert();
        break;

      default:
        break;
    }
  },
});

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
