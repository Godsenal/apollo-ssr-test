import express from "express";
import renderApp from "../src/server";

const app = express();

app.use(express.static("dist"));

app.get("*", async (req, res) => {
  const { html, apolloState } = await renderApp();
  const finalHtml =
    "<!DOCTYPE html>" +
    "<html><head>" +
    `<title>Apollo Client 3 and SSR bug</title>` +
    '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">' +
    '<script type="application/javascript">' +
    `window.apolloState = ${JSON.stringify(apolloState)};` +
    "</script></head><body>" +
    `<div id="app">${html}</div>` +
    `<script type="application/javascript" src="/app.js"></script>` +
    "</body></html>";

  return res.send(finalHtml);
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server is running on port ${PORT} |`,
    new Date().toLocaleString()
  );
});
