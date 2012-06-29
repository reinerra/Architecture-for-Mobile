var url = require('url');

  exports.loadParams = function(req, res, next)
   {
		req.requrl = url.parse(req.url, true);
		req.a = (req.requrl.query.a && !isNaN(req.requrl.query.a))
		? new Number(req.requrl.query.a)
		: NaN;
		req.b = (req.requrl.query.b && !isNaN(req.requrl.query.b))
		? new Number(req.requrl.query.b)
		: NaN
		if (next) next();
   }


  exports.navbar = function()
   {
		return ["<div class='navbar'>",
		"<p><a href='/'>home</a></p>",
		"<p><a href='/cuentas'>Cuenta</a></p>",
		"<p><a href='/compras'>Compras</a></p>",
		"<p><a href='/descuentos'>Descuentos</a></p>",
		"<p><a href='/recompensas'>Recompensas</a></p>",
		"<p><a href='/comercios'>Comercios</a></p>",
		"<p><a href='/productos'>Productos</a></p>",
		"</div>"].join('\n');
	}

  exports.page = function(title, navbar, content) 
   {
		return [
				"<!DOCTYPE html>",
				"<html><head> <meta charset='utf-8' />",
				"        <meta name='viewport' content='width=device-width, initial-scale=1' />",
				"        <title>{title}</title>",
				"        <link rel='stylesheet' href='http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.css' />",
				"        <link rel='stylesheet' href='my.css' />",
				"        <style>",
				"        </style>",
				"        <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'>",
				"        </script>",
				"        <script src='http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.js'>",
				"        </script>",
				"    </head> <body>",
				"        <div data-role='page' id='page1'>",
				"            <div data-theme='a' data-role='header'>",
				"                <h3>Mekano</h3>",
				"            </div>",
				"            <div data-role='content' style='padding: 15px'>",
				"                <a data-role='button' data-transition='fade' href='/cuentas'>",
				"                    Cuenta",
				"                </a>",
				"            </div>",
				"            <div data-role='content' style='padding: 15px'>",
				"                <a data-role='button' data-transition='fade' href='/compras'>",
				"                    Compras",
				"                </a>",
				"            </div>",
				"            <div data-theme='a' data-role='footer' data-position='fixed'>",
				"                <h3>Mekano SIGE 2012.</h3>",
				"            </div>",
				"        </div>",
				"    </body>",
				"</html>"				].join('\n')
		.replace("{title}", title, "g")
		.replace("{navbar}", navbar, "g")
		.replace("{content}", content, "g");
   }
