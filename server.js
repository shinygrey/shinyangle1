const http = require("http");
const https = require("https");
const url = require('url');
const path = require('path');
const fs = require("fs");

const express= require('express');
const app =express();

const envGreg = process.env.GREG_VAR;
const envRequestProtocol = process.env.REQUEST_PROTOCOL;
const envRequestUrl = process.env.REQUEST_URL;
const envAllowedSites = process.env.ALLOWED_SITES;

app.use(express.static('./dist/shinyangle1'));

var RestRequest = (function () {
	function aRequest(requestUrl){
		this.rawdata = "";
		this.protocol = this.getProtocol(requestUrl);
		this.getRequest(requestUrl,this.protocol);
	}
	
	aRequest.prototype.getProtocol = function (requestUrl) {
		if((url.parse(requestUrl)).protocol == "https:"){
			return https;
		}else{
			return http;}
	}
	
	aRequest.prototype.getRequest = function (requestUrl,protocol){
		protocol.get(requestUrl, (res) => {
		const { statusCode } = res;
		const contentType = res.headers['content-type'];
		if (statusCode !== 200){
			var error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
		}else if(!/^application\/json/.test(contentType)){
			var error = new Error('Invalid content-type.\n' + `Expected application/json but received ${contentType}`);
		}
		if (error){
			console.log(error.message+ "\n");
			res.resume();
			return;
		}
		res.setEncoding('utf8');
		res.on('data', (chunk) => { this.rawdata += chunk; });
	})};
	return aRequest;
}());



app.use('/backend',function(req, res, next){
	
	var northwind = new RestRequest("https://reqres.in/api/users");
	
	var theresponse = northwind.rawdata;
	var allowedFromConfig = envAllowedSites;
	var allowedOrigins = allowedFromConfig.split(",");
	
	if((req.get('Referer') == "https://shinyangle-staging.herokuapp.com/" && req.get('Origin') == undefined)){
		res.send(theresponse);
		next();	
	}else if(allowedOrigins.includes(req.get('Origin'))){
		res.header("Access-Control-Allow-Origin", req.get('Origin'));
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.send(theresponse);
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