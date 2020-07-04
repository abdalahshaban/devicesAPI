const joi = require('@hapi/joi');

const deviceSchema = {

    brand: joi.string()
        .required()
        .lowercase(),

    name: joi.string()
        .required()
        .lowercase(),

    description: joi.string()
        .required()
        .trim(),

};

module.exports = {
    deviceSchema: joi.object(deviceSchema),
};