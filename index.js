const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const helmet = require('helmet')
const app = express()
const API_AUTH_KEY = "1234567BU";

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT || 8082

app.use((req,res,next) => {
    if(req.headers.authorization === API_AUTH_KEY){
        next();
    }else{
        res.send({msg:"invalid header.."});
    }
})

app.use('/api/v1',require('./routes/routes'));
app.listen(PORT,() => console.log(`Server is running on PORT ${PORT}`));