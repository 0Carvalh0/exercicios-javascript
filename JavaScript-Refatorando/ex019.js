let temp = 28;

if (temp < 15) {
  console.log(`${temp}° está FRIO!`);
} else if (temp >= 15 && temp <= 25) {
  console.log(`${temp}° está AGRADÁVEL!`);
} else if (temp >= 26 && temp <= 35) {
  console.log(`${temp}° está QUENTE!`);
} else {
  console.log(`${temp}° está MUITO QUENTE!`);
}
