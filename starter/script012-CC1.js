/*****************************
 * CODING CHALLENGE 1
 */

// Mark et John veulent comparer leur BMI (Indice de masse corporelle),
// qui est calculé en utilisant la formule :
// BMI = poids / taille^2 = poids / (taille * taille).
// N.B. Le poids est en kg et la taille est en mètres.
//
// 1. Stockez le poids et la taille de Mark et de John dans des variables.
// 2. Calculez le BMI de chacun.
// 3. Créez une variable booléenne qui contient l'information de savoir
//    si le BMI de Mark est plus élevé que celui de John.
// 4. Imprimez une chaîne de caractères dans la console contenant la
//    variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de
//    Mark est plus élevé que celui de John ? true").
//
// BONNE CHANCE 😀
const poidsMark = 80;
const poidsJohn = 100;
const tailleMark = 1.66;
const tailleJohn = 1.86;


const bmiMark = poidsMark / (tailleMark * tailleMark);
const bmiJohn = poidsJohn / Math.pow(tailleJohn, 2);

console.log(`Le BMI de Mark est ${bmiMark}`);
console.log(Le BMI de John est ${bmiJohn}`);
console.log(`Est-ce que le BMI de Mark est plus élévé que celui de John ? ${bmiMark > bmiJohn}`);

if (bmiMark <= 18) {
    console.log("Ton BMI est inférieur ou égal à 18")
} else if (bmiMark <= 25) {
    console.log("Ton BMI est supérieur à 18 mais inférieur ou égal à 25")
} else if (bmiMark <= 35) {
    console.log("Ton BMI est supérieur à 25 mais inférieur ou égal à 35")
} else {
    console.log("Ton BMI est supérieur à 35")
}