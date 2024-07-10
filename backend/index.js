const express = require("express");

const cors = require("cors");

app.use(cors());
app.use(express.json());

const rootRouter = require("./routes/index");
app.use("/api/v1", rootRouter);
const app =express();



app.listen(3000);




