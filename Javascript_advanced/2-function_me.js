function welcomeMessage(fullName)
{
    if (typeof fullName != "string")
        throw new TypeError("fullName doit être un string");
    return function() {
        alert("Welcome " + fullName);
        // alert("Welcome", fullName) doit aussi marcher.
    };
}

let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");