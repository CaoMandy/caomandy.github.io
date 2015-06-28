var start;

var $j = jQuery.noConflict();

$j(document).ready(function(){

    $j("li#home").click(function(){
	flyToHome();
    });
	$j("li#about").click(function(){
	flyToAbout();
    });
	$j("li#contact").click(function(){
	flyToContact();
    });
	$j("li#portfolio").click(function(){
	flyToPortfolio();
    });
});

function flyToHome() {
    start = parseInt($j("div#bird").css('left'));
    //alert(start);
    var end = 200;
    var interval = end - start;
    invoke(moveRight, 0, 10, interval*10);
    //setInterval(moveRight, 100);
}
function flyToAbout() {
    start = parseInt($j("div#bird").css('left'));
    //alert(start);
    var end = 350;
    var interval = end - start;
    invoke(moveRight, 0, 10, interval*10);
    //setInterval(moveRight, 100);
}
function flyToPortfolio() {
    start = parseInt($j("div#bird").css('left'));
    //alert(start);
    var end = 500;
    var interval = end - start;
    invoke(moveRight, 0, 10, interval*10);
    //setInterval(moveRight, 100);
}
function flyToContact() {
    start = parseInt($j("div#bird").css('left'));
    //alert(start);
    var end = 650;
    var interval = end - start;
    invoke(moveRight, 0, 10, interval*10);
    //setInterval(moveRight, 100);
}

function moveRight() {
    $j("div#bird").css('left', (start++) + 'px');    
}    

function invoke(f, start, interval, end) {
    if(!start) start = 0;
    if(arguments.length <= 2)
        setTimeout(f, start);
    else {
        setTimeout(repeat, start);
        function repeat() {
            var h = setInterval(f, interval);
            if (end) setTimeout(function() { clearInterval(h);}, end);
        }
    }
}