let img=document.querySelectorAll(".img")
let body=document.querySelector("body")
let cont=document.getElementById("parent")
let butt=document.getElementById("button")
let mood="white"
butt.addEventListener('click',()=>{
    if(mood==="white"){
        body.classList.add("container_dar")
        butt.innerText="🌞"
        butt.style.background="white"
    img.forEach((img)=>{
        img.classList="img-dark"
    })
    mood="dark"
    }
    else{
        mood="white"
        butt.innerText="🌛"
        butt.style.background="rgba(0, 0, 0, 0.74)"
        body.classList.remove("container_dar")
        cont.removeAttribute("class","container-dar")
        img.forEach((img)=>{
            img.classList="img"
        })
    }
}) 