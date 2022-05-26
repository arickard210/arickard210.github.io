$(document).ready (() => {
    const $hamburger = $('.hamburger-container');
    const $menu = $('#mobile-menu');
    $hamburger.on('click', () => {
        $menu.toggle();
    });
    $menu.on('click', () => {
        $menu.toggle();
    })
})
