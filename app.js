const img =[
    'img/img-1.png',
    'img/img-2.png',
    'img/img-3.png',
    'img/img-4.png',
    'img/img-5.png',
    'img/img-6.png',
    'img/img-7.png',
    'img/img-8.png',
    'img/img-9.png',
    'img/img-10.png',
    'img/img-11.png',
];
let imgIndex =0;
const imgElemant=document.getElementById('slider-img');
setInterval(()=>{
    if(imgIndex>=img.length){
        imgIndex = 0;
    }
    const imgUrl = img[imgIndex];
    imgElemant.setAttribute('src',imgUrl);
    imgIndex++;
},1500)