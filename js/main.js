$(function () {

	/**
	 * ����ͷ��Ϊ��ɫ��ʽ
	 * */
	$('ion-header-bar').addClass('bar-positive');


	/**
	 * �ײ� tab ѡ�����
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
	 * ͼƬ�ӳټ���
	 * */
	$('img.lazy').lazyload({
		effect: 'fadeIn'
	});

});






















