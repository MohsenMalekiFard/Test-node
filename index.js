const express = required("express");
const app = express();

app.get("/", function(req, res){
    res.send(`Hello ${req.query.username}`)
});

app.listen(1313, ()={
    console.log('Server Conecnected to 1313 Port')
});