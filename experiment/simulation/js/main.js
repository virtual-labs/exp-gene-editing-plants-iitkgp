function restartexp() {
    window.location.reload();
}

function showselectedplant() {
    document.getElementById("plantcss").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").setAttribute("onclick", "showgene()");
}

function showgene() {
    document.getElementById("genetobeedited").style.display = "block";
    window.scrollBy(0, 1500);
    
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").setAttribute("onclick", "showdnaseq()");
    
}

function showdnaseq() {
    document.getElementById("DNAseq").style.display = "block";
    window.scrollBy(0, 1500);
    
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn4").setAttribute("onclick", "selectexpgene()");
    
}

function selectexpgene() {
    document.getElementById("plasmid").style.display = "block";
    window.scrollBy(0, 1500);
    
    document.getElementById("btn5").disabled = false;
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn5").setAttribute("onclick", "showdnaseqdata()");
    
}

function showdnaseqdata() {
    document.getElementById("dnaseqdata").style.display = "block";
    window.scrollBy(0, 1500);
    
    document.getElementById("btn6").disabled = false;
    document.getElementById("btn5").disabled = true;
    document.getElementById("btn6").setAttribute("onclick", "showdnamolecules()");
    
}

function showdnamolecules() {
    document.getElementById("dnamolecules").style.display = "block";
    window.scrollBy(0, 1500);
    
    document.getElementById("btn7").disabled = false;
    document.getElementById("btn6").disabled = true;
    document.getElementById("btn7").setAttribute("onclick", "showplasmidred()");
    
}

function showplasmidred() {
    
    document.getElementById("plasmidred").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn8").disabled = false;
    document.getElementById("btn7").disabled = true;
    document.getElementById("btn8").setAttribute("onclick", "btn8click()");
}


function btn8click() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("newplant").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn9").disabled = false;
    document.getElementById("btn8").disabled = true;
    document.getElementById("btn9").setAttribute("onclick", "btn9click()");
}

function btn9click() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "block";
    document.getElementById("twogenomicdna").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn10").disabled = false;
    document.getElementById("btn9").disabled = true;
    document.getElementById("btn10").setAttribute("onclick", "btn10click()");
}

function btn10click() {
    
    document.getElementById("agarosegel").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn11").disabled = false;
    document.getElementById("btn10").disabled = true;
    document.getElementById("btn11").setAttribute("onclick", "btn11click()");
}

function btn11click() {
  document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "block";
    document.getElementById("img22").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn12").disabled = false;
    document.getElementById("btn11").disabled = true;
    document.getElementById("btn12").setAttribute("onclick", "btn12click()");
}

function btn12click() {
    
    document.getElementById("img24").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn13").disabled = false;
    document.getElementById("btn12").disabled = true;
    document.getElementById("btn13").setAttribute("onclick", "btn13click()");
}

function btn13click() {
    
    document.getElementById("img26").style.display = "block";
    window.scrollBy(0, 1500);
    
    document.getElementById("btn12").disabled = true;
   
}
