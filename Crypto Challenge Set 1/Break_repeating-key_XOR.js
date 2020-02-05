var encodedText = `HUIfTQsPAh9PE048GmllH0kcDk4TAQsHThsBFkU2AB4BSWQgVB0dQzNTTmVS 
BgBHVBwNRU0HBAxTEjwMHghJGgkRTxRMIRpHKwAFHUdZEQQJAGQmB1MANxYG`;
var charText1 = [];
var charText2 = [];
var charKey = [];
var binArrText1 = [];
var binArrText2 = [];
var binArrKey = [];
var result = [];
var planeTextArr;
var abc;
var sortEvarange = [];
var sortNorm = [];

function ciphertextIntoBlocks (cipher) {
  var avarange = [];
  var normAvarange;

  planeTextArr = cipher.split(' \n');
  for (var m = 0; m < planeTextArr.length; m++) {
console.log(m);
    abc = planeTextArr[m];
    console.log(abc);

    for (var k = 2; k < 40; k++) {
      result = [];
      function toDivide(arr, item, n) {
        var lastIndex;

        for (var i = 0; i < item.length; i++) {
          if ((i + 1) % n == 0) {
            var divide = '';
            lastIndex = i;
            function chooseDivide() {
              var step = n;
                for (var j = 0; j < n; j++) {
                  divide += item[i - (step - 1)];
                  step--;
                }
              return divide;
            }
          arr.push(chooseDivide()); 
         } 
       }
//    if ((arr.length * n) < item.length) {
//      lastArr = item.slice(lastIndex+1);
//      arr.push(lastArr);
//    } 
console.log(arr);
  return arr;
 }
  var res = toDivide(result, abc, k)
// console.log(res);
// console.log(res.length);
       for (var l = 0; l < res.length-1; l += 2) {
       var a = computeHD(res[l], res[l+1]);
       avarange.push(a);
      
     } console.log(avarange);
  var avr = (avarange.reduce((sum, itm) => sum + itm, 0)) / avarange.length;
  normAvarange = avr / k;
  if (avarange != 0) {
    console.log(`avarange value of hamming distance for KEYSIZE ${k} is: ${avr}`);
    console.log(`normAvarange is: ${normAvarange}`);
    sortEvarange.push(avr);
    sortNorm.push(normAvarange);
  }
  avarange = [];
} 
}
}
ciphertextIntoBlocks(encodedText);

// ======================================================================

   function decToBin(dec) {
      return ((dec).toString(2)).padStart(8, '0');
   }

   function textToDec (iten, array) {
// console.log(iten.length);
array = [];
     for (var i = 0; i < iten.length; i++) {
       array.push(iten.codePointAt(i));
       var a = array;
     } 
    return a;
   }
  
 function computeHD (planeText1, planeText2) {
   binArrText1 = [];
   binArrText2 = [];

   function makeBinArray (func, string) {
//      string = [];
     for (var i = 0; i < func.length; i++) {
       string.push(decToBin(func[i]));
     }
     return string;
   }
     
   makeBinArray(textToDec(planeText1, charText1), binArrText1);
   makeBinArray(textToDec(planeText2, charText2), binArrText2);
  
// console.log(binArrText1);
  
   function hammingDistance (binText1, binText2) {
     var count = 0;
     var string1 = binText1.join('');
     var string2 = binText2.join('');
     for (var i = 0; i < string1.length; i++) {
       if (string1[i] != string2[i]) {
         count++;
       }
    }
    return count;
 }
  return hammingDistance(binArrText1, binArrText2);

}

console.log(sortEvarange.sort(compareNumeric));
console.log(sortNorm.sort(compareNumeric));

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
