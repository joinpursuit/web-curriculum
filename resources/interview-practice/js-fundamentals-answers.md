Functions remember the scope (aka environment) they were created in. In other words, a function has access to the variables and functions within their original scope.

```js

function outer() {
  var name = 'Name';
  var bank_account_number = 129284020192;
  var credit_card_number = 392393092309;
  var current_balance = 1000;


  function getCreditCardNumber() {
    return credit_card_number;
  }

  return {
    getCreditCardNumber: getCreditCardNumber
  }
}
