const data = require("./ReadFile");


const traitement_texte =(texte) => {
    texte=texte.toLowerCase()
    texte=texte.replace(/[^a-zA-Z0-9éèàôêÏËîçù \n]/g, "")
    texte=texte.replace(/[\n]/g," ")
    return texte

}


console.log("Contenu du fichier :\n", traitement_texte(data));