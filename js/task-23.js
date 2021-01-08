'use strict'
function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Дополни эту строку
  
    return isNotInRange;
  }

  console.log(isNumberNotInRange(10, 30, 20)); // false
  console.log(isNumberNotInRange(40, 60, 70)); //true 