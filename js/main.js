var itemselected= Array.from(document.querySelectorAll('.item img'));
var lightBoxContainer=document.querySelector('.lightBoxContainer')
var imgLightBoxContainer=document.querySelector('.img-lightBoxContainer')
var next =document.getElementById('next')
var prev=document.getElementById('prev')
var close=document.getElementById('close')

var imgSrc;
var currentIndex=0;

for(var i=0; i<itemselected.length; i++)
{
    itemselected[i].addEventListener('click',function (eventInfo){
    lightBoxContainer.classList.replace('d-none','d-flex')
    imgSrc= eventInfo.target.getAttribute('src');
    imgLightBoxContainer.style.backgroundImage=`url(${imgSrc})`;
    currentIndex=itemselected.indexOf(eventInfo.target);

    

    })
}

function nextImage()
{
    currentIndex++
    if(currentIndex==itemselected.length)
    {
        currentIndex=0;
    }
    var nextImgSrc = itemselected[currentIndex].getAttribute('src');
    imgLightBoxContainer.style.backgroundImage=`url(${nextImgSrc})`
    console.log(nextImgSrc);

}
prev.addEventListener('click',prevImage)

function prevImage()
{
    currentIndex--
    if(currentIndex==-1)
    {
        currentIndex=itemselected.length-1;
    }
    var nextImgSrc = itemselected[currentIndex].getAttribute('src');
    imgLightBoxContainer.style.backgroundImage=`url(${nextImgSrc})`
    console.log(nextImgSrc);

}
next.addEventListener('click',nextImage);

function closeImage()
{
    lightBoxContainer.classList.replace('d-flex','d-none')

}
close.addEventListener('click',closeImage)

document.addEventListener('keyup',function(eventInfo)
{
    console.log(eventInfo);
    if(eventInfo.code=="ArrowRight")
    {
        nextImage()
    }
    if(eventInfo.code=="ArrowLeft")
    {
        prevImage()
    }
    if(eventInfo.code=="Escape")
    {
        closeImage()
       
    } 
})

lightBoxContainer.addEventListener('click',function(eventInfo){

    
    if(eventInfo.target.getAttribute('id')=="outerBox")
    {
      closeImage()

    }
})