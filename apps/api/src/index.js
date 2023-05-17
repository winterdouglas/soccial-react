const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require("./api.js");

const app = express();
const port = 3000;
const corsRules = cors({ origin: "http://localhost:5173" });

// Enables preflight
app.options("*", corsRules);
app.use(corsRules);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(api);

app.listen(port, () => console.log(`App listening on port ${port}!`));
