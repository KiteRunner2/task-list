import { MongoClient } from "mongodb";
// Connection URI
const uri = "mongodb://localhost:27017/task=list";
// Create a new MongoClient
export const client = new MongoClient(uri);
const database = client.db("task-list");
export const tasks = database.collection("tasks");

export async function connect() {
  try {
    await client.connect();
  } catch (err) {
    console.log(err);
  }
}
