'use strict'
function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    // Пиши код ниже этой строки
    const isMatch = password === SAVED_PASSWORD;
  
    // Пиши код выше этой строки
    return isMatch;
  }

  console.log(isValidPassword('mangodab3st'));
  console.log(isValidPassword('jqueryismyjam'));