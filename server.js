const express= require('express'),
path = require('path');
const app =express();
const router = express.Router();

app.use(express.static('./dist/shinyangle1'));

app.get('/*', (req,res)=>{
	res.sendFile(path.join(__dirname,'/dist/shinyangle1/index.html'));
});




router.get('/backend', function(req, res){
	res.json({url: 'thisIsGreg'})
 /*process.env.GREG_VAR*/
	res.status(500).json({ error: 'message' });
});

app.listen(process.env.PORT || 8080, ()=>{
	console.log('Server started');
})