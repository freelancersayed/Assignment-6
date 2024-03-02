
const loadDiscussData = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json();
    const discussCard = data.posts
    // console.log(discussCard);
    postsData(discussCard);
}


loadDiscussData()

const postsData = (discussCard) => {
    console.log(discussCard);
    const activCard =document.getElementById('activ-card');
    const letsDiscusCard =document.getElementById('lets-Discuss-Card');

    letsDiscusCard.innerText= ''

    discussCard.forEach(card =>{
        // console.log(card);

        const createDiv = document.createElement('div');
        
        createDiv.innerHTML =`
        <div id="lets-Discuss-Card" class="flex-1 mb-6 rounded-3xl bg-gray-600 p-8 ">
        <div class="lg:flex gap-4">
           <div class="w-20 mx-auto ">
           <div id="active-card" class=" w-3 h-3 rounded-full absolute">${card.isActive}</div>
            <img class="rounded-lg" src="${card.image}" alt="">
           </div>
           <div class="flex-1">
            <div class="lg:flex gap-5"> 
                <p>${card.category}</p>
                <p id="">Author: <span>${card.author.name}</span></p>
            </div>
           <div class="mb-4">
            <h1 class="text-white font-bold text-2xl">${card.title}</h1>
            <p >${card.description}</p>
           </div>
           <hr class="border-dashed">
            <div class="mt-4 flex justify-between">
            <div>
                <i class="fa-regular fa-message"><span class="mx-2">${card.comment_count}</span></i>
                <i class="fa-regular fa-eye"><span class="mx-2">${card.view_count}</span></i>
                <i class="fa-regular fa-clock"><span class="mx-2">${card.posted_time} <span class="font-mono">min</span></span></i>
            </div>
            <div class="">
                <button onclick="mailButton()"><i class="fa-solid fa-envelope text-red-600 bg-orange-100 p-2 rounded-full"></i></button>
            </div>
            </div>
           </div>
        </div>
    </div>
   </div>
        `;
        letsDiscusCard.appendChild(createDiv)

    })
   
};



function mailButton(){
    
}