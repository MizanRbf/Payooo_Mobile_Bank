// Add Money

document.getElementById('add-btn').addEventListener('click', function(event){
  event.preventDefault();
  const addInputThree = getInputValueById('add-input-3');
  const totalMoney = getInnerTextById('total-money');
  const addInputTwo = getValueById('add-input-2');
  const addInputFour = getValueById('add-input-4');
  const sum = totalMoney + addInputThree;

if(addInputThree < 0){
return;
}


  if(addInputTwo.length === 11 && addInputFour === '1234'){
    setInnerTextByIdAndValue('total-money',sum);
const transactionContainer = document.getElementById('transaction-container');
const selectedBank = document.getElementById('bank').value;
const div = document.createElement('div');
div.classList.add('p-2', 'border', 'border-[#ddd]', 'bg-white', 'rounded-lg', 'mt-3');
// div.style.padding = '10px';
// div.style.border = 'solid';
// div.style.borderColor = '#ddd';
// div.style.backgroundColor = 'white';
// div.style.borderRadius = '8px';
// div.style.marginTop = '10px';
// div.innerText = `added ${addInputThree} from ${addInputTwo}`;

div.innerHTML = `
<h1 class="font-bold">Added money from ${selectedBank}</h1>
<h3>Amount: <span class="font-bold">${addInputThree}</span></h3>
<h2>Account No: <span class="font-bold">${addInputTwo}</span></h2>

`

transactionContainer.appendChild(div);


  }
  else{
    alert('num or password invalid');
  }
})
