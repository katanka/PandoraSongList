

var firebaseRef = new Firebase('https://pandoragen.firebaseio.com/');

var me = firebaseRef.push();

var stationRef;
//me.push({name: "testname3", text: "testtext3"});


var lastSong = "";
var lastArtist = "";
var lastStation = "";

window.setInterval(function(){
	run();
},7000);


function run(){
  var songname = getElement("playerBarSong").innerHTML;
  var artistname = getElement("playerBarArtist").innerHTML;
  var stationname = getElement("stationChangeSelectorNoMenu").children[0].innerHTML;

	//console.log( "song: " + songname);
	//console.log( "artist: " + artistname);

  if(songname != lastSong || artistname != lastArtist || stationname != lastStation){
    stationRef = me.child(stationname);
    lastSong = songname;
    lastArtist = artistname;
    lastStation = stationname;
    stationRef.push({song: songname, artist: artistname});
  }

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
