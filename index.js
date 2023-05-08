const express =require('express');
const app = express();
app.use(express.static('public/'));
app.listen(9090),function(){
	console.log('server is listening at 9090');
};

