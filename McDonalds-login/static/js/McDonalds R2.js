	var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};


function showPortraitImages() {
	
	var windowHeight = $(window).height();
 	var windowWidth = $(window).width();

	var aspectRatio = 1290 / 696;
	var buttonCount = $('.button').length;
	if (buttonCount <= 3) {
	 	$('.main-container-button').height(windowHeight * 0.25);
	    if ($('.direct-access-container').length > 0) {
		 	$('.main-container-button').height(windowHeight * 0.41);
		}
		$('.left-image-container').css({top:'9%'});
		$('.center-image-container').css({top:'9%'});
		$('.right-image-container').css({top:'9%'});
		
	} else if (buttonCount > 3) {
	 	$('.main-container-button').height(windowHeight * 0.5);
	    if ($('.direct-access-container').length > 0) {
	 		$('.main-container-button').height(windowHeight * 0.55);
		}
	}

	var imageHeight = windowHeight - $('.main-container-button').height();
	var imageHeight = windowWidth / aspectRatio;
	
	$('.main-container-image').width(windowWidth);
	$('.main-container-image').height(imageHeight);
	$('.left-image-container').width(windowWidth);
	$('.center-image-container').width(windowWidth);
	$('.right-image-container').width(windowWidth);
		
	$('.left-image-container').height(imageHeight);
	$('.center-image-container').height(imageHeight);
	$('.right-image-container').height(imageHeight);
		
	$('.background-image-container').height(windowWidth);
	$('.background-image-container').width(windowWidth);


	$('div.button').each(function() {
   	  var buttonWidth = Math.round(windowWidth /90 * 21);	
      var buttonHeight = buttonWidth / 0.80;
      $(this).height(buttonHeight);
      $(this).width(buttonWidth);
	});

    var sizefactor = windowWidth / 568;
	imageHeight = $('.frifi-logo').height();
	imageWidth = $('.frifi-logo').width();
	$('.frifi-logo').height(imageHeight * sizefactor);
	$('.frifi-logo').width(imageWidth * sizefactor);

	var fontSize = Math.round(sizefactor * 35);
	$('.main-line').css({'font-size': fontSize});
	fontSize = Math.round(sizefactor * 20);
	$('.sub-line').css({'font-size': fontSize});
	fontSize = Math.round(sizefactor * 20);
	$('.directaccess').css({'font-size': fontSize});
		
}



function showLandscapeImages() {
	
	var windowHeight = $(window).height();
 	var windowWidth = $(window).width();
	var headerWidth = $('.header-image').width();
	var headerHeight = $('.header-image').height();
	var aspectRatio = 1.85;//1290 / 696;
	var buttonCount = $('.button').length;
	
 	$('.main-container-button').height(windowHeight * 0.4);
	var imageHeight = windowHeight - $('.main-container-button').height();
    var imageWidth = imageHeight * aspectRatio;

	$('.main-container-image').width(imageWidth);

	$('div.button').each(function() {
   	  var buttonHeight = Math.round(windowHeight /100 * 18);	
      var buttonWidth = buttonHeight * 0.8235;
      $(this).height(buttonHeight);
      $(this).width(buttonWidth);
	});
	
	$('.left-image-container').height(imageHeight);
	$('.left-image-container').width(imageWidth);
	
	
	$('.center-image-container').height(imageHeight);
	$('.center-image-container').width(imageWidth);
	
	$('.right-image-container').height(imageHeight);
	$('.right-image-container').width(imageWidth);

  	$('.background-image-container').height(windowWidth);
  	$('.background-image-container').width(windowWidth);
  

	imageHeight = $('.frifi-logo').height();
	imageWidth = $('.frifi-logo').width();
	$('.frifi-logo').height(imageHeight * sizefactor);
	$('.frifi-logo').width(imageWidth * sizefactor);
	
	var sizefactor = windowWidth / 568;
	var fontSize = Math.round(sizefactor * 20);
	$('.main-line').css({'font-size': fontSize});
	fontSize = Math.round(sizefactor * 10);
	$('.sub-line').css({'font-size': fontSize});
	  	
	fontSize = Math.round(sizefactor * 10);
	$('.directaccess').css({'font-size': fontSize});

}

var startOrientation = window.orientation;
var init = true;

$(document).ready(function(){	

$('#logo').css({top:500, position:'absolute'});
	
	TweenMax.to($('#logo'), 2, {y:-500, ease:Back.easeOut});
	
	$('#actie1').css({left:-1500, position:'absolute'});

	TweenMax.to($('#actie1'), 2, {x:1500, delay:2, ease:Power2.easeIn});
	
	$('#actie2').css({left:1500, position:'absolute'});
		
	TweenMax.to($('#actie2'), 2, {x:-1500, delay:2, ease:Power2.easeIn});

$('#directaccess a').on('click', function(e) {
e.preventDefault();
e.stopPropagation();
var url = 'https://hotspot.frifi.com' + $('#directaccess a').attr('href');
var axel = Math.random() + "";
var a = axel * 10000000000000;
	
	
	$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=749297;type=mcdwifi;cat=wifiacce;u38='+ dataLayer[0]['locationID']+';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?" width="1" height="1" style="width:1px!important;height:1px!important;" alt="" />');
	setTimeout( function () {
	window.location.href = url; 
	}, 750);
	//document.write('<img src="https://ad.doubleclick.net/ddm/activity/src=749297;type=mcdwifi;cat=wifiacce;u38='+ dataLayer[0]['locationID']+';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?" width="1" height="1" style="width:1px!important;height:1px!important;" alt="" />');
});

var subline = $('.sub-line');
var html = subline.html();
if (html.indexOf("terms and conditions:") >= 0) {
	var newHtml = html.replace("terms and conditions:", "<a href='/hotspot/directaccess/terms-conditions/mcdonalds'>terms and conditions:</a>");
	subline.html(newHtml);
}

if (html.indexOf("gebruiksovereenkomst") >= 0) {
	subline = $('.sub-line');
	html = subline.html();
	var newHtml = html.replace("gebruiksovereenkomst", "<a href='/hotspot/directaccess/terms-conditions/mcdonalds'>gebruiksovereenkomst</a>");
	subline.html(newHtml);
}





    acceptCookies();

	if (window.orientation == undefined) {
		window.addEventListener("resize", function() {
			processImages();
		}, false);		
	} else {
		window.addEventListener("orientationchange",function() {
			processImages();
		}, false);
		
	}
	processImages();
	
		if (navigator.userAgent.match(/CriOS/i) && navigator.userAgent.match('iPhone|iPad|iPod/i')) {
		alert('Chrome browser is not supported for FriFi, please open Safari browser');
	}

	
});


function processImages() {
	
	if (init) {
	    init = false;
	
		if (window.orientation == undefined) {
			if ($(window).height() >= $(window).width()) {
				showPortraitImages();
			} else {
				showLandscapeImages();
			}
		} else {
				var isPortrait = (window.innerHeight/window.innerWidth) > 1;
			if (isPortrait) {
			//if ((window.orientation == 0) || (window.orientation == 180)) {
				showPortraitImages();
			} else {
				showLandscapeImages();
			}
		}
	} else {
		if (window.orientation != undefined && window.orientation != startOrientation) {
			window.location.reload();
		} else {
			if (window.orientation == undefined) {
				if ($(window).height() >= $(window).width()) {
					showPortraitImages();
				} else {
					showLandscapeImages();
				}
			}
		}
	}
}

function acceptCookies() {
	$.getJSON( contextPath + "/page/accept-cookies", function( response ) {	
	});	
}

