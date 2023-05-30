let addToy = false;
let toyLikes = []
document.addEventListener("DOMContentLoaded", () => {
  const toyCollection = document.getElementById('toy-collection')
  fetch("http://localhost:3000/toys")
    .then((r) => r.json())
    .then((toysObj) => {
      //console.log(toysObj)
      for(let i = 0; i < toysObj.length; i++) {
        //extract toy data from api
        let {id, image, likes, name} = toysObj[i]
        toyLikes[id] = likes

        //create toy card
        let toy = document.createElement('div')
        toy.textContent = name
        toy.className = 'card'

        //add toy image
        let toyImage = document.createElement('img')
        toyImage.className = 'toy-avatar'
        toyImage.src = image

        //create like button
        let likeBtn = document.createElement('button')
        let likeCounter = document.createElement('div')
        

        likeCounter.textContent = `${toyLikes[id]} likes`
        likeBtn.textContent = 'like'
        likeBtn.id = id
        //likeBtn.type = 'button'
        likeBtn.addEventListener('click', (e) => {
          toyLikes[id]++
          likeCounter.textContent = `${toyLikes[id]} likes`
        
        })
        
        //append elements
        toy.appendChild(toyImage)
        toy.appendChild(likeCounter)
        toy.appendChild(likeBtn)
        toyCollection.appendChild(toy)
      }
    })
    
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


