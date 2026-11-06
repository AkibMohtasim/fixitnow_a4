import app from "./app";
import "dotenv/config";
import { prisma } from "./lib/prisma";
import config from "./config";


const port = config.port;


async function main() {
  try {
    await prisma.$connect();
    console.log("Connected to database successfully!");

    app.listen(port, () => {
      console.log("Server running at port", port);
    })

  } catch (error) {
    console.log("Error handling the server", error);
    await prisma.$disconnect();
    process.exit();
  }
};


main();