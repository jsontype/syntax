<template>
  <b-row>
    <b-col lg="12">
      <b-card no-body>
        <template #header>
          <div class="border-bottom d-flex justify-content-between align-items-center py-3">
            <div class="d-flex align-items-center gap-1 pt-3">
              <select ref="selectElement" class="form-control select2-basic-multiple" :placeholder="$t('bordertable.no_action')" :tabindex="tabindex">
                <option value="0">{{ $t('bordertable.no_action') }}</option>
                <option value="1">{{ $t('bordertable.status') }}</option>
                <option value="2">{{ $t('edit.delete') }}</option>
              </select>
              <b-button variant="primary" class="mb-4">{{ $t('bordertable.apply') }}</b-button>
            </div>
          </div>
        </template>
        <div class="border rounded py-4">
          <div class="custom-table-effect table-responsive mb-0">
            <table id="datatable" ref="tableRef" class="table mb-0 dataTable no-footer" data-toggle="data-table"></table>
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import useDataTable from '../../hooks/useDatatable';
import Choices from 'choices.js';

const selectElement = ref(null);
const tabindex = '-1'; // Tab index

onMounted(() => {
  new Choices(selectElement.value, {
    searchEnabled: true,
    shouldSort: true,
  });
});

const usa = `<svg width="18" class="me-2" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="20" height="13.75" fill="#EEF3F8"/>
                    <rect y="0.5" width="11.25" height="8.75" fill="#41479B"/>
                    <rect x="11.25" y="0.5" width="8.75" height="1.25" fill="#DC251C"/>
                    <rect x="11.25" y="3" width="8.75" height="1.25" fill="#DC251C"/>
                    <rect x="11.25" y="5.5" width="8.75" height="1.25" fill="#DC251C"/>
                    <rect x="11.25" y="8" width="8.75" height="1.25" fill="#DC251C"/>
                    <rect y="10.5" width="20" height="1.25" fill="#DC251C"/>
                    <rect y="13" width="20" height="1.25" fill="#DC251C"/>
                    <rect x="1.25" y="1.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="3.75" y="1.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="6.25" y="1.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="8.75" y="1.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="1.25" y="4.25" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="3.75" y="4.25" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="6.25" y="4.25" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="2.5" y="5.5" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="5" y="5.5" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="7.5" y="5.5" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="2.5" y="3" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="5" y="3" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="7.5" y="3" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="8.75" y="4.25" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="1.25" y="6.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="3.75" y="6.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="6.25" y="6.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="8.75" y="6.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                </svg>`;

const spn = `<svg width="18" class="me-2" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="15" transform="translate(0 0.5)" fill="#FFD018"/>
                    <rect y="0.5" width="20" height="3.75" fill="#DC251C"/>
                    <rect y="11.75" width="20" height="3.75" fill="#DC251C"/>
                    <rect x="3.75" y="5.5" width="2.5" height="2.5" fill="#DC251C"/>
                    <path d="M3.75 8H6.25V10.5H4.75C4.19772 10.5 3.75 10.0523 3.75 9.5V8Z" fill="#FF8718"/>
                    <path d="M6.25 8H8.75V9.5C8.75 10.0523 8.30228 10.5 7.75 10.5H6.25V8Z" fill="#DC251C"/>
                    <rect x="6.25" y="5.5" width="2.5" height="2.5" fill="#A6A6A6"/>
                    <circle cx="6.25" cy="8" r="0.625" fill="#41479B"/>
                </svg>`;

const itl = `<svg width="18" class="me-2" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="20" height="15" fill="#F5F8FB"/>
                    <rect y="0.5" width="6.25" height="15" fill="#2B9F5A"/>
                    <rect x="13.75" y="0.5" width="6.25" height="15" fill="#DC251C"/>
                </svg>`;

const jpn = `<svg width="18" class="me-2" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="15" transform="translate(0 0.5)" fill="#F5F8FB"/>
                    <circle cx="9.5" cy="7.5" r="3.5" fill="#DC251C"/>
                </svg>`;

const ger = `<svg width="22" class="me-2" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21.3333" height="16" fill="#272727"/>
                    <rect y="5.3335" width="21.3333" height="5.33333" fill="#E31D1C"/>
                    <rect y="10.6665" width="21.3333" height="5.33333" fill="#FFD018"/>
                </svg>`;

const ind = `<svg width="21" class="me-2" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_80_4707)">
                    <path d="M0 0H21V5.33333H0V0Z" fill="#FF8718"/>
                    <path d="M0 5.3335H21V10.6668H0V5.3335Z" fill="#F5F8FB"/>
                    <path d="M0 10.6665H21V15.9998H0V10.6665Z" fill="#2B9F5A"/>
                    <path d="M11.813 8.00033C11.813 8.73671 11.2254 9.33366 10.5005 9.33366C9.77561 9.33366 9.18799 8.73671 9.18799 8.00033C9.18799 7.26395 9.77561 6.66699 10.5005 6.66699C11.2254 6.66699 11.813 7.26395 11.813 8.00033Z" fill="#F5F8FB"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.4995 7.33333C10.1371 7.33333 9.84326 7.63181 9.84326 8C9.84326 8.36819 10.1371 8.66667 10.4995 8.66667C10.8619 8.66667 11.1558 8.36819 11.1558 8C11.1558 7.63181 10.8619 7.33333 10.4995 7.33333ZM8.53076 8C8.53076 6.89543 9.4122 6 10.4995 6C11.5868 6 12.4683 6.89543 12.4683 8C12.4683 9.10457 11.5868 10 10.4995 10C9.4122 10 8.53076 9.10457 8.53076 8Z" fill="#41479B"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_80_4707">
                    <rect width="21" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>`;

