const mainForm = document.getElementById("mainForm");
const displayArea = document.getElementById("displayArea");

mainForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userName = document.getElementById("nameInput").value;
    const userEmail = document.getElementById("emailInput").value;

    const cardDiv = document.createElement("div");
    const nameHeading = document.createElement("h4");
    const emailText = document.createElement("p");

    nameHeading.innerText = userName;
    emailText.innerText = userEmail;

    cardDiv.appendChild(nameHeading);
    cardDiv.appendChild(emailText);

    cardDiv.classList.add("alert", "alert-info", "mt-3");

    displayArea.appendChild(cardDiv);

    mainForm.reset();
});
