import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  authUser: {
    auth: false,
    authType: false,
    miniSidebarMenu: false,
    user: {}
  },
  users: [
    {
      id: 'sh46s546sdg564sdffs4hsd6fh',
      name: 'Admin Demo',
      mobileNo: null,
      email: 'admin@demo.com',
      profileImage: null,
      password: 'admin123'
    }
  ],
  activePage: {
    name: 'Dashboard',
    breadCrumb: [
      {
        html: '<i class="ri-home-4-line mr-1 float-left"></i>Home',
        to: { name: 'dashboard.home-1' }
      },
      {
        text: '',
        href: '#'
      }
    ]
  },
  layoutMode: {
    sidebar: ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
