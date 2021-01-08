'use strict'
function checkAge(age) {
    let message;
  
    if (age >= 18) { // Дополни эту строку
      message = 'Вы совершеннолетний человек';
    } else {
      message = 'Вы не совершеннолетний человек';
    }
  
    return message;
  }
  
console.log(checkAge(20));
console.log(checkAge(15));