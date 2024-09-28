const cardImages = [
    "https://images.unsplash.com/photo-1635705163854-c7617d78f50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGFyb3R8fHx8fHwxNjg2ODI0NDYw&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1632518192331-a0a49c3c8f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGFyb3R8fHx8fHwxNjg2ODI0NDYx&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1662742396791-b89bcdb2b1b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGFyb3R8fHx8fHwxNjg2ODI0NDYy&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1590593162201-f67611a18b87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    "https://images.unsplash.com/photo-1601000785686-c45240e25f25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    "https://images.unsplash.com/photo-1634469875582-a0798abbfb23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
];

const shuffleDrawBtn = document.getElementById('shuffleDrawBtn');
const cardContainer = document.getElementById('cardContainer');

shuffleDrawBtn.addEventListener('click', () => {
    // Clear previous cards
    cardContainer.innerHTML = '';

    // Shuffle and pick 3 random cards
    const shuffled = cardImages.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    // Create and append new cards
    selected.forEach((image, index) => {
        const card = document.createElement('div');
        card.className = 'col-sm-4 mb-3';
        card.innerHTML = `
            <div class="card tarot-card" tabindex="0">
                <img src="${image}" class="card-img-top" alt="Tarot Card ${index + 1}">
                <div class="card-body">
                    <h5 class="card-title">Card ${index + 1}</h5>
                </div>
            </div>
        `;
        cardContainer.appendChild(card);
    });
});