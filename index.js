
const raioNegro = "Super Herói";
const xpDoHeroi = 11000;

if (xpDoHeroi >= 0 && xpDoHeroi <= 1000) {
    console.log(`${raioNegro} atingiu ${xpDoHeroi} XP e é de Ferro.`);

} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    console.log(`${raioNegro} atingiu ${xpDoHeroi} XP e é de Bronze.`); 

} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    console.log(`${raioNegro} atingiu ${xpDoHeroi} XP e é de Prata.`);

} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 6000) {
    console.log(`${raioNegro} atingiu ${xpDoHeroi} XP e é de Ouro.`);

} else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
    console.log(`${raioNegro} atingiu ${xpDoHeroi} XP e é de Platina.`);

} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    console.log(`${raioNegro} atingiu ${xpDoHeroi} XP e é de Ascendente.`);

} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    console.log(`${raioNegro} atingiu ${xpDoHeroi} XP e é de Imortal.`);

} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    console,log (`${raioNegro} atingiu ${xpDoHeroi} XP e é de Radiante.`);
}

else {
    console.log(` O Herói ${raioNegro} atingiu ${xpDoHeroi} XP e está em outro nível.`);
}
