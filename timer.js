function init() {

var selReset = document.getElementById('reset');
selReset.addEventListener('click', resetCount);

var selStart = document.getElementById('start');
selStart.addEventListener('click', startCount);

var selPause = document.getElementById('pause');
selPause.addEventListener('click', pauseCount);

var seconds = 0;
var timerId;
var active=true;

function updateTime() {
	seconds++;
	document.getElementById('timer').innerHTML = "Time elapsed: "+seconds;
}

function startCount() {
	if(active) {
	timerId = setInterval(updateTime, 1000);
	active=false;
	}
}

function pauseCount() {
	clearInterval(timerId);
	active=true;
}

function resetCount() {
	clearInterval(timerId);
	document.getElementById('timer').innerHTML = "Stop Watch";
	seconds = 0;
}

}

window.addEventListener('load', init);