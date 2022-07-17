import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: '<https://localhost:4000/graphql>',
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(apolloProvider)

app.mount('#app')
