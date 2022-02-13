
function allPriceCalculation(productQuantityId,productPriceId,perProductPrice,addOrLess) {
    const quantityId = document.getElementById(productQuantityId);
    let quantity = parseInt(quantityId.value);
    if(addOrLess) {
        quantity = quantity + 1;
        quantityId.value = quantity;
    }else if(quantity > 0) {
        quantity = quantity - 1;
        quantityId.value = quantity;
    }
    // product price calculation
    const productPrice = document.getElementById(productPriceId);
    productPrice.classList.add("moneyId");
    productPrice.innerText = quantity * perProductPrice;
    totalCalculation();
}
totalCalculation();
// final calculation 
function totalCalculation() {
    const totalMoney = document.getElementsByClassName("moneyId");
    let sum = 0;
    for(let i of totalMoney) {
        sum = sum + parseFloat(i.innerText);
    }
    let tax = sum *.15;
    tax= parseFloat(tax.toFixed(2));
    const totalSum = sum + tax;
    document.getElementById("sub-total").innerText = sum;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = totalSum;
}

// event create increase btn
const phonePlus = document.getElementById("phone-plus");
phonePlus.addEventListener("click", function() {
    allPriceCalculation("phone-number","phone-total",1219,true);
});
const casePlus = document.getElementById("case-plus");
casePlus.addEventListener("click", function() {
    allPriceCalculation("case-number","case-total",59,true);
});
// event create decrease btn
const phoneMinus = document.getElementById("phone-minus");
phoneMinus.addEventListener("click", function() {
    allPriceCalculation("phone-number","phone-total",1219,false);
});
const caseMinus = document.getElementById("case-minus");
caseMinus.addEventListener("click", function() {
    allPriceCalculation("case-number","case-total",59,false);
});


