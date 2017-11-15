function equalWidth(main, submain) {
    
    'use strict';

    var elements        = $(main).find(submain),
        widths          = [],
        maximumWidth    = null;

    elements.each(function () {

        $(this).removeAttr('style');

        widths.push($(this).width());

    });

    maximumWidth = Math.max.apply(null, widths);

    elements.width(maximumWidth);

    return maximumWidth;

}