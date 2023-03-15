// Your Script here.
function rot13(str) {
  let decodedStr = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) { // check if it's an uppercase letter
      charCode = ((charCode - 65 + 13) % 26) + 65; // apply the ROT13 shift
    }
    decodedStr += String.fromCharCode(charCode);
  }
  return decodedStr;
}
