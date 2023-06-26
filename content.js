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

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.method == "changePage") {
            /*let subiecte = document.getElementById('ElevTest2015ListForm:test_input');
            let sub = [ 1];//,15,16,20,21,22,23,25 ];
            for(let k = 0; k < sub.length; k++)*/
            //TODO: sa ciclez prin toate materiile, stiind indecsii (vector cu indecsi)
            {
                /*
                subiecte.click();
                subiecte.selectedIndex = sub[k];
                console.log(subiecte.value);
                subiecte.click();*/

                press_start();
                setTimeout(complet_realizat, 2000);

            }
        }
    }
);