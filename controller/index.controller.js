const responeSocket = require("../socket.io/socket");
const Card = require("../models/card.models");

module.exports.index =async (req, res) => {

    const Cards = await Card.aggregate([{ $sample: { size: 3 } }]);


    responeSocket(req,res);
    res.render("page/index.pug",{
        pageTitle : "Trang chủ",
        Cards  : Cards 
    });
}

module.exports.read =async (req, res) => {
    const content_card = req.body.content.split(";");
    const content = content_card[0]; 
    const title_card_1 = content_card[1]; 
    const title_card_2 = content_card[2]; 
    const title_card_3 = content_card[3]; 


    const prompt = `Tôi muốn xem bài Tarot. Câu hỏi của tôi dành cho bạn là :` + content 
        + `. Và tôi bốc được ba lá ` + title_card_1 +", "+ title_card_2 +", " + title_card_3 + ` Bạn hãy xem cho tôi và đưa ra lời khuyên cụ thể nhé`;
    responeSocket(req,res);
 
    res.render("page/read.pug",{
        pageTitle : "Trả bài",
        prompt : prompt
    });
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