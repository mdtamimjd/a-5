getId("home-btn").addEventListener("click", ()=>{
    window.location.href = "../index.html";
})

addHidden("ansOne");
addHidden("ansTwo");
addHidden("ansThree");
addHidden("ansFour");

getId("qusOne").addEventListener("click",()=>{
    addHidden("ansTwo");
    addHidden("ansThree");
    addHidden("ansFour");
    addRotate("arrow-icon-two","arrow-icon-three","arrow-icon-four")
    getId("ansOne").classList.toggle("hidden");
    getId("arrow-icon-one").classList.toggle("rotate-180");
})
getId("qusTwo").addEventListener("click",()=>{
    addHidden("ansOne");
    addHidden("ansThree");
    addHidden("ansFour");
    addRotate("arrow-icon-one","arrow-icon-three","arrow-icon-four")
    getId("ansTwo").classList.toggle("hidden");
    getId("arrow-icon-two").classList.toggle("rotate-180");
})
getId("qusThree").addEventListener("click",()=>{
    addHidden("ansOne");
    addHidden("ansTwo");
    addHidden("ansFour");
    addRotate("arrow-icon-two","arrow-icon-one","arrow-icon-four")
    getId("ansThree").classList.toggle("hidden");
    getId("arrow-icon-three").classList.toggle("rotate-180");
})
getId("qusFour").addEventListener("click",()=>{
    addHidden("ansOne");
    addHidden("ansTwo");
    addHidden("ansThree");
    addRotate("arrow-icon-two","arrow-icon-three","arrow-icon-one")
    getId("ansFour").classList.toggle("hidden");
    getId("arrow-icon-four").classList.toggle("rotate-180");
})