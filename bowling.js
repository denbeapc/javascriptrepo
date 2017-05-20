var scores = [];

var currentScore = 0;
var currentFrame = 0;

var rowOfScores = document.getElementById("scoresheet").rows;
var cells = rowOfScores[1].cells;

function addScore(clicked_id, score) {
	updateScoreButtons();

	var availableScoresToUse = [];
	var ID;

	if(score == 10) {
		// it's a strike



	} else {
		cells[currentScore].innerHTML = score;

		for(var idx = 0; idx <= 10; idx++) {
			if(idx + score <= 10) {
				continue;
			} else {
				ID = "" + idx;
				document.getElementById(ID).hidden = true;
			}
		}
	}

	if(currentScore % 2 != 0 && currentFrame != 10) {
		currentFrame++;
	} else if(currentFrame == 10) {
		currentFrame = 0;
	}

	currentScore++;
}

function selectFrame(selectedFrame) {
	currentFrame = selectedFrame;
	console.log("you selected frame " + currentFrame);
}

function updateScoreButtons() {
	var ID;

	for(var idx = 0; idx <= 10; idx++) {
		ID = "" + idx;
		document.getElementById(ID).hidden = false;
	}
}