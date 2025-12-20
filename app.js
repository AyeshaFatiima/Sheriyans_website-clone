const accordion_containers=document.querySelectorAll(".top");
accordion_containers.forEach((accordion_containers)=>{
accordion_containers.addEventListener("click",function(){
    const data=this.nextElementSibling;//get data
    data.classList.toggle("show");
    const icon=this.querySelector("i");//get icon
    icon.classList.toggle("animate");
})
});