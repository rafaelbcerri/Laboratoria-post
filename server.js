const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get("/", function response(req, res) {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/feed", function response(req, res) {
  res.sendFile(path.join(__dirname, "feed.html"));
});


app.listen(process.env.PORT || 3000, () => console.log("Server listening on port 3000!"))
