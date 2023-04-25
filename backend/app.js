const express = require('express')
const mongoose = require('mongoose')
const router = require("./routes/book-routes")
const app = express();

mongoose.set('strictQuery', false);
mongoose
    .connect("mongodb+srv://admin:Shubham12345@cluster0.1omwdtx.mongodb.net/bookstore")
    .then(() => console.log("Connected To DataBase"))
    .catch((err) => console.log(err))
    //MiddleWares

// app.use('/', (req, res, next) => {
//     res.send("Hello From Server")
// })
app.use(express.json())
app.use("/books", router)
    // router.get("/")



app.listen(5000, () => {
    console.log('server running')
})