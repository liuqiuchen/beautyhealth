$(function () {
	//�ѵ��������������Ӧ���������
	$('#tag_list').find('li.tag_item').on('click', function () {
		$('#search').val(($(this).text()));
	});

	//�ر���ʾ��Ϣ
	$('.icon-close').on('click', function () {
		$('.tips').slideUp();
	});
});
















