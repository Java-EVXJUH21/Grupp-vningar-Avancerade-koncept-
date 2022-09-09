/*
Skriv ett NodeJS program som simulerar ett användarsystem. Genom att skriva kommandon
i konsolen skall man kunna registrera användare, ta bort användare, lista upp användare,
visa info på specifika användare och logga in och ut. Endast en användare kan vara inloggad
vid en viss tid och man kan bara logga ut med den användaren som man är inloggad som.
*/

/*
> register William TestPassword
Registered user William

> listusers
- William

> info William
William (TestPassword)

> remove TestUser
That user does not exist

> remove William
User William removed
> login William TestPassword
Wrong credentials
> register William password
Registered user William
> login William password
Login successful
> logout user
No such user logged in
> logout William
Logged out successfully*/

let promptSync = require('prompt-sync');
let prompt = promptSync();

class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    validate(username, password) {
        return this.name === username && this.password === password;
    }
}

let users = [];
let loggedUser = null;

while (true) {
    let input = prompt("Skriv något: ");

    let args = input.split(" ");
    if (args.length <= 0) {
        console.log("Try again...");
        continue;
    }

    let command = args[0].toLowerCase();

    if (command === 'register') {
        if (args.length !== 3) {
            console.log("Format: register <username> <password>");
            continue;
        }

        let existing = users.find(user => user.name === args[1]);
        if (existing !== undefined) {
            console.log("There is already a user with that username.");
            continue;
        }

        let user = new User(args[1], args[2]);
        users.push(user);
        console.log("Registered user '" + user.name + "'");
    } else if (command === 'remove') {
        if (args.length !== 2) {
            console.log("Format: remove <username>");
            continue;
        }

        let index = users.findIndex(user => user.name === args[1]);
        if (index === -1) {
            console.log("No such user.");
            continue;
        }

        users.splice(index, 1);
        console.log("Removed user '" + args[1] + "'");
    } else if (command === 'list') {
        for (user of users) {
            console.log("- " + user.name + " : " + user.password);
        }

    }  else if (command === 'info') {
        if (args.length !== 2) {
            console.log("Format: info <username>");
            continue;
        }

        let user = users.find(user => user.name === args[1]);
        if (user === undefined) {
            console.log("No such user.");
            continue;
        }

        console.log("* " + user.name + " : " + user.password);
    } else if (command === 'login') {
        if (args.length !== 3) {
            console.log("Format: login <username> <password>");
            continue;
        }

        if (loggedUser !== null) {
            console.log("A user is already logged in.");
            continue;
        }

        let user = users.find(user => user.validate(args[1], args[2]));
        if (user === undefined) {
            console.log("Wrong credentials.");
            continue;
        }

        loggedUser = user;
        console.log("You have logged in as '" + user.name + "'");
    } else if (command === 'logout') {
        if (loggedUser === null) {
            console.log("No user is logged in currently.");
            continue;
        }

        console.log("You have logged out from '" + loggedUser.name + "'");
        loggedUser = null;
    } else {
        console.log("No such command.");
    }
}