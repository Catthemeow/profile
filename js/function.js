// 로딩중
$(function () {
	const $loading = $('div.loading');
	$loading.children('p').fadeOut();
	$loading.delay(250).fadeOut(800);
});

//
$(function () {
	const $home = $('#home');
	/*
	window = 브라우저
	innerHeight = 요소안의 높이

	브라우저 화면의 크기
	1. 스크롤바, 불바를 제외한 화면의 크기
		window.innerWidth
		window.innerHeight
		
	2. 스크롤바, 불바를 포합한크기
		window.outerWidth
		window.outerHeight	
	*/
	$(window).on('load resize', function () {
		$home.height(window.innerHeight);
	});
});
