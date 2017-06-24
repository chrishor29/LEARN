﻿
/*window.onerror = function(msg, url, linenumber) {
	alert('Error message: '+msg+'\nLine Number: '+linenumber);
}*/

/* PROJECT 
 ✔: edit kérdés FIX!!!
 ✖: alt & multi kérdések
	(#) altkérdéseket lehessen szintúgy mark/skip stb. --> pl. elmélet nevű kérdést az alapján osztályozom, hogy eszembe jutott-e, hogy miről kell beszélnem (alkérdések címe) &#10140; alkérdéseket pedig külön
	(#) cél: szövettannál egy elmélet kérdés legyen a metszeteknél, amibe be vannak importálva alt kérdések
 ✖: export localStorage FIX!!!
*/

/* importQ
 ✔: histo metszetenként egy elmélet details class kérdés ->  benne import 'div': altkérdések
 ✔: annyi fentivel még a hiba, hogy a altQ-kat ne dobjon ki külön kérdésekben, csak egybe!
----
 ✖: osztályzás fix
 ✖: altQ & multiQ osztályzás
	 ✔: nextQ: menjen fel a parentek közt, a legmagasabb details_kerdes-ig, és azt dobja ki
	 § számolja meg összesen hány 'details' van (alt vagy multi)
	 § számozza meg ezeket mindig 1-től kezdve x-ig
	 § utána egy funkcióra hivatkozva, tegye melléjük a selectet
		§ pl. 'func_setSelect(details,n)' 
		§ 'details' az id-t jelenti
		§ 'n' azt jelenti hányadik az 'x'-ből --> megnézi van-e annyiadik select, ha nincs akkor kreál egyet
		§ így mindig csak annyi select document lesz, amelyik kérdés a legtöbb details-t tartalmazta addig
		§ details mellé beállítja a positiont
----
 ✖: importos kérdést hiába upgradelem html-ben, nem upgradeli LS-ben
 ✖: upgradeQ check!
----
 ✖: Skip funkció
----
 ✔: jobbfenntire klikkelve csak a kérdések legyenek láthatók -> statusat mentse el LS-be!
 ✔: lesz egy olyan classú 'div'(vagy valami), hogy 'import' --> classban lesz egy szám is, hogy melyik kérdés legyen oda bekopyzva
 ✔: cél -> localStorage-ből kopyzza a kérdést --> más html fájlból is lehet kopízni kérdést (illetve másik előnye, ha editelem a kérdést, akkor elég egy helyen)
 ✔: (ha egy olyan kérdés van becopyzva, melynek vannak importjai, akkor azokat is hozza magával)
----
 ✔: class open működjön!
 ✔: kérdés id-t teljesen mutassa
 ✔: histo ismerd fel kérdésnél ne legyen a címben ott a válasz!
 ✔: új kérdést enabled-et, mentse el LS-be
*/

