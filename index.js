
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const api = require('./api');
app.use('/api', api);

// app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));
// app.get("/", function(req, res) {
//     res.sendfile(__dirname + '/index.html', function(err) {
//         if (err) res.send(404);
//     });
// });


app.listen(port, function() {
    console.log("Listening on " + port);
});
// function extractEmails ( text ){
//   return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
// }
//https://www.mingjilee.com/tw/about.html




// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });



// const start = ()=>{
//   readline.question(`在這貼上一個網址: `, name => {
//     pttCrawler(name)
    
//   });
// }
// const finish = ()=>{
//   readline.close();
// }
// start()