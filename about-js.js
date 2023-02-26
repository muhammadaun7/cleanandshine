let tab_buttons = document.querySelectorAll('.gallery-but-li');

console.log(tab_buttons[3].getAttribute("data-val"))

let gallery_items = document.querySelectorAll('.gallery-items');


for(var v = 0;v<tab_buttons.length;v++){

    tab_buttons[v].addEventListener("click",function(e){
        for(var i = 0;i<tab_buttons.length;i++){
            tab_buttons[i].classList.remove('active-but');
        }
        e.target.classList.add("active-but");

        var attr_val = this.getAttribute("data-val");

        

        for(var t=0;t<gallery_items.length;t++){

             if(gallery_items[t].classList.contains(attr_val) || gallery_items[t].getAttribute("data-att") == attr_val ){

                gallery_items[t].classList.add("show");
                gallery_items[t].classList.remove("hide");

             }
             else{
              
                gallery_items[t].classList.remove("show");
                gallery_items[t].classList.add("hide")
             }

        }

     



    })

}
// for count down

let count_num = document.querySelectorAll('.count-num');

console.log(count_num)

let interval = 5000;

count_num.forEach(function(item){

    let startvalue = 0;

    endValue = parseInt(item.getAttribute('data-num'));

    console.log(endValue)

    let duration = Math.floor(interval/endValue);

   let counter =  setInterval(function(){

        startvalue++;

        item.textContent = startvalue;

        if(startvalue === endValue){

            clearInterval(counter);
    
        }

    },duration)
   
});


// owl carasoul

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
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



