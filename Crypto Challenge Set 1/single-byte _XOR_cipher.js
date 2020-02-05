for (var key = 0; key <= 255; key++) {
var b1 = '';
var binKey = '';
var checkNum = '';
var num1 = [];
var num2 = [];
var num = "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736";

var divided = [];
var encodeNum = [];
var decCode = [];

function HexToBin(hex) {
                return (parseInt(hex, 16).toString(2)).padStart(8, '0');
            }

function decToBin (dec) {
  return ((dec).toString(2)).padStart(8, '0');
}

 function toDivide(arr, item, n) {
                for (var i = 0; i < item.length; i++) {
                    if ((i + 1) % n == 0) {
                        var divide = '';

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
                return arr;
            }
toDivide(num1, num, 2).forEach(str => {
                b1 += HexToBin(str)});
binKey = decToBin(key);

toDivide(divided, b1, 8);
for (var i = 0; i < divided.length; i++) {
      var index = '';
  function exOr () {
    for (var j = 0; j < 8; j++) {
	  index += (divided[i][j] ^ binKey[j]);
    }
return index;
  }
encodeNum.push(exOr());
}; 
function binToDec(bin) {

for (i = 0; i < bin.length; i++) { 
decCode.push(parseInt(bin[i], 2));
}
}
binToDec(encodeNum);
var text = '';
for (i = 0; i < decCode.length; i++) {
  text += String.fromCharCode(decCode[i]);
}
console.log(`key: ${key} text: ${text}`);

}
