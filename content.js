chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "changePage"){
			const tabel = document.getElementById('ElevTest2015ListForm:datalist_data');
            
            const collection = document.getElementsByClassName("ui-cell-editor-input");
            for (let i = 0; i < collection.length; i++) {
				const sel = collection[i].firstChild;
				sel.click();
				sel.selectedIndex = 1;
				tabel.click();
				//console.log(sel.value);
            }
			
			/*const collection2 = document.getElementsByClassName("ui-cell-editor-output");
            for (let i = 0; i < collection2.length; i++) {
                collection2[i].innerText = "Realizată";
			}*/
			const conf = document.getElementById('ElevTest2015ListForm:datalist:completareTestButton');
			conf.click();
        }
    }
);