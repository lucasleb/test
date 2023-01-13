const express = require ("express")
const https = require("https");
const bodyParser = require("body-parser");

const app = express ();
app.use(express.static("public"));


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
    res.sendFile("/index.html")
});

// app.post("/", function (req, res){
//            res.send();         
// } )

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});



