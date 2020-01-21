/*
Name: Shiv Palit
Assignment: Restaurant Site 3
Date Created: 1/20/20
Most recent revision: 1/20/20
*/

function clearErrors()
{
    for (var loopCounter = 0; loopCounter < document.forms["contactForm"].elements.length; loopCounter++) 
    {
        if (document.forms["contactForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) 
        {
            document.forms["contactForm"].elements[loopCounter].parentElement.className = "form-group";
        }
    }  
}

function validate()
{
    clearErrors();
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;

    if(name=="" || isNaN(name)==false)
    {
        alert("Please enter your name");
        document.forms["contactForm"]["name"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["name"].focus();
		return false;
    }

    if(email=="")
    {
        alert("Please enter your email");
        document.forms["contactForm"]["email"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["email"].focus();
		return false;
    }

    if(phone=="" ||isNaN(phone))
    {
        alert("Please enter your phone");

        document.forms["contactForm"]["phone"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["phone"].focus();
		return false;
    }

    alert("Thank you for your inquiry! We will be in touch shortly.")
    return false;
}