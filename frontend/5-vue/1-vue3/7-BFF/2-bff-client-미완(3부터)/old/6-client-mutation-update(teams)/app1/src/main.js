import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// BFF
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import VueApollo from "vue-apollo"

Vue.use(VueApollo)

// GraphQL 서버의 URL 지정
const httpLink = new HttpLink({
  uri: "http://localhost:4000/",
})

// Apollo client 생성
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

// Apollo provider 생성
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: (h) => h(App),
}).$mount("#app")
