const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");
const StudentController = require("../controllers/StudentController");

const routes = express.Router();

routes.post("/", celebrate({
    [Segments.BODY]:
        Joi.object().keys({
            name: Joi.string().required(),
            grade: Joi.number().required(),
            reportCard: Joi.string().required()
        }),
}), StudentController.create);

module.exports = routes;