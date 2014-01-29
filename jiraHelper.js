var shcLinkUpdate = {
	curAnchor: null,
	getJiraLinks: function(){
		var allAnchor = document.getElementsByTagName("a");

		for (var x = 0; i < allAnchor.length; x++){
			this.curAnchor = allAnchor[x];
			this.curURL = this.curAnchor.hostname);

			if(this.curURL==="www.sears.com"||this.curURL==="www.kmart.com"||this.curURL==="staging.ch4.intra.sears.com"||this.curURL==="http://staging.ch4.intra.kmart.com/"){
				this.updateLink();
			}
		}

		console.log("SHC Helper Log: " + filtAnchor.length + " anchor tags updated!");
	},
	updateLink: function(){
		this.curAnchor.addEventListener("click",this.linkPopup,false);
	},
	linkPopup: function(evt){
		evt.preventDefault();

		var xCoord = evt.pageX,
		yCoord = evt.pageY,
		popUp = document.createElement("div"),
		liveLink = document.createElement("a"),
		stageLink = document.createElement("a");

		popUp.setAttribute("class", "shcHelperPU").setAttribute("style", "left: " + xCoord + "px; top: " + yCoord +"px;" );

		if(this.curURL==="www.sears.com"||this.curURL==="staging.ch4.intra.sears.com"){
			liveLink.href("http://www.sears.com"+curAnchor.pathname+curAnchor.search);
			stageLink.href("http://staging.ch4.intra.sears.com"+curAnchor.pathname+curAnchor.search);
		}else{
			liveLink.href("http://www.kmart.com"+curAnchor.pathname+curAnchor.search);
			stageLink.href("http://staging.ch4.intra.kmart.com"+curAnchor.pathname+curAnchor.search);
		}

		liveLink.setAttribute("target", "_blank");

		stageLink.setAttribute("target", "_blank");
			
		console.log("SHC Helper Log: xCoord = " + xCoord + " yCoord = " + yCoord);
		console.log("SHC Helper Log: liveLink = " + liveLink + " stageLink = " + stageLink);

		document.body.appendChild(popUp);
	}
}

document.addEventListener('DOMContentLoaded', function () {
 	shcLinkUpdate.getJiraLinks();
});