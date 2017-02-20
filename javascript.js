﻿
/* FELADATOK
	(-) legyen multi-kérdés: több kérdés egyszerre, külön számolja priorjukat ugye (legnagyobb alapján kerülhet kérdésbe), és megválaszolásukkor mindegyikét elmenti --> pl. aminosav: képlete?(HP) oldalláncának neve?(LP) 
	(-) 1kérdés lehessen többhelyen is a kódban, azonban a szöveg csak egy helyen legyen megadva hozzá (hogy csak egy helyen kelljen átírnom, ha változtatok rajta)
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
	(-) Skip funkció
	(-) alján a func_span rész sztem buggos, tehát pl. nemhiszem hogy minden jól megy ott! majd amikor tesztelem már, mert tanulok akkor figyeljek rá
	(-) repeatre állított (vagy miss/fix/etc. checkbox true) kérdést mindenképp dobhassa, ne legyen feltétele a kérdés tételének aktivitása
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
	(-) 1 Repeat 30perc után, ha jó akkor felezi a múltkori RepeatTimest
	(-) js-be írjam, ne html-be a kérdés-részt (tehát ahova a kérdést kidobja) --> így ha változtatok rajta, elég egy helyen, nem kell minden aktív fájlban átírnom
	(-) lehessen visszatölteni az előző kérdést (jegyek stb-t is töltse vissza localstoragebe)
	(-) altételcímet ne feltétlen mutassa
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
	(-) jobb felső kérdésszám buttonra klikkelve mindent hideljen el, és showolja a következő kérdést majd, ne copyzza! --> így a scripteket nem kell újra megadni
	(-) amikor visszarakja a kérdést a helyére akkor a legaljára teszi, ezt preventáljam azzal, hogy az összes kérdést (témán belül) újra oda helyezi, a kezdeti sorrend szerint
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
	(-) kép 
		addig terjedhet ki balra, amíg szövegbe nem ütközik, de min 40%-ot kaphat.
		kép oldala piros-színű legyen, ha le lett a fennti miatt kicsinyítve.
		középső-klikkre nyissa meg újablak.
	(-) kémiában (ahol megvannak adva a tételek), legyenek összetett kérdések. tehát a tételcímrészlet a kérdés. nekem erről eszembe kell jutni a válasznak. azért összetett, mert több pontos (nemcsak 1-4 osztályzás) (azaz több jegyet mentsen el egy feladaton belül!!. így a rankja is nagyobb, hiszen az a max pontok száma lesz). ha nemjut eszembe minden, attól még az adott alkérdésre kaphatok 50%nyi pontot ha tudtam azt is, csak elfelejtettem felhozni. végül a tétel státuszát (osztályzását), csak ezen kérdések alapján tegye.

	(-) alertbe mutassa, ha valamely kérdésID üres már! és mellette localstoraget törölje!
	(-) miss/fix-nél növekvő sorrendbe nézze őket
	(-) lehessen beállítani: rövid_kérdés / hosszú_kérdés
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
	(-) DETAILS script
	(-) lehessen beállítani IF / RAJZ stb. kategóriát is
	(-) lehessen látni jegy(1-2-3) hány feladat van és ki lehessen jelölni /checkbox/ melyeket akarom (ez nembiztos kell)
	(-) kérdést más html-ből olvassa be
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	(+) jelenleg akkoris megkapják a bónuszt +1et, ha időpont nem volt elég hozzá
	(+) tooltip az abbr-ban elrejtetteknél nem műxik
*/




window.onerror = function(msg, url, linenumber) {
	//alert('Error message: '+msg+'\nLine Number: '+linenumber);
}


//ha már elkészült a script, és removeltam mind1iket törölhető ez a funkció! lentebb van rá egy hivatkozás azt is !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function func_removeRepeat(){ 
	for ( var fotema in kerdesID ) { 
		for ( var temaKerdes in kerdesID[fotema] ) { 
			for ( var kerdes in kerdesID[fotema][temaKerdes] ) {
				//localStorage.setItem(kerdes+'_timeDiff', "0")
				//localStorage.removeItem(kerdes+'_idopont');
				//localStorage.removeItem(kerdes+'_repeat');
				if ( kerdes+'_timeDiff' in localStorage ) {
					var count = localStorage.getItem(kerdes+'_timeDiff')/60
					Math.floor(count) = count
					localStorage.setItem(kerdes+'_repeat', count)
					localStorage.removeItem(kerdes+'_timeDiff');
				}
				localStorage.removeItem(kerdes+'_jegyDiff');
				/*if ( localStorage.getItem(kerdes+'_timeDiff') > 600 ) {
					localStorage.setItem(kerdes+'_timeDiff', 600)
				}*/
				/*if ( kerdes+'_repeat' in localStorage ) {
					var count = parseInt(localStorage.getItem(kerdes+'_repeat'))
					localStorage.setItem(kerdes+'_jegy', localStorage.getItem(kerdes+'_jegy_'+count))

					localStorage.setItem(kerdes+'_min', localStorage.getItem(kerdes+'_min_'+count))
					localStorage.setItem(kerdes+'_hour', localStorage.getItem(kerdes+'_hour_'+count))
					localStorage.setItem(kerdes+'_day', localStorage.getItem(kerdes+'_day_'+count))
					localStorage.setItem(kerdes+'_month', localStorage.getItem(kerdes+'_month_'+count))
					localStorage.setItem(kerdes+'_year', localStorage.getItem(kerdes+'_year_'+count))

					localStorage.removeItem(kerdes+'_repeat');
				}*/
			}
		}
	}
}


