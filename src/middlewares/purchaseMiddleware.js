import joi from "joi";

const purchaseSchema = joi.object({
    idProduct: joi().string().required(),
    qtt: joi().number().required()
})
/*TODO: VERIFICAR COMO FAZER A VALIDAÇÃO DE UM OBJETO QUE TARÁ VÁRIOS OBJETOS MENORES*/
export function validatePurchase(req, res, next) {
    const { idProduct, qtt } = req.body;
    const user = res.locals.user;

    const newPurchase = {
        idProduct,
        qtt,
    };

    const { error } = purchaseSchema.validate(newPurchase, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    res.locals.purchase = purchase;
    next()
}