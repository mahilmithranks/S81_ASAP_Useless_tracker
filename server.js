const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Basic route to check if server is running
app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
