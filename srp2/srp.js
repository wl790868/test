KISSY.ready(function(S) {
	var $ = S.all;
	var cur_submit;
	
	$('#J_report_back').on('load', function(){

		switch(cur_submit.selector){
			case '#J_fix_submit':
				cur_submit.cur.next('.iconfont').css('display','inline');
			break;
			case '.J_report_submit':
				cur_submit.cur.parent('.J_report').addClass('report-submited');
			break;
		}
		$('#J_bubble').removeClass('bubble-hidden')

		setTimeout(function(){
			$('#J_bubble').addClass('bubble-hidden');
		}, 1200);
	});

	S.use('switchable' , function(S, Switchable){
		var fixS = new Switchable('#J_report_fix', {
			triggerType:'click',
			activeTriggerCls: 'cur',
			switchTo:0
		});

		fixS.on('switch', function(ev){
			var index = ev.currentIndex,
				items = $('#J_report_fix').all('.q-item');

			items.each(function(v, k){
				var inputs = $(v).all('input');

				if(k == index){
					inputs.each(function(vv){
						$(vv).prop('disabled', false);
					});
				}else{
					inputs.each(function(vv){
						$(vv).prop('disabled', true);
					});
				}
			});

		});

		$('.J_report_panel').each(function(){
			new Switchable($(this), {
				triggerType:'click',
				activeTriggerCls: 'cur',
				switchTo:0
			});
		});
	});
	$('.J_open_icon').on('click', function(){
		$('.J_close_icon').fire('click');
		$(this).parent().parent().removeClass('report-close');
	});
	$('.J_close_icon').on('click', function(){
		$(this).parent().parent().addClass('report-close');
	});
	$('.J_report input[type = "radio"]').on('click', function(){
		var cur = $(this);

		if(/J_radio_other/.test(cur.attr('class'))){
			cur.parent().next('.textarea').css('display','block');
		}else{
			cur.parent().next('.textarea').css('display','none');
		}
	});
	$('.J_checkbox_other').on('click', function(){
		var cur = $(this);

		if(cur.prop('checked')){
			cur.parent().next('.textarea').css('display', 'block');
		}else{
			cur.parent().next('.textarea').css('display', 'none');
		}
	});

	$('.J_report').on('click',function(e){
		var lis;

		if(!/J_report_submit/.test($(e.target).attr('class'))){
		  	e.stopPropagation();
		}else{
			try{
				lis = $(e.target).parent('.J_report').all('.report-title > li');
				if(/cur/.test($(lis[0]).attr('class'))){
					$(lis[1]).fire('click');
					e.stopPropagation();
				}
			}catch(e){
			}
		}
	});
	$(document).on('click',function(e){
		$('.J_close_icon').fire('click');
	});

	//顶部fixed
	var fixPanel = $('#J_report_fix');

	S.Event.on(window, 'scroll', function() {
		var scrollTop = S.DOM.scrollTop();

		if (scrollTop > 0) {
			fixPanel.addClass('report-fix-fixed');
		}else{
			fixPanel.removeClass('report-fix-fixed');
		}
	});

	$('#J_icon_up').on('click', function(){
		$('#J_report_fix_c').addClass('report-fix-c-up ');
	});
	$('#J_icon_down').on('click', function(){
		$('#J_report_fix_c').removeClass('report-fix-c-up ');
	});
	$('.J_fix_title').on('click', function(){
		$(this).one('input').prop('checked', true);
	});
	$('.J_fix_other').on('click', function(){
		var cur = $(this),
			isChecked = cur.prop('checked'),
			input = cur.parent().one('.other-input');

		if(isChecked){
			input.css('display', 'inline');
		}else{
			input.css('display', 'none')
		}
	});
	$('#J_fix_submit').on('click', function(){
		cur_submit = {
			selector:'#J_fix_submit',
			cur: $(this)
		}

	});
	$('.J_report_submit').on('click', function(){
		cur_submit = {
			selector:'.J_report_submit',
			cur: $(this)
		}
	});
});