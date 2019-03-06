const axios = require('axios');

const cheerio = require ('cheerio');

axios({
    url:'http://m.kugou.com/rank/info/6666'
}).then(function(res){
    // console.log(res.data);
    $ = cheerio.load(res.data);
    // let songlist = $ ('.panel-songs-item-name').text();
    $('.panel-songs-item-name').each((index,element) => {
           console.log(index + '.' + $(element).text().trim())
    })
    // console.log(songlist);

})