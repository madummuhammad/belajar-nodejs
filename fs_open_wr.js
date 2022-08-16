var fs=require("fs");

fs.open("mynewfile2.txt","w+",function(err,file){
	if(err) throw err;

	let content="hello world!";

	fs.writeFile(file, content, (err)=>{
		if(err) throw err;
		console.log("Saved");
	});

	fs.readFile(file,(err,data)=>{
		if(err) throw err;
		console.log(data.toString('utf8'))
	})
})