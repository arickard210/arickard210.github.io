// Animate Smooth Scroll for view-curriculumn button
$('#view-curriculum').on('click', function() {
    const curriculum = $('#curriculum').position().top;

    $('html, body').animate(
        {
            scrollTop: curriculum
        },
        700
    );
});