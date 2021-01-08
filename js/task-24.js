'use strict'
function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    if(totalSpent >= 50000){
        discount = GOLD_DISCOUNT;
    }else if(totalSpent >= 20000 && totalSpent < 50000){
        discount = SILVER_DISCOUNT;
    }else if(totalSpent >= 5000 && totalSpent < 20000){
        discount = BRONZE_DISCOUNT;
    }else if(totalSpent < 5000){
        discount = BASE_DISCOUNT;
    }
    return discount;
  }

  console.log(getDiscount(75000)); // 10%
  console.log(getDiscount(18000)); // 2%
  console.log(getDiscount(2000)); // 0%