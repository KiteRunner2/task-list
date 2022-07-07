import express from "express";

const app = express();

app.get("/test", (req, res) => {
  res.end("ok");
});

app.listen(5500, () => {
  console.log("server started");
});
