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

let sub = [1];//, 15, 16, 20, 21, 22, 23, 25];
function parcurgere(index) {
    //ciclez prin toate materiile, stiind indecsii (vector cu indecsi)
    if(index >= sub.length) return;
    let subiecte = document.getElementById('ElevTest2015ListForm:test_input');
    //subiecte.click();
    subiecte.selectedIndex = sub[index];
    console.log(subiecte.value);

    //Change the ul with li elements
    let tri = document.getElementsByClassName('ui-selectonemenu-trigger');
    tri[1].click(); //triungiul de selectare din dreapta
    
    /*
    let subiecte_ul = document.getElementById('ElevTest2015ListForm:test_items');
    let copii = subiecte_ul.childNodes;
    // console.log(copii);
    copii[index].click();
    // for(let i = 0; i < copii.length; i++){
    //     copii[i];
    // }
    */

    press_start();
    setTimeout(complet_realizat, 2000);

    console.log(index + " " + sub[index]);
    setTimeout(parcurgere, 1000, index+1);

}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.method == "changePage") {
            parcurgere(0);
        }
    }
);