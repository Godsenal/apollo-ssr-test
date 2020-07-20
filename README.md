# apollo-client-3-ssr-demo

Bug with @apollo/client and InMemoryCache's restore()

### Intended outcome

`new InMemoryCache().restore(window.apolloState || {})` should populate the cache from `window.apolloState`. It works with `apollo-client` (version 2.6.x), but not with `@apollo/client`.

### Actual outcome

`new InMemoryCache().restore(window.apolloState || {})` doesn't populate the cache, it's empty.

### How to reproduce

You can comment and uncomment the lines with 🕷 and ✅ and clearly see how it works with old version 2.6.x and doesn't work with the 3.x.

    import { ApolloClient } from '@apollo/client' // 🕷 It doesn't work with @apollo-client
    import { InMemoryCache } from '@apollo/client' // 🕷 same here

    // import { ApolloClient } from 'apollo-client' // ✅ But it works with apollo-client v2.6.x
    // import { InMemoryCache } from 'apollo-cache-inmemory' // ✅ and apollo-cache-inmemory

### Installation

    npm install
    npm run client
    npm run server
    npm start