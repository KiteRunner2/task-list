import express from "express";
import { connect } from "./db/connect";
import taskRouter from "./routes/task";

const app = express();

app.use(express.json());

app.use("/tasks", taskRouter);

connect()
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5500, () => {
  console.log("server started");
});
