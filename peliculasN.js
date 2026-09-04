const data_peliculasN= [
     { id: 'PelículasN', data: [
          { id: '1Gy-KKpa-k78mfBN6S2THSlBWqwJr5obf', youtubeId: 'XbvBqO99aXQ', buttonId: '1WmlC4Ns3LWhghSxnZdL7rw', title: 'NAGA', subtitle: 'Naga (2023)', buscar: 'P3L02' }, 
           { id: '1F_TRUt-AyH2gqiNN1MTag791gtxNSnfp', youtubeId: 'aYSKm7r_698', buttonId: '1-aHcPrxkFqNDWnTIE-_Z3Q', title: 'NAPPILY EVER AFTER', subtitle: 'Un Desastre De Princesa (2018)', buscar: 'P3L01' }, 
           { id: '1zJuMmrsrqWTeIvfsyxAOr-r7YD8cCMXf', youtubeId: '1MTIrScpSPU', buttonId: '1abZ7E0B4eFLAbMwB8CPPyA', title: 'NARCO SAINTS', subtitle: 'Narcosantos (2022)', subtitle2: '1 Temporada 6 Episodios', buscar: 'S3R01' }, 
           { id: '10OihjhXqUXDwW9qcCf99k0YPaRprKErZ', youtubeId: 'PtJ6yAGjsIs', buttonId: '1qq221b-_e4wTj8w2px2haQ', title: 'NARCOS COLOMBIA', subtitle: 'Narcos Colombia (2015-17)', subtitle2: '3 Temporadas 30 Episodios', buscar: 'S3R01' }, 
           { id: '1vi-7x3gyb6ulSuxVFlPcFZ4zWtgYxfZQ', youtubeId: 'eHdRMOAT-Lc', buttonId: '1LRLHnPjeIDVswpHt-cZ1PQ', title: 'NARCOS MÉXICO', subtitle: 'Narcos México (2018-21)', subtitle2: '3 Temporadas 30 Episodios', buscar: 'S3R01' }, 
           { id: '1flb6z5Tpra_lvzcLWyLv91P8VoytcFsC', youtubeId: '2otR4GFP03I', buttonId: '1gN2-ebEwGXXy-B8j-AdDuQ', title: 'NE ZHA 2', subtitle: 'El Renacer Del Alma (2025)', buscar: 'peroiz#g' }, 
           { id: '18wIjpgbrY5oJAFrdxjqDv3EXH_oazBOt', youtubeId: 'rW_Iyyd9IuI', buttonId: '1m1NWBjysWGkLbcL3xlFvng', title: 'NEVER BACK DOWN 2: THE BEATDOWN', subtitle: 'Rompiendo Las Reglas 2: El Desafío (2011)', buscar: 'P3L01G' }, 
           { id: '1Mg5as59wEPFE_ebfEyW5pqUFpBgKqfDd', youtubeId: '6q4q7sye_FQ', buttonId: '1jknESRot3nSocBHhwpO-yg', title: 'NEW POLICE STORY', subtitle: 'New Police Story (2004)', buscar: 'P3L02' }, 
           { id: '151BBlt7ASAK7-Z3wff7ycJmDA1oKqdFB', youtubeId: 'OwIFRm7sy8E', buttonId: '1mzH9PQZXqqyDpd1o0Dgn1w', title: 'NEXT', subtitle: 'El Vidente (2007)', buscar: 'S3R01' }, 
           { id: '1Y_M4ExmynZJw0rIQ2deuvSPZY6-FJAJU', youtubeId: '8J1TiwjAUfM', buttonId: '1anWV81virWF6m1KkXZlTCw', title: 'NI SANGRE NI ARENA', subtitle: 'Ni Sangre Ni Arena (1941)', buscar: 'P3L01G' }, 
           { id: '1EaEOjHfVxcAPqKMnGB93nMntjVJHZUh4', youtubeId: 'xjHzkp3tgU4', buttonId: '1sbfy8Z8q2VlAto8OlBY8kg', title: 'NIGHT SHIFT', subtitle: 'Hotel Del Miedo (2018)', buscar: 'P3L02' }, 
           { id: '1ohIuqW443hFBqoAVP9RXaS7RZctH5swm', youtubeId: 'f8iu9VUc_lo', buttonId: '1fwkH2uSanF616utMWWn3_A', title: 'NIGHT SWIM', subtitle: 'Aguas Siniestras​ (2024)', buscar: 'P3L02' }, 
           { id: '1m6Ne43AfC5PPsPzgZuID3-M-9WZt133v', youtubeId: 'CzZ1XjYuMBY', buttonId: '1LCkQso7xsKl7n4wHuP8Qrg', title: 'NO DORMIRAS', subtitle: 'No Dormirás (2018)', buscar: 'P3L01' }, 
           { id: '1EgDAGM0f2eKWkqKJEKBy42CWJaW7jPLT', youtubeId: 'z97qUZ222KI', buttonId: '1lIXyAwbwvFuShglORxCGBg', title: 'NO EXIT', subtitle: 'Sin Salida (2022)', buscar: 'P3L01G' }, 
           { id: '1a2HwolEIYHbaaR4pG5LzBlIvB2PQgMRM', youtubeId: 'dNQxljO2kzE', buttonId: '196IA0xeZjHrTn8910Oja5w', title: 'NO MANCHES FRIDA', subtitle: 'No Manches Frida (2016)', buscar: 'P3L01G' }, 
           { id: '1nMzYy7qWMh7HiaV_GfIN_RqGssFtSY8H', youtubeId: 'IaqYK6kVI5I', buttonId: '1eS8Z9a7p_iz6EEt5z-ciyg', title: 'NO MANCHES FRIDA 2', subtitle: 'No Manches Frida 2 (2019)', buscar: 'P3L01' }, 
           { id: '1gbtuCk6p0_XCrfTuxjNNaFW6OTQwKA9r', youtubeId: 'JUWQwvmvnvU', buttonId: '1mnmsGw9HtCb4Ygm9wXVJAQ', title: 'NO SE ACEPTAN DEVOLUCIONES', subtitle: 'No Se Aceptan Devoluciones (2013)', buscar: 'P3L02' }, 
           { id: '1mfVkQrEo_InQj60WKd1A1Bf_3cWsWR4J', youtubeId: 'tg1EWlm0YWs', buttonId: '1jFWp4vdYkrlElVUrawpT8A', title: 'NO WAY UP', subtitle: 'Atrapados En Lo Profundo (2024)', buscar: 'P3L01' }, 
           { id: '1zTDx8cHmOc3GSQttmM76v4RYM27GPnVJ', youtubeId: 'jJCIloASiok', buttonId: '1N6Lnrb7YEZS7Tz3NPAXu8A', title: 'NOTHING TO LOSE', subtitle: 'Nada Que Perder (1997)', buscar: 'P3L01G' }, 
           { id: '1cElauy2kyi17qqYTT3S9mc8j8pFYwZ00', youtubeId: '2dGUyKN1Zxk', buttonId: '18svKllUUJF8zG0WNt7EcGA', title: 'NOW YOU SEE ME NOW YOU DON\'T', subtitle: 'Los Ilusionistas 3 (2025)', buscar: 'S3R01' },
            

            // ... TODOS los demás elementos de este carrusel
        ]
    }
];