
function calculation() {
  // input fields 
  let foodCost = document.getElementById('food-cost').value; 
  let rentCost = document.getElementById('rent-cost').value; 
  let clothCost = document.getElementById('cloth-cost').value; 
  // totalcost 
  let totalCost = Number(foodCost)+ Number(rentCost)+ Number(clothCost);
  // Error handel
  if(isNaN(totalCost) || totalCost < 0){
    return alert('please input valid number')
  }
  // Total Expenses 
  let totalExpenses = document.getElementById('expenses-total');
  totalExpenses.innerText = totalCost;
// Balance
  let incomeValue =document.getElementById('income-value').value;
   let balance = incomeValue - totalCost;
   // Error handel
   if(isNaN(balance) || balance < 0){
    return alert('please input valid number')
  }
// Total Balance 
  let totalBalance = document.getElementById('total-balance');
  totalBalance.innerText = balance;
}
// seaving money part
function saveMoney(){
  let incomeValue =document.getElementById('income-value').value;
  let saveParsent = document.getElementById('save-parsent').value;
  let saveAmount = (incomeValue* saveParsent) / 100 ;
  // seaving Amount
  let saveingAmount = document.getElementById('save-amount');
  saveingAmount.innerText = saveAmount;

  let totalBalance = document.getElementById('total-balance');
  let remainingBalance = totalBalance.innerText - saveingAmount.innerText;
  
  let previousBalance = document.getElementById('rmaining-balance');
  previousBalance.innerText = remainingBalance

}