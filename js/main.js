// build time:Tue Mar 27 2018 20:35:20 GMT+0200 (CEST)
if($.prototype.justifiedGallery){var options={rowHeight:140,margins:4,lastRow:"justify"};$(".article-gallery").justifiedGallery(options)}$(document).ready(function(){if($("#menu-icon, #menu-icon-tablet").click(function(){if("hidden"==$("#menu").css("visibility")){$("#menu").css("visibility","visible"),$("#menu-icon, #menu-icon-tablet").addClass("active");var i=$("#menu > #nav").offset().top;return"hidden"!=$("#menu").css("visibility")&&i<50?$("#menu > #nav").show():"hidden"!=$("#menu").css("visibility")&&i>100&&$("#menu > #nav").hide(),!1}return $("#menu").css("visibility","hidden"),$("#menu-icon, #menu-icon-tablet").removeClass("active"),!1}),$("#header > #nav > ul > .icon").click(function(){$("#header > #nav > ul").toggleClass("responsive")}),$("#menu").length&&$(window).on("scroll",function(){var i=$("#menu > #nav").offset().top;"hidden"!=$("#menu").css("visibility")&&i<50?$("#menu > #nav").show():"hidden"!=$("#menu").css("visibility")&&i>100&&$("#menu > #nav").hide(),!$("#menu-icon").is(":visible")&&i<50?($("#menu-icon-tablet").show(),$("#top-icon-tablet").hide()):!$("#menu-icon").is(":visible")&&i>100&&($("#menu-icon-tablet").hide(),$("#top-icon-tablet").show())}),$("#footer-post").length){var i=0;$(window).on("scroll",function(){var e=$(window).scrollTop();e>i?$("#footer-post").hide():$("#footer-post").show(),i=e,$("#nav-footer").hide(),$("#toc-footer").hide(),$("#share-footer").hide(),e<50?($("#actions-footer > ul > #top").hide(),$("#actions-footer > ul > #menu").show()):e>100&&($("#actions-footer > ul > #menu").hide(),$("#actions-footer > ul > #top").show())})}});
//rebuild by neat 