//retrives all posts with hashtags that say wearitwednesday
var tags =document.getElementsByClassName("_58cm");
var keyTags = "wearitwednesday‬";
var dayofWeek="wednesday‬";
for (var i = tags.length - 1; i >= 0; i--) {
	text=tags[i].innerHTML; //this retrieves whats inside the span such as  "wearitwednesday"
	if (text.toLowerCase().indexOf(keyTags) != -1) //hashtag is keytags
	{
		//gets the mainPost Node
		var tempNode= tags[i].parentNode.parentNode.parentNode.parentNode; 
		var date= tempNode.querySelector("._5pcq abbr").title;
		if (date.toLowerCase().indexOf(dayofWeek)) //day posted was a wendsday
		{
			//need to make sure that the status if from that week.
			
			//looks for the child node with class ("_3dp a") and gets the text which is the name of the user
			var name=tempNode.querySelector("._3dp a").text						
	    	alert(name);
	    }
	}
};


