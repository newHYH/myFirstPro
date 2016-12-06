//camelCase方法实现
    function camelCase1(str){
        var rdashAlpha = /-([a-z]|[0-9])/ig;
        var rmsPrefix = /-ms-/;
        fcamelCase = function(all,letter){
            console.log((letter+'').toUpperCase())
            return (letter+'').toUpperCase();
        }
        return str.replace(rmsPrefix,'ms-').replace(rdashAlpha,fcamelCase)
    }
    var aa = camelCase1('back-ground');
    console.log(aa)