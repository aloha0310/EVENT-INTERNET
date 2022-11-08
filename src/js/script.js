//форма на главной
var open = document.querySelector('.one__btn');
open.onclick = function () {
    document.querySelector('.overlay').style.display = 'block';
};

var close = document.querySelector('.modals__close');
close.onclick = function () {
    document.querySelector('.overlay').style.display = 'none';
};



//форма отправки
$('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "src/mailer/smart.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        $('form').trigger('reset');
    });
    return false;
});

//карусель
//$('.carousel__inner').slick({
//    speed: 1200,
//    //adaptiveHeight: true,
//    prevArrow: '<button type="button" class="slick-prev"><img src="src/icon/left.png"></button>',
//    nextArrow: '<button type="button" class="slick-next"><img src="src/icon/right.png"></button>',
//    responsive: [
//        {
//            breakpoint: 991,
//            settings: {
//                dots: true,
//                arrows: false
//            }
//        }
//    ]
//});

$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="src/icon/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="src/icon/right.png"></button>'

    });
});
