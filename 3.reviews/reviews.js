const reviews =[
  {
    id: 1,
    img:'http://127.0.0.1:5500/3.reviews/images/user2.jpg',
    name: "jack blake",
    job: "UX/UI",
    info:" perferendis laboriosam, ex culpa quaerat alias. Similique quisquam, earum unde eius dolore harum!",
  },
  {
   id: 2,
    img:'http://127.0.0.1:5500/3.reviews/images/user3.jpg',
    name: "John Smith",
    job: "Web Designer",
    info:" Amet, odit nesciunt tenetur ipsum quas, perferendis laboriosam, ex culpa quaerat alias. Similique quisquam, earum unde eius dolore harum!",
  },
    {
   id: 3,
    img:'http://127.0.0.1:5500/3.reviews/images/tm2.jpg',
    name: "Anna Johnson",
    job: "Marketing",
    info:"ipsum quas, perferendis laboriosam, ex culpa quaerat alias. Similique quisquam, earum unde eius dolore harum!, earum unde eius dolore harum!",
  },
      {
   id: 4,
    img:'http://127.0.0.1:5500/3.reviews/images/user1.jpg',
    name: "Sarah Smith",
    job: "Web Developer",
    info:"earum unde eius dolore harum!ipsum quas, perferendis laboriosam, ex culpa quaerat alia",
  },
]

const img = document.querySelector('.card__img');
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const comment = document.querySelector('.comment');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  showPerson();
})

function showPerson() {
    img.src = reviews[currentItem].img;
    author.textContent = reviews[currentItem].name;
    job.textContent = reviews[currentItem].job;
    comment.textContent= reviews[currentItem].info;
}

nextBtn.addEventListener('click', ()=>{
  currentItem++;
  if (currentItem > reviews.length-1){
    currentItem = 0;
  }
  showPerson();
});


prevBtn.addEventListener('click', ()=>{
  currentItem--;
  if (currentItem < 0){
    currentItem = reviews.length-1;
  }
  showPerson();
});


randomBtn.addEventListener('click', ()=> {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
})