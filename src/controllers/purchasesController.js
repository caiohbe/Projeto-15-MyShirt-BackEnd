import db from "../database/db.js"

export async function postPurchases(req, res) {
    const newPurchase = req.body
    const token = res.locals.token
    const purchase = {
        purchaser: token,
        purchase: newPurchase
    }
    try {
        await db.collection("purchases").insertOne(purchase);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message)
    }
}