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
    console.log("Curent: " + currCNP); // do smth with this student

    //Check if already completed
    let collection = document.getElementsByClassName("ui-cell-editor-input");
    if(collection) if(collection[0]) if(collection[0].firstChild) { // verific daca deja a fost completat
        //if(collection[collection.length-1].firstChild.selectedIndex == 1) 
        {
            console.log("Verifica de aici!");
            if (currCNP != firstCNP) {
                setTimeout(reapelare, 2000, firstCNP);
            }
            else {
                console.log("Am terminat");
            }
            return;
        }
    }

    press_start();
    setTimeout(complet_realizat, 2000);
    if (currCNP != firstCNP) {
        setTimeout(reapelare, 25000, firstCNP);
    }
    else {
        console.log("Am terminat");
    }
}

function reapelare(firstCNP){
    nextElev();
    setTimeout(parcurgere_elevi, 2000, firstCNP);
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.method == "realizatCont") {
            let firstCNP = document.getElementById('ElevTest2015ListForm:cnp').innerText;
            console.log("Primul: " + firstCNP);

            nextElev();
            setTimeout(parcurgere_elevi, 2000, firstCNP);
            
        }
        else if(request.method == "realizatUnu"){
            press_start();
            setTimeout(complet_realizat, 2000);
        }
    }
);