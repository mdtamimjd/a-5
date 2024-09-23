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

function dateNow(id){
    return document.getElementById(id).innerText =  new Date();
}

function convertNumber(id){
    let str = getId(id).innerText;
    return parseFloat(str);
}

function valueNumber(id){
    let str = getId(id).value;
    if(isNaN(str) || parseFloat(str) < 0 || convertNumber("defaultBalance") < parseFloat(str)){
        alert("Please enter a valid amount!");
        getId(id).value = "";
        return false;
    } else{
        return parseFloat(str);
    }
}

// getId("one-btn").addEventListener("click",()=>{
//     let defaultBalance = convertNumber("defaultBalance");
//     let oneValue = valueNumber("inputOne")
//     let output = (defaultBalance - oneValue).toFixed(2);
//     getId("defaultBalance").innerText = output;
//     let donatedMoney = convertNumber("oneDonateBalance")
//     let sum = (donatedMoney + oneValue).toFixed(2);
//     getId("oneDonateBalance").innerText = sum;

// })


function donateNowMethod(inputValuePramitor, alldonatedMoneyPramitor){
    let defaultBalance = convertNumber("defaultBalance");
    let addInputMoneyValue = valueNumber(inputValuePramitor);
    let nextDefaultBalance = (defaultBalance - addInputMoneyValue).toFixed(2);
    getId("defaultBalance").innerText = nextDefaultBalance;
    let donatedMoney = convertNumber(alldonatedMoneyPramitor);
    let addDonatedMoney = (donatedMoney + addInputMoneyValue).toFixed(2);
    getId(alldonatedMoneyPramitor).innerText = addDonatedMoney;
    getId(inputValuePramitor).value = "";
}
