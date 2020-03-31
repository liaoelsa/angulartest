var express = require('express')

var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.all('*', function(req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
        res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
        res.setHeader("X-Powered-By",' 3.2.1')
        if(req.method == "OPTIONS") res.send(200)
        else next();
})

app.get('/', function(req, res) {
        res.send('首页')
})

app.post('/dologin',function(req, res) {
        console.log(req.body)
        res.json({"msg": "post 成功"})
})

app.get('/news', function(req, res) {
        console.log("get news")
        res.json({"msg": "这是新闻数据"})
})

app.listen(3000,'127.0.0.1')