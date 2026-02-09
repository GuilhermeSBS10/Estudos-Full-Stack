/*
Guilherme Santos tem 22 anos, pesa 100kg
tem 1.80 de altura e seu IMC é de xxxxx
*/

const nome = "Guilherme Santos";
const idade = 22;
const peso = 100;
const alturaEmCm = 1.80;
let imc; // (peso / (altura * altura) 
let anoNascimento;

// imc = peso / (alturaEmCm * alturaEmCm);
// anoNascimento = 2026 - 22;

console.log(`${nome}, tem ${idade}, nasceu no ano de ${2026 - 22}, pesa ${peso}kg, tem ${alturaEmCm} de altura e seu IMC é de ${peso/(alturaEmCm*alturaEmCm)}`)