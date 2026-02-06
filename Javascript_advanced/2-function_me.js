function welcomeMessage(fullName)
{
    if (typeof fullName != "string")
        throw new TypeError("fullName doit être un string");
    return function() {
        alert("Welcome " + fullName);
    };
}

let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");


guillaume();
alex();
fred();