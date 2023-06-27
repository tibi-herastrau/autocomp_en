function press_start() {
    let start_button = document.getElementById('ElevTest2015ListForm:createButton');
    if (start_button) start_button.click();
}

function complet_realizat() {
    let collection = document.getElementsByClassName("ui-cell-editor-input");
    for (let i = 0; i < collection.length; i++) {
        let sel = collection[i].firstChild;
        sel.click();
        sel.selectedIndex = 1;
        //console.log(sel.value);
    }

    let tabel = document.getElementById('ElevTest2015ListForm:datalist_data');
    if (tabel) tabel.click(); // last one

    let conf = document.getElementById('ElevTest2015ListForm:datalist:completareTestButton');
    if (conf) conf.click();
}

function nextElev() {
    let bNext = document.getElementById('ElevTest2015ListForm:nextButton');
    bNext.click();
}

function parcurgere_elevi(firstCNP) {
    let currCNP = document.getElementById('ElevTest2015ListForm:cnp').innerText;
    console.log("CNP curent: " + currCNP); // do smth with this student
    press_start();
    setTimeout(complet_realizat, 2000);
    if (currCNP != firstCNP) {
        setTimeout(reapelare, 20000, firstCNP);
    }
    else {
        alert("Am terminat");
    }
}

function reapelare(firstCNP){
    nextElev();
    setTimeout(parcurgere_elevi, 2000, firstCNP);
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.method == "changePage") {
            let firstCNP = document.getElementById('ElevTest2015ListForm:cnp').innerText;
            console.log("Primul: " + firstCNP);

            nextElev();
            setTimeout(parcurgere_elevi, 2000, firstCNP);
            // press_start();
            // setTimeout(complet_realizat, 2000);
        }
    }
);