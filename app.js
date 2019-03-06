let express = require('express');

let bodyParser = require('body-parser');

let app = express();

let loveWall = require('./db');

app.use(express.static('public'));//引入静态文件

app.use(bodyParser.json());

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});

app.post('/loveWall', function (req, res) {
    console.log(req.body);
    let blog = req.body;
    loveWall.create(blog, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log(docs);
        }
    })
})

// app.post('/search', function (req, res) {
//     console.log(req.body);
//     let body = req.body;
// })
// loveWall.find(function (err, docs) {
//     if (err) {
//         console.log(err);
//         res.send('oh no');
//     } else {
//         console.log(docs);
//         res.send('oh yes');
//     }
//     res.json(docs);
// })

app.get('/quanbuloveWall', function (req, res) {
    console.log(req.body);//打印前端请求的数据
    let quanbu = req.body;
    loveWall.find(function (err, docs) {//在数据库里查找前端要的数据
        console.log(docs);
        res.json(docs);
    })
})

app.post('/biaobailoveWall', function (req, res) {
    console.log(req.body.kind);
    let biaobai = req.body.kind;
    loveWall.find({ kind: biaobai }, function (err, docs) {
        console.log(docs);
        res.json(docs);
    })
})

app.post('/yijvloveWall', function (req, res) {
    console.log(req.body.kind);
    let yijv = req.body.kind;
    loveWall.find({ kind: yijv }, function (err, docs) {
        console.log(docs);
        res.json(docs);
    })
})

app.post('/tucaoloveWall', function (req, res) {
    console.log(req.body.kind);
    let tucao = req.body.kind;
    loveWall.find({ kind: tucao }, function (err, docs) {
        console.log(docs);
        res.json(docs);
    })
})


app.get('/getloveWall', function (req, res) {
    loveWall.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    })
})


app.post("/delete", function (req, res) {
    console.log(req.body._id);
    let _id = req.body._id;
    loveWall.remove({ _id: _id }, function (err, docs) {
        console.log(docs);
    })
    // res.send('服务器受到数据了');
})



app.post("/phone", function (req, res) {
    console.log(req.body);
    let body = req.body
    loveWall.create(body, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log(docs);
        }
    })
    loveWall.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    })
})



app.listen(3000, function () {
    console.log('服务器正在监听3000端口')
})