function createEvent(eventName) {
    // Private list of registered users for this event
    const registeredUsers = [];

    // Function to register a user
    function registerUser(username) {
        if (!registeredUsers.includes(username)) {
            registeredUsers.push(username);
            return `${username} registered for ${eventName}.`;
        } else {
            return `${username} is already registered for ${eventName}.`;
        }
    }

    // Function to check registration status
    function checkRegistration(username) {
        return registeredUsers.includes(username); // Return true or false
    }

    // Return the nested functions
    return {
        registerUser,
        checkRegistration
    };
}

// Example Usage with the specified test case
const event = createEvent("JavaScript Conference");
event.registerUser("Alice");
console.log(event.checkRegistration("Alice")); // Expected Result: true
console.log(event.checkRegistration("Bob")); // Expected Result: false
