var toReplace = document.getElementsByTagName("img");

for (var i = 0; i < toReplace.length; i++) {
    var imgURL = chrome.runtime.getURL("images/pepe.png");
    toReplace[i].src = imgURL;
}