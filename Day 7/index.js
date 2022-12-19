/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    return str.split('').map( (letter,i) => (i % 2) == 0 ?  letter.toUpperCase() : letter.toLowerCase() ).join('');
    
    /* Another method
    let res = "";
    for (let i = 0; i < str.length; i++) {
        res += i % 2 == 0 ? str.charAt(i).toUpperCase() : str.charAt(i);
    }
    return res;  
    */
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));