var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var usersList = document.getElementById("users");

function addUser() {
    var uName = nameInput.value;
    var uAge = ageInput.value;
    if (uName === "" || uAge === "") {
        return;
    }
    var newUser = {
        name: uName,
        age: uAge
    };
    var allUsers = localStorage.getItem("users");
    var usersArray = [];

    if (allUsers) {
        usersArray = JSON.parse(allUsers);
    }
    usersArray.push(newUser);
    localStorage.setItem("users", JSON.stringify(usersArray));
    nameInput.value = "";
    ageInput.value = "";

    showData();
}

function showData() {
    var data = localStorage.getItem("users");
    var list = [];

    if (data) {
        list = JSON.parse(data);
    }

    var content = "";

    for (var i = 0; i < list.length; i++) {
        content += "<div>" +
            "<p><strong>Name:</strong> " + list[i].name + "</p>" +
            "<p><strong>Age:</strong> " + list[i].age + "</p>" +
            "<hr>" +
            "</div>";
    }
    usersList.innerHTML = content;
}
showData();
