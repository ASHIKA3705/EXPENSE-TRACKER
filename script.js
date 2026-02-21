let income = 0;
let expense = 0;

function addTransaction() {
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;

  if (!amount || !description || !date) {
    alert("Please fill all fields");
    return;
  }

  const table = document.getElementById("transaction-list");
  const row = document.createElement("tr");

  row.innerHTML = `
        <td>${amount}</td>
        <td>${type}</td>
        <td>${description}</td>
        <td>${date}</td>
        <td><button class="delete-btn" onclick="deleteTransaction(this, ${amount}, '${type}')">Delete</button></td>
    `;

  table.appendChild(row);

  if (type === "Income") {
    income += amount;
  } else {
    expense += amount;
  }

  updateSummary();
  clearFields();
}

function deleteTransaction(button, amount, type) {
  const row = button.parentElement.parentElement;
  row.remove();

  if (type === "Income") {
    income -= amount;
  } else {
    expense -= amount;
  }

  updateSummary();
}

function updateSummary() {
  document.getElementById("income").textContent = income;
  document.getElementById("expense").textContent = expense;
  document.getElementById("balance").textContent = income - expense;
}

function clearFields() {
  document.getElementById("amount").value = "";
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
}
