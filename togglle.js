// Add Money

document.getElementById('card-1').addEventListener('click', function(event){
  event.preventDefault();
  handleToggle('addmoney-section', 'block');
  handleToggle('cashout-section', 'none');
  handleToggle('transfer-section', 'none');
  handleToggle('bonus-section', 'none');
  handleToggle('pay-section', 'none');
  handleToggle('history-section', 'none');
  handleToggle('latest', 'none');

//   const cashOutSection = document.getElementById('cashout-section');
//   const addMoneySection = document.getElementById('addmoney-section');
//   const transferSection = document.getElementById('transfer-section');
//   const getBonus = document.getElementById('bonus-section');
//   const payBill = document.getElementById('pay-section');
//   const historySection = document.getElementById('history-section');
//   const latestPayment = document.getElementById('latest');
//   latestPayment.style.display = 'none';
//     historySection.style.display = 'none';
//     payBill.style.display = 'none';
//     getBonus.style.display = 'none';
//   cashOutSection.style.display = 'none';
//   transferSection.style.display = 'none';
//   addMoneySection.style.display = 'block';
  })
  
  // Cash Out
  
  document.getElementById('card-2').addEventListener('click', function(event){
    event.preventDefault();
    handleToggle('addmoney-section', 'none');
  handleToggle('cashout-section', 'block');
  handleToggle('transfer-section', 'none');
  handleToggle('bonus-section', 'none');
  handleToggle('pay-section', 'none');
  handleToggle('history-section', 'none');
  handleToggle('latest', 'none');
  //   const cashOutSection = document.getElementById('cashout-section');
  //   const addMoneySection = document.getElementById('addmoney-section');
  //   const transferSection = document.getElementById('transfer-section');
  //   const getBonus = document.getElementById('bonus-section');
  //   const payBill = document.getElementById('pay-section');
  //   const historySection = document.getElementById('history-section');
  //   const latestPayment = document.getElementById('latest');
  // latestPayment.style.display = 'none';
  //   historySection.style.display = 'none';
  //   payBill.style.display = 'none';
  //   getBonus.style.display = 'none';
  //   transferSection.style.display = 'none';
  //   addMoneySection.style.display = 'none';
  //   cashOutSection.style.display = 'block';
  })
  
  // Transfer Money 
  
  document.getElementById('card-3').addEventListener('click', function(event){
    event.preventDefault();
    handleToggle('addmoney-section', 'none');
  handleToggle('cashout-section', 'none');
  handleToggle('transfer-section', 'block');
  handleToggle('bonus-section', 'none');
  handleToggle('pay-section', 'none');
  handleToggle('history-section', 'none');
  handleToggle('latest', 'none');
  //   const cashOutSection = document.getElementById('cashout-section');
  //   const addMoneySection = document.getElementById('addmoney-section');
  //   const transferSection = document.getElementById('transfer-section');
  //   const getBonus = document.getElementById('bonus-section');
  //   const payBill = document.getElementById('pay-section');
  //   const historySection = document.getElementById('history-section');
  //   const latestPayment = document.getElementById('latest');
  // latestPayment.style.display = 'none';
  //   historySection.style.display = 'none';
  //   payBill.style.display = 'none';
  //   getBonus.style.display = 'none';
  //   cashOutSection.style.display = 'none';
  //   addMoneySection.style.display = 'none';
  //   transferSection.style.display = 'block';
  })
  
  // Get Bonus
  
  document.getElementById('card-4').addEventListener('click', function(event){
    event.preventDefault();
    handleToggle('addmoney-section', 'none');
  handleToggle('cashout-section', 'none');
  handleToggle('transfer-section', 'none');
  handleToggle('bonus-section', 'block');
  handleToggle('pay-section', 'none');
  handleToggle('history-section', 'none');
  handleToggle('latest', 'none');
  //   const cashOutSection = document.getElementById('cashout-section');
  //   const addMoneySection = document.getElementById('addmoney-section');
  //   const transferSection = document.getElementById('transfer-section');
  //   const getBonus = document.getElementById('bonus-section');
  //   const payBill = document.getElementById('pay-section');
  //   const historySection = document.getElementById('history-section');
  //   const latestPayment = document.getElementById('latest');
  // latestPayment.style.display = 'none';
  //   historySection.style.display = 'none';
  //   payBill.style.display = 'none';
  //   getBonus.style.display = 'block';
  //   cashOutSection.style.display = 'none';
  //   addMoneySection.style.display = 'none';
  //   transferSection.style.display = 'none';
  
  })
  
  // Pay Bill
  
  document.getElementById('card-5').addEventListener('click', function(event){
    event.preventDefault();
    handleToggle('addmoney-section', 'none');
  handleToggle('cashout-section', 'none');
  handleToggle('transfer-section', 'none');
  handleToggle('bonus-section', 'none');
  handleToggle('pay-section', 'block');
  handleToggle('history-section', 'none');
  handleToggle('latest', 'none');
  //   const cashOutSection = document.getElementById('cashout-section');
  //   const addMoneySection = document.getElementById('addmoney-section');
  //   const transferSection = document.getElementById('transfer-section');
  //   const getBonus = document.getElementById('bonus-section');
  //   const payBill = document.getElementById('pay-section');
  //   const historySection = document.getElementById('history-section');
  //   const latestPayment = document.getElementById('latest');
  // latestPayment.style.display = 'none';
  //   historySection.style.display = 'none';
  //   payBill.style.display = 'block';
  //   getBonus.style.display = 'none';
  //   cashOutSection.style.display = 'none';
  //   addMoneySection.style.display = 'none';
  //   transferSection.style.display = 'none';
  
  })
  
  // Transactions
  
  // document.getElementById('card-6').addEventListener('click', function(event){
  //   event.preventDefault();
  //   handleToggle('addmoney-section', 'none');
  // handleToggle('cashout-section', 'none');
  // handleToggle('transfer-section', 'none');
  // handleToggle('bonus-section', 'none');
  // handleToggle('pay-section', 'none');
  // handleToggle('history-section', 'block');
  // handleToggle('latest', 'none');
  //   const cashOutSection = document.getElementById('cashout-section');
  //   const addMoneySection = document.getElementById('addmoney-section');
  //   const transferSection = document.getElementById('transfer-section');
  //   const getBonus = document.getElementById('bonus-section');
  //   const payBill = document.getElementById('pay-section');
  //   const historySection = document.getElementById('history-section');
  //   const latestPayment = document.getElementById('latest');
  // latestPayment.style.display = 'none';
  //   historySection.style.display = 'block';
  //   payBill.style.display = 'none';
  //   getBonus.style.display = 'none';
  //   cashOutSection.style.display = 'none';
  //   addMoneySection.style.display = 'none';
  //   transferSection.style.display = 'none';
  
  // })
  
  document.getElementById('logout').addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = './index.html';
  })
  