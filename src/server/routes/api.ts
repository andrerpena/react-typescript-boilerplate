import * as express from "express";
const apiRouter = express.Router();

apiRouter.route("/test").get((req, res) => {
    res.status(200).send({ text: "your test has passed - fuck" });
});

export { apiRouter }
