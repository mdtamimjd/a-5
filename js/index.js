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
    getId("show-history").classList.add("hidden")
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
    getId("show-history").classList.remove("hidden")
})

// click and calculate and donation done;
getId("one-btn").onclick = ()=>{
    donateNowMethod("inputOne","oneDonateBalance","oneTitle");
}
getId("two-btn").onclick = ()=>{
    donateNowMethod("inputTwo","twoDonateBalance","twoTitle");
}
getId("three-btn").onclick = ()=>{
    donateNowMethod("inputThree","threeDonateBalance","threeTitle");
}