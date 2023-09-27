window.onload = 
function (){

    let images = [
        'url(./img/import-img1.jpg)',
        'url(./img/import-img2.jpg)',
        'url(./img/import-img3.jpg)'
    ]

    let target = document.querySelector('#slide');
    let right = document.querySelector('#right');
    let left = document.querySelector('#left');

    // 画像カウンター表示
    let count = 0;

    function change(){
        target.style.backgroundImage = images[count];
        if( count == 2){
            count = 0;
        } else {
            count++;
        } 
    }

    function goNext() {
        event.preventDefault();
        change();
    }

    function goBack() {
        event.preventDefault();
        if( count == 0){
            count = 2;
        } else {
            count--;
        } change();
    }

    right.addEventListener( 'click', goNext, false);
    left.addEventListener( 'click', goBack, false);


setInterval(change, 3000);

};

// 計算シュミレーションapp

let button = document.getElementById("button");
button.onclick = clickBtn1;

function clickBtn1(){

    const place = document.form1.place;
    const box = document.form2.box;
    const price = document.getElementById('price');

    // 値(数値)を取得
    const num = place.selectedIndex;
    const boxnum = box.selectedIndex;
    
    // 値(数値)から値(value値)を取得
    const region = place.options[num].value;
    const boxPrice = box.options[boxnum].value;
    const plantsPriceString = price.value;
    const plantsPrice = parseInt(plantsPriceString, 10); // plantsPriceStringを数値に変換
    const boxPriceValue = parseInt(boxPrice, 10); // plantsPriceStringを数値に変換

    const phyto = 10000;
    let argent = plantsPrice * 0.2;
    let sendingMoneyNum = (plantsPrice + boxPriceValue) * 0.0073;
    let sendingMoney = Math.round(sendingMoneyNum);
    let tax = plantsPrice * 0.07;

    let estimateNum = ( region * boxPrice) + (plantsPrice *0.2) +plantsPrice;
    let plantsValue = plantsPrice.toLocaleString();
    let phytoFee = phyto.toLocaleString();
    let boxFee = boxPrice.toLocaleString();
    let argentFee = argent.toLocaleString();
    let sendingMoneyFee = sendingMoney.toLocaleString();
    let taxFee = tax.toLocaleString();
    let estimate = estimateNum.toLocaleString();

    document.getElementById("span1").textContent = estimate; 
    document.getElementById("span2").textContent = plantsValue; 
    document.getElementById("span3").textContent = phytoFee; 
    document.getElementById("span4").textContent = boxFee; 
    document.getElementById("span5").textContent = argentFee; 
    document.getElementById("span6").textContent = sendingMoneyFee; 
    document.getElementById("span7").textContent = taxFee; 

  }

