const data_peliculasE= [
     { id: 'PelículasE', data: [
          { id: '1S9xkUvYFbeKcN96be4wNmX2aLD5HV3HD', youtubeId: 'eanKjzKz5dk', buttonId: '123hcIVtDd0KGFJ3QjVjMcQ', title: 'EARWING AND THE WITCH', subtitle: 'Earwing y La Bruja (2020)', buscar: '' },
          { id: '14qjoRjNZaDSbvGvsyWlDU0pij_mK9yO8', youtubeId: 'qYwV69MGTYU', buttonId: '1ehel_WTkuuw481H_dP6c6w', title: 'EDGE OF TOMORROW', subtitle: 'Al Filo Del Mañana (2014)', buscar: '' },
          { id: '15_sqONh9Nfv3gQNWtlUzrMYGQG3UDaH-', youtubeId: 'OUVE6c7qqt0', buttonId: '1Kq_lmA8R4dPPeicmgEJBGw', title: 'EDIPO ESCLAVO', subtitle: 'Edipo Esclavo (2024)', buscar: 'P2' },
          { id: '1O7ohRkYE64SHtZ8N_G_am88VjrpmT9L1', youtubeId: 'Ezft_CJXSR8', buttonId: '1IWHn5iI7IsbMaPoaIeUkSw', title: 'EL ANALFABETO', subtitle: 'El Analfabeto (1961)', buscar: 'P1G' },
          { id: '150dzh_4v9b7_8njM0m0mnV5N41ptdX1U', youtubeId: 'jfNtW7xkvzM', buttonId: '1Gi-khESyECnGd4NuvmNZnA', title: 'EL ANGEL', subtitle: 'El Angel (2018)', buscar: 'P1' },
          { id: '1gHlEf0mEIO3OqZ7aQa1oioCu3_cZXrXn', youtubeId: 'VFKoSoAmaOA', buttonId: '1ISyEwgCLY6jP1MR2RXyVxQ', title: 'EL BARRENDERO', subtitle: 'El Barrendero (1982)', buscar: 'P1G' },
          { id: '19Pca55vZPPdV0DCjjFy8mtMsmcHpxe-B', youtubeId: 'si5TMRz69_k', buttonId: '1_s6iWk0HtuIHq2hWF6oOfA', title: 'EL BELLO DURMIENTE', subtitle: 'El Bello Durmiente (1952)', buscar: 'P1' }, 
          { id: '12F8iCrGKKVJBkkbDz3Ee2E51ZEFXbrnS', youtubeId: 'aCCN7A-02vQ', buttonId: '1RthBvlNKgmeNfppQDWWNtw', title: 'EL BOLERO DE RAQUEL', subtitle: 'El Bolero De Raquel (1957)', buscar: 'P1G' },
          { id: '1Pmj2UJLrYgYUdIty1qZm_SSVPOO9w3UN', youtubeId: 'UDPPDYLRNok', buttonId: '1TthfP4dwonjeMRj2ZfpBvQ', title: 'EL BOMBERO ATOMICO', subtitle: 'El Bombero Atómico (1952)', buscar: 'P1G' }, 
          { id: '1G2PCA4EyFw22UbeT-0j4xsEzuBerRfHg', youtubeId: 'IEnmRWU1A1Y', buttonId: '15wvt6zP-s66QMh1p5H6Q3Q', title: 'EL CAPO', subtitle: 'El Capo (2009-14)', subtitle2: '3 Temporadas 223 Episodios', buscar: 'P0' }, 
          { id: '1TaNVw8mGBz0fCHCHCZm7sBTPiqeq2xnl', youtubeId: 't5hk9qBS9cM', buttonId: '19r--nlsqe1W3g0sjq-5lhA', title: 'EL CARTEL', subtitle: 'El Cartel (2008)', subtitle2: '2 Temporadas 98 Episodios', buscar: 'S1' }, 
          { id: '17fW5HgO6SZoj-2vBmjaNgAAY9HRZ-fkB', youtubeId: 'twba2JddGrw', buttonId: '1KL8koG9wG0JVpoLnyYfZYw', title: 'EL CARTEL DE LOS SAPOS EL ORIGEN', subtitle: 'El Cartel De Los Sapos: El Origen (2021)', subtitle2: '1 Temporada 60 Episodios', buscar: 'S1' },
          { id: '1NsPglqjgOTZmoX0hwg-8wG_yVB2fKov4', youtubeId: 'fND0urPnZcc', buttonId: '113A9LZ0Q2gG0JuRP9aQ8Jg', title: 'EL CENICIENTO', subtitle: 'El Ceniciento (1952)', buscar: 'P1' }, 
          { id: '15aU7ehODLMrdR7fdnfHi53BIjROskarO', youtubeId: 'hNccSMccAnY', buttonId: '1XSQgBFEUxC7CsWJIOZv_mA', title: 'EL CHAPO', subtitle: 'El Chapo (2017)', subtitle2: '3 Temporadas 34 Episodios', buscar: 'S1' }, 
          { id: '1xsRyrQDwlbZkG1HhoWHl5r9GoDgk1bNG', youtubeId: 'CD8ebCSYArM', buttonId: '1LrxAbBMuO_M18Fptojc_RA', title: 'EL CIRCO', subtitle: 'El Circo (1943)', buscar: 'P1G' }, 
          { id: '15gRUCwZbqohzp5CyGlbbAls5H3WOC-7G', youtubeId: 'uc1EWiKJ4Ks', buttonId: '1_kB53TpdAwYNbjSotwP5Yw', title: 'EL DESCONOCIDO LA HISTORIA DEL CHOLO ADRIAN', subtitle: 'El Desconocido: La Historia Del Cholo Adrian (2017)', subtitle2: '2 Temporadas 10 Episodios', buscar: 'S1' },
          { id: '1jUWxIryznerUCWrPvKmfdOxZMPV9RpZM', youtubeId: '0eYlIpS3m_E', buttonId: '16lhUc327f8clZfvwGcLIWA', title: 'EL DOLOR DE PAGAR LA RENTA', subtitle: 'El Dolor De Pagar La Renta (1960)', buscar: 'S1' }, 
          { id: '1wMseJWttvGGuBzpP034iSbTS4IyH1rOm', youtubeId: 'OmcxItt_6X0', buttonId: '1WXVo0hfiU_Gze0LTsISnng', title: 'EL ESQUELETO DE LA SEÑORA MORALES', subtitle: 'El Esqueleto De La Señora Morales (1960)', buscar: 'S1' }, 
          { id: '1gAzcF7gH8TzHZFWSFNykLoVQaOh3OHrf', youtubeId: 'PsA18A4jXBk', buttonId: '1BB6HhwAOj9sIfpcBVe52Qw', title: 'EL EXTRA', subtitle: 'El Extra (1962)', buscar: 'P1G' }, 
          { id: '1O6FbHtFjfhvpgsdxYKN8G3CgpHhjwogQ', youtubeId: '47f6W7Gqk60', buttonId: '1ATJDEOQBvZwQ4raV8QNHWw', title: 'EL GENDARME DESCONOCIDO', subtitle: 'El Gendarme Desconocido (1941)', buscar: 'P1G' }, 
          { id: '15jvR6_8KDl5WAX7UqOrE5SZbuU5wud1M', youtubeId: '_ZqQ4nBfYRs', buttonId: '1YGnlsVQ0TlqSslnJaR7lqg', title: 'EL INFIERNO', subtitle: 'El Infierno (2010)', buscar: 'P1' },
          { id: '10L4R71C1taHh2qboiJihfqlBWfleYqI0', youtubeId: '3C4cuH0pxUw', buttonId: '1cbunUHEg0bKNahzfza_u4g', title: 'EL JUEGO DE LAS LLAVES', subtitle: 'El Juego De Las Llaves (2022)', buscar: 'P2' },
          { id: '1_nZX4HnzDeYvCrkAeTS_XVRwuKRtrOYZ', youtubeId: '1IROIuRQeiw', buttonId: '1VsP95c8PHFbTGEoEornamw', title: 'EL MAGO', subtitle: 'El Mago (1949)', buscar: 'P1G' },
          { id: '1IUwDpOPIJB8hrD2xTVVJ1eQHruEIkfcU', youtubeId: 'h4Goo2-nzOc', buttonId: '1U0Mb7zcCK1R_AK3vq6M9ig', title: 'EL MINISTRO Y YO', subtitle: 'El Ministro y Yo (1976)', buscar: 'P3L01G' }, 
          { id: '1nPN4rQFpluvNawopAZPfmsq3zMRdEQmF', youtubeId: 'Vr28HRKTuEA', buttonId: '157ZokA9InlH6HAFdPBP5CA', title: 'EL MOCHAOREJAS', subtitle: 'El Mochaorejas (2026)', buscar: 'peroiz#g' }, 
          { id: '1caqMFF4E7xnjV4dPBCc3kMD6BkMFAxWT', youtubeId: '5SDDgyWkGgQ', buttonId: '1y9cF_mqcCVDIHLazy_9PZA', title: 'EL PADRECITO', subtitle: 'El Padrecito (1964)', buscar: 'P1G' },
          { id: '17vuI6BXuxT_26TzclTSoMWxmb0YIW1lZ', youtubeId: '-BprZYJI6es', buttonId: '1Xc-fsG2ldUxxcSbAhHCG5w', title: 'EL PATRULLERO 777', subtitle: 'El Patrullero 777 (1978)', buscar: 'P1G' },
          { id: '1uH1RILNjlLu4S9kvaFF0qsscvPbCHuZ7', youtubeId: 'vbjSrgQLliE', buttonId: '1Yg52hH8EUeECPsc6XdMlJQ', title: 'EL POPULISMO EN AMERICA LATINA', subtitle: 'El Populismo En América Latina (2018)', subtitle2: '1 Temporada 5 Episodios', buscar: 'S3R01' }, {
								id: '1-BRjSdDLrYpj6FtdwT2XIT0l0LdgkVPU', youtubeId: 'BJKfoJyEtpw', buttonId: '1rpKuvqD4UptMeVjIpTo3ng', title: 'EL PORTERO', subtitle: 'El Portero (1950)', buscar: 'P3L01G' }, {
								id: '10xyoKLoTWACBQv-n285V-VaReV-fXrj1', youtubeId: 'FJbJSAkY5zc', buttonId: '1We5q_sIlA5PdHtHvonYsSA', title: 'EL POTRO LO MEJOR DEL AMOR', subtitle: 'El Potro Lo Mejor Del Amor (2018)', buscar: 'P3L01' }, {
								id: '11Q4XA6UTN3fXEsXqJqYB3EnjnVtpAQ7N', youtubeId: 'NjZ4l3z37VE', buttonId: '1yY_LVL2ZAuDK34nqrjaBAA', title: 'EL PROFE', subtitle: 'El Profe (1971)', buscar: 'P3L01G' }, {
								id: '18gngTuDLs8QmqqdsDQ2NXKlKtfVHWVCk', youtubeId: 'AaE5J9-CCdo', buttonId: '1Wm3EKfHpAPm-khXLE0VP1w', title: 'EL REY DEL BARRIO', subtitle: 'El Rey Del Barrio (1950)', buscar: 'P3L01' }, {
								id: '15yixngaN4dNqysiRjHtFT2ktOR7vVFLM', youtubeId: 'v5gZM8Ou16A', buttonId: '1Cept_XzQX1voC3aOI_t6Jg', title: 'EL SEÑOR DE LOS CIELOS', subtitle: 'El Señor de los Cielos (2024)', subtitle2: '9 Temporadas 790 Episodios', buscar: 'Dinastía Casillas, S3R01G' }, {
								id: '1gneoj2Uvqnmmx20OArqkB3S-SSo2jSl9', youtubeId: 'P-PakNu4I5A', buttonId: '1irid50QpgZ0tmDG0mdLW9g', title: 'EL SEÑOR DOCTOR', subtitle: 'El Señor Doctor (1965)', buscar: 'P3L01G' }, {
								id: '1HO2k8qgXe8BQhNKAMBLAUrFFx5xO4g3H', youtubeId: 'nNCouonJmNc', buttonId: '1GASwO9xtmrG0QIm78JGdzA', title: 'EL SEÑOR FOTÓGRAFO', subtitle: 'El Señor Fotógrafo (1953)', buscar: 'P3L01G' }, {
								id: '1mbSMeqeG6deESApFTGddDAij5SktpHML', youtubeId: 'tITzpbnYYEM', buttonId: '1W4kevaqBINEBGNc8qfv__g', title: 'EL SIETE MACHOS', subtitle: 'El Siete Machos (1951)', buscar: 'P3L01G' }, {
								id: '1tXIWxddOmXlh4F5YOKIy--G0Vv7oiPEG', youtubeId: 'gklZ4wlUuhU', buttonId: '1zb9UOY4zSj3vdM_1KarcnA', title: 'EL SIGNO DE LA MUERTE', subtitle: 'El Signo De La Muerte (1939)', buscar: 'P3L01G' }, {
								id: '1YbZvUW_DZ06h9fL4RU2wbDqptS6VsVE8', youtubeId: 'MKSjjSUzWcE', buttonId: '1LAbob9IeNT80L0JmTEr9sg', title: 'EL SUPERSABIO', subtitle: 'El Supersabio (1948)', buscar: 'P3L01' }, {
								id: '16Q6q2CCl-x9LVEHYEtahuiKMcd9XOW9V', youtubeId: 'hXzcyx9V0xw', buttonId: '1Mz1bPKaONSONRARNpFXIcw', title: 'ELEMENTAL', subtitle: 'Elementos (2023)', buscar: 'P3L01' }, {
								id: '18E-aPRwmxOhLMy29fuZof7gscmntfJq4', youtubeId: 'AjWVzhN5LKU', buttonId: '1tNRgV3ILu3xOrRjn1_S46w', title: 'ELFEN LIED', subtitle: 'Elfen Lied (2004)', subtitle2: '1 Temporada 13 Episodios 1 OVA', buscar: 'S3R01' }, {
								id: '16eNbpIDjyWkrtz0VrV6QJu51HuuKJoTa', youtubeId: 'wafyhTpWpUs', buttonId: '1xFS8dub5PXyfGlrRF84Q-w', title: 'EMANCIPATION', subtitle: 'Emancipación (2022)', buscar: 'P3L01' }, {
								id: '1ONcksIyZ73Px1KyZCHUB5i4NvHsb2B57', youtubeId: 'kDfNJcCfqvk', buttonId: '1XEy-WvspANBhdUa6ecjtDg', title: 'EMMANUELLE', subtitle: 'Emmanuelle (1974)', buscar: 'S3R01G' }, {
								id: '16cO1w6_GyyR17MlZO8XuV9Xt4ZHbVCYw', youtubeId: 'CaimKeDcudo', buttonId: '1Jypnjckqsp7U2wMB0R1e2g', title: 'ENCANTO', subtitle: 'Encanto (2021)', buscar: 'P3L02' }, {
								id: '1_ck4nkXMaRSwN8myvHvNIohJP4AZnBNl', youtubeId: '6E78EZaT45A', buttonId: '1gRqtEfJe4ZGNrJDaZW1s0w', title: 'ENTREGA INMEDIATA', subtitle: 'Entrega Inmediata (1963)', buscar: 'P3L01G' }, {
								id: '1CMueZgPC5NFyjWqrBOzql-ufEN2jAKiR', youtubeId: 'R_GFMbq4JPo', buttonId: '1rQpHAM5T1m_64JrMO_PYQg', title: 'ESCAPE FROM PRETORIA', subtitle: 'Fuga de Pretoria (2020)', buscar: 'S3R01G' }, {
								id: '1BoHPs8YOd7_8CiuMB4JrJQIzVKS8lmGG', youtubeId: 't4OQqg-oL2M', buttonId: '11WTXWDbXyJB75z5nq7AoBQ', title: 'ESCAPE FROM THE PLANET OF THE APES', subtitle: 'Escape Del Planeta De Los Simios (1971)', buscar: 'P3L01' }, {
								id: '16hnwPcQxSih2clFH_GQIW3dTIUb6aWoo', youtubeId: 'x_me3xsvDgk', buttonId: '1zumfdU_sDcWsVpRump5W7Q', title: 'ETERNALS', subtitle: 'Eternals 2021', buscar: 'BUSCAR' }, {
								id: '1_gd2ipoHFGLbYhd02EqMVAfQGBi8L8b4', youtubeId: '42KNwQ6u42U', buttonId: '1OTS0Mk2GFde3YAPtZ4x3_g', title: 'EVERYTHING EVERYTHING', subtitle: 'Todo, Todo (2017)', buscar: 'P3L01' }, {
								id: '1SCRI7nGgjWaFBR8O9td5JPY0gtU3PEdM', youtubeId: 'NL6mioAlpJk', buttonId: '1WvQ_pH38Jc5YdQW-MbPIgA', title: 'EVIL DEAD', subtitle: 'El Despertar Del Diablo (1981)', buscar: 'P3L01' }, {
								id: '16JJOXWBPU9J_bZDqTCZQwlNTzWCOS2ys', youtubeId: 'gJSHhMUPD7M', buttonId: '1BW7LrmVNIXQozasnSXjdOQ', title: 'EVIL DEAD', subtitle: 'Evil Dead Posesión Infernal (2013)', buscar: 'El Despertar Del Diablo, P3L01' }, {
								id: '14T-A-8E7AHhwkF3H1OZeSbiBllR2AJfy', youtubeId: '6lM3NPeEG24', buttonId: '18Uf6Gns5ctxdZMRkjOxXFQ', title: 'EVIL DEAD II', subtitle: 'Evil Dead 2 El Infierno En La Tierra (1987)', buscar: 'El Despertar Del Diablo, P3L01' }, {
								id: '1vUxaJX4OTJnglwx8hYSa5SG_qtyMBFtI', youtubeId: 'keW_fKq187k', buttonId: '1oLxWRi02nPDD8-gHxD49yQ', title: 'EVIL DEAD RISE', subtitle: 'Evil Dead El Despertar (2023)', buscar: 'El Despertar Del Diablo, P3L01' }, {
								id: '154CkrgVmebnQMLF8RvMRu_ClQa_uD_fT', youtubeId: 'AhSnxFOMTDU', buttonId: '1uan3vc2v0lLk5DM4j7cePw', title: 'EVOLUTION', subtitle: 'Evolución (2001)', buscar: 'P3L01G' }, {
								id: '1LBKlQqHKdsf-pLsIuXfCufrkI3MvaasR', youtubeId: 't-8YsulfxVI', buttonId: '1ZfqLMdSXaS3AlSZXgpOESA', title: 'EXODUS GODS AND KINGS', subtitle: 'Éxodo Dioses y Reyes (2014)', buscar: ' Biblia, Biblicas P3L01G' }, {
								id: '1VEdBykuCcraTw7N_NejhBnc7GbvA7fzq', youtubeId: 'yh12RZ_RKFo', buttonId: '1VrOwu42YcZd21xn2rmRs4g', title: 'EXORCISM CHRONICLES: THE BEGINNING', subtitle: 'Crónicas De Exorcismo: El Comienzo (2024)', buscar: 'PEROIZG' }, {
								id: '1jbLbo8-NC4IAx0NVzSQFdIcnn096cjHt', youtubeId: 'D3PzxPzpaSQ', buttonId: '1SR-XYR3pmUd53qkXnPE89A', title: 'EXPLORERS', subtitle: 'Exploradores (1985)', buscar: 'P3L01' }, {
								id: '1P_qPlL_vmcgv4IwgB9eaVMrAwKibDJxl', youtubeId: 'L6P3nI6VnlY', buttonId: '1e43-i1-EPS-hA7_5MdoWig', title: 'EXTRACTION', subtitle: 'Misión De Rescate (2020)', buscar: 'P3L01' }, {
								id: '1Iq3OVwMFPED8t5oIx19q2QjAQrtHLACx', youtubeId: 'mO0OuR26IZM', buttonId: '1TKYvXQnitp_wjX_EGc3MEA', title: 'EXTRACTION 2', subtitle: 'Misión De Rescate 2 (2023)', buscar: 'P3L01' }, {
								id: '1nyQPpZ_aKQ9gcoN0Ytwt5eIENb-V1zkB', youtubeId: 'k4Oygvz5xj0', buttonId: '1WcG5ITp5BAIuZoYP6027LA', title: 'EXWIFE KILLER', subtitle: 'Divorsio Mortal (2017)', buscar: 'P3L01' }, {
								id: '1JazbWoPV6MmFDmj6VYKb4VN22CkzwLaf', youtubeId: 'Hi7NrTs0Wg8', buttonId: '1I56yxoLQM-eVbTdZhE0ZBg', title: 'EYESHIELD 21', subtitle: 'Eyeshield 21 (2005)', subtitle2: '3 Temporadas 145 Episodios 2 OVAS', buscar: 'S3R01' },
            

            // ... TODOS los demás elementos de este carrusel
        ]
    }
];