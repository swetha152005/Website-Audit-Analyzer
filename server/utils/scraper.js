const axios = require("axios");
const cheerio = require("cheerio");


async function scrapePage(url){


    const start = Date.now();


    const response = await axios.get(url,{
        timeout:10000,
        headers:{
            "User-Agent":
            "Mozilla/5.0"
        }
    });


    const responseTime = Date.now()-start;


    const contentType = response.headers["content-type"];


    if(!contentType.includes("text/html")){

        throw new Error(
            "URL does not contain HTML content"
        );

    }



    const html=response.data;


    const $=cheerio.load(html);



    const title=$("title").text() || "No title";


    const metaDescription =
    $('meta[name="description"]').attr("content")
    || "No description";



    const h1Count=$("h1").length;



    let imagesWithoutAlt=0;


    $("img").each((index,element)=>{

        const alt=$(element).attr("alt");


        if(!alt){

            imagesWithoutAlt++;

        }

    });



    const text=$("body")
    .text()
    .replace(/\s+/g," ")
    .trim();



    const wordCount=
    text.split(" ").length;



    return {

        url,

        statusCode:response.status,

        responseTime:`${responseTime} ms`,

        title,

        metaDescription,

        h1Count,

        imagesWithoutAlt,

        wordCount

    };

}


module.exports=scrapePage;