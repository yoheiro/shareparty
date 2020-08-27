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
var instanceId = 'ff00ffddee'+r;
 
eddystoneBeacon.advertiseUid(namespaceId, instanceId);
