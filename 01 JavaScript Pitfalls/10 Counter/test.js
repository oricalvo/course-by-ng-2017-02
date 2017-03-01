function Counter() {
    var num = 0;

    function inc() {
        ++num;
    }

    function dec() {
        --num;
    }

    function val() {
        return num;
    }

    function dump() {
        console.log(num);
    }

    function internal() {
    }

    return {
        inc: inc,
        dec: dec,
        val: val,
        dump: dump,
    };
}

// function Counter() {
//     var num = 0;
//
//     return {
//         inc: function () {
//             ++num;
//         },
//
//         dec: function() {
//             --num;
//         },
//
//         val: function() {
//             return num;
//         }
//     };
// }

var c1 = Counter();
c1.inc();

var c2 = Counter();
c2.inc();
c2.inc();

console.log(c1==c2);
console.log(c1.inc==c2.inc);
