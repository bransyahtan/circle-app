const joi = require("joi")

const registerSchema = joi.object().keys({
    username: joi.string().min(4).max(20).required(),
    fullName: joi.string().min(4).max(20).required(),
    email: joi.string().email().min(4).max(20).required(),
    password: joi.string().min(4).required(),

})

const loginSchema = joi.object().keys({
    email: joi.string().email().min(4).max(20).required(),
    password: joi.string().min(4).required(),

})

export {loginSchema, registerSchema}