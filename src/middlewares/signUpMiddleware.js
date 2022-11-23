import joi from "joi";

const signUpSchema = joi.object({
    name: joi.string().required(),
    adress: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required()
})

export function validateSignUp (req, res, next) {
    const validation = signUpSchema.validate(req.body, { abortEarly: false })

    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message)
        res.status(422).send(errors)
        return
    }

    if (req.body.password !== req.body.confirmPassword) {
        res.status(409).send("Senhas precisam ser idênticas.")
        return
    }

    next()
}