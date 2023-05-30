let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const toyCollection = document.getElementById('toy-collection')
  fetch("http://localhost:3000/toys")
    .then((r) => r.json())
    .then((toysObj) => {
    //  console.log(toysObj)
      for(let i = 0; i < toysObj.length; i++) {
        let {image, likes, name} = toysObj[i]
       // console.log(image, likes, name)
        let toy = document.createElement('div')
        toy.className = 'card'
        let toyImage = document.createElement('img')
        toyImage.src = 'http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png'
        
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


