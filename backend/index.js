// backend/index.js
const express = require('express');
require('dotenv').config();
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

const port = process.env.PORT || 3000;
app.listen(port);