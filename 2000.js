$(document).ready(function() {
$("#01").html("<h3>LINKS ENCONTRADOS EN LA RED 2</h3>");
$(".pg1").attr({
			"style": "color: green; cursor:pointer;",
			"href": "1K.html"
		});
		$(".pg2").attr({
			"style": "color: green; cursor:pointer;",
			"href": "2K.html"
		});
		$(".pg3").attr({
			"style": "color: green; cursor:pointer;",
			"href": "3K.html"
		});


	tbx= "https://1024terabox.com/s/";
	mdf= "https://www.mediafire.com/file/";
	amDa= "AMERICAN DAD ";
	baBe= "BATMAN BEYOND ";
	dQAD= "DRAGON QUEST THE ADVENTURE OF DAI ";
	
	var enlaces = [
		
		{ url: mdf+ "4g4epoiy1iyl4a8/GPPNTDMSLJS.rar", texto: "A BRIDGE TOO FAR (1001_2000) Mediafire" },		
		{ url: tbx+ "1e-nPS2N1-t7YXRHIEjMHPA", texto: amDa+ "1.01.001 (2005) Terabox" },
		{ url: tbx+ "11gDuR9y97QGdYPhwNm1IjA", texto: amDa+ "1.02.002 (2005) Terabox" },
		{ url: tbx+ "11w27VXxayTym_sq5vsJ6-g", texto: amDa+ "1.03.003 (2005) Terabox" },
		
            
        ];

        $.each(enlaces, function(indice, enlace) {
        			txtN= enlace.texto ? enlace.texto: '';
        			txtR= enlace.textoR ? enlace.textoR: '';
            $('#lista-enlaces').append(
                '<li><a href="' + enlace.url + '" target="_blank">'
                + txtN  + ' <span style="color:red;">' + txtR + '</span>' + '</a></li>'
            );
        });

    });