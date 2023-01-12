const btn= document.querySelector(".container");
const line=document.getElementsByClassName("line")
btn.addEventListener('click',()=>{
  line[0].classList.toggle("line1");
  line[2].classList.toggle("line3");
  line[1].classList.toggle("line2");
})