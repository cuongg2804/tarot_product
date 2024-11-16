const {GoogleGenerativeAI} = require("@google/generative-ai");

const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};


module.exports =  async (req,res) => {
    _io.once('connection', (socket) => {
      
        socket.on("CLIENT_SEND_MESSAGE", async (resquest) => {

            const objectRespone = await model.generateContent(resquest);

            const respone = (objectRespone.response.text()|| "").replace(/\n/g, '<br>');
            

            socket.emit("SERVER_RETURN_REQ", resquest);
            socket.emit("SERVER_RETURN_RES", respone);
        })
    })
}