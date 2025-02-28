// Cash Out
document.getElementById('cash-btn').addEventListener('click', function(event){
  event.preventDefault();
  const totalMoney = getInnerTextById('total-money');
const cashInputOne = getValueById ('cash-input-1');
const cashInputTwo = getValueById ('cash-input-2');
const cashInputThree = getValueById ('cash-input-3');
const restMoney = totalMoney - cashInputTwo;

if(cashInputTwo > totalMoney){
return;
}

if(cashInputOne.length === 11 && cashInputThree === '1234'){
  setInnerTextByIdAndValue('total-money',restMoney);
  const transactionContainer = document.getElementById('transaction-container');
  const div = document.createElement('div');
  div.style.padding = '10px';
  div.style.border = 'solid';
  div.style.borderColor = '#ddd';
  div.style.backgroundColor = 'white';
  div.style.borderRadius = '8px';
  div.style.marginTop = '10px';
  div.innerText = `cashout ${cashInputTwo} from ${cashInputOne}`;
  
  transactionContainer.appendChild(div);


}
else{
  alert('num or pin invalid')
}
})
