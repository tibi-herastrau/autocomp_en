document.addEventListener('DOMContentLoaded', function () {
    var bCont = document.getElementById('realizat_cont');
    bCont.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { method: "realizatCont" }, function (response) {
                if (!chrome.runtime.lastError) {
                    //De fapt nu se primeste nici un mesaj, nu revenim aici - era doar in exemplu
                    if (response.method == "realizatCont") {
                        alert(response.text);
                    }
                }
                else {
                    //error
                }
            });
        });
    }, false);
    var bUnu = document.getElementById('realizat');
    bUnu.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { method: "realizatUnu" }, function (response) {
                
            });
        });
    }, false);
}, false);


chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { method: "realizatUnu" }, function (response) {
        
    });
});