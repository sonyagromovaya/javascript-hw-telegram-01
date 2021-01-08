function checkForSpam(message) {
    let result;
    // Пиши код ниже этой строки
    const messageCase = message.toLowerCase();
   if(messageCase.includes('spam') || messageCase.includes('sale')){
    return result = true;
   }
   return result = false;
    // Пиши код выше этой строки
    
  }
  console.log(checkForSpam('Latest technology news')); //false
  console.log(checkForSpam('Get best sale offers now!')); //true
  console.log(checkForSpam('Amazing SalE, only tonight!')); // true