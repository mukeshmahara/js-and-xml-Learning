function ValidateEmail(inputText) {
    var mailformat =   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        alert(inputText.value+""+"is valid");
        document.form1.email.focus();
        return true;
    }
    else if(inputText.value == ""){
        alert("Give some input");
        document.form1.email.focus()
        return false;
    }
    else{
        alert(inputText.value +" is an invalid email address");
        document.form1.email.focus()
        return false;

    }
}