const express = require("express");
const server = express();

server.get("/", (req, res) => {
  return res.json({ message: "API is working" });
});

server.listen(3000, () => {
  console.log("Servidor está funcionando...");
});
