const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");
const ReportCardController = require("../controllers/ReportCardController");

const routes = express.Router();

routes.get("/", ReportCardController.getAll);
routes.get("/:code", ReportCardController.get);
routes.post("/", celebrate({
    [Segments.BODY]:
        Joi.object().keys({
            matter: Joi.string().required(),
            className: Joi.string().required(),
            students: Joi.array().items({
                name: Joi.string().required(),
                grade: Joi.number().required()
            })
        }),
}), ReportCardController.create);

module.exports = routes;