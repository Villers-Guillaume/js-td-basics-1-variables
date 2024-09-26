/*****************************
 * 10 - Opérateurs de base
 */

// 1. Déclarez les variables now, ageJohn, ageMark, yearJohn et yearMark, puis affectez aux trois premières les valeurs 2019, 28 et 33.
const now = 2019;
const ageJohn = 28;
const ageMark = 33;
let yearJohn;
let yearMark;

// Opérateurs mathématiques

// 2. Affectez à yearJohn sa date de naissance (en la calculant à partir de l'année courante et de son âge). Faites de même pour yearMark. Ensuite, affichez la date de naissance de John et "Mark est né en …".
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(`John est né en ${yearJohn} et Mark en ${yearMark}`);
// 3. Affichez l'année à laquelle nous serons dans deux ans, le double de l'année et le dixième de l'année.
const year1 = now+2;
const year2 = now*2;
const year3 = now/10;

console.log(year1,year2,year3);
// Opérateurs logiques

// 4. … (Veuillez préciser votre question ou vos actions ici)

// Opérateur typeof
