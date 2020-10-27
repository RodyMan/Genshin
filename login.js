function check(form)
{
	if(form.user.value == "admin" && form.pass.value == "admin")
	{
		 location.replace("home.html")
		
	}
	else{
		alert("Invalid Credentials!")
	}

}