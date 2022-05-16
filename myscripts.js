
function pole()
{
	var a = document.getElementById("bok").value;
	a=parseFloat(a);
	p=a*a
	document.getElementById("wynik").innerHTML=("Pole wynosi " + p);
	if (a <=0)
	{
		document.getElementById("wynik").innerHTML=("Błąd");
	}
}
function obwod()
{
	var a = document.getElementById("bok").value;
	a=parseFloat(a);
	p=a+a+a+a
	document.getElementById("wynik").innerHTML=("Obwód wynosi " + p);
	if (a <=0)
	{
		document.getElementById("wynik").innerHTML=("Błąd");
	}
}
