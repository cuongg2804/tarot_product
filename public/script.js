// CLIENT SEND MESSAGE

const btnRead = document.querySelector("button[btnRead]");
const form_send_data = document.querySelector("form[form-send-data] ");
if(form_send_data){
    form_send_data.addEventListener("submit", (event)=>{
        event.preventDefault();
        const cardList = document.querySelector("div[id='cardContainer']");
        const card = cardList.querySelectorAll("[data-title]");

        const titleCard = [];
        card.forEach(item =>{
            const title = item.getAttribute("data-title");
            titleCard.push(title);
        })

        const strtitleCard = titleCard.join("; ");
        
        const input = form_send_data.querySelector("input[name='content']");
        input.value  +=  ";" +strtitleCard;
        console.log(input.value);
          form_send_data.submit(input);
        input.value="";
    })
}


const formSendData = document.querySelector(".chat .inner-form");
console.log(formSendData);
if(formSendData){
    formSendData.addEventListener("submit", async (event)=>{
        event.preventDefault();
        const request = formSendData.content.value;
        
        await fetch('/read', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ request: request }),
          })
          .then(res => res.json())
          .then(data => {
            const res = data.respone;
            const body = document.querySelector(".chat .inner-body");
            if (body.children.length > 0) {
                const divReq = document.createElement("div");
                divReq.classList.add("inner-outgoing");
                divReq.innerHTML = `<div class="inner-content">${request}</div>`;
        
                body.appendChild(divReq);
            } 


            const divRes = document.createElement("div");
            divRes.classList.add("inner-incoming");
            divRes.innerHTML = `<div class="inner-content">${res}</div>`;
            body.appendChild(divRes);
            
          });
        formSendData.content.value = "";
          
    })
}
//END CLIENT SEND MESSAGE
const cardContainer = document.getElementById('cardContainer');
const buttonDraw = document.querySelector("button[btndraw]");
if(buttonDraw){
buttonDraw.addEventListener("click", () => {
    cardContainer.innerHTML = "";
    fetch("/getCard").
    then(res => res.json())
    .then(data => {
        data.card.forEach(card => {
            const divCard = document.createElement("div");
            divCard.className = `col-sm-4 mb-3 card tarot-card` ;
            divCard.setAttribute('data-title', card.title);
        
            // Gán innerHTML cho divCard
            divCard.innerHTML = `
              
                <img src="${card.linkImage}" class="card-img-top" alt="Tarot Card">
                <div class="card-body">
                  <h5 class="card-title" >${card.title}</h5>
                </div>
              
            `;
        
            // Thêm divCard vào cardContainer
            cardContainer.append(divCard);
            return;
          });
          
            
    })
});   }  



//; // Tự động cuộn xuống cuối khi có tin nhắn mới

//Upload Imange 
const uploadImage = document.querySelector("[upload-image]");
if(uploadImage) {
    const uploadImage_input = uploadImage.querySelector("[upload-image-input]");
   
    const img =  uploadImage.querySelector("[upload-image-preview]");

    uploadImage_input.addEventListener("change", () => {
        const file = uploadImage_input.files[0] ;
        if(file){
            img.src = URL.createObjectURL(file);
        }
    })
}


   






