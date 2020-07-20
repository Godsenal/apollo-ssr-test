import React from 'react'
import App from './app'
import fetch from 'node-fetch'
import { API_URL } from './constans'
import { ApolloProvider, HttpLink } from '@apollo/client'

// import { ApolloClient } from '@apollo/client' // 🕷 It doesn't work with @apollo-client
// import { InMemoryCache } from '@apollo/client' // 🕷 same here

import { ApolloClient } from 'apollo-client' // ✅ But it works with apollo-client v2.6.x
import { InMemoryCache } from 'apollo-cache-inmemory' // ✅ and apollo-cache-inmemory

const apolloClient = new ApolloClient({
  connectToDevTools: true,
  link: new HttpLink({
    uri: API_URL,
    fetch,
  }),
  cache: new InMemoryCache().restore(window.apolloState || {}),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
})

const renderApp = (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
)

export default renderApp
