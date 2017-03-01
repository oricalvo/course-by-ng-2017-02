function x() {
    function h() {
        this
    }

    return h;
}


var h = x();

h();

var obj = {
    func: h,
}

obj.func();