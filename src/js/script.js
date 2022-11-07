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
