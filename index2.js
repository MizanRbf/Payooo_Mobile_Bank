document.getElementById('add-btn').addEventListener('click', function(event){
event.preventDefault();
const amountAdd = document.getElementById('amount').value;
const convertedAmount = parseInt(amountAdd);
const amountMoney = document.getElementById('amount-money').innerText;
const convertedMoney = parseInt(amountMoney);
const sum = convertedMoney + convertedAmount;
document.getElementById('amount-money').innerText = sum;
})

// Add Money

document.getElementById('card-1').addEventListener('click', function(event){
event.preventDefault();
const cashOutSection = document.getElementById('cashout-section');
const addMoneySection = document.getElementById('addmoney-section');
const transferSection = document.getElementById('transfer-section');
const getBonus = document.getElementById('bonus-section');
const payBill = document.getElementById('pay-section');
const historySection = document.getElementById('history-section');
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