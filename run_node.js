var express = require("express");
var app = express();
const PORT = process.env.PORT || 3001;
var dotenv = require("dotenv").config();
var http = require("http"),
  fs = require("fs"),
  ccav = require("./ccavutil.js"),
  qs = require("querystring"),
  ccavReqHandler = require("./ccavRequestHandler.js"),
  ccavResHandler = require("./ccavResponseHandler.js");

app.use(express.static("public"));
// app.use(dotenv());
app.set("views", __dirname + "/public");
app.engine("html", require("ejs").renderFile);

app.get("/", function (req, res) {
  res.render("dataFrom.html");
});

app.post("/ccavRequestHandler", function (request, response) {
  ccavReqHandler.postReq(request, response);
});

app.post("/ccavResponseHandler", function (request, response) {
  ccavResHandler.postRes(request, response);
});

app.listen(PORT, function (res, req) {
  console.log(`App listening on port ${PORT}!`);
  // console.log(process.env); // remove this after you've confirmed it is working
});
