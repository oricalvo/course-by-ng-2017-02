var createPool = (function() {
    var nextId = 1000;

    function generateId() {
        return nextId++;
    }

    function createPool() {
        var map = {};
        var MAGIC_FIELD = "$$XXXXXid";

        function contains(obj) {
            for (var i = 0; i < map.length; i++) {
                if (map[i] == obj) {
                    return true;
                }
            }

            return false;
        }

        return {
            add: function (obj) {
                if (obj.hasOwnProperty(MAGIC_FIELD)) {
                    if (map[obj[MAGIC_FIELD]]) {
                        return;
                    }
                }
                else {
                    obj[MAGIC_FIELD] = generateId();
                }

                map[obj[MAGIC_FIELD]] = obj;
            },

            get: function () {
                if (map.length == 0) {
                    return null;
                }

                for (var key in map) {
                    break;
                }

                var obj = map[key];

                delete map[key];

                return obj;
            },

            dump: function() {
                for(var key in map) {
                    console.log(key + ":", map[key]);
                }
            }
        };
    }

    return createPool;
})();
