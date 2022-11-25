import db from "../database/db.js"

export async function getPurchases(req, res) {
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postPurchases(req, res) {
    const newPurchase = res.locals.purchase;
    /*VERIFICAR COMO FICA A VALIDAÇÃO SE COMPRAR MAIS DE UM OBJETO*/
    try {
        await db.collections("purchases").insertOne(newPurchase);
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message)
    }
}