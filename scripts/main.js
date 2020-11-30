'use strict';

/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

const palindrome = () => {
    let string = prompt('Ingrese la cadena:');

    // Eliminar caracteres no alfanumericos
    let newString = string.replace(/[\W_]/g, '');
    
    // Convertir todos los caracteres de la cadena de texto a minúscula
    let lowString = newString.toLowerCase();

    // Separar la cadena en caracteres
    let splitString = lowString.split('');

    // Invertimos los elemento9s en el arreglo obtenido
    let reverseString = splitString.reverse();

    // Unimos nuevamente los elemenmtos del arreglo en una cadena 
    let joinString = reverseString.join('');
    // console.log(newString, joinString);

    if (lowString === joinString) {
        // console.log('true');
        alert(`${string}: SÍ es un palíndromo.`);
        return true;
    }
    
        // console.log('false');
        alert(`${string}: NO es un palíndromo.`);
        return false;
}

palindrome();

// palindrome('eye');
// palindrome('_EYE');
// palindrome('race car');
// palindrome('racecar');
// palindrome('RaceCar');
// palindrome('race CAR');
// palindrome('2A3*3a2');
// palindrome('2A3 3a2');
// palindrome('2_A3*3#A2');