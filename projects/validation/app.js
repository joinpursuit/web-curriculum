$(function () {

/**
 * Returns true if the argument looks like a valid email address.
 */
function emailAddressIsValid(emailAddress) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(emailAddress);
}

/**
 * Returns true if the argument looks like a valid phone number.
 */
function phoneNumberIsValid(phoneNumber) {
// Your code here.
}

// Your code here.

});
