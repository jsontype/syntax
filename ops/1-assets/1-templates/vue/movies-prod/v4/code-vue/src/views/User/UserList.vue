<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <div class="iq-card">
          <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">User Lists</h4>
              </div>
          </div>
          <div class="iq-card-body">
            <div class="table-view">
              <table class="data-tables table movie_table" style="width:100%">
                  <thead>
                    <tr>
                        <th style="width: 10%;">Profile</th>
                        <th style="width: 10%;">Name</th>
                        <th style="width: 20%;">Contact</th>
                        <th style="width: 20%;">Email</th>
                        <th style="width: 10%;">Country</th>
                        <th style="width: 10%;">Status</th>
                        <th style="width: 10%;">Join Date</th>
                        <th style="width: 10%;">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(item,index) in userlist" :key="index">
                      <td>
                        <img :src="item.image" class="img-fluid avatar-50" alt="author-profile">
                      </td>
                      <td>{{item.name}}</td>
                      <td>{{item.contact}}</td>
                      <td>{{item.email}}</td>
                      <td>{{item.country}}</td>
                      <td><span class="badge iq-bg-success">{{item.status}}</span></td>
                      <td>{{item.date}}</td>
                      <td>
                        <div class="flex align-items-center list-user-action">
                            <a class="iq-bg-success" v-b-tooltip:top title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                            <a class="iq-bg-primary" v-b-tooltip:top title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
export default {
  name: 'UserList',
  mounted () {
    core.index()
    core.initDataTable()
  },
  data () {
    return {
      userlist: [
        {
          image: require('../../assets/images/user/01.jpg'),
          name: 'Anna Sthesia',
          contact: '0123456789',
          email: 'anna@gmail.com',
          country: 'India',
          status: 'Active',
          date: '21 Jul, 2020'
        },
        {
          image: require('../../assets/images/user/03.jpg'),
          name: 'Anna Sthesia',
          contact: '0123456789',
          email: 'anna@gmail.com',
          country: 'India',
          status: 'Active',
          date: '21 Jul, 2020'
        },
        {
          image: require('../../assets/images/user/05.jpg'),
          name: 'Brock Lee',
          contact: '2586253125',
          email: 'brock@gmail.com',
          country: 'India',
          status: 'Block',
          date: '12 Jun, 2020'
        },
        {
          image: require('../../assets/images/user/08.jpg'),
          name: 'Lynn Guini',
          contact: '2563456589',
          email: 'lynn@gmail.com',
          country: 'India',
          status: 'Active',
          date: '29 Jul, 2020'
        },
        {
          image: require('../../assets/images/user/06.jpg'),
          name: 'Eric Shun',
          contact: '5625456589',
          email: 'eric@gmail.com',
          country: 'India',
          status: 'Block',
          date: '01 Aug, 2020'
        },
        {
          image: require('../../assets/images/user/10.jpg'),
          name: 'Marge Arita',
          contact: '2563456589',
          email: 'marge@gmail.com',
          country: 'India',
          status: 'Pending',
          date: '09 May, 2020'
        }
      ]
    }
  },
  components: {
  }
}
</script>
