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