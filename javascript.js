

/* FELADATOK
	(-) Skip funkció
	(-) jobbfelsőre klikkelve "úgy jelenjen ez meg, mint a kép" --> tehát 1 réteget tegyen rá az egészre --> mentse el, hogy álltam legutóbb, hogy refreshnél ne kelljen mindig újra klikkelni
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
	(-) legyen multi-kérdés: több kérdés egyszerre, külön számolja priorjukat ugye (legnagyobb alapján kerülhet kérdésbe), és megválaszolásukkor mindegyikét elmenti --> pl. aminosav: képlete?(HP) oldalláncának neve?(LP) 
	(-) kémiában (ahol megvannak adva a tételek), legyenek összetett kérdések. tehát a tételcímrészlet a kérdés. nekem erről eszembe kell jutni a válasznak. azért összetett, mert több pontos (nemcsak 1-4 osztályzás) (azaz több jegyet mentsen el egy feladaton belül!!. így a rankja is nagyobb, hiszen az a max pontok száma lesz). ha nemjut eszembe minden, attól még az adott alkérdésre kaphatok 50%nyi pontot ha tudtam azt is, csak elfelejtettem felhozni. végül a tétel státuszát (osztályzását), csak ezen kérdések alapján tegye.
	(-) LvL-ing UPGRADE
		(-) még annyi kéne, hogy a kérdések számát (a fehér/SZÜRKE/rózsaszínnél) úgy mutassa, hogy ezeket (azonos id, különböző lvl) egynek veszi, tehát csak az aktuálisat jelzi
		(-) új kérdések közül alapból mindig a legkisebb lvl-űt mutassa csak eleinte!
		(-) tételek színe: button border színe ez alapján legyen
	(-) 1kérdés lehessen többhelyen is a kódban, azonban a szöveg csak egy helyen legyen megadva hozzá (hogy csak egy helyen kelljen átírnom, ha változtatok rajta)
	(-) alján a func_span rész sztem buggos, tehát pl. nemhiszem hogy minden jól megy ott! majd amikor tesztelem már, mert tanulok akkor figyeljek rá
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
	(-) 1es Repeat 30perc után ha jó, akkor felezi a múltkori RepeatTimest
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

	(-) alertbe mutassa, ha valamely kérdésID üres már! és mellette localstoraget törölje!
	(-) miss/fix-nél növekvő sorrendbe nézze őket
	(-) lehessen beállítani: rövid_kérdés / hosszú_kérdés
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
	(-) DETAILS script
	(-) lehessen beállítani IF / RAJZ stb. kategóriát is
	(-) kérdést más html-ből olvassa be
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	(+) jelenleg akkoris megkapják a bónuszt +1et, ha időpont nem volt elég hozzá
	(+) tooltip az abbr-ban elrejtetteknél nem műxik
*/


/* Replace text (regular expression)
	<li><span class="WHITE">(.*?)</span>(.*?)</li>
	<div><font class="abbr"><span class="WHITE">\1</span> ►</font>\2</div>
*/


window.onerror = function(msg, url, linenumber) {
	//alert('Error message: '+msg+'\nLine Number: '+linenumber);
}



function func_removeRepeat(){ //ha már elkészült a script, és removeltam mind1iket törölhető ez a funkció! lentebb van rá egy hivatkozás azt is !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	for ( var fotema in kerdesID ) { 
		for ( var temaKerdes in kerdesID[fotema] ) { 
			for ( var kerdes in kerdesID[fotema][temaKerdes] ) {
				if ( kerdes+'_repeat' in localStorage ) {
					//localStorage.removeItem(kerdes+'_fix')
					if ( localStorage.getItem(kerdes+'_changes') == null ) {
						localStorage.setItem(kerdes+'_changes',1)
					}
					if ( 5 < localStorage.getItem(kerdes+'_repeat') ) {
						localStorage.setItem(kerdes+'_repeat', 5)
					}
				}
			}
		}
	}
}



