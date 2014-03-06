var curAnchor = window.location.hostname;
console.log('SHCHelper Log: curAnchor = '+curAnchor);
switch(curAnchor){
	case 'www.sears.com':
	case 'sears.com':
		console.log("You're at Sears");
		break;
	case 'staging.ch4.intra.sears.com':
		console.log("You're at Sears Staging");
		break;
	case 'www.kmart.com':
	case 'kmart.com':
		console.log("You're at Kmart");
		break;
	case 'staging.ch4.intra.kmart.com':
		console.log("You're at Kmart Staging");
		break;
}
//console.log('SHCHelper Log: curAnchor = '+document.cookie);
