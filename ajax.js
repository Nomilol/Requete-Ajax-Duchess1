console.log('Start');
(function(){
	var app = {
		init : function(){
			app.success();
		},
		success : function(){
			var urlServer = window.config.serverUrl + '/filleules.json';
			$.ajax(urlServer)
		}
	}


































	app.init();
})();