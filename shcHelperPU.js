document.getElementById("swapUrl").addEventListener("click", function(){
	chrome.tabs.query({active:true},function(tab) {
	    var tempA = document.createElement('a');
	    tempA.href = tab[0].url;
	    switch(tempA.hostname){
			case 'www.sears.com':
			case 'sears.com':
				tempA.hostname='staging.ch4.intra.sears.com';
				break;
			case 'staging.ch4.intra.sears.com':
				tempA.hostname='www.sears.com';
				break;
			case 'www.kmart.com':
			case 'kmart.com':
				tempA.hostname='staging.ch4.intra.kmart.com';
				break;
			case 'staging.ch4.intra.kmart.com':
				tempA.hostname='www.kmart.com';
				break;
	    }
	    chrome.tabs.update({url:tempA.href});
	});
	chrome.runtime.sendMessage({action: "swap_url"}, function(response) {
	  console.log(response.party);
	});
}, false);
