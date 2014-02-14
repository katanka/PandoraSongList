

var bothloaded = 0;


window.setInterval(function(){
	run();
},7000);


function run(){
	console.log( "song: " + getElement("playerBarSong").innerHTML);
	console.log( "artist: " + getElement("playerBarArtist").innerHTML);

	//console.log(chrome.extension.getViews({type: "popup"})[0].innerHTML);
	//console.log(chrome.extension);
}

function getElement(name){
	return document.getElementsByClassName(name)[0];
}

function test(func) {
    func.apply(this, ['bar']);
  }

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
