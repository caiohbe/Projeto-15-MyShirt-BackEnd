import db from "../database/db.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

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
    const { email, password } = req.body

    const user = await db.collection("signUps").findOne({ email })
    
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = uuid()

        await db.collection("sessions").insertOne({
            userId: user._id,
            token
        })

        const resObj = {
            token,
            name: user.name
        }

        res.status(200).send(resObj)
    } else {
        res.status(401).send("Senha e/ou email inválido.")
    }
}