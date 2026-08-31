courses = ['web', 'java', 'c', 'algorithms', 'data structures']
var userArray = prompt("Enter your course: ")
var index = courses.findIndex(course => course === userArray);
if (index === -1) {
    alert("Invalid course!");
} else {
    alert("Valid course!");
}


// task (bank)

var bankClients = [
    { fullName: "Zein", clientId: 1, currentBalance: 5000 },
    { fullName: "Ahmed", clientId: 2, currentBalance: 3000 },
    { fullName: "Yassin", clientId: 3, currentBalance: 7000 }
];

var addNewUser = () => {
    var userName = prompt("Please enter the user's name:");
    var userId = Number(prompt("Please enter a unique ID:"));
    var userBalance = Number(prompt("Please enter the initial balance:"));

    var checkDuplicate = bankClients.some(client => client.clientId === userId);

    if (checkDuplicate) {
        alert("This ID is already registered!");
    } else {
        bankClients.push({
            fullName: userName,
            clientId: userId,
            currentBalance: userBalance
        });
        alert("New user added successfully.");
    }
};

var updateBalanceById = () => {
    var searchId = Number(prompt("Enter the ID of the user you want to update:"));
    var updatedBalance = Number(prompt("Enter the new balance amount:"));

    var targetUser = bankClients.find(client => client.clientId === searchId);

    if (targetUser) {
        targetUser.currentBalance = updatedBalance;
        alert("Balance has been updated successfully.");
    } else {
        alert("Sorry, user not found.");
    
var transferFunds = () => {
    var senderId = Number(prompt("Enter the sender's ID:"));
    var receiverId = Number(prompt("Enter the receiver's ID:"));
    var transferAmount = Number(prompt("Enter the amount to transfer:"));

    var sender = bankClients.find(client => client.clientId === senderId);
    var receiver = bankClients.find(client => client.clientId === receiverId);

    if (!sender || !receiver) {
        alert("One or both of the user IDs are invalid!");
        return;
    }

    if (sender.currentBalance < transferAmount) {
        alert("Transaction failed: Insufficient balance!");
        return;
    }

    sender.currentBalance -= transferAmount;
    receiver.currentBalance += transferAmount;

    alert("Transfer completed successfully!");
};


var removeUserById = () => {
    var targetId = Number(prompt("Enter the ID of the user you want to delete:"));
    
    var targetIndex = bankClients.findIndex(client => client.clientId === targetId);

    if (targetIndex !== -1) {
        bankClients.splice(targetIndex, 1);
        alert("User removed successfully.");
    } else {
        alert("User not found in the system.");
    }
};
