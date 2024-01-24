const vips = [
    'Dwayne Johnson',
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin',
  ];

  const listaOspiti = vips.map((vip, index) => {
    return {
        NomeTavolo: 'tavoloVip',
        NomeOspite: `${vip}`,
        PostoOccupato: `${index}`
    }
  });
  console.log(listaOspiti)