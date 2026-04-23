import * as R from 'ramda';
import data from './ReadFile.js';
//const data = require("./ReadFile");



const traitement_texte =(texte) => {
    texte=texte.toLowerCase();
    texte=texte.replace(/[^\p{L}\s']/gu, " ");
    texte=texte.replace(/\s+/g," ");
    texte = texte.trim(); // gérer les blanc exemple: regarder le premier élément de la liste
    texte = texte.split(" ");
    return texte;

}
const dic_mot_suivant = (texte) => {
    const words = traitement_texte(texte);
    const dictionary = {};

    for (let i = 0; i < words.length - 1; i++) {
        const currentWord = words[i];
        const nextWord = words[i + 1];

        if (!dictionary[currentWord]) {
            dictionary[currentWord] = {};
        }

        if (!dictionary[currentWord][nextWord]) {
            dictionary[currentWord][nextWord] = 1;
        } else {
            dictionary[currentWord][nextWord]++;
        }
    }

    return dictionary;
};

const countsToProbabilities = (dictionary) => {
    const probabilities = {};

    for (const word in dictionary) {
        const nextWords = dictionary[word];

        let total = 0;
        for (const nextWord in nextWords) {
            total += nextWords[nextWord];
        }

        probabilities[word] = {};

        for (const nextWord in nextWords) {
            probabilities[word][nextWord] =
                Number((nextWords[nextWord] / total).toFixed(3));
        }
    }

    return probabilities;
};

//console.log(dic_mot_suivant(data));
console.log(countsToProbabilities(dic_mot_suivant(data)));


//https://codepen.io/AWaselnuk/pen/GjEaMo?anon=true&view=pen
//https://github.com/TobiasNickel/js-markov/blob/master/src/markov.js#L33