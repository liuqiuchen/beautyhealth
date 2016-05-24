$(function () {
	//把点击的文字内容响应到输入框内
	$('#tag_list').find('li.tag_item').on('click', function () {
		$('#search').val(($(this).text()));
	});

	//关闭提示信息
	$('.icon-close').on('click', function () {
		$('.tips').slideUp();
	});
});
















