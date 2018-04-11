
var SectionControl = function (options) {
    var self = this;

    self.ctx = {
        options: options,
        elems: {
            $root: null,
            $items: null
        }
    };

    self.init()
};

//TODO:  function or object?
SectionControl.prototype = {

    init: function () {
        var self = this;

        self.buildHTML();
        self.initContext();
    },
    buildHTML: function () {
        var self = this,
            elems = self.ctx.elems,
            options = self.ctx.options,
            html = '';

        elems.$root = $('<div class="section"></div>');

        html += '<div class="section-title"><h2>' + options.title + '</h2></div>';
        html += '<ul class="section-items"></ul>';

        //add html into root
        elems.$root.append(html);

        //now lets add it to the end of the DOM body
        $('body').append(elems.$root);
    },
    initContext: function () {
        var self = this,
            elems = self.ctx.elems;

        elems.$items = elems.$root.find('.section-items');
    },
    AddItem: function (key, value) {
        var self = this,
            elems = self.ctx.elems,
            html = '<li><div class="key">' + key + '</div><div class="value">' + value + '</div></li>';

        elems.$items.append(html);
    }
};
