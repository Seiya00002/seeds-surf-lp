window.onload = 
function (){

// スライドショー機能
//     let images = [
//         'url(./img/import-img1.jpg)',
//         'url(./img/import-img2.jpg)',
//         'url(./img/import-img3.jpg)'
//     ]

//     let target = document.querySelector('#slide');
//     let right = document.querySelector('#right');
//     let left = document.querySelector('#left');

//     // 画像カウンター表示
//     let count = 0;

//     function change(){
//         target.style.backgroundImage = images[count];
//         if( count == 2){
//             count = 0;
//         } else {
//             count++;
//         } 
//     }

//     function goNext(event) {
//         event.preventDefault();
//         change();
//     }

//     function goBack(event) {
//         event.preventDefault();
//         if( count == 0){
//             count = 2;
//         } else {
//             count--;
//         } change();
//     }

//     right.addEventListener( 'click', goNext, false);
//     left.addEventListener( 'click', goBack, false);


// setInterval(change, 3000);


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
    console.log(boxnum);
    
    // 値(数値)から値(value値)を取得
    let region = place.options[num].value;
    let boxPrice = box.options[boxnum].value;
    let plantsPriceString = price.value;

    let plantsPrice = parseInt(plantsPriceString, 10); // plantsPriceStringを数値に変換

    const phyto = 10000;
    let argent = plantsPrice * 0.2;
    let boxCalc = boxPrice*region

    let boxPriceValue = parseInt(boxCalc, 10); 

    let sendingMoneyNum = (plantsPrice + boxPriceValue) * 0.0073;
    let sendingMoney = Math.round(sendingMoneyNum);
    let tax = plantsPrice * 0.07;

    let taxValue = parseInt(tax, 10);
    let sendingMoneyNumValue = parseInt(sendingMoney, 10);


    let estimateNum = ( region * boxPrice) + (plantsPrice *0.2) + phyto + plantsPrice + sendingMoneyNumValue + taxValue;
    let plantsValue = plantsPrice.toLocaleString();
    let phytoFee = phyto.toLocaleString();
    let boxFee = boxPriceValue.toLocaleString();
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

// 見積り表示切り替え

const btn = document.getElementById('button')
btn.addEventListener('click', () => {
    const estimate_table = document.getElementById('estimate_table');
    const priceForm = document.getElementById('price');

    if(priceForm.value ===''){
        window.alert('金額を入力して下さい。');
    } else {

    estimate_table.classList.toggle('appear');

    }

    if (btn.textContent == "計算Go!!") {
      btn.textContent = "閉じる";
    } else {
      btn.textContent = "計算Go!!";
    }
  });


// スライドショー機能修正版
let slideIndex = 0;
let slides = document.querySelectorAll('.slideshow-container img');
let interval;

// let prevBtn = document.getElementById('prev-btn');
// let nextBtn = document.getElementById('next-btn');


function showSlide() {
    for( let i=0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function previousSlide() {
    slideIndex--;
    if(slideIndex < 0){
        slideIndex = slides.length - 1;
    }
    showSlide();
    resetInterval();
}

function nextSlide() {
    slideIndex++;
    if(slideIndex >= slides.length){
        slideIndex = 0;
    }
    showSlide();
    resetInterval();
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 3000);
}

resetInterval();

// prevBtn.addEventListener('click',previousSlide,false);
// nextBtn.addEventListener('click',nextSlide,false);


};

