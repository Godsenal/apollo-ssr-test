import express from 'express'
import renderApp from '../src/server'

const app = express()

app.get('*', async (req, res) => {
  const { html, apolloState } = await renderApp()
  const finalHtml =
    '<!DOCTYPE html>' +
    '<html><head>' +
    `<title>Apollo Client 3 and SSR bug</title>` +
    '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">' +
    `<script src="http://localhost:9000/app.js" defer></script>` +
    '<script type="application/javascript">' +
    `window.apolloState = ${JSON.stringify(apolloState)};` +
    '</script></head><body>' +
    `<div id="app">${html}</div>` +
    '</body></html>'

  return res.send(finalHtml)
})

const PORT = 80

app.listen(PORT, () => {
  console.log(
    `🚀 Server is running on port ${PORT} |`,
    new Date().toLocaleString()
  )
})
