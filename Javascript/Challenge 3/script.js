//JSON Event data
var gallerydata = {
	gallerycode: "10203",
	galleryname: "The Halpern",
    exhibitions: [
        {
            exhibition: {
                exhibitionCode: "001",
                exhibitionName: "My Journey So Far",
                exhibitionStart: "2019-01-03T18:00:00.0Z",
                exhibitionEnd: "2019-01-09T13:00:00.0Z",
                artist: "Bryn Williams"

            }
        },
        {
            exhibition: {
				exhibitionCode: "002",
                exhibitionName: "Crete, an Intimate View",
                exhibitionStart: "2019-04-04T10:00:00.0Z",
                exhibitionEnd: "2019-04-17T13:00:00.0Z",
                artist: "Simon Mills"

            }
        },
        {
            exhibition: {
                exhibitionCode: "003",
                exhibitionName: "Nucleus Arts Community Show",
                exhibitionStart: "2019-01-31T18:00:00.0Z",
                exhibitionEnd: "2019-02-24T13:00:00.0Z",
                artist: "Nucleus Arts Community"

            }
        },
        {
           exhibition: {
                exhibitionCode: "004",
                exhibitionName: "Peter and I",
                exhibitionStart: "2019-03-07T10:00:00.0Z",
                exhibitionEnd: "2019-03-20T13:00:00.0Z",
                artist: "Craig Turner and Peter Reeds"

            }
        },
		{
			exhibition: {
                exhibitionCode: "005",
                exhibitionName: "Medway Photo Festival",
                exhibitionStart: "2019-01-17T18:00:00.0Z",
                exhibitionEnd: "2019-01-30T13:00:00.0Z",
                artist: "various"
            }
            }

    ]
};

function popup (exhibition) { 
	exhibition.preventDefault();
	document.getElementById("printHTML").innerHTML = "";
	var timeWindowStart = document.getElementById("date1").value;  //gets the values 
	var timeWindowEnd = document.getElementById("date2").value;  
	timeWindowStart = new Date (timeWindowStart); //converts to date objects
	timeWindowEnd = new Date (timeWindowEnd);
	var totalDiff = 0;
	for (var i = 0; i<=4; i++) { //Loop runs for each event
		//Initializes variables from each event listed in JSON 
		var exhibition = gallerydata.exhibitions[i].exhibition;
		var exhibitionCode = exhibition.exhibitionCode.toString(); 
		var exhibitionName = exhibition.exhibitionName.toString (); 
		var exhibitionStart = exhibition.exhibitionStart; 
		exhibitionStart = new Date (exhibitionStart);
		var exhibitionEnd = exhibition.exhibitionEnd; 
		exhibitionEnd = new Date (exhibitionEnd);
		var artist = exhibition.artist.toString(); 
		
		if (timeWindowStart<exhibitionStart && exhibitionStart<timeWindowEnd) {
			//If the event has not expired
			var node = document.createElement("p");
			node.innerHTML = exhibitionName + ":<br>"  + artist + "<br>" + exhibitionStart.toDateString() + " to " + exhibitionEnd.toDateString();
			document.getElementById("printHTML").appendChild(node);
		}
		else {
			//If the event has expired
			var diff = Math.abs(timeWindowStart - exhibitionEnd)/36e5;
			//36e5 = scientific notation for 60*60*1000 or milliseconds difference into hours
			totalDiff = totalDiff + diff;
			diff = Math.round(diff);
			var node = document.createElement("p");
			node.innerHTML = exhibitionName + ":<br>" + artist + "<br>" + "Expired by " + diff + " hours";
			document.getElementById("printHTML").appendChild(node);
		}
	}
	//calculates the total days and hours of expired events 
	totalDiff = Math.floor(totalDiff); 
	var totalDays = Math.floor(totalDiff/24);
	var totalHours = totalDiff%24; 	
	document.getElementById("totalHours").innerHTML = "Total expired time: " + totalDays + " days and " + totalHours + " hours";
}
