const express = require('express')
var path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// view engine setup




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static('./public'));

app.get('/',function (req, res) {
    res.render('pages/home')
});

app.get('/links', (req, res, next) => {
    const items = [
        {name:'node.js',url:'https://nodejs.org/en/'},{name:'ejs',url:'https://ejs.co'},
        {name:'expressjs',url:'https://expressjs.com'},{name:'vuejs',url:'https://vuejs.org'},{name:'nextjs',url:'https://nextjs.org'}
    ];
    
    res.render('pages/links', {links: items})
});

app.get('/list',(req, res, next) => {
    const items = ['node.js','expressjs','ejs','javascript','bootstarp'];

    res.render('pages/list', {list: items})
});

app.get('/table', (req, res, next) => {
    const items = [
        {name:'node.js',url:'https://nodejs.org/en/'},{name:'ejs',url:'https://ejs.co'},
        {name:'expressjs',url:'https://expressjs.com'},{name:'vuejs',url:'https://vuejs.org'},{name:'nextjs',url:'https://nextjs.org'}
    ];

    res.render('pages/table', {table: items})
});

function messages(req, res, next) {
    var message;
    res.locals.message = message;
    next();
}

app.get('/form',messages, (req, res, next) => {
    res.render('pages/form')
});

app.post('/form', function(req, res, next) {
    var message = req.body;
    res.locals.message = message;

    res.render('pages/form');
})


app.listen(port, () => console.log(`MasterEJS app Started on port ${port}!`));