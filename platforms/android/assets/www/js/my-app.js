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

var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
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
});
myApp.onPageInit('contact', function (page) {
    myApp.closePanel('left');
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