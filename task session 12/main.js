courses = ['web', 'java', 'c', 'algorithms', 'data structures']
var userArray = prompt("Enter your course: ")
var index = courses.findIndex(course => course === userArray);
if (index === -1) {
    alert("Invalid course!");
} else {
    alert("Valid course!");
}
