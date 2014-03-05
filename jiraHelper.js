var shcLinkUpdate = {
	curAnchor: null,
	getJiraLinks: function(){
		var allAnchor = document.getElementsByTagName("a"),
		numUpdated = 0;

		for (var x = 0; x < allAnchor.length; x++){
			this.curAnchor = allAnchor[x];
			this.curURL = this.curAnchor.hostname;

			if(this.curURL==="www.sears.com"||this.curURL==="www.kmart.com"||this.curURL==="sears.com"||this.curURL==="kmart.com"||this.curURL==="staging.ch4.intra.sears.com"||this.curURL==="http://staging.ch4.intra.kmart.com/"){
				this.updateLink();
				numUpdated++;
			}
		}

		console.log("SHC Helper Log: " + numUpdated + " anchor tags updated!");
	},
	updateLink: function(){
		this.curAnchor.addEventListener("click",this.linkPopup,false);
	},
	linkPopup: function(evt){
		evt.preventDefault();

		if(document.getElementById("shcHelperPU")){
			document.body.removeChild(document.getElementById("shcHelperPU"));
		}
		var xCoord = evt.pageX,
		yCoord = evt.pageY,
		popUp = document.createElement("div"),
		liveLink = document.createElement("a"),
		stageLink = document.createElement("a");

		popUp.id = "jiraHelperTT";
		popUp.style.left = xCoord+"px";
		popUp.style.top = yCoord+"px";
		liveLink.target = "_blank";
		stageLink.target = "_blank";
		liveLink.appendChild(document.createTextNode("Launch Live"));
		stageLink.appendChild(document.createTextNode("Launch in Staging"));

		if(this.hostname==="sears.com"||this.hostname==="www.sears.com"||this.hostname==="staging.ch4.intra.sears.com"){
			liveLink.href = "http://www.sears.com"+this.pathname+this.search;
			stageLink.href = "http://staging.ch4.intra.sears.com"+this.pathname+this.search;
		}else{
			liveLink.href = "http://www.kmart.com"+this.pathname+this.search;
			stageLink.href = "http://staging.ch4.intra.kmart.com"+this.pathname+this.search;
		}
		popUp.appendChild(stageLink);
		popUp.appendChild(liveLink);

		document.body.appendChild(popUp);

		pu = document.getElementById("shcHelperPU");
		puLinks = pu.getElementsByTagName("a");

		pu.addEventListener("mouseleave", function(){document.body.removeChild(this)}, false);
//		puLinks.addEventListener("click", function(){document.body.removeChild(document.getElementsByClassName("shcHelperPU"))}, false);

		console.log("SHC Helper Log: xCoord = " + xCoord + " yCoord = " + yCoord);
		console.log("SHC Helper Log: liveLink = " + liveLink + " stageLink = " + stageLink);

	}
}

console.log("SHC Helper Log: Jira");

shcLinkUpdate.getJiraLinks();
