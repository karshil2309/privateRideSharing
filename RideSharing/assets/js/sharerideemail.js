
$("#ratenow").click(function(){
   var settings = {
  "url": "http://localhost:8080/adminapiCall/shareride",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({"to_address":"karshilsheth@gmail.com","subject":"Ride Share Details","source":"Ahmedabad","destination":"Baroda","dateofride":"2020-05-25","timeofride":"18:34:02","message":"Hi Welcome TO Ride Sharing System. Karshil Shares this ride with you!! :) Happy day"}),
};

$.ajax(settings).done(function (response) {
  alert("Send the mail");
});
});
