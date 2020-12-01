import React from "react";
import { renderToString } from "react-dom/server";
import fetch from "node-fetch";
import App from "./app";
import { API_URL } from "./constans";
import {
  ApolloProvider,
  HttpLink,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";

const apolloClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: API_URL,
    fetch,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      nextFetchPolicy: "cache-first",
    },
  },
});

const renderApp = async () => {
  await getDataFromTree(App);
  const html = renderToString(
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  );
  const apolloState = apolloClient.extract();

  return { html, apolloState };
};

export default renderApp;
