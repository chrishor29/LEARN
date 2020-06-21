// window.onerror = function(msg, url, linenumber) { alert('Error message: '+msg+'\nLine Number: '+linenumber) }

/* PROJECT - PROGRESS
 ✖ nehéz vs könnyű kérdés (+ osztályzás 0/1/2)
 ✖ bőrgyógy: kijelölök egy új tételt (impQ van benne), majd rámegyek kövi kérdésre, hogy kidobja, akkor még az impQ-t nem tölti be (kell egy refresht-t tolnom valamiért)
 
 ✖ mikrobi: részl.bakt: Bacillus anthracis -> 2x megnyitom és 2.-nál már rosszul írja ki
 ✖ farmak: impQ.90: NSAID hatásai --> terhességgel kapcsolatos tudnivalók ha kerdes; akkor azt amikor kidobja, nem jelenik meg az osztályozhatósága, így nem tudok továbbhaladni (A/16 tétel esetén)
 ✖ bőrgyógy: diabetes tételnél megjelenik egy új kérdés valamiért, pedig nincs ott új már: lépjek vissza főoldal, majd frissítsek, utána jelöljem ki bőrgyógyászat, majd lépjek át kérdésmegoldó oldalra (így jön elő a hiba)
 
 ✖ ANDROID: töltsek le egy emulatort, úgy hátha gyorsabban tudom tesztelni, és nem annyira idegölő
 ✖ android: felnagyítva legyen az egész alapból már (ne keljen folyton ráközelítenem)
	+ ezt rohadt nehéz megcsinálni: (1) zoom nem lehet (firefox) (2) helette van a transform-scale, de akkor kilóg a képernyőből, meg összevissza baszakszik. (3) fontok méretét növelhetem még, de akkor is elcsesződik (4) először írjak egy üres html-t, amibe csak text van és abból építsem fel (teszek bele image-t később stb.)
	+ "divQloc" nevű div-en megcsináltam már elvileg; 3x nagyítás
 ✖ android: midQ a képernyőt töltse ki mindig
 ✖ android: tételQ kijelölése nehéz, mert kicsi
 ✖ android: menuk egy klikkel legyenek előhívhatók és nagyok legyenek / kerdes osztályzás is!
 ✖ android: upgrade/stb. -re klikk-nél sötétüljön el, hogy lássam érzékelte (mint amikor betölti az oldalt, vagy nextQ)
 
 ✖ search: ha hiányzik az egyik oldal html-je, akkor azt skippelje a betöltésnél, ne álljon meg
 ✖ lehessen átírni a kidobott quest repeat time-ját /+ lehessen skippelni, hogy x óráig ne dobhassa ki
 ✖ mikrobi: túl lassú, +1/-1 tétel kiválasztás
 ✖ mikrobi: túl lassú, tehát ha átírok valamit a .html-be majd frissítek, hogy újra a kérdést kidobja elém, az eltart 5-10secig(amikor már 500kérdésnél tartok főleg)
 ✖ tárgyakat el kéne mentse localstorage-be tömörítve, az gyorsabb
 ✖ kardio impQ.52 altkérdéseit egybeveszi az 51-ével, ha nincs comment
 ✖ tétel kérdésben átírok valamit, akkor a tételt deselectálja (gondolom, mert kérdés, és a hossza megváltozik, ami note-ban van)
 ✖ nephro --> fizikalis vizsgálat impQ kérdést egybe dobja ki, ha az a nextQ (pedig div-ben van, nem span)

 ✖ HTML imgLoc & LearnLoc nem kell már a html HEAD-ekben
 ✖ lz-string nem kell már a html HEAD-ekben + amúgy sem

 ✖ alert funkciót replace-ljem
 ✖ img-eket csekk, mert lehet hiányoznak (tárgyakban)
 ✖ (img-eket csekk amik fölösek (batch-el txt-be lementem, majd végignézi őket))
 ✖ lehet összes impQ-t elején betölthetném, ha style display none-ban van (talán úgy gyorsabb lenne az egész: meglepően gyors úgy)
 SEARCH:
	✖ (ha az image nevében (/abbr) van a szó akkor is kidobja)
	✔ (kis vs nagy betűk)
 ✖ skipQ-k / noteQ-k / importantQ-k(gyors repeat!) közt nem mutatja az impQ-kat
 ✖ tételQ kijelölése lassú
 ✖ kérdésnek állíthassam be, hogy hány perc múlva / milyen időpontban dobja ki újra (impQ-ként)
 ✖ írhassam át a kérdés repeatTime-ját
 ✖ upgradeQ egyszerubb legyen
	oldalbetöltésnél mentse el összes qName-t, és nézze meg: melyik új illetve melyik tunt el LS-bol legutóbbi
	ez alapján dobja ki a lehetoséget az eltunt Q-nél, hogy melyikre upgradeljem
	olyan is kéne, hogy autoUpgrade-lje a questet, de van lehetoségem megnézni melyeket upgradelte, és azoka közül törölhessem, ha mégse kellett volna
	ha egy kérdésnél hozzáadtam azt a classba, hogy 'open' / 'if' stb. akkor ne kelljen upgradelni már
 ✖ Qtxt-t ne mentse el, csak expQ.html-nél. Csak a QuestCímet mentse el + mögé commentbe, hogy hány betubol áll a Qtxt. Azonban ha van még egy azonos nevu quest, akkor legyen az elv, hogy megnézi melyik quest címek tuntek el, és melyek jelentek meg (betuszámot is nézze talán)
	expQ-t csak akkor mentsen, ha expQ.html LS-be. Egyébként egy tableba. Betöltésnél pedig megnézi, hogy van-e table-ba, ha nincs, akkor LS-bol tölti be (hiszen akkor expQ.html-rol származik, nem az adott weboldal)
	teszteljem azonos nevu Q-ek upgrade-jét
 ✖ hide alQ-k a tételnél
 ✖ rewrite az egészet (rövidebb legyen)
*/

/* PROJECT - PROGRESS v2
 ✖ MIKROBI LS:
	tétel buttonra klikk lassú
	tétel kiválasztása lassú (hogy melybol dobjon kérdést)
	betöltés is lassú
	nextQ-ra is lassú
	swich button is lassú (Quest megoldós módra váltó)
 
 ✖ fölös image/video-k kiszortírozása
 ✖ alapból csak 0 ismételt Q-t dob, 1x ismételtet nem (csak  ha 0-t disabledolom)
 ✖ androidra console.log-ot!!
 ✖ questID-k száma(ami a nextQ button alatt látható) valamiért gyorsan megugrik, fixáljam!!! --> ugyanis szvsz lehet emiatt is lassú
 ✖: VIDEO - PROPED: propednél pl. szívhangoknál vannak videók:
	✖ lehessen a videót úgy beszerkeszteni, hogy csak a egy play button látszódik a szövegben, amire ha rákattolok akkor középen megjelenik a videó (mint a zongora kottánál)
	✖ lehessen a videót úgy beszerkeszteni, mint a képet: tehát a jobb oldalt van
 ✖ tesztkérdések: válaszokat random sorrendben dobja (különben nem jól jegyezném meg)
 ✖ impQ: immun: rheumatid arthitis{23}, ha a 'T-sejtek gátlása'-t felcserélem 'B-sejt gátlása'-val (sorrendet csak) akkor nem importálja már
 ✖ kérdés hosszát számolja majd úgy ki, hogy az altkérdéseket ne vegye bele: ha talál egy '<details'-t, akkor megkeresi a következo '</details'-t és 'kivágja azt'. Így ha vmit változtatok az altQ-n, attól a mainQ-t még nem kell upgradelnem

✖ android/telón a tételek nagyobbak legyenek
✖ mutéttan tételQ-nál (amikor kidobja) ne mutassa a tételcsoportot
✖ hosszat(length) automata módon számolja ki! (pl. 100karakterenként/1hosszú; de soronként is kéne emellett, mert felsorolásoknál durva lenne)
 
✖ ImpQ: csak akkor töltse be, ha visible. Továbbá akkoris, ha kivan jelölve a tétel a Q megoldásnál (de csak ha arra a módra váltok) bár utóbbi helyett kéne egy gyorsabb megoldás (lehet csak bonyolult végiggondolni). pl. az elején olvassa ki az altkérdéseket az imp-bol és table-ba(impID = Qtxt) tenni. Ebból nézi a chance-t az elohívásra, ebbol számolja tétel hány %, továbbá oldQcheck & upgradeQ esetében innen veszi ki a szöveget(ugyanis egy impQ-n belül lehet altkérdés, amit hiányolna különben). Tehát beírni innerHTML-be nem szükséges ilyenkor még --> ez kicsit komplikált, mert ha van még1 alt imp, akkor annak altkérdéseit is ki kell olvassa, és így tovább.. de megoldható --> ez szvsz gyorsabb (elején semmiképpen ne töltse be az összeset, mert androidon qrva lassú!) 
✖ nextQ-ra kattintva gyorsan dobja a következot (nézzem meg, miért szaggat - anat LS!!)
✖ imgLoad: expQ.html esetében a data-source-okat írja át HTMLimgLoc+datasrc -re, és így mentse el oket. utána az img beöltés: amelyik img láthatóvá válik, és datasrc-a van, azt töltse be a következoképp: (1) ha "images/"-el kezdodik, akkor bemásolja elé a LearnLoc-ot is (2) ha nem, akkor nem
✖ zöldnél azt tudjam beállítani, hogy mennyi ido múlva dobja ki legközelebb (tehát ne csak 60/600/stb., hanem kérdésenként változó lehessen --> de ha nem állítok be semmit, akkor ahogy eddig is, a repeat-nél beállított lesz)
✖ F_impQold elott létrehozott buttonok nem muködnek

✖ rep	min	hossz	left	still	average --> impQ-kat nemszámolja bele (1x belekéne)

✖ JS - download LS crash android-on - FIX -> eloször találjam meg a hibát, mert nem mindig van: ezt úgy csináljam, hogy csinálok egy localstorage mappát, amibe lesznek v1 v2 v3 stb almappák.
 
✖ vizsgaskip &#10140; ne JS-be, hanem LS-be mentse el
✖ betöltésben mi tart soká, teszteljem (kiíratom console-ba mennyi ido telt el egyes funkciók közt)

✖ expQ-k --> csak a az expQs html-be lévoket mentse el LS-be (új számozás legyen és külön szvsz: tehát a többi localisan a fájlba)
✖ LS-méret a vizsgaskippedeknél ha van 500, akkor szinte lefagy (azt fixáljam)
✖ F_SpanRepNew + F_SpanRepOld --> rákattolva jelenjenek meg a questek, hogy mennyi ido van belolük vissza
✖ ha zöldra van állítva a dobhat új kérdéseket, akkor még1et rákattolva eloször legyen kék ami azt jelenti random újat dob következonek (nem az épp soron következot)
✖ skipek típusa: (KÉK) vizsgáig már nem (FEKETE) Nem volt rá idom (SZÃœRKE) vizsga elott dobja ki oket újra 
  
✖ Qid-t vegyem ki!!!

✖ autoSave LS --> jó lenne, ha az utolsó 3 maradna csak meg mindig (tehát felülírná oket valahogy)
 
✖ nextQ-nál egybol töltse be az img-eket
✖ 'F_calculateThis()' --> ezt használom: 'F_kerdesStatus' & 'F_temakorStatus' --> valahogy egyszerusítsem majd le
––––––––––––––––––––––––––––––––––––––––––––––––
✖ F_ButtonRepFast
✖ DATA-SRC IMG: ha egy kérdést megnyitok, akkor betölti a képeit -> ezzel azonban átíródik ugye a Qtext -> ha ezután kattolok rá jobbfelso toggleAll buttonra, akkor az F_checkQs-ban nem találja meg a Qtext-et mert azoknak megváltozott
✖ importált Q esetében a mini IMG-re klikkelve nem muködik a script, amennyiben visszamegyek a fooldalra, majd újra a Q-hoz
––––––––––––––––––––––––––––––––––––––––––––––––
✖ note & fix-re elég egy button (egyoldalon legyen a ketto)
✖ EXP.html &#10140; load it first, then jump to the page
––––––––––––––––––––––––––––––––––––––––––––––––
✖ skip-nél a perma skippesek máshol legyenek
✖ /keressek rá erre a kommentre, és megértem:/ erre akkor van szükség, ha legfelül nem kérdés van (tehát a legfelül lévo details nem kérdés, csak egy összegzo details, pl. élettan ozmózis), ugyanis annak nincs LSid elmentve, így nemtudok note-t menteni neki (persze optimálisabb lenne, ha itt is a legfelsohöz lenne csatolva, de egyenlore kihagyom mert nem bonyolítom, és LowPrior)

► ↔ ♫ • » &#9733; &#10004; &#10006; &#10010; &#10033; &#10041; &#10045; &#10067; &#10070;
*/

/* PROJECT - DONE
 ✔ !!! tétel ha kérdés, akkor addig ne mutassa altkérdések számát (osztályzást) !!! high prior !!!
 ✔ elsőre valamiért szarakszik feladatmegoldásnál azon questekkel, amelyikben impQ van (még nem tölti be őket). impQ-k kal elején szarakodik, amikor először tölti őket be (lehet már osztályoztam máshol, mégis újnak veszi: lásd pl. belgyógy 1.tétel - adenohipofízis hormonok táblázat)
 ✔ search: nagybetü vs kisbetü
 ✔ jelölhessem ki a kérdést importantnak(zöld), a Qlista-repTime-ban
 ✔ ha egy quest többször is szerepel (nextQ), akkor csak az elsőt tegye ki az osztályzás közé, és a többire mind ezen számot írja (ne generáljon nekik külön még1et)
 ✔ lehessen látni a kérdéseket táblázatban, melyiket hány perce repeateltem, mert felbssza magát az ember, hogy nemtudja mikor jut a végére --> ne mutassa azokat, melyek skippedek(kék/fekete) már
 ✔ mikrobi load lassú --> impQ-kat elején csak Table-ba loadolja, majd akkor egyesével betölti, ha megnyitottam
 ✔ nem tölti be az összes expQ-t -> lásd pl. kórtan {188}-as Q-t nem tölti be a [10]-esben. --> szvsz az kéne legyen a megoldás, hogy amit már betöltött azt írja át 'imp'-ről 'imped'-re (így még tudok azokkal is foglalkozni később ha kell)
 ✔ legyen egy funkció, amivel összes img/video-t betölti, és amelyik hiányzik, azt jelezze --> anno ezt írtam <img onerror="alert(this.src)" data-src="gltkklkkjmnm.png">
 ✔ ImpQ
	✔ kritérium definíciója: egy impQ-n belül ugyanazon impQ NEM lehet még1x !!!! -- ez NEM jó, ugyanis pl. mikrobi batérium táblázat egy impQ, mégis többször kell benne legyen egy másik impQ(pl. Spirochaetak) --> szóval a kritérium: egy impQ-n belül az adott impQ csak akkor szerepelhet, ha a parentjei közt még nincs
	✔ newMethod legyen az impQ
	✔ mutéttan: alapveto sebészeti eszközök és használatuk: Szövetszétválasztó eszközök: az érfogók: fogóeszközök: érfogók
 ✔: 10q után mentsen el LS-t, ne 10db nextQ click után (tehát gyakrabban)
 ✔: local impQ vs expQ --> máshogy hivatkozzak rájuk (ne csak []-el, hanem expQ esetén {} -el). külön mentse a local impQ-kat egy tömbbe (ne localstorage)
 ✔: élettan 8.1 -> gliasejtek img-eit nem tölti be (expQ imgLoad még hibás)
 ✔: js: skipDate / adott tárgy
 ✔: QuantumFirefox Tablet: video click nél csak a control-bar jelenik meg. Szvsz csináljak egy láthatatlan buttont a videóra, amire írok scriptet.
 ✔: androidon mindig a kezdooldalt töltse be (tehát hiába a questes aloldalon zártam be, ne azt töltse be
 ✔: importQ-t változtatva, ne kelljen upgradelni azt a Q-t, melyben az importQ mint alkérdés szerepelt
 ✔: upgradeQ -->  ha van olyan címu és 1db, akkor 0-ra tegye!!
 ✔: div_Skip.innerHTML beállítása nemjó. Ugyanis ha már van kb.50db amit skippelek és megnyitom, akkor szétfagy az egész.
 ✔: tableten az expQ megnyitása után nem tud visszamenni az oldalra (ugyanis a 'window.location.pathname' = null androidon szvsz)
 ✔: skippedek megnyitása nem muködik
 ✔: importált Q-t ha megváltoztatom, akkor ne kelljen upgradelnem a questet (mert ha van egy importált quest, amit 6 helyen használok, akkor egy betut abban átírva, mind a 6questet fel kell upgradelnem és fárasztó --> helyette automatikusan upgradelje, ha más nem változott)
 ✔: mutassa hány %-on tartok a kijelölt tételek megtanulásával --> valamiért a 10es terjedelmut 1-nek veszi
 ✔: tételek buttonja (miniTétel button legyen)
 ✔: upgrade Q-nál alapból az 1-es legyen kijelölve, ne a skip
 ✔: noteQ --> tehát ha írok megjegyzést, LS-be mentse el, és töltse be
 ✔: saveLS (stb.) button klikknél színes legyen
 ✔: autoSave LS --> általam kiválasztott db osztályzásonként (pl. 3,10)
 ✔: csekkolja, hogy az LSid biztos ne legyen foglalt már valahogy, hogy nehogy az Expid és pure_LSid-s azonosat kapjon, ha igen akkor mégis javítsa!
 ✔: localStorage(ExpID,LSid) formátumban legyen elmentve, mert a Qtext az ott lesz csak simán LSid-hez csatoltan!!
 ✔: summary-nél valami jelezze, ha meg van nyitva
 ✔: import Q image -> minden html tetején lesz egy variable, amiben benne van az IMAGES\'adott tárgy mappa' címe. ezt az expid mellé csatolja a Qtextbe. A képek betöltésénél (data-src helyett src) ezt írja hozzá.
*/

/* localStorage-be lehet objectset (arrayt is, az egyszerubb, és ugyanennyit ér mint az objects, tehát nemjutok vele elorébb) menteni (de ezzel se jutok többre, csak 'nehezebb kezelni'(egyébként csak kicsivel, de sajna fölös, szóval minek), de azért megorzöm):
isayyes = true
for ( var i=0; i<kerdesek.length; i++ ) {
	if (isayyes == true) {
		var person = {
			 firstName : "John",
			 lastName  : "Doe",
			 age       : 50,
			 eyeColor  : "blue"
		};

				var Qtext = '<details class="' + kerdesek[i].className + '">' + kerdesek[i].innerHTML + "</details>"
				person.Qtext = "id.107"
		localStorage.setItem("savedData", JSON.stringify(person));
		var objects = JSON.parse(localStorage.getItem("savedData"));
		alert(objects.Qtext)
		isayyes = false
	}
}
*/


/*function F_hash(str){
	var hash = 0;
	if (str.length == 0) return hash;
	for (var i = 0; i < str.length; i++) {
		 char = str.charCodeAt(i);
		 hash = ((hash<<5)-hash)+char;
	}
	return hash;
}*/



var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

document.documentElement.style.overflowX = 'hidden';

var myTime
var oldTime = false
function F_getTime(){
	var myDate = new Date()
	myTime = myDate.getTime() /1000
	if ( oldTime == false ) { oldTime = myTime }
}
F_getTime()

function wait(ms) {
	var start = new Date().getTime()
	var end = start
	while (end < start + ms) { end = new Date().getTime() }
}

var kerdesek = document.getElementsByClassName("kerdes")
if ( localStorage.getItem("hkQ.max") === null ) { localStorage.setItem("hkQ.max",0) } 

var arrQnameLSid = [] // Qtxt to LSid
var arrQtxts = []  // arra kell, hogy upgradeQ-nál ezekbol nézi meg mikre lehet
var objQnameQtxt = {}  // Qname to Qtxt
var arrQnames = []  // Qname + characterCount (csak ez legyen majd a végén, többi szvsz fölös)
var arrImpQs = [] // ExpID to Qtxt

var missQs = []

var Qcount = 0
var impID

function F_checkMissImgs(){
	var MissIMGS = []
	var testImg = document.getElementById("testMiss")
	testImg.onerror = function(){ console.log("error: "+this.src) }; 
	var Allimgs = document.getElementsByTagName("img")
	for ( var i=0; i<Allimgs.length; i++ ) {
		testImg.src = "images/" + Allimgs[i].dataset.src
		alert("stop")
	}
}
//F_checkMissImgs()
function F_checkDelImgs(){
	var deleteIMGs = []
	var allIMGs = document.getElementById("allimagesTXT").innerHTML
	allIMGs = allIMGs.slice(allIMGs.indexOf("\n")+1);
	var count = (allIMGs.match(/\n/g) || []).length
	var innHTML = document.documentElement.innerHTML
	innHTML = innHTML.slice(innHTML.indexOf("</div>")+5)
	alert(count)
	for ( var i=0; i<count; i++ ) {
		var fileName = allIMGs.slice(0,allIMGs.indexOf("\n"));
		allIMGs = allIMGs.slice(allIMGs.indexOf("\n")+1);
		fileName = fileName.slice(fileName.indexOf("images")+7,-1)
		if ( innHTML.indexOf(fileName) == -1 ) {
			var testName = fileName.slice(0,fileName.indexOf("."))
			if ( testName.endsWith("m") != true ) {
				deleteIMGs.push(fileName) 
			}
		}
	}
	for ( var i=0; i<deleteIMGs.length; i++ ) {
		console.log(deleteIMGs[i])
	}
	alert("stop")
}
//F_checkDelImgs()

function F_getTexts(){
	//alert(document.title+"_Qtext")
	var fullString = localStorage.getItem(document.title+"_LSids")
	if ( fullString ) {
		fullString = fullString.split(" ") // elso alkalommal különben error lesz
		for ( var i=0; i<fullString.length; i++ ) {
			if ( fullString[i] != "" ) {  // utolsó mindig ez, és azt ne tegye array-ba
				var LSid = fullString[i]
				var Qname = localStorage.getItem(LSid)
				//Qtext = LZString.decompressFromUTF16(Qtext)
				arrQnameLSid[Qname] = LSid
				//console.log(LSid+ ": " +Qname)
			}
		}
	}
}

function F_newLSid(){
	var LSid
	LSid = parseInt(localStorage.getItem("hkQ.max"))+1
	localStorage.setItem("hkQ.max",LSid)
	LSid = "hkQ."+LSid
	
	// erre szükség van még
	localStorage.removeItem(LSid+"_skip")
	localStorage.removeItem(LSid+"_note")
	localStorage.removeItem(LSid+"_jegy")
	localStorage.removeItem(LSid+"_repeat")
	localStorage.removeItem(LSid+"_idopont")
	if ( LSid == "undefined" ) { alert("UNDEFINED") }
	return LSid
}

var wrongEXPid = "foglalt vagy upgradelve lett:<br>"
if ( localStorage.getItem("hk.ToggleAll") == "true" ) { document.body.style.backgroundColor = "Gainsboro" }

/* Search method
 ► egy ID-s iframe van, amibe for ciklussal betölti a tárgyakat, majd a textjüket kimenti egy array-ba (nagyítóra klikkelésnél)
 ► a searchWordot megnézi az arrayban melyiknél van, majd kidobja a resultokat (ahogy eddig is)
 ► egy resultra ráklikkelve az iframe/div(amelyik gyorsabb, display:none)-be tölti a tárgyat -> és abból szedi a parent/midQ stb. (ahogy eddig is)
*/
var fileName
var elems = document.body.getElementsByTagName("*")
var expQsLoaded = false
function F_loadExpQs(parentDiv,origin) {
	var childs = parentDiv.getElementsByTagName("*");
	//console.log(origin)
	for ( var i = 0; i < childs.length; i++ ) {
		var elem = childs[i]
		if ( elem.className.indexOf("{") == -1 ) { continue }
		if ( elem.className.indexOf("imp") != -1 ) { continue }
		if ( elem.className.indexOf("midQ") != -1 ) { continue }
		var begin = elem.className.indexOf("{")
		var end = elem.className.indexOf("}")
		var EXPid = elem.className.slice(begin+1,end)
		
		var qName = F_QtxtQname(elem.innerHTML)
		if ( qName == "" || qName == " " ) { continue }
		if ( qName.slice(-3) != "-->" ) { F_setCount(elem) }
		//arrImpQs[origin][EXPid] = '<'+elem.tagName+' class="'+elem.className+'">'+elem.innerHTML+'</'+elem.tagName+'>' // ez vmiért nem jó, ha "open" van a classname-ben (farmak szívelégtelenség 1 tételnél nem volt jó, de másiknál meg igen)
		arrImpQs[origin][EXPid] = '<details class="'+elem.className+'">'+elem.innerHTML+'</details>'
	}
}
function F_checkEXPs() {
	var origin = document.getElementById("div_MidQ").dataset.origin
	arrImpQs[origin] = []
	var parentDiv
	if ( origin == "searchQs" ) { parentDiv = document.getElementById("div_searchQTargy") }
	if ( origin == "pageQs" ) { parentDiv = document.getElementById("div_pageQTargy") }
	//console.log(origin)
	F_loadExpQs(parentDiv,origin)
}

function F_loadDetails(detElem){ 
	F_impQfew(detElem)
	//F_impQlot(detElem)
	F_midQ(detElem)
	F_loadImgVideo(detElem)
	F_imgClick(detElem)
	F_titleChange(detElem)
	F_answerQ(detElem)
}
function F_detailsToggle(detElem){ 
	//if ( detElem.classList.contains("imgLoaded") != true ) {
		/*F_getTime()
		oldTime = myTime*/
		F_loadDetails(detElem)
		var allDetails = detElem.getElementsByTagName("details")
		for ( var i=0; i<allDetails.length; i++ ) { allDetails[i].ontoggle = function(){ 
			F_detailsToggle(this) 
			func_calcOldNew()
		} }

		//detElem.classList.add("imgLoaded");
		/*F_getTime()
		myTime = myTime-oldTime
		console.log("– imagek betöltve – "+myTime)*/
	// }
}

