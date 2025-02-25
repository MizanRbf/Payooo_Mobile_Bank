document.getElementById('login-btn').addEventListener('click', function(event){
event.preventDefault();
const accountNum = document.getElementById('account-num').value;
const pin = document.getElementById('password').value;
if(accountNum.length === 11){
  if(pin === '1234'){
    window.location.href = './index2.html';
  }
  else{
    alert('Invalid Password')
  }
}
else{
  alert('Invalid Account Number')
}
})