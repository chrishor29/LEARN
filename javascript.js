
/*window.onerror = function(msg, url, linenumber) {
	alert('Error message: '+msg+'\nLine Number: '+linenumber);
}*/

/* PROJECT 
 ✔: Skip funkció
 ✖: export localStorage FIX!!!
----
 ✖: importos kérdést hiába upgradelem html-ben, nem upgradeli LS-ben
 ✖: upgradeQ check!
*/


/* localStorage-be lehet objectset (arrayt is, az egyszerűbb, és ugyanennyit ér mint az objects, tehát nemjutok vele előrébb) menteni (de ezzel se jutok többre, csak 'nehezebb kezelni'(egyébként csak kicsivel, de sajna fölös, szóval minek), de azért megőrzöm)
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


/* export localStorage FIX!!!
 ✖ F_checkQs() --> megnézi mely Q-nak van Qhash LS-be elmentve a Qtext
	✖ amelyiknek el van, azoknak lekéri az LSid-t és beállítja id-nek (+Qid)
	✖ amelyiknek nincs -> annak beállítja a következő empty/max-ot (+Qid)
 ✖ F_checkExpQs()
	✖ elmenti azon kérdések Qtext-jét LS-be(ha még nincsenek), melyek {id}-sek --> {id} = Qtext
	✖ hkExp.maxot beállítja


 ✔ elején végigmegy a kérdéseken 
	✔ F_checkLSid() --> 'megnézi az emptyket' & hkQ.maxot beállítja
 ✔ nextQ
	✔ azokat melyeknek van id-je, megnézi hogy jegy vagy skip miatt van-e és foglalkozik velük (besorolja skipped,jegyes-be)
	✔ azokat melyeknek NINCS id-je, besorolja newQ-be
 ✖ prevQ-nál elmenti azon kérdések Qtext-jét LS-be(ha még nincsenek, 1#és ez newQ-ra legyen igaz#1), melyek jegy/skip-et kaptak
	#1 tehát ha egy osztályozatlan kérdés ami skippelve volt lejárt a skip, vagy egy 0ra osztályozott-nál lejárt az idő --> akkor newQ-ba teszi őket és removelja LS-ből
	✖ LS.setItem(LSid,Qtext) --> tudom jegynél felhasználni(innerHTML)
	✖ kérdésnek id-jét beállítja LSid-re
*/


// § F_setQid: amelyiknek nincs benn ls-ben az id-je: Qid,new
// § F_prevQ: amelyik new, és kapott jegy/skip/note, azt elmenti LS, és átírja id-jét: Qid,LSid

/*
 § elmenti localstoragebe a quest innerhtml-t, és értéke lesz ID+1
 § közben elmenti ID+1-nek is az értékét az innerHTML-re (szükség lesz mindkettőre, mert meg kell néznem, van-e már ilyen quest, ehhez innerhtml kell, illetve tudnom kell, hányadik ID-nél tartok, és melyek hiányoznak)
*/

/* import Q
"6-féle" id-t adhatok a questnek
 1 id mutatja, mely ezen html-n belüli  questet csatoljam mellé
 2 id mutatja, mely másik html-ben lévő questet csatoljam mellé
 3 questnek adok id-t, hogy csatolható legyen html-n belül
 4 questnek adok id-t, hogy csatolható legyen másik html-be
 5 id mutatja, mely ezen html-n belüli questet importálja
 6 id mutatja, mely más html-ben  lévő questet importálja
Qtext-et elég a 4,6 esetében lementeni
import és csatolás különböznek (importnál becopyzza amint megnyitom az oldalt, csatolásnál csak ha a kérdést kidobja)
*/


var arrayQids = []

var kerdesek = document.getElementsByClassName("kerdes")

