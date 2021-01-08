function formatMessage(message, maxLength) {
  let result;
  if(message.length <= maxLength){
    return(message);
  }
  if(message.length > maxLength){
    result = message.slice(0, maxLength);
    return result = result + '...';
  }
}

console.log(formatMessage('Curabitur ligula sapien', 16)); // 'Curabitur ligula...'
console.log(formatMessage('Curabitur ligula sapien', 23)); // 'Curabitur ligula sapien'.