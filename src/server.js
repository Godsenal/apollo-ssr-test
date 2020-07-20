import React from 'react'
import { renderToStringWithData } from '@apollo/client/react/ssr'
import fetch from 'node-fetch'
import App from './app'
import { API_URL } from './constans'
import { ApolloProvider, HttpLink } from '@apollo/client'

import { ApolloClient } from '@apollo/client' // 🕷 It doesn't work with @apollo-client
import { InMemoryCache } from '@apollo/client' // 🕷 same here

// import { ApolloClient } from 'apollo-client' // ✅ But it works with apollo-client v2.6.x
// import { InMemoryCache } from 'apollo-cache-inmemory' // ✅ and apollo-cache-inmemory

const apolloClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: API_URL,
    fetch,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
})

const renderApp = async () => {
  const html = await renderToStringWithData(
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  )
  const apolloState = apolloClient.extract()

  return { html, apolloState }
}

export default renderApp
