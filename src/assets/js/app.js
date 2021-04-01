//Первый слайдер на главной
let offset = 0; //Смещение
const slider = document.querySelector('.content');

document.querySelector('.wrapper-btn').addEventListener('click',(event)=>{
    console.log(event.target);
    if(event.target.classList.contains('wrapper-btn__btn--next-slide')){
        offset = offset + 368;
        if(offset == 368 ){
            offset = 0;
        }
        slider.style.left = offset + 'px';
    }else{
        offset = offset - 368;
        if(offset < -368){
            offset = 0;
        }  
        slider.style.left = offset + 'px';
    }
}, true);
//Второй слайдер на главной
let offset2 =0;
    
