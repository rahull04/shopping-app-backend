require("dotenv").config();
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.set('trust proxy', true)
app.use(bodyParser.json({ limit: '50mb' }));

app.use("/api", require("./src/api/routes"));

//start server
const port = process.env.PORT || "3000";
app.listen(port)