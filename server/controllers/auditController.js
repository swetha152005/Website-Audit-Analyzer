const scrapePage = require("../utils/scraper");
const validateURL = require("../utils/validator");


const analyzePage = async(req,res)=>{

    try{

        const {url}=req.body;


        if(!url){
            return res.status(400).json({
                error:"URL is required"
            });
        }


        if(!validateURL(url)){
            return res.status(400).json({
                error:"Invalid URL format"
            });
        }


        const result = await scrapePage(url);


        res.status(200).json(result);


    }
    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};


module.exports={
    analyzePage
};