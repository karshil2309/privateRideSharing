
// $("button").click(function(){
  //
  // var settings = {
    //   "url": "http://localhost:8080/RegisterApi/updateriderinfo",
    //   "method": "PUT",
    //   "timeout": 0,
    //   "headers": {
      //     "Content-Type": "application/json"
      //   },
      //   "data": JSON.stringify({"userid":2,"firstName":"Karshil","lastName":"shah","email":"karshil@yahoo.com","passwrd":"karshi","dateOfBirth":"1999-05-02","address":"Mahavir Society, Vastrapur","creditInfo":52345}),
      // };
      //
      // $.ajax(settings).done(function (response) {
        //   event.preventDefault();
        //   console.log(response);
        //
        //   window.location("#updateprofile")
        // });

});

// $(document).ready(function () {
//
//    // spinner = document.getElementById('.se-pre-con');
//    //  spinner.style.display = 'none';
//
//    $('#search-form').on('submit', function (event) {
//        event.preventDefault();
//        // document.getElementById('add_main_containt').style.opacity = '0.5';
//        // spinner.style.display = 'block';
//        // $(".se-pre-con").fadeOut("fast");;
//
//        var login_data = {
//          passwrd: $('#firstName').val(),
//            email: $('#email').val(),
//            userid:$('#userid').val(),
//        }
//
//        $.ajax({
//            data: JSON.stringify(login_data),
//            type: 'PUT',
//            url: 'http://localhost:8080/RegisterApi/FillRegistrationForm',
//            contentType: "application/json",
//            success: function (data) {
//                // spinner.style.display = 'none';
//                // document.getElementById('add_main_containt').style.opacity = '1';
//                // swal(data.message)
// sweetAlert('Congratulation!', 'You logged in success', 'success', 3000, false);
// window.location.href="profiel1.html"
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
