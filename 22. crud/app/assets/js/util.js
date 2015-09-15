(function () {
    var UTIL = {
        getParameterByName: function (name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        },
        constructRange: function (from, to, step) {
            if (!from || from == null) {
                from = 1;
            }
            if (!to || to == null) {
                to = 1;
            }
            if (!step || step == null) {
                step = 1;
            }
            var arrRange = [from];
            while (from <= to) {
                from = from + step;
                if (from <= to) {
                    arrRange.push(from);
                }
            }
            arrRange = arrRange.filter(function (item, pos, self) {
                return self.indexOf(item) == pos;
            });
            return arrRange;
        },

        getParameterByName: function (url, name) {
            url = url || location.href;
            search = '?' + (url.indexOf('?') > -1 ? url.split('?')[1] : '');
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    };

    window.UTIL = window.UTIL || UTIL;
})();