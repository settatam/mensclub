var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;
var photoss = [];


$$(document).on('deviceready', function(){ 
    navigator.splashscreen.hide();
})

// Add view

$$('.close-left-panel').on('click', function (e) {
        myApp.closePanel('left');
});

$$('.call-icon').on('click', function (e) {
    window.plugins.CallNumber.callNumber(onSuccess, onError, "2154831831", true);
});

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

$$('.make-appointment').on('click', function (e) {
    var ref = cordova.InAppBrowser.open("https://online.getsquire.com/mens-club-barbershop-philadelphia");
    // var iframe = '<iframe width="100%" style="height: 100em;" src="https://online.getsquire.com/mens-club-barbershop-philadelphia" frameborder="0"></iframe>';
    // $$('.popup').html("Loading...");
    // $$('.popup').html(iframe);
    // myApp.popup('.popup');
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('gallery', function (page) {
    myApp.closePanel('left');
    $$('.left-hamburger').removeClass('hide');
    $$('.logo').removeClass('hide');
    var mySwiper = myApp.swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100,
        pagination:'.swiper-pagination',
         paginationHide: false,
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
    });
});

myApp.onPageInit('contact', function (page) {
    $$('.left-hamburger').removeClass('hide');
    $$('.logo').removeClass('hide');
    myApp.closePanel('left');
    new GMaps({
        div: '#maps',
        lat: 40.051329,
        lng: -75.236099
    });
});


myApp.onPageInit('index', function (page) {
    $$('.left-hamburger').removeClass('hide');
    $$('.logo').removeClass('hide');
    myApp.closePanel('left');
});

/*=== Default standalone ===*/
var myPhotoBrowserStandalone = myApp.photoBrowser({
    photos : photoss,
});
//Open photo browser on click
$$(document).on('click', '.img-item', function () {
    photos = [];
    $$('.left-hamburger').addClass('hide');
    $$('.logo').addClass('hide');
    var image = $$(this).find('img').prop('src');
    photoss[0]=image;
    var img_doc = $$(document).find('.img-item img');
    for(var i=0; i<img_doc.length; i++){
        photoss[i+1]=img_doc[i].src;
    }

    myApp.photoBrowser({
        photos: photoss,
        theme: 'dark',
        type: 'page'
    }).open();
    // setTimeout(function() {
    //     myPhotoBrowserStandalone.open();
    // }, 1000)
    
});


// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

function initMap() {
        map = new google.maps.Map(document.getElementById('maps'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
}

function onSuccess(result){
  console.log("Success:"+result);
}
 
function onError(result) {
  console.log("Error:"+result);
}
