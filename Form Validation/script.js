function isEmail(email) {

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);       // returns true or false

}

$("#submitButton").click(function() {

    var errorMessage = "";
    var fieldMissing = "";

    if($("#email").val() == "") {
        fieldMissing += "<br>Email";                   
    }

    if($("#phone").val() == "") {
        fieldMissing += "<br>Telephone";                    
    }

    if($("#password").val() == "") {
        fieldMissing += "<br>Password";                 
    }

    if($("#passwordConfirm").val() == "") {
        fieldMissing += "<br>Confirm Password";
    }

    if(fieldMissing != "") {                   
        errorMessage += "<p>The following field(s) are missing:-" + fieldMissing;                  
    }

    if (isEmail($("#email").val()) == false) {                   
        errorMessage += "<p>Your email address is not valid</p>";
    }
    
    var phoneNumber = $("#phone").val()

    if ($.isNumeric(phoneNumber) == false)   {                   
        errorMessage += "<p>Your phone number is not valid</p>";                   
    }

    if(phoneNumber.length != 10) {
        errorMessage +=  "<p>Phone number should be 10 digits</p>"
    }

    if ($("#password").val() != $("#passwordConfirm").val()) {                   
        errorMessage += "<p>Your passwords don't match</p>";

    }


    if(errorMessage != ""){
        $("#errorMessage").html(errorMessage);
    } 
    else {
        $("#successMessage").show();
        $("#errorMessage").hide();
    }

});