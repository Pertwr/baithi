const express = require('express')
const expressHandlebars = require('express-handleabrs').engine;
const app = express()
app.engine('handlebars', expressHandlebars({
    defaultLayout:'main'
}))
app.set('view engine', 'hadlebars')
app.use(express.static(__dirname + '/public'))
const port = process.env.PPORT || 3000
app.get('/',(req, res)=> res.render('home'))
app.get('/about',(req, res)=> res.render('about'))
app.use((req, res)=>{
    res.status(404)
    res.render('404')
})
app.use((err, req, res, next)=>{
    console.error(err.massage)
    res.status('500')
})
app.listen(port, () => console.log(
    `Express started on http://localhost:${post};`+
        `Press Ctrl-C to terminate`
))