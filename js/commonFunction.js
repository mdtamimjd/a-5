function getId(id){
    return document.getElementById(id);
}

function addHidden(id){
    document.getElementById(id).classList.add('hidden');
    return;
}

function addRotate(one,two,three){
    document.getElementById(one).classList.remove('rotate-180');
    document.getElementById(two).classList.remove('rotate-180');
    document.getElementById(three).classList.remove('rotate-180');
    return;
}

function convertNumber(id){
    let str = getId(id).innerText;
    return parseFloat(str);
}

function valueNumber(id){
    let str = getId(id).value;
    if(isNaN(str) || parseFloat(str) < 0 || convertNumber("defaultBalance") < parseFloat(str) || str.length < 1){
        alert("Please enter a valid amount!");
        return getId(id).value = "";
    } else{
        return parseFloat(str);
    }
}

function donateNowMethod(inputValuePramitor, alldonatedMoneyPramitor, title,modal){
    let defaultBalance = convertNumber("defaultBalance");
    let addInputMoneyValue = valueNumber(inputValuePramitor);
    let nextDefaultBalance = (defaultBalance - addInputMoneyValue).toFixed(2);
    getId("defaultBalance").innerText = nextDefaultBalance;
    let donatedMoney = convertNumber(alldonatedMoneyPramitor);
    let addDonatedMoney = (donatedMoney + addInputMoneyValue).toFixed(2);
    getId(alldonatedMoneyPramitor).innerText = addDonatedMoney;
    getId(inputValuePramitor).value = "";
    let dateNow = new Date();
    let titleName = getId(title).innerText;
    let changeTitleNameForHistory = titleName.replace("Donate for","")
    // create history data
    let div = document.createElement("div");
    div.classList.add(
        "bg-white",
        "rounded-lg",
        "p-5",
        "md:h-24",
        "h-auto",
        "flex",
        "flex-col",
        "justify-between",
        "border-2",
        "border-gray-300"
    );
    div.innerHTML = `
    <h2 class="font-semibold text-xl">${addInputMoneyValue} Taka is donated for ${changeTitleNameForHistory}</h2>
    <p class="text-zinc-500 font-medium">Date: ${dateNow}</p>
    `;
    // getId("show-history").appendChild(div);
    let show_div = getId("show-history")
    show_div.insertBefore(div,show_div.childNodes[0])

    // modal 
    getId(modal).classList.remove("hidden");
    getId(modal).classList.add("flex");
}

function closeModal(modal){
    getId(modal).classList.add("hidden");
    getId(modal).classList.remove("flex");

}
