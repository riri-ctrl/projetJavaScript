const data = require("./ReadFile");


const traitement_texte =(texte) => {
    texte=texte.toLowerCase();
    texte=texte.replace(/[^\p{L}\s']/gu, " ");
    texte=texte.replace(/\s+/g," ");
    texte = texte.trim(); // gérer les blanc exemple: regarder le premier élément de la liste
    tokens = texte.split(" ");
    return tokens;

}
const dic_mot_suivant=(texte) => {
    const words = traitement_texte(texte);
    const dictionary = {};

// build the dictionary
    for (let i = 0; i < words.length; i++) {
        const result = dictionary[`${words[i]} `];
        const currentWord = words[i];

        const NextWord = words[i + 1];

        if (NextWord == null) {
            break
        } // end of sample reached
        if (!result) {
            dictionary[`${currentWord} `] = new Array(NextWord);
        } else {
            dictionary[`${currentWord} `] = dictionary[`${currentWord} `].concat(NextWord);
        }
    }
    return dictionary;
}
console.log(dic_mot_suivant(data));
