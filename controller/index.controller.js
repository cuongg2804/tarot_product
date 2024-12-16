
const Card = require("../models/card.models");
const ChatBot = require("../chatbot/index");

module.exports.index =async (req, res) => {

    // const Cards = await Card.aggregate([{ $sample: { size: 3 } }]);

    //-responeSocket(req,res);
    res.render("page/index.pug",{
        pageTitle : "Trang chủ"
    });
}

module.exports.getCard  =async (req, res) => {
    const Cards = await Card.aggregate([{ $sample: { size: 3 } }]);
   
    res.json({
        code : 200,
        card : Cards
    })
}

module.exports.read =async (req, res) => {
    const content_card = req.query.content.split(";");
    const content = content_card[0]; 
    const title_card_1 = content_card[1]; 
    const title_card_2 = content_card[2]; 
    const title_card_3 = content_card[3]; 

    const request = `Tôi muốn xem bài Tarot. Câu hỏi của tôi dành cho bạn là :` + content 
    + `. Và tôi bốc được ba lá ` + title_card_1 +", "+ title_card_2 +", " + title_card_3 + ` Bạn hãy xem cho tôi và đưa ra lời khuyên cụ thể nhé`;


   
    let respone = await  ChatBot.index(req,res,request);
    respone = respone.replace(/\n/g, '<br>');
     res.render("page/read.pug",{
        pageTitle : "Trả bài",
        response : respone
    });
}

module.exports.readPost =async (req, res) => {

    const request = req.body.request;

    let respone = await  ChatBot.index(req,res,request);
    respone = respone.replace(/\n/g, '<br>');
    res.json({ respone });
}

module.exports.create =async (req, res) => {
    res.render("page/cards/create.pug",{
        pageTitle : "Tạo thẻ"
    });
}

module.exports.createPost =async (req, res) => {
    const dataCard = {
        title : req.body.title,
        linkImage : req.body.image
    }

    const newCard = new Card(dataCard);
    await newCard.save();
    res.redirect("back");
}

module.exports.test =async (req, res) => {
    res.render("page/cards/create.pug",{
        pageTitle : "Tạo thẻ"
    });
}