function func_calcJegy() { // átlagJegyet kiszámolja
	var maxJegy = 0
	var trueJegy = 0
	for ( var fotema in kerdesID ) { 
		for ( var temaKerdes in kerdesID[fotema] ) { 
			if ( localStorage.getItem(fotema+" / "+temaKerdes+"_button") == "true" ) {
				for ( var kerdes in kerdesID[fotema][temaKerdes] ) {
					if ( kerdesID[fotema][temaKerdes][kerdes] == true ) {
						var jegy = localStorage.getItem(kerdes+'_jegy')

						var num = document.getElementById(kerdes).className.search("/");
						var prior = document.getElementById(kerdes).className.substring(num-1,num);
						var hossz = document.getElementById(kerdes).className.substring(num+1,num+2);
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

						if ( prior != 'J' & prior != 'j' ) {
							if ( jegy == 1 ) {
								jegy = 0
							}
							if ( jegy == 2 ) {
								jegy = 6
							}
							if ( jegy == 3 ) {
								jegy = 8
							}
							if ( jegy == 4 ) {
								jegy = 10
							}
							maxJegy = maxJegy + prior * hossz * 10
							trueJegy = trueJegy + prior * hossz * jegy
						}
					}
				}
			}
		}
	}
	document.getElementById("span_Jegy").innerHTML = Math.floor(100*trueJegy/maxJegy) + "%" 
}
function func_calcDate() { // átlagIdőt kiszámolja
	var allDate = 0
	var countDate = 0
	for ( var fotema in kerdesID ) { 
		for ( var temaKerdes in kerdesID[fotema] ) { 
			if ( localStorage.getItem(fotema+" / "+temaKerdes+"_button") == "true" ) {
				for ( var kerdes in kerdesID[fotema][temaKerdes] ) {
					if ( kerdesID[fotema][temaKerdes][kerdes] == true ) {
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
	}
	var date = allDate / countDate
	date = date / 60 / 24
	date = parseFloat(Math.round(date * 100) / 100).toFixed(1);
	document.getElementById("span_Date").innerHTML = date
}
function func_calcRepeat() { // átlagIsmétlések számát kiszámolja
	var questCount = 0
	var allRepVal = 0
	for ( var fotema in kerdesID ) { 
		for ( var temaKerdes in kerdesID[fotema] ) { 
			//if ( localStorage.getItem(fotema+" / "+temaKerdes+"_button") == "true" ) {
				for ( var kerdes in kerdesID[fotema][temaKerdes] ) {
					if ( kerdesID[fotema][temaKerdes][kerdes] == true ) {
						questCount = questCount +1
						allRepVal = allRepVal +Number(localStorage.getItem(kerdes+'_repeat'))
					}
				}
			/*}*/
		}
	}
	var atlag = allRepVal / questCount
	atlag = +atlag.toFixed(1);
	document.getElementById("span_Repeat").innerHTML = atlag
}




// képnagyítás balKlikkel középre
var imagesAll = document.images
var imgStatus
var tooltipStatus
document.body.onclick=function(){
	if ( imgStatus == "hide" ) {
		centerImage.style.visibility = "hidden"
	}
	imgStatus = "hide"

	tooltipSpan.style.visibility = "hidden";
	tooltipStatus = "hide"
};
for ( var i = 0;   i < imagesAll.length;   i++ ) {
	imagesAll[i].onclick=function(){
		imgStatus = "show"
		centerImage.style.visibility = "visible";
		centerImage.src = this.src
		centerImage.style.maxHeight = "100%";
		centerImage.style.maxWidth = "100%";
		centerImage.style.position = "fixed";
		centerImage.style.display = "block";
		centerImage.style.left = "0px";
		centerImage.style.right = "0px";
		centerImage.style.bottom = "0px";
		centerImage.style.top = "0px";
		centerImage.style.margin = "auto";
	};
}
centerImage = document.createElement("img")
document.body.appendChild(centerImage)
centerImage.style.visibility = "hidden";





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
	console.log(objects);
	window.location = "data:text/plain,"+text
}
//func_saveLS()
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
fileInput.addEventListener('change', function(e) {
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







// toggle checkbox/note
var var_toggleAll = false
function toggleAll() {
	if ( var_toggleAll == false ) {
		document.getElementById("quest").style.display = 'block';
		var_toggleAll = true
	} else {
		document.getElementById("quest").style.display = 'none';
		var_toggleAll = false
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


function func_phaseID() {
	var Table = document.getElementsByClassName("phase")
	for ( var i = 0;   i < Table.length;   i++ ) {
		var minorID = Table[i].innerHTML
		Table[i].parentElement.id = minorID
	}
}
func_phaseID()
function func_mainID() {
	var Table = document.getElementsByClassName("mainTitle")
	for ( var i = 0;   i < Table.length;   i++ ) {
		var minorID = Table[i].innerHTML
		Table[i].parentElement.id = minorID
	}
}
func_mainID()
function func_titleID() {
	var Table = document.getElementsByClassName("title")
	for ( var i = 0;   i < Table.length;   i++ ) {
		var minorID = Table[i].innerHTML
		var majorID = Table[i].parentElement.parentElement.parentElement.id
		var mainID = Table[i].parentElement.parentElement.parentElement.parentElement.id
		minorID = majorID.slice(0,majorID.indexOf(".")) + " &#10140; " + minorID
		minorID = mainID + "/" + minorID
		Table[i].parentElement.id = minorID;
	}
}
func_titleID()

/*
function func_setMark(parent,summary) {
	var jegy = localStorage.getItem(parent.id+'_jegy');
	var mark = "&#9609; "
	if ( jegy == 1 ) {
		mark = mark.fontcolor("red");
	} else if ( jegy == 2) {
		mark = mark.fontcolor("blue");
	} else if ( jegy == 3 ) {
		mark = mark.fontcolor("green");
	} else if ( jegy == null ) {
		mark = mark.fontcolor("black");
	}
	summary.innerHTML = mark + summary.innerHTML;
}

// details & summary
var tableSummary = document.getElementsByTagName("summary")
for ( var i = 0;   i < tableSummary.length;   i++ ) {
	var summary = tableSummary[i]
	if ( summary.parentElement.className == "kerdes" ) {
		func_setMark(summary.parentElement,summary)
	}
}
*/

// kérdések változói
var elements = document.getElementsByClassName("kerdes")
var highestID = 0
var questCount = 0 // egyenlőre csak Anat.html-nél számolom
var kerdesID = []
var temakor = []
var usedID = [] // ebbe elmenti az eddig felhasznált id-ket, hogy lecheckolja, nem-e használt a következő már
for ( var i = 0;   i < elements.length;   i++ ) {
	var id = elements[i].id
	var temaKerdes = 	document.getElementById(id).parentElement.parentElement.parentElement.id
	var fotema = 		document.getElementById(id).parentElement.parentElement.parentElement.parentElement.id

	if ( !temakor[fotema] ) {
		temakor[fotema]  = []
		kerdesID[fotema] = []
	}

	if ( !kerdesID[fotema][temaKerdes] ) {
		temakor[fotema][temakor[fotema].length] = temaKerdes
		kerdesID[fotema][temaKerdes] = []
	}
	kerdesID[fotema][temaKerdes][id] = true
	if ( Number(id.slice(id.indexOf(".")+1)) > highestID ) { 
		highestID = Number(id.slice(id.indexOf(".")+1))
	}
	if ( temaKerdes != "3D." ) {
		questCount = questCount +1 // egyenlőre csak Anat.html-nél számolom
	}

	if ( !usedID[id] ) {
		usedID[id] = true
	} else {
		alert("foglalt az id már:"+id)
	}
}

if ( document.title == "Anat" ) {
	var sedreks = document.getElementsByClassName("sedrek")
	for ( var i = 0;   i < sedreks.length;   i++ ) {
		var id = sedreks[i].id

		var d = document.getElementById(id).children
		for (k = 0; k < d.length; k++) {
			if ( "SUMMARY" == d[k].tagName ) {
				d[k].style.backgroundColor = "LightCyan"
			}
		}

		if ( Number(id.slice(id.indexOf(".")+1)) > highestID ) { 
			highestID = Number(id.slice(id.indexOf(".")+1))
		}
		if ( !usedID[id] ) {
			usedID[id] = true
		} else {
			alert("foglalt az id már:"+id)
		}
	}
	highestID = highestID + " / " + questCount
}
document.getElementById("input_toggleAll").value = highestID


function func_spanClick(element){
	if ( element.style.borderColor == "limegreen" ) {
		element.style.borderColor = "black"
		//localStorage.setItem(element,false)
	} else {
		element.style.borderColor = "limegreen"
		//localStorage.setItem(element,true)
	}
}


//func_removeRepeat()




function func_clickTemaButton(button){
	if ( localStorage.getItem(button.id) == "true" ) {
		localStorage.setItem(button.id,false)
		document.getElementById(button.id+"_label").style.color = "black";
	} else {
		localStorage.setItem(button.id,true)
		document.getElementById(button.id+"_label").style.color= "limegreen";
	}
}

// témakör buttonok
for ( var fotema in kerdesID ) {
	var button = document.createElement("input");
	button.type = "button";
	button.id = fotema+"_button";
	button.value = fotema
	button.onclick = function() {
	}
	container.appendChild(button);
	var br = document.createElement("br")
	button.parentNode.insertBefore(br, button.nextSibling);

	for ( var temaKerdes in kerdesID[fotema] ) {
		var button = document.createElement("input");
		button.type = "button";
		button.style.height = "20px";
		button.style.width = "30px";
		button.id = fotema+" / "+temaKerdes+"_button";

		var label = document.createElement("label")
		label.id = fotema+" / "+temaKerdes+"_button_label";
		var text = temaKerdes+"<br>"
		label.innerHTML = text.bold();

		button.onclick = function() {
			func_clickTemaButton(this);
			func_calcOldNew();
		}



		container.appendChild(button);
		container.appendChild(label);

		if ( localStorage.getItem(button.id) == "true" ) {
			label.style.color = "limegreen";
		} else {
			label.style.color = "black";
		}
	}
}

// Tétel hány %-on áll? --> beállítja a buttonColort ez alapján
function func_temakorStatus(){
	for ( var fotema in kerdesID ) {
		for ( var temaKerdes in kerdesID[fotema] ) {
			var button = document.getElementById(fotema+" / "+temaKerdes+"_button")
			
			var maxJegy = 0
			var trueJegy = 0
			for ( var kerdes in kerdesID[fotema][temaKerdes] ) {
				var jegy = localStorage.getItem(kerdes+'_jegy')
				var num = document.getElementById(kerdes).className.search("/");
				var prior = document.getElementById(kerdes).className.substring(num-1,num);
				var hossz = document.getElementById(kerdes).className.substring(num+1,num+2);
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

				if ( prior != 'J' ) {
					var rank = prior*hossz

					if ( jegy == 1 ) {
						jegy = 0
					} else if ( jegy == 2 ) {
						jegy = 6
					} else if ( jegy == 3 ) {
						jegy = 8
					} else if ( jegy == 4 ) {
						jegy = 10
					}

					var date = new Date();
					var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(kerdes+'_idopont')

					if ( localStorage.getItem(kerdes+'_repeat') == null) {
						localStorage.setItem(kerdes+'_repeat', 0);
					}
					var repCount = Number(localStorage.getItem(kerdes+'_repeat'))
					var timeDiff
					if ( repCount >= 3 ) {
						timeDiff = 1000 * (repCount-2)
					} else {
						timeDiff = 15 * Math.pow(4,repCount)
					}

					trueJegy = trueJegy + Math.pow(0.9, idopont / timeDiff) * rank * jegy
					maxJegy = maxJegy + rank * 10
				}
			}
			var red
			var green

			if ( 2*trueJegy/maxJegy > 1 ) {
				var more = 2*trueJegy/maxJegy -1
				red = Math.round(255*(1-more))
				green = 255
			} else {
				var less = 2*trueJegy/maxJegy
				green = Math.round(255*less)
				red = 255
			}
			button.style.backgroundColor = "rgb("+red+", "+green+", 0)";
			button.value = Math.round(100 * trueJegy/maxJegy)
		}
	}
}
func_temakorStatus()

// clear old history
for ( var fotema in kerdesID ) { 
	for ( var temaKerdes in kerdesID[fotema] ) { 
		for ( var kerdes in kerdesID[fotema][temaKerdes] ) {
			var date = new Date();
			var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(kerdes+'_idopont')
			/*if ( kerdes == "sb.333" ) {
				alert(date.getMonth())
				alert(localStorage.getItem(kerdes+'_month_1') + " - " + date.getMonth())
				alert(count + " + " + kerdes + " + " + month_diff + " + " + idopont)
			}*/ //333
			if ( localStorage.getItem(kerdes+"_skip") == "skip" ) {
				if ( idopont < 90 ) {
				} else { //azért így oldottam meg, mertha időpont == null vagy mi akkor is működjön
					localStorage.removeItem(kerdes+'_skip');
					localStorage.removeItem(kerdes+'_jegy');
				}
			}
		}
	}
}



/* ToolTip BEGIN */
var tooltipSpan = document.createElement("span");
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

function func_abbrSet(){
	var abbrSpan = document.getElementsByClassName("abbr")
	var table_defTextSpan = []
	for ( var j = 0; j < abbrSpan.length; j++ ) {
		abbrSpan[j].style.cursor = "pointer"
		if ( !abbrSpan[j].Text ) {
			abbrSpan[j].parentElement.style.visibility = "hidden"
			abbrSpan[j].style.visibility = "visible"
			abbrSpan[j].style.backgroundColor = "Bisque";
		}
		abbrSpan[j].onclick = function(){
			if ( this.Shown != "true" ) { 
				this.style.cursor = ""
				this.style.backgroundColor = "";
				this.parentElement.style.visibility = "visible"
				this.Shown = "true"
			}
		}
	}
}
func_abbrSet()


/* ToolTip END */


// checkboxok: missFix & skipID
if ( localStorage.getItem("checkboxSkip") == "true" ) {
	document.getElementById("checkboxSkip").checked = true;
}
if ( localStorage.getItem("miss_checkbox") == "true" ) {
	//document.getElementById("miss_checkbox").checked = true;
}
if ( localStorage.getItem("checkboxProgress") == "true" ) {
	document.getElementById("checkboxProgress").checked = true;
}
/*if ( localStorage.getItem("checkbox_RepNew") == "true" ) {
	document.getElementById("checkbox_RepNew").checked = true;
}*/
/*document.getElementById("checkbox_RepNew").onclick = function() {
	if ( this.checked ) {
		localStorage.setItem(this.id,true)
	} else {
		localStorage.setItem(this.id,false)
	}
}*/

var elements = document.getElementsByClassName("kerdes")
var table_Status = []
var table_StatusSkip = []
for ( var i = 0;   i < elements.length;   i++ ) {
	var id = elements[i].id
	var temaKerdes = 	document.getElementById(id).parentElement.parentElement.parentElement.id
	var fotema = 		document.getElementById(id).parentElement.parentElement.parentElement.parentElement.id
	var cimTitle = id.slice(id.indexOf(".")+1)
	
	table_Status[id] = localStorage.getItem(id + "_fix")
	table_StatusSkip[id] = localStorage.getItem(id + "_skip")
	if ( localStorage.getItem(id + "_skip") == "progress" ) {
		kerdesID[fotema][temaKerdes][id] = false
	} else {
		kerdesID[fotema][temaKerdes][id] = true
	}
}

function func_valStatus(status){
	var x = 0
	for ( var id in table_Status ) {
		if ( table_Status[id] == status ) {
			x = x+1
		}
	}
	document.getElementById("btn_"+status).value = x;
}
func_valStatus("fix");
func_valStatus("miss");
//func_valStatus("Skip");
func_valStatus("progress");

function func_valStatusSkip(status){
	var x = 0
	var y = 0
	for ( var id in table_StatusSkip ) {
		if ( table_StatusSkip[id] == "skip" ) {
			x = x+1
		}
	}
	document.getElementById("btn_progress").value = x;
}
func_valStatusSkip("skip");

function func_calcOldNew(){
	var kerdesNew = 0
	var repNew = 0
	var repOld = 0
	var repFast = 0
	var repSlow = 0
	for ( var fotema in kerdesID ) {
		for ( var temaKerdes in kerdesID[fotema] ) {
			if ( localStorage.getItem(fotema+" / "+temaKerdes+"_button") == "true" ) {
				for ( var kerdes in kerdesID[fotema][temaKerdes] ) {

					var repCount = Number(localStorage.getItem(kerdes+'_repeat'))
					var timeDiff
					var date = new Date();
					var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(kerdes+'_idopont')
					if ( repCount >= 3 ) {
						timeDiff = 1000 * (repCount-2)
					} else {
						timeDiff = 15 * Math.pow(4,repCount)
					}

					if ( localStorage.getItem(kerdes+"_jegy") >= 1 ) {
						if ( timeDiff >= idopont ) {
							repFast = repFast +1
						} else {
							repSlow = repSlow +1
						}
					} else {
						if ( table_Status[kerdes] != "progress" ) {
							kerdesNew = kerdesNew +1
						}
					}
					
					if ( localStorage.getItem(kerdes+"_jegy") == 1 ) {

						if ( idopont < 30 ) {
							repOld = repOld +1
						} else {
							repNew = repNew +1
						}
					}
				}
			}
		}
	}
	document.getElementById("btn_newQuest").value = kerdesNew
	document.getElementById("cont_RepNew").innerHTML = repNew;
	document.getElementById("cont_RepOld").innerHTML = repOld;
	document.getElementById("cont_RepFast").value = repFast;
	document.getElementById("cont_RepSlow").innerHTML = repSlow;
}

// következő kérdés nehézségét beállítja, az előző sikere alapján
var markCount = 0
function func_markCount(jegy){
	jegy = parseInt(jegy,10)
	if ( Math.random() > 0.5 ) {
		if ( jegy == 1 ) {
			markCount = 3
		} else if ( jegy == 3 || jegy == 4 ) {
			markCount = 1
		}
	} else {
		markCount = 0
	}
}

// _missFix

function func_prevQuestion(){
	func_markCount(document.getElementById("jegy").value);

	/*if ( priorKerdesID+'_jegy' in localStorage ) {
		if ( document.getElementById("jegy").value == "3" || document.getElementById("jegy").value == "4" ) {
			localStorage.setItem(priorKerdesID+'_jegyDiff', "good");
		} else {
			localStorage.setItem(priorKerdesID+'_jegyDiff', "bad");
		}
	}*/

	document.getElementById(oldParent).appendChild(document.getElementById(priorKerdesID))

	localStorage.setItem(priorKerdesID+'_jegy', document.getElementById("jegy").value);
	if ( document.getElementById("buttonFix").style.backgroundColor == "lightgrey" ) {
		table_Status[priorKerdesID] = "normal"
		localStorage.setItem(priorKerdesID + "_fix","")
	} else if ( document.getElementById("buttonFix").style.backgroundColor == "lightpink" ) {
		table_Status[priorKerdesID] = "miss"
		localStorage.setItem(priorKerdesID + "_fix","miss") 
	} else if ( document.getElementById("buttonFix").style.backgroundColor == "red" ) {
		table_Status[priorKerdesID] = "fix"
		localStorage.setItem(priorKerdesID + "_fix","fix")
	}

	if ( document.getElementById("buttonSkip").style.backgroundColor == "black" ) {
		localStorage.setItem(priorKerdesID+'_jegy', "");
		localStorage.setItem(priorKerdesID + "_skip","progress")

		table_Status[priorKerdesID] = "progress"
		var temaKerdes = 	document.getElementById(priorKerdesID).parentElement.parentElement.parentElement.id
		var fotema = 		document.getElementById(priorKerdesID).parentElement.parentElement.parentElement.parentElement.id
		kerdesID[fotema][temaKerdes][priorKerdesID] = false
	} else {
		if ( document.getElementById("buttonSkip").style.backgroundColor == "dodgerblue" ) {
			localStorage.setItem(priorKerdesID+"_skip","skip")
		} else if ( document.getElementById("buttonSkip").style.backgroundColor == "yellow" ) {
			localStorage.setItem(priorKerdesID+"_skip","repeat")
		} else if ( document.getElementById("buttonSkip").style.backgroundColor == "lightgrey" ) {
			localStorage.setItem(priorKerdesID+"_skip","false")
		}
	}

	var date = new Date();
	var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(priorKerdesID+'_idopont')
	var repCount = Number(localStorage.getItem(priorKerdesID+'_repeat'))
	var jegy = localStorage.getItem(priorKerdesID+'_jegy')
	var timeDiff
	if ( repCount >= 3 ) {
		timeDiff = 1000 * (repCount-2)
	} else {
		timeDiff = 15 * Math.pow(4,repCount)
	}

	if ( jegy == 1 ) {
		localStorage.setItem(priorKerdesID+'_repeat', 0)
	} else if ( jegy == 2 ) {
		var atlag = Number(document.getElementById("span_Repeat").innerHTML)
		if ( Math.floor(atlag) > repCount ) {
			localStorage.setItem(priorKerdesID+'_repeat', repCount +1);
		} else if ( Math.floor(atlag) < repCount ) {
			localStorage.setItem(priorKerdesID+'_repeat', repCount -1);
		}
	} else if ( jegy == 3 || jegy == 4 ) {
		if ( idopont > timeDiff ) {
			localStorage.setItem(priorKerdesID+'_repeat', repCount +1);
		}
	}
	
	/*if ( numberX < 30 ) {
		if ( idopont > 30 ) {
			idopont = 30
		}
	} else {
		numberX = Math.floor(numberX/60)
		numberX = (numberX+1)*60
		if ( idopont > numberX ) {
			idopont = numberX
		}
	}
	if ( idopont < numberX ) {
		idopont = numberX
	}*/

	localStorage.setItem(priorKerdesID+'_idopont', Math.floor(date.getTime()/60000));
	localStorage.setItem(priorKerdesID+'_note', document.getElementById("note").value);

	document.getElementById("questTitle").innerHTML = "";		// hide előző megoldás
	document.getElementById("kerdeslocation").style.display = 'none';								// hide előző megoldás
	
	func_valStatus("fix");
	func_valStatus("miss");
	func_valStatus("progress");
	func_valStatusSkip("skip");
	document.getElementById("jegy").value = ""
	document.getElementById("note").value = ""
	document.getElementById("note").style.display = 'none';

	func_temakorStatus()
}

/*
	var vClass = document.getElementById(id).className
	var vLength = vClass.match(/^\d+|\d+\b|\d+(?=\w)/g)
	if ( vLength != null ) {
		alert(vLength)
	}
*/

var tableMulti= {}
var fullTema
var priorKerdesID = "nincs"
var checkNum
var cloneKerdes
var lastTime = 0
var oldParent
function koviKerdes(){
	var date = new Date();
	var newTime = Math.floor(date.getTime()/1000)
	var diffTime = newTime - lastTime
	if ( diffTime < 3 ) {
		alert("2fast 2furious")
		return;
	} else {
		lastTime = newTime
	}

	// előző kérdés
	if ( priorKerdesID != "nincs" ) {
		if ( false == document.getElementById('jegy').disabled && 0 == document.getElementById("jegy").value.length ) {
			alert("nincs jegy")
			return
		}
		func_prevQuestion();
	}

	// kovetkező kérdés
	document.getElementById("pJegy").textContent = "\xa0 "
	document.getElementById("repeat").innerHTML = "&nbsp; &nbsp;";
	priorKerdesID = "nincs";
	var priorKerdesID_X = "nincs"
	var priorValue = -1
	var priorValue_X = -1
	var priorType = 0
	var checkValue = 0
	
	function func_checkStatus(status){
		if ( priorKerdesID == "nincs" && document.getElementById("btn_"+status).style.borderColor == "limegreen" ) {
			function func_priorStatus() {
				var table_IDs = []
				for ( var id in table_Status ) {
					var fotema = document.getElementById(id).parentElement.parentElement.parentElement.parentElement.id
					var temaKerdes = document.getElementById(id).parentElement.parentElement.parentElement.id
					if ( table_Status[id] == status && localStorage.getItem(fotema+" / "+temaKerdes+"_button") == "true" ) {
						table_IDs.push(id);
					}
				}
				if ( table_IDs.length > 0 ) {
					priorKerdesID = table_IDs[Math.floor(Math.random() * table_IDs.length)];
				}
			}
			func_priorStatus();
		}
	}
	func_checkStatus("progress")
	func_checkStatus("fix")
	func_checkStatus("miss")
	if ( priorKerdesID == "nincs" ) { // végignézi az összes kérdés priorját, és kiválasztja a legnagyobbat
		for ( var fotema in kerdesID ) { 
			for ( var temaKerdes in kerdesID[fotema] ) { 
				if ( localStorage.getItem(fotema+" / "+temaKerdes+"_button") == "true" ) {
					for ( var kerdes in kerdesID[fotema][temaKerdes] ) {
						if ( kerdesID[fotema][temaKerdes][kerdes] == true ) {

							/*if ( localStorage.getItem("checkbox_RepNew") == "true" && priorType < 3 && localStorage.getItem(kerdes+"_jegy") == 1 ) {
								var date = new Date();
								var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(kerdes+'_idopont')

								if ( idopont > 30 ) {
									priorType = 3
									priorKerdesID = kerdes;
								}
							}*/

							if ( localStorage.getItem(kerdes+"_jegy") == null || isNaN(localStorage.getItem(kerdes+"_jegy")) == true ) {
								if ( document.getElementById("btn_newQuest").style.borderColor == "limegreen" && priorType < 2 ) {
									priorType = 2
									priorKerdesID = kerdes;
								}
							}

							if ( priorType == 0 ) {
								priorType = 1
								priorValue = 0
							}

							if ( priorType == 1 && localStorage.getItem(kerdes+"_jegy") > 0 ) { // régi kérdés
								var date = new Date();
								var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(kerdes+'_idopont')
								var jegy = localStorage.getItem(kerdes+'_jegy')
								var shouldBreak = false

								var repCount = Number(localStorage.getItem(kerdes+'_repeat'))

								var timeDiff
								if ( repCount >= 3 ) {
									timeDiff = 1000 * (repCount-2)
								} else {
									timeDiff = 15 * Math.pow(4,repCount)
								}
								/*if ( timeDiff > 1000) {
									timeDiff = 1000
								}*/

								if ( document.getElementById("cont_RepFast").style.borderColor != "limegreen" ) {
									if ( timeDiff > idopont ) {
										shouldBreak = true
									}
									if ( 31 > idopont ) {
										shouldBreak = true
									}
								}
								
								if ( shouldBreak == false ) {

									var num = document.getElementById(kerdes).className.search("/");
									var prior = document.getElementById(kerdes).className.substring(num-1,num);
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

									//checkValue = rank / Math.pow(0.8, idopont / timeDiff) / jegy
									checkValue = prior * idopont / timeDiff / jegy
									//checkValue = vLength * rank * idopont / timeDiff / jegy

									if ( checkValue > priorValue_X ) {
										if ( localStorage.getItem(kerdes+"_skip") == "skip" ) {
											if ( localStorage.getItem("checkboxSkip") == "true" ) {
												priorValue_X = checkValue;
												priorKerdesID_X = kerdes;
											}
										} else {
											priorValue_X = checkValue;
											priorKerdesID_X = kerdes;
										}
									}
									if ( jegy == markCount || markCount == 0 ) { 
										if ( checkValue > priorValue ) {
											if ( localStorage.getItem(kerdes+"_skip") == "skip" ) {
												if ( localStorage.getItem("checkboxSkip") == "true" ) {
													priorValue = checkValue;
													priorKerdesID = kerdes;
												}
											} else {
												priorValue = checkValue;
												priorKerdesID = kerdes;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	if ( priorKerdesID == "nincs" ) {
		if ( priorKerdesID_X != "nincs" ) {
			priorKerdesID = priorKerdesID_X
		} else {
			alert("elfogytak a kérdések");
		}
	}
	if ( priorKerdesID != "nincs" ) {
		fullTema = document.getElementById(priorKerdesID).parentElement.id
		var cimTitle = priorKerdesID.slice(priorKerdesID.indexOf(".")+1)
		document.getElementById("questTitle").innerHTML = "(" + cimTitle + ") " + fullTema.slice(0,fullTema.indexOf("/")-1) + " &#10140; " + fullTema.slice(fullTema.indexOf(".")+2);
		
		var n = document.getElementById(priorKerdesID).className.search("open");
		if ( n != -1 ) {
			document.getElementById(priorKerdesID).open = true;
			var c = document.getElementById(priorKerdesID).children;
			var d = document.getElementById(priorKerdesID).parentNode.parentNode.parentNode.children
			var titleText = ""
			for (k = 0; k < d.length; k++) {
				if ( "SUMMARY" == d[k].tagName ) {
					if ( d[k].innerHTML.slice(0,1) == "." ) {
						titleText = d[k].innerHTML.replace('.','') + " &#10140; "
					}
				}
			}
			var hide = false 
			for (i = 0; i < c.length; i++) {
				if ( "SUMMARY" == c[i].tagName ) {
					titleText = titleText + c[i].innerHTML
					if ( c[i].innerHTML.search("[?=]") == -1 ) {
						c[i].innerHTML = "kérdés"
						hide = true 
					}
				}
				if ( "UL" == c[i].tagName && "normal" == c[i].className && hide == true ) {
					c[i].insertAdjacentHTML('afterbegin', '<span class="abbr"><strong><span class="Important">►</span>'+titleText+'</strong></span><br>');
					c[i].open = false
					func_abbrSet()
				}
			}
		} else {
			document.getElementById(priorKerdesID).open = false;
		}
		
		oldParent = document.getElementById(priorKerdesID).parentElement.id
		document.getElementById("kerdeslocation").appendChild(document.getElementById(priorKerdesID))

		/*document.getElementById("kerdeslocation").innerHTML = document.getElementById(priorKerdesID).innerHTML;
		var aktivimages = document.getElementById("kerdeslocation").getElementsByTagName("img");
		for ( var i = 0;   i < aktivimages.length;   i++ ) {
			aktivimages[i].onclick=function(){
				imgStatus = "show"
				centerImage.style.visibility = "visible";
				centerImage.src = this.src
				centerImage.style.maxHeight = "100%";
				centerImage.style.maxWidth = "100%";
				centerImage.style.position = "fixed";
				centerImage.style.display = "block";
				centerImage.style.left = "0px";
				centerImage.style.right = "0px";
				centerImage.style.bottom = "0px";
				centerImage.style.top = "0px";
				centerImage.style.margin = "auto";
			};
		}
		func_TitleChange()
		*/

		if ( localStorage.getItem(priorKerdesID+"_skip") == "progress" ) {
			document.getElementById("buttonSkip").style.backgroundColor = "black"
			document.getElementById('jegy').disabled = true;
		} else if ( localStorage.getItem(priorKerdesID+"_skip") == "skip" ) {
			document.getElementById("buttonSkip").style.backgroundColor = "dodgerblue"
		} else {
			document.getElementById("buttonSkip").style.backgroundColor = "lightgrey"
		}

		if ( localStorage.getItem(priorKerdesID+'_note') == " " ) {
			localStorage.setItem(priorKerdesID+'_note', "");
		}
		if ( localStorage.getItem(priorKerdesID+'_note') != "" && localStorage.getItem(priorKerdesID+'_note') != null ) {
			document.getElementById("note").value = localStorage.getItem(priorKerdesID+'_note')
			document.getElementById("note").style.display = 'block';
			var_note = true
		} else {
			document.getElementById("note").style.display = 'none';
			var_note = false
		}

		if ( localStorage.getItem(priorKerdesID+"_skip") == "repeat" ) {
			document.getElementById('jegy').disabled = true;
		}

		if ( localStorage.getItem(priorKerdesID+'_fix') == "miss" ) {
			document.getElementById("buttonFix").style.backgroundColor = "lightpink";
		} else if ( localStorage.getItem(priorKerdesID+'_fix') == "fix" ) {
			document.getElementById("buttonFix").style.backgroundColor = "red";
		} else {
			document.getElementById("buttonFix").style.backgroundColor = "lightgrey";
		}

		var date = new Date();
		var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(priorKerdesID+'_idopont')

		if ( priorKerdesID+'_jegy' in localStorage ) {
			document.getElementById("pJegy").textContent = localStorage.getItem(priorKerdesID+'_jegy');
			if ( priorKerdesID+'_jegy' in localStorage ) {
				document.getElementById("repeat").textContent = idopont + " vs " + localStorage.getItem(priorKerdesID+'_repeat')
			} else {
				document.getElementById("repeat").textContent = "\xa0 \xa0"
			}
		}
	}

	func_calcJegy()
	func_calcDate()
	func_calcOldNew();
	func_calcRepeat()
}

/*function missFix(){
	if ( priorKerdesID != "nincs") {
		if ( document.getElementById("buttonFix").style.backgroundColor == "lightpink" ) {
			document.getElementById("buttonFix").style.backgroundColor = "red";
		} else if ( document.getElementById("buttonFix").style.backgroundColor == "red" ) {
			document.getElementById('jegy').disabled = true;
			document.getElementById("buttonFix").style.backgroundColor = "purple";
		} else {
			document.getElementById('jegy').disabled = false;
			if ( document.getElementById("buttonFix").style.backgroundColor == "lightgrey" ) {
				document.getElementById("buttonFix").style.backgroundColor = "lightpink";
			} else if ( document.getElementById("buttonFix").style.backgroundColor == "purple" ) {
				document.getElementById("buttonFix").style.backgroundColor = "lightgrey";
			}
		}
	}
}*/

function func_buttonFix(){
	if ( priorKerdesID != "nincs") {
		if ( document.getElementById("buttonFix").style.backgroundColor == "lightpink" ) {
			document.getElementById("buttonFix").style.backgroundColor = "red";
		} else if ( document.getElementById("buttonFix").style.backgroundColor == "red" ) {
			document.getElementById("buttonFix").style.backgroundColor = "lightgrey";
		} else {
			document.getElementById("buttonFix").style.backgroundColor = "lightpink";
		}
	}
}

/*function func_skipID(){
	if ( priorKerdesID != "nincs") {
		if ( document.getElementById("buttonSkip").style.backgroundColor == "black" ) {
			document.getElementById("buttonSkip").style.backgroundColor = "lightgrey";
		} else if ( document.getElementById("buttonSkip").style.backgroundColor == "lightgrey" ) {
			document.getElementById("buttonSkip").style.backgroundColor = "yellow";
		} else if ( document.getElementById("buttonSkip").style.backgroundColor == "yellow" ) {
			document.getElementById("buttonSkip").style.backgroundColor = "black";
		}
	}
}*/

function func_buttonSkip(){
	if ( priorKerdesID != "nincs") {
		if ( document.getElementById("buttonSkip").style.backgroundColor == "dodgerblue" ) {
			document.getElementById('jegy').disabled = true;
			document.getElementById("buttonSkip").style.backgroundColor = "black";
		} else {
			document.getElementById('jegy').disabled = false;
			if ( document.getElementById("buttonSkip").style.backgroundColor == "lightgrey" ) {
				document.getElementById("buttonSkip").style.backgroundColor = "yellow";
			} else if ( document.getElementById("buttonSkip").style.backgroundColor == "yellow" ) {
				document.getElementById("buttonSkip").style.backgroundColor = "dodgerblue";
			} else if ( document.getElementById("buttonSkip").style.backgroundColor == "black" ) {
				document.getElementById("buttonSkip").style.backgroundColor = "lightgrey";
			}
		}
	}
}


// innentől
function func_span(element,status){
	var string = ""
	for ( var id in table_Status ) {
		if ( table_Status[id] == status ) {
			string += id.slice(id.indexOf(".")+1) + ', '
		}
	}
	element.title = string
	func_showTooltip(element)
	//alert(string)
}
document.getElementById("btn_fix").onmouseout = function() {
	if ( tooltipStatus != "show" ) {
		tooltipSpan.style.visibility = "hidden";
	}
}
document.getElementById("btn_miss").onmouseout = function() {
	if ( tooltipStatus != "show" ) {
		tooltipSpan.style.visibility = "hidden";
	}
}
document.getElementById("btn_skip").onmouseout = function() {
	if ( tooltipStatus != "show" ) {
		tooltipSpan.style.visibility = "hidden";
	}
}
document.getElementById("btn_progress").onmouseout = function() {
	if ( tooltipStatus != "show" ) {
		tooltipSpan.style.visibility = "hidden";
	}
}
function func_spanSkip(){
	var string = ""
	for ( var id in table_StatusSkip ) {
		if ( table_StatusSkip[id] == "true" ) {
			string += id.slice(id.indexOf(".")+1) + ', '
		}
	}
	alert(string)
}
// idáig

func_calcOldNew();
func_calcJegy()
func_calcDate()
func_calcRepeat()















