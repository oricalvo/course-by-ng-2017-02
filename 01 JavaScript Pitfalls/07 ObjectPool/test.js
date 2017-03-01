function test() {
    try {
        var pool = createPool();

        var obj = {id: 1};

        pool.add(obj);
        pool.add(obj);
        pool.add(obj);
        pool.add(obj);

        // var res = pool.get();
        // if (obj != res) {
        //     throw new Error("Unexpected return object");
        // }
        //
        // res = pool.get();
        // if (res) {
        //     throw new Error("Unexpecped non empty object");
        // }

        pool.dump();

        console.log("TEST PASS");
    }
    catch(err) {
        console.log("TEST FAILED: " + err.message);
    }
}

test();
