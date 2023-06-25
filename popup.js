document.addEventListener('DOMContentLoaded', function () {
    var checkButton = document.getElementById('realizat');
    checkButton.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { method: "changePage" }, function (response) {
                if (!chrome.runtime.lastError) {
                    if (response.method == "changePage") {
                        alert(response.text);
                    }
                }
                else {
                    //error
                }
            });
        });
    }, false);
}, false);