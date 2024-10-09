// Simulated user database
const userDatabase = {
    'admin': '1234',
    'user': 'password'
};

function loginUser(username, password) {
    // Check if the username exists in the database
    const storedPassword = userDatabase[username];

    // Function scope for handling password verification
    if (!storedPassword) {
        return "Username does not exist.";
    }

    if (storedPassword !== password) {
        return "Invalid password.";
    }

    // If the username and password match, return appropriate access message
    if (username === 'admin') {
        return "Admin access granted.";
    } else {
        return "User access granted.";
    }
}

// Example Usage
console.log(loginUser("admin", "1234")); // Expected Result: "Admin access granted."
console.log(loginUser("user", "password")); // Expected Result: "User access granted."
console.log(loginUser("unknownUser", "somePass")); // "Username does not exist."
console.log(loginUser("admin", "wrongPass")); // "Invalid password."
