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

	/**
	 * 图片延迟加载
	 * */
	$('img.lazy').lazyload({
		effect: 'fadeIn'
	});

	/**
	 * 切换顶部标题*/
	var switchTitle = {
		parentEle: $('#myFooter').find('.footer_nav_list')
	};
	switchTitle.parentEle.find('li.person').on('click', function () {
		$('.title').text('我的');
	});

	switchTitle.parentEle.find('li.home').on('click', function () {
		$('.title').text('美妆健身');
	});

});






















