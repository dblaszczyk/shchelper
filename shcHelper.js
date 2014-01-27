var urlRegex = /([\w]+\.){1}([\w]+\.?)+/,
shcLinkUpdate = {
	getJiraLinks: function(){
		var allAnchor = document.getElementsByTagName("a");

		for (var x = 0; i < allAnchor.length; x++){
			var curURL = urlRegex.exec(allAnchor[x].getAttribute("href"));

			if(curURL==="www.sears.com"||curURL==="www.kmart.com"||curURL==="staging.ch4.intra.sears.com"||curURL==="http://staging.ch4.intra.kmart.com/"){
				updateLink(allAnchor[x]);
			}
		}

		console.log("SHC Helper Log: " + filtAnchor.length + " anchor tags updated!");
	},
	updateLink: function(upAnchor){
		upAnchor.addEventListener("click",linkPopup,false);
	},
	linkPopup: function(evt){
		evt.preventDefault();

		var xCoord = evt.pageX,
		yCoord = evt.pageY;

		
	}
}

document.addEventListener('DOMContentLoaded', function () {
  
});