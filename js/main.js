$(function () {

	/**
	 * 设置头部为蓝色样式
	 * */
	$('ion-header-bar').addClass('bar-positive');


	/**
	 * 底部 tab 选项卡操作
	 * */
	var footerTab = {
		listItems: '#myFooter ul.footer_nav_list li'
	};
	$(footerTab.listItems).on('tap', function () {
		//console.log($(this).index());

		$('.cont').css('display', 'none');
		$('.cont' + ($(this).index() + 1)).fadeIn();
	});

});






















