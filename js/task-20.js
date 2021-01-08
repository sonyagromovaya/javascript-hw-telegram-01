'use strict'
function checkStorage(available, ordered) {
    let message;
    if(ordered === 0){
        message = 'В заказе еще нет товаров'
    }else if(ordered > available){
        message = 'Слишком большой заказ, на складе недостаточно товаров!'
    }else{
        message = 'Заказ оформлен, с вами свяжется менеджер'
    }
    return message;
  }
console.log(checkStorage(100, 50)); // Заказ оформлен
console.log(checkStorage(100, 0)); // В заказе еще нет товаров
console.log(checkStorage(500, 10000)); // Слишком большой заказ