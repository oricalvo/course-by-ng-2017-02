var Counter = (function() {
    function Counter() {
        this.num = 0;
    }

    Counter.prototype.inc = function () {
        ++this.num;
    }

    Counter.prototype.dec = function () {
        --this.num;
    }

    Counter.prototype.val = function () {
        return this.num;
    }

    return Counter;
})();

var c1 = new Counter();
c1.inc();

var c2 = new Counter();

console.log(c1.inc == c2.inc);
