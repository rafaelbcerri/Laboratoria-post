const express = require('express');
const path = require('path');
const app = express();

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", function response(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => console.log("Server listening on port 3000!"))