function func_impQs(){
	var impek = document.getElementsByClassName("imp")
	for ( var i=0; i<impek.length; i++ ) { 
		var begin = impek[i].className.indexOf("[") +1
		var end = impek[i].className.indexOf("]")
		//var Qid = impek[i].id
		var impArray = []
		var full = impek[i].className.slice(begin,end) // válassza őket külön
		var cont = false
		var num = ""
		var high = ""
		var MISSid = ""
		function func_impQ(EXPid){
			if ( !localStorage.getItem("hkExp."+EXPid) ) { 
				MISSid = MISSid + EXPid + ","
			} else {
				impek[i].innerHTML = impek[i].innerHTML + localStorage.getItem(localStorage.getItem("hkExp."+EXPid))
				//alert("import EXPid="+EXPid+" : LSid="+ localStorage.getItem("hkExp."+EXPid) + " : Qtext="+ localStorage.getItem(localStorage.getItem("hkExp."+EXPid)))
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
	}
}
func_impQs()

function func_abbrSet(){ 
// azt csináljam, hogy a li textet írja át alapból: <span style="visibility:hidden"> ..text.. <span>, majd amikor ráklikkelek removeolja a spant --> megmaradnak a pontok
// func_saveQuest előtt kell legyen, de a func_impQs után
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

var kerdesek = document.getElementsByClassName("kerdes")

/*
 § elmenti localstoragebe a quest innerhtml-t, és értéke lesz ID+1
 § közben elmenti ID+1-nek is az értékét az innerHTML-re (szükség lesz mindkettőre, mert meg kell néznem, van-e már ilyen quest, ehhez innerhtml kell, illetve tudnom kell, hányadik ID-nél tartok, és melyek hiányoznak)
*/

function func_checkQidEmpty(){
	var emptys = ""
	for ( var i = 1;   i < localStorage.getItem("hkQ.max");   i++ ) {
		if ( !localStorage.getItem("hkQ."+i) ) {
			if ( emptys == "" ) {
				emptys = i // kell, mert különben lesz bennük egy üres is split után (oldsba pl.)
			} else {
				emptys = emptys + " " + i
			}
		}
	}
	localStorage.setItem("hkQ.emptys",emptys)
}
func_checkQidEmpty()
function func_saveQuest(){
	var max = Number(localStorage.getItem("hkQ.max"))
	var emptys = localStorage.getItem("hkQ.emptys")
	emptys = emptys.split(" ")
	if ( emptys.indexOf("") != -1 ) { emptys.splice(emptys.indexOf(""),1) } // kiveszi az emptysbe hibából belekerülő üres elementet
	for ( var i=0; i<kerdesek.length; i++ ) {
		var Qtext = '<details class="' + kerdesek[i].className + '">' + kerdesek[i].innerHTML + "</details>"
		if ( localStorage.getItem(Qtext) ) {
		} else {
			if (emptys.length != 0) {
				var x = emptys[0]
				emptys.splice(0,1)
				localStorage.setItem(Qtext, "hkQ."+x)
				localStorage.setItem("hkQ."+x, Qtext)
			} else {
				max = max+1
				localStorage.setItem(Qtext, "hkQ."+max)
				localStorage.setItem("hkQ."+max, Qtext)
			}
		}
		kerdesek[i].id = i + ":Q,LS:" + localStorage.getItem(Qtext)
	}
	localStorage.setItem("hkQ.max",max)
}
func_saveQuest()

function F_DivSkipFix() {
	var div = document.createElement("div")
	document.body.appendChild(div)
	div.id = "div_SkipFix"
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
F_DivSkipFix()
function func_divButtonETC() {
	var button = document.createElement("input")
	button.id = "button_replaceQ"
	button.type = "button";
	document.getElementById("div_SkipFix").appendChild(button)
	button.style.position = "absolute"
	button.style.bottom = "10px"
	button.style.right = "10px"
	button.value = "upgrade"
	
	var select = document.createElement("SELECT")
	select.id = "select_replaceQ"
	document.getElementById("div_SkipFix").appendChild(select)
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
var defaultText = document.getElementById("div_SkipFix").innerHTML
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
		document.getElementById("div_SkipFix").style.display = 'block';
		function func_replaceQ(){
			var oldID = replaceQs[0]
			document.getElementById("div_SkipFix").innerHTML = defaultText + localStorage.getItem(oldID) + "<hr>"
			for ( var x=0; x<news.length; x++ ) { // felajánlja melyikre lehet cserélni a newsok közül
				var text = document.getElementById("div_SkipFix").innerHTML // (kell hogy megőrizze a buttont + selectet)
				document.getElementById("div_SkipFix").innerHTML = text + localStorage.getItem(news[x])
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
						document.getElementById("div_SkipFix").style.display = 'none';
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

		document.getElementById("div_SkipFix").style.display = 'none';
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

		document.getElementById("div_SkipFix").style.display = 'none';
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
		button.onclick = function(){ func_setNextQ() }
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
		div.style.height = "86vh"

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
	var countQ = 0
	for ( countQ = 0;   countQ < kerdesek.length;   countQ++ ) {
		var Qid = kerdesek[countQ].id
		var parent = kerdesek[countQ]
		do {
			parent = parent.parentElement
		}
		while ( parent.className != "altetel" && parent.className != "tetel" );
		
		if ( parent.className  == "altetel" ) {
			tetelek[parent.parentElement.id][parent.id][Qid] = true
		} else {
			tetelek[parent.id][Qid] = true
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
	for ( var i = 0;   i < kerdesek.length;   i++ ) {
		var id = localStorage.getItem(kerdesek[i].innerHTML)
		if ( localStorage.getItem(id+'_note') ) {
			obj_fixNote[id] = localStorage.getItem(id+'_note')
		} else {
			if ( obj_fixNote[id] ) { delete obj_fixNote[id] } // remove a Table-ból
		}
		if ( localStorage.getItem(id+"_skip") ) {
			var date = new Date();
			date = Math.floor(date.getTime()/60000)
			var difference = date - localStorage.getItem(id+"_idopont")
			if ( difference < localStorage.getItem(id+"_skip")*24*60 ) {
				obj_skip[id] = localStorage.getItem(id+"_skip")
			} else {
				if ( obj_skip[id] ) { delete obj_skip[id] } // remove a Table-ból
				localStorage.removeItem(id+'_skip')
			}
		} else {
			if ( obj_skip[id] ) { delete obj_skip[id] } // remove a Table-ból
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
function func_SetTextOfSkipFixDiv(SkipFix){
	document.getElementById("div_SkipFix").innerHTML = ""
	if ( SkipFix == "btn_fix" ) {
		for ( var kerdes in obj_fixNote ) {
			if ( obj_fixNote[kerdes] ) {
				var text = document.getElementById("div_SkipFix").innerHTML
				document.getElementById("div_SkipFix").innerHTML = text + "<br> &nbsp;•&nbsp;&nbsp;" + kerdes + " " + obj_fixNote[kerdes] + " <input id='testID' class='fix' style='border: 3px solid black;' type='button' value='✖' onclick='func_DeleteSkipFix(this.id)'>" + "<br>"
				document.getElementById("testID").id = kerdes + "_fixClear"
			}
		}
	}
	if ( SkipFix == "btn_skip" ) {
		for ( var kerdes in obj_skip ) {
			if ( obj_skip[kerdes] ) {
				var text = document.getElementById("div_SkipFix").innerHTML
				document.getElementById("div_SkipFix").innerHTML = text + "<br> &nbsp;•&nbsp;&nbsp;" + kerdes + " " + obj_skip[kerdes] + " <input id='testID' class='fix' style='border: 3px solid black;' type='button' value='✖' onclick='func_DeleteSkipFix(this.id)'>" + "<br>"
				document.getElementById("testID").id = kerdes + "_skipClear"
			}
		}
	}
}
function func_spanClick(button){
	if ( button.id == 'btn_skip' || button.id == 'btn_fix' ) {
		func_SetTextOfSkipFixDiv(button.id)
		if ( document.getElementById("div_SkipFix").style.display == 'block' ) {
			 document.getElementById("div_SkipFix").style.display = 'none';
		} else {
			 document.getElementById("div_SkipFix").style.display = 'block';
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
	var kerdesNew = 0
	var repNew = 0
	var repOld = 0
	var repFast = 0
	var repSlow = 0
	function calculate(LSid){
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
					LSid = qat.slice(qat.indexOf(":Q,LS:")+6)
					calculate(LSid)
				} else { // ha az altétel nincs disabledelve, akkor...
					for ( var q in tetelek[tetel][qat] ) {
						LSid = qat.slice(qat.indexOf(":Q,LS:")+6)
						calculate(LSid)
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

for ( var i = 0;   i < kerdesek.length;   i++ ) { // id-s questek (melyek importálva vannak valahova)
	if ( kerdesek[i].className.indexOf("{") != -1 ) {
		var begin = kerdesek[i].className.indexOf("{") +1
		var end = kerdesek[i].className.indexOf("}")
		var EXPid = kerdesek[i].className.slice(begin,end)
		if ( Number(EXPid) > localStorage.getItem("hkExp.max") ) { localStorage.setItem("hkExp.max",EXPid) }

		var Qid = kerdesek[i].id
		var LSid = Qid.slice(Qid.indexOf(":Q,LS:")+6)

		if ( !localStorage.getItem("hkExp."+EXPid) ) { 
			localStorage.setItem("hkExp."+EXPid, LSid) 
		} else {
			if ( localStorage.getItem("hkExp."+EXPid) == LSid ) {
			} else {
				var otherID = localStorage.getItem("hkExp."+EXPid)
				if ( !localStorage.getItem("hkQ."+otherID) ) { // ha már törlődött az a Quest (jegy nélküli upgrade esetében)
					localStorage.setItem("hkExp."+EXPid, LSid) 
				} else {
					alert("foglalt már: {"+EXPid+"}")
				}
			}
		}
	}
}
document.getElementById("input_toggleAll").title = localStorage.getItem("hkExp.max")

function func_prevQuestion(){
	var QlocElem = document.getElementById("kerdeslocation")
	var priorLSid = priorQid.slice(priorQid.indexOf(":Q,LS:")+6)
	function F_Jegyek() {
		var arrayQ = QlocElem.getElementsByClassName("kerdes")
		localStorage.setItem(priorLSid+'_note', document.getElementById("note").value);
		document.getElementById("note").value = ""
		for ( var i=0; i<arrayQ.length; i++ ) {
			var LSid = arrayQ[i].id
			//alert(LSid + " : " + document.getElementById("hkSelect."+i).value)
			var jegy = document.getElementById("hkSelect."+i).value
			document.getElementById("hkSelect."+i).value = ""
			if ( jegy != "empty" ) { 
				if ( jegy == 0 ) { jegy = 1 }
				localStorage.setItem(LSid+'_jegy', jegy)

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

				var date = new Date();
				localStorage.setItem(LSid+'_idopont', Math.floor(date.getTime()/60000));
			}
		}
	}
	F_Jegyek()
	document.getElementById("questTitle").innerHTML = "";
	document.getElementById("note").style.display = 'none';

	
/*
	var skipValue = document.getElementById("skip").value
	if ( skipValue ) { localStorage.setItem(priorLSid+"_skip", skipValue) }

	func_tableSkipFix()
	func_valFix()
	func_valSkip()
	document.getElementById("skip").value = ""

*/
	func_temakorStatus()
}

var priorQid = "nincs"
var fullTema, checkNum, cloneKerdes
var lastTime = 0
function func_setNextQ(){
	var QlocElem = document.getElementById("kerdeslocation")
	var date = new Date();
	var newTime = Math.floor(date.getTime()/1000)
	var diffTime = newTime - lastTime
	if ( diffTime < 3 ) { // 2fast 2furious
		return;
	} else {
		lastTime = newTime
	}

	// előző kérdés
	if ( priorQid != "nincs" ) {
		/*if ( 0 == document.getElementById('skip').value.length && "empty" == document.getElementById("jegy").value ) {
			alert("nincs jegy")
			return
		}*/
		func_prevQuestion();
	}
	QlocElem.innerHTML = ""

	// kovetkező kérdés
	priorQid = "nincs";
	var priorQ_alt = "nincs"
	var priorValue = -1
	var priorValue_alt = -1
	var priorType = 1
	var checkValue = 0

	function func_calcQValue(LSid,Qid) { // kérdés value-ját kiszámolja, és ha nagyobb, akkor kiválasztja
		var shouldBreak = false // ehelyett meg kéne próbálni a "return"-t !!!
		if ( localStorage.getItem(LSid+"_skip") ) {
			shouldBreak = true
		}
		if ( localStorage.getItem(LSid+"_jegy") == "" || localStorage.getItem(LSid+"_jegy") == null || isNaN(localStorage.getItem(LSid+"_jegy")) == true ) {
			if ( shouldBreak == false ) {
				if ( document.getElementById("btn_newQuest").style.borderColor == "limegreen" && priorType < 2 ) {
					priorType = 2
					priorQid = Qid
				}
			}
		}
		if ( priorType == 1 && localStorage.getItem(LSid+"_jegy") > 0 ) { // régi kérdés
			var date = new Date();
			var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(LSid+'_idopont')
			var repCount = Number(localStorage.getItem(LSid+'_repeat'))

			func_calcTimeDiff(repCount)

			if ( document.getElementById("btn_RepFast").style.borderColor != "limegreen" ) {
				if ( timeDiff > idopont ) {
					shouldBreak = true
				}
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

				if ( prior == "J" || prior == "j" ) {
					prior = 1
				}

				//checkValue = vLength * rank * idopont / timeDiff / jegy
				//checkValue = rank / Math.pow(0.8, idopont / timeDiff) / jegy
				//checkValue = changes * prior * idopont / timeDiff
				checkValue = prior * idopont / timeDiff
				if ( localStorage.getItem("godMode") == "limegreen" ) {
					if ( repCount > 1  ) {
						checkValue = 0
					}
				}
				if ( localStorage.getItem("godMode") == "red" ) {
					if ( repCount < 2  ) {
						checkValue = 0
					}
				}

				if ( checkValue > priorValue_alt ) {
					priorValue_alt = checkValue;
					priorQ_alt = Qid;
				}
				if ( localStorage.getItem(id+"_jegy") == markCount || markCount == 0 ) { 
					if ( checkValue > priorValue ) {
						priorValue = checkValue;
						priorQid = Qid
					}
				}
			}
		}
	}

	for ( var tetel in tetelek ) { // végignézi az összes kérdést
		if ( localStorage.getItem(tetel+"_button") == "true" ) {
			for ( var qat in tetelek[tetel] ) {
				var LSid
				if ( tetelek[tetel][qat] == true ) {
					LSid = qat.slice(qat.indexOf(":Q,LS:")+6)
					func_calcQValue(LSid,qat)
				} else { // ha az altétel nincs disabledelve, akkor...
					for ( var q in tetelek[tetel][qat] ) {
						LSid = q.slice(qat.indexOf(":Q,LS:")+6)
						func_calcQValue(LSid,q)
					}
				}
			}
		}
	}

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
		}
		while ( parent.className != "altetel" && parent.className != "tetel" );

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
			if ( Qelem.className.indexOf("ht") == -1 ) { titleText = tetelcim + titleText }
			
			hiddenText = tetelcim+" &#10140; "+altetelcim
			QlocElem.innerHTML = '<div><font class="abbr"><strong><span class="Important">►</span></font>'+hiddenText+'</strong></div>'

			document.getElementById("questTitle").innerHTML = titleText;
			document.getElementById("questLeveL").title = priorQid
		}
		func_setTitle()
		
		function func_copyQuests(){
			function func_addQ(LSid) {
				var Qtext = localStorage.getItem(LSid)
				QlocElem.innerHTML = QlocElem.innerHTML + Qtext
			}
			var LSid = Qelem.id // LSid =  Qid + ":Q,LS:" + LSid  // a 'családfában' legfelül lévő Q (=Qelem) LS-ét kéri le!!
			LSid = LSid.slice(LSid.indexOf(":Q,LS:")+6)
			func_addQ(LSid)
			
			if ( kerdesek[priorQid].className.indexOf("[") != -1 ) {
				var begin = kerdesek[priorQid].className.indexOf("[") +1
				var end = kerdesek[priorQid].className.indexOf("]")
				var Qid = kerdesek[priorQid].id
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
									EXPid = Number(num) + Number(z)
									var altLSid = localStorage.getItem("hkExp."+EXPid)
									if (!localStorage.getItem("hkExp."+EXPid)) {alert("nincs még ilyen id LocalStorage-ben: hkExp."+EXPid)}
									func_addQ(altLSid)
								}
								cont = false
							} else {
								var altLSid = localStorage.getItem("hkExp."+num)
								if (!localStorage.getItem("hkExp."+EXPid)) {alert("nincs még ilyen id LocalStorage-ben: hkExp."+EXPid)}
								func_addQ(altLSid)
							}
							num = ""
							high = ""
						}
					}
				}
			}
		}
		func_copyQuests()
		func_abbrSet()

		function F_SetMarks() { // minden kérdés mellé kreál egy osztályzás lehetőséget
			var arrayQ = QlocElem.getElementsByClassName("kerdes")
			for ( var i=0; i<arrayQ.length; i++ ) {
				var Qtext = '<details class="' + arrayQ[i].className + '">' + arrayQ[i].innerHTML + "</details>"
				var LSid = localStorage.getItem(Qtext)
				/*Qtext = Qtext.replace('<details','<details id="'+LSid+'"');
				if ( Qtext.indexOf("open ") != -1 ) { // openeli a detailst (pl. ha szövettan metszet-felismerés kérdés)
					Qtext = Qtext.replace('open ','');
					Qtext = Qtext.replace('<details','<details open');
				}*/
				
				// kérdés titlebe bekerül, hogy a táblázatban hányas számú
				var num = i+1
				arrayQ[i].innerHTML = arrayQ[i].innerHTML.replace("<summary>","<summary>["+num+"] ")
				arrayQ[i].id = LSid
				if ( arrayQ[i].className.indexOf("open") != -1 ) { arrayQ[i].open = true } // openeli a detailst (pl. ha szövettan metszet-felismerés kérdés)
				//alert(i+": "+LSid)
				
				if ( !document.getElementById("hkSelect."+i) ) { F_CreateSelect(i) }
				var selectList = document.getElementById("hkSelect."+i)

				// hide-olja a Table_QsMarkban a fölös td-ket!

				// selectlist classába beteszi az LSid-t (de erre lehet nincs szükség, szóval kivettem)
				// selectList.className == "id:"+LSid

				// selectlist előző jegyet jelölje! (halványszürke háttér és/vagy vastag betű)
				
				//idő
				var date = new Date();
				if ( localStorage.getItem(LSid+'_idopont') ) {
					var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(LSid+'_idopont')
					document.getElementById("td.2."+i).innerHTML = idopont
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
			var text = document.createTextNode(i+1)
			td.appendChild(text)
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
































