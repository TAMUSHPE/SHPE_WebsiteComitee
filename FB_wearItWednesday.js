function subtractDays(myDate,days) {
    return new Date(myDate.getTime() - days*24*60*60*1000);
}
//need to make sure that the status if from that week.
function ContainsArray(time, post_date){
	for (var i = 0; i < time.length; i++) {
		if (time[i].indexOf("0",0) == 0) { 
			time[i]=time[i][1]; time[i]=time[i]+",";
		}

		if (post_date.toLowerCase().indexOf(time[i].toLowerCase()) == -1)
			return false;
	};
	return true;
}
//retrives all posts with hashtags that say wearitwednesday
var tags =document.getElementsByClassName("_58cm");
var keyTags = "wearitwednesday‬";
var wensday = 3; //Date class representation for wednesday
var namesOfPPl=[];
var currentDay = new Date();
//if you subtract to currentDay to the day you want to go bk and time to check who posted you can
var dif = currentDay.getDay() - wensday;
for (var i = tags.length - 1; i >= 0; i--) {
	text=tags[i].innerHTML; //this retrieves whats inside the span such as  "wearitwednesday"
	if (text.toLowerCase().indexOf(keyTags) != -1) //hashtag is keytags
	{
		//gets the mainPost Node
		var tempNode= tags[i].parentNode.parentNode.parentNode.parentNode; 
		var date= tempNode.querySelector("._5pcq abbr").title;
		var newDay = subtractDays(currentDay, dif);
		var day =newDay.toDateString().split(" ");
		if (ContainsArray(day, date)) //day posted was a wendsday
		{
			//looks for the child node with class ("_3dp a") and gets the text which is the name of the user
			//var name=tempNode.querySelector("._3dp a").text	
			var names=[].slice.call(tempNode.querySelectorAll("._3dp a"));
			for (var i = 0; i < names.length; i++) {
				if (names[i].className != undefined)
				if (names[i].className == "profileLink") 
				{
					namesOfPPl.push(names[i].text);
				}
				
			};
	    }
	}
};

console.log("users that posted statuses w/ wearitwednesday")
for (var i = 0; i < namesOfPPl.length; i++) {
	console.log(namesOfPPl[i]);
};
console.log("done");
