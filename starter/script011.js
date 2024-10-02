/*****************************
 * 11 - Priorité des opérateurs
 */

// Opérateurs multiples
// 1. Utilisez les opérateurs +, *, et / pour effectuer une opération mathématique complexe. Affichez le résultat.
const calcul = 8+2*2/5;
console.log(calcul);
// Groupement
// 2. Créez une expression mathématique qui nécessite le groupement des opérations. Utilisez des parenthèses pour clarifier l'ordre des opérations. Affichez le résultat.
const calcul2 = (8+2)*(2+3)/5;
console.log(calcul2);
// Affectations multiples
// 3. Déclarez deux variables x et y. Utilisez des affectations multiples pour leur donner des valeurs. Par exemple, x = 5 et y = 10. Affichez les valeurs de x et y.
const x = 5;
const y = 10;
console.log(`x = ${x} et y = ${y}`);

// Autres opérateurs
// 4. Utilisez un opérateur de comparaison (comme >, <, ==, etc.) pour comparer les valeurs de deux variables et affichez le résultat.
const comparaison1 = x===y;
const comparaison2 = x>y;
const comparaison3 = x<y;
console.log(comparaison1, comparaison2, comparaison3);

if (x > y) {
    console.log("X est plus grand que Y");
}

else if (x < y) {
    console.log("X est plus petit que Y");
}

else{
    console.log("X a la même valeur que Y");
}