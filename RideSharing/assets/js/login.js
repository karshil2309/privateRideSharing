$(document).ready(function () {

   // spinner = document.getElementById('.se-pre-con');
   //  spinner.style.display = 'none';

   $('#search-form').on('submit', function (event) {
       event.preventDefault();
       // document.getElementById('add_main_containt').style.opacity = '0.5';
       // spinner.style.display = 'block';
       // $(".se-pre-con").fadeOut("fast");;

       var login_data = {
           email: $('#email').val(),
           passwrd: $('#password').val(),
       }

       $.ajax({
           data: JSON.stringify(login_data),
           type: 'POST',
           url: 'http://localhost:8080/apiCall/login',
           contentType: "application/json",
           success: function (data) {
               // spinner.style.display = 'none';
               // document.getElementById('add_main_containt').style.opacity = '1';
               // swal(data.message)
               sweetAlert('Congratulation!', 'You logged in success', 'success', 3000, false);
               window.location.href="userprofile.html"

           },
           error: function (xhr, ajaxOptions, thrownError) {
               // spinner.style.display = 'none';
               // document.getElementById('add_main_containt').style.opacity = '1';
               if (xhr.status == 401 | xhr.status == 403) {
                   swal(xhr.responseJSON.message);
               } else {
                   swal("Something Was Wrong ! Please try again ! ");
               }
           }
       });
     });
   });



//  function login(){
//  //Creating xhr Object XHR means XMLHttpRequest
//  var xhr = new XMLHttpRequest();
//  // Creating variable URL
//  var Url = "http://localhost:8080/apiCall/login";
//  // taking Data from User
//  var data = JSON.stringify({
//     "email": document.getElementById("email").value,
//     "passwrd": document.getElementById("password").value,
//
//  });
//
//  xhr.withCredentials = true;
//
//  xhr.addEventListener("readystatechange", function() {
//    if(this.readyState === 4) {
//      window.href="userprofile.html";
//    }
//    else{
//      alert("wrong Password");
//    }
//  });
//
//  xhr.open("POST", Url, true);
//  xhr.setRequestHeader("Content-Type", "application/json");
//
//  xhr.send();
// }
