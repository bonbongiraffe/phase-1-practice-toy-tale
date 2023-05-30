let addToy = false;
let toyLikes = [];

document.addEventListener("DOMContentLoaded", () => {
  const toyCollection = document.getElementById('toy-collection')
  function displayToy(toy){
    let {id, image, likes, name} = toy
    toyLikes[id] = likes

    //create toy card
    let toyCard = document.createElement('div')
    toyCard.className = 'card'
    
    //toy name
    let toyName = document.createElement('h2')
    toyName.textContent = name
            
    //toy image
    let toyImage = document.createElement('img')
    toyImage.className = 'toy-avatar'
    toyImage.src = image

    //like counter
    let likeCounter = document.createElement('p')
    likeCounter.textContent = `${toyLikes[id]} likes`

    //like button
    let likeBtn = document.createElement('button')
    likeBtn.className = 'like-btn'
    likeBtn.textContent = 'like'
    likeBtn.id = id
        //likeBtn.type = 'button'
        likeBtn.addEventListener('click', (e) => {
          toyLikes[id]++
          likeCounter.textContent = `${toyLikes[id]} likes`
        })
    
    //append elements
    toyCard.appendChild(toyName)
    toyCard.appendChild(toyImage)
    toyCard.appendChild(likeCounter)
    toyCard.appendChild(likeBtn)
    toyCollection.appendChild(toyCard)

    return;
  }

  fetch("http://localhost:3000/toys")
    .then((r) => r.json())
    .then((toysObj) => {
      //console.log(toysObj)
      for(let i = 0; i < toysObj.length; i++) {
        displayToy(toysObj[i])
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

  //add button functionality
  const toyForm = document.getElementsByClassName('add-toy-form')
  console.log(toyForm)
  toyForm.addEventListener('submit',(e) => {
    e.preventDefault()
    console.log(e)
  })
});


