// Global budget variable
let budget = 0;

// Function to add an expense to the global budget
function addExpense(expense) {
    if (typeof expense === 'number' && expense > 0) {
        budget += expense;
        console.log(`Expense of $${expense} added. Total budget is now $${budget}.`);
    } else {
        console.log('Invalid expense amount. Please enter a positive number.');
    }
}

// Function to log individual expense details
function getExpenseDetails(description, cost) {
    const expenseDescription = description; // Local variable
    const expenseCost = cost; // Local variable

    console.log(`Expense Description: ${expenseDescription}, Cost: $${expenseCost}`);
}

// Function to reset the budget to zero
function resetBudget() {
    budget = 0;
    console.log('Budget has been reset to $0.');
}

// Example usage
addExpense(50); // Adds $50 to the budget
getExpenseDetails('Groceries', 50); // Logs: "Expense Description: Groceries, Cost: $50"
addExpense(30); // Adds $30 to the budget
resetBudget(); // Resets the budget to $0
addExpense(20); // Adds $20 to the budget
getExpenseDetails('Utilities', 20); // Logs: "Expense Description: Utilities, Cost: $20"
