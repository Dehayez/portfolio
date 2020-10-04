new fullpage('#fullPage', {
	autoScrolling: true,
	navigation: true,
	navigationPosition: 'right',
	/* anchors: ['section1', 'setion2', 'section3', 'section4', 'section5'],
	navigationTooltips: ['Home', 'Ecospin', 'GOT', 'YouAreIt', 'Buddy'],
	showActiveTooltip: true */
	scrollingSpeed: 1000, 
});


$(document).ready(function () {

	$('.first-button').on('click', function () {
  
	  $('.animated-icon1').toggleClass('open');
	});
	$('.second-button').on('click', function () {
  
	  $('.animated-icon2').toggleClass('open');
	});
	$('.third-button').on('click', function () {
  
	  $('.animated-icon3').toggleClass('open');
	});
  });