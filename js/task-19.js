'use strict'
function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
  
    if (password === null) { 
      message =  'Отменено пользователем!';
    } else if (password === ADMIN_PASSWORD) {
      message = 'Добро пожаловать!';
    } else {
      message = 'Доступ запрещен, неверный пароль!';
    }
  
    return message;
  }

  console.log(checkPassword('mangohackzor'));
  console.log(checkPassword(null));