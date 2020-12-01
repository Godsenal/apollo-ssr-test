import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import GET_POSTS from "./posts.graphql";
import GET_ALBUMS from "./albums.graphql";

const Component = ({ query, fieldName }) => {
  const { loading, error, data, client } = useQuery(query, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
  });
  if (loading) return <div>Loading...</div>;

  const handleEvict = () => {
    const firstData = data[fieldName].data[0];

    client.cache.evict({
      id: client.cache.identify(firstData),
    });
    client.cache.gc();
  };

  return (
    <div>
      <button onClick={handleEvict}>evict first data</button>
      <ul>
        {data[fieldName].data.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [mode, setMode] = useState("ssr");
  const props =
    mode === "ssr"
      ? { query: GET_POSTS, fieldName: "posts" }
      : { query: GET_ALBUMS, fieldName: "albums" };

  return (
    <div>
      <button
        onClick={() => setMode((prev) => (prev === "ssr" ? "csr" : "ssr"))}
      >
        change mode
      </button>
      <Component {...props} />
    </div>
  );
};

export default App;
