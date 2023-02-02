// Register the service worker
const log = chrome.extension.getBackgroundPage().console.log;
navigator.serviceWorker.register('background.js');

log("lets see");
console.log("Here in background.js - outside registry");


// Add event listener for browserAction clicks
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': "https://streeteasy.com/"}, function(tab) {
    log("sleep now");
    console.log("Here in background.js");
    chrome.windows.create({
      'tabId': tab.id,
      'type': 'popup',
      'width': 500,
      'height': 600,
      'left': 0,
      'top': 0
    });
  });
});