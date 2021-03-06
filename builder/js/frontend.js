/*
 * 全屏显示图片
 */
jQuery(document).ready(function ($) {
    var applyBreakOut = function () {
        "use strict";
        var $ = jQuery;

        $('.wizhi_column[data-break-out]').each(function () {
            var $row = $(this);//.next();

            if ($row.length == 0) {
                return;
            }

            if (typeof $(this).attr('data-break-out') === 'undefined') {
                return;
            }

            var breakNum = parseInt($(this).attr('data-break-out'));
            if (isNaN(breakNum)) {
                return;
            }

            // 查找需要打破的父级容器
            var $parent = $row.parent();
            for (var i = 0; i < breakNum; i++) {
                if ($parent.is('html')) {
                    break;
                }
                $parent = $parent.parent();
            }

            // 记录默认内外边距
            if (typeof $row.attr('data-orig-margin-left') === 'undefined') {
                $row.attr('data-orig-margin-left', $row.css('marginLeft'));
                $row.attr('data-orig-padding-left', $row.css('paddingLeft'));
                $row.attr('data-orig-margin-right', $row.css('marginRight'));
                $row.attr('data-orig-padding-right', $row.css('paddingRight'));
            } else {
                // we need to do it this way since !important cannot be placed by jQuery
                $row[0].style.removeProperty('margin-left');
                $row[0].style.removeProperty('padding-left');
                $row[0].style.removeProperty('margin-right');
                $row[0].style.removeProperty('padding-right');
                $row[0].style.setProperty('margin-left', $row.attr('data-orig-margin-left'), 'important');
                $row[0].style.setProperty('padding-left', $row.attr('data-orig-padding-left'), 'important');
                $row[0].style.setProperty('margin-right', $row.attr('data-orig-margin-right'), 'important');
                $row[0].style.setProperty('padding-right', $row.attr('data-orig-padding-right'), 'important');
            }

            // 计算尺寸和位置
            var parentWidth = $parent.width() + parseInt($parent.css('paddingLeft')) + parseInt($parent.css('paddingRight'));
            var rowWidth = $row.width() + parseInt($row.css('paddingLeft')) + parseInt($row.css('paddingRight'));

            var left = $row.offset().left - $parent.offset().left;
            var right = ( $parent.offset().left + parentWidth ) - ( $row.offset().left + rowWidth );

            var marginLeft = parseFloat($row.css('marginLeft'));
            var marginRight = parseFloat($row.css('marginRight'));
            var paddingLeft = parseFloat($row.css('paddingLeft'));
            var paddingRight = parseFloat($row.css('paddingRight'));

            marginLeft -= left;
            paddingLeft += left;
            marginRight -= right;
            paddingRight += right;

            // 应用新的内外边距
            $row[0].style.removeProperty('margin-left');
            $row[0].style.removeProperty('padding-left');
            $row[0].style.removeProperty('margin-right');
            $row[0].style.removeProperty('padding-right');
            $row[0].style.setProperty('margin-left', marginLeft + 'px', 'important');
            $row[0].style.setProperty('padding-left', paddingLeft + 'px', 'important');
            $row[0].style.setProperty('margin-right', marginRight + 'px', 'important');
            $row[0].style.setProperty('padding-right', paddingRight + 'px', 'important');

            $row.addClass('broke-out broke-out-' + breakNum);
        });
    };
    $(window).resize(applyBreakOut);
    applyBreakOut();
});


function _gambit_microtime() {
    return ( new Date ).getTime() / 1000;
}