const hamburgerMenu = document.getElementById('hamburger');
const navItems = document.getElementById('nav-items');
const previouBtn=document.getElementById('previous-btn')
const nextBtn=document.getElementById('next-btn')

hamburgerMenu.addEventListener('click', function(){
    navItems.classList.toggle('hide');
})
  
const arr=[
    "/Images/ntslImg.png",
    "./Images/Ruby.png",
    "./Images/ntslImg.png",
    "./Images/Ruby.png",
    "./Images/ntslImg.png",
    "./Images/Ruby.png",
    "./Images/ntslImg.png",
    "./Images/Ruby.png",
]

let i=0;

var image=document.getElementById('image')

setInterval(imagesSlider,3000);

function imagesSlider(){
    console.log(i)
    if (i<arr.length){
        image.src=arr[i];
        i+=1
    }

    else{
        i=0
    }

}

previouBtn.addEventListener('click',function(){
    console.log("prev")
    if (i>0){
        i-=1
        image.src=arr[i]
        
    }

    else{
        i=arr.length-1;
        image.src=arr[i]
    }

})

nextBtn.addEventListener('click',function(){
    if (i<arr.length-1){
        i+=1
        image.src=arr[i]
        
    }

    else{
        i=0
        image.src=arr[i]
    }

})
