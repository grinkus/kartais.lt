---
start: 2014-11-06T22:00:00Z
end: 2014-11-22T22:00:00Z

---
Žmonės pasirodo statosi [braškių bokštus](http://www.instructables.com/id/How-To-Build-Your-Own-Strawberry-Tower/) visai sėkmingai. Reiškia, visai įmanoma, kad ir pas mane vasarėjant toks atsiras. Jei jos ir nenorės augti, bent jau pažaisiu. Yra [OpenHydroponics](http://openhydroponics.org/) iniciatyva su šiek tiek kreivoku tinklalapiu, bet visai gera informacija. Jie link’ina į [pinterest lentą](http://www.pinterest.com/cdnhydroponics/diy-hydroponic-and-aquaponic-gardens/) smalsesniems – pažiūrėti kaip visa tai atrodo. O atrodo visai įspūdingai.

***

Darbe kilo klausimas dėl nuosavo (vidinio) front-end framework’o. Front-end šitam kontekste naudojamas iš estetinės perspektyvos, be jokio front-end–back-end. Tiksliau, tai tikriausiai vadintųsi lib’u: įrankis grid’o sumetimui, tipografikos config’as, dažniausiai naudojami polyfill’ai ir panašiai. Jį, realiai žiūrint, turėtų naudoti dizaineriai (taip, dizaineriai, kurie rašo stilius, skriptus ir markup’ą savo dizainams). Dėl tos priežasties bootstrap’e matau minusą – turint atviras klases, kurios žymi estetinius aspektus, man atrodo nelogiška – pasidaro per daug paprasta jas naudoti ir pasakoti programeriams, kad „nu šįkart pakeičiam be diziko, po to išsiaiškinsim“. Ta pasaka apsunkina ir dizainerių darbą – kaip tie production lygio pakeitimai turėtų grįžti į dizainerių rankas? Teoriškai, būtų galima turėti tas atviras klases (tipo, „column-4“ arba „outlined-button“), tačiau tokiu atveju turėtų būti koks nors periodinis code-review, kurio metu tie pakeitimai būtų sinchronizuojami abiejose versijose – estetinės klasės būtų šalinamos visur (aišku, paliekant galimybę naudotis jomis ateityje prireikus hotfix’o) ir keičiamos tik į semantines („login__button–hero“). Įdomu, kaip tai atrodytų praktikoje; ypač periodais, kai darbai užsiliepsnoja.

Užrašas prisiminimui: jokio minified/uglyfied kodo – visa tai turėtų būti daroma tik push-to-prod stadijoj. Atrodo savaime suprantama, bet kartais užsimirštama (dažnai, per liepsnojančius darbus).

***

Įsivaizduojama situacija: „mes _visi_ naudojam tik Šitą IDE“. Ok, naudokit – o aš čia prie ko? _Nu, visi tai reiškia visi. Tu irgi._ O kodėl? _Nu nes visi naudoja_. O koks kitas pasirinkimas? _Naudoti Šitą IDE_.

Trumpas situacijos aprašymas, o pasako tomus. Šiaip, tam klausinėtojui, matosi, reikalinga informacija. Kodėl taip, kas tuo laimima, kodėl nenaudojamas tas ir kitas, o tik Šitas. Jis gal ir neturi nieko prieš, tiesiog norėtų sužinoti svarstymus ir argumentus. Visgi, jei žmonės taip daro, reiškia supranta. O jei supranta, reiškia gali pasidalinti informacija, vietoj to, kad klausinėtojas veltui švaistytų laiką googlindamas. Galiausiai net kitas pasirinkimas žmogui nenurodomas. Jei jis naudotų Kitą IDE, tai reikštų, jog jam reiktų skirtis su ta kompanija ar tiesiog visi su tuo susitaikytų ir įsivyrautų harmonija kosmose? Niekas nežino – bandyk pats savo kailiu ir pamatysi. Weird? Pamatysim.