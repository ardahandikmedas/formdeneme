function validation() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(fname == ""){
        text = "isim gir";
        error_message.innerHTML = text;
        return false;
    }
    if(lname == ""){
        text = "soyisim gir";
        error_message.innerHTML = text;
        return false;
    }
    if(email == ""){
        text = "email gir";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 10){
        text = "telefon gir";
        error_message.innerHTML = text;
        return false;
    }


}    