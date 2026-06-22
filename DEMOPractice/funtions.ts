let  globalvar:string="i am global variable"
function exampleFunction():void{
    console.log(globalvar);   
}
exampleFunction()

function someFn(){
    if(true){
        var localvar=1000
        console.log(localvar)
    }
    console.log(localvar);
    
    function nested(){
        console.log(localvar);
        
    }
}
someFn()