const uae = `<svg width="22" class="me-2" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="5.3335" width="21.3333" height="5.33333" fill="#F5F8FB"/>
                    <rect width="21.3333" height="5.33333" fill="#2B9F5A"/>
                    <rect y="10.6665" width="21.3333" height="5.33333" fill="#272727"/>
                    <rect width="6.66667" height="16" fill="#DC251C"/>
                </svg>`;

const grc = `<svg width="21" class="me-2" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="16" fill="#F5F8FB"/>
                    <rect width="21" height="2" fill="#41479B"/>
                    <rect y="3" width="21" height="3" fill="#41479B"/>
                    <rect y="7" width="21" height="2" fill="#41479B"/>
                    <rect width="9" height="9" fill="#41479B"/>
                    <rect y="3" width="9" height="3" fill="#F5F8FB"/>
                    <rect x="3" y="9" width="9" height="3" transform="rotate(-90 3 9)" fill="#F5F8FB"/>
                    <rect y="10" width="21" height="3" fill="#41479B"/>
                    <rect y="14" width="21" height="2" fill="#41479B"/>
                </svg>`;

const sko = `<svg width="18" class="me-2" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="16" fill="#F5F8FB"/>
                    <ellipse cx="10.5" cy="7.69231" rx="3.5" ry="3.69231" fill="#DC251C"/>
                    <mask style={{maskType: 'alpha'}}  maskUnits="userSpaceOnUse" x="7" y="7" width="7" height="5">
                    <path d="M14 12.0002V8.30792C12.832 6.15169 10.4961 7.92611 10.4961 7.92611C10.4961 7.92611 8.16538 9.53597 7 7.07715V12.0002H14Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask0_80_4853)">
                    <ellipse cx="10.5" cy="7.69231" rx="3.5" ry="3.69231" fill="#41479B"/>
                    </g>
                    <path d="M2.16455 4.83789L4.32821 1.09033" stroke="black" strokeWidth="0.5"/>
                    <path d="M3.12744 5.39551L5.2911 1.64795" stroke="black" strokeWidth="0.5"/>
                    <path d="M4.09131 5.95117L6.25496 2.20361" stroke="black" strokeWidth="0.5"/>
                    <path d="M18.9995 4.83789L16.8359 1.09033" stroke="black" strokeWidth="0.5" strokeDasharray="8 1"/>
                    <path d="M18.0366 5.39551L15.873 1.64795" stroke="black" strokeWidth="0.5"/>
                    <path d="M17.0728 5.95117L14.9091 2.20361" stroke="black" strokeWidth="0.5" strokeDasharray="8 1"/>
                    <path d="M2.16406 11.5049L4.32772 15.2524" stroke="black" strokeWidth="0.5"/>
                    <path d="M3.12744 10.9492L5.2911 14.6968" stroke="black" strokeWidth="0.5" strokeDasharray="8 1"/>
                    <path d="M4.09082 10.3926L6.25447 14.1401" stroke="black" strokeWidth="0.5"/>
                    <path d="M18.9995 11.5049L16.8359 15.2524" stroke="black" strokeWidth="0.5" strokeDasharray="8 1"/>
                    <path d="M18.0366 10.9492L15.873 14.6968" stroke="black" strokeWidth="0.5" strokeDasharray="8 1"/>
                    <path d="M17.0732 10.3926L14.9096 14.1401" stroke="black" strokeWidth="0.5" strokeDasharray="8 1"/>
                </svg>`;

const add = `<i class="fa-solid fa-user-plus"></i>`;

const edit = `<i class="fa-solid fa-pen"></i>`;

const remove = `<i class="fa-solid fa-trash"></i>`;

