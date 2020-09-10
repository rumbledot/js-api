const Joi = require('joi');

// VALIDATORS
const passwordValidator = (data) => {
    const schema = Joi.object({
        password: Joi.string()
            .min(6)
            .required()
            .pattern(new RegExp('^[a-zA-Z0-9!_]{3,30}$'))
    });

    return schema.validate(data);
};

const loginValidator = (data) => {
    const schema = Joi.object({
        username: Joi.string()
            .min(6)
            .required(),
        password: Joi.string()
            .min(6)
            .required()
    });

    return schema.validate(data);
};

module.exports.passwordValidator = passwordValidator;
module.exports.loginValidator = loginValidator;