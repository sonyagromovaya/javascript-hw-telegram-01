'use strict'
function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === 'pro' || subType === 'vip'; 
  
    return canAccessContent;
  }

  console.log(checkIfCanAccessContent('pro'));
  console.log(checkIfCanAccessContent('free'));