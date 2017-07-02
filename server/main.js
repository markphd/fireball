PlayerList = new Mongo.Collection('players');

console.log(PlayerList.find().count());

if (Meteor.isServer) {
	console.log("Running from Server");
}