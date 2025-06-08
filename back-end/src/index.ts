import express, { json } from "express";
import cors from "cors";
import { routerTaskCreateHandler } from "./app/handlers/task/TaskCreateHandle";
import { routerTaskListHandler } from "./app/handlers/task/TaskListHanlder";
import { routerTaskUpdateHandler } from "./app/handlers/task/TaskUpdateHandler";
import { routerCategoryListHandler } from "./app/handlers/category/CategoryListHandler";
import { routerCategoryCreateHandler } from "./app/handlers/category/CategoryCreateHandler";

const PORT = 3000;
const app = express();
app.use(
  cors({
    origin: "*",
  }),
);
app.use(json());

app.use(routerTaskCreateHandler);
app.use(routerTaskListHandler);
app.use(routerTaskUpdateHandler);

app.use(routerCategoryListHandler);
app.use(routerCategoryCreateHandler);

app.listen(process.env.PORT ?? PORT, () => {
  console.log(`Start server in http://localhost:${PORT}`);
});
