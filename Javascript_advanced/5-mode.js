function changeMode(size, weight, transform, background, color)
{
    if (typeof size != "number")
        throw new TypeError("size doit être un number");
    if (typeof weight != "string")
        throw new TypeError("weight doit être un string");
    if (typeof transform != "string")
        throw new TypeError("transform doit être un string");
    if (typeof background != "string")
        throw new TypeError("background doit être un string");
    if (typeof color != "string")
        throw new TypeError("color doit être un string");
    return function() {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main()
{
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    /* Création du paragraphe */
    paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);

    /* Création des boutons */
    spookyBtn = document.createElement("button");
    spookyBtn.textContent = "Spooky";
    spookyBtn.addEventListener("click", spooky);
    document.body.appendChild(spookyBtn);

    darkBtn = document.createElement("button");
    darkBtn.textContent = "Dark mode";
    darkBtn.addEventListener("click", darkMode);
    document.body.appendChild(darkBtn);

    screamBtn = document.createElement("button");
    screamBtn.textContent = "Scream mode";
    screamBtn.addEventListener("click", screamMode);
    document.body.appendChild(screamBtn);
}

main();