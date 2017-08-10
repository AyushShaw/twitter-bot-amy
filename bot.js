console.log("Dear lazy User, tera Bot chal raha");


console.log("Congiguration kar raha hu..");
var Twit = require('twit')


var Tw = new Twit('./config.js')
console.log("configuration done");

// Setting up a user stream (XD lol lazy users)

var stream = T.stream('user');



// follow stream.on :D

stream.on('follow', followed);



function followed(eventMsg) {
  console.log("Koi Tujhe Follow Kiya ");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  console.log(screenName + " ne follow kiya tujhe");

  tweetIt('.@' + screenName + ' Thanks for Following me. What is your Fav Neural Net?');
  
}


// tweetIt function :P

function tweetIt(text) {

	var tweet = {
	  status: text
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
	  if (err) {
	  	console.log("BC , kuch Garbar ho gaya");
	  } else {
	    console.log("Nacho BC, It worked!");
	  }
	}
}

// end of Code ;-;