var prevMidQ = []
var prevScrollTop = 0
var MISSID
function F_impQfew(detElem){ // ?ms/Q a betöltési ideje
	MISSID = ""
	var allImpQs = detElem.querySelectorAll('.imp')
	for ( var i=0;  i<allImpQs.length;  i++ ) {
		if ( allImpQs[i].offsetParent === null ) { continue }
		if ( allImpQs[i].classList.contains("imported") == true ) { continue }
		allImpQs[i].className = allImpQs[i].className+" imported"
		
		var impID = allImpQs[i].className
		impID = impID.replace(" ","")
		impID = impID.replace("imp","")
		
		F_loadQtxt(impID,allImpQs[i].tagName)
		F_loadImpQ(Qtxt)
		
		allImpQs[i].innerHTML = Qtxt
		//console.log(Qtxt)
	}
	
	if ( MISSID != "" ) { alert("F_impQfew: Az alábbi EXPid-k még nincsenek LS-be reigsztrálva: "+MISSID + "\nNyisd meg a tárgyválasztás ablaknál az adott tárgyhoz kapcsolódó egyéb tárgy(ak)at egyszer -> pl. Biokémia II esetén nyisd meg Biokémia I, Élettan, Molekuláris Sejtbiológia") }
}
function F_impQlot(detElem){ // 0,4ms/Q a betöltési ideje
	F_getTime()
	var diffTime = myTime-oldTime
	
	if ( detElem.classList.contains("imported") == true ) { return }
	detElem.className = detElem.className+" imported"
	
	MISSID = ""
	var oldHTML = detElem.innerHTML
	var newHTML = ""
	
	count = 0
	do {
		if ( oldHTML.indexOf(' class="imp ') == -1 ) { break }
		count = count +1
		
		var mEXPid
		function F_getImpQ() {
			var divSpan = ""
			if ( oldHTML.indexOf('<div class="imp ') == -1 ) {
				divSpan = "span"
			} else if ( oldHTML.indexOf('<span class="imp ') == -1 ) {
				divSpan = "div"
			} else if ( oldHTML.indexOf('<div class="imp ') > oldHTML.indexOf('<span class="imp ') ) {
				divSpan = "span" // span volt valamiért és átírtam div-re, de lehet rossz (mert error-ozott, és így jó lett)
			} else {
				divSpan = "div"
				//if ( oldHTML.indexOf('<div class="imp [') == -1 ) { alert(oldHTML.indexOf('<span class="imp [')) }
			}
			
			var impBlock = oldHTML.slice(oldHTML.indexOf('<'+divSpan+' class="imp '))
			newHTML = newHTML + oldHTML.slice(0,oldHTML.indexOf('<'+divSpan+' class="imp '))
			oldHTML = oldHTML.slice(oldHTML.indexOf('<'+divSpan+' class="imp '))
			
			impBlock = impBlock.slice(0,impBlock.indexOf('">')+2)
			newHTML = newHTML + impBlock
			oldHTML = oldHTML.slice(oldHTML.indexOf('">')+2)
			
			F_loadQtxt(impBlock,divSpan)
			//alert(impBlock)
		}
		F_getImpQ()
		if ( Qtxt == undefined ) { continue }
		F_loadImpQ(Qtxt)

		newHTML = newHTML + Qtxt
	}
	while ( oldHTML.indexOf(' class="imp ') != -1 )
	
	detElem.innerHTML = newHTML + oldHTML // emiatt kurva lassú
	if ( MISSID != "" ) { alert("F_impQlot: Az alábbi EXPid-k még nincsenek LS-be reigsztrálva: "+MISSID+"\nNyisd meg a tárgyválasztás ablaknál az adott tárgyhoz kapcsolódó egyéb tárgy(ak)at egyszer --> pl. Biokémia II esetén nyisd meg Biokémia I, Élettan, Molekuláris Sejtbiológia") }
	
	F_getTime()
	var endTime = myTime-oldTime-diffTime
	var unitTime = (endTime*1000/count).toFixed(2);
	//console.log("– F_impQlot – "+endTime.toFixed(2)+"sec ("+unitTime+"ms/Q, "+count+"db Q)")
}
F_impQlot(document.documentElement)
function F_loadQtxt(impID,divSpan,origin){
	var begin,end,hidden
	//console.log(impID+" "+divSpan)
	if ( impID.indexOf("hide") != -1 ) { hidden = true }
	//console.log(impID)
	if ( impID.indexOf("[") != -1 ) {
		begin = impID.indexOf("[") +1
		end = impID.indexOf("]")
		impID = impID.slice(begin,end)
		var origin = document.getElementById("div_MidQ").dataset.origin
		Qtxt = arrImpQs[origin][impID]
		impID = "["+impID+"]"
	} else {
		begin = impID.indexOf("{") +1
		end = impID.indexOf("}")
		impID = impID.slice(begin,end)
		//console.log(impID)
		Qtxt = arrImpQs["expQs"][impID]
		impID = "{"+impID+"}"
	}
	if ( Qtxt == null ) { 
		if ( MISSID.indexOf(impID) == -1 ) { MISSID = MISSID + impID + "," }
		return
	}
	if ( hidden == true ) {
		if ( divSpan == "div" || divSpan == "DIV" ) {
			var title = Qtxt
			title = title.slice(0,title.indexOf('</summary>'))
			title = title.slice(title.indexOf('<summary'))
			title = title.slice(title.indexOf('>')+1)
			title = "<div><strong>"+title+"</strong></div>"
			Qtxt = Qtxt.replace('<ul class="normal">', '<ul class="normal">'+title);
		}

		Qtxt = Qtxt.replace(/kerdes/g, "");
	}
	if ( divSpan == "div" || divSpan == "DIV" ) {
		Qtxt = Qtxt.slice(Qtxt.indexOf('<ul class="normal">')+19)
		Qtxt = Qtxt.slice(0,Qtxt.lastIndexOf('</ul></details>'))
	}
}
function F_loadImpQ(locTXT){
/* method:
	végig importálja az altkérdéseket is, amíg olyanba nem ütközik, ami már volt
	megkeresi az elso altImpQ-t.
	megnézi az ID-jét.
	megnézi, hogy az eddigi Qtext-ben van-e már: visszafele indul, a hozzá legközelebbi utolsót keresi!, ha van:
	megnézi, hogy a parentje-e, vagyis: 
	megnézi hogy div/span-e, legyen pl. div --> a (num = 1)
	utána megkeresi a következo <div vagy </div-et: ha <div akkor a (num = num+1) ha </div akkor a num = num-1
	addig csinálj amíg a num = 0
	ha közben áthaladt az altImpQ-n (ami elbírálás alatt) áll, akkor nem lesz importálva -> ha nem, akkor importálva lesz
*/
	var startP = 0
	do {
		if ( locTXT.indexOf(' class="imp ',startP) == -1 ) { break }
		startP = locTXT.indexOf(' class="imp ',startP) +1
		var EXPid = locTXT.slice(startP+12)
		var prevQtxt = locTXT.slice(0,startP)
		var newTXT = false
		/*console.clear()
		console.log(startP)
		console.log(mEXPid)
		console.log(prevQtxt)
		console.log(EXPid)
		alert("sajt")*/
		var nextQtype = false
		if ( EXPid.indexOf("}") != -1 && EXPid.indexOf("]") == -1 ) {
			nextQtype = "expQ"
		} else if ( EXPid.indexOf("]") != -1 && EXPid.indexOf("}") == -1 ) {
			nextQtype = "impQ"
		} else if  ( EXPid.indexOf("}") > EXPid.indexOf("]") ) {
			nextQtype = "impQ"
		} else if  ( EXPid.indexOf("]") > EXPid.indexOf("}") ) {
			nextQtype = "expQ"
		}
		if ( nextQtype == "expQ" ) {
			EXPid = EXPid.slice(0,EXPid.indexOf('}'))
			EXPid = EXPid.slice(EXPid.indexOf('{')+1)
			if ( prevQtxt.lastIndexOf("{"+EXPid+"}") != -1 ) {
				var elemType = prevQtxt.slice(0,prevQtxt.lastIndexOf('class="imp {'+EXPid+'}'))
				F_checkSearchTXT(prevQtxt,elemType)
				if ( newTXT == true ) { arrImpQs["expQs"][EXPid] }
			} else { 
				newTXT = arrImpQs["expQs"][EXPid] 
			}
		}
		if ( nextQtype == "impQ" ) {
			var origin = document.getElementById("div_MidQ").dataset.origin
			EXPid = EXPid.slice(0,EXPid.indexOf(']'))
			if ( prevQtxt.lastIndexOf("["+EXPid+"]") != -1 ) {
				var elemType = prevQtxt.slice(0,prevQtxt.lastIndexOf('class="imp ['+EXPid+']'))
				F_checkSearchTXT(prevQtxt,elemType)
				if ( newTXT == true ) { newTXT = arrImpQs[origin][EXPid] } 
			} else { 
				newTXT = arrImpQs[origin][EXPid] 
			}
		}
		if ( newTXT != false ) { // importQ
			count = count +1
			if ( newTXT != null ) {
				var oldTXT = locTXT.slice(locTXT.indexOf('<',startP-6),locTXT.indexOf('>',startP)+1)
				if ( oldTXT.indexOf("hide") != -1 ) {
					if ( oldTXT.slice(1,4) == "div" ) {
						var title = newTXT
						title = title.slice(0,title.indexOf('</summary>'))
						title = title.slice(title.indexOf('<summary'))
						title = title.slice(title.indexOf('>')+1)
						title = "<strong>"+title+"</strong>"
						newTXT = newTXT.replace('<ul class="normal">', '<ul class="normal">'+title);
					}

					newTXT = newTXT.replace(/kerdes/g, "");
				}
				if ( oldTXT.slice(1,4) == "div" ) {
					newTXT = newTXT.slice(newTXT.indexOf('<ul class="normal">')+19)
					newTXT = newTXT.slice(0,-15)
				}
				newTXT = oldTXT + newTXT
				locTXT = locTXT.slice(0,locTXT.indexOf('<',startP-6)) + newTXT + locTXT.slice(locTXT.indexOf('>',startP)+1)
			} else {
				if ( nextQtype == "expQ" ) { EXPid = "{"+EXPid+"}" }
				if ( nextQtype == "impQ" ) { EXPid = "["+EXPid+"]" }
				if ( MISSID.indexOf(EXPid) == -1 ) { MISSID = MISSID + EXPid + "," }
			}
		}
	} while ( locTXT.indexOf(' class="imp [',startP) != -1 )
	Qtxt = locTXT
}
function F_midQText(qTxt){
	qTxt = qTxt.slice(qTxt.indexOf("<summary"),qTxt.lastIndexOf("</details"))
	var qTitle = qTxt.slice(qTxt.indexOf(">")+1,qTxt.indexOf("</summary"))
	document.getElementById("btn_MidQ").innerHTML = qTitle
	qTxt = qTxt.slice(qTxt.indexOf("</summary"))
	qTxt = qTxt.slice(qTxt.indexOf(">")+1)
	//qTxt = qTxt.replace('<ul class="normal">','<ul>')
	document.getElementById("div_MidQText").innerHTML = qTxt

	if ( document.getElementById("div_MidQ").style.display != "block" ) {
		prevScrollTop = document.body.scrollTop
		document.getElementById("btn_toggleAll").style.display = 'none'
		document.getElementById("table_weboldalak").style.display = 'none'
		document.getElementById("div_pageQTargy").style.display = 'none'
		document.getElementById("div_MainFrame").style.display = 'none'
	}
	
	document.getElementById("div_MidQ").style.display = "block"
	//F_impQfew(document.getElementById("div_MidQText"))
	F_detailsToggle(document.getElementById("div_MidQText"))
	//F_imgClick(document.getElementById("div_MidQText"))
	//F_titleChange(document.getElementById("div_MidQText"))
}
function F_midQload(impID){
	if ( impID.indexOf("{") != -1 ) { 
		midQisExp = true
	} else {
		midQisExp = false
	}
	F_loadQtxt(impID,this.tagName)
	F_midQText(Qtxt)
	if ( prevMidQ.length > 1 ) {
		document.getElementById("btn_MidQback").style.display = "block"
	} else {
		document.getElementById("btn_MidQback").style.display = "none"
	}
}
function F_midQ(detElem){
	var midQs = detElem.getElementsByClassName("midQ")
	for ( var x=0; x<midQs.length; x++ ) {
		var midQ = midQs[x]
		//console.log(midQ.innerHTML)
		midQ.style.color = "blue"
		midQ.style.textShadow = "0 0 1px yellow, 0 0 1px black"
		midQ.style.cursor = "pointer"; 
		midQ.onmouseover = function(){ this.style.color = "green" }
		midQ.onmouseout = function(){ this.style.color = "blue" }
		midQ.onclick = function(){ 
			midQloaded = false
			var impID = this.className
			prevMidQ.push(impID)
			F_midQload(impID)
		}
	}
}
F_midQ(document)
var midQisExp

/* IMG-load mechanizmusa
	+ toggle esetén 'for összes image'
	+ amelyik nem visible, az return
	+ amelyik nem data-src (tehát már be van töltve) az return
	- ezután azt nézi meg, hogy impQ image-e:
		felmegy a toggle eventes details elem-ig, és megnézi volt-e közte {} vagy [] class-ú elem (lehet div,span,details is)
		amennyiben van, akkor az elsönél megáll és az lesz a location-je
		ha nincs, akkor a default location
*/
var testLoad = false
var missImgs = ""
var vidStatus
function F_loadImgVideo(detElem){
	//console.clear()
	//console.log("F_loadImgVideo")
	var path
	var origin = document.getElementById("div_MidQ").dataset.origin
	if ( origin == "searchQs" ) { path = searchPath }
	if ( origin == "pageQs" ) { path = pagePath }
	//console.log(path)
	
	var imgs = detElem.getElementsByTagName("IMG")
	for ( var x=0; x<imgs.length; x++ ) { 
		if ( imgs[x].offsetParent == null && testLoad == false ) { continue }
		if ( imgs[x].dataset.src == undefined ) { continue } // ha elotte a fooldalon megnyitottam már a Q-t, akkor nem kell újra betöltenie
		
		//imgs[x].onerror = function(){ missImgs = missImgs + this.src + ", " };
		imgs[x].onerror = function(){
			var textVar = this.src.slice(this.src.lastIndexOf("/")+1)
			if ( missImgs.indexOf(textVar+",") == -1 ) { missImgs = missImgs + textVar + ", " }
		};
		
		var IMGelem = imgs[x]
		var parent = imgs[x]
		do { // ha impQ van, akkor be kell töltse mindenképp oket, kivéve ha másik impQ
			IMGelem = parent
			parent = parent.parentElement
		} while ( parent.className.indexOf("{") == -1 && parent != detElem )
		
		//console.log(parent.className)
		//console.log(parent.tagName)
		var isExp = false
		if ( parent.className.indexOf("{") != -1 ) { 
			if ( parent.className.indexOf("imp") != -1 ) { isExp = true }
			if ( parent.tagName == "DETAILS" && parent.parentElement.className.indexOf("imp") != -1 && parent.parentElement.className.indexOf("{") != -1 ) { isExp = true }
		}
		//if ( parent.tagName == "DETAILS" && parent.parentElement.className.indexOf("[") != -1 ) { isExp = false }
		
		//alert("htmlIMGloc: "+htmlIMGloc)
		if ( isExp == true || midQisExp == true ) {
			imgs[x].src = "images/" + imgs[x].dataset.src
			imgs[x].removeAttribute("data-src")
		} else {
			imgs[x].src = path.slice(0,path.lastIndexOf("/")+1) +"images/"+ imgs[x].dataset.src
			imgs[x].removeAttribute("data-src")
		}
		if ( imgs[x].className.indexOf("mwsw") != -1 ) {
			var width = imgs[x].className.slice(imgs[x].className.indexOf("mwsw")+5)
			width = Number(width) * screen.width /100
			width = Math.floor(width)
			imgs[x].style.maxWidth = width+"px"
			//console.log(width)
		}
	}
	
	F_abbrSet(detElem)
	F_synonyms(detElem)
	
	// metszet img-ek
	var imgs = detElem.getElementsByTagName("img")
	for ( var x=0; x<imgs.length; x++ ) {
		if ( imgs[x].classList.contains("metszet") == true ) {
			if ( imgs[x].src ) {
				if ( imgs[x].style.borderColor == "limegreen" ) {
					var source = imgs[x].src
					source = source.slice(0,source.indexOf("."))
					source = source.slice(0,-1)
					source = source + imgs[x].src.slice(imgs[x].src.indexOf("."))
					
					console.log(imgs[x].src +" "+ source)
					imgs[x].src = source
					imgs[x].style.borderColor = "red"
				}
			}
		}
	}
	
	// Youtube Video Load
	var allYoutube = detElem.getElementsByTagName("iframe")
	for ( var i=0; i<allYoutube.length; i++ ) {
		if ( allYoutube[i].dataset.src && allYoutube[i].offsetParent != null ) {
			allYoutube[i].src = allYoutube[i].dataset.src
			allYoutube[i].removeAttribute("data-src")
		}
	}
	
	// PDF Load
	var allPDF = detElem.getElementsByTagName("embed")
	for ( var i=0; i<allPDF.length; i++ ) {
		if ( allPDF[i].dataset.src && allPDF[i].offsetParent != null ) {
			allPDF[i].src = allPDF[i].dataset.src
			allPDF[i].removeAttribute("data-src")
		}
	}
	
	// Video Load
	var allVideo = detElem.getElementsByTagName("video")
	for ( var i=0; i<allVideo.length; i++ ) {
		if ( allVideo[i].offsetParent == null && testLoad == false ) { continue }
		if ( allVideo[i].dataset.src == undefined ) { continue } 
		var source = document.createElement('source')
		if ( midQisExp == true ) {
			source.setAttribute('src', allVideo[i].dataset.src)
		} else {
			source.setAttribute('src', path.slice(0,path.lastIndexOf("/")+1) + allVideo[i].dataset.src)
		}
		source.onerror = function(){
			var textVar = this.src.slice(this.src.lastIndexOf("/")+1)
			if ( missImgs.indexOf(textVar) == -1 ) { missImgs = missImgs+"\n"+textVar }
		};
	
		allVideo[i].removeAttribute("data-src")
		allVideo[i].appendChild(source)
		allVideo[i].style.maxWidth = "98%"
		allVideo[i].style.borderColor = "red"
		//allVideo[i].muted = true;
		allVideo[i].onloadeddata = function() { // kell, különben ha elobb kattolok rá, már nem tölti be
			// controlBar fix!
			this.onclick = function(){
				if ( this.parentElement.className != "videoParentDiv" ) {
					var div = document.createElement("div");
					var parent = this.parentNode;
					parent.insertBefore(div, this);
					div.appendChild(this);
					div.className = "videoParentDiv"
					
					var seekBar = document.createElement("div");
					seekBar.className = "seekBar"
					div.appendChild(seekBar)
					var span = document.createElement("span");
					span.className = "seekBar"
					span.innerHTML = "&nbsp;"
					seekBar.appendChild(span)
				}
				
				if ( this.paused == false ) {
					this.style.borderColor = "red"
					
					var widthPx = this.offsetWidth *this.currentTime /this.duration
					var parentDiv = this.parentElement
					var seekBars = parentDiv.getElementsByTagName("span")
					seekBars[0].style.width = widthPx
					seekBars[0].style.left = this.offsetLeft
					
					this.pause(); 
				} else {
					if ( document.getElementById("playedVideo") ) {
						if ( document.getElementById("playedVideo") != this ) {
							document.getElementById("playedVideo").pause();
							document.getElementById("playedVideo").id = "";
						}
					}
					this.id = "playedVideo";
					this.style.borderColor = "springgreen"
					this.play();
					
					//ezt elég 1x megcsinálni, amikor elindítom (fix majd, mert lehet egyszerusíteni)
					var parentDiv = this.parentElement
					var seekBars = parentDiv.getElementsByTagName("span")
					theSeekBar = seekBars[0].parentElement
					theSeekBar.style.width = this.offsetWidth
					theSeekBar.style.opacity = "1"; 
					theSeekBar.onclick = function(e){
						x = e.pageX - this.offsetLeft
						clickedValue = x * this.max / this.offsetWidth;
						var percent = x / this.offsetWidth
						var playedVideo = document.getElementById("playedVideo")
						playedVideo.style.borderColor = "black"
						playedVideo.pause();
						var currTime = percent * playedVideo.duration
						currTime = Math.floor(currTime);
						//console.log(currTime);
						playedVideo.currentTime = currTime
						
						var seekBars = parentDiv.getElementsByTagName("span")
						var widthPx = playedVideo.offsetWidth *playedVideo.currentTime /playedVideo.duration
						seekBars[0].style.width = widthPx
						seekBars[0].style.left = playedVideo.offsetLeft
					}
				}
			};
		}
	}
	
	// centVideos Load
	var centVideo = document.getElementById("centVideo")
	var allVideoCent = detElem.getElementsByClassName("video")
	for ( var i=0; i<allVideoCent.length; i++ ) {
		allVideoCent[i].onclick = function(){
			if ( midQisExp == true ) {
				centVideo.setAttribute('src', this.dataset.src)
			} else {
				centVideo.setAttribute('src', path.slice(0,path.lastIndexOf("/")+1) + this.dataset.src)
			}
			document.getElementById("centVideoDiv").style.visibility = 'visible';
			vidStatus = "show"
		}
	}
	
	// centVideo Load
	//ezt elég 1x megcsinálni, amikor elindítom (fix majd, mert lehet egyszerusíteni)
	document.getElementById("div_centIMG").appendChild(document.getElementById("centVideoDiv"))
	document.getElementById("centVideoDiv").onclick = function() { vidStatus = true }
	centVideo.onclick = function(){
		if ( this.paused == false ) {
			this.style.borderColor = "black"
			
			var widthPx = this.offsetWidth *this.currentTime /this.duration
			centVideoBar.style.width = widthPx
			centVideoBar.style.left = this.offsetLeft
			
			this.pause(); 
		} else {
			this.style.borderColor = "springgreen"
			this.play();
			
			var centVideoSeek = document.getElementById("centVideoSeek")
			centVideoSeek.onclick = function(e){
				var rect = e.target.getBoundingClientRect();
				//var testX = e.clientX - centVideoSeek.left
				//var testX = rect.left
				var x = e.pageX - rect.left
				var percent = x / this.offsetWidth
				//alert(e.pageX+" - "+rect.left+" = "+x)
				//alert(x+" "+this.offsetWidth+" "+percent)
				centVideo.style.borderColor = "black"
				centVideo.pause();
				var currTime = percent * centVideo.duration
				currTime = Math.floor(currTime);
				//console.log(currTime);
				centVideo.currentTime = currTime
				
				var widthPx = centVideo.offsetWidth *centVideo.currentTime /centVideo.duration
				centVideoBar.style.width = widthPx
				centVideoBar.style.left = centVideo.offsetLeft
			}
		}
	}
	
	
	//if ( e ) { e.stopPropagation() }
}

// TITLE (abbr tooltip)
var tooltipSpan = document.createElement("span");
function func_tooltipFuncs(){
	document.body.appendChild(tooltipSpan)
	tooltipSpan.style.visibility = "hidden";
	tooltipSpan.style.border = "2px solid black";
	tooltipSpan.style.backgroundColor = "azure";
	tooltipSpan.style.position = "absolute";
	tooltipSpan.style.left = "50%";
	tooltipSpan.style.top = "50%";
	tooltipSpan.style.fontSize = "smaller";
	tooltipSpan.style.padding = "2px 2px 2px 5px";
	tooltipSpan.style.zIndex = "4";
}
func_tooltipFuncs()
function func_showTooltip(element){

	defText = element.title
	tooltipSpan.style.visibility = "visible";
	tooltipSpan.innerHTML = element.title
		
	var posX = element.offsetLeft
	var posY = element.offsetTop 
	var par = element.offsetParent

	tooltipSpan.style.minWidth = null;
	tooltipSpan.style.maxWidth = 300;
	if ( tooltipSpan.offsetWidth > 100 ) {
		tooltipSpan.style.minWidth = 100;
	} else {
		tooltipSpan.style.minWidth = tooltipSpan.offsetWidth
	}
	if ( tooltipSpan.offsetWidth > par.offsetWidth - posX -10 ) {
		tooltipSpan.style.left = posX - tooltipSpan.offsetWidth + par.offsetWidth - posX - 10
	} else {
		tooltipSpan.style.left = posX;
	}
	tooltipSpan.style.top = posY +20;
	element.title = '';
}
var table_defText = []
function func_titleVerChange(velement){
	table_defText[velement] = velement.title
	tooltipSpan.style.position = "fixed";
	velement.onclick = function(event){
		tooltipSpan.style.visibility = "visible";
		tooltipSpan.innerHTML = table_defText[this]
		tooltipStatus = 1
		event.stopPropagation();
			
		var posX = this.offsetLeft
		var posY = this.offsetTop 

		tooltipSpan.style.minWidth = null;
		tooltipSpan.style.maxWidth = 300;
		
		var x = event.clientX;
		var y = event.clientY;
		if ( tooltipSpan.offsetWidth > document.body.offsetWidth - posX -10 ) {
			tooltipSpan.style.left = posX - tooltipSpan.offsetWidth + document.body.offsetWidth - posX - 10
		} else {
			tooltipSpan.style.left = x
		}
		tooltipSpan.style.top = y+10
	};
	velement.onmouseover = function(event){
		tooltipSpan.style.visibility = "visible";
		tooltipSpan.innerHTML = this.title
			
		var posX = this.offsetLeft
		var posY = this.offsetTop

		tooltipSpan.style.minWidth = null
		tooltipSpan.style.maxWidth = 300
		
		var x = event.clientX
		var y = event.clientY
		if ( tooltipSpan.offsetWidth > document.body.offsetWidth - posX -10 ) {
			tooltipSpan.style.left = posX - tooltipSpan.offsetWidth + document.body.offsetWidth - posX - 10
		} else {
			tooltipSpan.style.left = x
		}
		tooltipSpan.style.top = y+10

		table_defText[this] = this.title
		this.title = ''
	}
	velement.onmouseout = function(){
		this.title = table_defText[this]
		if ( tooltipStatus != 1 ) { tooltipSpan.style.visibility = "hidden" }
	}
}
function F_titleChange(detElem){
	var abbrok = detElem.querySelectorAll("*[title]");
	for ( var i = 0; i < abbrok.length; i++ ) { func_titleVerChange(abbrok[i]) }
}
F_titleChange(document)

