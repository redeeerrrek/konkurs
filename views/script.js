'use strict';

document.querySelector("#btn1").addEventListener('click', () => {
    $(location).prop('href', '/ranking')
})
document.querySelector("#btn2").addEventListener('click', () => {
    $(location).prop('href', '/przelicznik')
})