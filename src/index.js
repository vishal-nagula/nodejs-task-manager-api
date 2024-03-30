const express = require('express');
const bodyParser = require('body-parser');
const taskManagerRouters = require('./routes/tastManagerRoutes');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
/*USING ROUTER MODULE FOR ALL ROUTES*/
console.log("here added")
app.use(taskManagerRouters);
console.log("here added")
/*TEST SERVER STATUS*/
app.get("/ping",(req,res)=>{
    res.send("PONG...!!!!");
});
console.log("here added")

/*SERVER START UP*/
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    console.log("here added")
}
)