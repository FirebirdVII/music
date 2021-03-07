$(document).ready(function () {
    $(".type-youtube").append('<span class="badge badge-youtube">YT</span>');
    $(".type-youtube-playlist").append('<span class="badge badge-youtube-playlist">YT-PL</span>');
    $(".type-spotify").append('<span class="badge badge-spotify">S</span>');
    $(".type-short").append('<span class="badge badge-short">kurz</span>');


    $(".badge-youtube").css({ "background-color": "#fb5050", "color": "white", "float": "right" });
    $(".badge-youtube-playlist").css({ "background-color": "#af0000", "color": "white", "float": "right" });
    $(".badge-spotify").css({ "background-color": "#76b852", "color": "white", "float": "right" });
    $(".badge-short").css({ "background-color": "#373986", "color": "white", "float": "right" });
});