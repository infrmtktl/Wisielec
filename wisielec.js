var haslo = "Nie chwal dnia przed zachodem słońca";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
    if (haslo[i]==" ") haslo1 = haslo + " ";
    else haslo1 = haslo1 + "-";  
}

function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo;
}

window.onload = wypisz_haslo;