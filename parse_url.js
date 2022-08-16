var url=require('url');
var adr="https://madummuhammad.github.io/search.php?year=2019&month=february";
var q=url.parse(adr,false);

console.log("protocol:"+q.protocol);
console.log("hostname:"+q.host);
console.log("pathname:"+q.pathname);
console.log("params:"+q.search);

var qdata=q.query;
console.log(qdata);
