// API call using lat and lng to return a timezone.
function getTimeZone(latitude, longitude) {
    $.ajax({
        url: `http://api.geonames.org/timezoneJSON?lat=${latitude}&lng=${longitude}&username=haakasaurus`,
        method: 'GET'
    }).then((response) => {
        console.log(response.timezoneId);
        return(response.timezoneId);
    })
}
