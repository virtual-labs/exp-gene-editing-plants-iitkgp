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
    $('#shownote').modal('show');
    $('.modal-body').text('The sequence information of the desired gene is very crucial for the designing of guide RNA sequences. These guide RNAs redirect the Cas9 protein towards the desired gene and results in the cleavage of the gene.');

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
    $('#shownote').modal('show');
    $('.modal-body').text('A CRISPR plasmid containing the codon optimised Cas9 sequence is procured. The guide RNAs are designed using the software like CRISPR-P v2.0 or Cas-Offinder from the gene sequence having the maximum on-score and minimum off-score. These designed guide RNAs are then synthesised chemically.');
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
    $('#shownote').modal('show');
    $('.modal-body').text('These chemically synthesised guide RNAs are inserted into the CRISPR-Cas9 plasmid by a series of restriction digestion and ligation reactions. Then the recombinant plasmid was used to transform the plants by electroporation or gene gun methods. The putative transgenic plants were screened by suitable antibiotic selection marker.');
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
    $('#shownote').modal('show');
    $('.modal-body').text('Genomic DNA is isolated from both the wildtype and putative transgenic plant lines, followed by PCR using gene specific primers. If the editing (in-del) is of a large fragment (>100 bp), then there will be a visible difference in the size of bands on the agarose gel');
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
    $('#shownote').modal('show');
    $('.modal-body').text('Let suppose the gene that is being edited is responsible for the production of metabolite 2. If this gene is edited, then the production of the metabolite 2 in the transgenic plant lines will be disrupted. To check this, the metabolite profiling can be done by GC-MS, LC-MS, HPLC, etc. From the shown chromatogram, it is evident that the metabolite 2 is absent in the transformed plant. Hence, the gene is edited');
    document.getElementById("btn12").disabled = true;

}


function hidenotemsg() {
    document.getElementById("shownote").style.display = "none";
    document.getElementById("shownote").classList.remove("show");

}
