// Memory price calculation 

function memoryFunction(gb) {
    if (gb == 8) {
        document.getElementById('selectMemory').innerText = 0;
        totalPrice()
    }
    if (gb == 16) {
        document.getElementById('selectMemory').innerText = parseInt(180);
        totalPrice()
    }
}


// Storage price calculation 

function storageFunction(gb) {
    if (gb == 256) {
        document.getElementById('selectStorage').innerText = 0;
        totalPrice()
    }
    if (gb == 512) {
        document.getElementById('selectStorage').innerText = 100;
        totalPrice()
    }
    if (gb == "tb") {
        document.getElementById('selectStorage').innerText = 180;
        totalPrice()
    }
}



// Delivery price calculation 

function deliveryFunction(process) {
    if (process == "free") {
        document.getElementById("delivery").innerText = 0;
        totalPrice()
    }
    if (process == "paid") {
        document.getElementById("delivery").innerText = 20;
        totalPrice()
    }
}


// Total price calculation 

function totalPrice() {
    const totalBestPrice = document.getElementById('bestPrice').innerText;
    const totalBestPriceNumber = parseFloat(totalBestPrice);

    const selectMemoryPrice = document.getElementById("selectMemory").innerText;
    const selectMemoryPriceNumber = parseFloat(selectMemoryPrice);

    const selectStoragePrice = document.getElementById("selectStorage").innerText;
    const selectStoragePriceNumber = parseFloat(selectStoragePrice);

    const totalDeliverPrice = document.getElementById("delivery").innerText;
    const totalDeliveryPriceNumber = parseFloat(totalDeliverPrice);


    const iMacPrice = parseInt(selectMemoryPriceNumber + selectStoragePriceNumber + totalDeliveryPriceNumber + totalBestPriceNumber);

    document.getElementById('total-cost').innerText = iMacPrice;
    document.getElementById('final').innerText = iMacPrice;

}

// Default price calculation 

document.getElementById('total-cost').innerText = 1299;


// promo code calculation


document.getElementById("apply").addEventListener('click', function () {
    const promoCode = document.getElementById('promo').value;

    if (promoCode == "stevekaku") {
        const totalMoney = document.getElementById('total-cost').innerText;
        var discount = totalMoney * 0.2;
        const BeforePromo = document.getElementById('final').innerText;
        const beforePromoNumber = parseInt(BeforePromo);
        ;
        document.getElementById('final').innerText = beforePromoNumber - discount;
        promo.value = '';
    }
    else alert(" Your Promo Code is invalid")

})


