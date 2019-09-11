<<<<<<< HEAD
function add(a) {
    if (a)
        return a;
=======
function add(a, b) {
    if (a && b)
        return a + b;
>>>>>>> 33a0e936c7bd2c62b54e98a7b311766313d488b4
    return 0;
}

exports.add = add