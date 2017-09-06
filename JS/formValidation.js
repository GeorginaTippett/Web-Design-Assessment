//alert("Hello World!"); this was used to check that this file was linked correctly//

/**$(document).ready(function() {
	alert("Hello again, World!")
});
this was added to create another alert to check that the jQuery was working properly.
commented out because I don't actually want the alert showing on page**/

/*I have redone the JavaScript code to make sure that each of the alerts are showing up now. I also have commented out the link to 
the jQuery in the html , since it think it was causing some problems with my manual code (although I'm not sure about the exact cause)*/

//I have rewritten some of this code to make the functions each have different names, which I hadn't done before//
function validateForm(){
	validateName();
	validateEmail();
	validatePhone();
	validateComment();
}

//to validate the name//
function validateName() {
  var var1 = document.forms["registration"]["name"].value; //var1 is the name for the variable containing the name//
  if (var1 == "") { //this checks that the input field hasn't been left blank//
		alert("please enter your name");
		return true;
  } else {
		return false;
  }
}

//to validate the email//
function validateEmail() {
  var var2 = document.forms["registration"]["email"].value; //var2 is the name for the variable containing the email//
  if (var2 == "") {
    alert("Please enter your email");
    return false;
  } else {
		emailcheck();
		atSignCheck();
  }
}

//to validate the phone number//
function validatePhone() {
  var var3 = document.forms["registration"]["phone"].value; //var3 is the name for the variable containing the email//
  if (var3 == "") {
    alert("Please enter your phone number");
    return false;
  } else {
		phoneCheck();
  }
}

//to validate the comments//
function validateComment() {
  var var4 = document.forms["registration"]["comments"].value; //var4 is the name for the variable containing comments//
  if (var4 == "") {

    alert("Please enter some comments");
    return false;
  } else {
    alert("Thank you for contacting us. We will get in touch with you shortly");
		//they will receive this alert once required fields completed//
  }
}

//to check that the email contains @//
function atSignCheck() {
  if (var2.indexOf("@") != -1) { //this searches the email if it contains the @ symbol//
    return true;
  } else {
    alert("Please enter a valid email address"); //the alert prompt if it doesn't contain the symbol//
    return false;
  }
}

//to check that email contains over 2 characters//
function emailCheck() {
  if ((var2.toString.length) > 2) { //converts the variable containing the email into a string, then the length is calculated//
    return true;
  } else {
    alert("Please enter a valid email address");
  }
}

//to check that the phone contains over 2 numbers//
function phoneCheck() {
  if (var3.toString.length > 2) { //converts the variable containing the phone into a string, then the length is calculated//
    return true;
  } else {
    alert("Please enter a valid phone number");
  }
}
//when I tested this, all alerts are now working individually and checking for contect :) //