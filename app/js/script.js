import data from './data.js';

//on window load
window.onload = function () {
    data.forEach(function (item, index) {
        if (index % 3 === 0) {
            const div = document.createElement('div');
            div.classList.add('stack');
            container.appendChild(div);
        }
        // add all cards to innerHTML
        row[row.length - 1].innerHTML += `
    
      <a class="card">
        <img loading="lazy" src="${item.image}" alt="Avatar">
        <div class="container">
          <h4><b>${item.name}</b></h4>
          <p>${item.text}</p>
        </div>
      </a>
    
    `;
    });

    // if card is clicked, move it to the first of its stack
    document.querySelectorAll('.card').forEach(function (card) {
        card.addEventListener('click', function () {
            const stack = card.parentNode;
            stack.prepend(card);
        });
    });
};

const row = document.getElementsByClassName('stack');
const container = document.getElementById('container__stacks');

document.getElementById('copy').addEventListener('click', copyFirstCard);
document.getElementById('remove').addEventListener('click', removeLastCard);

// removes last card with remove button
function removeLastCard() {
    if (row.length > 0) {
        const card = row[row.length - 1].getElementsByClassName('card');
        if (card.length > 1) {
            card[card.length - 1].remove();
        } else {
            row[row.length - 1].remove();
        }
    }
}

// copies first card and adds it to the end of the stack list
function copyFirstCard() {
    const firstCard = document.querySelector('.card');
    if (!firstCard) {
        // adds card if no cards to innerHTML
        const div = document.createElement('div');
        div.classList.add('stack');
        container.appendChild(div);
        row[row.length - 1].innerHTML += `
        
         <a class="card">
           <img loading="lazy" src="${data[0].image}" alt="Avatar">
           <div class="container">
             <h4><b>${data[0].name}</b></h4>
             <p>${data[0].text}</p>
           </div>
         </a>
       
       `;
    }

    const lastStack = row[row.length - 1];
    const lastStackCard = lastStack.getElementsByClassName('card');
    if (lastStackCard.length < 3) {
        lastStack.appendChild(firstCard.cloneNode(true));
    } else {
        const newStack = document.createElement('div');
        newStack.classList.add('stack');
        newStack.appendChild(firstCard.cloneNode(true));
        container.appendChild(newStack);
    }
    updateScroll();
}

function updateScroll() {
    let currentStack = document.getElementsByClassName('stack');
    currentStack[currentStack.length - 1].scrollIntoView();
}
