const valid_color = function (isColor) {
  'use strict';
  let reValue;
  let checkAll = 0;
  if (isColor.length && typeof isColor === 'string') {
    // HEX Color
    if (isColor[0] == '#') {
      let hexCrs = '0123456789abcdefABCDEF';
      isColor = isColor.split(' ').join('').slice(1);
      if (isColor.length == 3 || isColor.length == 6) {
        for (let i = 0; i < isColor.length; i++) (hexCrs.indexOf(isColor[i]) !== -1) ? ++checkAll : --checkAll;
        (checkAll == isColor.length) ? reValue = true : reValue = false;
      } else reValue = false;
    }
    // RGB color
    else if (isColor.slice(0, 3) == 'rgb' || isColor.slice(0, 3) == 'RGB') {
      let rgbCount = [];
      isColor = isColor.split(' ').join('');
      for (let i = 0; i < isColor.length; i++) {
        if (!isNaN(isColor[i]) !== -1) {
          console.log(isColor[i]);
          // console.log(isColor.length-1);
          // console.log(isColor[i]);
          if (isColor[i] > 1 && isColor[i] < 256) {
            ++checkAll;
            rgbCount.push(isColor[i]);
          }
          else --checkAll;
        }
      }
      (checkAll === 3) ? reValue = true : reValue = false;
    }
    return reValue;
  } else return false;
};
console.clear();
// console.log(valid_color("#1afff1"));
console.log(valid_color("rgb (100, 100, 51)"));
console.log(valid_color("#11f"));