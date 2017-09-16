function validation() {
	var Kopce = document.getElementById('kopce'),
	subject =document.forma.subject,
	name =document.forma.ime,
	email =document.forma.email,
	tekst=document.forma.poraka;
	function forma() {
		Kopce.onclick = function() {
			if (subject.value=="" || name.value=="" ||email.value=="" || tekst.value=="") {
				alert("Ve molime popolnete gi site polinja");
			} else if (document.forma.email.value.indexOf("@")<0) {
				alert("Vnesovte nepravilna email adresa");
			} else {
				alert("Vashata poraka e uspesno ispratena");

				alert("Subject: "+subject.value+ "\n" +
					"Name: "+name.value+ "\n" +
					"Email: "+email.value+ "\n"+
					"Poraka: "+tekst.value+ "\n");

				subject.value="";
				name.value="";
				email.value="";
				tekst.value="";
			}

		}

	}


	forma();
} //End of global();

//Ja cita funkcijata vednas koga ja otvarame stranata
window.onload = function() {
	validation();
}


