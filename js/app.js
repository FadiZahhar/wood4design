function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateForm() {
    var mainObj = $('#message_form');
    var fullname = $('#fullname');
    var phonenumber = $('#phonenumber');
    var email = $('#email');
    var message = $('#message');
    var flag = true;
    if(fullname.val()=="") {
        fullname.attr('style','border-bottom:1px solid #FF0000');
        flag = false;
    }
    else {
        fullname.attr('style','border-bottom:1px solid #232222');
        flag=true;
    }

    if(phonenumber.val()=="") {
        phonenumber.attr('style','border-bottom:1px solid #FF0000');
        flag = false;
    }
    else {
        phonenumber.attr('style','border-bottom:1px solid #232222');
        flag=true;
    }

    if(email.val()=="") {
        email.attr('style','border-bottom:1px solid #FF0000');
        flag = false;
    }
    else if(!validateEmail(email.val())) {
        email.attr('style','border-bottom:1px solid #FF0000');
        flag = false;
    }
    else {
        email.attr('style','border-bottom:1px solid #232222');
        flag=true;
    }

    if(message.val()=="") {
        message.attr('style','border-bottom:1px solid #FF0000');
        flag = false;
    }
    else {
        message.attr('style','border-bottom:1px solid #232222');
        flag=true;
    }

    return flag;
}


function submitForm(obj) {
    //alert('formsubmited');
    $.ajax({
            // Uncomment the following to send cross-domain cookies:
            //xhrFields: {withCredentials: true},
            url: './form_submit.php',
            type: "POST",
            dataType: 'json',
            data: obj.serialize(),
            success: function(result) {
                    //alert(result.message);
                    obj.attr('style','color:#000');
                    obj.html(result.message);
                    /*setTimeout(function() {
                    // Do something after 5 seconds
                    $('#requestinfo').animate({'bottom': '-=420px'},'slow');
                  }, 3000);*/
                    }
        });
}
