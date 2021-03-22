//randomColor
let randomColor;
let color1 = document.getElementById("color1")
let color2 = document.getElementById("color2")
let color3 = document.getElementById("color3")
let color4 = document.getElementById("color4")
let color5 = document.getElementById("color5")
let color6 = document.getElementById("color6")
// ok
window.addEventListener("mouseout",function(){
    randomColor=colors[Math.floor(Math.random()*4.5)]
    randomColor2=colors[Math.floor(Math.random()*6.5)]
    randomColor3=colors[Math.floor(Math.random()*5.5)]
    color1.style.backgroundColor=randomColor2
        color2.style.backgroundColor=randomColor
        color3.style.backgroundColor=randomColor2
        color4.style.backgroundColor=randomColor3
        color5.style.backgroundColor=randomColor2
        color6.style.backgroundColor=randomColor3
 
})

//element  ay sora mn dol
//event  click
//action  yzhrly ellightboxcontainer

var imgs=Array.from(document.getElementsByClassName("img-fluid")); 
var lightBoxContainer=document.getElementById("lightBoxContainer");
var lightBoxItem=document.getElementById("lightBoxItem");
var closeIcon=document.getElementById("close");
var prevIcon=document.getElementById("prev");
var nextIcon=document.getElementById("next");
var currentSlideIndex=0;
for(var i=0;i<imgs.length;i++)
{
   imgs[i].addEventListener("click",openLightBox)
}
function openLightBox(eventInfo){
    lightBoxContainer.style.display="flex";
    var imgSrc = eventInfo.target.src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;

    currentSlideIndex = imgs.indexOf(eventInfo.target);
}

closeIcon.addEventListener("click",closeLightBox)

function closeLightBox(){
    lightBoxContainer.style.display="none";
}

nextIcon.addEventListener("click",getNextSlide)

function getNextSlide(){
    currentSlideIndex++;//6
    if(currentSlideIndex==imgs.length) //6
    {
        currentSlideIndex=0;
    }

    var imgSrc=imgs[currentSlideIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
    console.log(currentSlideIndex)
}

prevIcon.addEventListener("click",getPrevSlide)

function getPrevSlide(){
    currentSlideIndex--; //
    if(currentSlideIndex<0){
        currentSlideIndex=imgs.length-1  //6(0-5)
    }
    var imgSrc=imgs[currentSlideIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
}


document.addEventListener("keydown",function(e){
    if(e.keyCode==39)  //arrow right
    {
        getNextSlide();
    }
    else if(e.keyCode==37) //arrow left
    {
        getPrevSlide();
    }
    else if(e.keyCode==27){
        closeLightBox()
    }
})

lightBoxContainer.addEventListener("click",function(e){
    if(e.target!=lightBoxItem&&e.target!=nextIcon&&e.target!=prevIcon)
    {
        closeLightBox()
    }
})
