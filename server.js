const express = require("express");
const app = express();
const path = require("path")

app.set('view engine','ejs');// you can use any other template engine
app.set('views',path.join(__dirname,'views'));

app.use('/css',express.static('css'))
app.use('/img',express.static('img'))

app.get("/",(req,res) => {
    res.render('index', {});
});

//routes
app.get('/hello',(req,res) => {
    res.send('Task Manager App')
})



app.listen(3000, () => {
    console.log('Running on port 3000');
})
