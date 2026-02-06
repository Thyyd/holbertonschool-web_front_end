function createElement(data)
{
    let paragraphe = document.createElement('p');
    paragraphe.textContent = data;
    document.body.appendChild(paragraphe);
}

function queryWikipedia(callback)
{
    let xhr = new XMLHttpRequest(); // Variable recevant la requête http
    xhr.open(
        'GET',
        'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
    ); // Requête GET
    xhr.onload = function()
    {
        if (xhr.status === 200)
        {
            let response = JSON.parse(xhr.responseText); // Fonction permettant de convertir la réponse de la requête, initialement sous forme d'une chaîne de caractère format JSON, en objet javascript utilisable.

            // Récupération de l'extract
            let pages = response.query.pages; // Récupération de l'objet pages de response
            let pageId = Object.keys(pages)[0]; // Récupération de l'ID de la page pour pouvoir accéder à 'extract'
            let extract = pages[pageId].extract; // Récupération du texte de l'article contenu dans la partie 'extract' de pages

            callback(extract);
        }
    }

    xhr.send();
}

queryWikipedia(createElement);