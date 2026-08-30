var degree = prompt(" enter your degree");
if(degree == null){
   alert("please enter your degree");
}
else if (degree==""){
    alert(" please enter your degree");
}    
else if (degree> 100){
    alert("invalid degree");
}
else if (degree >=90 && degree <= 100 ){
    alert("excellent");
}
else if( degree >= 80 && degree < 90){
    alert("very good");
}
else if( degree >= 70 && degree < 80){
    alert("good");
}
else if ( degree < 70) {
    alert("failed");
}
