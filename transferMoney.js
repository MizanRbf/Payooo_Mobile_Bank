// Transfer Money
document.getElementById('transfer-btn').addEventListener('click', function(event){
  event.preventDefault();
  const totalMoney = getInnerTextById('total-money');
  const transferInputOne = getValueById('transfer-input-1');
  const transferInputTwo = getValueById('transfer-input-2');
  const transferInputThree = getValueById('transfer-input-3');
  const restMoney2 = totalMoney - transferInputTwo;
  if(transferInputOne.length === 11 && transferInputThree === '1234'){
    document.getElementById('total-money').innerText = restMoney2;
  }
  else{
    alert('num or pin invalid')
  }
  
})