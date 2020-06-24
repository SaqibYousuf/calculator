function number(num){
    var result = document.getElementById('result')
    result.value += num

}
function clearResult(){
    var result = document.getElementById('result')
    result.value = ""
    
}
function getResult(){
    var result = document.getElementById('result')
    result.value = eval(result.value) 
    

}
function inverse(){
    var result = document.getElementById('result')
    result.value = 1/(result.value)
}
function square(){
    var result = document.getElementById('result')
    result.value = result.value*result.value
}
function squareroot(){
    var result = document.getElementById('result')
    result.value = Math.sqrt(result.value)
}
function module(){
    var result = document.getElementById('result')
    result.value = result.value*100

    
}
function plus_minus(){
    var result = document.getElementById('result')
    result.value = -(result.value)
}
function backspace(){
    var result = document.getElementById('result')
    result.value = result.value.substring(0,result.value.length - 1);
}

document.addEventListener('keydown', logKey);

function logKey(e) {
    console.log(e)
    if(e.keyCode === 13){
       getResult();
        
    }else{

        var a = document.getElementById(e.keyCode)
        if((+a.id) === (+e.keyCode)){
            result.value += a.value
        }
}
}

function percentage(){
    var result = document.getElementById('result')
    result.value = eval(result.value)/100
}


