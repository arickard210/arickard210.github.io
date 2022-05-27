// write the toggle function for the menu being pressed
$(document).ready (() => {
    const $hamburger = $('.hamburger-container');
    const $menu1 = $('#menu1');
    $hamburger.on('click', () => {
        $menu1.toggle();
    });
})