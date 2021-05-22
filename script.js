computed=document.getElementById("computed");
computed.style.display="none";
function updateTextInput(val) {
    document.getElementById('result').innerHTML=val+"%"; 
  }
function compute()
{
    principal = document.getElementById("principal").value;
    range = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    range=range/100;
    amount=principal*(1+range*years)
    amount1=amount-principal;
    principal_populate = document.getElementById("principal_populate").innerHTML=principal;
    rate_populate = document.getElementById("rate_populate").innerHTML=range*100;
    amount_populate = document.getElementById("amount_populate").innerHTML=amount1;
    year_populate = document.getElementById("year_populate").innerHTML=parseInt(years)+parseInt(new Date().getFullYear());


    computed.style.display="block";
}
        