function func_putZeroQBack() { // 0-repeaten állót új kérdésbe visszateszi, ha több mint 1 napja nem ismételtem
	for ( var fotema in kerdesID ) { 
		for ( var temaKerdes in kerdesID[fotema] ) { 
			if ( localStorage.getItem(fotema+" / "+temaKerdes+"_button") == "true" ) {
				for ( var kerdes in kerdesID[fotema][temaKerdes] ) {
					if ( kerdesID[fotema][temaKerdes][kerdes] == true ) {
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
			if ( localStorage.getItem(fotema+" / "+temaKerdes+"_button") == "true" ) {
				for ( var kerdes in kerdesID[fotema][temaKerdes] ) {
					if ( kerdesID[fotema][temaKerdes][kerdes] == true ) {
						var num = document.getElementById(kerdes).className.search("/");
						var prior = document.getElementById(kerdes).className.substring(num-1,num);
						var hossz = document.getElementById(kerdes).className.substring(num+1,num+2);
						var val = prior*hossz

						questCount = questCount +val
						allRepVal = allRepVal +val*Number(localStorage.getItem(kerdes+'_repeat'))
					}
				}
			}
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


// download funkció (netről copyztam) --> Save LS-nél ezt hívja le (azért kellett, mert androidon máshogy nemtudom lementeni)
function download(filename, text) {
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


function func_phaseID() {  // details_phase id-je lesz egyenlő a summary_phase textel
	var Table = document.getElementsByClassName("phase")
	for ( var i = 0;   i < Table.length;   i++ ) {
		Table[i].parentElement.id = Table[i].innerHTML
	}
	var Table = document.getElementsByClassName("phaseA")
	for ( var i = 0;   i < Table.length;   i++ ) {
		Table[i].parentElement.id = Table[i].innerHTML
	}
	var Table = document.getElementsByClassName("phaseB")
	for ( var i = 0;   i < Table.length;   i++ ) {
		Table[i].parentElement.id = Table[i].innerHTML
	}
	var Table = document.getElementsByClassName("phaseC")
	for ( var i = 0;   i < Table.length;   i++ ) {
		Table[i].parentElement.id = Table[i].innerHTML
	}
	var Table = document.getElementsByClassName("phaseD")
	for ( var i = 0;   i < Table.length;   i++ ) {
		Table[i].parentElement.id = Table[i].innerHTML
	}
}
func_phaseID()
function func_mainID() { // div_mainTitle id-je lesz egyenlő a div_mainTitle textel
	var Table = document.getElementsByClassName("mainTitle")
	for ( var i = 0;   i < Table.length;   i++ ) {
		Table[i].parentElement.id = Table[i].innerHTML
	}
}
func_mainID()
function func_titleID() { // div_title id-je lesz egyenlő a div_title textel + egy szám (ez azért kert, mert különben lennének azonos id-k)
	var Table = document.getElementsByClassName("title")
	for ( var i = 0;   i < Table.length;   i++ ) {
		Table[i].parentElement.id = i + "," + Table[i].innerHTML
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
	var temaKerdes = 	document.getElementById(id).parentElement.parentElement.id
	var fotema = 		document.getElementById(id).parentElement.parentElement.parentElement.id
	var kerdesNum = id.slice(id.indexOf(".")+1)
	if ( kerdesNum.indexOf("%") != -1 ) { // ha van % a kérdésID-ben
		kerdesNum = kerdesNum.slice(0,kerdesNum.indexOf("%")-1)
	}
	kerdesNum = Number(kerdesNum)


	if ( !temakor[fotema] ) {
		temakor[fotema]  = []
		kerdesID[fotema] = []
	}

	if ( !kerdesID[fotema][temaKerdes] ) {
		temakor[fotema][temakor[fotema].length] = temaKerdes
		kerdesID[fotema][temaKerdes] = []
	}
	kerdesID[fotema][temaKerdes][id] = true
	if ( kerdesNum > highestID ) { 
		highestID = kerdesNum
	}
	questCount = questCount +1 // egyenlőre csak Anat.html-nél számolom

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
		//localStorage.setItem(element,false)
	} else {
		button.style.borderColor = "limegreen"
		//localStorage.setItem(element,true)
	}
}


var timeDiff
function func_calcTimeDiff(repCount){
	if ( repCount == 0 ) {
		timeDiff = 20
	} else if ( repCount == 1 ) {
		timeDiff = 60
	} else if ( repCount == 2 ) {
		timeDiff = 150
	} else if ( repCount == 3 ) {
		timeDiff = 300
	} else if ( repCount == 4 ) {
		timeDiff = 500
	} else if ( repCount == 5 ) {
		timeDiff = 1000
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
		button.style.height = "23px";
		button.style.width = "30px";
		button.id = fotema+" / "+temaKerdes+"_button";

		var label = document.createElement("label")
		label.id = fotema+" / "+temaKerdes+"_button_label";
		var text = temaKerdes+"<br>"
		label.innerHTML = text.bold();

		button.onclick = function() {
			func_clickTemaButton(this);
			func_calcOldNew();
			func_calcDate()
			func_calcJegy()
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
					func_calcTimeDiff(repCount)

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


// LvL 
/*
var testTab = document.getElementById('select_lvl').getElementsByTagName('option')
for ( var i = 0; i < testTab.length; i++ ) {
	alert(testTab[i].value + " : " + testTab[i].text)
}
*/



// LvL BEGIN
var obj_LvL = []
for ( var f = 0;   f < elements.length;   f++ ) {
	var id = elements[f].id
	if ( id.indexOf("%") != -1 ) { // ha van % a kérdésID-ben
		var lvl = id.slice(id.indexOf("%")+1)
		var id = id.slice(0,id.indexOf("%")-1)
		if ( !obj_LvL[id] ) { 
			obj_LvL.push(id) 
			obj_LvL[id] = [] 
		}
		obj_LvL[id].push(lvl) 
	}
}

function func_checkLvL(id,lvl){
	document.getElementById("select_lvl").value = lvl
	var optionS = document.getElementById("select_lvl").children;
	for ( k = 0; k < optionS.length; k++ ) {
		optionS[k].style.backgroundColor = "grey"
		optionS[k].disabled = true;
	}
	for ( var f = 0; f < obj_LvL[id].length; f++ ) {
		var percent = obj_LvL[id][f]
		for ( k = 0; k < optionS.length; k++ ) {
			if ( optionS[k].value == percent ) {
				optionS[k].style.backgroundColor = "white"
				optionS[k].disabled = false;
			}
			if ( lvl == optionS[k].value ) {
				optionS[k].style.backgroundColor = "aqua"
			}
		}
	}
}
// LvL END





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

function func_abbrSet(){ // azt csináljam, hogy a li textet írja át alapból: <span tyle="color:0"> ..text.. <span>, majd amikor ráklikkelek removeolja a spant --> megmaradnak a pontok
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
			if ( this.parentElement.style.visibility != "visible" ) { 
				this.style.cursor = ""
				this.style.backgroundColor = "";
				this.parentElement.style.visibility = "visible"
			}
		}
	}
}
func_abbrSet()
/* ToolTip END */


func_removeRepeat()


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

var elements = document.getElementsByClassName("kerdes")
var obj_fixNote = [] // object (nem table és nem array!)
var obj_skip = [] // object (nem table és nem array!)

function func_tableSkipFix(){
	for ( var i = 0;   i < elements.length;   i++ ) {
		var id = elements[i].id
		//var temaKerdes = 	document.getElementById(id).parentElement.parentElement.id
		//var fotema = 		document.getElementById(id).parentElement.parentElement.parentElement.id

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
					var date = new Date();
					var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(kerdes+'_idopont')
					func_calcTimeDiff(repCount)

					if ( localStorage.getItem(kerdes+"_skip") == null ) {
						if ( localStorage.getItem(kerdes+"_jegy") >= 1 ) {
							if ( timeDiff >= idopont ) {
								repFast = repFast +1
							} else {
								repSlow = repSlow +1
							}
						} else if ( localStorage.getItem(kerdes+"_jegy") == null || localStorage.getItem(kerdes+"_jegy") == "" ) {
							kerdesNew = kerdesNew +1
						}
						
						if ( localStorage.getItem(kerdes+"_jegy") == 1 ) {

							if ( idopont < 20 ) {
								repOld = repOld +1
							} else {
								repNew = repNew +1
							}
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

  // BEGIN kerdesek visszahelyezése
	document.getElementById(priorKerdesID).open = false;
	document.getElementById(oldParent).appendChild(document.getElementById(priorKerdesID))
	var elotag = priorKerdesID.substring(0,priorKerdesID.indexOf('.')+1);
	if ( altKerdesIDs != null ) {
		for (k = 0; k < altKerdesIDs.length; k++) {
			document.getElementById(oldAltParents[k]).appendChild(document.getElementById(elotag+altKerdesIDs[k]))
		}
	}
  // END kerdesek visszahelyezése
	func_abbrSet()

  // BEGIN LvL // ha látható a % select, akkor megnézi az értékét, és elmenti az id-nek (pure ID! tehát nincs benne %)
	if ( document.getElementById("select_lvl").style.visibility == 'visible' ) { 
		var pureID = priorKerdesID.slice(0,priorKerdesID.indexOf("%")-1)
		var percent = document.getElementById("select_lvl").value
		localStorage.setItem(pureID+'_LvL', percent)
		document.getElementById("select_lvl").value = "empty"
	}
  // END LvL

	var skipValue = document.getElementById("skip").value
	if ( skipValue ) {
		localStorage.setItem(priorKerdesID+"_skip", skipValue)
	}

	var repCount = Number(localStorage.getItem(priorKerdesID+'_repeat'))
	var jegy = document.getElementById("jegy").value
	localStorage.setItem(priorKerdesID+'_jegy', jegy);
	var changes
	if ( repCount == jegy || jegy > repCount ) {
		changes = 1
	} else if ( jegy-repCount == -1  ) {
		changes = 1.5
	} else if ( jegy-repCount < -1  ) {
		changes = 2
	}
	localStorage.setItem(priorKerdesID+'_changes', changes);

	var date = new Date();
	var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(priorKerdesID+'_idopont')
	/*var timeDiff
	if ( repCount >= 3 ) {
		timeDiff = 1000 * (repCount-2)
	} else {
		timeDiff = 15 * Math.pow(4,repCount)
	}*/

	if ( jegy == 1 ) {
		repCount = repCount-2
	} else if ( jegy < repCount ) {
		repCount = repCount-1
	} else if ( jegy > repCount ) {
		repCount = repCount+1
	}
	if ( repCount < 0 ) {
		repCount = 0
	}
	if ( repCount > 5 ) {
		repCount = 5
	}
	localStorage.setItem(priorKerdesID+'_repeat', repCount)

	localStorage.setItem(priorKerdesID+'_idopont', Math.floor(date.getTime()/60000));
	localStorage.setItem(priorKerdesID+'_note', document.getElementById("note").value);

	document.getElementById("questTitle").innerHTML = "";		// hide előző megoldás

	func_tableSkipFix()
	func_valFix()
	func_valSkip()
	document.getElementById("jegy").value = ""
	document.getElementById("skip").value = ""
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




var fullTema
var priorKerdesID = "nincs"
var altKerdesIDs = {}
var checkNum
var cloneKerdes
var lastTime = 0
var oldParent
var oldAltParents = {}
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
		if ( 0 == document.getElementById('skip').value.length && 0 == document.getElementById("jegy").value.length ) {
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

							var shouldBreak = false
							if ( localStorage.getItem(kerdes+"_skip") ) {
								shouldBreak = true
							}
							
							if ( localStorage.getItem(kerdes+"_jegy") == "" || localStorage.getItem(kerdes+"_jegy") == null || isNaN(localStorage.getItem(kerdes+"_jegy")) == true ) {
								if ( shouldBreak == false ) {
									if ( document.getElementById("btn_newQuest").style.borderColor == "limegreen" && priorType < 2 ) {
										priorType = 2
										priorKerdesID = kerdes;
									}
								}
							}

							if ( priorType == 0 ) {
								priorType = 1
								priorValue = 0
							}

							if ( priorType == 1 && localStorage.getItem(kerdes+"_jegy") > 0 ) { // régi kérdés
								var date = new Date();
								var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(kerdes+'_idopont')
								var repCount = Number(localStorage.getItem(kerdes+'_repeat'))

								func_calcTimeDiff(repCount)

								if ( document.getElementById("cont_RepFast").style.borderColor != "limegreen" ) {
									if ( timeDiff > idopont ) {
										shouldBreak = true
									}
								}

								if ( kerdes.indexOf("%") != -1 ) { // ha van % a kérdésID-ben
									var percent = kerdes.slice(kerdes.indexOf("%")+1)
									var pureID = kerdes.slice(0,kerdes.indexOf("%")-1)
									if ( localStorage.getItem(pureID+'_LvL') != percent ) {
										shouldBreak = true
									}
								}
								
								if ( shouldBreak == false ) {

									var changes = localStorage.getItem(kerdes+'_changes')

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
									checkValue = changes * prior * idopont / timeDiff
									//checkValue = vLength * rank * idopont / timeDiff / jegy

									if ( checkValue > priorValue_X ) {
//										if ( localStorage.getItem(kerdes+"_skip") == "skip" ) {
//											if ( localStorage.getItem("checkboxSkip") == "true" ) {
//												priorValue_X = checkValue;
//												priorKerdesID_X = kerdes;
//											}
//										} else {
											priorValue_X = checkValue;
											priorKerdesID_X = kerdes;
//										}
									}
									if ( localStorage.getItem(kerdes+"_jegy") == markCount || markCount == 0 ) { 
										if ( checkValue > priorValue ) {
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
	if ( priorKerdesID == "nincs" ) {
		if ( priorKerdesID_X != "nincs" ) {
			priorKerdesID = priorKerdesID_X
		} else {
			alert("elfogytak a kérdések");
		}
	}
	if ( priorKerdesID != "nincs" ) {
		//fullTema = document.getElementById(priorKerdesID).parentElement.id
		
	  // set title – BEGIN 
		var titleText = ""
		/* főcímet nem szükséges mutatnia
		if ( document.getElementById(priorKerdesID).parentElement.parentElement.parentElement.nodeName == "DIV" ) {
			titleText = document.getElementById(priorKerdesID).parentElement.parentElement.parentElement.id + "<br>"
		}
		*/
		titleText = titleText + document.getElementById(priorKerdesID).parentElement.parentElement.id // phase Címet adja hozzá
		var titleID = document.getElementById(priorKerdesID).parentElement.id // phase Címet adja hozzá
		titleID = titleID.slice(titleID.indexOf(",")+1)
		if ( titleID != " " ) {
			titleText = titleText + " &#10140; " + titleID
		}

		/*var divChilds = document.getElementById(priorKerdesID).parentElement.children
		for (i = 0; i < divChilds.length; i++) { // title Címet adja hozzá
			if ( divChilds[i].className == "title" ) {
				if ( divChilds[i].innerHTML != " " ) {
					titleText = titleText + " &#10140; " + divChilds[i].innerHTML
				}
			}
		}*/
		document.getElementById("questTitle").innerHTML = titleText;
	  // END – set title

		var identity = priorKerdesID.slice(priorKerdesID.indexOf(".")+1) // identity az, amit kiír: pl. (130) ismerd fel
		var lvl = 0
		if ( identity.indexOf("%") != -1 ) { // ha van % a kérdésID-ben
			identity = identity.slice(0,identity.indexOf("%")-1)
			lvl = priorKerdesID.slice(priorKerdesID.indexOf("%")+1)
		}
		document.getElementById("questLeveL").innerHTML = "(" + identity + ")"

		// LeveL – BEGIN  
		if ( lvl != 0 ) {
			func_checkLvL(priorKerdesID.slice(0,priorKerdesID.indexOf("%")-1),lvl)
			document.getElementById("select_lvl").style.visibility = 'visible';
		} else {
			document.getElementById("select_lvl").style.visibility = 'hidden';
			lvl = 100
		}
		// END – LeveL

		var n = document.getElementById(priorKerdesID).className.search("open");
		if ( n != -1 ) {
			document.getElementById(priorKerdesID).open = true;
			var c = document.getElementById(priorKerdesID).children;
			var d = document.getElementById(priorKerdesID).parentNode.parentNode.children
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
					//if ( c[i].innerHTML.search("[?=]") == -1 ) {
					if ( c[i].innerHTML.slice(0,1) == "." ) {
						titleText = titleText + c[i].innerHTML.replace('.','')
						c[i].innerHTML = "kérdés"
						hide = true 
					}
				}
				if ( "UL" == c[i].tagName && "normal" == c[i].className && hide == true ) {
					c[i].insertAdjacentHTML('afterbegin', '<div><font class="abbr"><strong><span class="Important">►</span></font>'+titleText+'</strong></div>');
					c[i].open = false
					func_abbrSet()
				}
			}
		} else {
			document.getElementById(priorKerdesID).open = false;
		}

	  // BEGIN kerdes(ek) áthelyezése 
		var string_Class = document.getElementById(priorKerdesID).className
		string_Class = string_Class.substring(0,string_Class.search("/")-1);
		string_Class = string_Class.substring(0,string_Class.search("%")-2);
		altKerdesIDs = string_Class.match(/\d+/g)

		  // BEGIN pl. 145-149 kérdéseket adja hozzá (ne kelljen őket felsorolnom egyesével html-ben) 
			function isNumeric(n) {
				return !isNaN(parseFloat(n)) && isFinite(n);
			}
			if ( string_Class.search("-") != -1 ) {
				var x = 0
				do {
					x = x+1
				}
				while ( isNumeric(string_Class.substring(string_Class.search("-")-x-1,string_Class.search("-")-x)) == true )
				var begin = Number(string_Class.substring(string_Class.search("-")-x,string_Class.search("-")))

				var x = 0
				do {
					x = x+1
				}
				while ( isNumeric(string_Class.substring(string_Class.search("-")+x, string_Class.search("-")+x+1)) == true )
				var end = Number(string_Class.substring(string_Class.search("-")+1,string_Class.search("-")+x))

				do {
					begin = begin+1
					altKerdesIDs.push(begin)
				}
				while ( begin+1 < end )
			}
		  // END (ennek annyi hibája van, hogy egyenlőre csak 1db kötőjeles lehet benne, tehát 145-149 152-156 nemjó)

		var elotag = priorKerdesID.substring(0,priorKerdesID.indexOf('.')+1);

		oldParent = document.getElementById(priorKerdesID).parentElement.id
		document.getElementById("kerdeslocation").appendChild(document.getElementById(priorKerdesID))

		if ( altKerdesIDs != null ) {
			for (k = 0; k < altKerdesIDs.length; k++) {
				oldAltParents[k] = document.getElementById(elotag+altKerdesIDs[k]).parentElement.id
				document.getElementById("kerdeslocation").appendChild(document.getElementById(elotag+altKerdesIDs[k]))
			}
		}
	  // END kerdes(ek) áthelyezése 


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


		if ( localStorage.getItem(priorKerdesID+'_note') == " " ) {
			localStorage.setItem(priorKerdesID+'_note', "");
		}
		if ( localStorage.getItem(priorKerdesID+'_note') != "" && localStorage.getItem(priorKerdesID+'_note') != null ) {
			document.getElementById("note").value = localStorage.getItem(priorKerdesID+'_note')
			document.getElementById("btn_Note").style.borderColor = "red";
			var_note = true
		} else {
			document.getElementById("btn_Note").style.borderColor = "black";
			var_note = false
		}

		/*if ( localStorage.getItem(priorKerdesID+"_skip") == "repeat" ) {
			document.getElementById('jegy').disabled = true;
		}*/

		/*if ( localStorage.getItem(priorKerdesID+'_fix') == "miss" ) {
			document.getElementById("buttonFix").style.backgroundColor = "lightpink";
		} else if ( localStorage.getItem(priorKerdesID+'_fix') == "fix" ) {
			document.getElementById("buttonFix").style.backgroundColor = "red";
		} else {
			document.getElementById("buttonFix").style.backgroundColor = "lightgrey";
		}*/

		var date = new Date();
		var idopont = Math.floor(date.getTime()/60000) - localStorage.getItem(priorKerdesID+'_idopont')

		if ( priorKerdesID+'_jegy' in localStorage ) {
			document.getElementById("repeat").textContent = idopont
			document.getElementById("pJegy").textContent = localStorage.getItem(priorKerdesID+'_repeat');
			if ( localStorage.getItem(priorKerdesID+'_jegy') == 1 ) {
				document.getElementById("pJegy").style.backgroundColor = "red"
				document.getElementById("pJegy").style.color = "white"
			} else if ( localStorage.getItem(priorKerdesID+'_changes') == 1.5 ) {
				document.getElementById("pJegy").style.backgroundColor = "pink"
				document.getElementById("pJegy").style.color = "black"
			} else {
				document.getElementById("pJegy").style.backgroundColor = "white"
				document.getElementById("pJegy").style.color = "black"
			}
		} else {
			document.getElementById("repeat").textContent = "\xa0 \xa0"
		}
	}

	func_calcJegy()
	func_calcDate()
	func_calcOldNew()
	func_calcRepeat()

}

func_putZeroQBack();
func_calcOldNew();
func_calcJegy()
func_calcDate()
func_calcRepeat()































