// https://stackoverflow.com/a/5379408
function getSelectionText() {
    var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
      (activeElTagName == "textarea") || (activeElTagName == "input" &&
      /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
      (typeof activeEl.selectionStart == "number")
    ) {
        text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        text = window.getSelection().toString();
    }
    return text;
}

// The Key to put the copy text in storage is Alt+a
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.altKey && evt.keyCode == 65) {
        const key = Date.now();
        const value = getSelectionText();
        chrome.storage.local.set({ [key] : value}, function() {
            console.log(value);
          });
    }
};