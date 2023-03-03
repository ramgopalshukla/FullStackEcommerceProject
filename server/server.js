

const app= require('./app')
const dotenv= require("dotenv")


app.listen(process.env.PORT, ()=>{

    console.log(`server is working on http://localhost:${process.env.PORT}`)
})

