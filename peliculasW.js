function pw(a, b, c, d, e, f, g) {
     x= "https://drive.google.com/thumbnail?id=1";
     y= "https://1024terabox.com/s/1";   
     return {
          image: x + a, youtube: b, terabox: y + c, title: d, subtitle: e, subtitle2: f, search: g
     };
};

const data_peliculasW= [
     { id: "PelículasW", data: [
          pw("VqI3krODkwnK3rDRHU9Rp0geYc-cD4Nf","FI539qelExQ","aFjw0t2qIZ4_KtQvmGFNQg","WAR FOR THE PLANET OF THE APES","El Planeta De Los Simios La Guerra (2017)","","P3L01"), 
          pw("FAQXrtsxWwPEtOUr3IOISaqS_7GB96Y1","8otADaRY7QI","Ezvq0LLAlnBPSKDB0UdBxw","WATCHMEN","Watchmen Los Vigilantes (2009)","","P3L001"), 
          pw("hpyH4Y2_8FDKstKSYeEzyxMaC795Miuv","n87LoTTn2_c","WPnLsrFfpmL6li-bTdioxw","WE STAND ALONE TOGETHER THE MEN OF EASY COMPANY","Hermanos De Sangre Los Hombres De La Compañía Easy (2001)","","Band Of Brothers, The Pacific"), 
          pw("YiQsXtDafWgejhzMqw6pqgkTlI1iN7y0","EalZSRSEOw0","LS3GdxPIHXXIzY5gdiJT7g","WELCOME TO MARWEN","Bienvenidos a Marwen (2018)","","P3L01"),
          pw("KeZGq8fAx09KvL0jo1ZSeqEqcOdaA1pq","0Vsy5KzsieQ","2hrpyn2_GX2tfz7pKL4fog","WE\'RE THE MILLERS","Quién Ł%$#! Son Los Miller (2013","","P3ROIZ"),
          pw("Yqtra_d__IZEibyHzyeyp3ZZXAG79SHt","jJnAW7Pg0Aw","R9pyx5GbyrSE9BWkchUU-g","WES CRAVEN\'S NEW NIGHTMARE","La Nueva Pesadilla De West Craven","","S3R3G"),
          pw("_xcn9RGv6eVRV7SkampxwYUuhe1WvzkC","UqXBQaKrvPg","8bS6BzbqdaPgm5IVJUkqXA","WHAT HAPPENS IN VEGAS","Locura de Amor En Las Vegas (2008) [Ing T+Esp]","","P3L01G"),
          pw("Gfl0H0Yl1G9dx2TPoRkiC1HQJcCEPGVu","TV3s2STA7NU","U_1k1OZmcL2xCwORainhpA","WHAT IF...?","What If...? (2021-24)","Serie 3 Temporadas 26 Episodios","P3L01G"), 
          pw("AmvYwDmIdldKYILQj0NO1C204kBYFmHF","s6nTJMdrGVU","5AuAb5KIOkVSabUecpf9Nw","WHAT LIES BENEATH","Revelaciones (2000)","","P3L01G"),
          pw("m0LKIFGcDk5cxygdgwrfEz0E_ud3IlOJ","-L10tIzZZrA","ayPxh_2QoIzUMAUXj5ahag","WHERE HOPE GROWS","Donde Crece La Esperanza","","peroiz#g"),
          pw("EUfRI9aCKoAggOd82x6o0INojiPq9e4p","9XIpCpfA_JA","XIj3yNaEMFTqW-5VNMo3mQ","WHITE FANG","Colmillo Blanco (2018)","","P3L01"),
          pw("PDM2iAIRjmH5zK2P6bIL8P6MP2u0E4vu","d5ejiic3db4","ejqIe5kh6hpuz3vXWuHCOw","WHO AM I","Quién soy yo? (1998)","","P3L02"),
          pw("U2M8uHUNK_Bx_2r0x12GeQKV-iwfVS8U","1jBkcb51hJg","OtETOPzEihqDLcdA7d9nHA","WHY HIM ?","Por Qué El ? (2016)","","P3L01G"),
          pw("KOMKwNohygufe1M2LYBnz_81yytD7d2A","nN2yBBSRC78","CZvFZzqDOPORQZvxk8Qn_g","WIDOWS","Viudas (2018)","","P3L01"),
          pw("wyETylbbNN3K3CZgeHAP4YWE8eQ2R2Z7","DbWlQAcq3Iw","oeU3lR8tm2Qtu9lpO9UpWQ","WIL","Wil (2023)","","P3L02"), 
          pw("rPH_LHr_wRoHsiWoxpGB083AM1ge7Cu6","sEXyPinA4lE","lBaSR3f2USLADCAKH9mSiA","THE WILD ROBOT","Robot Salvaje (2024)","","peroiz#g"), 
          pw("SmfCYp6neyyc08BgiRr8Dj7Mv2fOgdHo","TZFtUwAs0wk","x_FqFAudxjqYnC-m7aMTAQ","WILLOW","Willow (1988)","","P3L01"), 
          pw("-8Z3GrvUP0_TIeomFgmfj4RXQRXXbqWo","ZQXN_9eyPAI","r03jdoqp4Rv98NinL4unog","WINNIE-THE-POOH: BLOOD AND HONEY","Winnie-The-Pooh: Miel y Sangre (2023) [Ing T+Esp]","","P3L02"), 
          pw("q5nzjjkfHDwViefTA4TG8PpowPttmAZJ","QTKpVvofCUk","NP9pl6W2iHhVZC9iJ1cvgQ","WITNESS PROTECTION","Protección De Testigos) (1999)","","P3ROIZ"), 
          pw("rl1Bfa1p7E0kn6b_F4rWn5WGCj561PfB","DehZCccV1GM","SEK29zoT7Ox-yIQ7ytzvnA","WOLF\'S RAIN","Wolf\'s Rain (2003)","1 Temporada 26 Episodios + 4 OVAS","S3R01"), 
          pw("Ujlh8wqUWWvJ4XpfziBTSKzP8I47w3X3","5RSUcuGIiI0","Es91xC4vNq6oGnnl1hz19A","WOLFS","Lobos (2024)","","P3L01G"), 
          pw("ZlZkScBIhykBP73k0ekhYz0wjWiu9MlA","ASAGdtAJPnU","jUFw7J-O4jHLBgLWukHAqA","WONDER","Extraordinario (2017)","","P3L01"), 
          pw("dZcN3666tk2Uoz9_JKYFoyx2SMN1oaw1","1Q8fG0TtVAY","cUxDyOU4XAs2ylOkFWcERw","WONDER WOMAN","La Mujer Maravilla (2017)","","P3L01"), 
          pw("UZNp9Acg4q31N_Bo-2ZN5-rGwYfqhAPr","-YRw-3dgsjo","UAWJTxPzfpGrq_wA06yHZA","WONKA","Wonka (2023)","","P3L02"), 
          pw("0TSDr3SWT0HNKLB5aSj5z87riCGs9ZA8","ZgY_n8QYeOo","vmeqmSyYddJKuPTxDCGKLQ","WORLD TRADE CENTER","Las Torres Gemelas (2006)","","9 11, peroiz#g"), 
          pw("G1i2uEsDGwgDhfGDA3SweIAQKtzm3Z9D","gpSfxMRo7sQ","fPMLDnRuRW1vgkiXmsTePg","WORLD WAR II IN COLOUR","La Segunda Guerra Mundial a Color (2009)","1 Temporada 13 Episodios","S3R01G"),
            

     ]}
];