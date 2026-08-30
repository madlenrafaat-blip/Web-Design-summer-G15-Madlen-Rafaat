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




// task part 2


function looping(startNum,endNum,breakNum,contNum){
    if (startNum==undefined || endNum==undefined || breakNum==undefined || contNum==undefined){
        alert('Enter all numbers')
        
        return;}
    for(var i=startNum; i<=endNum ; i++){
        if(i==contNum){
            
            continue;
            console.log(i)
        }
        if(i==breakNum){
            break;
            console.log(i)
        }
        console.log(i);
    }
    return i;
}
looping(1,10,9,3);



// task part 3

var courses = ["html", "css", "js"];

var newcourse = prompt("Enter a new course:");

if (newcourse === "") {
    alert("You must enter a course");
} else if (courses.includes(newcourse)) {
    alert("course already exists");
} else {
    courses.push(newcourse);
    console.log(courses);
}
