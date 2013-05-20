var socket = io.connect('http://localhost:3000');
$(document).ready(function () {
	// Socket connection establish
	$.post("socket-connect", function(data) {
	
		if (data !== null) {
			socket.emit('connectMe', data);
			getStatistics();
			loadMap();
		} else {
			createCharScripts();
		};
	});
	// Receive messages on shoutbox
	socket.on('msg', function(data) {
		shoutboxCatchMsg(data);
	});

	// Shoutbox on
	shoutboxInterface();

	socket.on('wantYouFight', function(data) {
		attackOrRun(data);
	});
	
	socket.on('players-list', function (data) {
		showPlayers(data);
	});
});


  
  
  
  
   


