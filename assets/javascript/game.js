var mindPts;
var soulPts;
var powerPts;
var spacePts;
var timePts;
var realityPts;
var targetScore;
var userScore;
var wins = 0;
var losses = 0;

function play(){
	userScore = 0;
	targetScore = (Math.ceil(Math.random()*100));
	$(".target-number").text("Thanos says to get " + targetScore + " points...or else");
	$("#wins").text("Wins: " + wins);
	$("#losses").text("Losses: " + losses);
	$("#score").text(userScore);
	console.log("Target score: " + targetScore);
	mindPts = (Math.ceil(Math.random()*10));
	soulPts = (Math.ceil(Math.random()*10));
	powerPts = (Math.ceil(Math.random()*10));
	spacePts = (Math.ceil(Math.random()*10));
	timePts = (Math.ceil(Math.random()*10));
	realityPts = (Math.ceil(Math.random()*10));

}

function checkScore() {
	if (userScore < targetScore) {
		return true;
	}

	else if (userScore > targetScore) {
		alert("Way too high! Thanos will not be pleased...");
		losses++;
		play();
	}

	else {
		alert("You won! You get to live another day and start a new game!");
		wins++;
		play();
	}
}

$("document").ready(function() {
	play();
		$(".gem").on("click", function() {
			if($(this).hasClass("mind")) {
				userScore += mindPts;
				console.log(userScore);
				$("#score").text(userScore);
				checkScore();
			}

			if($(this).hasClass("soul")) {
				userScore += soulPts;
				console.log(userScore);
				$("#score").text(userScore);
				checkScore();
			}

			if($(this).hasClass("power")) {
				userScore += powerPts;
				console.log(userScore);
				$("#score").text(userScore);
				checkScore();
			}

			if($(this).hasClass("space")) {
				userScore += spacePts;
				console.log(userScore);
				$("#score").text(userScore);
				checkScore();
			}

			if($(this).hasClass("time")) {
				userScore += timePts;
				console.log(userScore);
				$("#score").text(userScore);
				checkScore();
			}

			if($(this).hasClass("reality")) {
				userScore += realityPts;
				console.log(userScore);
				$("#score").text(userScore);
				checkScore();
			}
		});
});

