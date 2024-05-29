const icon = document.getElementById('icon');
const nav = document.querySelector('.nav');
const sneaker = document.getElementById('sneakers')

icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-times')) {
        icon.classList.remove('fa-times');
        nav.classList.remove('toggle');
        sneaker.style.opacity = 1;
    } else {
        icon.classList.add('fa-times');
        nav.classList.add('toggle');
        sneaker.style.opacity = 0;
    }
});

$(document).ready(function(){
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        stagePadding: 100,
        dots: true,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 3
            }
        }
    });

    $("#leftBtn").click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $("#rightBtn").click(function() {
        owl.trigger('next.owl.carousel');
    });
});