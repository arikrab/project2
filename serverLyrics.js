var express=require('express');
var axios=require('axios');
var jsonpAdapter=require('axios-jsonp');

var app = express();

const apiKey = "40c6e4f52548502ed122644a3423b717";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/search", (req, res, next) => {
    let quaryParameters = req.query;

    let user=quaryParameters["user"];
    let pass=quaryParameters["pass"];
    console.log(quaryParameters);
    //checkUser(user,pass);

    let searchType = quaryParameters["type"];
    let searchText = quaryParameters["searchText"];
    let page = quaryParameters["page"];

    axios({
        url : 'https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_artist=eminem&quorum_factor=1&apikey=40c6e4f52548502ed122644a3423b717',
        adapter : jsonpAdapter,
        callbackParamName : 'callback'

    }).then((res)=>{

        console.log(res)

        }

    );
    //test
    /*
    let test = searchType+" "+searchText+" "+page;
    console.log(test);

    testJSON= {test1:"test1"};
    console.log(testJSON);

    res.send(testJSON)

     */
    //

});
app.get("/login", (req, res, next) => {

});
app.get("/register", (req, res, next) => {

});

app.get("/registerfb", (req, res, next) => {

});



app.listen(3000 , function () {
   console.log("listening to port 3000") ;
});
