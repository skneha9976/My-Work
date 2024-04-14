const images = document.querySelectorAll(".header-slider ul img")
const prevbuttn = document.querySelector(".control-prev")
const nextbuttn = document.querySelector(".control-next")

let n=0;

function slideChange(){
    for(let i=0; i<images.length; i++){
        images[i].style.display = 'none';    
    }
    images[n].style.display = 'block';
}
slideChange();

prevbuttn.addEventListener('click', function(event){
    if(n>0){
        n--;
    }else{
        n=images.length - 1;
    }
slideChange();
})

nextbuttn.addEventListener('click', function(event){
    if(n < images.length - 1){
        n++;
    }else{
        n=0;
    }
slideChange();
})

