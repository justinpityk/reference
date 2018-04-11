var utils = (function () {

    var _$output = $('#output'),
        _print = function (key, value) {
            var html = '<li><div class="key">' + key + '</div><div class="value">' + value + '</div></li>';
            _$output.append(html);
        },
        _iUoN = function (input) {
            //is Undefined or Null
            return input == null || input == 'undefined' || input == undefined;
        };

    return {
        print: _print,
        iUoN: _iUoN
    }

})();