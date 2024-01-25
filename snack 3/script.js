const bicidacorsa = [
    {
    nome: 'cinelli',
    peso: 6
},
{
    nome: 'colnago',
    peso: 5
},
{
    nome: 'olmo',
    peso: 7
},
{
    nome: 'pistidda',
    peso: 8
}
];

let ipm = bicidacorsa[0].peso
// console.log (ipm)
for(i = 1; i < bicidacorsa.length -1; i ++) {
    if(bicidacorsa[1].peso < ipm) {
        ipm = [i]
    }
};
const {nome, peso} = bicidacorsa[ipm];

console.log(`il nome della bici col peso minore è: ${nome}`,`e pesa: ${peso}`)




 