function F_synonyms(detElem){
	function getRandomInt(max) { return Math.floor(Math.random() * Math.floor(max)) }
	var synonyms = detElem.getElementsByClassName("syno")
	for ( var x=0; x<synonyms.length; x++ ) {
		if ( synonyms[x].offsetParent == null ) { continue }
		//if ( synonyms[x].dataset.syno == null ) { continue }
		
		synonyms[x].style.fontStyle = "italic"
		//synonyms[x].style.backgroundColor = "#FFFFB0"
		synonyms[x].style.cursor = "pointer"

		// egy randomot kiválaszt
		synonyms[x].dataset.syno = synonyms[x].innerHTML
		var synos = synonyms[x].dataset.syno
		synos = synos.split(" | ")
		var num = getRandomInt(synos.length)
		synonyms[x].innerHTML = synos[num]

		synonyms[x].onclick = function() { // sorban következőt kiválasztja
			var synos = this.dataset.syno
			synos = synos.split(" | ")
			if ( this.innerHTML == synos[0] ) { 
				synos.push(synos[0])
				synos.shift()
				this.dataset.syno = synos.join(" | ")
			}
			this.innerHTML = synos[0]
		}
	}
}

var imgStatus
function F_abbrSet(elem){ 
// azt csináljam, hogy a li textet írja át alapból: <span style="visibility:hidden"> ..text.. <span>, majd amikor ráklikkelek removeolja a spant --> megmaradnak a pontok
// func_saveQuest elott kell legyen, de a F_impQs után
	var abbrSpan = elem.getElementsByClassName("abbr");
	for ( var j = 0; j < abbrSpan.length; j++ ) {
		if ( elem.open != false ) {
			abbrSpan[j].style.cursor = "pointer"
			if ( !abbrSpan[j].Text ) {
				abbrSpan[j].parentElement.style.visibility = "hidden"
				abbrSpan[j].style.visibility = "visible"
				abbrSpan[j].style.backgroundColor = "Bisque";
			}
		} 
		abbrSpan[j].onclick = function(){
			if ( this.parentElement.style.visibility != "visible" ) { 
				this.style.cursor = ""
				this.style.backgroundColor = "";
				this.parentElement.style.visibility = "visible"
			}
		}
	}
}
function F_imgClick(detElem){ // képnagyítás balKlikkel középre
	var centerDiv = document.getElementById("div_centIMG")
	var centerImage = document.getElementById("img_centIMG")
	function F_showCenterDiv(detElem) {
		imgStatus = "show"
		centerDiv.style.visibility = "visible";
		centerImage.src = detElem.src
		centerDiv.style.maxHeight = "95%";
		centerDiv.style.maxWidth = "95%";
		centerDiv.style.overflow = "auto";

		centerDiv.style.position = "fixed";
		centerDiv.style.left = "50%";
		centerDiv.style.top = "50%";
		centerDiv.style.transform = "translate(-50%, -50%)";
	}
	var imgs = detElem.getElementsByTagName("IMG")
	for ( var i=0;  i<imgs.length;  i++ ) {
		imgs[i].onclick = function() { F_showCenterDiv(this) }
		if ( imgs[i].classList.contains("mini") == true && isAndroid == false ) {
			imgs[i].onmouseover = function() { 
				this.style.position = "absolute"
				var rect = this.getBoundingClientRect()
				var thisW = this.width *4
				if ( rect.left < thisW ) { this.style.left = thisW }
				this.style.transform = "scale(8,8)"
				this.style.zIndex = "4"
			}
			imgs[i].onmouseout = function() {
				this.style.position = ""
				this.style.transform = "scale(1,1)"
				this.style.left = ""
				this.style.zIndex = "1"
			}
		}
		if ( imgs[i].classList.contains("metszet") == true ) {
			imgs[i].onclick=function(){
				if ( this.style.borderColor != "limegreen" ) {
					var locX = this.src.lastIndexOf(".")
					this.src = this.src.slice(0,locX)+"m"+this.src.slice(locX)
					this.style.borderColor = "limegreen"
				} else {
					F_showCenterDiv(this)
				}
			};
		}
	}
}
function F_centIMG(){ // create center div + image
	var centerDiv = document.createElement("div")
	centerDiv.id = "div_centIMG"
	document.body.appendChild(centerDiv)
	centerDiv.style.visibility = "hidden"
	centerDiv.style.border = "5px ridge LightGray"
	centerDiv.style.zIndex = "4"
	var centerImage = document.createElement("img")
	centerImage.id = "img_centIMG"
	centerDiv.appendChild(centerImage)
	centerImage.style.maxWidth = "none"
	centerImage.style.float = "none"
	
	document.body.onclick = function(){
		if ( imgStatus == "hide" ) { centerDiv.style.visibility = "hidden" }
		imgStatus = "hide"

		tooltipStatus = tooltipStatus -1
		if ( tooltipStatus != 1 ) { tooltipSpan.style.visibility = "hidden" }

		if ( vidStatus == "hide" ) { 
			document.getElementById("centVideoDiv").style.visibility = "hidden" 
			document.getElementById("centVideo").pause()
		}
		vidStatus = "hide"
	}
}
F_centIMG()
tooltipSpan.onclick = function(){ tooltipStatus = tooltipStatus +1 }

function F_clearLS(detElem) {
	var bgColor = detElem.style.backgroundColor
	detElem.style.backgroundColor = "aqua"
	setTimeout(localStorage.clear(), 500)
	setTimeout(function () { detElem.style.backgroundColor = bgColor  }, 500);
	
	localStorage.setItem("lsCount",0)
	localStorage.setItem("toggleLoad", "false")
}
function F_InputLoad(detElem) {
	var bgColor = detElem.style.backgroundColor
	detElem.style.backgroundColor = "aqua"
	setTimeout(document.getElementById('fileinput').click(), 500)
	setTimeout(function () { detElem.style.backgroundColor = bgColor }, 500);
}
function F_InputSave(detElem) {
	detElem.style.backgroundColor  = "green"
	setTimeout(function () { F_saveLS() }, 500) 
}

// LOAD LS
function F_openLS() {
	var text = ""
	
	var lsLength = localStorage.length
	for ( var i=0; i<lsLength; i++ ) { 
		text = text + localStorage.key(i) + " = " + localStorage.getItem(localStorage.key(i)) + " NEXTONE \n"
	}
	
	var wnd = window.open("about:blank", "", "_blank");
	wnd.document.write(text);
	
	document.getElementById("btn_openLS").style.backgroundColor = ""
	document.getElementById("btn_openLS").style.color = ""
}
function func_loadLS(content) {
	do {
		var phaseText = content.slice(0,content.indexOf(" NEXTONE \n"));
		content = content.slice(content.indexOf(" NEXTONE ") +10)
		var variable = phaseText.slice(0,phaseText.indexOf(" == "));
		var price = phaseText.slice(phaseText.indexOf(" == ") +4);
		localStorage.setItem(variable, price)
	}
	while (phaseText.length > 1);
}
var fileInput = document.getElementById('fileinput');
fileInput.addEventListener('change', function(e){
	var file = fileInput.files[0];
	var textType = /text.*/;
	var content

	if (file.type.match(textType)) {
		var reader = new FileReader();

		reader.onload = function(e) {
			content = reader.result
			func_loadLS(content)
		}

		reader.readAsText(file);    
	} else {
		alert("File not supported!")
	}
});

// SAVE LS
var downA = document.createElement('a');
function download(fileName,text) { // (netről copyztam) --> (azért kellett, mert androidon máshogy nemtudom lementeni)
	/*var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.appendChild(document.createTextNode("Save file"));
  
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
	*/

	function F_downloadTXT(text,fileName){
		downA.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		downA.setAttribute('download', fileName);
		if (document.createEvent) {
			var event = document.createEvent('MouseEvents');
			event.initEvent('click', true, true);
			downA.dispatchEvent(event);
		} else {
			downA.click();
		}
	}
	
	//alert(text.length) 
	/* if ( isAndroid ) { // androidon crashelne, akkor ezzel megtudom oldani (túl sok a karakter)
		var num = text.length / 100000
		num = Math.ceil(num)
		for ( var i=0; i<num; i++ ) {
			var acText = text.slice(0,100000)
			text = text.slice(100000)
			fileName = fileName.replace(".txt","_"+i+".txt")
			F_downloadTXT(acText,fileName)
		}
	} else { */
		F_downloadTXT(text,fileName)
	// }
}
function F_saveLS() {
	if ( localStorage.getItem("lsName") == null ) { localStorage.setItem("lsName","localStorage") }
	
	localStorage.setItem("hk.lastSavedLS",0)
	var text = ""
	
	var count = localStorage.getItem("lsCount")
	count = Number(count) +1
	localStorage.setItem("lsCount",count)
	
	
	var lsLength = localStorage.length
	var expQk = []
	for ( var i=0; i<lsLength; i++ ) {
		if ( localStorage.key(i).indexOf("hkExpQ.") != -1 ) {
			var qID = localStorage.getItem(localStorage.key(i))
			qID = qID.slice(0,qID.indexOf(" "))
			expQk[qID] = true
		}
	}
	for ( var i=0; i<lsLength; i++ ) {
		//if ( localStorage.key(i).indexOf("hkExpQ.") != -1 ) { continue }
		if ( localStorage.key(i) == "loadQs.lastTime" ) { continue }
		if ( expQk[localStorage.key(i)] == true ) { continue }
		text = text + localStorage.key(i) + " == " + localStorage.getItem(localStorage.key(i)) + " NEXTONE \n"
	}
	var fileName = localStorage.getItem("lsName") +count +'.txt'
	download(fileName, text);
	
	if ( document.getElementById("btn_saveLS") ) {
		document.getElementById("btn_saveLS").style.backgroundColor = "Chartreuse"
		document.getElementById("btn_saveLS").style.color = ""
	}
}
//JSON.stringify(localStorage)

function F_skipTime() { // következő vizsga hány óra múlva lesz
	var input = document.createElement("input")
	document.getElementById("table_weboldalak").appendChild(input)
	input.type = "number"
	input.style.width = "50px"
	input.style.position = "absolute"
	input.style.right = "5px"
	input.style.top = "200px"
	var date = new Date();
	var remain = Math.floor(date.getTime()/3600000)
	remain = localStorage.getItem("vizsgaSkip") - remain
	if ( remain < 0 ) { remain = 0 }
	input.value = remain
	
	input.oninput = function(){ 
		var date = new Date();
		var time = Math.floor(date.getTime()/3600000)
		time = time + Number(this.value)
		localStorage.setItem("vizsgaSkip",time)
	}
}
F_skipTime()

function F_toggleLoad(btn) {
	console.log("F_toggleLoad: "+localStorage.getItem("toggleLoad"))
	if ( localStorage.getItem("toggleLoad") != "false" ) {
		localStorage.setItem("toggleLoad", "false")
		btn.style.backgroundColor = ""
	} else {
		localStorage.setItem("toggleLoad", "true")
		btn.style.backgroundColor = "green"
	}
}
if ( isAndroid != false ) { localStorage.setItem("toggleLoad","false") }
if ( localStorage.getItem("toggleLoad") != "false" ) { 
	document.getElementById("btn_toggleLoad").style.backgroundColor = "green"
}

var newText
function F_cutImpQs(text){
	// kivágom a <span class="imp [x]"> itt lévo szöveget vágom ki </span> (div-nél is)
	
	do {
		var begin = text.indexOf('class="imp [')
		var end
		var cuttenText
		var otherText = ""
		
		cuttenText = text.slice(begin)
		begin = begin + cuttenText.indexOf(">") +1
		cuttenText = text.slice(begin)
		
		if ( cuttenText.indexOf('class="imp [') != -1 ) {
			var num = 0
			otherText = cuttenText
			do {
				if ( otherText.indexOf('class="imp [') != -1 && otherText.indexOf('class="imp [') < otherText.indexOf("> <!---") ) {
					num = num +1
					otherText = otherText.slice(otherText.indexOf('class="imp [')+1)
				} else if ( num > 0 ) {
					num = num -1
					otherText = otherText.slice(otherText.indexOf('> <!---')+1)
				}
			}
			while ( num > 0 )
		}
		
		if ( otherText.indexOf('> <!---') != -1 ) {
			end = cuttenText.indexOf(otherText) + otherText.indexOf('> <!---') + begin
			//alert("van" + end)
		} else {
			end = cuttenText.indexOf('> <!---') + begin
		}
		cuttenText = text.slice(begin,end)
		cuttenText = cuttenText.slice(0,cuttenText.lastIndexOf("<"))
		
		text = text.replace(cuttenText,"")
		findNext = text.slice(text.indexOf('class="imp ['))
	}
	while (findNext.indexOf('class="imp ['))
	newText = text
}

function F_QtxtQname(text){
	var qName = null
	/*if ( text.slice(0,1) == "<" ) { 
		qName = text.slice(text.indexOf(">"),text.lastIndexOf("</")) 
		//console.log(text)
		//alert("stop")
	}*/
	if ( text.indexOf("<summary") != -1 ) { 
		qName = text.slice(text.indexOf("<summary"),text.indexOf("</summary>")) 
		qName = qName.slice(qName.indexOf(">")+1)
	} else if ( text.indexOf("<font") != -1 ) { 
		qName = text.slice(text.indexOf("<font")+1,text.indexOf("</font")) 
		qName = qName.slice(qName.indexOf(">")+1)
	} else if ( text.indexOf("<div") != -1 ) { 
		qName = text.slice(text.indexOf("<div")+1,text.indexOf("</div")) 
		qName = qName.slice(qName.indexOf(">")+1)
	} else if ( text.indexOf("<span") != -1 ) { 
		qName = text.slice(text.indexOf("<span")+1,text.indexOf("</span")) 
		qName = qName.slice(qName.indexOf(">")+1)
	}
	if ( qName == null ) { 
		//console.log(text)
		qName = text
		/*if ( qName.indexOf("kerdes") != -1 ) { // span,div
			qName = qName.slice(qName.indexOf(">")+1)
			qName = qName.slice(0,qName.indexOf("</"))
		}*/
		//console.log("ha hiba van, lehet itt találok megoldást: "+Qtxt)  // a funkcióra hivatkozás még különbözo Qtxt-ekkel történik, és nem volt idom szépen megírni, de egyenlore elvileg jó így is, csak hibára fogékonyabb így
	}
	if ( qName.slice(0,1) == "[" ) { qName = qName.slice(qName.indexOf("]")+2) }
	return qName
}

function F_getImpID(classTXT){
	impID = " !-nincs-! "
	if ( classTXT.indexOf("{") != -1 ) {
		var begin = classTXT.indexOf("{")
		var end = classTXT.indexOf("}") +1
		impID = classTXT.slice(begin,end)
	} else if ( classTXT.indexOf("[") != -1 ) {
		var begin = classTXT.indexOf("[")
		var end = classTXT.indexOf("]") +1
		impID = classTXT.slice(begin,end)
	}
}

function F_setCount(Qelem) {
	var count
	if ( Qelem.className.indexOf("[") != -1  || Qelem.className.indexOf("{") != -1 ) { 
		F_getImpID(Qelem.className)
		count = impID
		var altQk = Qelem.getElementsByClassName("kerdes")
		for ( var i = 0; i < altQk.length; i++ ) {
			var altQ = altQk[i]
			var qName = F_QtxtQname(altQ.innerHTML)
			if ( qName.slice(-3) == "-->" ) { continue }
			if ( altQ.className.indexOf("[") != -1  || altQ.className.indexOf("{") != -1 ) { continue }
			altQ.innerHTML = altQ.innerHTML.replace(qName,qName+ "<!--" +count+ "-->")
		}
		/*if ( Qelem.className.indexOf("imp") != -1 ) { // ez esetben a Quest hosszát mentené el impQ-nál is, így változtatásakor upgradelni kéne mindig (ami fölös sztem, mert nagyon ritka)
			F_getImpID(Qelem.className)
			F_loadQtxt(impID)
			count = Qtxt
		} else {
			count = Qelem.innerHTML
		}*/
	} else if ( Qelem.className.indexOf("abbr") != -1 ) { 
		count = Qelem.parentElement.innerHTML
		count = count.length
	} else { // details, span, font, abbr
		count = Qelem.innerHTML
		count = count.length
	}
	var qName = F_QtxtQname(Qelem.innerHTML)
	count = qName+ "<!--" +count+ "-->"
	Qelem.innerHTML = Qelem.innerHTML.replace(qName,count)
}
function F_checkQs(){
	/*F_getTime()
	var diffTime = myTime-oldTime
	console.log("– F_checkQs BEGIN – " + diffTime)*/
	
//console.clear()
	for ( var i=0; i<kerdesek.length; i++ ) { 
		var Qelem = kerdesek[i]
		var qName = F_QtxtQname(Qelem.innerHTML)
		if ( qName == "" || qName == " " ) { continue }
		if ( qName.slice(-3) != "-->" ) { F_setCount(Qelem) }
		qName = F_QtxtQname(Qelem.innerHTML)
		arrQnames[qName] = true
		var Qtxt = '<'+Qelem.tagName+' class="'+Qelem.className+'">'+Qelem.innerHTML+'</'+Qelem.tagName+'>'
		arrQtxts.push(Qtxt)
	}
	var details = document.body.getElementsByTagName("DETAILS");
	for ( var i=0; i<details.length; i++ ) { 
		var childs = details[i].childNodes;
		objQnameQtxt[childs[0].innerHTML] = details[i].innerHTML
	}
	
	/*F_getTime()
	var diffTime = myTime-oldTime
	console.log("– F_checkQs END – " + diffTime)*/
}

var changeStatus = false
function F_oldQchange(oldLSid){
	//console.clear()
	var oldQtxt = localStorage.getItem(oldLSid)
	console.log("– F_oldQchange –")
	console.log("oldLSid: "+oldLSid+": "+oldQtxt)
	//console.log("oldQtxt: "+oldQtxt)
	changeStatus = true
	document.getElementById("div_upgQ").style.display = 'block';
	
	var jegy = localStorage.getItem(oldLSid+"_jegy")
	var repeat = localStorage.getItem(oldLSid+"_repeat")
	var date = new Date();
	var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(oldLSid+'_idopont')
	if ( jegy != null ) {
		document.getElementById("div_oldJEGY").innerHTML = repeat+" – "+idopont
	} else {
		document.getElementById("div_oldJEGY").innerHTML = "– – –"
	}
	
	var newQtxt
	
	var arrNEWtxt = []
	console.log(oldQtxt)
	var summaryQ = oldQtxt.slice(0,oldQtxt.lastIndexOf("<!--"))
	
	for ( var i=0; i<kerdesek.length; i++ ) { 
		var Qelem = kerdesek[i]
		var Qtext = '<details class="' +Qelem.className+ '">' +Qelem.innerHTML+ "</details>"
		var Qname = F_QtxtQname(Qtext)
		Qname = Qname.slice(0,Qname.lastIndexOf("<!--"))
		if ( Qname == summaryQ && arrNEWtxt.indexOf(Qtext) == -1 ) {
			//console.log(Qtext)
			arrNEWtxt.push(Qtext)
		}
	}
	document.getElementById("div_upgQ").innerHTML = defaultText + oldQtxt + "<hr>" // utána kell legyen, különben ezt is beleveszi a kerdesek[i]-be
	//alert("stop")

	// skip BEGIN
		var option = document.createElement("option")
		option.id = "option_ReplaceQ_skip"
		document.getElementById("select_replaceQ").appendChild(option)
		var text = document.createTextNode(" ––– ")
		option.appendChild(text)
	// skip END
	for ( var i=0; i<arrNEWtxt.length; i++ ) {
		var newQtxt = arrNEWtxt[i]
		var text = document.getElementById("div_upgQ").innerHTML // (kell hogy megorizze a buttont + selectet)
		document.getElementById("div_upgQ").innerHTML = text + newQtxt
		var x = i +1
		if ( !document.getElementById("option_ReplaceQ_"+x) ) {
			var option = document.createElement("option")
			option.id = "option_ReplaceQ_"+x
			document.getElementById("select_replaceQ").appendChild(option)
			var text = document.createTextNode(x)
			option.appendChild(text)
		}
		//document.getElementById("option_ReplaceQ_"+i).value = newLSid
	}
	if ( arrNEWtxt.length == 1 ) { 
		document.getElementById("select_replaceQ").value = 1 
		// itt valami autoupgrage kéne, ha megegyezik nagyjából, így gyorsabb (ha feltétel azért szükséges, mert sajna azis lehet, hogy két ugyanolyan nevu kveszt volt, és egyiknek megváltoztattam a nevét, erre a másikra akarja felupgradelni) --> ha két azonos nevu Q van, jelezze oket oldal betöltésnél már, és tána írok commentbe mögé egy v1/2/3 stb.-t
	} else {
		// alert("stop")
	}
	
	document.getElementById("select_replaceQ").onchange = function() {
		var value = document.getElementById("select_replaceQ").value
		var Qtxt = arrNEWtxt[value]
		var LSid = arrQnameLSid[Qtxt]
		if ( typeof LSid !== "undefined" ) {
			var jegy = localStorage.getItem(LSid+"_jegy")
			var date = new Date();
			var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(LSid+'_idopont')
			document.getElementById("div_newJEGY").innerHTML = jegy+" – "+idopont
		} else {
			document.getElementById("div_newJEGY").innerHTML = "– – –"
		}
	}
	
	document.getElementById("button_replaceQ").onclick = function() {
		console.log("– button_replaceQ CLICK")
		
		var value = document.getElementById("select_replaceQ").value

		if ( value != "–––" ) {
			var Qtxt = arrNEWtxt[value-1]
			//alert(Qtxt)
			var qName = F_QtxtQname(Qtxt)
			
			localStorage.removeItem(oldQtxt) // régit letörli
			localStorage.setItem(oldLSid,qName) // frissíti
			localStorage.setItem(qName,oldLSid) // újat beteszi
			
			arrQtxts.push(Qtxt) // ez nemtudom miért kell
		} else {
			localStorage.removeItem(oldLSid)
			// note ido stb. is remove-olni kéne !!!
			
			var fullString = localStorage.getItem(document.title+"_LSids")
			fullString = fullString.replace(" "+oldLSid,'')
			localStorage.setItem(document.title+"_LSids",fullString)
		}
		F_oldQcheck()
		func_calcOldNew()
	}
	var allDetails = document.getElementById("div_upgQ").getElementsByTagName("details")
	for ( var i=0; i<allDetails.length; i++ ) {
		allDetails[i].ontoggle = function(){
			F_loadImgVideo(this)
			if ( isAndroid ) { F_setAbbrAndroid(this) }
		}
	}

}

function F_setAbbrAndroid(detElem) {
	var allAbbr = detElem.getElementsByTagName("abbr")
	for ( var i=0; i<allAbbr.length; i++ ) { allAbbr[i].style.lineHeight = "30" }
}

function F_oldQcheck(){
	/*F_getTime()
	var startTime = myTime*/
	
	var oldString = []
	
	function doStuffs(LSid){
		var Qname = localStorage.getItem(LSid)
		if ( arrQnames[Qname] == true ) { return } 
		
		console.log(LSid+"(LSid)-missing: "+Qname)
		var jegy = localStorage.getItem(LSid+"_jegy")
		var skip = localStorage.getItem(LSid+"_skip")
		if ( jegy != null || skip != null ) {
			oldString.push(LSid)
			console.log(LSid+"(LSid)-missing: "+Qname)
			//alert("w1: missing: "+Qname)
		} else {
			console.log("remove Old: "+LSid)
			localStorage.removeItem(LSid)
			// note ido stb. is remove-olni kéne !!!
			fullString = fullString.replace(LSid,'')
			localStorage.setItem(document.title+"_LSids",fullString)
		}
	}
	
	// upgradelt Q-ket csekkolja
	var fullString = localStorage.getItem(document.title+"_LSids")
	if ( fullString ) {
		fullArray = fullString.split(" ") // elso alkalommal különben error lesz
		for ( var i=0; i<fullArray.length; i++ ) {
			var LSid = fullArray[i]
			if ( LSid == "" || LSid == "null" ) { continue } // ilyenek bekerülnek valamiért
			doStuffs(LSid)
		}
	}

	var oldQtxt
	var oldLSid = false

	var size = oldString.length;
	if ( size > 0 ) {
		document.getElementById("btn_upgQ").value = size
	} else {
		document.getElementById("btn_upgQ").style.display = 'none'
	}
	

	if ( size > 0 ) { // itt nem kell for ciklus, elég csak megnézni, hogy van-e egy, hiszen amikor rákattolok az upgrade-re, akkor kidobja kövit
		//alert("w2: "+size)
		for ( var i=0; i<oldString.length; i++ ) {
			var LSid = oldString[i]
			if ( LSid != 0 ) { //valamiért van ilyen is benne
				F_oldQchange(LSid) 
				//delete arrQnameLSid[oldQtxt]
				break;
			}
		}
	} else { // ez 1x mindenképp lefut (max a legvégén, amikor már az összes upgradeQ megvolt)
		document.getElementById("div_upgQ").innerHTML = ""
		document.getElementById("div_upgQ").style.display = 'none'
	}
	/*F_getTime()
	var diffTime = (myTime-startTime).toFixed(2)
	console.log("– F_oldQcheck – " + diffTime+"s")*/
}

var myTestTable = []

