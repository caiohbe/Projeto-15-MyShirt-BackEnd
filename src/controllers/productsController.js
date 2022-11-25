import db from "../database/db.js"

export async function getProducts (req, res) {
    let produtos
    try {
        produtos = await db.collection("products").find().toArray()
        res.send(produtos)
    } catch (err) {
        res.status(500).send(err.message)
    }
}