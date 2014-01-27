var urlRegex = /([\w]+\.){1}([\w]+\.?)+/,
shcLinkUpdate = {
	getJiraLinks: function(){
		var allAnchor = document.getElementsByTagName("a");

		for (var x = 0; i < allAnchor.length; x++){
			var curURL = urlRegex.exec(allAnchor[x].getAttribute("href"));

			if(curURL==="www.sears.com"||curURL==="www.kmart.com"||curURL==="staging.ch4.intra.sears.com"||curURL==="http://staging.ch4.intra.kmart.com/"){
				this.updateLink(allAnchor[x]);
			}
		}

		console.log("SHC Helper Log: " + filtAnchor.length + " anchor tags updated!");
	},
	updateLink: function(upAnchor){
		upAnchor.addEventListener("click",this.linkPopup,false);
	},
	linkPopup: function(evt){
		evt.preventDefault();

		var xCoord = evt.pageX,
		yCoord = evt.pageY,
		popUp = document.createElement("div"),
		liveLink = document.createElement("a"),
		stageLink = document.createElement("a");

		popUp.setAttribute("class", "shcHelperPU").setAttribute("style", "left: " + xCoord + "px; top: " + yCoord +"px;" );

		if(curURL==="www.sears.com"||curURL==="staging.ch4.intra.sears.com"){
			
		}else{

		}

		liveLink.setAttribute("target", "_blank").setAttribute("href", "left: " + xCoord + "px; top: " + yCoord +"px;" );

		stageLink.setAttribute("target", "_blank").setAttribute("href", "left: " + xCoord + "px; top: " + yCoord +"px;" );
			
		console.log("SHC Helper Log: xCoord = " + xCoord + " yCoord = " + yCoord);
	}
}

document.addEventListener('DOMContentLoaded', function () {
 	shcLinkUpdate.getJiraLinks();
});