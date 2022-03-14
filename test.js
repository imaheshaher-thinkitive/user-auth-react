// Right HigerOrder Function in JS


function parentFun(fn) {
    return function () {
        try {
           
            const returnValuFromOriginal = fn.apply(this, arguments);
            return returnValuFromOriginal
            
        } catch (ex) {
           throw new Error(ex)
        }
    };
}

const add = (a,b) => {

    return a+b
}

console.log(parentFun(add)(11,33))

//get/venu/list