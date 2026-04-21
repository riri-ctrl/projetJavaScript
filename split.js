const data = require("./ReadFile");


const traitement_texte =(texte) => {
    texte=texte.toLowerCase();
    texte=texte.replace(/[^\p{L}\s']/gu, " ");
    texte=texte.replace(/\s+/g," ");
    texte = texte.trim(); // gérer les blanc exemple: regarder le premier élément de la liste
    tokens = texte.split(" ");
    return tokens;

}


console.log("Contenu du fichier :\n", traitement_texte(data));