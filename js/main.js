function onClick(){
	alert("Full Name : "+document.getElementById('firstname').value+document.getElementById('lastname').value);
}

function onKeyDown(){
	var firstName = document.getElementById('firstname'),
		val = firstName.value;

		firstName.value = val + val;
}