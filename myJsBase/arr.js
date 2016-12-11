 //数组去重
 function removeDuplicatedItem(ar) {
    var ret = [];
    for (var i = 0, j = ar.length; i < j; i++) {
        if (ret.indexOf(ar[i]) === -1) {
             ret.push(ar[i]);
        }
    }
    return ret;
 }
 ////////
 function removeDuplicatedItem2(ar) {
    var tmp = {},
        ret = [];
    for (var i = 0, j = ar.length; i < j; i++) {
        if (!tmp[ar[i]]) {
            tmp[ar[i]] = 1;
            ret.push(ar[i]);
        }
    }
    return ret;
}