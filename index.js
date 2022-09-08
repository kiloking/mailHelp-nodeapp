const app = require('./app');

const port = process.env.PORT || 3001;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});


const request = require("request");
const cheerio = require("cheerio");
// function extractEmails ( text ){
//   return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
// }
//https://www.mingjilee.com/tw/about.html


function getEmails(body) {

  // var search_in = document.body.innerHTML;
  string_context = body.toString();
  
  array_mails = string_context.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
  return array_mails;
  
}
const pttCrawler = () => {
    request({
        url: "https://www.chaorui.com.tw/",
        method: "GET"
    }, (error, res, body) => {
        // 如果有錯誤訊息，或沒有 body(內容)，就 return
        if (error || !body) {
            return;
        }

        const data = [];
        const $ = cheerio.load(body); // 載入 body
        console.log( getEmails(body))
        // const list = $(".r-list-container .r-ent");
        // for (let i = 0; i < list.length; i++) {
        //     const title = list.eq(i).find('.title a').text();
        //     const author = list.eq(i).find('.meta .author').text();
        //     const date = list.eq(i).find('.meta .date').text();
        //     const link = list.eq(i).find('.title a').attr('href');

        //     data.push({ title, author, date, link });
        // }

        // console.log(data);
    });
};

pttCrawler();