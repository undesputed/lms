import mysql from "mysql2";
import { databaseConfig } from "./config/db.config";
import { app } from "./app";

const start = async () => {
  try {
    await mysql.createPool({
      host: databaseConfig.HOST,
      user: databaseConfig.USER,
      password: databaseConfig.PASSWORD,
      database: databaseConfig.DB,
      port: 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    console.log("Connected to MYSQL Database");
  } catch (err) {
    console.log(err);
  }

  app.listen(4000, () => {
    console.log("Listening to port 4000");
  });
};

start();
