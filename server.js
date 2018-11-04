const http = require("http");
const https = require("https");
const path = require('path');
const fs = require("fs");

const express= require('express');
const app =express();

app.use(express.static('./dist/shinyangle1'));

app.use('/backend',function(req, res, next){
	var theresponse = process.env.GREG_VAR
	var allowedFromConfig = process.env.ALLOWED_SITES;
	var allowedOrigins = allowedFromConfig.split(",");
	
	if((req.get('Referer') == ("https://shinyangle-staging.herokuapp.com") && req.get('Origin') == undefined)){
		res.send("\n"+theresponse+"\n");
		next();	
	}else if(allowedOrigins.includes(req.get('Origin'))){
		res.header("Access-Control-Allow-Origin", req.get('Origin'));
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.send("\n"+theresponse+
		+ "\n" +request.socket.localAddress
		);
		next();
	}else{
		res.send('not accessible');
		res.status(403).end('forbidden');
	}
});

app.get('/*', (req,res)=>{
	res.sendFile(path.join(__dirname,'/dist/shinyangle1/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
	console.log('Server started');
})