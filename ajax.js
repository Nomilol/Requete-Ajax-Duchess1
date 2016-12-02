console.log('Start');
(function(){
	var app = {
		init : function(){
			app.success();
		},
		success : function(){
			var urlServer = window.config.serverUrl + '/filleules.json';
			$.ajax(urlServer)

			.done(app.showObject)
			console.log(urlServer);
		},
		showObject : function(response){
			console.log(response);
			var template = "<span>{{#filleules}} {{prenom}} {{nom}} {{profession}} {{ville}} {{description}} {{modeInteraction}} {{/filleules}}</span>"
			console.log(template);
			var rendered = Mustache.render(template, response);
			console.log(rendered);
			$('span').append(rendered);
		}
	}


































	app.init();
})();