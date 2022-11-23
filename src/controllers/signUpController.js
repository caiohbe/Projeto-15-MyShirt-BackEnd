import db from "../database/db.js"
import bcrypt from "bcrypt"

export async function postSignUp (req, res) {
    const { email, name } = req.body
    const password = bcrypt.hashSync(req.body.password, 10)

    const newUser = {
        email,
        name,
        password
    }

    try {
        if (await db.collection("signUps").findOne({email})) {
            res.status(409).send("Email já cadastrado.")
        } else {
            await db.collection("signUps").insertOne(newUser)
            res.sendStatus(200)
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postSignIn (req, res) {
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}