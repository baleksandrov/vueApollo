import Vue from 'vue'
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost'
import App from './App.vue'
/* eslint-disable */

Vue.use(VueApollo);

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: 'Bearer ' + '0044efca8d05b9f3285553de669b8554e8e9e713'
      },
    });
  }
});

const apolloProvider = new VueApollo({
  defaultClient: client
})




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  apolloProvider,
}).$mount('#app')
