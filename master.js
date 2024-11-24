let slideNumber = document.querySelector(".slide-number");

let current = 1;

let images = Array.from(document.images);



let indicator = document.querySelector(".indicator")

let list = document.createElement("ul");


    for(let i = 1; i<= images.length; i++){
let num = document.createElement("li")
num.innerHTML = i;
num.setAttribute("index", i)
list.appendChild(num)
    };

indicator.appendChild(list);


let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
let bullets = Array.from(document.querySelectorAll("ul li"));

prevButton.onclick = prev;
nextButton.onclick = next;


bullets.forEach((bullet)=>{
   bullet.addEventListener("click", ()=>{
    current = parseInt(bullet.getAttribute("index"))
    check();
   })
})


check();

function prev(){
if(current === 1){
prevButton.classList.add("disabled")
}else{
    current--
    prevButton.classList.remove("disabled")
    check();
}
  }


function next(){
    if(current === images.length){
        nextButton.classList.add("disabled")
          }else{
            current++
            nextButton.classList.remove("disabled")
            check();
          }
    }


    function check(){
        slideNumber.innerHTML = `#slide ${current} of ${images.length}`
        removeAll();
        images[current-1].classList.add("active");
        list.children[current-1].classList.add("active")
        if(current === 1){
            prevButton.classList.add("disabled")
              }else{
                prevButton.classList.remove("disabled") 
              }
              if(current === images.length){
                nextButton.classList.add("disabled")
                  }else{
                    nextButton.classList.remove("disabled") 
                  }
        }
        
       


function removeAll(){
    images.forEach((img)=>{
        img.classList.remove("active")
    });
    bullets.forEach((bullet)=>{
        bullet.classList.remove("active")
    });
}
