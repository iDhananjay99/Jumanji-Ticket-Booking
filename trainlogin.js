function validate()
{
	var result=true;
	var i =document.getElementsByTagName("input");
	if(i[0].value.length==0)
	{
		alert("Form can't be empty");
		result(false);	
	}
	else
	{
		confirm("Check Your Details Once")
	}
	return(result);
}