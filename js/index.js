$(document).ready(function() {

	var panel = getParameterByName( 'p' );

	if( panel == '' )
		panel = 'index';

	panel += '.html';

	obtenerHTML( location.protocol + '//' + location.host + location.pathname + "secciones/" + panel );
});

function getParameterByName(name)
{
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function obtenerHTML( p_url )
{
	if( window.XMLHttpRequest )
		xmlhttp = new XMLHttpRequest();

	else
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	xmlhttp.onreadystatechange=function()
	{
		if( xmlhttp.readyState==4 && xmlhttp.status==200 )
			document.getElementById( "contenedor" ).innerHTML = xmlhttp.responseText;

		else
			document.getElementById( "contenedor" ).innerHTML = "<h2 class='h2'>Página no encontrada</h2>";
	}

	xmlhttp.open( "GET", p_url, true );
	xmlhttp.send();
}