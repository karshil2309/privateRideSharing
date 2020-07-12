
var HttpClient = function() {
this.get = function(aUrl, aCallback) {
var anHttpRequest = new XMLHttpRequest();
anHttpRequest.onreadystatechange = function() {
if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
aCallback(anHttpRequest.responseText);
}
anHttpRequest.open( "GET", aUrl, true );
anHttpRequest.send( null );
}
}
var theurl='http://localhost:8080/RegisterApi/registrationuser/3';
var client = new HttpClient();
client.get(theurl, function(response) {
var response1 = JSON.parse(response);
// alert(response);
document.getElementById("username").innerHTML=response1.firstName+" "+response1.lastName;
document.getElementById("firstName").innerHTML = response1.firstName;
document.getElementById("lastName").innerHTML = response1.lastName;
document.getElementById("email").innerHTML = response1.email;

document.getElementById("dateOfBirth").innerHTML = response1.dateOfBirth;
document.getElementById("address").innerHTML = response1.address;
document.getElementById("creditInfo").innerHTML = response1.creditInfo;

});
