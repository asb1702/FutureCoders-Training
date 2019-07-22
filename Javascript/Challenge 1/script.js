
function formSubmit(){
	var genderValue = document.querySelector('input[name="gender"]:checked').value;
	var text = "Title: " + document.getElementById("title").value + "\nFirst Name: " + document.getElementById("firstname").value + "  |  Surname: " + document.getElementById("surname").value + "\nJob Title: " + document.getElementById("jobtitle").value + "  |  Email Address: " + document.getElementById ("email").value + "\nCompany Name: " + document.getElementById ("company").value + "  |  Mobile Phone Number: " + document.getElementById("mobilenumber").value + "\nGender: " + genderValue;
	//All text within the confirmation popup ^
	var confirmation = confirm(text); //checks if user entered data correctly
	if (confirmation == true) {
		window.alert("Your information has been saved");
		window.close(); 
	}
}