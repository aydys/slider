;(function($){
    import "model.js";
    import "view.js";
    function Controller() {
        var model = new Model();
        var view = new View(model);

        
    };

    $.fn.mySlider = function (options) {
        const controller = new Controller('Aidys', 27);
        const settings = $.extend(controller, options);
        return this.css('background-color', 'red');        
    }
})(jQuery);