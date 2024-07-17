<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Editable Table</h4>
          </template>
          <template v-slot:headerAction>
            <b-button variant="primary" @click="add">Add New</b-button>
          </template>
          <template v-slot:body>
            <b-row>
              <b-col md="12" class="table-responsive">
                <b-table bordered hover :items="rows" :fields="columns" foot-clone>
                  <template v-slot:cell(name)="data">
                    <span v-if="!data.item.editable">{{ data.item.name }}</span>
                    <input type="text" v-model="data.item.name" v-else class="form-control">
                  </template>
                  <template v-slot:cell(position)="data">
                    <span v-if="!data.item.editable">{{ data.item.position }}</span>
                    <input type="text" v-model="data.item.position" v-else class="form-control">
                  </template>
                  <template v-slot:cell(office)="data">
                    <span v-if="!data.item.editable">{{ data.item.office }}</span>
                    <input type="text" v-model="data.item.office" v-else class="form-control">
                  </template>
                  <template v-slot:cell(age)="data">
                    <span v-if="!data.item.editable">{{ data.item.age }}</span>
                    <input type="text" v-model="data.item.age" v-else class="form-control">
                  </template>
                  <template v-slot:cell(start_date)="data">
                    <span v-if="!data.item.editable">{{ data.item.start_date }}</span>
                    <input type="text" v-model="data.item.start_date" v-else class="form-control">
                  </template>
                  <template v-slot:cell(salary)="data">
                    <span v-if="!data.item.editable">{{ data.item.salary }}</span>
                    <input type="text" v-model="data.item.salary" v-else class="form-control">
                  </template>
                  <template v-slot:cell(action)="data">
                    <b-button variant=" iq-bg-success mr-1 mb-1" v-b-tooltip title="Edit" size="sm" @click="edit(data.item)" v-if="!data.item.editable"><i class="ri-ball-pen-fill m-0"></i></b-button>
                    <b-button variant=" iq-bg-success mr-1 mb-1" size="sm" @click="submit(data.item)" v-else>Ok</b-button>
                    <b-button variant=" iq-bg-danger" size="sm" v-b-tooltip title="Delete"  @click="remove(data.item)"><i class="ri-delete-bin-line m-0"></i></b-button>
                  </template>
                </b-table>
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'

export default {
  name: 'UiDataTable',
  mounted () {
    core.index()
  },
  methods: {
    add () {
      const obj = this.default()
      this.rows.push(obj)
    },
    default () {
      return {
        id: this.rows.length,
        name: '',
        position: '',
        office: '',
        age: '',
        start_date: '2011/04/25',
        salary: '$0',
        editable: false
      }
    },
    edit (item) {
      item.editable = true
    },
    submit (item) {
      item.editable = false
    },
    remove (item) {
      const index = this.rows.indexOf(item)
      this.rows.splice(index, 1)
    }
  },
  data () {
    return {
      columns: [
        { label: 'Name', key: 'name', class: 'text-left' },
        { label: 'Position', key: 'position', class: 'text-left' },
        { label: 'Office', key: 'office', class: 'text-left' },
        { label: 'Age', key: 'age', class: 'text-left' },
        { label: 'Start date', key: 'start_date', class: 'text-left' },
        { label: 'Salary', key: 'salary', class: 'text-left' },
        { label: 'Action', key: 'action', class: 'text-center' }
      ],
      rows: [
        {
          id: 1,
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          start_date: '2011/04/25',
          salary: '$320,800',
          editable: false
        },
        {
          id: 2,
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          start_date: '2011/06/19',
          salary: '$200,600',
          editable: false
        },
        {
          id: 3,
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco',
          age: '69',
          start_date: '2011/01/20',
          salary: '$140,500',
          editable: false
        },
        {
          id: 4,
          name: 'Cedric Kelly',
          position: 'Senior Javascript Developer',
          office: 'Edinburgh',
          age: '42',
          start_date: '2011/02/02',
          salary: '$360,500',
          editable: false
        },
        {
          id: 5,
          name: 'Airi Satou',
          position: 'Accountant',
          office: 'Tokyo',
          age: '39',
          start_date: '2011/08/11',
          salary: '$170,800',
          editable: false
        },
        {
          id: 1,
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          start_date: '2011/04/25',
          salary: '$320,800',
          editable: false
        },

        {
          id: 5,
          name: 'Airi Satou',
          position: 'Accountant',
          office: 'Tokyo',
          age: '39',
          start_date: '2011/08/11',
          salary: '$170,800',
          editable: false
        },
        {
          id: 1,
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          start_date: '2011/04/25',
          salary: '$320,800',
          editable: false
        }
      ]
    }
  }
}
</script>
