// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Write a function that accepts a string representation of a chemical compound and returns a JSON object containing KV pairs where keys are the element symbols and the values are the element counts.

// "H2O" => {"H": 2, "O": 1}
// "C6H12" => {"C": 6, "H": 12}
// "COOH" => {"C": 1, "O": 2, "H": 1}
// "COOC" => { "C":2, "O":2 }
// */

function getObject(str) {
  let obj = {};
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      if (arr[i] in obj) {
        obj[arr[i]] = 1 + obj[arr[i]];
      } else {
        obj[arr[i]] = 1;
      }
    } else {
      obj[arr[i - 1]] = arr[i];
    }
  }
  return obj;
}

console.log(getObject('COOH'));
console.log(getObject('H2O'));
