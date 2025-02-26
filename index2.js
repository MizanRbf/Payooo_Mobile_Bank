// Add Money

document.getElementById('card-1').addEventListener('click', function(event){
event.preventDefault();
const cashOutSection = document.getElementById('cashout-section');
const addMoneySection = document.getElementById('addmoney-section');
const transferSection = document.getElementById('transfer-section');
const getBonus = document.getElementById('bonus-section');
const payBill = document.getElementById('pay-section');
const historySection = document.getElementById('history-section');
const latestPayment = document.getElementById('latest');
latestPayment.style.display = 'none';
  historySection.style.display = 'none';
  payBill.style.display = 'none';
  getBonus.style.display = 'none';
cashOutSection.style.display = 'none';
transferSection.style.display = 'none';
addMoneySection.style.display = 'block';
})

// Cash Out

document.getElementById('card-2').addEventListener('click', function(event){
  event.preventDefault();
  const cashOutSection = document.getElementById('cashout-section');
  const addMoneySection = document.getElementById('addmoney-section');
  const transferSection = document.getElementById('transfer-section');
  const getBonus = document.getElementById('bonus-section');
  const payBill = document.getElementById('pay-section');
  const historySection = document.getElementById('history-section');
  const latestPayment = document.getElementById('latest');
latestPayment.style.display = 'none';
  historySection.style.display = 'none';
  payBill.style.display = 'none';
  getBonus.style.display = 'none';
  transferSection.style.display = 'none';
  addMoneySection.style.display = 'none';
  cashOutSection.style.display = 'block';
})

// Transfer Money 

document.getElementById('card-3').addEventListener('click', function(event){
  event.preventDefault();
  const cashOutSection = document.getElementById('cashout-section');
  const addMoneySection = document.getElementById('addmoney-section');
  const transferSection = document.getElementById('transfer-section');
  const getBonus = document.getElementById('bonus-section');
  const payBill = document.getElementById('pay-section');
  const historySection = document.getElementById('history-section');
  const latestPayment = document.getElementById('latest');
latestPayment.style.display = 'none';
  historySection.style.display = 'none';
  payBill.style.display = 'none';
  getBonus.style.display = 'none';
  cashOutSection.style.display = 'none';
  addMoneySection.style.display = 'none';
  transferSection.style.display = 'block';
})

// Get Bonus

document.getElementById('card-4').addEventListener('click', function(event){
  event.preventDefault();
  const cashOutSection = document.getElementById('cashout-section');
  const addMoneySection = document.getElementById('addmoney-section');
  const transferSection = document.getElementById('transfer-section');
  const getBonus = document.getElementById('bonus-section');
  const payBill = document.getElementById('pay-section');
  const historySection = document.getElementById('history-section');
  const latestPayment = document.getElementById('latest');
latestPayment.style.display = 'none';
  historySection.style.display = 'none';
  payBill.style.display = 'none';
  getBonus.style.display = 'block';
  cashOutSection.style.display = 'none';
  addMoneySection.style.display = 'none';
  transferSection.style.display = 'none';

})

// Pay Bill

document.getElementById('card-5').addEventListener('click', function(event){
  event.preventDefault();
  const cashOutSection = document.getElementById('cashout-section');
  const addMoneySection = document.getElementById('addmoney-section');
  const transferSection = document.getElementById('transfer-section');
  const getBonus = document.getElementById('bonus-section');
  const payBill = document.getElementById('pay-section');
  const historySection = document.getElementById('history-section');
  const latestPayment = document.getElementById('latest');
latestPayment.style.display = 'none';
  historySection.style.display = 'none';
  payBill.style.display = 'block';
  getBonus.style.display = 'none';
  cashOutSection.style.display = 'none';
  addMoneySection.style.display = 'none';
  transferSection.style.display = 'none';

})

// Transactions

document.getElementById('card-6').addEventListener('click', function(event){
  event.preventDefault();
  const cashOutSection = document.getElementById('cashout-section');
  const addMoneySection = document.getElementById('addmoney-section');
  const transferSection = document.getElementById('transfer-section');
  const getBonus = document.getElementById('bonus-section');
  const payBill = document.getElementById('pay-section');
  const historySection = document.getElementById('history-section');
  const latestPayment = document.getElementById('latest');
latestPayment.style.display = 'none';
  historySection.style.display = 'block';
  payBill.style.display = 'none';
  getBonus.style.display = 'none';
  cashOutSection.style.display = 'none';
  addMoneySection.style.display = 'none';
  transferSection.style.display = 'none';

})

document.getElementById('logout').addEventListener('click', function(event){
  event.preventDefault();
  window.location.href = './index.html';
})

// Add Money

document.getElementById('add-btn').addEventListener('click', function(event){
  event.preventDefault();
  const addInputThree = document.getElementById('add-input-3').value;
  const convertedInputThree = parseInt(addInputThree);
  const totalMoney = document.getElementById('total-money').innerText;
  const convertedTotalMoney = parseInt(totalMoney);
  const addInputTwo = document.getElementById('add-input-2').value;
  const addInputFour = document.getElementById('add-input-4').value;
  const sum = convertedInputThree + convertedTotalMoney;

  if(addInputTwo.length === 11 && addInputFour === '1234'){
    document.getElementById('total-money').innerText = sum;
  }
  else{
    alert('num or password invalid')
  }
})

// Cash Out
document.getElementById('cash-btn').addEventListener('click', function(event){
  event.preventDefault();
const totalMoney = document.getElementById('total-money').innerText;
const cashInputOne = document.getElementById('cash-input-1').value;
const cashInputTwo = document.getElementById('cash-input-2').value;
const cashInputThree = document.getElementById('cash-input-3').value;
const restMoney = totalMoney - cashInputTwo;
if(cashInputOne.length === 11 && cashInputThree === '1234'){
  document.getElementById('total-money').innerText = restMoney;
}
else{
  alert('num or pin invalid')
}
})

// Transfer Money
document.getElementById('transfer-btn').addEventListener('click', function(event){
  event.preventDefault();
  const totalMoney = document.getElementById('total-money').innerText;
  const transferInputOne = document.getElementById('transfer-input-1').value;
  const transferInputTwo = document.getElementById('transfer-input-2').value;
  const transferInputThree = document.getElementById('transfer-input-3').value;
  const restMoney2 = totalMoney - transferInputTwo;
  if(transferInputOne.length === 11 && transferInputThree === '1234'){
    document.getElementById('total-money').innerText = restMoney2;
  }
  else{
    alert('num or pin invalid')
  }
  
})

// Get Bonus
document.getElementById('bonus-btn').addEventListener('click', function(event){
  event.preventDefault();
  alert('bonus');
  
})

// Pay Bill
document.getElementById('pay-btn').addEventListener('click', function(event){
  event.preventDefault();
  alert('bonus');
  
})

// Transaction

document.getElementById('transaction-btn').addEventListener('click', function(event){
  event.preventDefault();

  
})