const studenti = [
    {
        nome: 'marco della rovere',
        id: 213,
        grades: 78
    },
    {
        nome: 'paola cortellessa',
        id: 110,
        grades: 96
    },
    {
        nome: 'andrea mantegna',
        id: 250,
        grades: 48
    },
    {
        nome: 'gaia borromini',
        id: 145,
        grades: 74
    },
    {
        nome: 'luigi grimaldello',
        id: 196,
        grades: 68
    },
    {
        nome: 'piero della francesca',
        id: 102,
        grades: 50
    },
    {
        nome: 'francesca da polenta',
        id: 120,
        grades: 84
    }
];
// stampa array di stringhe nomi studente in maiuscolo
const nomiStudenti = studenti.map((element) => element.nome.toUpperCase());
console.log(nomiStudenti)

// stampa array di oggetti 'studente' che hanno un totale di voti superiore a 70
const studentivotomaggioresettanta = studenti.map((element) => {
if (element.grades > 70) {
    console.log(element.nome, element.grades)
}
});

