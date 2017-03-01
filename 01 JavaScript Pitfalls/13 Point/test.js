function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.dump = function() {
    console.log(this.x + ", " + this.y);
}

function PointEx(x, y, z) {
    Point.call(this, x, y); //super

    this.z = z;
}

PointEx.prototype = Object.create(Point.prototype);

PointEx.prototype.dump = function() {
    Point.prototype.dump.call(this);
    console.log(this.z);
}

var pt1 = new Point(5, 10);
var pt2 = new PointEx(10, 20, 30);

pt1.dump();
pt2.dump();


