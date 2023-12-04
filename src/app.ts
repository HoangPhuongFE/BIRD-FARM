import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as env from "dotenv";

import mainRoute from "./routes/main.route";
import { DATE_TIME_FORMAT } from "./config/format.enum";
import ErrorHandler from "./middlewares/errorHandler";
import PrismaService from "./services/prisma.service";

const prisma = PrismaService.getInstance();
//NOTE - connect to database
prisma.$connect();

//NOTE - test database connection
const dbtest = async () => {
  console.log("Test database connection");

  const role = await prisma.role.findMany();
  console.log("role", role);
};

dbtest();

//NOTE - environment variables configuration
env.config();

const app = express();
const PORT = 3000;

//NOTE - Time request report middleware (custom)
app.use("/", (req: Request, res: Response, next: NextFunction) => {
  const currentDate = new Date();
  const dateFormated = new Intl.DateTimeFormat(
    "es-US",
    DATE_TIME_FORMAT
  ).format(currentDate);
  console.log("Time: ", dateFormated);
  next();
});

//NOTE -  Body parser , cors middleware use
// Cấu hình giới hạn kích thước yêu cầu lên 50MB
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World with TypeScript!");
});

//NOTE - Serve static files from the 'public' directory
// To get resource : http://localhost:3000/uploads/bird/${name file}
app.use(express.static("public"));

//NOTE - main routes
app.use("/", mainRoute);

//NOTE -  Error handling middleware
app.use(ErrorHandler);

//NOTE - Start listen port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
