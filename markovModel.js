import * as R from 'ramda';
import data from './ReadFile.js';
//const data = require("./ReadFile");

const traitementTexte = R.pipe(
    R.toLower,
    R.replace(/[^\p{L}\s']/gu, " "),
    R.replace(/\s+/g, " "),
    R.trim,
    R.split(' '),
    R.filter(Boolean)
);

const toNgrams = R.curry(
    (n, words) => R.aperture(n + 1, words)
);

const getCounts = R.reduce(
    (acc, ngram) => R.over(
            R.lensPath([R.join(' ', R.init(ngram)), R.last(ngram)]),
            R.pipe(R.defaultTo(0), R.inc),
            acc
        ),
    {}
);

const countsToProbs = R.map(
    nextWords => {
        return R.map(count => count / R.sum(R.values(nextWords)), nextWords);
    }
);

const buildModel = (text, order=1) =>
    R.pipe(
        traitementTexte,
        toNgrams(order),
        getCounts,
        countsToProbs
    )(text);

console.log(buildModel(data));