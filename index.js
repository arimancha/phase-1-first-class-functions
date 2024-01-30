function receivesAFunction(bringBack){
    bringBack()
}

function returnsANamedFunction(){
    return function named(){
        console.log("His name is Ari.")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("He has no name.")
    }
}