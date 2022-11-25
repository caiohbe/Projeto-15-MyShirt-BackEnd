import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const mongoClient = new MongoClient(process.env.MONGO_URI)
let db
let produtos
try {
    await mongoClient.connect()
    db = mongoClient.db("myShirt")
    produtos = await db.collection("products").insertMany([{ product: "Basic Black T-shirt", price: 25, imageURL: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { product: "Basic White T-shirt", price: 25, imageURL: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { product: "Work Hard T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { product: "Salmon T-shirt", price: 25, imageURL: "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { product: "No Homophobia T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/2664721/pexels-photo-2664721.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { product: "Dontsmoke T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/12395768/pexels-photo-12395768.jpeg?auto=compress&cs=tinysrgb&w=600"},
      { product: "Pink T-shirt", price: 25, imageURL: "https://images.pexels.com/photos/9558699/pexels-photo-9558699.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { product: "Pac-Man T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/2560894/pexels-photo-2560894.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { product: "Yes Kindness T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/1998251/pexels-photo-1998251.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { product: "Aquas T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { product: "Crown T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/3026284/pexels-photo-3026284.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { product: "Yellow T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/5159242/pexels-photo-5159242.jpeg?auto=compress&cs=tinysrgb&w=600" }])

} catch(err) {
    console.log(err)
}

export default db