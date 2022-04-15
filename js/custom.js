var one = $("#one");
var two = $("#two")
one.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


two.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/** thum image */
const thums = document.querySelector('.thumb__img').children;

function changeImage(event){
   document.querySelector('.pro-img').src = event.children[0].src;
   
   for(let i =0; i< thums.length ; i++){
       thums[i].classList.remove('active');
   }
   event.classList.add('active')
}
