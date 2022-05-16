
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

function poleP()
{
	var a = document.getElementById("bok1").value;
	var b = document.getElementById("bok2").value;
	a=parseFloat(a);
	b=parseFloat(b);
	p=a*b
	document.getElementById("wynik2").innerHTML=(p);
	if (a <=0 && b <= 0)
	{
		document.getElementById("wynik2").innerHTML=("Błąd");
	}
}
function obwodP()
{
	var a = document.getElementById("bok1").value;
	var b = document.getElementById("bok2").value;
	a=parseFloat(a);
	b=parseFloat(b);
	p=a+b+a+b
	document.getElementById("wynik2").innerHTML=(p);
	if (a <=0 && b <= 0)
	{
		document.getElementById("wynik2").innerHTML=("Błąd");
	}
}
