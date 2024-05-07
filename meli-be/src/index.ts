import dotenv from "dotenv";

import app from "./app";
import { PORT } from "./config";
dotenv.config();

async function main() {
  try {
    app.listen(PORT);
    console.log("Server on port", PORT);
  } catch (error) {
    console.error(error);
  }
}

main();