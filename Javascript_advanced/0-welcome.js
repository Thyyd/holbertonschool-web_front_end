function welcome(firstName, lastName)
{
    if (typeof firstName != "string")
        throw new TypeError("firstName doit être un string");
    if (typeof lastName != "string")
        throw new TypeError("lastName doit être un string");
    let fullName = firstName + " " + lastName;
    function displayFullName(fullName)
    {
        alert("Welcome "+ fullName +"!");
    }
    displayFullName(fullName);
}

welcome('Holberton', 'School');