/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

/* 3. 以後、アプリケーション固有の処理 */



//
app.get("/party", function(req, res, next){
    if(req.query.color){
        rere(req.query.color)
res.send(req.query.color)
    }
    else{
    console.log("eee")
    }
});
app.get('/hello', (req, res) => {
    res.send('Hello ' + req.query.name);
    console.log("ddd")
});

function rere(e){
    console.log(e)
    var eddystoneBeacon = require('eddystone-beacon');
//ランダム生成

let l=2;
let c="abcdef0123456789";
let cl = c.length;
let r ="";
for (var i =0;i<l;i++){
 r += c[Math.floor(Math.random()*cl)];
}

console.log(r)
var time = "ff" ;
var namespaceId = '00010203040506070809';
var instanceId = e+'ddee'+r;
 
eddystoneBeacon.advertiseUid(namespaceId, instanceId);

console.log(instanceId)
}
