# Prédicteur de texte par chaînes de Markov

Modèle de prédiction de mots basé sur les chaînes de Markov, entraîné sur un corpus textuel et exporté en JSON.

## Prérequis

- Node.js >= 14
- npm

## Installation

```bash
npm install
```

## Dépendances

| Paquet | Version | Rôle |
|---|---|---|
| `ramda` | ^0.32.0 | Programmation fonctionnelle (pipeline, curry, etc.) |
| `file-system` | ^2.2.2 | Lecture du fichier texte source |
| `@biomejs/biome` | 2.4.8 *(dev)* | Linter / formateur de code |

## Utilisation

Placer le fichier texte source (`.txt`) dans le répertoire du projet, puis lancer :

```bash
npm start
```

Cela exécute `main.js`, qui :
1. Lit le corpus textuel
2. Tokenise et nettoie le texte
3. Construit le modèle de Markov
4. Écrit le dictionnaire de probabilités dans un fichier JSON

## Fonctionnement

Le modèle est construit en plusieurs étapes :

1. **Tokenisation** — le texte est mis en minuscules, débarrassé de la ponctuation et découpé en mots
2. **N-grammes** — une fenêtre glissante de taille `order` extrait les séquences de mots consécutifs
3. **Comptage** — pour chaque mot-clé, on compte les occurrences de chaque mot suivant
4. **Probabilités** — les comptages sont normalisés en probabilités (somme = 1 par entrée)

Le résultat est un dictionnaire de la forme :

```json
{
  "le petit": { "prince": 0.6, "chat": 0.25, "renard": 0.15 },
  "je suis": { "venu": 0.5, "là": 0.3, "seul": 0.2 }
}
```
