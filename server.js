import "@babel/polyfill";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import bodyParser from "body-parser";
import { App } from "./src/pages/app";
import { Helmet } from "react-helmet";
import routes from "./src/pages/routes";
import serialize from "serialize-javascript";

const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData("")
    : Promise.resolve();

  promise.then((data) => {
    const context = { data };

    const content = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    const helmet = Helmet.renderStatic();
    const html = `
  <html>
    <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="./style.css" />
        </head>
    <body>
        <div id="root">
            ${content}
        </div>
        <script src="client_bundle.js"></script>
        
    </body>
  </html>
  `;

    res.send(html);
  });
});

app.listen(PORT, () => {
  console.log(`App running ${PORT}`);
});
