const joi = require('@hapi/joi');

const signupSchema = {

    email: joi.string()
        .required()
        .email()
        .lowercase()
        .message('Invalid email'),

    password: joi.string()
        .required()
        .trim()
        .pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
        .message('Password must be at least a minimum of 8 characters long with 1 small letter, 1 capital letter'),

};

const loginSchema = {
    email: joi.string()
        .email()
        .trim()
        .lowercase()
        .required(),

    password: joi.string()
        .required()
        .trim()
};

module.exports = {
    signup: joi.object(signupSchema),
    login: joi.object(loginSchema),
};