const app = require('express')()
const PORT = process.env.PORT || 8082
const cors = require('cors')
const API_AUTH_KEY = "1234567BU";

app.use(cors())
app.use((req,res,next) => {
    if(req.headers.authorization === API_AUTH_KEY){
        next();
    }else{
        res.send({msg:"invalid header.."});
    }
})

app.listen(PORT,() => console.log(`Server is running on PORT ${PORT}`));