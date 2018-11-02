const express= require('express'),
path = require('path');
const app =express();
app.use(express.static('./dist/shinyangle1'));
app.get('/*', (req,res)=>{
	res.sendFile(path.join(__dirname,'/dist/shinyangle1/index.html'));
});

app.get('/backend', (req, res) => {
	res.json({gregvar: process.env.GREG_VAR})
});

app.listen(process.env.PORT || 8080, ()=>{
	console.log('Server started');
})