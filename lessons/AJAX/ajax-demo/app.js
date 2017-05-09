var country = 'us'

$.ajax({
  url: 'https://restcountries.eu/rest/v1/alpha/' + country,
  success: function logResults(results) {
    console.log(results);
    var callingCode = results.callingCodes[0];
    $.ajax({
      url: 'https://restcountries.eu/rest/v1/callingcode/' + callingCode,
      success: function logResults(results) {
        console.log(results);
      }
    })
  }
})
