function addExpense() {
    var amount = document.getElementById("amount").value;
    var description = document.getElementById("description").value;
    var category = document.getElementById("category").value;

    if (!amount || !description || !category) {
        alert("Please fill in all fields");
        return;
    }

    var expenseList = document.getElementById("expenseList");

    var expenseEntry = document.createElement("div");
    expenseEntry.className = "expense-entry";

    var expenseDetails = document.createElement("p");
    expenseDetails.innerHTML = "<strong>Amount:</strong> " + amount +
        " | <strong>Description:</strong> " + description +
        " | <strong>Category:</strong> " + category;

    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.onclick = function () {
        editExpense(expenseEntry, amount, description, category);
    };

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function () {
        deleteExpense(expenseEntry);
    };

    expenseEntry.appendChild(expenseDetails);
    expenseEntry.appendChild(editButton);
    expenseEntry.appendChild(deleteButton);

    expenseList.appendChild(expenseEntry);

    saveExpenses();

    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
}

function editExpense(expenseEntry, amount, description, category) {
    document.getElementById("amount").value = amount;
    document.getElementById("description").value = description;
    document.getElementById("category").value = category;

    document.getElementById("expenseList").removeChild(expenseEntry);

    saveExpenses();
}

function deleteExpense(expenseEntry) {
    document.getElementById("expenseList").removeChild(expenseEntry);

    saveExpenses();
}

function saveExpenses() {
    var expenseList = document.getElementById("expenseList").innerHTML;
    localStorage.setItem("expenses", expenseList);
}

function loadExpenses() {
    var expenseList = localStorage.getItem("expenses");
    if (expenseList) {
        document.getElementById("expenseList").innerHTML = expenseList;
    }
}