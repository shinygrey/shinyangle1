const http = require("http");
const https = require("https");
const url = require('url');
const path = require('path');
const fs = require("fs");

const express= require('express');
const app =express();

const {RestRequest} = require("./restrequest");

const envGreg = process.env.GREG_VAR;
const envRequestProtocol = process.env.REQUEST_PROTOCOL;
const envRequestUrl = process.env.REQUEST_URL;
const envAllowedSites = process.env.ALLOWED_SITES;

app.use(express.static('./dist/shinyangle1'));

app.use('/backend',function(req, res, next){
	
	var northwind = new RestRequest("https://reqres.in/api/users");
	
	var restResponse = northwind.rawdata;
	var allowedFromConfig = envAllowedSites;
	var allowedOrigins = allowedFromConfig.split(",");
	
	if((req.get('Referer') == "https://shinyangle-staging.herokuapp.com/" && req.get('Origin') == undefined)){
		res.send("success(local):\n" + restResponse + type of northwind.rawdata + type of northwind);
		next();	
	}else if(allowedOrigins.includes(req.get('Origin'))){
		res.header("Access-Control-Allow-Origin", req.get('Origin'));
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.send("success(cross):\n" + restResponse + type of northwind.rawdata + type of northwind);
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