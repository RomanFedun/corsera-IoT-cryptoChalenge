var planeText = `Burning 'em, if you ain't quick and nimble
I go crazy when I hear a cymbal`;
var charText = [];
var charKey = [];
var key = 'ICE';
var binArrText = [];
var binArrKey = [];
 function decToBin(dec) {
      return ((dec).toString(2)).padStart(8, '0');
    }

function textToDec (item, array) {
  for (i = 0; i < item.length; i++) {
   array.push(item.codePointAt(i));
  }
return array;
}

function makeBinArray (func, string) {
  for (var i = 0; i < func.length; i++) {
    string.push(decToBin(func[i]));
  } return string;
}
makeBinArray(textToDec(planeText, charText), binArrText);
makeBinArray(textToDec(key, charKey), binArrKey);

var encodedBinText = [];

function exOr (binText, binKey, binArray) {
  var k = 0;
  for (var i = 0; i < binText.length; i++) {
    
    var index = '';
    function doExOr () {
      for (var j = 0; j < 8; j++) {

        index += binText[i][j] ^ binKey[k][j];
       
      }
     return index;
    } 
   binArray.push(doExOr());
    k++;
        if (k == 3) {
          k = 0;
        }
  }
   return binArray;
}
exOr (binArrText, binArrKey, encodedBinText);
var result = '';
for (var numer of encodedBinText) {
 result += parseInt(numer, 2).toString(16);
}
result;