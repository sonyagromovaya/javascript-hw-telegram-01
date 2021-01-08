'use strict'
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    let totalPrice = pricePerDroid * orderedQuantity;
    if(totalPrice > customerCredits){
        message = 'Недостаточно средств на счету!';
    }else{
        customerCredits -= totalPrice;
        message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`
    }
    return message;
  }

  console.log(makeTransaction(3000, 5, 23000));
  console.log(makeTransaction(5000, 10, 8000));