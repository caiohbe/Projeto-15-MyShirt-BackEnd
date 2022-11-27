import db from "../database/db.js"

export async function getPurchases(req, res) {
    console.log("entrou no getPurchases")
    const user = res.locals.token
    console.log(user)
    try {
        const purchases = db.collection("purchases").find({user: user}).toArray()
        res.send(purchases)
    } catch (err) {
        res.status(500).send(err.message)
        return
    }
}

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