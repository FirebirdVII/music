$(document).ready(function () {
    $(".type-youtube").append('<span class="badge badge-youtube">YT</span>');
    $(".type-spotify").append('<span class="badge badge-spotify">S</span>');


    $(".badge-youtube").css({ "background-color": "#fb5050", "color": "white", "float": "right" });
    $(".badge-spotify").css({ "background-color": "#76b852", "color": "white", "float": "right" });
});