var scores = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
var frames = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

var totalScore = 0;
var currentScore;
var currentFrame = 1;
var autoSwitchFrame = false;

/*
* 
* Loop through table and save scores into (var scores = [])
* Loop back through scores and tally up and finally print into frames
* Once printed, use caching to make edits, since every score and frame score is now saved
* This will make for faster processing time after the first completion of scoresheet
* 
* 
*/

function scoresheetInit() {
	var idx, strH = "", strS = "", strF = "";
	for(idx = 1; idx <= 20; idx++) {
		if(idx > 10) {
			strS += '<td><p id="score' + idx + '">-</p></td>';
		} else {
			strH += '<td id="header' + idx + '" colspan="2"><button onclick="selectFrame(' + idx + ')">' + idx + '</button></td>';
			strS += '<td><p id="score' + idx + '">-</p></td>';
			strF += '<td colspan="2"><h2 id="frame' + idx + '">0</h2></td>';
		}
	}

	document.getElementById("headers").innerHTML = strH;
	document.getElementById("scores").innerHTML = strS;
	document.getElementById("frames").innerHTML = strF;

	selectFrame(1);
}

function addScore(score) {
	updateScoreButtons();

	if(currentScore > 20) {
		autoSwitchFrame = false;
		selectFrame(1);
		currentFrame = 1;
		currentScore = 1;

		scores[0] = score;
	} else if(autoSwitchFrame == false && currentScore % 2 != 0) {
		currentScore = (currentFrame * 2) - 1;
		scores[currentScore-1] = score;

		autoSwitchFrame = false;
	} else if(autoSwitchFrame == false && currentScore % 2 == 0) {
		currentScore = currentFrame * 2;
		scores[currentScore-1] = score;

		autoSwitchFrame = true;
	} else if(autoSwitchFrame == true && currentScore % 2 != 0) {
		currentFrame++;
		selectFrame(currentFrame);

		currentScore = (currentFrame * 2) - 1;
		scores[currentScore-1] = score;
	}

	var ID = "score" + currentScore;
	if(score == 10) { 
		isStrike();
	} else {
		document.getElementById(ID).innerHTML = score;

		for(var idx = 0; idx <= 10; idx++) {
			if(idx + score <= 10) {
				continue;
			} else {
				ID = "" + idx;
				document.getElementById(ID).disabled = true;
			}
		}
	}

	calculateFrameScore(score);
	currentScore++;
}

function updateScoreButtons() {
	var ID;

	for(var idx = 0; idx <= 10; idx++) {
		ID = "" + idx;
		document.getElementById(ID).disabled = false;
	}
}

function calculateFrameScore(score) {
	if(currentScore % 2 == 0) {
		frames[currentFrame-1] = scores[currentScore-2] + score;
	} else {
		frames[currentFrame-1] = scores[currentScore] + score;
	}

	updateFrameScores();
}

function updateFrameScores() {
	var ID;
	for(var idx = 0; idx < frames.length; idx++) {
		ID = "frame" + (idx);
		document.getElementById(ID).innerHTML = frames[idx];
	}
}

function isStrike() {
	currentScore = currentFrame * 2;
	console.log(currentScore);

	updateScoreButtons();
}

function selectFrame(selectedFrame) {
	currentScore = (selectedFrame * 2) - 1;
	autoSwitchFrame = false;
	var ID;

	for(var idx = 1; idx <= 10; idx++) {
		ID = "header" + idx;
		document.getElementById(ID).style.background = "#ffffff";
	}

	currentFrame = selectedFrame;
	ID = "header" + selectedFrame;
	document.getElementById(ID).style.background = "#bad4ff";
}