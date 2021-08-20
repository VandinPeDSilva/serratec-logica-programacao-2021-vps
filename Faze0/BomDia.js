var currentdate = new Date();
var hora = currentdate.getHours();

//console.log(hora);

if ((hora >= 0) & (hora < 4))
    console.log("Boa madrugada! Você não deveria estar dormindo ?");
else if ((hora >= 5) & (hora < 12))
    console.log("Bom dia!");
else if ((hora >= 12) & (hora < 18))
    console.log("Boa tarde!");
else 
    console.log("Boa noite!");
