// Desafio Classificador de nivel de Heroi
let heroi = {
    nome: "Superman",
    xp: 10000
  };
  
  if (heroi.xp < 1000) {
    console.log("O Herói de nome " + heroi.nome +  " está no nível de Ferro " )
  } else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
    console.log("O Herói de nome " + heroi.nome +  " está no nível de Bronze ");
  } else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
    console.log("O Herói de nome " + heroi.nome +  " está no nível de Prata ");
  } else if (heroi.xp >= 6001 && heroi.xp <= 7000) {
    console.log("O Herói de nome " + heroi.nome +  " está no nível de Ouro ");
  } else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
    console.log("O Herói de nome " + heroi.nome +  " está no nível de Platina ");
  } else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
    console.log("O Herói de nome " + heroi.nome +  " está no nível de Ascendente");
  } else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
    console.log("O Herói de nome " + heroi.nome +  " está no nível de Imortal ");
  } else {
    console.log("O Herói de nome " + heroi.nome +  " está no nível de Radiante ");
  }
  