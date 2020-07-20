import React from 'react'
import { useQuery } from '@apollo/client'
import GET_POSTS from './posts.graphql'

const App = () => {
  const { loading, error, data } = useQuery(GET_POSTS, { variables: { id: 1 } })

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h2>Success!</h2>
      <div>{data.post.title}</div>
    </div>
  )
}

export default App
