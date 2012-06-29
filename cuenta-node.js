  var htutil = require('./htutil');
  
  exports.get = function(req, res) 
   {
		res.writeHead(200, {'Content-Type': 'text/html'	});
		
		res.end(htutil.page("Cuenta de Usuario", htutil.navbar(), 
		[
			"<p>Datos Personales</p>",
			"<form name='mult' action='/mult' method='get'>",
				"Usuario: <input type='text' name='user' /><br/>",
				"Clave  : <input type='text' name='passw' />",
				"<input type='submit' value='Submit' />",
			"</form>"
		].join('\n'))
		);
   }
