function show(input){
    document.getElementById("display").value += input;
}
function cls(){
    document.getElementById("display").value="";
}
function cal(){
    var output = eval(document.getElementById("display").value);
    document.getElementById("display").value = output;
}function del(){
 let string = document.getElementById("display").value;
 document.getElementById("display").value = string.substring(0,string.length-1);
}