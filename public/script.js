const divMessage = document.querySelector("div[prompt]");
if(divMessage){
    const firstRequest = divMessage.getAttribute("prompt");
    socket.emit("CLIENT_SEND_MESSAGE",firstRequest );
}


//CLIENT SEND MESSAGE
const formSendData = document.querySelector(".chat .inner-form");;
if(formSendData){
    formSendData.addEventListener("submit", (event)=>{
        event.preventDefault();
        const request = formSendData.content.value;
        formSendData.content.value = "";
        socket.emit("CLIENT_SEND_MESSAGE",request );
    })
}
//END CLIENT SEND MESSAGE
const body = document.querySelector(".chat .inner-body");
socket.on("SERVER_RETURN_REQ", (req) => {
    if (body.children.length > 0) {
        const divReq = document.createElement("div");
        divReq.classList.add("inner-outgoing");
        divReq.innerHTML = `<div class="inner-content">${req}<div>`;

        body.appendChild(divReq);
    } 
    
    
   
})

socket.on("SERVER_RETURN_RES", (res) => {
    const divRes = document.createElement("div");
    divRes.classList.add("inner-incoming");
    divRes.innerHTML = `<div class="inner-content"">${res}<div>`;
    body.appendChild(divRes);

})




const chatBody = document.querySelector('.inner-body');

//chatBody.scrollTop = chatBody.scrollHeight; // Tự động cuộn xuống cuối khi có tin nhắn mới

//Upload Imange 
const uploadImage = document.querySelector("[upload-image]");
if(uploadImage) {
    const uploadImage_input = uploadImage.querySelector("[upload-image-input]");
    console.log(uploadImage_input);
    const img =  uploadImage.querySelector("[upload-image-preview]");
   console.log(img);
    uploadImage_input.addEventListener("change", () => {
        const file = uploadImage_input.files[0] ;
        if(file){
            img.src = URL.createObjectURL(file);
        }
    })
}

const Cards = document.querySelector("div[cards]");

if(Cards){
    const cardContainer = document.getElementById('cardContainer');
    const buttonDraw = document.querySelector("button[btndraw]");
    const dataCard = Cards.getAttribute("cards");
    const tarotCards = JSON.parse(dataCard);

    buttonDraw.addEventListener("click", () => {
        tarotCards.forEach(card => {
          const divCard = document.createElement("div");
          divCard.className = 'col-sm-4 mb-3';
      
          // Gán innerHTML cho divCard
          divCard.innerHTML = `
            <div class="card tarot-card" tabindex="0">
              <img src="${card.linkImage}" class="card-img-top" alt="Tarot Card">
              <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
              </div>
            </div>
          `;
      
          // Thêm divCard vào cardContainer
          cardContainer.append(divCard);
          return;
        });
      });      
}


const btnRead = document.querySelector("button[btnRead]");
const form_send_data = document.querySelector("form[form-send-data] ");

if(form_send_data){
    form_send_data.addEventListener("submit", (event)=>{
        event.preventDefault();
        const dataCard = Cards.getAttribute("cards");
        const tarotCards = JSON.parse(dataCard);

        const titleCard = [];
        tarotCards.forEach(card =>{
            titleCard.push(card.title)
        })

        const strtitleCard = titleCard.join("; ");
        
        const input = form_send_data.querySelector("input[name='content']");
        input.value  +=  ";" +strtitleCard;

         form_send_data.submit();
         input.value="";
    })
}