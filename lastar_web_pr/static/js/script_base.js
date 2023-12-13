const logForm = document.querySelector('.authorization_block')
const loginButton = document.querySelector('.user')
const registrButton = document.querySelector('.button_reg')
const registrForm = document.querySelector('.registration_block')
const loginForm = document.querySelector('.login_block')
const body_html = document.querySelector('.color-change-2x')

function logMenuVisible() {
    logForm.classList.toggle('not_visible')
    body_html.classList.toggle('block_overflow')
}
function registrFormVisible() {
    registrForm.classList.toggle('not_visible')
    loginForm.classList.toggle('not_visible')
}

loginButton.addEventListener('click', logMenuVisible)
registrButton.addEventListener('click', registrFormVisible)

$(function () {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('header_fixed');
            $('body').css({
                'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки
            });
        } else {
            header.removeClass('header_fixed');
            $('body').css({
                'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
            })
        }
    });
});
