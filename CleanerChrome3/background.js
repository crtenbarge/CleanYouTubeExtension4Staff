var x = false;

function disableBrowserAction(){
    chrome.browserAction.setIcon({path:"inactive.png"});
    chrome.browserAction.onClicked.addListener(function(tab) {
		chrome.tabs.executeScript(null, {file: "style2.js"});
	});
}

function enableBrowserAction(){
    chrome.browserAction.setIcon({path:"active.png"});
    chrome.browserAction.onClicked.addListener(function(tab) {
		chrome.tabs.executeScript(null, {file: "style2OFF.js"});
	});
}

function updateState(){
    if(x==false){
        x=true;
        enableBrowserAction();
        sendResponse({disabled: global.disabled});
        return true;
    }else{
        x=false;
        disableBrowserAction();
		sendResponse({disabled: global.disabled});
		return false;
    }
}

chrome.browserAction.onClicked.addListener(updateState);