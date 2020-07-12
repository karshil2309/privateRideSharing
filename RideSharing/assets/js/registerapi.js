// $(document).ready(function () {
//
//    // spinner = document.getElementById('.se-pre-con');
//    //  spinner.style.display = 'none';
//
    $('#survey-form').on('submit', function (event) {
//        event.preventDefault();
//
//        var login_data = {
//            firstName: $('#name').val(),
//            lastName: $$('#lastName').val(),
//            email:$('#email').val(),
//            passwrd:$('#password').val(),
//            dateOfBirth:$('#date').val(),
//            address:$('#textaddress').val(),
//            creditInfo:$('#creditInfo').val(),
//        }
//
//        $.ajax({
//            data: JSON.stringify(login_data),
//            type: 'POST',
//            url: 'http://localhost:8080/RegisterApi/FillRegistrationForm',
//            contentType: "application/json",
//            success: function (data) {
//                // spinner.style.display = 'none';
//                // document.getElementById('add_main_containt').style.opacity = '1';
//                // swal(data.message)
//                sweetAlert('Congratulation!', 'You Reigster  success', 'success', 3000, false);
//                window.location.href="login.html"
//
//            },
//            error: function (xhr, ajaxOptions, thrownError) {
//                // spinner.style.display = 'none';
//                // document.getElementById('add_main_containt').style.opacity = '1';
//                if (xhr.status == 401 | xhr.status == 403) {
//                    swal(xhr.responseJSON.message);
//                } else {
//                    swal("Something Was Wrong ! Please try again ! ");
//                }
//            }
//        });
//      });
//    });
//
//


var settings = {
  "url": "http://localhost:8080/RegisterApi/FillRegistrationForm",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({"firstName":"Jaimin","lastName":"shah","email":"aayush@yahoo.com","passwrd":"shah1234","dateOfBirth":"1999-05-02","address":"Mahavir Society, Vastrapur","creditInfo":52345}),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
});
