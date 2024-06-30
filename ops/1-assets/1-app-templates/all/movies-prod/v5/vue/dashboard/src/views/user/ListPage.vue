<template>
  <b-row>
    <b-col sm="12">
      <b-card no-body>
        <b-card-header class="border-bottom d-flex justify-content-between align-items-center py-3">
          <div class="d-flex align-items-center gap-1 pt-3">
            <div class="mb-0">
              <select ref="selectElement" class="form-control select2-basic-multiple"
                :placeholder="$t('bordertable.no_action')" :tabindex="tabindex">
                <option value="0">{{ $t('bordertable.no_action') }}</option>
                <option value="1">{{ $t('bordertable.status') }}</option>
                <option value="2">{{ $t('edit.delete') }}</option>
              </select>
            </div>
            <b-button variant="primary" class="mb-0">{{ $t('bordertable.apply') }}</b-button>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="table-responsive rounded py-4 table-space mb-0">
            <table id="datatable" ref="tableRef" class="data-tables table custom-table movie_table"
              data-toggle="data-table"></table>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import useDataTable from '../../hooks/useDatatable';
import Choices from 'choices.js';

const tableData = ref([
  {
    image: '/assets/images/avatars/01.png',
    name: 'Anna Sthesia',
    contact: '(760) 756 7568',
    email: 'annasthesia@gmail.com',
    country: 'USA',
    status: 'Active',
    color: 'primary',
    company: 'Acme Corporation',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/avatars/02.png',
    name: 'Brock Lee',
    contact: '+62 5689 458 658',
    email: 'brocklee@gmail.com',
    country: 'Indonesia',
    status: 'Active',
    color: 'primary',
    company: 'Soylent Corp',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/avatars/03.png',
    name: 'Dan Druff',
    contact: '+55 6523 456 856',
    email: 'dandruff@gmail.com',
    country: 'Brazil',
    status: 'Pending',
    color: 'warning',
    company: 'Umbrella Corporation',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/avatars/04.png',
    name: 'Hans Olo',
    contact: '+91 2586 253 125',
    email: 'hansolo@gmail.com',
    country: 'India',
    status: 'Inactive',
    color: 'danger',
    company: 'Vehement Capital',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/avatars/05.png',
    name: 'Lynn Guini',
    contact: '+27 2563 456 589',
    email: 'lynnguini@gmail.com',
    country: 'Africa',
    status: 'Active',
    color: 'primary',
    company: 'Massive Dynamic',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/avatars/05.png',
    name: 'Eric Shun',
    contact: '+55 25685 256 589',
    email: 'ericshun@gmail.com',
    country: 'Brazil',
    status: 'Pending',
    color: 'warning',
    company: 'Globex Corporation',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/avatars/06.png',
    name: 'aaronottix',
    contact: '(760) 756 7568',
    email: 'budwiser@ymail.com',
    country: 'USA',
    status: 'Hold',
    color: 'info',
    company: 'Acme Corporation',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/avatars/05.png',
    name: 'Marge Arita',
    contact: '+27 5625 456 589',
    email: 'margearita@gmail.com',
    country: 'Africa',
    status: 'Completed',
    color: 'success',
    company: 'Vehement Capital',
    date: '2019/12/01',
  },
  {
    image: '/assets/images/avatars/02.png',
    name: 'Bill Dabear',
    contact: '+55 2563 456 589',
    email: 'billdabear@gmail.com',
    country: 'Brazil',
    status: 'Active',
    color: 'primary',
    company: 'Massive Dynamic',
    date: '2019/12/01',
  },
]);

const columns = ref([
  {
    data: null,
    title: 'Profile',
    render: function (row) {
      return `
      <td class="text-center text-light">
     <img class="bg-primary-subtle rounded img-fluid avatar-40 me-3" src="${generateImgPath(row.image)}" alt="profile" loading="lazy">
     </td>

        `;
    },
  },
  { data: 'name', title: 'Name' },
  { data: 'contact', title: 'Contact' },
  { data: 'email', title: 'Email' },
  { data: 'country', title: 'Country' },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Status',
    render: function (row) {
      return `
   <span class="badge bg-${row.color}">${row.status}</span>`;
    },
  },
  { data: 'company', title: 'Company' },
  { data: 'date', title: 'Join Date' },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Action',
    render: function () {
      return `  <div class="flex align-items-center list-user-action">
    <a class="btn btn-sm btn-icon btn-success rounded" data-bs-toggle="tooltip" data-method="edit" data-placement="top" title="Add" data-bs-original-title="Add" href="#">
      <span class="btn-inner">
        <i class="fa-solid fa-user-plus fa-xs"></i>
      </span>
    </a>
    <a class="btn btn-sm btn-icon btn-danger rounded delete-btn" data-bs-toggle="tooltip" data-table="action" data-placement="top" title="Delete" data-bs-original-title="Delete" data-method="delete" href="#">
      <span class="btn-inner">
        <i class="fa-solid fa-trash fa-xs"></i>
      </span>
    </a>
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

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

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

const selectElement = ref(0);
const tabindex = '-1'; // Tab index

onMounted(() => {
  new Choices(selectElement.value, {
    searchEnabled: true,
    shouldSort: true,
  });
});
</script>