const tableData = ref([
  {
    user: {
      name: 'Anne Teak',
      desc: '@musk',
      img: '/assets/images/avatars/09.png',
    },
    contact: '(208) 555-0112',
    emailid: 'musk.e@mail.com',
    country: {
      countrysvg: grc,
      countryname: 'UAE',
    },
    purchases: '548',
    statustype: {
      textColor: 'white',
      bgColor: 'primary',
      status: 'Hold',
    },
    action: {
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
  },
  {
    user: {
      name: 'Anne Teak',
      desc: '@musk',
      img: '/assets/images/avatars/10.png',
    },
    contact: '(208) 555-0112',
    emailid: 'musk.e@mail.com',
    country: {
      countrysvg: sko,
      countryname: 'UAE',
    },
    purchases: '548',
    statustype: {
      textColor: 'success-subtle',
      bgColor: 'success-subtle',
      status: 'Complete',
    },
    action: {
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
  },
  {
    user: {
      name: 'Clara Mist',
      desc: '@mist.c',
      img: '/assets/images/avatars/01.png',
    },
    contact: '(208) 674-3424',
    emailid: 'mist.e@mail.com',
    country: {
      countrysvg: uae,
      countryname: 'IND',
    },
    purchases: '327',
    statustype: {
      textColor: 'warning-subtle',
      bgColor: 'warning-subtle',
      status: 'Pending',
    },
    action: {
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
  },
  {
    user: {
      name: 'Clinette Mark',
      desc: '@c.mark',
      img: '/assets/images/avatars/04.png',
    },
    contact: '(208) 346-4687',
    emailid: 'c.mark@mail.com',
    country: {
      countrysvg: jpn,
      countryname: 'USA',
    },
    purchases: '324',
    statustype: {
      textColor: 'success-subtle',
      bgColor: 'success-subtle',
      status: 'Complete',
    },
    action: {
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
  },
  {
    user: {
      name: 'Dennis Hall',
      desc: '@dennis',
      img: '/assets/images/avatars/08.png',
    },
    contact: '(208) 555-0112',
    emailid: 'dennis.e@mail.com',
    country: {
      countrysvg: ind,
      countryname: 'GER',
    },
    purchases: '210',
    statustype: {
      textColor: 'primary-subtle',
      bgColor: 'primary-subtle',
      status: 'Active',
    },
    action: {
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
  },
  {
    user: {
      name: 'James Mason',
      desc: '@mason.j',
      img: '/assets/images/avatars/05.png',
    },
    contact: '(208) 326-4679',
    emailid: 'mason.j@mail.com',
    country: {
      countrysvg: itl,
      countryname: 'S.KO',
    },
    purchases: '481',
    statustype: {
      textColor: 'white',
      bgColor: 'primary',
      status: 'Hold',
    },
    action: {
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
  },
  {
    user: {
      name: 'Jamie Park',
      desc: '@jpark',
      img: '/assets/images/avatars/03.png',
    },
    contact: '(208) 778-6878',
    emailid: 'park.e@mail.com',
    country: {
      countrysvg: ger,
      countryname: 'ITL',
    },
    purchases: '123',
    statustype: {
      textColor: 'danger-subtle',
      bgColor: 'danger-subtle',
      status: 'Inactive',
    },
    action: {
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
  },
  {
    user: {
      name: 'Anne Teak',
      desc: '@musk',
      img: '/assets/images/avatars/07.png',
    },
    contact: '(208) 555-0112',
    emailid: 'musk.e@mail.com',
    country: {
      countrysvg: usa,
      countryname: 'GRC',
    },
    purchases: '548',
    statustype: {
      textColor: 'primary-subtle',
      bgColor: 'primary-subtle',
      status: 'Active',
    },
    action: {
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
  },
  {
    user: {
      name: 'Marie Clark',
      desc: '@mclark',
      img: '/assets/images/avatars/06.png',
    },
    contact: '(208) 262-238',
    emailid: 'mclark@mail.com',
    country: {
      countrysvg: spn,
      countryname: 'SPN',
    },
    purchases: '256',
    statustype: {
      textColor: 'warning-subtle',
      bgColor: 'warning-subtle',
      status: 'Pending',
    },
    action: {
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
  },
]);
const columns = ref([
  {
    title: 'Profiles',
    data: 'user',
    render: function (row) {
      return `<div class="d-flex align-items-center"><img class="rounded img-fluid avatar-60 me-3" src="${generateImgPath(row.img)}" alt=""/><div class="media-support-info"><h5 class="mb-0">${row.name}</h5><p class="mb-0">${row.desc}</p></div></div>`;
    },
  },
  {
    title: 'Contact',
    data: 'contact',
  },
  {
    title: 'Email ID',
    data: 'emailid',
  },
  {
    title: 'Country',
    data: 'country',
    render: function (row) {
      return `${row.countrysvg} ${row.countryname}`;
    },
  },
  {
    title: 'Purchases',
    data: 'purchases',
  },
  {
    title: 'Status',
    data: 'statustype',
    render: function (row) {
      return `<span class="badge bg-${row.bgColor} p-2 text-${row.textColor}">${row.status}</span>`;
    },
  },
  {
    title: 'Action',
    data: 'action',
    render: function (row) {
      return `  <div class="d-flex justify-content-evenly">
    <a class="btn btn-primary btn-icon btn-sm rounded-pill" href="#" role="button">
      <span class="btn-inner">
        ${row.actionadd}
      </span>
    </a>
    <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#" role="button">
      <span class="btn-inner">
        ${row.actionedit}
      </span>
    </a>
    <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#" role="button">
      <span class="btn-inner">
        ${row.actionremove}
      </span>
    </a>
  </div>
    `;
    },
  },
]);

const tableRef = ref(null);
useDataTable({
  tableRef: tableRef,
  columns: columns.value,
  data: tableData.value,
});

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};
</script>
