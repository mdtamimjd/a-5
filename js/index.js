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
    getId("show-donate").classList.add("hidden")
    getId("show-history").classList.remove("hidden")
})


// getId("one-btn").addEventListener("click",()=>{
//     let defaultBalance = convertNumber("defaultBalance");
//     let oneValue = valueNumber("inputOne")
//     console.log(oneValue)
//     let output = (defaultBalance - oneValue).toFixed(2);
//     getId("defaultBalance").innerText = output;
//     let donatedMoney = convertNumber("oneDonateBalance")
//     let sum = (donatedMoney + oneValue).toFixed(2);
//     getId("oneDonateBalance").innerText = sum;

// })
// click and calculate and donation done;
getId("one-btn").onclick = ()=>{
    donateNowMethod("inputOne","oneDonateBalance");
}
getId("two-btn").onclick = ()=>{
    donateNowMethod("inputTwo","twoDonateBalance");
}
getId("three-btn").onclick = ()=>{
    donateNowMethod("inputThree","threeDonateBalance");
}