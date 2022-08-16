var fs=require('fs');

fs.appendFile("mynewfile1.txt",'Hello makdum',function (err){
	if (err) throw err;
	console.log("saved!");
});