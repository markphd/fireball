PlayerList = new Mongo.Collection('players');

if (Meteor.isClient) {
	console.log("Running from Client");
	Template.leaderboard.player = function () {
		console.log("Player function executed");
	}
}

