import express from "express"
import cors from "cors"
import signUpsRouters from "./src/routes/signUpsRoutes.js"
import purchasesRouters from "./src/routes/purchasesRoutes.js"
import productsRouters from "./src/routes/productsRoutes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(signUpsRouters)
app.use(purchasesRouters)
app.use(productsRouters)

app.listen(5000, () => {
    console.log("Running at port 5000")
})