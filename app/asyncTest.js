exports.asyncSum= async function (a, b) {
    return await fun(a,b);
}


var fun = async function(a,b){
    return Promise.resolve(a+b);
}