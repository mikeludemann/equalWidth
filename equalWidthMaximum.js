function equalWidthMaximum(main, submain) {
    
    'use strict';

    var elements        = $(main).find(submain),
        widths          = [],
        maximumWidth    = null;

    elements.each(function () {
        
        widths.push($(this).width());

        $(this).removeAttr('style');

    });

    maximumWidth = Math.max.apply(null, widths);

    elements.width(maximumWidth);

    return maximumWidth;

}