//backend
var balance = 0;

function BankAccount(name, initialdeposit, ongoingdeposit, ongoingwithdrawal) {
  this.name = name;
  this.initialdeposit = initialdeposit;
  this.ongoingdeposit = ongoingdeposit;
  this.ongoingwithdrawal = ongoingwithdrawal;
}

BankAccount.prototype.deposit = function(){
  balance+=this.ongoingdeposit;
}

BankAccount.prototype.withdrawal = function(){
  balance-=this.ongoingwithdrawal;
}




//frontend
$(document).ready(function(){
  $("form#newAccount").submit(function(event) {
  event.preventDefault();
    var name1 = $("input#inputName").val();
    var deposit1 = parseInt($("input#inputFirstDep").val());
    var deposit2 = parseInt($("input#ongoingDeposit").val());
    var withdrawal2 = parseInt($("input#ongoingWithdrawal").val());
    var newAccount = new BankAccount(name1, deposit1, deposit2, withdrawal2);

    // initial deposit
    balance = newAccount.initialdeposit;

    // deposit
    newAccount.deposit();

    // withdrawal
    newAccount.withdrawal();

    $("#balance").text(balance);
  });
});
