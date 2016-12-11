// 比较简单的push方法
function reduceArray(arr) {
    var reduced = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            reduced.push(arr[i][j]);
        }
    }
    return reduced;
}
// 利用concat方法
function reduceArray(arr) {
    var reduced = [];
    for (var i = 0; i < arr.length; i++){
        reduced = reduced.concat(arr[i]);
    }
    return reduced;
}
// concat+apply实现
// apply方法的第一个参数会作为被调用函数的this值
// apply方法的第二个参数（一个数组，或类数组的对象）会作为被调用对象的arguments值
// 也就是说该数组的各个元素将会依次成为被调用函数的各个参数；
function reduceArray(arr) {
    return Array.prototype.concat.apply([], arr);
}