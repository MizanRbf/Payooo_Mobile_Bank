// Transactions
  
document.getElementById('card-6').addEventListener('click', function(event){
  event.preventDefault();
  handleToggle('addmoney-section', 'none');
handleToggle('cashout-section', 'none');
handleToggle('transfer-section', 'none');
handleToggle('bonus-section', 'none');
handleToggle('pay-section', 'none');
handleToggle('history-section', 'block');
handleToggle('latest', 'none');


})