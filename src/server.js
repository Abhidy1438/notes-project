import { env } from "./environment/variable.js";
import http from "http";
import { app } from "./app.js";
import { connectDB } from "./db/db.connect.js";

const server = http.createServer(app);

const PORT = env.PORT;

// connectDB().then(() => {
server.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port :${PORT}`);
});
// });
