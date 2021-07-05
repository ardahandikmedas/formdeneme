function validate(){
    if(document.valForm.fname.value == ""){
        document.getElementById('nameError').style.display = 'block';
        return false;
    }
   
}