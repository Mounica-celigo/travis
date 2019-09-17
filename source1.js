function add(a) {
    if (a)
        return a;
}
function add(a, b) {
    if (a && b)
        return a + b;
    return 0;
}
exports.add = add
