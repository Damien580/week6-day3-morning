const toRoman = num => {
    const romans = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90, 
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
 result = ''

for (key in romans){
    result += key.repeat(Math.floor(num / romans[key]))
    num %= romans[key]
}
  return result;
}

console.log(toRoman(579))


console.log('================================================')

function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }

  console.log(romanize(59))

  console.log('=====================================================================')
