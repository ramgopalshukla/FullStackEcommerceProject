const app= require('./app')
const dotenv= require("dotenv")
const router= require('./routes/productroutes')
const connectDB= require('./config/db')
dotenv.config()

connectDB();
app.use('/api/v1', router)

app.listen(process.env.PORT, ()=>{

    console.log(`server is working on http://localhost:${process.env.PORT}`)
});

