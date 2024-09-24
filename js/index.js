getId("blog-btn").addEventListener("click", ()=>{
    window.location.href = "./htmlFiles/blog.html";
})

getId("donation-btn").addEventListener("click", ()=>{
    getId("history-btn").classList.remove(
        "bg-green-400",
        "border-green-400",
    )
    getId("donation-btn").classList.add(
        "bg-green-400",
        "border-green-400",
    )
    getId("show-donate").classList.remove("hidden")
    getId("history-main-section").classList.add("hidden")
})   
getId("history-btn").addEventListener("click", ()=>{
    getId("donation-btn").classList.remove(
        "bg-green-400",
        "border-green-400",
    )
    getId("history-btn").classList.add(
        "bg-green-400",
        "border-green-400",
    )
    getId("show-donate").classList.add("hidden","flex")
    getId("history-main-section").classList.remove("hidden")
})

// click and calculate and donation done;
getId("one-btn").onclick = ()=>{
    donateNowMethod("inputOne","oneDonateBalance","oneTitle","modal-one");
}
getId("two-btn").onclick = ()=>{
    donateNowMethod("inputTwo","twoDonateBalance","twoTitle","modal-two");
}
getId("three-btn").onclick = ()=>{
    donateNowMethod("inputThree","threeDonateBalance","threeTitle","modal-three");
}

// modal close button
getId("closeModal-one").addEventListener("click", ()=>{
    closeModal("modal-one");
});
getId("closeModal-two").addEventListener("click", ()=>{
    closeModal("modal-two");
});
getId("closeModal-three").addEventListener("click", ()=>{
    closeModal("modal-three");
});