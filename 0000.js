$(document).ready(function() {

$("#01").html("<h3>LINKS ENCONTRADOS EN LA RED 1</h3>");
$(".pg1, .pg2, .pg3, .pg4, .pg5, .pg6").attr({
	"style": "font-weight:bold; cursor:pointer;",
});

$(".pg1").attr({ "href": "1K.html" });
$(".pg2").attr({ "href": "2K.html" });
$(".pg3").attr({ "href": "3K.html" });
$(".pg4").attr({ "href": "4K.html" });
$(".pg5").attr({ "href": "5K.html" });
$(".pg6").attr({ "href": "6K.html" });

tbx= "https://1024terabox.com/s/";
mdf= "https://www.mediafire.com/file/";
prx= "https://1024terabox.com/s/14fJfLh2v1c_8pLh8bEb4NQ";

var enlaces= [

 ];
 
 $.each(enlaces, function(indice, enlace) {
 	txtN= enlace.texto ? enlace.texto: '';
 	txtR= enlace.textoR ? enlace.textoR: '';
 	$('#lista-enlaces').append(
 		'<li><a href="' + enlace.url + '" target="_blank">' + txtN  + ' <span style="color:red;">' + txtR + '</span>' + '</a></li>'
 	);
 });
});