function escapeRegExp(oldTxt) {
	return oldTxt.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function replaceAll(string,oldTxt,newTxt) {
	return string.replace(new RegExp(escapeRegExp(oldTxt), 'g'), newTxt);
}		
//INNERhtml = replaceAll(INNERhtml, oldTxt, newTxt)

// pl. ez a button nem fog muködni, mert az impQbegin elott van!
/*var buttonX = document.createElement("BUTTON")
buttonX.innerHTML = "anyad"
document.body.appendChild(buttonX)
buttonX.style.position = "absolute"
buttonX.style.right = "100px"
buttonX.style.top = "20px"
buttonX.onclick = function(){ 
	alert("sajt")
}*/

/* 
 ha ráklikkelek egy details-ra, akkor csak azokat kell betöltse, amik visible-k!! -> erre írjak egyet
 egyrészt ha ki van jelölve a tétel, akkor be kell töltse az összeset 
	// ha F_detailsToggle -ba is ezt használnám, akkor látható, hogy ha egy detailst megnyitok, majd csukom, akkor 2x lesznek ott a Q-k
*/
/* impQ - megoldás ?!
 + csak a impQ-ban töltse be az elején az altQ-kat (oldMethoddal: nem replace, hanem innerHTML)
 + csak akkor töltse be a többinél az impQ-kat, ha megnyitom --> probléma elvileg, hogy a feladatmegoldó oldalra átklikkelve nem jelenik meg akkor az összes quest ?
*/
var Qtxt,count
function F_checkSearchTXT(newQtxt,elemType) {
	var oldTxt = newQtxt
	newQtxt = elemType
	oldTxt = oldTxt.slice(newQtxt.length)
	newTXT = 1
	elemType = elemType.slice(elemType.lastIndexOf("<")+1,-1)
	do {
		var divStart = oldTxt.indexOf('<'+elemType) +4
		var divEnd = oldTxt.indexOf('</'+elemType) +4
		/*console.clear()
		console.log(divStart+" vs "+divEnd)
		console.log(newQtxt)
		console.log(oldTxt)
		alert("newTXTstart: "+newTXT)*/
		if ( divStart < divEnd && divStart != 3 ) { 
			newTXT = newTXT +1
			newQtxt = newQtxt + oldTxt.slice(0,divStart)
			oldTxt = oldTxt.slice(divStart)
		}
		if ( divStart > divEnd && divEnd != 3 ) { 
			newTXT = newTXT -1
			newQtxt = newQtxt + oldTxt.slice(0,divEnd)
			oldTxt = oldTxt.slice(divEnd)
		}
		if ( divEnd == 3 ) { newTXT = -1 }
		/*console.clear()
		console.log(divStart+" vs "+divEnd)
		console.log(newQtxt)
		console.log(oldTxt)
		alert("newTXTend: "+newTXT)*/
	} while ( newTXT > 0 )
	if ( newTXT == 0 ) { newTXT = true }
	if ( newTXT == -1 ) { newTXT = false }
	//alert(newTXT)
	/*console.clear()
	console.log(newQtxt)
	alert(startP+" vs "+newQtxt.length)*/
}
function F_loadTetelQs(){ // impQnew-al betölti az aktív tételeket
	// azért elején töltööm be, mert toggleAll-ra klikk így gyorsabb lesz (nem kell ott még ezt is betöltenie)
	// de ha akarom, akkor elég ezt a funkció lehívást commentbe tenni, akkor is betölti ToggleAll-nál (beírtam kódba már azt is)
	var Table = document.querySelectorAll('.phase,.status')
	for ( var i=0;  i<Table.length;  i++ ) { // tetelek
		var tetelID = i+","+ Table[i].innerHTML +"_button"
		var phaseDiv = Table[i].parentElement
		if ( localStorage.getItem(tetelID) == "true" ) { F_impQlot(phaseDiv) }
	}
}
F_loadTetelQs()

var pageLinks = document.getElementsByClassName("page")
var pagePath, searchPath // img betöltésnél használja
var pageTexts = {}
function F_andrHide() { // androidon elrejti a könyveket + tételeket
	var ua = navigator.userAgent.toLowerCase();
	if ( isAndroid ) { document.getElementById("tetelek").style.display = "none" }
}
//F_andrHide()
function F_pageOpen() {
	for ( var i=0; i<pageLinks.length; i++ ) { 
		var detElem = pageLinks[i]
		detElem.onmousedown = function(event) {
			threeSec = 0
			if ( event.button == 1 ) { // middle click
				pagePath = this.dataset.src
				var currPath = window.location.href
				currPath = currPath.slice(0,currPath.lastIndexOf("/")+1)
				currPath = currPath +pagePath
				window.location.href = currPath
			} else if ( event.button == 0 ) { // left click
				for ( var x=0; x<pageLinks.length; x++ ) { pageLinks[x].style.backgroundColor = "" }
				this.style.backgroundColor = "yellow"
				F_loadPageText(this.dataset.src)
			}
		}
		// favicon
		var favicons = detElem.getElementsByClassName("targy")
		var path = detElem.dataset.src
		if (favicons[0] ) { favicons[0].src = path.slice(0,path.lastIndexOf("/")+1)+"favicon.bmp" }
	}
}
F_pageOpen()
function F_targyTetelek() { // hány %-on állok velük
	var howmany = 3 +1
	for (i = 1; i < howmany; i++) { document.getElementById("elet"+i+"2").value = localStorage.getItem("elettPerc"+i) }
	function calcValPerc(){
		document.getElementById("percentX").innerHTML = 1/100/100
		for (i = 1; i < howmany; i++) { 
			var max = document.getElementById("elet"+i+"1").innerHTML
			max = Number(max)
			var now = document.getElementById("elet"+i+"2").value
			now = Number(now)
			var perc = 100*now/max
			document.getElementById("elet"+i+"3").innerHTML = Math.round(perc) + "%"
			
			perc = 100*now* Number(document.getElementById("percentX").innerHTML) /max
			document.getElementById("percentX").innerHTML = perc
		}
		var num = Number(document.getElementById("percentX").innerHTML)
		document.getElementById("percentX").innerHTML = num.toFixed(2)
		
		for (i = 1; i < howmany; i++) { 
			document.getElementById("elet"+i+"4").innerHTML = 1/100/100
			for (x = 1; x < howmany; x++) { 
				var max = document.getElementById("elet"+x+"1").innerHTML
				max = Number(max)
				var now = document.getElementById("elet"+x+"2").value
				now = Number(now)
				if ( x == i ) { now = now+1 }
				
				perc = 100*now* Number(document.getElementById("elet"+i+"4").innerHTML) /max
				document.getElementById("elet"+i+"4").innerHTML = perc
			}
			var num = Number(document.getElementById("elet"+i+"4").innerHTML)
			num = num.toFixed(2)
			num = num - Number(document.getElementById("percentX").innerHTML)
			document.getElementById("elet"+i+"4").innerHTML = "+"+num.toFixed(2)+"%"
		}
	}
	calcValPerc()
	for (i = 1; i < howmany; i++) { 
		document.getElementById("elet"+i+"2").oninput = function(){ 
			calcValPerc()
			var id = this.id
			id = id.slice(-2)
			id = id.slice(0,1)
			localStorage.setItem("elettPerc."+id,this.value)
		} 
	}
	
	//console.log()
	document.getElementById("elet12").value = localStorage.getItem("elettPerc.1")
	document.getElementById("elet22").value = localStorage.getItem("elettPerc.2")
	document.getElementById("elet32").value = localStorage.getItem("elettPerc.3")
	calcValPerc()
}
F_targyTetelek()
function F_searchQText(detElem){
	searchPath = detElem.dataset.path
	var targyText = pageTexts[searchPath]
	document.getElementById("div_searchQTargy").innerHTML = targyText
	document.getElementById("div_MidQ").dataset.origin = "searchQs"
	F_checkEXPs()
	
	var qTxt = objQnameQtxt[detElem.innerHTML]
	qTxt = qTxt.slice(qTxt.indexOf("<summary"),qTxt.lastIndexOf("</details"))
	var qTitle = qTxt.slice(qTxt.indexOf(">")+1,qTxt.indexOf("</summary"))
	document.getElementById("btn_MidQ").innerHTML = qTitle
	qTxt = qTxt.slice(qTxt.indexOf("</summary"))
	qTxt = qTxt.slice(qTxt.indexOf(">")+1)
	document.getElementById("div_MidQText").innerHTML = qTxt

	document.getElementById("div_MidQ").style.display = "block"
	F_detailsToggle(document.getElementById("div_MidQText"))
}
function F_searchWord() {
	function F_searchResult() {
		var paths = Object.keys(pageTexts)
		//document.getElementById("input_SearchW").value = "stressz"
		var searchText = document.getElementById("input_SearchW").value
		searchText = searchText.toLowerCase()
		var fullText = ""
		document.getElementById("div_SearchWText").innerHTML = ""
		var hianyzik = ""
		
		for ( var x in paths ) {
			var path = paths[x]
			var targyText = pageTexts[path]
			if ( targyText == null ) { 
				hianyzik = hianyzik +path.slice(path.lastIndexOf("/"))+" "
				continue
			}
			if ( targyText.toLowerCase().indexOf(searchText) == -1 ) { continue }
			fullText = fullText+ path
			do {
				//var locST = targyText.toLowerCase().indexOf(searchText)
				var prevText, postText, positive
				function F_searchPrevText(){
					positive = false
					prevText = targyText.slice(0 , targyText.toLowerCase().indexOf(searchText))
					var string
					do {
						index = prevText.lastIndexOf("<details")
						string = prevText.slice(prevText.lastIndexOf("<details"))
						//console.clear()
						//console.log(string)
						//console.log(prevText)
						//alert("stop")
						prevText = prevText.slice(0 , prevText.lastIndexOf("<details"))
						if ( string.indexOf("</details") == -1 ) { positive = true }
					} while ( prevText.indexOf("<details") != -1 && positive != true )
					if ( positive = true ) { prevText = targyText.slice(index , targyText.toLowerCase().indexOf(searchText)) }
				}
				F_searchPrevText()
				function F_searchPostText(){
					positive = false
					postText = targyText.slice(targyText.toLowerCase().indexOf(searchText))
					var string
					var index = 0
					do {
						index = index + postText.indexOf("</details") +10
						string = postText.slice(0 , postText.indexOf("</details"))
						//console.clear()
						//console.log(string)
						//console.log(postText)
						//alert(index)
						postText = postText.slice(postText.indexOf("</details")+10)
						if ( string.indexOf("<details") == -1 ) { positive = true }
					} while ( postText.indexOf("</details") != -1 && positive != true )
					if ( positive = true ) { postText = targyText.slice(targyText.toLowerCase().indexOf(searchText) , targyText.toLowerCase().indexOf(searchText) +index) }
				} // <a>ez itt <a>egy</a> teszt szöveg, melyben <a>azt</a> teszt-elem</a>
				if ( positive == true ) { F_searchPostText() }
				
				if ( positive == false ) { continue }
				var resultText = prevText + postText
				//console.clear()
				//console.log(prevText)
				//console.log(postText)
				//alert(searchText)
				
				var summaryText = resultText.slice(resultText.indexOf("summary")+2)
				summaryText = summaryText.slice(summaryText.indexOf(">")+1)
				summaryText = summaryText.slice(0,summaryText.indexOf("</summary"))
				objQnameQtxt[summaryText] = resultText
				
				fullText = fullText+ "<li><span data-path='"+path+"' style='color:green; cursor:pointer' onclick='F_searchQText(this)'>"+summaryText+"</span></li>"
				targyText = targyText.slice(targyText.indexOf(resultText)+resultText.length)
			} while ( targyText.toLowerCase().indexOf(searchText) != -1 )
			document.getElementById("div_SearchWText").innerHTML = fullText
			console.log(path)
		}
		if ( hianyzik != "" ) { console.log("HIÁNYZIK:"+hianyzik) }
		document.getElementById("btn_SearchW").style.color = ""
		document.getElementById("btn_SearchW").style.backgroundColor = ""
		document.getElementById("div_SearchW").style.backgroundColor = "white"
	}
	
	function F_DivSearchWord() {
		var div = document.createElement("div")
		document.body.appendChild(div)
		div.id = "div_SearchW"
		div.style.backgroundColor = "white"
		div.style.overflow = "auto"
		div.style.border = "8px solid black"
		div.style.outline = "5px solid aqua"
		div.style.display = "none"
		//div.style.display = "block"
		div.style.position = "fixed"
		div.style.left = "5px"
		div.style.right = "5px"
		div.style.top = "4px"
		div.style.bottom = "4px"
		div.style.zIndex = "1"
		
		var iframe = document.createElement("iframe")
		document.body.appendChild(iframe)
		iframe.style.display = "none"
		iframe.id = "iframe_targyak"
		iframe.name = "iframe_targyak"
 		
		var input = document.createElement("input")
		div.appendChild(input)
		input.type = "text"
		input.id = "input_SearchW"
		input.style.fontSize = "xx-large"
		input.style.position = "absolute"
		input.style.top = "1%";
		input.style.left = "50%";
		input.style.paddingLeft = "3px"
		input.style.paddingRight = "3px"
		input.style.transform = "translate(-50%)";
		input.addEventListener("keyup", function(event) { if (event.keyCode === 13) { 
			F_getTime()
			var diffTime = myTime - lastClickTime
			//console.log(myTime+" vs "+lastClickTime)
			if ( diffTime > 1 ) {
				document.getElementById("div_SearchW").style.backgroundColor = "grey"
				var int_Click = window.setInterval(function(){
					F_searchResult()
					clearInterval(int_Click) 
				}, 100);
			}
		} })
		//input.onchange = function() { F_searchResult() }
		//input.value = "inzulin";
		
		var button = document.createElement("button")
		div.appendChild(button)
		button.id = "btn_SearchW"
		button.style.fontSize = "xx-large"
		button.innerHTML = "search"
		button.style.position = "absolute"
		button.style.top = "1%";
		button.style.cursor = "pointer"
		button.onclick = function(){ 
			F_getTime()
			var diffTime = myTime - lastClickTime
			//console.log(myTime+" vs "+lastClickTime)
			if ( diffTime > 1 ) {
				this.style.backgroundColor  = "black"
				this.style.color  = "white"
				document.getElementById("div_SearchW").style.backgroundColor = "grey"
				var int_Click = window.setInterval(function(){
					F_searchResult()
					clearInterval(int_Click) 
				}, 100);
			}
		}

		var divText = document.createElement("div")
		div.appendChild(divText)
		divText.id = "div_SearchWText"
		divText.style.marginLeft = "3px"
		divText.style.paddingBottom = "10px"
		divText.style.paddingTop = "60px"
		divText.style.fontSize = "x-large"
		
		var divText = document.createElement("div")
		document.getElementById("table_weboldalak").appendChild(divText)
		divText.style.position = "absolute"
		divText.style.right = "1%"
		divText.id = "div_Refreshng"
		
		var divText = document.createElement("div")
		document.getElementById("div_SearchW").appendChild(divText)
		divText.style.position = "absolute"
		divText.style.top = "1%"
		divText.style.right = "1%"
		divText.id = "div_RefreshStatus"
	}
	F_DivSearchWord()
	function F_DivMidQ() {
		var div = document.createElement("div")
		document.body.appendChild(div)
		div.id = "div_searchQTargy"
		div.style.display = "none"
		
		var div = document.createElement("div")
		document.body.appendChild(div)
		div.id = "div_expQTargy"
		div.style.display = "none"
		
		var div = document.createElement("div")
		document.body.appendChild(div)
		//document.body.insertBefore(div, document.body.firstChild);
		div.id = "div_MidQ"
		div.dataset.origin = "pageQs"
		div.style.backgroundColor = "white"
		div.style.overflow = "auto"
		div.style.border = "8px solid black"
		div.style.outline = "5px solid yellow"
		div.style.display = "none"
		div.style.position = "absolute"
		div.style.left = "5px"
		div.style.right = "5px"
		div.style.top = "4px"
		div.style.bottom = "4px"
		div.style.zIndex = "3"
		
		var button = document.createElement("span")
		div.appendChild(button)
		button.style.backgroundColor = "red"
		button.style.color = "white"
		button.style.fontWeight = "bold"
		button.style.border = "3px solid black"
		button.onclick = function(){ 
			prevMidQ = []
			document.getElementById("div_MidQ").style.display = "none" 
			document.getElementById("div_MidQ").dataset.origin = "pageQs"
			midQloaded = false
			midQisExp = false
			
			document.getElementById("btn_toggleAll").style.display = 'block'
			if ( localStorage.getItem("hk.ToggleAll") == "true") {
				document.getElementById("table_weboldalak").style.display = 'none'
				document.getElementById("div_pageQTargy").style.display = 'none'
				document.getElementById("div_MainFrame").style.display = 'block'
			} else {
				document.getElementById("table_weboldalak").style.display = 'block'
				document.getElementById("div_pageQTargy").style.display = 'block'
				document.getElementById("div_MainFrame").style.display = 'none'
			}
			document.body.scrollTop = prevScrollTop
		}
		button.style.cursor = "pointer";
		button.innerHTML = "✖"
		button.style.width = "30px"
		button.style.position = "absolute"
		button.style.right = "0px"
		button.style.textAlign = "center"
		button.style.fontSize  = "large"
		
		var button = document.createElement("span")
		div.appendChild(button)
		button.id = "btn_MidQback"
		button.style.backgroundColor = "Gainsboro"
		button.style.fontWeight = "bold"
		button.style.border = "3px solid black"
		button.onclick = function(){ 
			prevMidQ.pop() // uccsót (ami a jelenlegi letörli)
			F_midQload(prevMidQ[prevMidQ.length-1]) // uccsót (ami így már az előző lett) betölti
		}
		button.style.cursor = "pointer";
		button.innerHTML = "&#129120;"
		button.style.width = "30px"
		button.style.position = "absolute"
		button.style.textAlign = "center"
		
		var title = document.createElement("div")
		div.appendChild(title)
		title.style.textAlign = "center"
		title.style.height = "30px"
		var span = document.createElement("span")
		title.appendChild(span)
		span.id = "btn_MidQ"
		span.style.fontWeight = "bold"
		span.style.fontSize  = "large"
		//span.style.position = "absolute"
		//span.style.left = "50%";
		//span.style.transform = "translate(-50%)";
		//span.style.paddingLeft = "3px"
		//span.style.paddingRight = "3px"
		
		var divText = document.createElement("div")
		div.appendChild(divText)
		divText.id = "div_MidQText"
		divText.style.paddingBottom = "10px"
		//divText.style.paddingTop = "30px"
	}
	F_DivMidQ()
}
F_searchWord()

function F_DivUpgQ() {
	var div = document.createElement("div")
	document.body.appendChild(div)
	div.id = "div_upgQ"
	div.style.backgroundColor = "white"
	div.style.overflow = "auto"
	div.style.width = "80vw"
	div.style.height = "60vh"
	div.style.position = "fixed"
	div.style.top = "50%"
	div.style.left = "50%"
	div.style.marginTop = "-30vh"
	div.style.marginLeft = "-40vw"
	div.style.border = "10px solid red"
	div.style.display = "none"
	
	var oldJEGY = document.createElement('div');
	oldJEGY.id = "div_oldJEGY"
	document.getElementById("div_upgQ").appendChild(oldJEGY)
	oldJEGY.style.border = "1px solid black"
	oldJEGY.style.position = "absolute"
	oldJEGY.style.bottom ='2px'
	oldJEGY.style.left = '35%'
	
	var newJEGY = document.createElement('div');
	newJEGY.id = "div_newJEGY"
	document.getElementById("div_upgQ").appendChild(newJEGY)
	newJEGY.style.border = "1px solid black"
	newJEGY.style.position = "absolute"
	newJEGY.style.bottom ='2px'
	newJEGY.style.left = '65%'
}
F_DivUpgQ()

function func_divButtonETC() {
	var button = document.createElement("input")
	button.id = "button_replaceQ"
	button.type = "button";
	document.getElementById("div_upgQ").appendChild(button)
	button.style.position = "absolute"
	button.style.bottom = "10px"
	button.style.right = "10px"
	button.value = "upgrade"
	
	var select = document.createElement("SELECT")
	select.id = "select_replaceQ"
	document.getElementById("div_upgQ").appendChild(select)
	select.style.position = "absolute"
	select.style.bottom = "10px"
	select.style.left = "10px"
}
func_divButtonETC()

var replaceQs = []
var defaultText = document.getElementById("div_upgQ").innerHTML

var varNextQ = false
var midQloaded = false
var threeSec = 0
var F_seekBar = window.setInterval(function(){
	if ( document.getElementById("centVideo").paused == false ) {
		var centVideo = document.getElementById("centVideo")
		var centVideoBar = document.getElementById("centVideoBar")
		var widthPx = centVideo.offsetWidth *centVideo.currentTime /centVideo.duration
		centVideoBar.style.width = widthPx
		centVideoBar.style.left = centVideo.offsetLeft
	} else if ( document.getElementById("centVideo").currentTime == document.getElementById("centVideo").duration ) {
		document.getElementById("centVideo").currentTime = 0;
		document.getElementById("centVideo").play();
	}
	
	if ( document.getElementById("playedVideo") ) {
		var playedVideo = document.getElementById("playedVideo")
		var parentDiv = playedVideo.parentElement
		var seekBars = parentDiv.getElementsByTagName("span")
		//console.log(widthPx)
		var widthPx = playedVideo.offsetWidth *playedVideo.currentTime /playedVideo.duration
		seekBars[0].style.width = widthPx
		seekBars[0].style.left = playedVideo.offsetLeft
	}
	if ( document.getElementById("div_MidQ").style.display == "block" && midQloaded == false ) {
		F_midQ(document.getElementById("div_MidQ"))
		midQloaded = true
	}
	threeSec = threeSec +1
	
	if ( localStorage.getItem("toggleLoad") != "false" ) {
		var loadTime = 2
		if ( threeSec > loadTime && document.getElementById("div_SearchW").style.display != "block" ) {
			var full = pageLinks.length -1
			for ( var i=0; i<pageLinks.length; i++ ) { 
				document.getElementById("div_RefreshStatus").innerHTML = i+"/"+full
				if ( pageLinks[i].dataset.loaded != "true" ) {
					F_loadPathText(pageLinks[i].dataset.src,i)
					break
				}
			}
			threeSec = 0
		}
	}
	
	/*var firstPass = false
	if ( pageLinks[pageLinks.length].dataset.loaded == "true" && firstPass == false ) {
		for ( var targyPath in pageTexts ) {
			var targyText = pageTexts[targyPath]
			targyText = LZString.compressToUTF16(targyText)
			localStorage.setItem(targyPath,targyText)
		}
		firstPass = true
	}*/
}, 1000);

function F_answerQ(detElem){ 
	var trueA = detElem.getElementsByClassName("trueA")
	var falseA = detElem.getElementsByClassName("falseA")
	var answers = detElem.getElementsByClassName("answer")
	if ( trueA.length == 0 ) { return }
	
	if ( detElem.open != true ) {
		for ( var i=0; i<trueA.length; i++ ) { trueA[i].style.backgroundColor = "" }
		for ( var i=0; i<falseA.length; i++ ) { falseA[i].style.backgroundColor = "" }
		for ( var i=0; i<answers.length; i++ ) { answers[i].style.backgroundColor = "gold" }
		return
	}
	
	var div = detElem.getElementsByClassName("random")
	if ( div[0].offsetParent === null ) { return }
	var liA = div[0].getElementsByTagName("li")
	for (var i=0; i<liA.length; i++) { div[0].appendChild(liA[Math.random() * i | 0]) }
	
	trueA = detElem.getElementsByClassName("trueA")
	falseA = detElem.getElementsByClassName("falseA")
	for ( var x=0; x<answers.length; x++ ) { 
		//alert(answers[x].offsetParent)
		answers[x].style.cursor = "pointer"
		answers[x].onclick = function(){
			for ( var i=0; i<trueA.length; i++ ) { trueA[i].style.backgroundColor = "springgreen" }
			for ( var i=0; i<falseA.length; i++ ) {  falseA[i].style.backgroundColor = "tomato" }
			this.style.cursor = ""
			this.style.backgroundColor = "white"
		}
	}
}

function F_testVideoError() {
	var allVideo = document.getElementsByTagName("video")
	for ( var i=0; i<allVideo.length; i++ ) {
		allVideo[i].onerror = function(){ alert("video betöltési hiba") };
	}
}
F_testVideoError()
function F_imgActLoad(IMGelem){ 
	var parent = IMGelem
	do { // megkeresi az elso details-t
		parent = parent.parentElement
	} while ( parent.className.indexOf("[") == -1 && parent.tagName != "DETAILS" && parent.tagName != "BODY" )
	if ( IMGelem.dataset.src ) {
		if ( IMGelem.dataset.src.indexOf("images") == -1 /*&& IMGelem.dataset.src.indexOf("100") == -1*/ ) {
			IMGelem.src = "images/" + IMGelem.dataset.src
		} else {
			IMGelem.src = IMGelem.dataset.src
		}
		IMGelem.removeAttribute("data-src")
	}
}
var tooltipStatus

F_imgClick(document)

var refreshAll = false
function F_toggleAll() {
	F_getTime()
	var startTime = myTime
	console.log("– F_toggleAll – 0s")

	if ( refreshAll != true ) {
		refreshAll = true
		F_checkQs()
		F_tetelQs()
		F_getTexts()
		F_oldQcheck()
		F_tetelChoose() //
		func_tableSkipFix()
		F_valFix()
		F_valSkip()
		func_calcJegy()
		func_calcWork()
		func_calcDate()
		func_calcOldNew()
		func_calcRepeat()
		F_calcqTimer(document.getElementById("btn_qTimer"))
	}
	var childs = document.body.children; 
	if ( document.getElementById("div_MainFrame").style.display != 'none' ) {
		localStorage.removeItem("hk.ToggleAll")
		document.getElementById("table_weboldalak").style.display = 'block';
		document.getElementById("div_pageQTargy").style.display = 'block';
		document.getElementById("div_MainFrame").style.display = 'none';
		
		//document.getElementById("div_SearchW").style.display = 'none';
		//document.getElementById("div_MidQ").style.display = 'none';
		//document.getElementById("div_upgQ").style.display = 'none';
	} else {
		localStorage.setItem("hk.ToggleAll","true")
		document.getElementById("table_weboldalak").style.display = 'none';
		document.getElementById("div_pageQTargy").style.display = 'none';
		document.getElementById("div_MainFrame").style.display = 'block';
	}
	/*if ( document.getElementById("div_MainFrame").style.display != 'none' ) {
		localStorage.removeItem("hk.ToggleAll")
		for ( var i=0; i<childs.length; i++ ) { childs[i].style.display = "block" }
		document.getElementById("div_MainFrame").style.display = 'none';
		
		document.getElementById("div_SkipText").style.display = 'none';
		document.getElementById("div_skipFix").style.display = 'none';
		document.getElementById("div_Skip").style.display = 'none';
		document.getElementById("div_MidQ").style.display = 'none';
		document.getElementById("div_upgQ").style.display = 'none';
		document.getElementById("div_qProp").style.display = 'none';
		document.getElementById("div_SearchW").style.display = 'none';
		document.getElementById("iframe_targyak").style.display = 'none';
		document.getElementById("fileinput").style.display = 'none';
	} else {
		localStorage.setItem("hk.ToggleAll","true")
		for ( var i=0; i<childs.length; i++ ) { childs[i].style.display = "none" }
		document.getElementById("div_MainFrame").style.display = 'block';
		tooltipSpan.style.display = 'block';

		document.getElementById("btn_toggleAll").style.display = 'block';
	}*/
	document.getElementById("div_centIMG").style.display = "block";
	document.getElementById("btn_toggleAll").style.backgroundColor  = ""
	document.getElementById("btn_toggleAll").style.color  = ""
	
	F_getTime()
	lastClickTime = myTime
	
	F_getTime()
	var diffTime = (myTime-startTime).toFixed(2)
	console.log("– F_toggleAll – " + diffTime+"s")
}

var var_note = false
function toggleNote() {
	if ( var_note == false ) {
		document.getElementById("note").style.display = 'block';
		var_note = true
	} else {
		document.getElementById("note").style.display = 'none';
		var_note = false
	}
}

function F_calcTetel() {
}
function F_calcqTimer(detElem) {
	var table = document.getElementById("table_qTimer")
	table.innerHTML = ""
	var objQtime = []
	var arrUsedQs = []
	var arrLSids = []
	var numTetel = 0
	
	for ( var tetelID in tetelek ) {
		if ( localStorage.getItem(tetelID+"_button") == "true" ) {
			var tetelQ = document.getElementById(tetelID)
			var tetelQs = tetelQ.getElementsByClassName("kerdes")
			if ( tetelQ.classList.contains("kerdes") == true ) { 
				F_calcLSid(tetelQ)
				var qName = F_QtxtQname(tetelQ.innerHTML)
				if ( arrLSids.includes(actLSid) != true ) { arrLSids.push(actLSid+" – "+qName) }
			}
			for ( var x=0; x<tetelQs.length; x++ ) {
				F_calcLSid(tetelQs[x])
				var qName = F_QtxtQname(tetelQs[x].innerHTML)
				if ( arrLSids.includes(actLSid) != true ) { arrLSids.push(actLSid+" – "+qName) }
			}
			numTetel = numTetel +1
		}
	}
	for ( var x in arrLSids ) {
		var LSid = arrLSids[x]
		qName = LSid.slice(LSid.indexOf(" – ")+3)
		LSid = LSid.slice(0,LSid.indexOf(" – "))
		var date = new Date();
		var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(LSid+'_idopont')
		
		var Qname = localStorage.getItem(LSid)
		var jegy = localStorage.getItem(LSid+"_jegy")
		if ( Qname == null ) { 
			if ( qName.indexOf('">') != -1 ) {
				Qname = qName.slice(qName.indexOf(">")+1,qName.indexOf("-->")+3)
			} else {
				Qname = qName
			}
			if ( Qname == "" ) { console.log(qName) }
		}
		Qname = LSid+" "+Qname
		if ( LSid == null || Qname == null || jegy == null ) { continue }
		if ( localStorage.getItem(LSid+"_skip") == "perma" ) { continue }
		if ( localStorage.getItem(LSid+"_skip") == "vizsgaSkip" ) { continue }
		if ( arrUsedQs.includes(Qname) ) { continue } // 2x ne rakja be
		
		objQtime.push([Qname, idopont])
		arrUsedQs.push(Qname)
	}
	document.getElementById("button_Tetel").textContent = numTetel

	objQtime.sort(function(a, b) { return b[1] - a[1]})
	
	var numX = 0
	var numY = 0
	var date = new Date();
	var remain = Math.floor(date.getTime()/3600000)
	remain = localStorage.getItem("vizsgaSkip") - remain
	for ( var Qname in objQtime ) {
		numX = numX +1
		var tr = document.createElement("TR")
		table.appendChild(tr)
		var td = document.createElement("TD")
		tr.appendChild(td)
		td.innerHTML = numX
		var td = document.createElement("TD")
		tr.appendChild(td)
		td.innerHTML = objQtime[Qname].slice(0,-1)
		var LSid = td.innerHTML.slice(0,td.innerHTML.indexOf(" "))
		td.id = LSid
		td.innerHTML = td.innerHTML.slice(td.innerHTML.indexOf(" "))
		if ( localStorage.getItem(LSid+"_skip") == "important" ) { td.style.backgroundColor = "lawngreen" }
		if ( localStorage.getItem(LSid+"_skip") == "tempskip" ) { td.style.backgroundColor = "gold" }

		function F_clickEvent() {
			var LSid = this.id
			console.log(event)
			if ( LSid == undefined ) { alert("F_calcqTimer hiba: undefined LSid") }
			
			var statusX
			if ( this.style.backgroundColor == "" ) { statusX == 0 }
			if ( this.style.backgroundColor == "lawngreen" ) { statusX == 1 }
			if ( this.style.backgroundColor == "gold" ) { statusX == 0 }
			
			if ( event == "click" ) { statusX = statusX +1 }
			if ( event.button == "contextmenu" ) { statusX = statusX -1 }
			
			if ( statusX == 0 ) { this.style.backgroundColor == "" }
			if ( statusX == 1 ) { this.style.backgroundColor == "lawngreen" }
			if ( statusX == 2 ) { this.style.backgroundColor == "gold" }
			
			if ( this.style.backgroundColor == "" ) { localStorage.setItem(LSid+"_skip","") }
			if ( this.style.backgroundColor == "lawngreen" ) { localStorage.setItem(LSid+"_skip","important") }
			if ( this.style.backgroundColor == "gold" ) { localStorage.setItem(LSid+"_skip","tempskip") }
			
			func_calcOldNew()
		}

		td.addEventListener("contextmenu",function(ev){ ev.preventDefault() })
		td.addEventListener("mousedown",function(){
			var LSid = this.id
			if ( LSid == undefined ) { alert("F_calcqTimer hiba: undefined LSid") }
			
			var statusX
			if ( this.style.backgroundColor == "" ) { statusX = 0 }
			if ( this.style.backgroundColor == "lawngreen" ) { statusX = 1 }
			if ( this.style.backgroundColor == "gold" ) { statusX = 2 }
			
			if ( event.button == 0 ) { statusX = statusX +1 }
			if ( event.button == 2 ) { statusX = statusX -1 }
			
			if ( statusX == 0 || statusX == 3 ) { this.style.backgroundColor = "" }
			if ( statusX == 1 ) { this.style.backgroundColor = "lawngreen" }
			if ( statusX == 2 || statusX == -1 ) { this.style.backgroundColor = "gold" }
			
			if ( this.style.backgroundColor == "" ) { localStorage.setItem(LSid+"_skip","") }
			if ( this.style.backgroundColor == "lawngreen" ) { localStorage.setItem(LSid+"_skip","important") }
			if ( this.style.backgroundColor == "gold" ) { localStorage.setItem(LSid+"_skip","tempskip") }
			
			func_calcOldNew()
		})

		var td = document.createElement("TD")
		tr.appendChild(td)
		var repTime = objQtime[Qname].slice(objQtime[Qname].lastIndexOf(","))
		td.innerHTML = objQtime[Qname].slice(objQtime[Qname].lastIndexOf(",")) // repTime
		//numY = numX
		if ( repTime < remain*60 ) { 
			td.style.color = "red" 
		} else {
			numY = numY +1
		}
		//if ( repTime > 4500 ) { numY = numX }
	}
	detElem.textContent = numY
}

function F_hideQArea() {
	document.getElementById("divQloc").style.display = "none" // nextQ-t ahova kidobja
	
	document.getElementById("div_skipFix").style.display = "none" // kék-piros-fekete-sárga
	document.getElementById("div_qProp").style.display = "none" // android osztályzás
	document.getElementById("div_qMarks").style.display = "none" // már osztályzott kérdések sorrendbe egymás alatt
	document.getElementById("Div_Tetelek").style.display = "none" // tételválasztás
	document.getElementById("note").style.display = 'none'
	
	document.getElementById("btn_qTimer").style.borderColor = "black" // már osztályzott kérdések sorrendbe egymás alatt
	document.getElementById("button_Tetel").style.borderColor = "black" // tételválasztás
	document.getElementById("btn_skip").style.borderColor = "black" // fekete
	document.getElementById("btn_fix").style.borderColor = "black" // piros
	document.getElementById("btn_tempskip").style.borderColor = "black" // gold
	document.getElementById("btn_vizsgaskip").style.borderColor = "black" // kek
	document.getElementById("btn_note").style.borderColor = "black"
}

var timeDiff
var lastClickTime = 0
function F_CreateQDiv() {
	
	function F_ButtonToggleAll() {
		var button = document.createElement("input")
		button.id = "btn_toggleAll"
		button.type = "button"
		document.body.appendChild(button)
		button.style.width = "90px"
		button.style.height = "90px"
		button.style.position = "absolute"
		button.style.right = "2px"
		button.style.top = "2px"
		button.style.cursor = "pointer"

		button.onclick = function(){ 
			F_getTime()
			var diffTime = myTime - lastClickTime
			console.log(myTime+" vs "+lastClickTime)
			if ( diffTime > 1 ) {
				if ( this.style.backgroundColor == "aqua" ) { 
					document.getElementById("divLoading").style.visibility = 'visible'
				} else {
					this.style.backgroundColor  = "black"
					this.style.color  = "white"
				}
				var int_Click = window.setInterval(function(){
					F_toggleAll()
					clearInterval(int_Click) 
					document.getElementById("divLoading").style.visibility = 'hidden'
				}, 100);
			}
		}
		/*button.onmousedown = function(){ 
			this.style.backgroundColor  = "black"
			this.style.color  = "white"
		}
		button.onclick = function(){ 
			F_getTime()
			var diffTime = myTime - lastClickTime
			console.log(myTime+" vs "+lastClickTime)
			if ( diffTime > 1 ) {
				this.style.backgroundColor  = "black"
				this.style.color  = "white"
				var int_Click = window.setInterval(function(){
					F_toggleAll()
					clearInterval(int_Click) 
				}, 100);
			}
		}*/
	}
	F_ButtonToggleAll()
	function F_ButtonSearchWord() {
		var button = document.createElement("input")
		button.type = "button"
		document.getElementById("table_weboldalak").appendChild(button)
		button.style.position = "absolute"
		button.style.right = "150px"
		button.style.top = "15px"
		button.value = "🔍"
		button.style.fontSize = 'xx-large';
		button.style.cursor = "pointer"

		button.onclick = function(){ 
			F_getTime()
			var diffTime = myTime - lastClickTime
			//console.log(myTime+" vs "+lastClickTime)
			if ( diffTime > 1 ) {
				if ( document.getElementById("div_SearchW").style.display == "none" ) {
					this.style.backgroundColor  = "black"
					this.style.color  = "white"
				}
				var int_Click = window.setInterval(function(){
					if ( document.getElementById("div_SearchW").style.display == "block" ) {
						document.getElementById("div_SearchW").style.display = "none"
					} else {
						document.getElementById("div_SearchW").style.display = "block"
						button.style.color = ""
						button.style.backgroundColor = ""
						F_loadAllPageTexts()
					}
					//F_searchResult()
					clearInterval(int_Click) 
				}, 100);
			}
			
			//if ( document.getElementById("div_SearchW") != "[object HTMLDivElement]" ) { F_DivSearchWord() }
		}
	}
	F_ButtonSearchWord()

	function F_DivMainFrame() {
		var div = document.createElement("div")
		div.id = "div_MainFrame"
		div.style.display = "none"
		div.style.position = "relative"
		//div.style.maxHeight = "50%"
		var parent = document.body
		parent.insertBefore(div,parent.firstChild)
	}
	F_DivMainFrame()
	var MainFrame = document.getElementById("div_MainFrame");
	
	function F_divLoading(){
		var div = document.createElement("span")
		MainFrame.appendChild(div)
		div.id = "divLoading"
		div.style.backgroundColor = "black"
		div.style.position = "fixed"
		div.style.top = "1%"
		div.style.right = "0.5%"
		div.style.width = "99%"
		div.style.height = "98%"
		div.style.opacity = "0.3"
		//div.style.display = 'block'
		div.style.visibility = 'hidden'
	}
	F_divLoading()

	function F_DivQSettings() {
		var div = document.createElement("div")
		div.id = "div_QSettings"
		div.className = "normal"
		MainFrame.appendChild(div)
	}
	F_DivQSettings()
	var divSettings = document.getElementById("div_QSettings");

	function F_ButtonTetelek() {
		var button = document.createElement("button")
		button.id = "button_Tetel"
		button.style.border = "3px solid black"
		button.style.backgroundColor = "Bisque"
		button.textContent = "TÉTEL"
		divSettings.appendChild(button)
		button.onclick = function() {
			if ( document.getElementById("Div_Tetelek").style.display == "none" ) {
				F_hideQArea()
				document.getElementById("Div_Tetelek").style.display = "block"
				this.style.borderColor = "limegreen"
			} else {
				F_hideQArea()
				document.getElementById("divQloc").style.display = "block"
			}
		}
	}
	F_ButtonTetelek()
	function F_SpanDate() {
		var span = document.createElement("span")
		span.id = "span_Date"
		divSettings.appendChild(span)
		span.className = "white"
		span.style.border = "1px solid black"

		span.style.paddingLeft = "5px"
		span.style.paddingRight = "5px"
		span.style.paddingTop = "1px"
		span.style.paddingBottom = "2px"
	}
	F_SpanDate()
	function F_BtnAtlag() {
		var button = document.createElement("input")
		button.type = "button"
		button.id = "btn_Jegy"
		divSettings.appendChild(button)
		button.style.border = "3px solid black"
		button.style.backgroundColor = "Bisque"
		button.onclick = function(){
			if ( document.getElementById("div_nextQMark").style.display == 'none' ) {
				document.getElementById("div_nextQMark").style.display = 'block'
			} 
			if ( document.getElementById("repTable").style.display == 'block' ) {
				document.getElementById("repTable").style.display = 'none'
				this.style.borderColor = "black"
			} else {
				func_calcRepTable()
				document.getElementById("repTable").style.display = 'block'
				this.style.borderColor = "limegreen"
			} 
		}
	}
	F_BtnAtlag()
	function F_SpanRepAll() {
		var span = document.createElement("span")
		span.id = "span_Repeat"
		divSettings.appendChild(span)
		span.className = "WHITE"

		span.style.paddingLeft = "5px"
		span.style.paddingRight = "5px"
		span.style.paddingTop = "1px"
		span.style.paddingBottom = "2px"
	}
	F_SpanRepAll()
	function F_ButtonMarks() {
		var button = document.createElement("button")
		button.id = "btn_qTimer"
		button.style.border = "3px solid black"
		button.style.backgroundColor = "Bisque"
		button.textContent = "0"
		divSettings.appendChild(button)
		
		var div = document.createElement("div")
		div.id = "div_qMarks"
		MainFrame.appendChild(div)
		div.style.backgroundColor = "white"
		div.style.border = "10px solid black"
		div.style.display = "none"
		div.style.height = "73vh"
		div.style.overflow = "auto"
		div.style.zIndex = "2"
		
		var center = document.createElement("center")
		div.appendChild(center)
		
		var table = document.createElement("TABLE")
		table.id = "table_qTimer"
		center.appendChild(table)

		button.onclick = function(){
			if ( div.style.display == "none" ) {
				F_hideQArea()
				div.style.display = "block"
				this.style.borderColor = "limegreen"
			} else {
				F_hideQArea()
				document.getElementById("divQloc").style.display = "block"
			}
		}
	}
	F_ButtonMarks()

	function F_DivAlertEXPQrosszNum() {
		var div = document.createElement("div")
		MainFrame.appendChild(div)
		div.style.backgroundColor = "white"
		div.style.overflow = "auto"
		div.style.width = "200px"
		div.style.height = "70px"
		div.style.position = "fixed"
		div.style.top = "1%"
		div.style.left = "100%"
		div.style.marginLeft = "-300px"
		div.style.border = "10px solid red"
		div.innerHTML = wrongEXPid
		if ( wrongEXPid != "foglalt vagy upgradelve lett:<br>" ) { 
			div.style.display = 'block';
		} else {
			div.style.display = 'none';
		}
	}
	F_DivAlertEXPQrosszNum()
	
	function F_ButtonUpgQ() {
		var button = document.createElement("input")
		button.id = "btn_upgQ"
		button.type = "button"
		divSettings.appendChild(button)
		button.style.color = "white"
		button.style.fontWeight = "bold"
		button.style.backgroundColor = "red"
		button.style.border = "3px solid black"
		/*button.style.position = "fixed"
		button.style.right = "50%"
		button.style.top = "5px"*/
		button.onclick = function() {
			if ( document.getElementById("div_upgQ").style.display == 'block' ) {
				document.getElementById("div_upgQ").style.display = 'none';
			} else {
				document.getElementById("div_upgQ").style.display = 'block';
			}
		}
	}
	F_ButtonUpgQ()

	var br = document.createElement("br")
	divSettings.appendChild(br)
	
	function F_ButtonNewQ() {
		var button = document.createElement("input")
		button.id = "btn_newQuest"
		button.type = "button"
		divSettings.appendChild(button)
		button.style.backgroundColor = "white"
		button.style.border = "3px solid black"
		button.onclick = function(){ 
			if ( this.style.borderColor == "limegreen" ) {
				this.style.borderColor = "black"
				localStorage.removeItem("hk.newQ")
			} else {
				this.style.borderColor = "limegreen"
				localStorage.setItem("hk.newQ",true)
			}
		}
		button.value = "0"
	}
	F_ButtonNewQ()
	function F_SpanRepSlow() {
		var span = document.createElement("span")
		span.id = "span_RepSlow"
		divSettings.appendChild(span)
		span.className = "vocab"
		span.style.border = "1px solid black"

		span.style.paddingLeft = "5px"
		span.style.paddingRight = "5px"
		span.style.paddingTop = "1px"
		span.style.paddingBottom = "2px"
	}
	F_SpanRepSlow()
	function F_ButtonRepFast() {
		var button = document.createElement("input")
		button.id = "btn_RepFast"
		button.type = "button"
		divSettings.appendChild(button)
		button.className = "MISS"
		button.style.border = "3px solid black"
		button.onclick = function(){ 
			if ( this.style.borderColor == "limegreen" ) {
				this.style.borderColor = "black"
			} else {
				this.style.borderColor = "limegreen"
			}
		}
		button.value = "0"
	}
	F_ButtonRepFast()
	divSettings.appendChild( document.createTextNode( '\u00A0' ) );
	function F_ButtonNote() {
		var button = document.createElement("input")
		button.type = "button"
		button.id = "btn_note"
		divSettings.appendChild(button)
		button.style.border = "3px solid black"
		button.style.backgroundColor = "Bisque"
		button.onclick = function(){ 
			if ( this.style.borderColor == "limegreen" ) {
				F_hideQArea()
				document.getElementById("divQloc").style.display = 'block';
			} else {
				F_hideQArea()
				this.style.borderColor = "limegreen"
				document.getElementById("note").style.display = 'block';
				func_SetTextOfSkipFixDiv(this.id)
			}
		}
		button.value = "✍"
		
		var div = document.createElement("div")
		div.id = "div_nextQMark"
		div.style.display = "none"
		div.style.position = "fixed"
		div.style.right = "2px"
		div.style.top = "30px"
		div.style.backgroundColor = "white"
		div.style.border = "2px solid black"
		div.onclick = function(){ document.getElementById("div_nextQMark").style.display = 'none' }
		//document.body.appendChild(div)
		MainFrame.appendChild(div)
	}
	F_ButtonNote()
	divSettings.appendChild( document.createTextNode( '\u00A0' ) );
	function F_ButtonNextQdiff() {
		var button = document.createElement("input")
		button.id = "btn_nextQdiff"
		button.type = "button"
		divSettings.appendChild(button)
		button.style.backgroundColor = "coral"

		button.onclick = function(){ 
			if ( this.style.backgroundColor != "limegreen" ) {
				this.style.backgroundColor = "limegreen"
				console.clear()
				missImgs = ""
				testLoad = true
				F_loadImgVideo(document.body)
				testLoad = false
			} else {
				this.style.backgroundColor = "coral"
				alert(missImgs)
			}
		}
		button.value = " "
	}
	F_ButtonNextQdiff()

	var br = document.createElement("br")
	divSettings.appendChild(br)

	function F_ButtonVizsgaSkip() {
		var button = document.createElement("input")
		button.id = "btn_vizsgaskip"
		button.type = "button"
		divSettings.appendChild(button)
		button.style.backgroundColor = "blue"
		button.style.color = "white"
		button.style.fontWeight = "bold"
		button.style.border = "3px solid black"
		button.onclick = function(){ 
			if ( this.style.borderColor == "limegreen" ) {
				F_hideQArea()
				document.getElementById("divQloc").style.display = 'block';
			} else {
				F_hideQArea()
				this.style.borderColor = "limegreen"
				document.getElementById("div_skipFix").style.display = 'block';
				func_SetTextOfSkipFixDiv(this.id)
			}
		}
		button.value = "0"
	}
	F_ButtonVizsgaSkip()
	function F_ButtonFix() {
		var button = document.createElement("input")
		button.id = "btn_fix"
		button.type = "button"
		divSettings.appendChild(button)
		button.className = "fix"
		button.style.border = "3px solid black"
		button.onclick = function(){ 
			if ( this.style.borderColor == "limegreen" ) {
				F_hideQArea()
				document.getElementById("divQloc").style.display = 'block';
			} else {
				F_hideQArea()
				this.style.borderColor = "limegreen"
				document.getElementById("div_skipFix").style.display = 'block';
				func_SetTextOfSkipFixDiv(this.id)
			}
		}
		button.value = "0"
	}
	F_ButtonFix()
	function F_ButtonSkip() {
		var button = document.createElement("input")
		button.id = "btn_skip"
		button.type = "button"
		divSettings.appendChild(button)
		button.className = "dark"
		button.style.border = "3px solid black"
		button.onclick = function(){ 
			if ( this.style.borderColor == "limegreen" ) {
				F_hideQArea()
				document.getElementById("divQloc").style.display = 'block';
			} else {
				F_hideQArea()
				this.style.borderColor = "limegreen"
				document.getElementById("div_skipFix").style.display = 'block';
				func_SetTextOfSkipFixDiv(this.id)
			}
		}
		button.value = "0"
	}
	F_ButtonSkip()
	function F_ButtonTempSkip() {
		var button = document.createElement("input")
		button.id = "btn_tempskip"
		button.type = "button"
		divSettings.appendChild(button)
		button.style.backgroundColor = "gold"
		button.style.fontWeight = "bold"
		button.style.border = "3px solid black"
		button.onclick = function(){ 
			if ( this.style.borderColor == "limegreen" ) {
				F_hideQArea()
				document.getElementById("divQloc").style.display = 'block';
			} else {
				F_hideQArea()
				this.style.borderColor = "limegreen"
				document.getElementById("div_skipFix").style.display = 'block';
				func_SetTextOfSkipFixDiv(this.id)
			}
		}
		//button.value = "0"
	}
	F_ButtonTempSkip()
	function F_SpanRepNew() {
		var span = document.createElement("span")
		span.id = "span_RepNew"
		divSettings.appendChild(span)
		span.className = "WHITE"
		span.style.border = "1px solid black"

		span.style.paddingLeft = "5px"
		span.style.paddingRight = "5px"
		span.style.paddingTop = "1px"
		span.style.paddingBottom = "2px"
	}
	F_SpanRepNew()
	function F_SpanRepOld() {
		var span = document.createElement("span")
		span.id = "span_RepOld"
		divSettings.appendChild(span)
		span.className = "vocab"
		span.style.border = "1px solid black"

		span.style.paddingLeft = "5px"
		span.style.paddingRight = "5px"
		span.style.paddingTop = "1px"
		span.style.paddingBottom = "2px"
	}
	F_SpanRepOld()
	
	function F_divSkipFix() {
		var div = document.createElement("div")
		div.id = "div_skipFix"
		MainFrame.appendChild(div)
		div.style.backgroundColor = "white"
		div.style.overflow = "auto"
		div.style.height = "73vh"
		div.style.border = "10px solid black"
		div.style.display = "none"
	}
	F_divSkipFix()

	function F_DivQLoc() {
		var divQloc = document.createElement("div")
		divQloc.id = "divQloc"
		MainFrame.appendChild(divQloc)
		//divQloc.style.overflow = "auto"
		//divQloc.style.height = "87vh"
		
		if ( isAndroid ) {
			divQloc.style.transform = 'scale(1.75)'
			divQloc.style.transformOrigin = '0 0'
			divQloc.style.maxWidth = '57%'
		}
	}
	F_DivQLoc()
	var divQloc = document.getElementById("divQloc");
	function F_DivQTitle() {
		var div = document.createElement("div")
		div.id = "questTitle"
		div.style.fontWeight = "bold"
		div.style.fontSize = "large"
		divQloc.appendChild(div)
	}
	F_DivQTitle()
	function F_DivQuest() {
		var div = document.createElement("div")
		div.id = "kerdeslocation"
		divQloc.appendChild(div)
	}
	F_DivQuest()

	function F_TextAreaNote() {
		var textArea = document.createElement("textarea")
		divSettings.appendChild(textArea)
		textArea.style.display = "none"
		textArea.id = "note"
		textArea.style.zIndex = "1"; 
		if ( isAndroid ) { 
			textArea.rows = "2"
		} else {
			textArea.rows = "5"
		}
		//textArea.cols = "60"

		textArea.style.position = "fixed"
		textArea.style.width = "50vw"
		textArea.style.left = "25%"
		if ( isAndroid ) { 
			textArea.style.top = "5px"
		} else {
			textArea.style.top = "15%"
		}
		textArea.style.border = "thick solid black"
	}
	F_TextAreaNote()

/*

	<select id="skip"><option value=""></option><option value="1">1</option><option value="2">2</option><option value="5">5</option><option value="10">10</option><option value="20">20</option></select> 
*/

	function F_ButtonNextQ() {
		var button = document.createElement("input")
		button.type = "button"
		button.id = "button_NextQ"
		divSettings.appendChild(button)
		button.onclick = function(){ 
			F_getTime()
			var diffTime = myTime - lastClickTime
			//console.log(myTime+" vs "+lastClickTime)
			if ( diffTime > 1 ) {
				if ( this.style.backgroundColor == "aqua" ) { 
					document.getElementById("divLoading").style.visibility = 'visible'
				} else {
					this.style.backgroundColor  = "black"
					this.style.color  = "white"
				}
				var int_Click = window.setInterval(function(){
					F_nextQ()
					clearInterval(int_Click) 
					document.getElementById("divLoading").style.visibility = 'hidden'
				}, 100);
			}
		}
		button.value = " ► "
		
		button.style.height = "40px"
		button.style.width = "40px"
		
		button.style.position = "absolute"
		button.style.left = "235px"
		button.style.top = "26px"
		button.style.right = "90px"
		button.style.overflow = "auto"
		button.style.border = "3px solid black"
		button.style.backgroundColor = "white"
	}
	F_ButtonNextQ()
	function F_DivMark() {
		var div = document.createElement("DIV")
		div.id = "Div_QsMark"
		MainFrame.appendChild(div)

		div.style.position = "absolute"
		div.style.left = "275px"
		div.style.top = "-5px"
		div.style.right = "90px"
		div.style.overflow = "auto"
	}
	F_DivMark()

	function F_TableTetelek() {
		var table = document.createElement("TABLE")
		table.id = "Table_QsMark"
		document.getElementById("Div_QsMark").appendChild(table)

		for ( var i=0; i<3; i++ ) {
			var tr = document.createElement("TR")
			tr.id  = "Tr_QsMark."+i
			table.appendChild(tr)
		}
	}
	F_TableTetelek()

	function F_TableRepeat() {
		var table = document.createElement("TABLE")
		table.id = "repTable"
		MainFrame.appendChild(table)

		table.style.display = "none"
		table.style.position = "fixed"
		table.style.left = "40%"
		table.style.top = "30%"
		table.style.backgroundColor = "white"

		var tr = document.createElement("TR")
		table.appendChild(tr)
		var th = document.createElement("TH")
		th.innerHTML = "rep"
		tr.appendChild(th)
		var th = document.createElement("TH")
		th.innerHTML = "min"
		tr.appendChild(th)
		var th = document.createElement("TH")
		th.innerHTML = "hossz"
		tr.appendChild(th)
		var th = document.createElement("TH")
		th.innerHTML = "left"
		tr.appendChild(th)
		var th = document.createElement("TH")
		th.innerHTML = "still"
		tr.appendChild(th)
		var th = document.createElement("TH")
		th.innerHTML = "average"
		tr.appendChild(th)
		
		for ( var i=0; i<6; i++ ) {
			var tr = document.createElement("TR")
			table.appendChild(tr)

			var th = document.createElement("TH")
			th.innerHTML = i
			th.id = "hkQ.nextRep"+i
			tr.appendChild(th)
			if ( localStorage.getItem("hkQ.nextRep"+i) ) {
				th.style.backgroundColor = localStorage.getItem("hkQ.nextRep"+i)
			} else {
				th.style.backgroundColor = "limegreen"
			}
			th.onclick = function(){
				if ( this.style.backgroundColor == "limegreen" ) {
					this.style.backgroundColor = "coral"
				} else {
					this.style.backgroundColor = "limegreen"
				}
				var nextRepID = this.id
				localStorage.setItem(nextRepID,this.style.backgroundColor)
			}

			var td = document.createElement("TD")
			td.id = i+"min"
			func_calcTimeDiff(i)
			td.innerHTML = timeDiff
			tr.appendChild(td)

			var td = document.createElement("TD")
			td.id = i+"hossz"
			tr.appendChild(td)

			var td = document.createElement("TD")
			td.id = i+"left"
			tr.appendChild(td)

			var td = document.createElement("TD")
			td.id = i+"still"
			tr.appendChild(td)

			var td = document.createElement("TD")
			td.id = i+"average"
			tr.appendChild(td)
		}
	}
	F_TableRepeat()
}
F_CreateQDiv()

function func_calcTimeDiff(repCount){
	if ( repCount == 0 ) {
		timeDiff = 10
	} else if ( repCount == 1 ) {
		timeDiff = 20
	} else if ( repCount == 2 ) {
		timeDiff = 2000
	} else if ( repCount == 3 ) {
		timeDiff = 3000
	} else if ( repCount == 4 ) {
		timeDiff = 4000
	} else if ( repCount == 5 ) {
		timeDiff = 5000
	}
}
var vizsgaTime = Number(localStorage.getItem("vizsgaSkip"))*60

var nextMark = 0
var nextRep = "zerus"
function F_nextMark(jegy){ // következo kérdés nehézségét beállítja, 
	// repeat alapján
	//console.clear()
	//console.log("– – – – – – – F_nextMark – – – – – – – –")
	var zeroVal = 0
	var arany = []
	document.getElementById("div_nextQMark").innerHTML = ""
	for ( var i=0;  i<6;  i++ ) {
		var averageTime = Number(document.getElementById(i+"average").title)
		var defTime
		func_calcTimeDiff(i)
		defTime = timeDiff
		
		if ( isNaN(averageTime) == false ) {
			zeroVal = zeroVal + averageTime/defTime
			arany[i] = zeroVal
		} else {
			arany[i] = 0
		}
		//console.log(i+"i: "+arany[i])
	}
	
	var diff = 0
	for ( var i=0;  i<6;  i++ ) {
		var num = arany[i] - diff
		num = 100*num/zeroVal
		num = num.toFixed(0);
		if ( arany[i] == 0 ) { num = 0 }
		document.getElementById("div_nextQMark").innerHTML = document.getElementById("div_nextQMark").innerHTML + i + ": " + num + "%<br>"
		if ( arany[i] != 0 ) { diff = arany[i] }
	}
	//console.log("- - - - - - - - -")
	var randNum  = Math.random() * zeroVal
	//console.log(randNum)
	nextRep = "zerus"
	if 			 ( randNum < arany[0] ) { nextRep = 0 
		} else if ( randNum < arany[1] ) { nextRep = 1 
		} else if ( randNum < arany[2] ) { nextRep = 2 
		} else if ( randNum < arany[3] ) { nextRep = 3 
		} else if ( randNum < arany[4] ) { nextRep = 4 
		} else if ( randNum < arany[5] ) { nextRep = 5 
	}
	//console.log(nextRep)
	//alert("STOP")
	

	// az elozo sikere alapján
	/*jegy = parseInt(jegy,10)
	if ( Math.random() > 0.5 ) {
		if ( jegy == 1 ) {
			nextMark = 3
		} else if ( jegy == 3 || jegy == 4 ) {
			nextMark = 1
		}
	} else {
		nextMark = 0
	}*/
}

var tetelek = []
function F_tetelChoose(){ // createli a választható tételek listáját
	F_getTime()
	var startTime = myTime
	function F_MainDiv() {
		var div = document.createElement("div")
		div.id = "Div_Tetelek"
		var questDiv = document.getElementById("div_MainFrame");
		questDiv.appendChild(div)
		div.style.backgroundColor = "white"
		div.style.border = "10px solid black"
		div.style.display = "none"
		div.style.height = "73vh"
		div.style.overflow = "auto"
	}
	F_MainDiv()

	function createTemakor(szoveg) {
		var details = document.createElement("DETAILS")
		var summary = document.createElement("SUMMARY")
		details.id = szoveg+"_details"
		details.appendChild(summary)
		document.getElementById("Div_Tetelek").appendChild(details)
		summary.innerHTML = szoveg.bold()
		summary.style.backgroundColor = "gainsboro";
		summary.style.color = "black";
		summary.style.fontSize = "120%"
		
		var div = document.createElement("div") // firefoxba kellett
		details.appendChild(div)
		
		var pageName = document.title
		if ( localStorage.getItem(pageName+" "+szoveg) ) {
			details.open = true
		}
		summary.onclick = function(){
			if ( details.open != true ) {
				localStorage.setItem(pageName+" "+szoveg,true)
			} else {
				localStorage.removeItem(pageName+" "+szoveg)
			}
		}
	}

	var Table = document.getElementsByClassName("mainTitle")
	for ( var i = 0;   i < Table.length;   i++ ) { // temakorok
		Table[i].parentElement.className = "temakor"
		Table[i].parentElement.id = Table[i].innerHTML
		createTemakor(Table[i].innerHTML)
	}
	createTemakor("uncategorized")

	var Table = document.querySelectorAll('.phase,.status')
	for ( var i = 0;   i < Table.length;   i++ ) { // tetelek
		var phaseDiv = Table[i].parentElement // ez maga a tétel DETAILS-a, amiben az összes kérdése megtalálható
		var tetelID = i + "," + Table[i].innerHTML
		phaseDiv.id = tetelID
		//console.log(tetelID)
		var div = document.createElement("div");

		var label = document.createElement("label")
		label.id = tetelID+"_button"
		label.innerHTML = '<b>'+ Table[i].innerHTML +'</b>'
		label.style.cursor = "pointer"; 
		div.appendChild(label)

		if ( Table[i].parentElement.parentElement.className == "temakor" ) {
			var elem = document.getElementById(Table[i].parentElement.parentElement.id + "_details")
			elem.appendChild(div)
		} else {
			var elem = document.getElementById("uncategorized_details")
			elem.appendChild(div)
		}

		if ( localStorage.getItem(tetelID+"_button") == "true" ) {
			label.style.backgroundColor = "paleGreen";
			F_impQlot(phaseDiv)
		} else {
			label.style.backgroundColor = "";
		}
		
		label.onclick = function(){
			if ( localStorage.getItem(this.id) == "true" ) {
				localStorage.setItem(this.id,false)
				this.style.backgroundColor = "";
			} else {
				localStorage.setItem(this.id,true)
				this.style.backgroundColor= "paleGreen";
				var tetelID = this.id
				tetelID = tetelID.slice(0,tetelID.indexOf(","))
				//console.log(tetelID)
				var Table = document.querySelectorAll('.phase,.status')
				F_impQlot(Table[tetelID].parentElement)
			}
			
			func_calcOldNew();
			func_calcJegy()
			func_calcWork()
			func_calcDate()
			func_calcRepeat()
			F_calcqTimer(document.getElementById("btn_qTimer"))
		}
	}
	F_getTime()
	var diffTime = (myTime-startTime).toFixed(2)
	//console.log("– F_tetelChoose – " + diffTime+"s")
}

// –––– –––– –––– –––– –––– –––– –––– –––– –––– –––– –––– –––– –––– –––– –––– –––– –––– –––– –––– –––– –––– –––– –––– ––––*/
function F_tetelQs() { // impID-ket tételhez kapcsolja - későbbiekre (F_createTable -vel látni fogom! ha commentből kiveszem)
	/*F_getTime()
	var diffTime = myTime-oldTime
	console.log("– F_tetelQs BEGIN – " + diffTime)*/
	
	function F_createTable(){
		var div = document.createElement("div")
		document.body.appendChild(div)
		div.style.top = "10px"
		div.style.position = "fixed"
		div.style.width = "98%"
		div.style.height = "90%"
		div.style.backgroundColor = "white"
		div.style.border = "thick solid black"
		div.style.overflow = "auto"
		var table = document.createElement("TABLE")
		div.appendChild(table)
		
		var tr = document.createElement("TR")
		tr.id = "impRow1"
		table.appendChild(tr)
		
		var tr = document.createElement("TR")
		tr.id = "impRow2"
		table.appendChild(tr)
	}
	//F_createTable()
		
	MISSID = ""
	var Table = document.querySelectorAll('.phase,.status')
	for ( var i=0;  i<Table.length;  i++ ) { // tetelek
		var tetelQ = Table[i]
		if ( tetelQ.classList.contains("phase") == true ) { tetelQ.parentElement.classList.add("tetel") }
		if ( tetelQ.classList.contains("status") == true ) { tetelQ.parentElement.classList.add("feltetel") }
		var tetelID = i + "," + tetelQ.innerHTML
		tetelQ.parentElement.id = tetelID
		tetelek[tetelID] = []
		
		if ( document.getElementById("impRow1") ) {
			var th = document.createElement("TH")
			th.id = i+"th"
			th.innerHTML = i
			th.title = tetelQ.innerHTML
			document.getElementById("impRow1").appendChild(th)
			var td = document.createElement("TD")
			td.style.verticalAlign = "top"
			td.id = i+"td"
			document.getElementById("impRow2").appendChild(td)
		}
		
		function F_impQAdd(impID,tagName){
			if ( impID.indexOf("{") != -1 ) {
				var begin = impID.indexOf("{")
				var end = impID.indexOf("}") +1
				impID = impID.slice(begin,end)
			} else if ( impID.indexOf("[") != -1 ) {
				var begin = impID.indexOf("[")
				var end = impID.indexOf("]") +1
				impID = impID.slice(begin,end)
			}
			//console.log(tetelek[tetelID][impID])
			if ( tetelek[tetelID][impID] == true ) { return }
			if ( tetelek[tetelID][impID] == false && tagName == "DIV" ) { return }
			if ( tetelek[tetelID][impID] == false && tagName == "div" ) { return }
			if ( document.getElementById("impRow1") ) { td.innerHTML = td.innerHTML+"<div>"+impID+"</div>" }
			if ( tagName == "DIV" || tagName == "div" ) {
				tetelek[tetelID][impID] = false
			} else if ( tagName == "SPAN" || tagName == "span" ) {
				tetelek[tetelID][impID] = true
			}
		}
		function F_newImpQAdd(impID){
			Qtxt = null
			/*if ( impID.indexOf("[") == 0 ) {
				impID = impID.slice(1,-1)
				Qtxt = arrImpQs[impID]
			} else if ( impID.indexOf("{") == 0 ) {
				impID = impID.slice(1,-1)
				Qtxt = localStorage.getItem("hkExpQ."+impID)
				if ( Qtxt == null ) { 
					return 
				}
				var LSid = Qtxt.slice(0,Qtxt.indexOf(" "))
				Qtxt = localStorage.getItem(LSid)
			}
			F_loadQtxt(impID,divSpan)*/
			F_loadQtxt(impID,"")
			if ( Qtxt == null ) { return }
			if ( Qtxt.indexOf(' class="imp ') == -1 ) { return }
			do {
				var newImpID
				var tagName = Qtxt.slice(0,Qtxt.indexOf(' class="imp '))
				tagName = tagName.slice(tagName.lastIndexOf("<")+1)
				Qtxt = Qtxt.slice(Qtxt.indexOf(' class="imp ')+12)
				newImpID = Qtxt.slice(0,Qtxt.indexOf('"'))
				F_impQAdd(newImpID,tagName)
				//alert("newImpID: "+newImpID)
			} while ( Qtxt.indexOf(' class="imp ') != -1 )
		}
		
		var impQs = tetelQ.parentElement.querySelectorAll('.imp')
		for ( var x=0;  x<impQs.length;  x++ ) {
			var impQ = impQs[x]
			if ( impQ.classList.contains("imp") == true ) { 
				var impID = impQ.className
				var tagName = impQ.tagName
				F_impQAdd(impID,tagName) 
			}
		}
		
		do {
			var count = 0
			for ( var impID in tetelek[tetelID] ) {
				count = count +1
				F_newImpQAdd(impID)
			}
			if ( count == 0 ) { break }
			for ( var impID in tetelek[tetelID] ) {
				count = count -1
				F_newImpQAdd(impID)
			}
		} while ( count != 0 )
	}
	
	if ( MISSID != "" ) { alert("F_impQ: Az alábbi EXPid-k még nincsenek LS-be reigsztrálva: "+MISSID + "\nNyisd meg a tárgyválasztás ablaknál az adott tárgyhoz kapcsolódó egyéb tárgy(ak)at egyszer --> pl. Biokémia II esetén nyisd meg Biokémia I, Élettan, Molekuláris Sejtbiológia") }
	
	/*F_getTime()
	var diffTime = myTime-oldTime
	console.log("– F_tetelQs END – " + diffTime)*/
}

var prior,hossz,jegy
function func_calcPriorHosszJegy(elem){
	hossz = 1
	prior = 100
	if ( elem.classList.contains("jr") == true ) { hossz = 0 }
	if ( isNaN(hossz) == true ) { hossz = 0 }
	F_calcLSid(elem)
	var LSid = actLSid
	jegy = localStorage.getItem(LSid+'_jegy')
	if ( jegy == "1" && localStorage.getItem(LSid+'_repeat') > 0 ) { // repeat is kell, mert ha 0ra osztályzom a jegyet akkoris 1nek menti el
		jegy = 4
	} else if ( jegy == 2 ) {
		jegy = 7
	} else if ( jegy == 3 ) {
		jegy = 8
	} else if ( jegy == 4 ) {
		jegy = 10
	} else {
		jegy = 0
	}
}

function F_kerdesStatus(){ // kérdés hány %-on áll?
	var allStatusQs = document.getElementsByClassName("status")
	function F_calculateThis(thisQ){
		F_calcLSid(thisQ)
		var LSid = actLSid
		
		func_calcPriorHosszJegy(thisQ)
		
		var date = new Date();
		var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(LSid+'_idopont')

		if ( localStorage.getItem(LSid+'_repeat') == null) {
			localStorage.setItem(LSid+'_repeat', 0);
		}
		var repCount = Number(localStorage.getItem(LSid+'_repeat'))
		func_calcTimeDiff(repCount)
		//console.log(LSid+ " " +hossz)

		// if ( localStorage.getItem(LSid+"_skip") != "perma" ){
			trueJegy = trueJegy + Math.pow(0.8, idopont / timeDiff) * prior * hossz * jegy
			maxJegy = maxJegy + prior * hossz * 10
		// }
	}
	
	for ( var i = 0;   i < allStatusQs.length;   i++ ) {
		var maxJegy = 0
		var trueJegy = 0
		var statusQ = allStatusQs[i].parentElement
		if ( statusQ.parentElement.id != "kerdeslocation" ) {
			if ( statusQ.className.indexOf("kerdes") != -1 ) { F_calculateThis(statusQ) }
			var altQs = statusQ.getElementsByTagName("*")
			for ( var y = 0;   y < altQs.length;   y++ ) {
				if ( altQs[y].className.indexOf("kerdes") != -1 ) {
					F_calculateThis(altQs[y])
				}
			}
			var red, green
			if ( 2*trueJegy/maxJegy > 1 ) {
				var more = 2*trueJegy/maxJegy -1
				red = Math.round(255*(1-more))
				green = 255
			} else {
				var less = 2*trueJegy/maxJegy
				green = Math.round(255*less)
				red = 255
			}
			document.getElementById(i+"_markja").innerHTML = Math.round(100 * trueJegy/maxJegy)
			document.getElementById(i+"_markja").style.backgroundColor = "rgb("+red+", "+green+", 0)";
		}
	}
}

var obj_fixNote = [] // object (nem table és nem array!)
var obj_skip = [] // object (nem table és nem array!)

function F_calcLSid(detElem){
	actLSid = undefined
	var tagName = detElem.tagName
	tagName = tagName.toLowerCase()
	//console.log(actQtext)
	actQtext = '<'+tagName+' class="'+detElem.className+'">'+detElem.innerHTML+'</'+tagName+'>'
	var EXPid = null
	if ( detElem.className.indexOf("{") > -1 ) {
		var begin = detElem.className.indexOf("{")
		var end = detElem.className.indexOf("}")
		EXPid = detElem.className.slice(begin,end+1)
	
		var qName = F_QtxtQname(detElem.innerHTML + " " + EXPid)
		actLSid = localStorage.getItem(qName)
		
		//var qName = F_QtxtQname(detElem.innerHTML)
		//actLSid = localStorage.getItem(qName)
		
		//var string = localStorage.getItem("hkExpQ."+EXPid)
		//if ( string != null ) { actLSid = string.slice(0,string.indexOf(" ")) }
	} 
	if ( detElem.className.indexOf("[") > -1 ) {
		var begin = detElem.className.indexOf("[")
		var end = detElem.className.indexOf("]")
		EXPid = detElem.className.slice(begin,end+1)
		
		var qName = F_QtxtQname(detElem.innerHTML + " " + EXPid)
		actLSid = localStorage.getItem(qName)
	} 
	if ( actLSid == undefined )  {
		var qName = F_QtxtQname(actQtext)
		if ( localStorage.getItem(qName) ) { actLSid = localStorage.getItem(qName) }
		//if ( actLSid != null ) { console.log(qName) }
	}
}

function func_tableSkipFix(){
	F_getTime()
	var startTime = myTime
	for ( var i=0;  i<kerdesek.length;  i++ ) {
		F_calcLSid(kerdesek[i])
		var Qtext = actQtext
		var LSid = actLSid

		if ( typeof LSid == "undefined" ) {
			// alert(kerdesek[i].id+" + LSid=undefined + "+Qtext)
			// azoknak undefinied egyenlore, melyek épp az aktuálisak
		} else if ( localStorage.getItem(LSid+"_note") ) {
			//if ( LSid == "undefined" ) { alert("a: " + kerdesek[i].innerHTML) }
			//if ( LSid == "undefined" ) { alert("a: " + kerdesek[i].innerHTML) }
			/*if ( LSid ) { 
			} else {
				alert(kerdesek[i].innerHTML) 
			}*/
			//if ( Qtext.indexOf("vese - anterior") !== -1 ) { alert(LSid + ": " + Qtext) }
			obj_fixNote[LSid] = localStorage.getItem(LSid+"_note")
		} else {
			if ( obj_fixNote[LSid] ) { delete obj_fixNote[LSid] }
		}
		if ( localStorage.getItem(LSid+"_skip") ) {
			if ( localStorage.getItem(LSid+"_skip") == "perma" ){
				obj_skip[LSid] = localStorage.getItem(LSid+"_skip")
			} else if ( localStorage.getItem(LSid+"_skip") == "important" ){
				obj_skip[LSid] = localStorage.getItem(LSid+"_skip")
			} else if ( localStorage.getItem(LSid+"_skip") == "tempskip" ){
				obj_skip[LSid] = localStorage.getItem(LSid+"_skip")
			} else if ( localStorage.getItem(LSid+"_skip") == "vizsgaSkip" ){
				var date = new Date();
				date = Math.floor(date.getTime()/60000)
				if ( date > vizsgaTime ) {
					localStorage.removeItem(LSid+'_skip')
				} else {
					obj_skip[LSid] = localStorage.getItem(LSid+"_skip")
				}
				//if ( obj_skip[LSid] ) { delete obj_skip[LSid] }
			} else {
				var date = new Date();
				date = Math.floor(date.getTime()/60000)
				var difference = date - localStorage.getItem(LSid+"_idopont")
				difference = difference /60 // átállítja órára
				if ( difference < localStorage.getItem(LSid+"_skip") ) {
					obj_skip[LSid] = localStorage.getItem(LSid+"_skip")
				} else {
					if ( obj_skip[LSid] ) { delete obj_skip[LSid] }
					localStorage.removeItem(LSid+'_skip')
				}
			}
		} else {
			if ( obj_skip[LSid] ) { delete obj_skip[LSid] }
		}
	}
	F_getTime()
	var diffTime = (myTime-startTime).toFixed(2)
	//console.log("– func_tableSkipFix – " + diffTime+"s")
}
function F_valFix(){
	var x = 0
	for ( var id in obj_fixNote ) {
		if ( obj_fixNote[id] ) {
			x = x+1
		}
	}
	document.getElementById("btn_fix").value = x;
}
F_valFix()
function F_valSkip(){
	var x = 0
	var y = 0
	var z = 0
	for ( var id in obj_skip ) {
		if ( obj_skip[id] == "perma" ) {
			x = x+1
		}
		if ( obj_skip[id] == "vizsgaSkip" ) {
			y = y+1
			//console.log(id+"_skip = vizsgaSkip")
		}
		if ( obj_skip[id] == "tempskip" ) {
			z = z+1
			//console.log(id+"_skip = vizsgaSkip")
		}
	}
	document.getElementById("btn_skip").value = x;
	document.getElementById("btn_vizsgaskip").value = y;
	document.getElementById("btn_tempskip").value = z;
}
F_valSkip()

function func_showQtext(LSid){
	LSid = LSid.slice(0,LSid.indexOf('_fullText'))
	var text = objQnameQtxt[localStorage.getItem(LSid)]
	text = text.replace('DETAILS','DETAILS open')
	F_midQText(text)
}

function func_DeleteSkipFix(kerdes){
	if (confirm('biztos törlöd? '+kerdes)) {
		skipfix = kerdes.slice(kerdes.indexOf("_"))
		skipfix = skipfix.slice(1,skipfix.length-5)
		kerdes = kerdes.slice(0,kerdes.indexOf("_"));  // remove "_skipClear" vagy "_fixClear" a nevébol és csak az id marad
		//alert(skipfix+": "+kerdes)
		if ( localStorage.getItem(kerdes+'_skip') == "vizsgaSkip" ) { skipfix = "vizsgaskip" }
		if ( skipfix == "fix" ) {
			localStorage.removeItem(kerdes+'_note')
		} else if ( skipfix == "skip" || skipfix == "vizsgaskip" || skipfix == "tempskip" ) {
			localStorage.removeItem(kerdes+'_skip')
		}
		func_tableSkipFix()
		func_SetTextOfSkipFixDiv("btn_"+skipfix)
		F_valFix()
		F_valSkip()
	}
}
var lastQSkip
function func_SetTextOfSkipFixDiv(SkipFix){
	console.clear()
	var fullText = ""
	var qCount = 0
	var div = document.getElementById("div_skipFix")
	div.innerHTML = fullText
	if ( SkipFix == "btn_fix" ) {
		div.style.borderColor = "red"
		for ( var LSid in obj_fixNote ) {
			if ( obj_fixNote[LSid] ) {
				var qName = localStorage.getItem(LSid)
				if ( qName != null ) {
					var qButton = "<button id='"+LSid+"_fixClear' class='fix' style='border: 3px solid black;' type='button' onclick='func_DeleteSkipFix(this.id)'>✖</button>"
					qName = '<details><summary>'+qButton+' '+qName+'</summary><ul class="normal">'+obj_fixNote[LSid]+'</ul></details>'
					fullText = fullText + qName
					qCount = qCount +1
				}
			}
		}
		fullText = "qCount:" +qCount+ "<br>" +fullText
	}
	if ( SkipFix == "btn_skip" ) {
		div.style.borderColor = "black"
		for ( var LSid in obj_skip ) {
			if ( obj_skip[LSid] == "perma" ) {
				var qName = localStorage.getItem(LSid)
				if ( qName != null ) {
					var qButton = "<button id='"+LSid+"_skipClear' class='fix' style='border: 3px solid black;' type='button' onclick='func_DeleteSkipFix(this.id)'>✖</button>"
					qName = qButton+'<summary id="'+LSid+'_fullText" onclick="func_showQtext(this.id)">' + qName + '</summary><br>'
					fullText = fullText + qName
					qCount = qCount +1
				}
			}
		}
		fullText = "qCount:" +qCount+ "<br>" +fullText
	}
	if ( SkipFix == "btn_vizsgaskip" ) {
		div.style.borderColor = "blue"
		var fullText = ""
		var qCount = 0
		for ( var LSid in obj_skip ) {
			if ( obj_skip[LSid] == "vizsgaSkip" ) {
				var qName = localStorage.getItem(LSid)
				if ( qName != null ) {
					var qButton = "<button id='"+LSid+"_vizsgaskipClear' class='fix' style='border: 3px solid black;' type='button' onclick='func_DeleteSkipFix(this.id)'>✖</button>"
					qName = qButton+'<summary id="'+LSid+'_fullText" onclick="func_showQtext(this.id)">' + qName + '</summary><br>'
					fullText = fullText + qName
					qCount = qCount +1
				}
			}
		}
		var date = new Date();
		var timeText = Math.floor(date.getTime()/60000)
		timeText = vizsgaTime - timeText
		timeText = timeText + "perc van még vissza viszga-resethez. <br>"
		fullText = timeText + fullText
	}
	if ( SkipFix == "btn_tempskip" ) {
		div.style.borderColor = "gold"
		for ( var LSid in obj_skip ) {
			if ( obj_skip[LSid] == "tempskip" ) {
				var qName = localStorage.getItem(LSid)
				if ( qName != null ) {
					var qButton = "<button id='"+LSid+"_tempskipClear' class='fix' style='border: 3px solid black;' type='button' onclick='func_DeleteSkipFix(this.id)'>✖</button>"
					qName = qButton+'<summary id="'+LSid+'_fullText" onclick="func_showQtext(this.id)">' + qName + '</summary><br>'
					fullText = fullText + qName
					qCount = qCount +1
				}
			}
		}
		fullText = "qCount:" +qCount+ "<br>" +fullText
	}
	div.innerHTML = fullText
}

function func_calcJegy() { // átlagJegyet kiszámolja
	F_getTime()
	var startTime = myTime

	var maxJegy = 0
	var trueJegy = 0
	for ( var tetel in tetelek ) {
		if ( localStorage.getItem(tetel+"_button") == "true" ) {
			var childs = document.getElementById(tetel).getElementsByTagName("*")
			for ( var i = 0;   i < childs.length;   i++ ) {
				if ( childs[i].classList.contains("kerdes") == true ) {
					func_calcPriorHosszJegy(childs[i])
					//alert(maxJegy+" : "+prior+" : "+hossz)
					maxJegy = maxJegy + prior * hossz * 10
					//if ( isNaN(maxJegy) ==  true ) { alert(jegy) }
					trueJegy = trueJegy + prior * hossz * jegy
				}
			}
		}
	}
	document.getElementById("btn_Jegy").value = Math.floor(100*trueJegy/maxJegy) + "%" 
	
	F_getTime()
	var diffTime = (myTime-startTime).toFixed(2)
	//console.log("– func_calcJegy – " + diffTime+"s")
}
function func_calcWork() { // LS mentés mikor lesz 1-10+
	document.getElementById("button_NextQ").value = localStorage.getItem("hk.lastSavedLS")
}
function func_calcDate() { // átlagIdot kiszámolja
	F_getTime()
	var startTime = myTime
	
	var allDate = 0
	var countDate = 0
	for ( var tetel in tetelek ) {
		if ( localStorage.getItem(tetel+"_button") == "true" ) {
			var childs = document.getElementById(tetel).getElementsByTagName("*")
			for ( var i = 0;   i < childs.length;   i++ ) {
				if ( childs[i].classList.contains("kerdes") == true ) {
					// itt elvileg még kell egy feltétel, hogy beleszámolja (talán a skippel kapcsolatos lehet, de csak tipp)
					// if ( kerdesID[fotema][temaKerdes][kerdes] == true ) { // ez volt a régiben
					F_calcLSid(childs[i])
					var LSid = actLSid
					if ( LSid+'_jegy' in localStorage ) {
						var date = new Date();
						var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(LSid+'_idopont')
						allDate = allDate + idopont
						countDate = countDate + 1
					}
				}
			}
		}
	}
	var date = allDate / countDate
	date = date / 60 / 24
	date = parseFloat(Math.round(date * 100) / 100).toFixed(1);
	document.getElementById("span_Date").innerHTML = date
	
	F_getTime()
	var diffTime = (myTime-startTime).toFixed(2)
	//console.log("– func_calcDate – " + diffTime+"s")
}
function func_calcRepeat() { // átlagIsmétlések számát kiszámolja
	F_getTime()
	var startTime = myTime
	
	var questCount = 0
	var allRepVal = 0
	for ( var tetel in tetelek ) {
		if ( localStorage.getItem(tetel+"_button") == "true" ) {
			var childs = document.getElementById(tetel).getElementsByTagName("*")
			for ( var i = 0;   i < childs.length;   i++ ) {
				if ( childs[i].classList.contains("kerdes") == true ) {
					// itt elvileg még kell egy feltétel, hogy beleszámolja (talán a skippel kapcsolatos lehet, de csak tipp)
					// if ( kerdesID[fotema][temaKerdes][kerdes] == true ) { // ez volt a régiben
					F_calcLSid(childs[i])
					var Qtext = actQtext
					var LSid = actLSid
					
					func_calcPriorHosszJegy(childs[i])

					var repeat
					if ( LSid == undefined ) { 
						repeat = 0
					} else {
						repeat = Number(localStorage.getItem(LSid+'_repeat'))
					}
					
					
					if ( isNaN(hossz) ==  false ) {
						questCount = questCount + prior*hossz
						allRepVal = allRepVal + prior*hossz *repeat
					}
				}
			}
		}
	}
	var atlag = allRepVal / questCount
	atlag = +atlag.toFixed(1);
	document.getElementById("span_Repeat").innerHTML = atlag
	
	F_getTime()
	var diffTime = (myTime-startTime).toFixed(2)
	//console.log("– func_calcRepeat – " + diffTime+"s")
}
function func_calcRepTable() { // adott repeatesek hogyan állnak kiszámolja
	F_getTime()
	var startTime = myTime
	
	var doneLSid = ","
	for ( var i = 0;   i < 6;   i++ ) { // resetelje a Tablekat 0-ra
		document.getElementById(i+"left").innerHTML = 0
		document.getElementById(i+"still").innerHTML = 0
		document.getElementById(i+"average").innerHTML = 0
		document.getElementById(i+"average").title = 0
		document.getElementById(i+"hossz").innerHTML = 0
	}
	//console.clear()
	for ( var tetel in tetelek ) {
		if ( localStorage.getItem(tetel+"_button") == "true" ) {
			var childs = document.getElementById(tetel).getElementsByTagName("*")
			for ( var i = 0;   i < childs.length;   i++ ) {
				if ( childs[i].classList.contains("kerdes") == true ) {
					// itt elvileg még kell egy feltétel, hogy beleszámolja (talán a skippel kapcsolatos lehet, de csak tipp)
					// if ( kerdesID[fotema][temaKerdes][kerdes] == true ) { // ez volt a régiben
					
					func_calcPriorHosszJegy(childs[i])
					var actQhossz = Number(hossz)
					
					var Qtxt = childs[i].innerHTML
					/*console.clear()
					console.log(Qid)
					console.log(Qtxt)
					alert("stop")*/
					var qName = F_QtxtQname(Qtxt)
					var LSid = localStorage.getItem(qName)
					
					if ( doneLSid.indexOf(LSid) == -1 || LSid == undefined ) { 
						doneLSid = doneLSid +LSid+ ","
						
						var kerdes = localStorage.getItem(childs[i].innerHTML)
						if ( localStorage.getItem(LSid+'_idopont') != null && localStorage.getItem(LSid+'_repeat') != "" ) {
							if ( localStorage.getItem(LSid+'_skip') === null || localStorage.getItem(LSid+'_skip') === "important" ) {
								var repCount = localStorage.getItem(LSid+'_repeat')
								var min = document.getElementById(repCount+"min").innerHTML
								var date = new Date();
								var idopont = localStorage.getItem(LSid+'_idopont')
								idopont = Math.floor(date.getTime()/60000) - idopont
								if ( repCount == 0 && idopont > 100 ) {
									if ( localStorage.getItem(LSid+"_skip") == null ) {
										//alert(repCount+ " " +idopont+ " " +LSid+ " " +Qtxt)
									}
								}

								if ( idopont > min ) { // Tableba hozzáad 1et left-hez
									document.getElementById(repCount+"left").innerHTML = parseInt(document.getElementById(repCount+"left").innerHTML) +1
									document.getElementById(repCount+"average").title = parseInt(document.getElementById(repCount+"average").title) +idopont
								} else { // Tableba hozzáad 1et still-hez
									document.getElementById(repCount+"still").innerHTML = parseInt(document.getElementById(repCount+"still").innerHTML) +1
								}
								document.getElementById(repCount+"average").innerHTML = parseInt(document.getElementById(repCount+"average").innerHTML) +idopont
								document.getElementById(repCount+"hossz").innerHTML = parseInt(document.getElementById(repCount+"hossz").innerHTML) +actQhossz
							}
						}
					}
				}
			}
		}
	}
	for ( var i = 0;   i < 6;   i++ ) { // resetelje a Tablekat 0-ra
		var average = parseInt(document.getElementById(i+"average").innerHTML)
		var count = parseInt(document.getElementById(i+"still").innerHTML) + parseInt(document.getElementById(i+"left").innerHTML)
		average = average / count
		average = +average.toFixed(0);
		document.getElementById(i+"average").innerHTML = average
		
		average = parseInt(document.getElementById(i+"average").title)
		count = parseInt(document.getElementById(i+"left").innerHTML)
		average = average / count
		average = +average.toFixed(0);
		document.getElementById(i+"average").title = average
	}
	
	F_getTime()
	var diffTime = (myTime-startTime).toFixed(2)
	console.log("– func_calcRepTable – " + diffTime+"s")
}
function func_calcOldNew(){
	F_getTime()
	var startTime = myTime
	
	var doneLSid = ","
	var kerdesNew = 0
	var repNew = 0
	var repOld = 0
	var repFast = 0
	var repSlow = 0
	var allCount = 0
	
	function F_calculating(LSid){
		if ( LSid != undefined ) {
			if ( doneLSid.indexOf(","+LSid+",") == -1 ) { 
				allCount = allCount +1
				doneLSid = doneLSid +LSid+ ","
				//console.log(allCount+". "+LSid)
				if ( localStorage.getItem(LSid+"_skip") != "perma" && localStorage.getItem(LSid+"_skip") != "vizsgaSkip" && localStorage.getItem(LSid+"_skip") != "tempskip" ) {
					if ( localStorage.getItem(LSid+'_jegy') != null && localStorage.getItem(LSid+'_jegy') != "" ) {
						var repCount = Number(localStorage.getItem(LSid+'_repeat'))
						var date = new Date();
						var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(LSid+'_idopont')
						func_calcTimeDiff(repCount)
						
						//ez az, hogy csak azt dobhatja ki, melynél a vizsga már közelebb van, mint a repTime
						var remain = Math.floor(date.getTime()/60000)
						remain = vizsgaTime - remain
						
						if ( localStorage.getItem(LSid+"_jegy") >= 1 ) {
							if ( timeDiff >= idopont ) {
							//if ( remain > idopont ) {
								repFast = repFast +1
							} else {
								repSlow = repSlow +1
							}
						}
					} else {
						kerdesNew = kerdesNew +1
					}
					if ( localStorage.getItem(LSid+"_skip") == "important" ) {
						if ( timeDiff >= idopont ) {
							repOld = repOld +1
						} else {
							repNew = repNew +1
						}
					}
				}
			}
		} else {
			kerdesNew = kerdesNew +1
		}
		//console.log(kerdesNew+" "+LSid)
	}
	var text = objQnameQtxt[localStorage.getItem("hkQ.257")]
	for ( var tetel in tetelek ) { // végignézi az összes kérdést
		if ( localStorage.getItem(tetel+"_button") == "true" ) {
			//console.log(tetel)
			var tetelQ = document.getElementById(tetel)
			if ( tetelQ.classList.contains("kerdes") == true ) {
				F_calcLSid(tetelQ)
				F_calculating(actLSid)
			}
			var tetelQs = tetelQ.getElementsByClassName("kerdes")
			for ( var x=0; x<tetelQs.length; x++ ) {
				F_calcLSid(tetelQs[x])
				F_calculating(actLSid)
			}
		}
	}
	document.getElementById("btn_newQuest").value = kerdesNew
	document.getElementById("span_RepNew").innerHTML = repNew;
	document.getElementById("span_RepOld").innerHTML = repOld;
	document.getElementById("btn_RepFast").value = repFast;
	document.getElementById("span_RepSlow").innerHTML = repSlow
	
	F_getTime()
	var diffTime = (myTime-startTime).toFixed(2)
	//console.log("– func_calcOldNew – " + diffTime+"s")
}

function func_clearOldHistory() {
	for ( var i = 0;   i < kerdesek.length;   i++ ) {
		var kerdes = localStorage.getItem(kerdesek[i].innerHTML)
		var date = new Date();
		var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(kerdes+'_idopont')
		if ( localStorage.getItem(kerdes+"_skip") == "skip" ) {
			if ( idopont < 90 ) {
			} else { //azért így oldottam meg, mertha idopont == null vagy mi akkor is muködjön
				localStorage.removeItem(kerdes+'_skip');
				localStorage.removeItem(kerdes+'_jegy');
			}
		}
	}
}
//func_clearOldHistory() // sokáig tart a betöltésnél szóval remove-oltam (max ha megnott a localstorage, akkor legyen egy button amivel lehívom és kitakarítja)

if ( localStorage.getItem("hk.newQ") == "true" ) {
	document.getElementById("btn_newQuest").style.borderColor = "limegreen"
} else {
	document.getElementById("btn_newQuest").style.borderColor = "black"
}

function F_divQprop() {
	var div = document.createElement("div")
	div.id = "div_qProp"
	var questDiv = document.getElementById("div_MainFrame");
	questDiv.appendChild(div)
	div.style.backgroundColor = "white"
	div.style.border = "10px solid black"
	div.style.display = "none"
	div.style.height = "73vh"
	div.style.overflow = "auto"
	
	
	var qProp = document.createElement("span")
	div.appendChild(qProp)
	qProp.id = "span_qProp"
	
	/*var input = document.createElement("INPUT")
	input.setAttribute("type", "text")
	input.setAttribute("value", "")
	div.appendChild(input)
	input.id = "input_qProp"*/
	
	function F_clickColor(){
		var num = this.parentElement.innerHTML
		alert(num)
		num = num.slice(num.indexOf('td.0.')+5,num.indexOf('<br>'))
		document.getElementById("td.2."+num).style.backgroundColor = this.style.backgroundColor
	}
	
	var snow = document.createElement("span")
	div.appendChild(snow)
	snow.style.backgroundColor = "snow"
	snow.style.height = "25%"
	snow.style.width = "120px"
	snow.style.border = "2px solid black"
	snow.style.display = "inline-block"
	snow.style.position = "absolute"
	snow.style.left = "15px"
	snow.style.bottom = "15px"
	snow.onclick = function(){ F_clickColor()}
	
	var lawngreen = document.createElement("span")
	div.appendChild(lawngreen)
	lawngreen.style.backgroundColor = "lawngreen"
	lawngreen.style.height = "25%"
	lawngreen.style.width = "120px"
	lawngreen.style.border = "2px solid black"
	lawngreen.style.display = "inline-block"
	lawngreen.style.position = "absolute"
	lawngreen.style.left = "20%"
	lawngreen.style.bottom = "15px"
	lawngreen.onclick = function(){ F_clickColor() }
	
	var blue = document.createElement("span")
	div.appendChild(blue)
	blue.style.backgroundColor = "blue"
	blue.style.height = "25%"
	blue.style.width = "120px"
	blue.style.border = "2px solid black"
	blue.style.display = "inline-block"
	blue.style.position = "absolute"
	blue.style.left = "40%"
	blue.style.bottom = "15px"
	blue.onclick = function(){ F_clickColor() }
	
	var black = document.createElement("span")
	div.appendChild(black)
	black.style.backgroundColor = "black"
	black.style.height = "25%"
	black.style.width = "120px"
	black.style.border = "2px solid black"
	black.style.display = "inline-block"
	black.style.position = "absolute"
	black.style.left = "60%"
	black.style.bottom = "15px"
	black.onclick = function(){ F_clickColor() }

	var gold = document.createElement("span")
	div.appendChild(gold)
	gold.style.backgroundColor = "gold"
	gold.style.height = "25%"
	gold.style.width = "120px"
	gold.style.border = "2px solid black"
	gold.style.display = "inline-block"
	gold.style.position = "absolute"
	gold.style.left = "80%"
	gold.style.bottom = "15px"
	gold.onclick = function(){ F_clickColor() }
}
F_divQprop()

var parentQ = ""
var childQ = ""
var parQord = ""
function F_searchParent(elem) { // megkeresi a 'családfában' legfelül lévo 'kerdes'-t (ami nem feltétlen az, lehet csak 'open' is)
	parentQ = elem
	childQ = elem
	parQord = ""
	do { // megkeresi a 'családfában' legfelül lévo kérdést!
		if ( parentQ.classList.contains("kerdes") == true ) { 
			F_calcLSid(parentQ)
			var LSid = actLSid
			parQord = LSid+" + "+parQord
		}
		childQ = parentQ
		parentQ = parentQ.parentElement
		console.log(childQ.className)
		console.log(parentQ.className)
	} while ( 
		parentQ.classList.contains("altetel") != true &&
		parentQ.classList.contains("tetel") != true && 
		parentQ.classList.contains("feltetel") != true &&
		// parentQ kell pl. mikrobiológia minimum kérdéseknél, különben egybe dobja ki összeset
		childQ.classList.contains("altetel") != true && 
		childQ.classList.contains("tetel") != true && 
		childQ.classList.contains("feltetel") != true
	)
}

var actQid
function F_prevQ(){
	//console.clear()
	console.log("– – – – – – – – F_prevQ – – – – – – – – –")
	var QlocElem = document.getElementById("kerdeslocation")
	var arrayQ = QlocElem.getElementsByClassName("kerdes")
	var qCountLS = 0
	
	// BEGIN – ez a note-hoz kell, hogy a legfelül lévo details-hoz kapcsoltan mentse el (annak sajnos nem mindig van ID-je, mert nem feltétlen kérdés a class-a)
	F_searchParent(priorQelem)
	var parent = parentQ
	//console.log(Qelem.className)
	// END
	if ( document.getElementById("note").value != "" ) {
		//localStorage.setItem(Qelem.innerHTML, document.getElementById("note").value);
		var LSid = "hkQ."+actQid
		localStorage.setItem(LSid+'_note', document.getElementById("note").value);
		document.getElementById("note").value = ""
	}

	for ( var i in activeQs ) {
		var LSid = activeQs[i]
		var jegy = document.getElementById("hkSelect."+i).value
		var newQvolt = false
		//console.log(i+" : "+LSid+" : "+jegy)
		document.getElementById("hkSelect."+i).value = "empty"
		
		// jegy
		if ( jegy != "empty" ) {
			newQvolt = true
			var repCount = Number(localStorage.getItem(LSid+'_repeat'))
			if ( repCount == jegy || jegy > repCount ) {
				changes = 1
			} else if ( jegy-repCount == -1 ) {
				changes = 1.5
			} else if ( jegy-repCount < -1 ) {
				changes = 2
			}
			localStorage.setItem(LSid+'_changes', changes);
			if ( jegy > repCount ) {
				repCount = repCount+1
			} else {
				repCount = jegy
			}
			localStorage.setItem(LSid+'_repeat', repCount)

			if ( jegy == 0 ) { jegy = 1 }
			localStorage.setItem(LSid+'_jegy', jegy)

			var date = new Date();
			localStorage.setItem(LSid+'_idopont', Math.floor(date.getTime()/60000));
			//console.log(jegy+" :idopontot ment el, ezen LSid-re: "+LSid)
		}
		
		// skip
		if ( document.getElementById("td.2."+i).style.backgroundColor == "black" ) {
			localStorage.setItem(LSid+'_skip', "perma")
			newQvolt = true
		} else if ( document.getElementById("td.2."+i).style.backgroundColor == "lawngreen" ) {
			if ( localStorage.getItem(LSid+'_skip') != "important" ) { 
				localStorage.setItem(LSid+'_skip', "important")
				newQvolt = true 
			}
		} else if ( document.getElementById("td.2."+i).style.backgroundColor == "blue" ) {
			localStorage.setItem(LSid+'_skip', "vizsgaSkip")
			newQvolt = true
		} else if ( document.getElementById("td.2."+i).style.backgroundColor == "gold" ) {
			localStorage.setItem(LSid+'_skip', "tempskip")
			newQvolt = true
		} else if ( localStorage.getItem(LSid+'_skip') == "important" ) {
			localStorage.removeItem(LSid+'_skip')
			newQvolt = true
		}
		
		if ( newQvolt == true ) { qCountLS = qCountLS +1 }
	}


	document.getElementById("questTitle").innerHTML = "";
	document.getElementById("note").style.display = 'none';

	func_tableSkipFix()
	F_valFix()
	F_valSkip()

	var lastSavedLS = localStorage.getItem("hk.lastSavedLS")
	if ( lastSavedLS > 4 ) {
		F_saveLS() // androidon crashel, mert a text length-el baja van
	} else {
		lastSavedLS = Number(lastSavedLS)
		lastSavedLS = lastSavedLS +qCountLS
		localStorage.setItem("hk.lastSavedLS",lastSavedLS)
	}
}

var intervalOfs = "nincs"
var priorQelem = "nincs"
var fullTema, checkNum, cloneKerdes
var activeQs = []
function F_nextQ(){
	//console.clear()
	console.log("– – – – – – – – F_nextQ – – – – – – – – –")
	
	F_getTime()
	var startTime = myTime
	var diffTimeX = myTime-startTime
	console.log("– F_nextQ BEGIN – " + diffTimeX)
	
	var QlocElem = document.getElementById("kerdeslocation")
	var averageCV = 0
	var countCV = 0
	var nextDiff = 0

	// elozo kérdés
	if ( priorQelem != "nincs" ) { F_prevQ() }
	activeQs = [] // ezzel resetelem (szükséges mindig!)
	QlocElem.innerHTML = ""

	// következo kérdés
	for ( var x=0; x<50; x++ ) { // custom számot írtam, ennél több egyenlore nincs (egy változó kéne helyette, ami az eddigi max)
		if ( document.getElementById("td.0."+x) ) { 
			document.getElementById("td.0."+x).hidden = true 
			document.getElementById("td.1."+x).hidden = true 
			document.getElementById("td.2."+x).hidden = true 
			
			document.getElementById("td.2."+x).innerHTML = "&nbsp;"
		}
	}
	priorQelem = "nincs";
	var priorQ_alt = "nincs"
	var priorValue2 = -1
	var priorValue = -1
	var priorValue_alt = -1
	var priorType = 1
	var checkValue = 0
	
	F_nextMark()

	var newQs = []
	function F_calcQValue(Qelem) { // kérdés value-ját kiszámolja, és ha nagyobb, akkor kiválasztja
		var LSid
		F_calcLSid(Qelem)
		LSid = actLSid
		var shouldBreak = false // ehelyett meg kéne próbálni a "return"-t !!!
		if ( LSid == undefined || LSid == null ) {
			if ( document.getElementById("btn_newQuest").style.borderColor == "limegreen" ) {
				if ( document.getElementById("btn_nextQdiff").style.backgroundColor != "coral" ) {
					newQs.push(Qelem)
				} else if ( priorType < 2 ) {
					priorQelem = Qelem
				}
				priorType = 2
			}
		} else {
			/* skipQ */ if ( localStorage.getItem(LSid+"_skip") && localStorage.getItem(LSid+"_skip") != "atlag" && localStorage.getItem(LSid+"_skip") != "important" ) { return }
			/* newQ */if ( document.getElementById("btn_newQuest").style.borderColor == "limegreen" ) {
				if ( localStorage.getItem(LSid+"_jegy") != null ) { return }
				if ( document.getElementById("btn_nextQdiff").style.backgroundColor != "coral" ) {
					newQs.push(Qelem)
					return
				}
				if (  priorType < 2 ) { priorQelem = Qelem }
				priorType = 2
			}
			/* newQ */if ( localStorage.getItem(LSid+"_jegy") == null ) {
				if ( document.getElementById("btn_newQuest").style.borderColor == "limegreen" && priorType < 2 ) {
					priorType = 2
				}
				if ( document.getElementById("btn_newQuest").style.borderColor == "limegreen" && priorType < 2 ) {
					priorQelem = Qelem
					priorType = 2
				}
			}
			/* important */if ( document.getElementById("btn_newQuest").style.borderColor != "limegreen" && localStorage.getItem(LSid+"_skip") == "important" ) {
				var repCount = Number(localStorage.getItem(LSid+'_repeat'))
				if ( document.getElementById("hkQ.nextRep"+repCount).style.backgroundColor == "limegreen" ) {
					var date = new Date();
					var idopont2 = Math.floor(date.getTime()/60000) - localStorage.getItem(LSid+'_idopont')
					func_calcTimeDiff(repCount)
					if ( idopont2 > timeDiff ) { 
						priorType = 2
						
						var checkValue2 = idopont2 / timeDiff
						if ( checkValue2 > priorValue2 ) {
							priorValue2 = checkValue2
							priorQelem = Qelem
						}
					}
				}
			}
			/* gold */if ( document.getElementById("btn_newQuest").style.borderColor != "limegreen" && localStorage.getItem(LSid+"_skip") == "gold" ) {
				var repCount = Number(localStorage.getItem(LSid+'_repeat'))
				if ( document.getElementById("hkQ.nextRep"+repCount).style.backgroundColor == "limegreen" ) {
					var date = new Date();
					var remain = Math.floor(date.getTime()/3600000)
					remain = localStorage.getItem("vizsgaSkip") - remain
					
					if ( remain < 12 ) { 
						priorType = 2
						
						var idopont2 = Math.floor(date.getTime()/60000) - localStorage.getItem(LSid+'_idopont')
						func_calcTimeDiff(repCount)
						var checkValue2 = idopont2 / timeDiff
						if ( checkValue2 > priorValue2 ) {
							priorValue2 = checkValue2
							priorQelem = Qelem
						}
					}
				}
			}
			/* oldQ */if ( priorType == 1 && localStorage.getItem(LSid+"_jegy") != null ) {
				var date = new Date();
				var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(LSid+'_idopont')
				var repCount = Number(localStorage.getItem(LSid+'_repeat'))

				if ( document.getElementById("btn_RepFast").style.borderColor != "limegreen" ) {
					func_calcTimeDiff(repCount)
					if ( timeDiff > idopont ) { return }
				}

				func_calcPriorHosszJegy(Qelem)

				checkValue = prior * idopont / timeDiff
				averageCV = averageCV + checkValue
				countCV = countCV + 1
				if ( document.getElementById("hkQ.nextRep"+repCount).style.backgroundColor != "limegreen" ) { return }

				if ( checkValue > priorValue_alt ) {
					priorValue_alt = checkValue;
					priorQ_alt = Qelem;
				}
				
				if ( document.getElementById("btn_nextQdiff").style.backgroundColor != "coral" ) {
					nextDiff = nextDiff +1
					var xyz = Math.random();
					var refX = 1/nextDiff
					console.log(xyz+" vs "+refX)
					if ( xyz < refX ) {
						priorValue = checkValue;
						priorQelem = Qelem
					}
				} else if ( localStorage.getItem(LSid+"_repeat") == nextRep || nextRep == "zerus" ) { 
					if ( checkValue > priorValue ) {
						priorValue = checkValue;
						priorQelem = Qelem
					}
				}
			}
		}
	}

	averageCV = 0
	countCV = 0
	
	for ( var tetelID in tetelek ) {
		if ( localStorage.getItem(tetelID+"_button") == "true" ) {
			var tetelQ = document.getElementById(tetelID)
			var tetelQs = tetelQ.getElementsByClassName("kerdes")
			if ( tetelQ.classList.contains("kerdes") == true ) { F_calcQValue(tetelQ) }
			for ( var x=0; x<tetelQs.length; x++ ) { F_calcQValue(tetelQs[x]) }
		/* // impQ esetében:
			// az LSid-t küldi F_calcQValue-ba --> amennyiben ez lesz a priorQ, akkor betölti az összes impQ-t a tételen belül
			// erre azért van szükség, mert különben nemtudom elérni, hogy a legfelső Q-et dobja ki :S
			for ( var impID in tetelek[tetelID] ) {
				if ( tetelek[tetelID][impID] == true ) {
					F_calcQValue(impID+" – "+tetelID)
				}
			}
		*/
		}
	}
	
	if ( priorQelem == "nincs" && document.getElementById("btn_nextQdiff").style.backgroundColor != "coral" ) {
		var rand = newQs[Math.floor(Math.random() * newQs.length)]
		priorQelem = rand
	}
	averageCV = averageCV/countCV
	if ( priorQelem == "nincs" ) {
		if ( priorQ_alt != "nincs" ) {
			priorQelem = priorQ_alt
		} else {
			alert("elfogytak a kérdések");
		}
	}

	if ( priorQelem != "nincs" ) {
		F_searchParent(priorQelem)
		//console.log(priorQelem.innerHTML)
		var parent = parentQ
		var Qelem = childQ
		if ( parent.classList.contains("feltetel") == true ) { Qelem = parent }
		//console.log(Qelem.innerHTML)
		
		function func_setTitle(){
			var titleText = ""
			var parent = Qelem.parentElement
			var altetelcim = ""
			var hiddenText = ""
			if ( parent.className == "altetel" ) { // altetel Címet adja hozzá
				altetelcim = parent.id 
				altetelcim = altetelcim.slice(altetelcim.indexOf(",")+1)
				altetelcim = " &#10140; " + altetelcim
				titleText = altetelcim
				parent = parent.parentElement
			}
			var tetelcim = parent.id
			//tetelcim = tetelcim.slice(tetelcim.indexOf(",")+1)
			
			if ( Qelem.className.indexOf("if") == -1 ) { 
				titleText = tetelcim + titleText 
			} else {
				hiddenText = tetelcim + altetelcim
				QlocElem.innerHTML = '<div><font class="abbr"><strong>téma: </font>'+hiddenText+'</strong></div>'
			}
			document.getElementById("questTitle").innerHTML = titleText;
		}
		func_setTitle()
		
		F_impQlot(QlocElem) // szvsz ez fölös, mert a QlocElem.innerHTML empty itt még
		
		function F_copyQs(Qelem){
			F_calcLSid(Qelem)
			var LSid = actLSid
			var Qtext = actQtext
			if ( Qelem.classList.contains("open") == true ) { Qtext = Qtext.replace(">"," open>") }
			QlocElem.innerHTML = QlocElem.innerHTML + Qtext
		}
		F_copyQs(Qelem) // nem feltétlen van id-je !! (mármint ez nem hiba)
		function F_saveNewQs(){
			var arrayQ = QlocElem.getElementsByClassName("kerdes")
			//alert("start")
			for ( var i=0; i<arrayQ.length; i++ ) {
				var Qelem = arrayQ[i]
				F_calcLSid(Qelem)
				var LSid = actLSid
				var Qtext = actQtext
				if ( LSid != undefined ) { continue }
				
				LSid = F_newLSid() 
				var string = localStorage.getItem(document.title+"_LSids")
				string = string+ " " +LSid
				localStorage.setItem(document.title+"_LSids",string)
				
				var qName = F_QtxtQname(Qtext)
				//if ( qName.slice(-3) != "-->" ) { F_setCount(Qelem) }
				localStorage.setItem(qName,LSid)
				localStorage.setItem(LSid,qName)
				//console.log(LSid+" "+qName)
			}
		}
		F_saveNewQs()
		
		QlocElem.innerHTML = QlocElem.innerHTML + "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"
		
		var allImpQs = QlocElem.querySelectorAll('.imp')
		for ( var i=0;  i<allImpQs.length;  i++ ) { 
			if ( allImpQs[i].className.indexOf("imported") != -1 ) { continue } 
			allImpQs[i].className = allImpQs[i].className+" imported" 
		} // ez kell
		
		var numQs = 0
		function F_SetMarks(parQ) { // minden kérdés mellé kreál egy osztályzás lehetoséget
			//console.clear()
			console.log(" – F_SetMarks – ")
			var arrayQ = parQ.getElementsByClassName("kerdes")
			var num
			for ( var i=0; i<arrayQ.length; i++ ) {
				var Qelem = arrayQ[i]
				if ( Qelem.offsetParent === null ) { continue } // így altkérdések rejtve maradnak elején

		//console.clear()
		//console.log(i)
				F_calcLSid(Qelem)
				var LSid = actLSid
				var Qtext = actQtext
				/* csak ellenorzés: */ if ( LSid == undefined ) { alert("F_SetMarks() - "+ num +": "+ LSid +" (az LSid)") }
				
				var isNewQ = true
				for ( var x in activeQs ) {
					if ( activeQs[x] == LSid ) { 
						num = Number(x) 
						isNewQ = false
					}
				}
				if ( isNewQ == true ) {
					numQs = numQs +1
					num = numQs
					activeQs[num] = LSid
				}
				
				if ( Qelem.innerHTML.indexOf("<summary") != -1 ) {  // kérdésbe bekerül, hogy a táblázatban hányas
					if ( Qelem.innerHTML.indexOf('>['+num+'] ') == -1 ) { 
						Qelem.innerHTML = Qelem.innerHTML.replace(">",">["+num+"] ")
					}
				} else if ( Qelem.innerHTML.slice(0,Qelem.innerHTML.indexOf(' ')) != '['+num+']' ) {
					//alert("new: "+Qelem.innerHTML.slice(0,Qelem.innerHTML.indexOf(' ')))
					Qelem.innerHTML = '['+num+'] '+Qelem.innerHTML
				} else {
					//alert("old: "+Qelem.slice(0,Qelem.innerHTML.indexOf(' ')))
				}

				if ( isNewQ == false ) { continue }

				if ( !document.getElementById("hkSelect."+num) ) { F_CreateSelect(num) }
				document.getElementById("td.0."+num).hidden = false 
				document.getElementById("td.1."+num).hidden = false 
				document.getElementById("td.2."+num).hidden = false 
				if ( localStorage.getItem(LSid+"_skip") == "important" ) {
					document.getElementById("td.2."+num).style.backgroundColor = "lawngreen"
				} else if ( localStorage.getItem(LSid+"_skip") == "tempskip" ) {
					document.getElementById("td.2."+num).style.backgroundColor = "gold"
				} else {
					document.getElementById("td.2."+num).style.backgroundColor = "snow"
				}
				
				document.getElementById("td.0."+num).style.borderColor = "black"

				var jegy = localStorage.getItem(LSid+'_jegy')
				var repeat = localStorage.getItem(LSid+'_repeat')
				func_calcPriorHosszJegy(arrayQ[i])
				if ( isAndroid ) { 
					document.getElementById("td.0."+num).onclick = function(){
						var div = document.getElementById("div_qProp")
						var span = document.getElementById("span_qProp")
						var num = this.id
						if ( div.style.display == "none" ) {
							F_hideQArea()
							div.style.display = "block"
							
							span.innerHTML = num+"<br>"+LSid+"<br> Jegy:"+jegy+"<br>Repeat:"+repeat+"<br>Prior:"+prior+"<br>"
						} else {
							F_hideQArea()
							document.getElementById("divQloc").style.display = "block"
						}
					}
				} else {
					document.getElementById("td.0."+num).title = LSid+"<br> Jegy:"+jegy+"<br>Repeat:"+repeat+"<br>Prior:"+prior
					F_titleChange(document.getElementById("td.0."+num).parentElement)
				}

				var selectList = document.getElementById("hkSelect."+num)
				// repeatest beállítja vastagbetusre
				var c = selectList.childNodes;
				for (var x=0; x < c.length; x++) {
					if ( c[x].value == localStorage.getItem(LSid+"_repeat") ) {
						c[x].style.fontWeight = "bolder"
					} else {
						c[x].style.fontWeight = "normal"
					}
				}

				//ido
				document.getElementById("td.0."+num).style.backgroundColor = "white"
				var date = new Date();
				selectList.disabled = false
				selectList.style.backgroundColor = "White"
				if ( localStorage.getItem(LSid+'_idopont') ) {
					var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(LSid+'_idopont')
					// console.log("Qid:"+Qid+" ––– time:"+idopont)
					if ( idopont > 99 ) {
						document.getElementById("td.2."+num).innerHTML = Math.floor(idopont/60)
					} else {
						document.getElementById("td.2."+num).innerHTML = "<strong>"+idopont+"</strong>"
					}
					//document.getElementById("td.2."+num).innerHTML = idopont
					
					var date = new Date();
					var remain = Math.floor(date.getTime()/3600000)
					remain = localStorage.getItem("vizsgaSkip") - remain
					remain = remain*60
					if ( idopont < remain ) {
						document.getElementById("td.2."+num).style.borderColor = "red"
					} else {
						document.getElementById("td.2."+num).style.borderColor = "black"
					}

					func_calcTimeDiff(localStorage.getItem(LSid+'_repeat'))
					checkValue = prior * idopont / timeDiff
					if ( timeDiff > idopont ) { // és nincs enabledelve az 'ultiLearn' (hiányzik még)
						//document.getElementById("td.0."+i).style.backgroundColor = "LawnGreen"
						selectList.disabled = true
						selectList.style.backgroundColor = "Black"
					/*
					} else if ( idopont > timeDiff*3 ) {
						document.getElementById("td.0."+i).style.backgroundColor = "red"
					} else if ( idopont > timeDiff*2 ) {
						document.getElementById("td.0."+i).style.backgroundColor = "orange"
					} else if ( idopont > timeDiff ) {
						document.getElementById("td.0."+i).style.backgroundColor = "yellow"
					*/
					}
					
					if ( repeat == 0 ) {
						document.getElementById("td.0."+num).style.backgroundColor = "red"
					} else if ( repeat == 1 ) {
						document.getElementById("td.0."+num).style.backgroundColor = "orange"
					} else if ( repeat == 2 ) {
						document.getElementById("td.0."+num).style.backgroundColor = "yellow"
					} else {
						document.getElementById("td.0."+num).style.backgroundColor = "LawnGreen"
					}
				}
				document.getElementById("td.0."+num).style.backgroundColor = "White"
				if ( hossz == "0" ) { document.getElementById("td.0."+num).style.backgroundColor = "lightgrey" }
				if ( localStorage.getItem(LSid+'_skip') && localStorage.getItem(LSid+'_skip') != "important" ) {
					document.getElementById("td.0."+num).style.backgroundColor = "Black"
					if ( localStorage.getItem(LSid+'_skip') == "vizsgaSkip" ) {
						document.getElementById("td.0."+num).style.backgroundColor = "Blue"
					}
					selectList.disabled = true
					selectList.style.backgroundColor = "Black"
				}
				if ( document.getElementById("td.0."+num).style.backgroundColor == "blue" || document.getElementById("td.0."+num).style.backgroundColor == "black" || document.getElementById("td.0."+num).style.backgroundColor == "red" ) {
					document.getElementById("td.0."+num).style.color = "white" // fontColor
				} else {
					document.getElementById("td.0."+num).style.color = "black" // fontColor
				}
			}
		}
		F_SetMarks(QlocElem)
		
		F_loadDetails(QlocElem)
		function F_onToggle(){
			var arrayDetails = QlocElem.getElementsByTagName("DETAILS")
			for ( var i=0; i<arrayDetails.length; i++ ) { arrayDetails[i].ontoggle = function(){ 
				F_SetMarks(this) 
				F_loadDetails(this)
				F_highlightQ()
				F_onToggle()
			} }
		}
		F_onToggle()
		
		function F_setIfQs(){
			var arrayQ = QlocElem.getElementsByClassName("kerdes")
			for ( var i=0; i<arrayQ.length; i++ ) {
				if ( arrayQ[i].className.indexOf("if") != -1 ) { 
					var newTxt = arrayQ[i].innerHTML
					
					// kikeresi a megoldást egy változóba (str)
					var end = newTxt.indexOf("</summary")
					var str = newTxt.slice(0,end)
					var begin = str.indexOf("<summary")
					str = str.slice(begin)
					begin = str.indexOf(">")+1
					str = str.slice(begin)
					var num = str.slice(0,str.indexOf("]")+1)
					str = str.slice(str.indexOf("]")+1)
					
					// elrejti a megoldást
					newTxt = newTxt.replace(">"+num+str+'</summary><ul class="normal">', '><font class="abbr">'+num+'ismerd fel<!--'+LSid+'--> ►</font>'+str+'</summary><ul class="normal">')
					arrayQ[i].innerHTML = newTxt
					
					// div-re cseréli a details-t
					var d = document.createElement('div');
					d.innerHTML = arrayQ[i].innerHTML;
					d.className = arrayQ[i].className;
					arrayQ[i].parentNode.replaceChild(d, arrayQ[i]);
					F_detailsToggle(d)
				}
			}
		}
		F_setIfQs()

		function F_highlightQ(){
			for ( var i=1; i<activeQs.length; i++ ) { document.getElementById("td.0."+i).style.borderColor = "black" }
			
			F_calcLSid(priorQelem)
			for ( var i=1; i<activeQs.length; i++ ) {
				if ( activeQs[i] == actLSid ) { 
					document.getElementById("td.0."+i).style.borderColor = "yellow"
					//console.log(actLSid)
					return
				}
			}
			
			var subLSid = null
			var priorNum = -1
			//console.log(parQord)
			for ( var i=0; i<activeQs.length; i++ ) { if  ( parQord.indexOf(activeQs[i]) > priorNum ) { subLSid = activeQs[i] } }
			for ( var i=1; i<activeQs.length; i++ ) {
				//console.log(activeQs[i])
				if ( activeQs[i] == subLSid ) { 
					document.getElementById("td.0."+i).style.borderColor = "yellow"
					return
				}
			}
			if ( subLSid = null ) { console.log("HIBA: F_highlightQ()") }
			
		}
		F_highlightQ()

		var childs = QlocElem.childNodes;
		for ( var i=0; i<childs.length; i++ ) { if ( childs[i].className.indexOf("open") != -1 ) { childs[i].open = true } }

		var Qtext
		Qtext = '<details class="' +Qelem.className+ '">' +Qelem.innerHTML+ "</details>"
		
		actQid = "none"
		F_calcLSid(priorQelem)
		actQid = actLSid.slice(4)
		var LSid = "hkQ." + actQid
		
		var date = new Date();
		var remain = Math.floor(date.getTime()/3600000)
		remain = localStorage.getItem("vizsgaSkip") - remain
		
		if ( localStorage.getItem(LSid+"_note") ) { // note
			//alert(LSid+" "+localStorage.getItem(LSid))
			document.getElementById("note").value = localStorage.getItem(LSid+"_note")
			document.getElementById("button_NextQ").style.borderColor = "red";
			var_note = true
		} else {
			document.getElementById("button_NextQ").style.borderColor = "black";
			var_note = false
		}
	}
	
	
	F_getTime()
	diffTimeX = myTime-startTime
	//console.log("– F_nextQ test – " + diffTimeX)
	
	func_calcJegy()
	func_calcWork()
	func_calcDate()
	func_calcOldNew()
	func_calcRepeat()
	
	F_getTime()
	diffTimeX = myTime-startTime
	//console.log("– F_nextQ test – " + diffTimeX)
	
	F_abbrSet(QlocElem)
	F_imgClick(QlocElem)
	F_titleChange(QlocElem)

	F_midQ(QlocElem)
	F_calcqTimer(document.getElementById("btn_qTimer"))
	
	document.getElementById("button_NextQ").style.color = ""
	if ( localStorage.getItem("hk.lastSavedLS") > 4 ) { 
		document.getElementById("button_NextQ").style.backgroundColor = "aqua" 
	} else {
		document.getElementById("button_NextQ").style.backgroundColor = "white"
	}
	
	F_getTime()
	diffTimeX = myTime-startTime
	lastClickTime = myTime

	console.log("– F_nextQ END – " + diffTimeX)
}

function F_CreateSelect(i) {
	var selectList = document.createElement("select")
	selectList.id = "hkSelect."+i
	//var LSid = activeQs[i]

	var array = ["empty","0","1","2","3","4"]
	for ( var x=0;  x<array.length;  x++ ) {
		var option = document.createElement("option");
		option.value = array[x];
		if ( array[x] == "empty" ) {
			option.text = ""
		} else {
			option.text = array[x];
		}
		selectList.appendChild(option);
	}

	for ( var x=0;  x<3;  x++ ) {
		var td = document.createElement("TD")
		td.id = "td."+x+"."+i
		if ( x == 0 ) {
			/*td.style.color = "white"
			td.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"*/
			//td.style.textShadow = "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"
			td.innerHTML = i
		} else if ( x == 1 ) {
			td.appendChild(selectList)
		} else if ( x == 2 ) {
			td.style.fontSize = "small"
			td.addEventListener("click",function(){
				if ( this.style.backgroundColor == "snow" ) { 
					this.style.backgroundColor = "lawngreen" 
				} else if ( this.style.backgroundColor == "lawngreen" ) { 
					this.style.backgroundColor = "gold" 
				} else if ( this.style.backgroundColor == "gold" ) { 
					this.style.backgroundColor = "blue" 
				} else if ( this.style.backgroundColor == "blue" ) { 
					this.style.backgroundColor = "black" 
				} else if ( this.style.backgroundColor == "black" ) { 
					this.style.backgroundColor = "snow" 
				}
			});
			td.addEventListener("contextmenu",function(ev){
				ev.preventDefault();
				if ( this.style.backgroundColor == "snow" ) { 
					this.style.backgroundColor = "black" 
				} else if ( this.style.backgroundColor == "black" ) { 
					this.style.backgroundColor = "blue" 
				} else if ( this.style.backgroundColor == "blue" ) { 
					this.style.backgroundColor = "gold" 
				} else if ( this.style.backgroundColor == "gold" ) { 
					this.style.backgroundColor = "lawngreen" 
				} else if ( this.style.backgroundColor == "lawngreen" ) { 
					this.style.backgroundColor = "snow" 
				}
				return false;
			}, false);
			td.innerHTML = "&nbsp;"
		}
		document.getElementById("Tr_QsMark."+x).appendChild(td)
	}
}

function F_loadPageText(path) {
	document.getElementById("iframe_targyak").src = path
	var handler = function(e) {
		var targyPath = path
		var targyText = e.data[1]
		pageTexts[targyPath] = targyText
		document.getElementById("div_SearchW").style.backgroundColor = "grey"
		//document.getElementById("div_Refreshng").innerHTML = targyPath
		//document.getElementById("iframe_targyak").src = targyPath
		
		function F_kiirja(){
			pagePath = targyPath // képek betöltéséhez kell pl
			var pageDiv = document.getElementById("div_pageQTargy")
			pageDiv.innerHTML = pageTexts[pagePath]
			F_checkEXPs()
			F_detailsToggle(pageDiv)
			if ( localStorage.getItem("hk.ToggleAll") == "true" ) { F_toggleAll() }
			document.body.style.backgroundColor = ""
			localStorage.setItem("hk.pagePath",pagePath) 
			document.getElementById("iframe_targyak").src = ""
			//F_impQlot(pageDiv)
		}
		if ( targyPath == "expqs.html" ) { 
			if ( expQsLoaded == false ) {
				parentDiv = document.getElementById("div_expQTargy")
				parentDiv.innerHTML = pageTexts["expqs.html"]
				arrImpQs["expQs"] = []
				F_loadExpQs(parentDiv,"expQs")
				expQsLoaded = true
			} else { 
				F_kiirja()
			}
			if ( localStorage.getItem("hk.ToggleAll") == "true" ) { F_loadPageText(localStorage.getItem("hk.pagePath")) }
			//alert("sajt")
		} else {
			F_kiirja()
		}
		for ( var i=0; i<pageLinks.length; i++ ) { 
			if ( pageLinks[i].dataset.src == targyPath ) {
				pageLinks[i].style.color = "blue"
				pageLinks[i].dataset.loaded = true 
			}
			if ( targyPath == localStorage.getItem("hk.pagePath") && pageLinks[i].dataset.src == localStorage.getItem("hk.pagePath") ) {
				pageLinks[i].style.backgroundColor = "yellow"
			}
		}
		removeEventListener('message', handler, false)
	}
	window.addEventListener('message', handler, false)
}
function F_loadPathText(path,i) {
	document.getElementById("iframe_targyak").src = path
	var handler = function(e) {
		var targyPath = path
		var targyText = e.data[1]
		pageTexts[targyPath] = targyText
		removeEventListener('message', handler, false)
		pageLinks[i].style.color = "blue"
		pageLinks[i].dataset.loaded = true 
	}
	window.addEventListener('message', handler, false)
}
function F_loadAllPageTexts() {
	F_getTime()
	var startTime = myTime
	var startTimeX = myTime
	removeEventListener('message', handler, false)
	document.getElementById("div_SearchW").style.backgroundColor = "white"
	var full = pageLinks.length -1
	var count
	for ( var i=0; i<pageLinks.length; i++ ) { 
		count = i
		document.getElementById("div_RefreshStatus").innerHTML = count+"/"+full
		if ( pageLinks[count].dataset.loaded != "true" ) {
			document.getElementById("iframe_targyak").src = pageLinks[count].dataset.src
			break
		}
	}
	
	var timeX = 10
	if ( isAndroid != false ) { timeX = 200 }
	var handler = function(e) {
		var targyText = e.data[1];
		if ( targyText != undefined && targyText != "" ) {
			F_getTime()
			var diffTime = (myTime-startTime).toFixed(2)
			console.log("F_loadAllPageTexts – " + count+". "+pageLinks[count].dataset.src+" "+diffTime+"s")
			startTime = myTime
			
			// savePage
			var path = pageLinks[count].dataset.src
			pageTexts[path] = targyText
			//alert(path+" "+targyText)
			document.getElementById("div_SearchW").style.backgroundColor = "grey"
			document.getElementById("div_Refreshng").innerHTML = path
			document.getElementById("div_RefreshStatus").innerHTML = count+"/"+full
			pageLinks[count].style.color = "blue"
			pageLinks[count].dataset.loaded = true
			
			// nextPage
			var F_timer = window.setInterval(function(){
				clearInterval(F_timer) 
				count = count +1
				if ( count < pageLinks.length ) { 
					path = pageLinks[count].dataset.src
					document.getElementById("iframe_targyak").src = path
				} else {
					document.getElementById("div_SearchW").style.backgroundColor = "white"
					F_getTime()
					var diffTime = (myTime-startTimeX).toFixed(2)
					//var timeX = Math.round((myTime-oldTime)*100)/100
					document.getElementById("div_Refreshng").innerHTML = diffTime+"s"
					removeEventListener('message', handler, false)
				}
			}, /*timeX*/)
		}
	}
	window.addEventListener('message', handler, false)
}
//if ( localStorage.getItem("hk.ToggleAll") == "true" ) { F_loadPageText("expqs.html") }
F_loadPageText("expqs.html")
//if ( localStorage.getItem("hk.ToggleAll") != "true" ) { F_loadAllPageTexts() }

if ( changeStatus == true ) { document.getElementById("div_upgQ").style.display = 'block' }
if ( changeStatus == false ) { document.getElementById("div_upgQ").style.display = 'none' }

document.getElementById("btn_toggleAll").style.backgroundColor = ""

F_getTime()
var diffTime = myTime-oldTime
//console.log("– – – Loading finished – – – " + diffTime)


/* Replace text (regular expression)
	<li><span class="WHITE">(.*?)</span>(.*?)</li>
	<div><font class="abbr"><span class="WHITE">\1</span> ►</font>\2</div>
*/
























