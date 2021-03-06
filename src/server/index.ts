import * as colors from "colors";
import * as express from "express";
import * as webpack from "webpack";
const config = require("../../package.json");

// routes
import { apiRouter } from "./routes/api";
import { appRouter } from "./routes/app";

let app = express();

app.use("/api", apiRouter);
app.use("", appRouter);

app.listen(4000, "0.0.0.0", () => {
    console.log(
        colors.green(`${config.name} is listening on http://localhost:4000. NODE_ENV: ${process.env.NODE_ENV}`));
});