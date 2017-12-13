var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

$$(document).on('deviceready', function(){ 
    navigator.splashscreen.hide();
})

// Add view

$$('.close-left-panel').on('click', function (e) {
        myApp.closePanel('left');
});

$$('.call-icon').on('click', function (e) {
    window.plugins.CallNumber.callNumber(onSuccess, onError, "800123456", true);
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
    myApp.closePanel('left');
    new GMaps({
        div: '#maps',
        lat: -12.043333,
        lng: -77.028333
    });
});

myApp.onPageInit('index', function (page) {
    myApp.closePanel('left');
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
