**Problem Statement**

While researching a topic , the usual workflow for me is following

1. Search a topic and open at least 10 links
2. Go thorough each web page
3. Select some text and press CTRL+C
4. Switch to Dynalist Tab and press CTRL+V
5. Switch back to web page
6. Redo from Step 3
7. Go through the text and format as necessary

I found this context switching cumbersome and wrote a hacky extension to help me.

The workflow now is

1. Search a topic and open at least 10 links
2. Go through each web page
3. Keep selecting some text and press ALT+A each time
4. Once all the research is done , click extension icon
5. Press CTRL+C
6. Swtich to Dynalist Tab and press CTRL+V
7. Go through the pasted text and format as necessary

**Usage**

Download the extension file in *dist/chromeExtension.crx* and load it in chrome.

Else for safety purposes you can clone the repo and load it in chrome.

1. Go to *More Tools -> Extensions*
2. Click on load unpacked and browse to extracted folder and open it.

If Load unpacked doesnt show, click on Developer mode in right top corner.

**Logic behind the extension**

The extension inserts a content script which stores the selected in *Local Storage* after ALT+A is pressed. 

Once the research is done press the extension icon and press DUMP button, it extracts all the info stored in Local storage. 

Then concatenate each piece of text with new line in between, put them in textarea, focus and select. 

User now has to press CTRL+C once and paste the text by CTRL+V. 

The new line ensures that each piece of information gets assigned a new node in Dynalist. 

Hence context switching has been removed