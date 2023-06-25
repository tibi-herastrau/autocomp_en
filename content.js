chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "changePage"){
            t = document.body.innerText;
            document.body.innerText = "Text de exemplu";
            sendResponse({text: t, method: "changePage"}); //same as innerText
        }
    }
);