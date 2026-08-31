const data_peliculas1 = [
    {
        id: 'Películas1',
        data: [
            { id: '1ATOJcg4vQJPMmoMCzqlQTxEr-vlhBzQY', youtubeId: 'jla6YMfkS9Q', buttonId: '1mvtGF4bUXIjNOlU5DLbsBw', title: '2 BROKE GIRLS', subtitle: '2 Chicas Quebradas (2011-16)', subtitle2: '6 Temporadas 138 Episodios', buscar: 'P3L02' },
            { id: '1r2ppXqrB2LELgK6aGbOuwbFCywdzkfL-', youtubeId: 'BEsL884-zKQ', buttonId: '1nqfcrwkASrg9WL5P6lwE9Q', title: '2 HEARTS', subtitle: '2 Corazones (2020)', subtitle2: '', buscar: 'BUSCAR' }, 
            { id: '1YHx1xAuPOkPIX4T_lrwlJyFc4mkF-CSS', youtubeId: 'heOcee5ZB9c', buttonId: '1sa2uaoP8BBVf45XYfkokIA', title: '3 METROS SOBRE EL CIELO', subtitle: '3 Metros Sobre El Cielo', buscar: 'BUSCAR' }, 
            { id: '13InCrLYkfU9Q_9XNkHoVEyHp3jXauwYU', youtubeId: '1IYksquG4Ns', buttonId: '1jDwUjdoa4AQQ0Wzv7lmcsQ', title: '4X4', subtitle: '4X4 (2019)', buscar: 'Locked, PEROIZG' }, 
            { id: '1AnU5oOEuF3veMdxO7PkbBfZI7nAzkewe', youtubeId: 'XV3sbY51Xcc', buttonId: '1dGe9ocJmxjmJXMAi-MB5UQ', title: '5 DAYS OF WAR', subtitle: '5 Días De Guerra (2011)', buscar: 'P3L01' }, 
            { id: '1PmtwCUg1XBUblAYT1n7wNFv9BPC5i9H8', youtubeId: 'eBvrywQtNUg', buttonId: '1xnKcrNhE-sKYSXnURcaghQ', title: '9', subtitle: 'Numero 9 (2009)', buscar: 'P3L02' }, 
            { id: '1Q3X6RMmBm_ZRhhGU0Ed4d2St79E1AADo', youtubeId: '3ZaMk8t98H8', buttonId: '1e4csR_FUe1QUpFK0OHn7lA', title: '10x10', subtitle: 'Una Verdad Inquietante (2018)', buscar: 'P3L01' }, 
            { id: '1R-bjO0YF6Y5KrR_OmwY-SZAu4eL1-KWt', youtubeId: '9PoWpBQq2PY', buttonId: '15q7LzWGZSMmxW8OUaAFSmQ', title: '12 ROUNDS 2 RELOADED', subtitle: '12 Asaltos 2 Recargado (2013)', buscar: 'P3L01' }, 
            { id: '1QdhT0izNe8wEk1K0Es0Rm97TtiaZTdRy', youtubeId: 'Zxag9p-63RU', buttonId: '10WLYf4-wngTlcNmJB7VlDQ', title: '12 STRONG', subtitle: '12 Valientes (2018)', buscar: 'P3L01' }, 
            { id: '1iKwJYoctGIb7-jlX7nda7-81XyHJHFvZ', youtubeId: 'dQnmrtIHdxI', buttonId: '13nflLMYwYB7QDJVRTqWM9g', title: '13 DAYS, 13 NIGHTS IN THE HELL OF KABUL', subtitle: '13 Noches En El Infierno De Kabul (2023)', buscar: 'PEROIZG' }, 
            { id: '1YToTAWHSh4wVIf_m6TwUUCbJNUCv1xBb', youtubeId: 'ewlcRK99w78', buttonId: '1JexspDCa-QDX9aW7I0ZzXg', title: '13 HOURS THE SECRET SOLDIERS OF BENGHAZI', subtitle: '13 Horas Los Soldados Secretos de Benghazi (2016)', buscar: 'P3L01' }, 
            { id: '1RePKB3Ftvbufu7X9txH0tXYNiWQ78_F1', youtubeId: 'mHARRn9TtL0', buttonId: '1aHgEpkM2kyBRNYHb1Nmejg', title: '16 BLOCKS', subtitle: 'Muerte Súbita (2006)', buscar: 'P3L01' }, 
            { id: '1Rppjkpv83mO-nZ0648IddQfj2mqHYI6j', youtubeId: 'IKRwXsCUjfI', buttonId: '1DRQ4I2Kl3M-Zj8FHTxAHnQ', title: '30 NOCHES CON MI EX', subtitle: '30 Noches Con Mi Ex (2022)', buscar: 'P3L01G' }, 
            { id: '1S1ZBKZ6e0dU88K9PdyhTOTOwJojeiDu8', youtubeId: 'KoZZBtYx39k', buttonId: '13kB-gPs5VUl6Osvjkjd8zw', title: '47 METERS DOWN', subtitle: 'Terror a 47 Metros (2017)', buscar: 'P3L01' }, {
								id: '1S6wXGNGzhLV3PEvtTmrFzD0zH3d7pEBH', youtubeId: '17KJk3ErIx0', buttonId: '1-NcEwYdze0hqNF-5BL6U6w', title: '50 FIRST DATES', subtitle: 'Como Si Fuera La Primera Vez (2004)', buscar: 'P3L02' }, {
								id: '14ePoYYe6lVA3vbEp8a5whrU6TYSC6VeF', youtubeId: 'kIYDNyEkJP4', buttonId: '1kGpog_70qAYMpFc7SwnzLw', title: '\'71', subtitle: '\'71 Perdido En Belfast (2014)', buscar: 'P3L01' }, {
								id: '16r8Zd9lMpO7OxFm81lqzi9DLDaogTlqG', youtubeId: 'GNgK75OZ0mQ', buttonId: '16vTprkar5mYMpkmUw3vBFg', title: '100 METERS', subtitle: '100 metros (2025)', buscar: 'PEROIZG' }, {
								id: '1SXubTrx0UNcKZjlNrzLMTf0BYqmJDzU_', youtubeId: 'ppAalrFpjl4', buttonId: '1nX61Muw7973QiTEnMlDKvQ', title: '100% WOLF', subtitle: '100% Lobo (2020)', buscar: ' 200% Wolf, 200 Wolf, P3L01' }, {
								id: '1TyoLKRd_bmbVX9ksQK7c80BuWyX3IGMi', youtubeId: 'rKCEyXoPNEU', buttonId: '1Q2MObld8PvECOKuXcuFJYQ', title: '101 DALMATIANS', subtitle: '101 Dalmatas La Noche De Las Narices Frias (1961)', buscar: 'P3L01G' }, {
								id: '1TjIC_VPquTgizAKlYH4dfST5qQBdsplR', youtubeId: 'nesOkGg0OpY', buttonId: '1A5W1dDP1ZekYTUZHRcqgQQ', title: '101 DALMATIANS PATCH\'S LONDON ADVENTURE', subtitle: '101 Dalmatas Una Aventura En Londres (2003)', buscar: 'P3L01G' }, {
								id: '1GUENgqotu2IFlgoISlNF_xcw9QlHoq7N', youtubeId: 'pDgBUVuKXKk', buttonId: '13XZAbXJBVaN-Z4nmnBo0Ug', title: '200% WOLF', subtitle: '200% Lobo (2024)', buscar: '100% Wolf, 100 Wolf, S3R01' }, {
								id: '1T2F2uuB_edPKS9hayRW__4o2RfT4kGqq', youtubeId: 'kKBTuTX3bKU', buttonId: '1XIh0VPCKibiuW-gAdb9kIQ', title: '300', subtitle: '300 (2006)', buscar: 'P3L01' }, {
								id: '1T7FONKMwCjbgtZ-JGkCt9qhJZbyAtkLi', youtubeId: 'noM60wGziw0', buttonId: '1t4HDXTguNpVqq7BL1cwtkQ', title: '300 RISE OF AN EMPIRE', subtitle: '300 El Nacimiento De Un Imperio (2014)', buscar: 'P3L01' }, {
								id: '1V8F7lrOSeVOwd-tKLpQW6cKlwoycAfUL', youtubeId: '3N1jJqJ9Ziw', buttonId: '1K_c76-a7ul0miiTqgMe20A', title: '365 DAYS THIS DAY', subtitle: '365 Dias Aquel Dia', buscar: 'BUSCAR' }, {
								id: '1Ua3oZaAuycqKCzARK6arLJVMf-baXq16', youtubeId: 'PsD0NpFSADM', buttonId: '1ok2exyWRg8JfgFbqHLojXQ', title: '500 DAYS OF SUMMER', subtitle: '500 Dias Con Ella (2009)', buscar: 'P3L01G' }, {
								id: '1FZcdIt-xfUft_wQ8vaLpSzaermzT-YQJ', youtubeId: 'qhCOAuzcQXY', buttonId: '1LcplNXdFGragDK45_h-YKA', title: '500 DIAS DE ESCOBAR', subtitle: '500 Días De Escobar (2023)', buscar: 'P3L01' }, {
								id: '13bycu1Nlyn8Lj-lZaFJjlssQEayVj48N', youtubeId: 'AX7eViA0v8Q', buttonId: '1NCgAVNDYYBopvdjvbVu2vQ', title: '1942 UNKNOWN BATTLE', subtitle: '1942 La Gran Ofensiva (2019)', buscar: 'P3L01' }, {
								id: '1VEJX-IhzD0DWLFP-bKdPqzOELHLVFkF8', youtubeId: 'UrPizm6tbak', buttonId: '14y9zlgRjtcQyIaXzXOHrfQ', title: '1898 LOS ULTIMOS DE FILIPINAS', subtitle: '1898 Los Ultimos De Filipinas (2016) (Esp)', buscar: 'P3L01' }, {
								id: '1ni6zvz-I6d7oDL3RkvuVsGVYmT7EvZUv', youtubeId: '9ooDeS4Ep5Q', buttonId: '1VAxusfWLrgwfBaaMwrnSvQ', title: '2012', subtitle: '2012 (2009)', buscar: 'P3ROIZ' }, {
								id: '1VcfHjD8Z6bjZk0B8SHCQ2lLRwR5VDHOj', youtubeId: 'jhVq-hmY48Q', buttonId: '12BLE-RmNlsW-oz8f2OGr7w', title: '10000 B. C.', subtitle: '10000 A. C. (2008)', buscar: 'P3L01' },
            
            

            // ... TODOS los demás elementos de este carrusel
        ]
    }
];