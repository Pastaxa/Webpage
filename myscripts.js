
function pole()
{
	var a = document.getElementById("bok").value;
	a=parseFloat(a);
	p=a*a
	document.getElementById("wynik").innerHTML=("Pole wynosi: " + p);
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
	document.getElementById("wynik").innerHTML=("Obwód wynosi: " + p);
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
	document.getElementById("wynik2").innerHTML=("Pole wynosi: "+p);
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
	document.getElementById("wynik2").innerHTML=("Obwód wynosi:"+p);
	if (a <=0 && b <= 0)
	{
		document.getElementById("wynik2").innerHTML=("Błąd");
	}
}

function poleT()
{
	var a = document.getElementById("pod").value;
	var b = document.getElementById("high").value;
	a=parseFloat(a);
	b=parseFloat(b);
	p=0.5*(a*b)
	document.getElementById("wynik3").innerHTML=("Pole wynosi: "+p);
	if (a <=0 && b <= 0)
	{
		document.getElementById("wynik3").innerHTML=("Błąd");
	}
}
function obwodT()
{
	var a = document.getElementById("pod").value;
	var b = document.getElementById("high").value;
	a=parseFloat(a);
	b=parseFloat(b);
	p=3*a
	document.getElementById("wynik3").innerHTML=("Obwód wynosi: "+p);
	if (a <=0 && b <= 0)
	{
		document.getElementById("wynik3").innerHTML=("Błąd");
	}
}


function poleO()
{
	var a = document.getElementById("prom").value;
	a=parseFloat(a);
	p=3.14*a*a
	document.getElementById("wynik4").innerHTML=("Pole wynosi: "+p);
	if (a <=0 && b <= 0)
	{
		document.getElementById("wynik4").innerHTML=("Błąd");
	}
}
function obwodO()
{
	var a = document.getElementById("prom").value;
	a=parseFloat(a);
	p=2*3.14*a
	document.getElementById("wynik4").innerHTML=("Obwód wynosi: "+p);
	if (a <=0 && b <= 0)
	{
		document.getElementById("wynik4").innerHTML=("Błąd");
	}
}