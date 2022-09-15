console.log('js working');

//on window load
window.onload = function () {
    console.log('on load working');
    // creates 3 cards for every stack
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
}

const data = [
    {
        id: 1,
        name: 'Cosmos',
        text: 'Lorem ipsum dolor sit amet.',
        image: 'https://images.unsplash.com/photo-1604934797110-7c506bea3b3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1445&q=80',
    },
    {
        id: 2,
        name: 'Oliver',
        text: 'Sed explicabo odio eum voluptatum voluptatem quo obcaecati cumque est ',
        image: 'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
        id: 3,
        name: 'Leo',
        text: 'Lorem ipsum dolor sit amet. Id eligendi nihil quo similique.',
        image: 'https://images.unsplash.com/photo-1608643072426-a34159d0a762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    },
    {
        id: 4,
        name: 'Loki',
        text: 'Lorem ipsum dolor sit amet. Accusamus nobis At nisi reiciendis et animi internos.',
        image: 'https://images.unsplash.com/photo-1608643072426-a34159d0a762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    },
    {
        id: 5,
        name: 'Bella',
        text: 'Lorem ipsum dolor sit amet.',
        image: 'https://images.unsplash.com/photo-1608643072426-a34159d0a762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    },
    {
        id: 6,
        name: 'Charlie',
        text: 'Est architecto aspernatur ut enim distinctio non atque quasi.',
        image: 'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 7,
        name: 'Willow',
        text: 'Sed reprehenderit repudiandae et maxime molestias vel iusto autem sed distinctio dignissimos.',
        image: 'https://images.unsplash.com/photo-1608643072426-a34159d0a762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    },
    {
        id: 8,
        name: 'Lucy',
        text: 'Et eveniet autem cum itaque tempore id inventore omnis et similique nulla!',
        image: 'https://images.unsplash.com/photo-1608643072426-a34159d0a762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    },
    {
        id: 9,
        name: 'Simba',
        text: 'Et nostrum delectus et repudiandae excepturi sit iste reprehenderit sit voluptatem corrupti',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 10,
        name: 'Luna',
        text: 'Rem quia veniam sit assumenda autem id numquam internos aut atque nihil.',
        image: 'https://images.unsplash.com/photo-1608643072426-a34159d0a762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    },
    {
        id: 11,
        name: 'Bella',
        text: 'Lorem ipsum dolor sit amet. In modi expedita ad exercitationem galisum qui vero numquam.',
        image: 'https://images.unsplash.com/photo-1608643072426-a34159d0a762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    },
    {
        id: 12,
        name: 'Tom',
        text: 'Ea rerum ipsam vel magnam omnis vel necessitatibus totam.',
        image: 'https://images.unsplash.com/photo-1526674183561-4bfb419ab4e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 13,
        name: 'Katie',
        text: 'Debitis eligendi sed mollitia quia sit voluptatem similique sit neque porro.',
        image: 'https://images.unsplash.com/photo-1608643072426-a34159d0a762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    },
    {
        id: 14,
        name: 'Biden',
        text: 'Sed libero unde quo modi adipisci ut odit explicabo!',
        image: 'https://images.unsplash.com/photo-1608643072426-a34159d0a762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    },
    {
        id: 15,
        name: 'Max',
        text: 'Lorem ipsum dolor sit amet.',
        image: 'https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: 16,
        name: 'Jasper',
        text: 'Rerum in numquam ratione quo incidunt culpa rem ipsa eaque in quod facere.',
        image: 'https://images.unsplash.com/photo-1608643072426-a34159d0a762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    },
    {
        id: 17,
        name: 'Atlas',
        text: 'Et illo cumque qui tempora nihil et rerum nemo.',
        image: 'https://images.unsplash.com/photo-1608643072426-a34159d0a762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    },
    {
        id: 18,
        name: 'Stella',
        text: 'Sit quae explicabo ea Quis impedit sit ipsam totam!',
        image: 'https://images.unsplash.com/photo-1593627035153-0a615214e282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: 19,
        name: 'Chloe',
        text: 'Rerum in numquam ratione quo incidunt culpa rem ipsa eaque in quod facere.',
        image: 'https://images.unsplash.com/photo-1608643072426-a34159d0a762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    },
    {
        id: 20,
        name: 'Leonardo',
        text: 'Et illo cumque qui tempora nihil et rerum nemo.',
        image: 'https://images.unsplash.com/photo-1524642603405-a7c76bcde7eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: 21,
        name: 'Kia',
        text: 'Sit quae explicabo ea Quis impedit sit ipsam totam!',
        image: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
];