function F_hash(str){
	var hash = 0;
	if (str.length == 0) return hash;
	for (var i = 0; i < str.length; i++) {
		 char = str.charCodeAt(i);
		 hash = ((hash<<5)-hash)+char;
	}
	return hash;
}
function func_abbrSet(){ 
// azt csináljam, hogy a li textet írja át alapból: <span style="visibility:hidden"> ..text.. <span>, majd amikor ráklikkelek removeolja a spant --> megmaradnak a pontok
// func_saveQuest előtt kell legyen, de a F_impQs után
	var abbrSpan = document.getElementsByClassName("abbr")
	for ( var j = 0; j < abbrSpan.length; j++ ) {
		abbrSpan[j].style.cursor = "pointer"
		if ( !abbrSpan[j].Text ) {
			abbrSpan[j].parentElement.style.visibility = "hidden"
			abbrSpan[j].style.visibility = "visible"
			abbrSpan[j].style.backgroundColor = "Bisque";
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
func_abbrSet()

var emptyLSid = 0
function F_saveQ(Qelem){
	console.clear()
	console.log("– – – – – – – – F_saveQ – – – – – – – – –")
	var Qtext = '<details class="' + Qelem.className + '">' + Qelem.innerHTML + "</details>"
	Qhash = F_hash(Qtext)
	var LSid
	if ( localStorage.getItem(Qhash) === null ) { // newQ
		do {
			emptyLSid = emptyLSid +1
		} while ( localStorage.getItem("hkQ."+emptyLSid) )
		LSid = emptyLSid
		localStorage.setItem(Qhash, "hkQ."+LSid)
		localStorage.setItem("hkQ."+LSid, Qhash)
	}
	if ( Qelem.className.indexOf("{") > -1 ) { // expQ
		var begin = Qelem.className.indexOf("{")
		var end = Qelem.className.indexOf("}")
		var EXPid = Qelem.className.slice(begin+1,end)
		if ( localStorage.getItem("hkExpQ."+EXPid) === null ) {
/* hkExp.max nemtom mire kell */ if ( Number(EXPid) > localStorage.getItem("hkExp.max") ) { localStorage.setItem("hkExp.max",EXPid) }
			localStorage.setItem("hkExpQ."+EXPid,Qtext)
		} else { // amennyiben már foglalt --> tehát egy újat véletlenül már foglalt EXPid-re neveztem el
			if ( Qtext != localStorage.getItem("hkExpQ."+EXPid) ) { alert("foglalt már (vagy csak upgradelve lett azóta): {"+EXPid+"}") }
		}
	}
	LSid = localStorage.getItem(Qhash)
	var num = arrayQids.length
	Qelem.id = "Q."+num
	console.log(LSid + " : " + num)
	arrayQids[num] = LSid
	console.log("Qid: "+Qelem.id)
}
function F_checkQs(){
	for ( var i=0; i<kerdesek.length; i++ ) {
		var impek = kerdesek[i].getElementsByClassName("imp")
		if ( impek.length == 0 ) { F_saveQ(kerdesek[i]) }
	}
}
F_checkQs()
function F_impQs(){
	console.clear()
	console.log("– – – – – – – – F_impQs – – – – – – – – –")
	var impek = document.getElementsByClassName("imp")
	for ( var i=0; i<impek.length; i++ ) { 
		var begin = impek[i].className.indexOf("[") +1
		var Qelem = impek[i].parentElement.parentElement
		var end = impek[i].className.indexOf("]")
		// var Qid = impek[i].id
		var impArray = []
		var full = impek[i].className.slice(begin,end) // válassza őket külön
		var cont = false
		var num = ""
		var high = ""
		var MISSid = ""
		function func_impQ(EXPid){
			console.log("EXPid: "+EXPid)
			if ( !localStorage.getItem("hkExpQ."+EXPid) ) { 
				MISSid = MISSid + EXPid + ","
			} else {
				var Qtext = localStorage.getItem("hkExpQ."+EXPid)
				// ITT HIÁNYZIK, HOGY ID-T KAPJON !!!
				impek[i].innerHTML = impek[i].innerHTML + Qtext
				console.log(localStorage.getItem("hkExpQ."+EXPid))
			}
		}
		for (var x=0; x<=full.length; x++) {
			var kar = full[x] 
			if ( isNaN(kar) == false ) {
				if ( cont == false ) {
					num = num + kar
				} else {
					high = high + kar
				}
			} else {
				if (kar === "-") { 
					cont = true
				} else {
					if ( cont == true ) {
						for ( var z=0; z<=high-num; z++ ) {
							func_impQ(Number(num)+Number(z))
						}
						cont = false
					} else {
						func_impQ(num)
					}
					num = ""
					high = ""
				}
			}
		}
		if (MISSid!="") { alert("alábii EXPid-k még nincsenek LS-be reigsztrálva: "+MISSid) }
		impek[i].className = impek[i].className.replace("imp ","") // ez azért kell, mert különben többször másolná be (ugyanis nextQ-nál is hivatkozik erre a funkcióra)

		F_saveQ(Qelem)
		var unregQs = Qelem.getElementsByClassName("kerdes")
		for ( var i=0; i<unregQs.length; i++ ) { F_saveQ(unregQs[i]) }
	}
}
F_impQs()

function F_DivSkip() {
	var div = document.createElement("div")
	document.body.appendChild(div)
	div.id = "div_Skip"
	div.style.backgroundColor = "white"
	div.style.overflow = "auto"
	div.style.width = "80vh"
	div.style.height = "60vh"
	div.style.position = "fixed"
	div.style.top = "50%"
	div.style.left = "50%"
	div.style.marginTop = "-30vh"
	div.style.marginLeft = "-40vh"
	div.style.border = "10px solid black"
	div.style.display = "none"
}
F_DivSkip()
function F_DivFix() {
	var div = document.createElement("div")
	document.body.appendChild(div)
	div.id = "div_Fix"
	div.style.backgroundColor = "white"
	div.style.overflow = "auto"
	div.style.width = "80vh"
	div.style.height = "60vh"
	div.style.position = "fixed"
	div.style.top = "50%"
	div.style.left = "50%"
	div.style.marginTop = "-30vh"
	div.style.marginLeft = "-40vh"
	div.style.border = "10px solid red"
	div.style.display = "none"
}
F_DivFix()




function func_divButtonETC() {
	var button = document.createElement("input")
	button.id = "button_replaceQ"
	button.type = "button";
	document.getElementById("div_Fix").appendChild(button)
	button.style.position = "absolute"
	button.style.bottom = "10px"
	button.style.right = "10px"
	button.value = "upgrade"
	
	var select = document.createElement("SELECT")
	select.id = "select_replaceQ"
	document.getElementById("div_Fix").appendChild(select)
	select.style.position = "absolute"
	select.style.bottom = "10px"
	select.style.left = "10px"
}
func_divButtonETC()
function setQList(news,Qlist){
	for ( var x=0; x<news.length; x++ ) { 
		if ( Qlist == "" ) {
			Qlist = news[x] // kell, mert különben lesz bennük egy üres is split után (oldsba pl.)
		} else {
			Qlist = Qlist + " " + news[x]
		}
	}
	localStorage.setItem(document.title+"_Qlist", Qlist)
}
var replaceQs = []
var defaultText = document.getElementById("div_Fix").innerHTML
function func_checkQList(){
	if ( localStorage.getItem(document.title+"_Qlist") == null ) { localStorage.setItem(document.title+"_Qlist","") }
	var Qlist = localStorage.getItem(document.title+"_Qlist")
	var olds = Qlist.split(" ")
	var news = ""
	for ( var i=0; i<kerdesek.length; i++ ) {
		var Qid = kerdesek[i].id
		if ( Qlist.indexOf(Qid) == -1 ) { // új Questet (beleértve egy réginek az új verzióját) news-ba teszi
			if ( news == "" ) {  // kell, mert különben lesz benne egy üres is split után
				news = Qid
			} else {
				news = news + " " + Qid
			}
		} else { // amelyik Quest nem változott, azt kiveszi olds-ból
			olds.splice(olds.indexOf(Qid),1)
		}
	}
	if ( olds.indexOf("") != -1 ) { olds.splice(olds.indexOf(""),1) } // kiveszi az oldsba hibából belekerülő üres elementet
	
	news = news.split(" ")
	for ( var i=0; i<olds.length; i++ ) {
		if ( localStorage.getItem(olds[i]+"_jegy") ) {
			replaceQs.push(olds[i])
		} else {
			var ihtml = localStorage.getItem(olds[i])
			localStorage.removeItem(ihtml)
			localStorage.removeItem(olds[i])
		}
	}
	if ( replaceQs.length == 0 ) { 
		setQList(news,Qlist) 
	} else {
		document.getElementById("div_Fix").style.display = 'block';
		function func_replaceQ(){
			var oldID = replaceQs[0]
			document.getElementById("div_Fix").innerHTML = defaultText + localStorage.getItem(oldID) + "<hr>"
			for ( var x=0; x<news.length; x++ ) { // felajánlja melyikre lehet cserélni a newsok közül
				var text = document.getElementById("div_Fix").innerHTML // (kell hogy megőrizze a buttont + selectet)
				document.getElementById("div_Fix").innerHTML = text + localStorage.getItem(news[x])
				if ( !document.getElementById("option_ReplaceQ_"+x) ) {
					var option = document.createElement("option")
					option.id = "option_ReplaceQ_"+x
					document.getElementById("select_replaceQ").appendChild(option)
					var text = document.createTextNode("Number: "+x)
					option.appendChild(text)
				}
				document.getElementById("option_ReplaceQ_"+x).value = news[x]
				document.getElementById("button_replaceQ").onclick = function() {
					var value = document.getElementById("select_replaceQ").value
					var NEWihtml = localStorage.getItem(value)
					var OLDihtml = localStorage.getItem(oldID)
					//alert("value: " + document.getElementById("select_replaceQ").value)
					
					var index = news.indexOf(value) // news-ból törli
					news.splice(index,1) // news-ból törli
					localStorage.setItem(oldID,NEWihtml) // LS-ben az olds.id-re beállítja az news.ihtml-jét
					localStorage.removeItem(news[x]) // LS-ben a news.id-t törli
					localStorage.removeItem(OLDihtml) // LS-ben a olds.ihtml-t törli
					localStorage.setItem(NEWihtml,oldID) // LS-ben a news.ihtml-t beállítja az olds.id-re
					
					replaceQs.splice(0,1)
					if (replaceQs.length != 0) { 
						func_replaceQ()
					} else {
						document.getElementById("div_Fix").style.display = 'none';
						setQList(news,Qlist) 
					}
				}
			}
		}
		func_replaceQ()
	}
}
func_checkQList()

var imagesAll = document.images
var tooltipStatus
function func_enLargeImages(){ // képnagyítás balKlikkel középre
	var imgStatus
	document.body.onclick=function(){
		if ( imgStatus == "hide" ) {
			centerDiv.style.visibility = "hidden"
		}
		imgStatus = "hide"

		tooltipSpan.style.visibility = "hidden";
		tooltipStatus = "hide"
	};
	for ( var i = 0;   i < imagesAll.length;   i++ ) {
		imagesAll[i].onclick=function(){
			imgStatus = "show"
			centerDiv.style.visibility = "visible";
			centerImage.src = this.src
			centerDiv.style.maxHeight = "95%";
			centerDiv.style.maxWidth = "95%";
			centerDiv.style.overflow = "auto";

			centerDiv.style.position = "fixed";
			centerDiv.style.left = "50%";
			centerDiv.style.top = "50%";
			centerDiv.style.transform = "translate(-50%, -50%)";
		};
	}
	centerDiv = document.createElement("div")
	document.body.appendChild(centerDiv)
	centerImage = document.createElement("img")
	centerImage.style.maxWidth = "none";
	centerImage.style.float = "none";
	centerDiv.appendChild(centerImage)
	centerDiv.style.visibility = "hidden";
	centerDiv.style.border = "5px ridge LightGray";
}
func_enLargeImages()

function toggleAll() {
	var childs = document.body.children; 
	if ( localStorage.getItem("hk.ToggleAll") == "true" ) {
		localStorage.removeItem("hk.ToggleAll")
		for ( var i=0; i<childs.length; i++ ) { childs[i].style.display = "block" }
		document.getElementById("div_MainFrame").style.display = 'none';

		document.getElementById("div_Fix").style.display = 'none';
		document.getElementById("div_Skip").style.display = 'none';
	} else {
		localStorage.setItem("hk.ToggleAll","true")
		for ( var i=0; i<childs.length; i++ ) { childs[i].style.display = "none" }
		document.getElementById("div_MainFrame").style.display = 'block';
		tooltipSpan.style.display = 'block';

		document.getElementById("input_toggleAll").style.display = 'block';
	}
}
function toggleAll_StatusEtStart() {
	var childs = document.body.children; 
	if ( localStorage.getItem("hk.ToggleAll") == "true" ) {
		for ( var i=0; i<childs.length; i++ ) { childs[i].style.display = "none" }
		document.getElementById("div_MainFrame").style.display = 'block';
		tooltipSpan.style.display = 'block';

		document.getElementById("input_toggleAll").style.display = 'block';
	} else {
		for ( var i=0; i<childs.length; i++ ) { childs[i].style.display = "block" }
		document.getElementById("div_MainFrame").style.display = 'none';

		document.getElementById("div_Fix").style.display = 'none';
		document.getElementById("div_Skip").style.display = 'none';
	}
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
function func_repTableToggle(){
	if ( document.getElementById("repTable").style.display == 'block' ) {
		document.getElementById("repTable").style.display = 'none';
	} else {
		func_calcRepTable()
		document.getElementById("repTable").style.display = 'block';
	} 
}

var timeDiff
function func_calcTimeDiff(repCount){
	if ( repCount == 0 ) {
		timeDiff = 20
	} else if ( repCount == 1 ) {
		timeDiff = 60
	} else if ( repCount == 2 ) {
		timeDiff = 500
	} else if ( repCount == 3 ) {
		timeDiff = 1000
	} else if ( repCount == 4 ) {
		timeDiff = 2000
	} else if ( repCount == 5 ) {
		timeDiff = 5000
	}
}

function F_CreateQDiv() {
	function F_ButtonToggleAll() {
		var button = document.createElement("input")
		button.id = "input_toggleAll"
		button.type = "button"
		document.body.appendChild(button)

		button.onclick = function(){ toggleAll() }
		button.value = "0"

		button.style.position = "fixed"
		button.style.right = "5px"
		button.style.top = "5px"
	}
	F_ButtonToggleAll()

	function F_DivMainFrame() {
		var div = document.createElement("div")
		div.id = "div_MainFrame"
		div.style.display = "none"
		var parent = document.body
		parent.insertBefore(div,parent.firstChild)
	}
	F_DivMainFrame()
	var MainFrame = document.getElementById("div_MainFrame");

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
		button.class = "white"
		button.style.border = "3px solid black"
		button.style.backgroundColor = "Bisque"
		button.textContent = "TÉTELEK"
		divSettings.appendChild(button)
		button.onclick = function(){
			if ( document.getElementById("Div_Tetelek").style.display == "none" ) {
				document.getElementById("Div_Tetelek").style.display = "block"
			} else {
				document.getElementById("Div_Tetelek").style.display = "none"
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
		span.style.paddingTop = "3px"
		span.style.paddingBottom = "4px"
	}
	F_SpanDate()
	function F_SpanAtlag() {
		var span = document.createElement("span")
		span.id = "span_Jegy"
		divSettings.appendChild(span)
		span.className = "vocab"
		span.style.border = "1px solid black"

		span.style.paddingLeft = "5px"
		span.style.paddingRight = "5px"
		span.style.paddingTop = "3px"
		span.style.paddingBottom = "4px"
	}
	F_SpanAtlag()
	function F_SpanRepAll() {
		var span = document.createElement("span")
		span.id = "span_Repeat"
		divSettings.appendChild(span)
		span.className = "WHITE"
		span.style.border = "1px solid black"

		span.style.paddingLeft = "5px"
		span.style.paddingRight = "5px"
		span.style.paddingTop = "3px"
		span.style.paddingBottom = "4px"
	}
	F_SpanRepAll()
	function F_SpanQid() {
//	<div style="position:absolute; left:10%; top:2%; font-weight: bold;font-size: large;"></div>
		var span = document.createElement("span")
		span.id = "questLeveL"
		divSettings.appendChild(span)
		span.style.border = "1px solid black"
		span.style.backgroundColor = "yellow"
		span.textContent = "id"
		span.title = ""

		span.style.paddingLeft = "5px"
		span.style.paddingRight = "5px"
		span.style.paddingTop = "3px"
		span.style.paddingBottom = "4px"
	}
	F_SpanQid()

	var br = document.createElement("br")
	divSettings.appendChild(br)

	function F_ButtonNewQ() {
		var button = document.createElement("input")
		button.id = "btn_newQuest"
		button.type = "button"
		divSettings.appendChild(button)
		button.style.backgroundColor = "white"
		button.style.border = "3px solid black"
		button.onclick = function(){ func_spanClick(this) }
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
		span.style.paddingTop = "3px"
		span.style.paddingBottom = "4px"
	}
	F_SpanRepSlow()
	function F_ButtonRepFast() {
		var button = document.createElement("input")
		button.id = "btn_RepFast"
		button.type = "button"
		divSettings.appendChild(button)
		button.className = "MISS"
		button.style.border = "3px solid black"
		button.onclick = function(){ func_spanClick(this) }
		button.value = "0"
	}
	F_ButtonRepFast()
	divSettings.appendChild( document.createTextNode( '\u00A0' ) );
	divSettings.appendChild( document.createTextNode( '\u00A0' ) );
	function F_ButtonRepTable() {
		var button = document.createElement("input")
		button.id = "btn_repTable"
		button.type = "button"
		divSettings.appendChild(button)
		button.style.border = "3px solid black"
		button.style.backgroundColor = "Bisque"
		button.onclick = function(){ func_repTableToggle() }
		button.value = "tab"
	}
	F_ButtonRepTable()
	divSettings.appendChild( document.createTextNode( '\u00A0' ) );
	divSettings.appendChild( document.createTextNode( '\u00A0' ) );
	function F_SpanRepNew() {
		var span = document.createElement("span")
		span.id = "span_RepNew"
		divSettings.appendChild(span)
		span.className = "WHITE"
		span.style.border = "1px solid black"

		span.style.paddingLeft = "5px"
		span.style.paddingRight = "5px"
		span.style.paddingTop = "3px"
		span.style.paddingBottom = "4px"
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
		span.style.paddingTop = "3px"
		span.style.paddingBottom = "4px"
	}
	F_SpanRepOld()

	var br = document.createElement("br")
	divSettings.appendChild(br)

	function F_ButtonNote() {
		var button = document.createElement("input")
		button.id = "btn_Note"
		button.type = "button"
		divSettings.appendChild(button)
		button.style.border = "3px solid black"
		button.style.backgroundColor = "Bisque"
		button.onclick = function(){ toggleNote() }
		button.value = "✽"
	}
	F_ButtonNote()
	divSettings.appendChild( document.createTextNode( '\u00A0' ) );
	function F_ButtonFix() {
		var button = document.createElement("input")
		button.id = "btn_fix"
		button.type = "button"
		divSettings.appendChild(button)
		button.className = "fix"
		button.style.border = "3px solid black"
		button.onclick = function(){ func_spanClick(this) }
		button.value = "0"
	}
	F_ButtonFix()
	divSettings.appendChild( document.createTextNode( '\u00A0' ) );
	function F_ButtonSkip() {
		var button = document.createElement("input")
		button.id = "btn_skip"
		button.type = "button"
		divSettings.appendChild(button)
		button.className = "dark"
		button.style.border = "3px solid black"
		button.onclick = function(){ func_spanClick(this) }
		button.value = "0"
	}
	F_ButtonSkip()
	divSettings.appendChild( document.createTextNode( '\u00A0' ) );
	function F_ButtonGodMode() {
		var button = document.createElement("input")
		button.id = "btn_godMode"
		button.type = "button"
		divSettings.appendChild(button)
		button.className = "white"
		button.style.border = "3px solid black"
		button.onclick = function(){ func_godMode() }
		button.value = "gM"
	}
	F_ButtonGodMode()
	divSettings.appendChild( document.createTextNode( '\u00A0' ) );
	divSettings.appendChild( document.createTextNode( '\u00A0' ) );
	function F_ButtonNextQ() {
		var button = document.createElement("input")
		button.type = "button"
		divSettings.appendChild(button)
		button.onclick = function(){ F_nextQ() }
		button.value = " ► "
	}
	F_ButtonNextQ()


	function F_DivQTitle() {
		var div = document.createElement("div")
		div.id = "questTitle"
		div.style.fontWeight = "bold"
		div.style.fontSize = "large"
		MainFrame.appendChild(div)
	}
	F_DivQTitle()
	function F_DivQuest() {
		var div = document.createElement("div")
		div.id = "kerdeslocation"
		MainFrame.appendChild(div)
		div.style.overflow = "auto"
		div.style.height = "83vh"

	}
	F_DivQuest()


	function F_fileinput() {
		var input = document.createElement("input")
		input.type = "file"
		input.id = "fileinput"
		divSettings.appendChild(input)
		input.style.display = "none"
	}
	F_fileinput()
	function F_InputLoad() {
		var input = document.createElement("input")
		input.type = "button"
		input.value = "load LS"
		divSettings.appendChild(input)
		input.onclick = function(){ document.getElementById('fileinput').click() }

		input.style.position = "absolute"
		input.style.right = "5px"
		input.style.top = "40px"
	}
	F_InputLoad()
	function F_InputSave() {
		var input = document.createElement("input")
		input.type = "button"
		input.value = "Save LS"
		divSettings.appendChild(input)
		input.onclick = function(){ func_saveLS() }

		input.style.position = "absolute"
		input.style.right = "5px"
		input.style.top = "75px"
	}
	F_InputSave()

	function F_TextAreaNote() {
		var textArea = document.createElement("textarea")
		divSettings.appendChild(textArea)
		textArea.style.display = "none"
		textArea.id = "note"
		textArea.rows = "4"
		textArea.cols = "40"

		textArea.style.position = "fixed"
		textArea.style.left = "40%"
		textArea.style.top = "55%"
	}
	F_TextAreaNote()


/*

	<select id="skip"><option value=""></option><option value="1">1</option><option value="2">2</option><option value="5">5</option><option value="10">10</option><option value="20">20</option></select> 
*/


	function F_TableTetelek() {
		var table = document.createElement("TABLE")
		table.id = "Table_QsMark"
		MainFrame.appendChild(table)

		table.style.position = "absolute"
		table.style.left = "275px"
		table.style.top = "5px"

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

		var tr = document.createElement("TR")
		table.appendChild(tr)
		var th = document.createElement("TH")
		th.innerHTML = "repeat"
		tr.appendChild(th)
		var th = document.createElement("TH")
		th.innerHTML = "min"
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
			tr.appendChild(th)

			var td = document.createElement("TD")
			td.id = i+"min"
			if ( i == 0 ) {
				td.innerHTML = "20"
			} else if ( i == 1 ) {
				td.innerHTML = "60"
			} else if ( i == 2 ) {
				td.innerHTML = "500"
			} else if ( i == 3 ) {
				td.innerHTML = "1000"
			} else if ( i == 4 ) {
				td.innerHTML = "2000"
			} else if ( i == 5 ) {
				td.innerHTML = "5000"
			}
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





function download(filename, text) { // download funkció (netről copyztam) --> Save LS-nél ezt hívja le (azért kellett, mert androidon máshogy nemtudom lementeni)
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}
// SAVE LS
function setItem(key, value){
	if (typeof value === 'object') {
		value = JSON.stringify(value);
	}
	localStorage.setItem(key, value);
}
function getItem(key){
	if (key){
		try{
			return JSON.parse(localStorage.getItem(key));
		}
		catch(e){
			return localStorage.getItem(key);
		}
	}
}
function func_saveLS() {
	var objects = {};
	var text = ""
	for (var i = 0, len = localStorage.length; i < len; i++) {
		objects[localStorage.key(i)] = getItem(localStorage.key(i));
		text = text + localStorage.key(i) + " = " + getItem(localStorage.key(i)) + " NEXTONE "
	}
	download('localStorage.txt', text);
	//console.log(objects);
	//window.location = "data:text/plain,"+text
}
JSON.stringify(localStorage)
// LOAD LS
function func_loadLS(content) {
	do {
		var phaseText = content.slice(0,content.indexOf(" NEXTONE "));
		content = content.slice(content.indexOf(" NEXTONE ") +9)
		var variable = phaseText.slice(0,phaseText.indexOf(" = "));
		var price = phaseText.slice(phaseText.indexOf(" = ") +3);
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





var markCount = 0
function func_markCount(jegy){ // következő kérdés nehézségét beállítja, az előző sikere alapján
	/*jegy = parseInt(jegy,10)
	if ( Math.random() > 0.5 ) {
		if ( jegy == 1 ) {
			markCount = 3
		} else if ( jegy == 3 || jegy == 4 ) {
			markCount = 1
		}
	} else {
		markCount = 0
	}*/
}

var tetelek = []
function func_tetelChoose() { // createli a választható tételek listáját
	function F_MainDiv() {
		var div = document.createElement("div")
		div.id = "Div_Tetelek"

		var questDiv = document.getElementById("div_MainFrame");
		questDiv.appendChild(div)

		div.style.backgroundColor = "white"
		div.style.overflow = "auto"
		div.style.width = "80vh"
		div.style.height = "80vh"
		div.style.position = "fixed"
		div.style.top = "50%"
		div.style.left = "50%"
		div.style.marginTop = "-40vh"
		div.style.marginLeft = "-40vh"
		div.style.border = "10px solid black"
		div.style.display = "none"
	}
	F_MainDiv()

	function createTemakor(szoveg) {
		var details = document.createElement("DETAILS")
		var summary = document.createElement("SUMMARY")
		details.id = szoveg+"_details"
		details.open = true
		details.appendChild(summary)
		document.getElementById("Div_Tetelek").appendChild(details)
		summary.innerHTML = szoveg.bold()
		summary.style.backgroundColor = "gainsboro";
		summary.style.color = "black";
		summary.style.fontSize = "120%"
	}

	var Table = document.getElementsByClassName("mainTitle")
	for ( var i = 0;   i < Table.length;   i++ ) { // temakorok
		szoveg = Table[i].innerHTML
		Table[i].parentElement.className = "temakor"
		Table[i].parentElement.id = szoveg
		createTemakor(szoveg)
	}
	createTemakor("uncategorized")

	var Table = document.getElementsByClassName("phase")
	for ( var i = 0;   i < Table.length;   i++ ) { // tetelek
		Table[i].parentElement.className = "tetel"
		var tetelID = i + "," + Table[i].innerHTML
		Table[i].parentElement.id = tetelID
		tetelek[tetelID] = []

		var szoveg = Table[i].innerHTML

		var button = document.createElement("input");
		button.type = "button";
		button.style.height = "23px";
		button.style.width = "30px";
		button.id = tetelID+"_button";

		var label = document.createElement("label")
		label.id = tetelID+"_button_label";
		var text = szoveg+"<br>"
		label.innerHTML = text.bold();

		button.onclick = function() {
			func_clickTemaButton(this);
			func_calcOldNew();
			func_calcDate()
			func_calcJegy()
		}

		if ( Table[i].parentElement.parentElement.className == "temakor" ) {
			var id = Table[i].parentElement.parentElement.id + "_details"
			document.getElementById(id).appendChild(button)
			document.getElementById(id).appendChild(label)
		} else {
			var id = "uncategorized_details"
			document.getElementById(id).appendChild(button)
			document.getElementById(id).appendChild(label)
		}

		if ( localStorage.getItem(button.id) == "true" ) {
			label.style.color = "limegreen";
		} else {
			label.style.color = "black";
		}
	}
}
func_tetelChoose()

function func_altetelID(){ // ezt is tegyem majd be 'func_tetelChooseba'
	var Table = document.getElementsByClassName("title")
	for ( var i = 0;   i < Table.length;   i++ ) {
		Table[i].parentElement.className = "altetel"
		var altetelID = i + "," + Table[i].innerHTML
		Table[i].parentElement.id = altetelID
		var tetelID = Table[i].parentElement.parentElement.id
		tetelek[tetelID][altetelID] = []
	}
}
func_altetelID()

function func_sortQuests(){ // felmegy tételig, ha volt közben altétel is, akkor abba teszi
	console.clear()
	console.log("– – – – – – – func_sortQuests – – – – – – – –")
	var countQ = 0
	for ( countQ=0;  countQ<kerdesek.length;  countQ++ ) {
		var Qid = kerdesek[countQ].id
		var parent = kerdesek[countQ]

		do {
			parent = parent.parentElement
		} while ( parent.className != "altetel" && parent.className != "tetel" );

		if ( parent.className  == "altetel" ) {
			tetelek[parent.parentElement.id][parent.id][Qid] = true
			console.log("altetel: " +Qid)
		} else if ( parent.className  == "tetel" ) {
			tetelek[parent.id][Qid] = true
			console.log("tetel: " +Qid)
		}
	}
	document.getElementById("input_toggleAll").value = countQ
}
func_sortQuests()

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

	function func_showTooltip(element){
		defText = element.title
		tooltipSpan.style.visibility = "visible";
		tooltipSpan.innerHTML = element.title
			
		var posX = element.offsetLeft
		var posY = element.offsetTop 
		var par = element.offsetParent
		//alert(par)

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
		velement.onclick = function(ev){
			tooltipSpan.style.visibility = "visible";
			tooltipSpan.innerHTML = table_defText[this]
			tooltipStatus = "show"
			ev.stopPropagation();
	//alert(tooltipSpan.innerHTML)
				
			var posX = this.offsetLeft
			var posY = this.offsetTop 
			var par = this.offsetParent

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
		};
		velement.onmouseover = function(){
			tooltipSpan.style.visibility = "visible";
			tooltipSpan.innerHTML = this.title
				
			var posX = this.offsetLeft
			var posY = this.offsetTop
			var par = this.offsetParent

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

			table_defText[this] = this.title;
			this.title = '';
		};
		velement.onmouseout = function(){
			this.title = table_defText[this];
			if ( tooltipStatus != "show" ) {
				tooltipSpan.style.visibility = "hidden";
			}
		};
	}

	function func_TitleChange(){
		//var abbrok = document.getElementsByTagName("ABBR");
		var abbrok = document.querySelectorAll("*[title]");
		for ( var i = 0; i < abbrok.length; i++ ) {
			func_titleVerChange(abbrok[i])
		}
	}
	func_TitleChange()
}
func_tooltipFuncs()


var prior,hossz,jegy
function func_calcPriorHosszJegy(elem){
	var num = elem.className.search("/");
	hossz = elem.className.substring(num+1,num+2);
	prior = elem.className.substring(num-1,num);
	if ( prior == 1 ) {
		prior = 0.33
	} else if ( prior == 2 ) {
		prior = 0.66 
	} else if ( prior == 3 ) {
		prior = 1
	} else if ( prior == 4 ) {
		prior = 1.5
	} else if ( prior == 5 ) {
		prior = 3
	} else if ( prior == 'J' || prior == 'j' ) {
		prior = 0
	}
	var kerdes = localStorage.getItem(elem.innerHTML)
	jegy = localStorage.getItem(kerdes+'_jegy')
	if ( jegy == 1 ) {
		jegy = 0
	} else if ( jegy == 2 ) {
		jegy = 7
	} else if ( jegy == 3 ) {
		jegy = 8
	} else if ( jegy == 4 ) {
		jegy = 10
	}
}

function func_temakorStatus(){ // Tétel hány %-on áll? --> beállítja a buttonColort ez alapján
	for ( var tetel in tetelek ) {
		var maxJegy = 0
		var trueJegy = 0
		var childs = document.getElementById(tetel).getElementsByTagName("*")
		for ( var i = 0;   i < childs.length;   i++ ) {
			if ( childs[i].classList.contains("kerdes") == true ) {
				var kerdes = localStorage.getItem(childs[i].innerHTML)
				func_calcPriorHosszJegy(childs[i])

				var date = new Date();
				var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(kerdes+'_idopont')

				if ( localStorage.getItem(kerdes+'_repeat') == null) {
					localStorage.setItem(kerdes+'_repeat', 0);
				}
				var repCount = Number(localStorage.getItem(kerdes+'_repeat'))
				func_calcTimeDiff(repCount)

				trueJegy = trueJegy + Math.pow(0.8, idopont / timeDiff) * prior * hossz * jegy
				maxJegy = maxJegy + prior * hossz * 10
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
		var button = document.getElementById(tetel+"_button")
		button.style.backgroundColor = "rgb("+red+", "+green+", 0)";
		button.value = Math.round(100 * trueJegy/maxJegy)
	}
}
func_temakorStatus()

var obj_fixNote = [] // object (nem table és nem array!)
var obj_skip = [] // object (nem table és nem array!)

function func_tableSkipFix(){
	for ( var i=0;  i<kerdesek.length;  i++ ) {
		var Qid = kerdesek[i].id
		var LSid = Qid.slice(Qid.indexOf(":Q,LS:")+6)
		if ( localStorage.getItem(LSid+'_note') ) {
			obj_fixNote[LSid] = localStorage.getItem(LSid+'_note')
		} else {
			if ( obj_fixNote[LSid] ) { delete obj_fixNote[LSid] } // remove a Table-ból
		}
		if ( localStorage.getItem(LSid+"_skip") ) {
			var date = new Date();
			date = Math.floor(date.getTime()/60000)
			var difference = date - localStorage.getItem(LSid+"_idopont")
			difference = difference /60 // átállítja órára
			if ( difference < localStorage.getItem(LSid+"_skip") ) {
				obj_skip[LSid] = localStorage.getItem(LSid+"_skip")
			} else {
				if ( obj_skip[LSid] ) { delete obj_skip[LSid] } // remove a Table-ból
				localStorage.removeItem(LSid+'_skip')
			}
		} else {
			if ( obj_skip[LSid] ) { delete obj_skip[LSid] } // remove a Table-ból
		}
	}
}
func_tableSkipFix()
function func_valFix(){
	var x = 0
	for ( var id in obj_fixNote ) {
		if ( obj_fixNote[id] ) {
			x = x+1
		}
	}
	document.getElementById("btn_fix").value = x;
}
func_valFix()
function func_valSkip(){
	var x = 0
	for ( var id in obj_skip ) {
		if ( obj_skip[id] ) {
			x = x+1
		}
	}
	document.getElementById("btn_skip").value = x;
}
func_valSkip()

function func_DeleteSkipFix(kerdes){
	if (confirm('biztos törlöd? '+kerdes)) {
		skipfix = kerdes.slice(kerdes.indexOf("_"))
		skipfix = skipfix.slice(1,skipfix.length-5)
		kerdes = kerdes.slice(0,kerdes.indexOf("_"));  // remove "_skipClear" vagy "_fixClear" a nevéből és csak az id marad
		if ( skipfix == "fix" ) {
			localStorage.removeItem(kerdes+'_note')
		} else if ( skipfix == "skip" ) {
			localStorage.removeItem(kerdes+'_skip')
		}
		func_tableSkipFix()
		func_SetTextOfSkipFixDiv("btn_"+skipfix)
	}
}
var lastQSkip
function func_SetTextOfSkipFixDiv(SkipFix){
	if ( SkipFix == "btn_fix" ) {
		document.getElementById("div_Fix").innerHTML = ""
		for ( var kerdes in obj_fixNote ) {
			if ( obj_fixNote[kerdes] ) {
				var text = document.getElementById("div_Fix").innerHTML
				document.getElementById("div_Fix").innerHTML = text + "<br> &nbsp;•&nbsp;&nbsp;" + kerdes + " " + obj_fixNote[kerdes] + " <input id='testID' class='fix' style='border: 3px solid black;' type='button' value='✖' onclick='func_DeleteSkipFix(this.id)'>" + "<br>"
				document.getElementById("testID").id = kerdes + "_fixClear"
			}
		}
	}
	if ( SkipFix == "btn_skip" ) {
		if ( priorQid != "nincs" ) {
			if ( lastQSkip != priorQid ) {
				document.getElementById("div_Skip").innerHTML = ""
				var QlocElem = document.getElementById("kerdeslocation")
				var arrayQ = QlocElem.getElementsByClassName("kerdes")
				for ( var i=0; i<arrayQ.length; i++ ) {
					var LSid = arrayQ[i].id
					var text = document.getElementById("div_Skip").innerHTML
					var x = i+1
					document.getElementById("div_Skip").innerHTML = text + '&nbsp;<span class="white">&nbsp;' + x + '&nbsp;</span>&nbsp;<input type="number" style="width:55px;">&nbsp;<select><option value="min">min</option><option value="hour">hour</option><option value="day">day</option></select> <br>'
				}
				document.getElementById("div_Skip").innerHTML = document.getElementById("div_Skip").innerHTML + '<hr>'
				lastQSkip = priorQid
			}
		}
		var text = document.getElementById("div_Skip").innerHTML
		document.getElementById("div_Skip").innerHTML = text.slice(0,text.indexOf("<hr>")+4)
		for ( var kerdes in obj_skip ) {
			if ( obj_skip[kerdes] ) {
				var text = document.getElementById("div_Skip").innerHTML
				document.getElementById("div_Skip").innerHTML = text + "&nbsp;•&nbsp;&nbsp;" + kerdes + " " + obj_skip[kerdes] + " <button id='testID' class='fix' style='border: 3px solid black;' type='button' onclick='func_DeleteSkipFix(this.id)'>✖</button>" + "<br>"
				document.getElementById("testID").id = kerdes + "_skipClear"
			}
		}
	}
}
function func_spanClick(button){
	if ( button.id == 'btn_skip' || button.id == 'btn_fix' ) {
		func_SetTextOfSkipFixDiv(button.id)
		if ( button.id == 'btn_skip' ) {
			document.getElementById("div_Fix").style.display = 'none';
			document.getElementById("btn_fix").style.borderColor = "black"
			if ( document.getElementById("div_Skip").style.display == 'block' ) {
				document.getElementById("div_Skip").style.display = 'none';
			} else {
				document.getElementById("div_Skip").style.display = 'block';
			}
		}
		if ( button.id == 'btn_fix' ) {
			document.getElementById("div_Skip").style.display = 'none';
			document.getElementById("btn_skip").style.borderColor = "black"
			if ( document.getElementById("div_Fix").style.display == 'block' ) {
				document.getElementById("div_Fix").style.display = 'none';
			} else {
				document.getElementById("div_Fix").style.display = 'block';
			}
		}
	}
	if ( button.style.borderColor == "limegreen" ) {
		button.style.borderColor = "black"
		if ( button.id == 'btn_newQuest' ) { localStorage.removeItem("hk.newQ") }
	} else {
		button.style.borderColor = "limegreen"
		if ( button.id == 'btn_newQuest' ) { localStorage.setItem("hk.newQ",true) }
	}
}


function func_clickTemaButton(button){
	if ( localStorage.getItem(button.id) == "true" ) {
		localStorage.setItem(button.id,false)
		document.getElementById(button.id+"_label").style.color = "black";
	} else {
		localStorage.setItem(button.id,true)
		document.getElementById(button.id+"_label").style.color= "limegreen";
	}
	func_calcOldNew();
	func_calcJegy()
	func_calcDate()
	func_calcRepeat()
}

function func_putZeroQBack() { // 0-repeaten állót új kérdésbe visszateszi, ha több mint 1 napja nem ismételtem
	for ( var tetel in tetelek ) {
		if ( localStorage.getItem(tetel+"_button") == "true" ) {
			var childs = document.getElementById(tetel).getElementsByTagName("*")
			for ( var i = 0;   i < childs.length;   i++ ) {
				if ( childs[i].classList.contains("kerdes") == true ) {
					// itt elvileg még kell egy feltétel, hogy beleszámolja (talán a skippel kapcsolatos lehet, de csak tipp)
					// if ( kerdesID[fotema][temaKerdes][kerdes] == true ) { // ez volt a régiben
					var kerdes = localStorage.getItem(childs[i].innerHTML)
					var repeat = localStorage.getItem(kerdes+'_repeat')
					var date = new Date();
					var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(kerdes+'_idopont')
					if ( repeat == 0 && idopont > 1440 ) {
						localStorage.removeItem(kerdes+'_repeat')
						localStorage.removeItem(kerdes+'_jegy')
					}
				}
			}
		}
	}
}
function func_calcJegy() { // átlagJegyet kiszámolja
	var maxJegy = 0
	var trueJegy = 0
	for ( var tetel in tetelek ) {
		if ( localStorage.getItem(tetel+"_button") == "true" ) {
			var childs = document.getElementById(tetel).getElementsByTagName("*")
			for ( var i = 0;   i < childs.length;   i++ ) {
				if ( childs[i].classList.contains("kerdes") == true ) {
					var kerdes = localStorage.getItem(childs[i].innerHTML)
					func_calcPriorHosszJegy(childs[i])
					maxJegy = maxJegy + prior * hossz * 10
					trueJegy = trueJegy + prior * hossz * jegy
				}
			}
		}
	}
	document.getElementById("span_Jegy").innerHTML = Math.floor(100*trueJegy/maxJegy) + "%" 
}
function func_calcDate() { // átlagIdőt kiszámolja
	var allDate = 0
	var countDate = 0
	for ( var tetel in tetelek ) {
		if ( localStorage.getItem(tetel+"_button") == "true" ) {
			var childs = document.getElementById(tetel).getElementsByTagName("*")
			for ( var i = 0;   i < childs.length;   i++ ) {
				if ( childs[i].classList.contains("kerdes") == true ) {
					// itt elvileg még kell egy feltétel, hogy beleszámolja (talán a skippel kapcsolatos lehet, de csak tipp)
					// if ( kerdesID[fotema][temaKerdes][kerdes] == true ) { // ez volt a régiben
					var kerdes = localStorage.getItem(childs[i].innerHTML)
					if ( kerdes+'_jegy' in localStorage ) {
						var date = new Date();
						var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(kerdes+'_idopont')
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
}
function func_calcRepeat() { // átlagIsmétlések számát kiszámolja
	var questCount = 0
	var allRepVal = 0
	for ( var tetel in tetelek ) {
		if ( localStorage.getItem(tetel+"_button") == "true" ) {
			var childs = document.getElementById(tetel).getElementsByTagName("*")
			for ( var i = 0;   i < childs.length;   i++ ) {
				if ( childs[i].classList.contains("kerdes") == true ) {
					// itt elvileg még kell egy feltétel, hogy beleszámolja (talán a skippel kapcsolatos lehet, de csak tipp)
					// if ( kerdesID[fotema][temaKerdes][kerdes] == true ) { // ez volt a régiben
					var kerdes = localStorage.getItem(childs[i].innerHTML)
					var num = childs[i].className.search("/");
					var prior = childs[i].className.substring(num-1,num);
					var hossz = childs[i].className.substring(num+1,num+2);

					questCount = questCount + prior*hossz
					allRepVal = allRepVal + prior*hossz *Number(localStorage.getItem(kerdes+'_repeat'))
				}
			}
		}
	}
	var atlag = allRepVal / questCount
	atlag = +atlag.toFixed(1);
	document.getElementById("span_Repeat").innerHTML = atlag
}
function func_calcRepTable() { // adott repeatesek hogyan állnak kiszámolja
	for ( var i = 0;   i < 6;   i++ ) { // resetelje a Tablekat 0-ra
		document.getElementById(i+"left").innerHTML = 0
		document.getElementById(i+"still").innerHTML = 0
		document.getElementById(i+"average").innerHTML = 0
	}
	for ( var tetel in tetelek ) {
		if ( localStorage.getItem(tetel+"_button") == "true" ) {
			var childs = document.getElementById(tetel).getElementsByTagName("*")
			for ( var i = 0;   i < childs.length;   i++ ) {
				if ( childs[i].classList.contains("kerdes") == true ) {
					// itt elvileg még kell egy feltétel, hogy beleszámolja (talán a skippel kapcsolatos lehet, de csak tipp)
					// if ( kerdesID[fotema][temaKerdes][kerdes] == true ) { // ez volt a régiben
					var kerdes = localStorage.getItem(childs[i].innerHTML)
					if ( kerdes+'_repeat' in localStorage && localStorage.getItem(kerdes+'_repeat') != "" ) {
						if ( localStorage.getItem(kerdes+'_skip') === null ) {
							var repCount = localStorage.getItem(kerdes+'_repeat')
							var min = document.getElementById(repCount+"min").innerHTML
							var date = new Date();
							var idopont = localStorage.getItem(kerdes+'_idopont')
							idopont = Math.floor(date.getTime()/60000) - idopont

							if ( idopont > min ) { // Tableba hozzáad 1et left-hez
								/*if ( repCount == 0 ) {
									alert(kerdes + " " + localStorage.getItem(kerdes+'_skip') + " " + idopont)
									alert(document.getElementById(repCount+"left").innerHTML)
								}*/
								document.getElementById(repCount+"left").innerHTML = parseInt(document.getElementById(repCount+"left").innerHTML) +1
							} else { // Tableba hozzáad 1et still-hez
								document.getElementById(repCount+"still").innerHTML = parseInt(document.getElementById(repCount+"still").innerHTML) +1
							}
							document.getElementById(repCount+"average").innerHTML = parseInt(document.getElementById(repCount+"average").innerHTML) +idopont
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
	}
}
function func_calcOldNew(){
	console.clear()
	console.log("– – – – – – – func_calcOldNew – – – – – – – –")
	var kerdesNew = 0
	var repNew = 0
	var repOld = 0
	var repFast = 0
	var repSlow = 0
	function calculate(Qid){
		var LSid = Qid.slice(2)
		LSid = arrayQids[LSid]
		var repCount = Number(localStorage.getItem(LSid+'_repeat'))
		var date = new Date();
		var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(LSid+'_idopont')
		func_calcTimeDiff(repCount)

		if ( localStorage.getItem(LSid+"_skip") == null ) {
			if ( localStorage.getItem(LSid+"_jegy") >= 1 ) {
				if ( timeDiff >= idopont ) {
					repFast = repFast +1
				} else {
					repSlow = repSlow +1
				}
			} else if ( localStorage.getItem(LSid+"_jegy") == null || localStorage.getItem(LSid+"_jegy") == "" ) {
				kerdesNew = kerdesNew +1
			}
			
			if ( localStorage.getItem(LSid+"_jegy") == 1 ) {
				if ( idopont < 20 ) {
					repOld = repOld +1
				} else {
					repNew = repNew +1
				}
			}
		}
	}
	for ( var tetel in tetelek ) { // végignézi az összes kérdést
		if ( localStorage.getItem(tetel+"_button") == "true" ) {
			for ( var qat in tetelek[tetel] ) {
				var LSid
				if ( tetelek[tetel][qat] == true ) {
					calculate(qat)
				} else {
					for ( var q in tetelek[tetel][qat] ) {
						calculate(q)
					}
				}
			}
		}
	}
	document.getElementById("btn_newQuest").value = kerdesNew
	document.getElementById("span_RepNew").innerHTML = repNew;
	document.getElementById("span_RepOld").innerHTML = repOld;
	document.getElementById("btn_RepFast").value = repFast;
	document.getElementById("span_RepSlow").innerHTML = repSlow;
}
function func_multiQCheck(){ // kiírja a quest summary-jébe, mely questeket idézi be mellé
	for ( var i = 0;   i < kerdesek.length;   i++ ) {
		var kerdes = localStorage.getItem(kerdesek[i].innerHTML)
		var string_Class = kerdesek[i].className
		string_Class = string_Class.substring(0,string_Class.search("/")-1);
		var nums = string_Class.match(/\d+/g)
		if ( string_Class.search("%") != -1 ) {
			string_Class = string_Class.substring(0,string_Class.search("%")-2);
		}
		if ( nums != null ) {
			var childs = kerdesek[i].children;
			for (i = 0; i < childs.length; i++) {
				if ( "SUMMARY" == childs[i].tagName ) {
					childs[i].innerHTML = childs[i].innerHTML + " <font style='font-size:12px; font-weight:bold' color='black'>" + nums + "</font>"
				}
			}
		}
	}
}
//func_multiQCheck() // (most valamiért hibás is, mert lefagy ha elindítom, szóval skip egyenlőre)

function func_godMode(){
	if ( document.getElementById("btn_godMode").style.backgroundColor == "limegreen" ) {
		document.getElementById("btn_godMode").style.backgroundColor = "red"
		localStorage.setItem('godMode',"red")
	} else if ( document.getElementById("btn_godMode").style.backgroundColor == "red" ) {
		document.getElementById("btn_godMode").style.backgroundColor = "white"
		localStorage.setItem('godMode',"white")
	} else {
		document.getElementById("btn_godMode").style.backgroundColor = "limegreen"
		localStorage.setItem('godMode',"limegreen")
	}
}
document.getElementById("btn_godMode").style.backgroundColor = localStorage.getItem('godMode')

function func_removeRepeat(){ // ha már elkészült a script, és removeltam mind1iket törölhető ez a funkció!
	for ( var i = 0;   i < kerdesek.length;   i++ ) {
		var kerdes = localStorage.getItem(kerdesek[i].innerHTML)
		if ( kerdes+'_repeat' in localStorage ) {
			//localStorage.removeItem(kerdes+'_fix')
			//localStorage.removeItem(kerdes+'_idopont')
			/*var date = new Date();
			if ( Math.floor(date.getTime()/60000) - localStorage.getItem(kerdes+'_idopont') > 10000 ) {
				localStorage.removeItem(kerdes+'_idopont')
				localStorage.removeItem(kerdes+'_changes')
				localStorage.removeItem(kerdes+'_repeat')
				localStorage.removeItem(kerdes+'_jegy')
			}*/
			if ( 5 < localStorage.getItem(kerdes+'_repeat') ) {
				localStorage.setItem(kerdes+'_repeat', 5)
			}
		}
	}
}
func_removeRepeat()

function func_clearOldHistory() {
	for ( var i = 0;   i < kerdesek.length;   i++ ) {
		var kerdes = localStorage.getItem(kerdesek[i].innerHTML)
		var date = new Date();
		var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(kerdes+'_idopont')
		if ( localStorage.getItem(kerdes+"_skip") == "skip" ) {
			if ( idopont < 90 ) {
			} else { //azért így oldottam meg, mertha időpont == null vagy mi akkor is működjön
				localStorage.removeItem(kerdes+'_skip');
				localStorage.removeItem(kerdes+'_jegy');
			}
		}
	}
}
func_clearOldHistory()

func_putZeroQBack();
func_calcOldNew();
func_calcJegy()
func_calcDate()
func_calcRepeat()

if ( localStorage.getItem("hk.newQ") == "true" ) {
	document.getElementById("btn_newQuest").style.borderColor = "limegreen"
} else {
	document.getElementById("btn_newQuest").style.borderColor = "black"
}

document.getElementById("input_toggleAll").title = localStorage.getItem("hkExp.max")

function F_prevQ(){
	console.clear()
	console.log("– – – – – – – – F_prevQ – – – – – – – – –")
	var QlocElem = document.getElementById("kerdeslocation")
	var priorLSid = priorQid.slice(2)
	priorLSid = arrayQids[priorLSid]
	var arrayQ = QlocElem.getElementsByClassName("kerdes")
	function F_Jegyek() {
		localStorage.setItem(priorLSid+'_note', document.getElementById("note").value);
		document.getElementById("note").value = ""
		for ( var i=0; i<activeQs.length; i++ ) {
			var LSid = activeQs[i]
			var jegy = document.getElementById("hkSelect."+i).value
			console.log(i+" : "+LSid+" : "+jegy)
			document.getElementById("hkSelect."+i).value = "empty"
			if ( jegy != "empty" ) { 
				var changes
				var repCount = Number(localStorage.getItem(LSid+'_repeat'))
				if ( repCount == jegy || jegy > repCount ) {
					changes = 1
				} else if ( jegy-repCount == -1  ) {
					changes = 1.5
				} else if ( jegy-repCount < -1  ) {
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
				console.log(jegy+" :időpontot ment el, ezen LSidre: "+LSid)
			}
		}
	}
	F_Jegyek()
	document.getElementById("questTitle").innerHTML = "";
	document.getElementById("note").style.display = 'none';
	alert("STOP")

	function F_Skip() {
		var div = document.getElementById("div_Skip")
		var arrayInp = div.getElementsByTagName("input")
		for ( var i=0; i<arrayInp.length; i++ ) {
			if ( div.getElementsByTagName("input")[i].value != "" ) {
				var skip = div.getElementsByTagName("input")[i].value
				if  ( div.getElementsByTagName("select")[i].value == "min" ) { // átállítja hour-ra
					skip = skip/60
				} else if  ( div.getElementsByTagName("select")[i].value == "day" ) {
					skip = skip*24
				}
				var LSid = activeQs[i]
				localStorage.setItem(LSid+'_skip', skip)
			}
		}
	}
	F_Skip()

	func_tableSkipFix()
	func_valFix()
	func_valSkip()

	func_temakorStatus()
}

var priorQid = "nincs"
var fullTema, checkNum, cloneKerdes
var lastTime = 0
var activeQs = []
function F_nextQ(){
	console.clear()
	console.log("– – – – – – – – F_nextQ – – – – – – – – –")
	var QlocElem = document.getElementById("kerdeslocation")
	var date = new Date();
	var newTime = Math.floor(date.getTime()/1000)
	var diffTime = newTime - lastTime
	var averageCV = 0
	var countCV = 0
	if ( diffTime < 3 ) { // 2fast 2furious
		return;
	} else {
		lastTime = newTime
	}

	// előző kérdés
	if ( priorQid != "nincs" ) { F_prevQ() }
	activeQs = [] // ezzel resetelem (szükséges mindig!)
	QlocElem.innerHTML = ""

	// kovetkező kérdés
	for ( var x=0; x<30; x++ ) { // custom számot írtam, ennyi úgysincs
		if ( document.getElementById("td.0."+x) ) { 
			document.getElementById("td.0."+x).hidden = true 
			document.getElementById("td.1."+x).hidden = true 
			document.getElementById("td.2."+x).hidden = true 
		}
	}
	priorQid = "nincs";
	var priorQ_alt = "nincs"
	var priorValue = -1
	var priorValue_alt = -1
	var priorType = 1
	var checkValue = 0

	function func_calcQValue(Qid) { // kérdés value-ját kiszámolja, és ha nagyobb, akkor kiválasztja
		var LSid = Qid.slice(2)
		LSid = arrayQids[LSid]
		var shouldBreak = false // ehelyett meg kéne próbálni a "return"-t !!!
		if ( localStorage.getItem(LSid+"_skip") ) { shouldBreak = true }
		if ( localStorage.getItem(LSid+"_jegy") === null && shouldBreak == false ) {
			if ( document.getElementById("btn_newQuest").style.borderColor == "limegreen" && priorType < 2 ) {
				priorType = 2
				priorQid = Qid
			}
		}
		if ( priorType == 1 && localStorage.getItem(LSid+"_jegy") > 0 ) { // régi kérdés
			var Qelem = document.getElementById(Qid)
			var date = new Date();
			var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(LSid+'_idopont')
			var repCount = Number(localStorage.getItem(LSid+'_repeat'))

			func_calcTimeDiff(repCount)

			if ( document.getElementById("btn_RepFast").style.borderColor != "limegreen" ) {
				if ( timeDiff > idopont ) { shouldBreak = true }
			}

			if ( shouldBreak == false ) {
				var num = Qelem.className.search("/");
				var prior = Qelem.className.substring(num-1,num);
				if ( prior == 1 ) {
					prior = 0.33
				} else if ( prior == 2 ) {
					prior = 0.66 
				} else if ( prior == 4 ) {
					prior = 1.5
				} else if ( prior == 5 ) {
					prior = 3
				} else {
					prior = 1
				}
				if ( prior == "J" || prior == "j" ) { prior = 1 }

				//checkValue = vLength * rank * idopont / timeDiff / jegy
				//checkValue = rank / Math.pow(0.8, idopont / timeDiff) / jegy
				//checkValue = changes * prior * idopont / timeDiff
				checkValue = prior * idopont / timeDiff
				averageCV = averageCV + checkValue
				countCV = countCV + 1
				if ( localStorage.getItem("godMode") == "limegreen" ) {
					if ( repCount > 1  ) { checkValue = 0 }
				}
				if ( localStorage.getItem("godMode") == "red" ) {
					if ( repCount < 2  ) { checkValue = 0 }
				}

				if ( checkValue > priorValue_alt ) {
					priorValue_alt = checkValue;
					priorQ_alt = Qid;
				}
				if ( localStorage.getItem(LSid+"_jegy") == markCount || markCount == 0 ) { 
					if ( checkValue > priorValue ) {
						priorValue = checkValue;
						priorQid = Qid
					}
				}
			}
		}
	}

	averageCV = 0
	countCV = 0
	for ( var tetel in tetelek ) { // végignézi az összes kérdést
		if ( localStorage.getItem(tetel+"_button") == "true" ) {
			for ( var qat in tetelek[tetel] ) {
				if ( tetelek[tetel][qat] == true ) {
					func_calcQValue(qat)
				} else { // ha az altétel nincs disabledelve, akkor...
					for ( var q in tetelek[tetel][qat] ) {
						func_calcQValue(q)
					}
				}
			}
		}
	}
	averageCV = averageCV/countCV

	if ( priorQid == "nincs" ) {
		if ( priorQ_alt != "nincs" ) {
			priorQid = priorQ_alt
		} else {
			alert("elfogytak a kérdések");
		}
	}

	if ( priorQid != "nincs" ) {
		var Qelem = document.getElementById(priorQid)
		var parent = document.getElementById(priorQid)
		do { // megkeresi a 'családfában' legfelül lévő kérdést!
			Qelem = parent
			parent = parent.parentElement
		} while ( parent.className != "altetel" && parent.className != "tetel" );

		function func_setTitle(){
			var titleText = ""
			var parent = Qelem.parentElement
			var altetelcim = ""
			var hiddenText = ""
			if ( parent.className == "altetel" ) { // altetel Címet adja hozzá
				altetelcim = parent.id 
				altetelcim = altetelcim.slice(altetelcim.indexOf(",")+1)
				if ( Qelem.className.indexOf("hat") == -1 ) { titleText =  " &#10140; " + altetelcim } // hat = Hide AlTétel
				parent = parent.parentElement
			}
			var tetelcim = parent.id
			tetelcim = tetelcim.slice(tetelcim.indexOf(",")+1)
			if ( Qelem.className.indexOf("ht") == -1 ) { 
				titleText = tetelcim + titleText 
			} else {
				hiddenText = tetelcim+" &#10140; "+altetelcim
				QlocElem.innerHTML = '<div><font class="abbr"><strong><span class="Important">►</span></font>'+hiddenText+'</strong></div>'
			}
			

			document.getElementById("questTitle").innerHTML = titleText;
			document.getElementById("questLeveL").title = priorQid
		}
		func_setTitle()
		
		function F_copyQs(Qelem){
			function func_addQ(Qtext){
				console.log(Qtext)
				console.log("– – – – – – – – – – – – – – – – –")
				QlocElem.innerHTML = QlocElem.innerHTML + Qtext
			}

			var Qtext = '<details class="' + Qelem.className + '">' + Qelem.innerHTML + "</details>"
			var find = ' id="(.*?)"'
			Qtext = Qtext.replace(new RegExp(find, 'g'), "");
			func_addQ(Qtext)

			if ( kerdesek[priorQid].className.indexOf("[") != -1 ) {
				var begin = kerdesek[priorQid].className.indexOf("[") +1
				var end = kerdesek[priorQid].className.indexOf("]")
				var cont = false
				var num = ""
				var high = ""
				var imp = []
				var full = kerdesek[priorQid].className.slice(begin,end) 
				for (var x=0; x<=full.length; x++) {
					var kar = full[x]
					if ( isNaN(kar) == false ) {
						if ( cont == false ) {
							num = num + kar
						} else {
							high = high + kar
						}
					} else {
						if (kar === "-") { 
							cont = true
						} else {
							if ( cont == true ) {
								for ( var z=0; z<=high-num; z++ ) {
									var EXPid = Number(num) + Number(z)
									var Qtext = localStorage.getItem("hkExpQ."+EXPid)
									if (!localStorage.getItem("hkExpQ."+EXPid)) {alert("nincs még ilyen id LocalStorage-ben: hkExpQ."+EXPid)}
									func_addQ(Qtext)
								}
								cont = false
							} else {
								var EXPid = num
								var Qtext = localStorage.getItem("hkExpQ."+EXPid)
								if (!localStorage.getItem("hkExpQ."+EXPid)) {alert("nincs még ilyen id LocalStorage-ben: hkExpQ."+EXPid)}
								func_addQ(Qtext)
							}
							num = ""
							high = ""
						}
					}
				}
			}
		}
		F_copyQs(Qelem)
		func_abbrSet()

		function F_SetMarks() { // minden kérdés mellé kreál egy osztályzás lehetőséget
			console.clear()
			console.log(" ------ F_SetMarks ------ ")
			var arrayQ = QlocElem.getElementsByClassName("kerdes")
			for ( var i=0; i<arrayQ.length; i++ ) {
				var Qtext = '<details class="' + arrayQ[i].className + '">' + arrayQ[i].innerHTML + "</details>"
				var Qhash = F_hash(Qtext)
				var LSid = localStorage.getItem(Qhash)
				activeQs[i] = LSid

				// kérdés titlebe bekerül, hogy a táblázatban hányas számú
				var num = i+1
				arrayQ[i].innerHTML = arrayQ[i].innerHTML.replace("<summary>","<summary>["+num+"] ")
				if ( arrayQ[i].className.indexOf("open") != -1 ) { arrayQ[i].open = true } // openeli a detailst (pl. ha szövettan metszet-felismerés kérdés)

				if ( !document.getElementById("hkSelect."+i) ) { F_CreateSelect(i) }
				document.getElementById("td.0."+i).hidden = false 
				document.getElementById("td.1."+i).hidden = false 
				document.getElementById("td.2."+i).hidden = false 
				var selectList = document.getElementById("hkSelect."+i)
				// repeatest beállítja vastagbetűsre
				var c = selectList.childNodes;
				for (var x=0; x < c.length; x++) {
					if ( c[x].value == localStorage.getItem(LSid+"_repeat") ) {
						c[x].style.fontWeight = "bolder"
					} else {
						c[x].style.fontWeight = "normal"
					}
				}

				//idő
				document.getElementById("td.0."+i).style.backgroundColor = "white"
				var date = new Date();
				selectList.disabled = false
				selectList.style.backgroundColor = "White"
				if ( localStorage.getItem(LSid+'_idopont') ) {
					var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(LSid+'_idopont')
				console.log("LSid:"+LSid+" ––– time:"+idopont)
					document.getElementById("td.2."+i).innerHTML = idopont

					var num = arrayQ[i].className.search("/");
					var prior = arrayQ[i].className.substring(num-1,num);
					if ( prior == 1 ) {
						prior = 0.33
					} else if ( prior == 2 ) {
						prior = 0.66 
					} else if ( prior == 4 ) {
						prior = 1.5
					} else if ( prior == 5 ) {
						prior = 3
					} else {
						prior = 1
					}
					if ( prior == "J" || prior == "j" ) { prior = 1 }
					func_calcTimeDiff(localStorage.getItem(LSid+'_repeat'))
					checkValue = prior * idopont / timeDiff
					if ( timeDiff > idopont ) { // és nincs enabledelve az 'ultiLearn' (hiányzik még)
						document.getElementById("td.0."+i).style.backgroundColor = "LawnGreen"
						selectList.disabled = true
						selectList.style.backgroundColor = "Black"
					} else if ( checkValue < averageCV/1.2 ) {
						document.getElementById("td.0."+i).style.backgroundColor = "DeepSkyBlue"
					} else if ( checkValue > averageCV/1.2 && checkValue < averageCV*1.2 ) {
						document.getElementById("td.0."+i).style.backgroundColor = "yellow"
					} else if ( checkValue > averageCV*1.2 ) {
						document.getElementById("td.0."+i).style.backgroundColor = "orange"
					} else if ( checkValue > averageCV*2 ) {
						document.getElementById("td.0."+i).style.backgroundColor = "red"
					}
				}
				if ( localStorage.getItem(LSid+'_skip') ) {
					document.getElementById("td.0."+i).style.backgroundColor = "Black"
					selectList.disabled = true
					selectList.style.backgroundColor = "Black"
				}
			}
		}
		F_SetMarks()

		if ( localStorage.getItem(priorQid+'_note') == " " ) { localStorage.setItem(priorQid+'_note', "") }
		if ( localStorage.getItem(priorQid+'_note') != "" && localStorage.getItem(priorQid+'_note') != null ) {
			document.getElementById("note").value = localStorage.getItem(priorQid+'_note')
			document.getElementById("btn_Note").style.borderColor = "red";
			var_note = true
		} else {
			document.getElementById("btn_Note").style.borderColor = "black";
			var_note = false
		}

		var date = new Date();
		var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(priorQid+'_idopont')
		func_abbrSet()
	}

	func_calcJegy()
	func_calcDate()
	func_calcOldNew()
	func_calcRepeat()
}

function F_CreateSelect(i) {
	var selectList = document.createElement("select")
	selectList.id = "hkSelect."+i

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
			td.style.textShadow = "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"
			td.innerHTML = i+1
		} else if ( x == 1 ) {
			td.appendChild(selectList)
		} else if ( x == 2 ) {
			td.style.fontSize = "small"
			td.innerHTML = "&nbsp;"
		}
		document.getElementById("Tr_QsMark."+x).appendChild(td)
	}
}

toggleAll_StatusEtStart()



/* Replace text (regular expression)
	<li><span class="WHITE">(.*?)</span>(.*?)</li>
	<div><font class="abbr"><span class="WHITE">\1</span> ►</font>\2</div>
*/
































