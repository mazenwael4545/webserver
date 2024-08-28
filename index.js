const express = require("express")

const app = express()

app.get('/users', (req,res)=> {
    res.send('server is connected')
})

const port = 5478
app.listen(port, ()=> {
    console.log('server is running on port '+ port);
})