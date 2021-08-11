let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');


document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 200;
    sliderLine.style.left = -offset + 'px';
});