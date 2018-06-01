document.getElementById('dump').addEventListener('click',function(){
    // get all keys in the storage and put them in formatted way in text area
    chrome.storage.local.get( null, function(result) {
        var dump = "";
        Object.keys(result).forEach(function(key,index) { 
            dump = dump + result[key] + '&#13;';
        });
        var textArea = document.getElementById('dumpedText');
        textArea.innerHTML = dump;
        textArea.focus();
        textArea.select();
    });
});

document.getElementById('delete').addEventListener('click',function(){
    chrome.storage.local.clear(function() {
        console.log('deleted all');
    });
});