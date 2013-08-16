/**
 * Detail:
 * User: wb-wangling
 * Date: 13-7-19
 * Time: 下午4:21
 */

KISSY.ready(function(S) {
    var DOM = S.DOM,
        $ = S.all;

    var fixPanel = S.one('#filterbar');
    var start = parseInt(fixPanel.offset().top, 10);

    S.Event.on(window, 'scroll', function() {
        var scrollTop = DOM.scrollTop();

        if (scrollTop >= start) {
            if (!fixPanel.hasClass('filterbar-fix')) {
                fixPanel.addClass('filterbar-fix');
            }
        } else {
            if (fixPanel.hasClass('filterbar-fix')) {
                fixPanel.removeClass('filterbar-fix');
            }
        }
    });

    //初始化分页
    // KISSY.use('brix/gallery/pagination/index', function(S, P) {
    //     var $p = S.one('#J_pagination'),
    //         config;

    //     if (!$p) {
    //         return;
    //     }
    //     try {
    //         config = S.JSON.parse($p.attr('bx-config').replace(/'/g, '"'));
    //     } catch (e) {
    //         S.log('解析json出错');
    //     }
    //     if (typeof config === 'object') {
    //         config.el = $p;
    //     }
    //     new P(config).render();
    //     $('.pagination-pages a').each(function() {
    //         $(this).attr('rel', 'nofollow');
    //     });
    // });
    
    //区间价格
    var timer;
    $('#J_price_from,#J_price_to').on('focus', function() {
        if (timer) {
            clearTimeout(timer);
        }
        $(this).parent().removeClass('normal').addClass('focus');
    }).on('blur', function() {
        var ths = this;
        timer = setTimeout(function() {
            $(ths).parent().removeClass('focus').addClass('normal');
            clearTimeout(timer);
        }, 200);
    });
    $('#J_price_to').on('keyup', function(e){
        if(e.keyCode == 13){
            $('#J_price_yes').fire('click');
        }
    });
    $('#J_price_yes').on('click', function() {
        location.href = $(this).attr('href').replace('start_price=', 'start_price=' + $('#J_price_from').val())
            .replace('end_price=', 'end_price=' + $('#J_price_to').val());
        return false;
    });

    //商家筛选
    $('#J_from_area').on('mouseenter', function() {
        $(this).addClass('menu-open');
    }).on('mouseleave', function() {
        $(this).removeClass('menu-open');
    });

    //其它筛选
    $('#J_other_filters a').on('click', function(e) {
        var cur = $(e.currentTarget),
            par = cur.parent(),
            chs = par.children(),
            search = window.location.search,
            val = cur.attr('val'),
            name = par.attr('name'),
            reg = new RegExp('(' + name + '=)([^&]*)'),
            nextVal = '';

        if (cur.hasClass('checkbox-checked')) {
            cur.removeClass('checkbox-checked');
        } else {
            cur.addClass('checkbox-checked');
        }
        chs.each(function() {
            var ths = $(this);
            if (ths.hasClass('checkbox-checked')) {
                nextVal += ths.attr('val') + ',';
            }
        });
        nextVal = encodeURIComponent(nextVal.substring(0, nextVal.length - 1));
        if (reg.test(search)) {
            window.location.search = search.replace(reg, '$1' + nextVal);
        } else {
            window.location.search = (search ? (search + '&') : '') + name + '=' + nextVal;
        }
    });
});