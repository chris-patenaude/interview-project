const express = require("express");
const app = express();
const port = 8080;
const data = require("./data.json");

app.use(express.static(__dirname + "/public"));

// handle location data requests
app.get("/locations", (req, res, next) => {
  const filteredData = data.filter((item) => item.State == "Oregon");
  res.status(200).send(filteredData);
});

// Handle resource not found
app.use((req, res, next) => {
  const error = new Error("Page not found.");
  error.status = 404;
  next(error);
});

// Handle Errors
app.use((error, req, res, next) => {
  res.status(error.status).json({ Error: error.message });
});

app.listen(port, () => console.log(`Server listening at port:${port}`));
