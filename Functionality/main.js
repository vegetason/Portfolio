const skillsContainers=document.querySelectorAll(".skillsContainer")

const skillsButtons=document.querySelectorAll(".skillButton")

skillsButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        btn.style.backgroundColor="rgb(31, 164, 31)";
        skillsContainers.forEach(container=>{
            container.classList.remove("active")
        })
        btn.classList.add("activeButton")
        const target=btn.getAttribute("target");
        const targetContainer=document.getElementById(target);
        targetContainer.classList.remove("hidden")
        targetContainer.classList.add("active")
    })
    skillsButtons.forEach(otherBtn=>{
        if(otherBtn!==btn){
            const target=btn.getAttribute("target");
            const targetContainer=document.getElementById(target);
            otherBtn.classList.remove("activeButton")
            targetContainer.classList.remove("active")
            targetContainer.classList.add("hidden")
            otherBtn.style.backgroundColor="rgb(18, 26, 39)"
            otherBtn.style.color="white"
            otherBtn.style.border = "3px solid rgb(31, 164, 31"
        }
    })
})

//remove the bug