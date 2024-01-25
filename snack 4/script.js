const teams = [
    {
        name: 'Team Turtle',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Frog',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Penguin',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Hippopotamus',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Seal',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Crocodile',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Dolphin',
        score: 0,
        foul: 0,
    },
];

//   - modificare il contenuto delle chiavi dell oggetto : score, foul
const scorefoulgenerator = teams.map((element) => {
    //   usare la funzione per i numeri randomici
    return {
        name: element.name,
        score: Math.floor(Math.random() * 10 + 1),
        foul: Math.floor(Math.random() * 20 + 1)
    }
})
console.log(scorefoulgenerator);

// - creare un nuovo array di oggetti contententi nomi e falli subiti
//  - utilizzare il destructuring quindi variabile {} = nome array

const {name, foul } = scorefoulgenerator;

console.log(name, foul);


