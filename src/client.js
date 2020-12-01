import React from "react";
import App from "./app";
import fetch from "node-fetch";
import { API_URL } from "./constans";
import { ApolloProvider, HttpLink } from "@apollo/client";

import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";

console.log(window.apolloState);

const apolloClient = new ApolloClient({
  connectToDevTools: true,
  link: new HttpLink({
    uri: API_URL,
    fetch,
  }),
  cache: new InMemoryCache().restore(window.apolloState || {}),
  ssrForceFetchDelay: 100,
});

const renderApp = (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);

export default renderApp;
