
/* FELADATOK
	(-) 5secen belül ne lehessen következő kérdésre klikkelni
	(-) rank: html-ben adjam meg (x/3 < x/1,5 < x < 1,5x < 3x), csak azét mutassa melyiké nem x
	(-) 3óránként növekedhessen a timeDiff-jük, amennyiben elérték legalább azt
	(-) 1es és 2es jegy lehet nem feltétlen kell visszaállítsa 0ra a timeDiff-jük (ezen még gondolkodom, hogy lenne pontos)
	
	(-) lehessen visszatölteni az előző kérdést (jegyek stb-t is töltse vissza localstoragebe)
	(-) repeatre állított kérdést mindenképp dobhassa, ne legyen feltétele a kérdés tételének aktivitása
	(-) ha jegynek/ranknak nem jót írtam alert!
	(-) altételcímet ne feltétlen mutassa

	(-) ABBR script
	(-) kép 
		addig terjedhet ki balra, amíg szövegbe nem ütközik, de min 40%-ot kaphat.
		kép oldala piros-színű legyen, ha le lett a fennti miatt kicsinyítve.
		középső-klikkre nyissa meg újablak.
	(-) kémiában (ahol megvannak adva a tételek), legyenek összetett kérdések. tehát a tételcímrészlet a kérdés. nekem erről eszembe kell jutni a válasznak. azért összetett, mert több pontos (nemcsak 1-4 osztályzás) (azaz több jegyet mentsen el egy feladaton belül!!. így a rankja is nagyobb, hiszen az a max pontok száma lesz). ha nemjut eszembe minden, attól még az adott alkérdésre kaphatok 50%nyi pontot ha tudtam azt is, csak elfelejtettem felhozni. végül a tétel státuszát (osztályzását), csak ezen kérdések alapján tegye.

	(-) 1kérdés lehessen többhelyen is, és a kódban azonban csak a szöveg egy helyen legyen megadva hozzá (hogy csak egy helyen kelljen átírnom, ha változtatok rajta)
	(-) alertbe mutassa, ha valamely kérdésID üres már! és mellette localstoraget törölje!
	(-) miss/fix-nél növekvő sorrendbe nézze őket
	(-) lehessen beállítani: rövid_kérdés / hosszú_kérdés

	(-) DETAILS script
	(-) lehessen beállítani IF / RAJZ stb. kategóriát is
	(-) hide all onClick: jobb felső kérdésszám buttonra klikkelve mindent hideljen el, és showolja a következő kérdést majd, ne copyzza!
	(-) lehessen látni jegy(1-2-3) hány feladat van és ki lehessen jelölni /checkbox/ melyeket akarom (ez nembiztos kell)
	(-) kérdést más html-ből olvassa be
*/




/*window.onerror = function(msg, url, linenumber) {
	 alert('Error message: '+msg+'\nLine Number: '+linenumber);
	 return true;
 }*/

//ha már elkészült a script, és removeltam mind1iket törölhető ez a funkció! lentebb van rá egy hivatkozás azt is !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function func_removeRepeat(){ 
	for ( var fotema in kerdesID ) { 
		for ( var temaKerdes in kerdesID[fotema] ) { 
			for ( var kerdes in kerdesID[fotema][temaKerdes] ) {
				/*if ( kerdes+'_timeDiff' in localStorage ) {
					if ( localStorage.getItem(kerdes+'_jegy') == "1" || localStorage.getItem(kerdes+'_jegy') == "2" ) {
						localStorage.setItem(kerdes+'_timeDiff', 30)
					}
				}*/
				localStorage.setItem(kerdes+'_timeDiff', "0")
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

						var vClass = document.getElementById(kerdes).className
						var vLength = vClass.match(/^\d+|\d+\b|\d+(?=\w)/g)
						if ( vLength == null ) {
							vLength = 1
						}

						if ( localStorage.getItem(kerdes+'_rank') != 'J' & localStorage.getItem(kerdes+'_rank') != 'j' ) {
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
							maxJegy = maxJegy + localStorage.getItem(kerdes+'_rank') * 10 * vLength
							trueJegy = trueJegy + localStorage.getItem(kerdes+'_rank') * jegy * vLength
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
							var min_diff = date.getMinutes() - localStorage.getItem(kerdes+'_min');
							var hour_diff = date.getHours() - localStorage.getItem(kerdes+'_hour');
							var day_diff = date.getDate() - localStorage.getItem(kerdes+'_day');
							var month_diff = 1 + date.getMonth() - localStorage.getItem(kerdes+'_month');
							var year_diff = date.getFullYear() - localStorage.getItem(kerdes+'_year');
							var idopont = min_diff + hour_diff*60 + day_diff*24*60 + month_diff*30*24*60 + year_diff*365*30*24*60; // kicsit hibás, mert egy honap nem feltétlen 30nap illetve év se 365
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




// képnagyítás balKlikkel középre
var imagesAll = document.images
var imgStatus
document.body.onclick=function(){
	if ( imgStatus == "hide" ) {
		centerImage.style.visibility = "hidden"
	}
	if ( imgStatus == "show" ) {
		imgStatus = "hide"
	}
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
		minorID = majorID.slice(0,majorID.indexOf(".")) + ". " + minorID
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
	//var j = kerdesID[fotema][temaKerdes].length // ez lehet fölös és törölhetem (mármint ezt az 1 sort)
	kerdesID[fotema][temaKerdes][id] = true
	
	if ( Number(id.slice(id.indexOf(".")+1)) > highestID ) { 
		highestID = Number(id.slice(id.indexOf(".")+1))
	}

	if ( !usedID[id] ) {
		usedID[id] = true
	} else {
		alert("foglalt az id már:"+id)
	}
}
document.getElementById("input_toggleAll").value = highestID







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

// témakör checkboxok
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
				var vClass = document.getElementById(kerdes).className
				var vLength = vClass.match(/^\d+|\d+\b|\d+(?=\w)/g)
				if ( vLength == null ) {
					vLength = 1
				}
				var rank = localStorage.getItem(kerdes+'_rank')
				if ( rank == null ) {
					rank = 3
					jegy = 0
				}
				if ( localStorage.getItem(kerdes+'_rank') != 'J' & localStorage.getItem(kerdes+'_rank') != 'j' ) {
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
					var min_diff = date.getMinutes() - localStorage.getItem(kerdes+'_min');
					var hour_diff = date.getHours() - localStorage.getItem(kerdes+'_hour');
					var day_diff = date.getDate() - localStorage.getItem(kerdes+'_day');
					var month_diff = 1 + date.getMonth() - localStorage.getItem(kerdes+'_month');
					var year_diff = date.getFullYear() - localStorage.getItem(kerdes+'_year');
					var idopont = min_diff + hour_diff*60 + day_diff*24*60 + month_diff*30*24*60 + year_diff*365*30*24*60; // kicsit hibás, mert egy honap nem feltétlen 30nap illetve év se 365

					var timeDiff = 30
					if ( kerdes+'_timeDiff' in localStorage ) {
						if ( localStorage.getItem(kerdes+'_timeDiff') > 1 ) {
							timeDiff = localStorage.getItem(kerdes+'_timeDiff')
						}
						trueJegy = trueJegy + Math.pow(0.8, idopont / timeDiff) * rank * jegy * vLength
					}
					
					
					maxJegy = maxJegy + rank * 10 * vLength
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
			var min_diff = date.getMinutes() - localStorage.getItem(kerdes+'_min');
			var hour_diff = date.getHours() - localStorage.getItem(kerdes+'_hour');
			var day_diff = date.getDate() - localStorage.getItem(kerdes+'_day');
			var month_diff = 1 + date.getMonth() - localStorage.getItem(kerdes+'_month');
			var year_diff = date.getFullYear() - localStorage.getItem(kerdes+'_year');
			/*if ( kerdes == "sb.333" ) {
				alert(date.getMonth())
				alert(localStorage.getItem(kerdes+'_month_1') + " - " + date.getMonth())
				alert(count + " + " + kerdes + " + " + month_diff + " + " + idopont)
			}*/ //333
			var idopont = min_diff + hour_diff*60 + day_diff*24*60 + month_diff*30*24*60 + year_diff*365*30*24*60; // kicsit hibás, mert egy honap nem feltétlen 30nap illetve év se 365
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


/* tooltip
var abbrok = document.getElementsByTagName("ABBR");
for(var i = 0; i < abbrok.length; i++) {
	abbrok[i].onclick = function () {
		alert(abbrok[i].title) //nemjó, mert mindig a legelsőjét mutatja
	}
}*/


// checkboxok: missFix & skipID
document.getElementById("checkbox_skipID").onclick = function() {
	if ( this.checked ) {
		localStorage.setItem(this.id,true)
	} else {
		localStorage.setItem(this.id,false)
	}
}
document.getElementById("miss_checkbox").onclick = function() {
	if ( this.checked ) {
		localStorage.setItem(this.id,true)
	} else {
		localStorage.setItem(this.id,false)
	}
}
document.getElementById("fix_checkbox").onclick = function() {
	if ( this.checked ) {
		localStorage.setItem(this.id,true)
	} else {
		localStorage.setItem(this.id,false)
	}
}
document.getElementById("progress_checkbox").onclick = function() {
	if ( this.checked ) {
		localStorage.setItem(this.id,true)
	} else {
		localStorage.setItem(this.id,false)
	}
}
document.getElementById("checkbox_New").onclick = function() {
	if ( this.checked ) {
		localStorage.setItem(this.id,true)
	} else {
		localStorage.setItem(this.id,false)
	}
}
document.getElementById("checkbox_RepNew").onclick = function() {
	if ( this.checked ) {
		localStorage.setItem(this.id,true)
	} else {
		localStorage.setItem(this.id,false)
	}
}
if ( localStorage.getItem("checkbox_skipID") == "true" ) {
	document.getElementById("checkbox_skipID").checked = true;
}
if ( localStorage.getItem("miss_checkbox") == "true" ) {
	document.getElementById("miss_checkbox").checked = true;
}
if ( localStorage.getItem("fix_checkbox") == "true" ) {
	document.getElementById("fix_checkbox").checked = true;
}
if ( localStorage.getItem("progress_checkbox") == "true" ) {
	document.getElementById("progress_checkbox").checked = true;
}
if ( localStorage.getItem("checkbox_New") == "true" ) {
	document.getElementById("checkbox_New").checked = true;
}
if ( localStorage.getItem("checkbox_RepNew") == "true" ) {
	document.getElementById("checkbox_RepNew").checked = true;
}

var elements = document.getElementsByClassName("kerdes")
var table_Status = []
var table_StatusSkip = []
for ( var i = 0;   i < elements.length;   i++ ) {
	var id = elements[i].id
	var temaKerdes = 	document.getElementById(id).parentElement.parentElement.parentElement.id
	var fotema = 		document.getElementById(id).parentElement.parentElement.parentElement.parentElement.id
	var cimTitle = id.slice(id.indexOf(".")+1)
	
	table_Status[id] = localStorage.getItem(id + "_missFix")
	table_StatusSkip[id] = localStorage.getItem(id + "_skip")
	if ( localStorage.getItem(id + "_missFix") == "progress" ) {
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
	document.getElementById("show_"+status).value = x;
}
func_valStatus("fix");
func_valStatus("miss");
func_valStatus("progress");

function func_valStatusSkip(){
	var x = 0
	var y = 0
	for ( var id in table_StatusSkip ) {
		if ( table_StatusSkip[id] == "skip" ) {
			x = x+1
		}
	}
	document.getElementById("show_skipID").value = x;
	
}
func_valStatusSkip();


function func_calcOldNew(){
	var kerdesNew = 0
	var kerdesOld = 0
	var repNew = 0
	var repOld = 0
	for ( var fotema in kerdesID ) {
		for ( var temaKerdes in kerdesID[fotema] ) {
			if ( localStorage.getItem(fotema+" / "+temaKerdes+"_button") == "true" ) {
				for ( var kerdes in kerdesID[fotema][temaKerdes] ) {
					if ( localStorage.getItem(kerdes+"_jegy") >= 1 ) {
						kerdesOld = kerdesOld +1
					} else {
						if ( table_Status[kerdes] != "progress" ) {
							kerdesNew = kerdesNew +1
						}
					}
					if ( localStorage.getItem(kerdes + "_skip") == "repeat" ) {
						var date = new Date();
						var min_diff = date.getMinutes() - localStorage.getItem(kerdes+'_min');
						var hour_diff = date.getHours() - localStorage.getItem(kerdes+'_hour');
						var day_diff = date.getDate() - localStorage.getItem(kerdes+'_day');
						var month_diff = 1 + date.getMonth() - localStorage.getItem(kerdes+'_month');
						var year_diff = date.getFullYear() - localStorage.getItem(kerdes+'_year');
						var idopont = min_diff + hour_diff*60 + day_diff*24*60 + month_diff*30*24*60 + year_diff*365*30*24*60; // kicsit hibás, mert egy honap nem feltétlen 30nap illetve év se 365

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
	document.getElementById("cont_New").innerHTML = kerdesNew
	document.getElementById("cont_Old").innerHTML = kerdesOld 
	document.getElementById("cont_RepNew").innerHTML = repNew;
	document.getElementById("cont_RepOld").innerHTML = repOld;
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


function func_prevQuestion(){
	func_markCount(document.getElementById("jegy").value);
	if ( document.getElementById("button_missFix").style.backgroundColor == "purple" ) {
		localStorage.setItem(priorKerdesID+'_jegy', "");
		localStorage.setItem(priorKerdesID+'_rank', "");
		localStorage.setItem(priorKerdesID + "_missFix","progress")

		table_Status[priorKerdesID] = "progress"
		var temaKerdes = 	document.getElementById(priorKerdesID).parentElement.parentElement.parentElement.id
		var fotema = 		document.getElementById(priorKerdesID).parentElement.parentElement.parentElement.parentElement.id
		kerdesID[fotema][temaKerdes][priorKerdesID] = false
	} else {
		localStorage.setItem(priorKerdesID+'_rank', document.getElementById("rank").value);

		if ( priorKerdesID+'_jegy' in localStorage ) {
			if ( document.getElementById("jegy").value == "3" || document.getElementById("jegy").value == "4" ) {
				localStorage.setItem(priorKerdesID+'_jegyDiff', "good");
			} else {
				localStorage.setItem(priorKerdesID+'_jegyDiff', "bad");
			}
		}
		localStorage.setItem(priorKerdesID+'_jegy', document.getElementById("jegy").value);
		if ( document.getElementById("button_missFix").style.backgroundColor == "lightgrey" ) {
			table_Status[priorKerdesID] = "normal"
			localStorage.setItem(priorKerdesID + "_missFix","")
		} else if ( document.getElementById("button_missFix").style.backgroundColor == "lightpink" ) {
			table_Status[priorKerdesID] = "miss"
			localStorage.setItem(priorKerdesID + "_missFix","miss") 
		} else if ( document.getElementById("button_missFix").style.backgroundColor == "red" ) {
			table_Status[priorKerdesID] = "fix"
			localStorage.setItem(priorKerdesID + "_missFix","fix")
		}
	}

	if ( document.getElementById("button_skipID").style.backgroundColor == "black" ) {
		localStorage.setItem(priorKerdesID+"_skip","skip")
	} else if ( document.getElementById("button_skipID").style.backgroundColor == "yellow" ) {
		localStorage.setItem(priorKerdesID+"_skip","repeat")
	} else if ( document.getElementById("button_skipID").style.backgroundColor == "lightgrey" ) {
		localStorage.setItem(priorKerdesID+"_skip","false")
	}

	var date = new Date();
	if ( priorKerdesID+'_jegyDiff' in localStorage ) {
		var min_diff = date.getMinutes() - localStorage.getItem(priorKerdesID+'_min');
		var hour_diff = date.getHours() - localStorage.getItem(priorKerdesID+'_hour');
		var day_diff = date.getDate() - localStorage.getItem(priorKerdesID+'_day');
		var month_diff = 1 + date.getMonth() - localStorage.getItem(priorKerdesID+'_month');
		var year_diff = date.getFullYear() - localStorage.getItem(priorKerdesID+'_year');
		var idopont = min_diff + hour_diff*60 + day_diff*24*60 + month_diff*30*24*60 + year_diff*365*30*24*60; // kicsit hibás, mert egy honap nem feltétlen 30nap illetve év se 365

		var numberX = Number(localStorage.getItem(priorKerdesID+'_timeDiff'))
		
		if ( numberX < 30 || localStorage.getItem(priorKerdesID+'_timeDiff') === "0" ) {
			if ( idopont > 30 ) {
				idopont = 30
			}
		/*} else if ( numberX > 30 || numberX == 30 ) {
			if ( idopont > 50 ) {
				idopont = 50
			}*/
		} else {
			var asdNum = Math.floor(numberX/50)
			asdNum = (asdNum+1)*50
			if ( idopont > asdNum ) {
				idopont = asdNum
			}
			if ( idopont > 200 ) {
				idopont = 200
			}
		}
		if ( idopont < numberX ) {
			idopont = numberX
		}
		//alert(idopont)
		
		/*
		//alert(idopont + " " + localStorage.getItem(priorKerdesID+'_timeDiff'))
		if ( localStorage.getItem(priorKerdesID+'_timeDiff') === "0" ) {
			//alert("0")
			if ( idopont > 30 ) {
				idopont = 30
			}
		} else if ( numberX < 30 && idopont > 30 ) {
			idopont = 30
		} else if ( numberX == 30 ) {
			//alert("30")
			if ( idopont > 200 ) {
				idopont = 200
			}
		} else {
			//alert("else")
			var xyz = 200+numberX
			if ( idopont > xyz ) {
				//alert(idopont + " " + localStorage.getItem(priorKerdesID+'_timeDiff'))
				idopont = xyz
				//alert(idopont + " " + localStorage.getItem(priorKerdesID+'_timeDiff'))
			}
		}
		*/

		//alert(localStorage.getItem(priorKerdesID+'_jegyDiff'))
		if ( localStorage.getItem(priorKerdesID+'_jegyDiff') == "bad" ) {
			localStorage.setItem(priorKerdesID+'_timeDiff', "0");
		} else {
			localStorage.setItem(priorKerdesID+'_timeDiff', idopont);
		}
		//alert(localStorage.getItem(priorKerdesID+'_timeDiff'))
	}
	localStorage.setItem(priorKerdesID+'_min', date.getMinutes());
	localStorage.setItem(priorKerdesID+'_hour', date.getHours());
	localStorage.setItem(priorKerdesID+'_day', date.getDate());
	localStorage.setItem(priorKerdesID+'_month', 1 + date.getMonth());
	localStorage.setItem(priorKerdesID+'_year', date.getFullYear());

	localStorage.setItem(priorKerdesID+'_note', document.getElementById("note").value);

	document.getElementById("questTitle").innerHTML = "";		// hide előző megoldás
	document.getElementById("kerdeslocation").style.display = 'none';								// hide előző megoldás
	
	func_valStatus("fix");
	func_valStatus("miss");
	func_valStatus("progress");
	func_valStatusSkip();
	document.getElementById("jegy").value = ""
	document.getElementById("rank").value = ""
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
var checkNum
var cloneKerdes
function koviKerdes(){
	// előző kérdés
	if ( priorKerdesID != "nincs" ) {
		if ( false == document.getElementById('jegy').disabled && 0 == document.getElementById("jegy").value.length ) {
			alert("nincs jegy (1<2<3<4)")
			return
		}
		if ( false == document.getElementById('rank').disabled && 0 == document.getElementById("rank").value.length ) {
			alert("nincs rank(1<2<3<4<5)")
			return
		}
		func_prevQuestion();
	}

	// kovetkező kérdés
	document.getElementById("jegy").value = "";
	document.getElementById("rank").value = "";
	document.getElementById("repeat").innerHTML = "&nbsp; &nbsp;";
	priorKerdesID = "nincs";
	var priorKerdesID_X = "nincs"
	var priorValue = -1
	var priorValue_X = -1
	var priorType = 0
	var checkValue = 0
	
	function func_checkStatus(status){
		if ( priorKerdesID == "nincs" && localStorage.getItem(status+"_checkbox") == "true" ) {
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

							if ( localStorage.getItem("checkbox_RepNew") == "true" && priorType < 3 && localStorage.getItem(kerdes+"_skip") == "repeat" ) {
								var date = new Date();
								var min_diff = date.getMinutes() - localStorage.getItem(kerdes+'_min');
								var hour_diff = date.getHours() - localStorage.getItem(kerdes+'_hour');
								var day_diff = date.getDate() - localStorage.getItem(kerdes+'_day');
								var month_diff = 1 + date.getMonth() - localStorage.getItem(kerdes+'_month');
								var year_diff = date.getFullYear() - localStorage.getItem(kerdes+'_year');
								var idopont = min_diff + hour_diff*60 + day_diff*24*60 + month_diff*30*24*60 + year_diff*365*30*24*60; // kicsit hibás, mert egy honap nem feltétlen 30nap illetve év se 365

								if ( idopont > 30 ) {
									priorType = 3
									priorKerdesID = kerdes;
								}
							}

							if ( localStorage.getItem(kerdes+"_jegy") == null || isNaN(localStorage.getItem(kerdes+"_jegy")) == true ) {
								if ( localStorage.getItem("checkbox_New") == "true" && priorType < 2 ) {
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
								var min_diff = date.getMinutes() - localStorage.getItem(kerdes+'_min');
								var hour_diff = date.getHours() - localStorage.getItem(kerdes+'_hour');
								var day_diff = date.getDate() - localStorage.getItem(kerdes+'_day');
								var month_diff = 1 + date.getMonth() - localStorage.getItem(kerdes+'_month');
								var year_diff = date.getFullYear() - localStorage.getItem(kerdes+'_year');
								var idopont = min_diff + hour_diff*60 + day_diff*24*60 + month_diff*30*24*60 + year_diff*365*30*24*60; // kicsit hibás, mert egy honap nem feltétlen 30nap illetve év se 365

								var shouldBreak = false
								if ( kerdes+'_timeDiff' in localStorage ) {
									if ( localStorage.getItem(kerdes+'_timeDiff') > idopont && localStorage.getItem(kerdes+'_jegyDiff') == "good" ) {
										//shouldBreak = true
									}
								}
								if ( 31 > idopont ) {
									shouldBreak = true
								}
								
								if ( shouldBreak == false ) {
									var jegy = localStorage.getItem(kerdes+'_jegy')
									var rank = localStorage.getItem(kerdes+'_rank')

									var timeDiff = 30
									if ( kerdes+'_timeDiff' in localStorage ) {
										if ( localStorage.getItem(kerdes+'_jegy') == "3" || localStorage.getItem(kerdes+'_jegy') == "4" ) {
											timeDiff = localStorage.getItem(kerdes+'_timeDiff')
										}
									}

									var vClass = document.getElementById(kerdes).className
									var vLength = vClass.match(/^\d+|\d+\b|\d+(?=\w)/g)
									if ( vLength == null ) {
										vLength = 1
									}

									if ( rank == "J" || rank == "j" ) {
										rank = 3
									}

									//checkValue = rank / Math.pow(0.8, idopont / timeDiff) / jegy
									checkValue = rank * idopont / timeDiff / jegy
									//checkValue = vLength * rank * idopont / timeDiff / jegy

									if ( checkValue > priorValue_X ) {
										if ( localStorage.getItem(kerdes+"_skip") == "skip" ) {
											if ( localStorage.getItem("checkbox_skipID") == "true" ) {
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
												if ( localStorage.getItem("checkbox_skipID") == "true" ) {
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
		document.getElementById("questTitle").innerHTML = "(" + cimTitle + ") " + fullTema.slice(0,fullTema.indexOf("/")) + ": " + fullTema.slice(fullTema.indexOf("/")+1,fullTema.indexOf(".")) + " &#10140; " + fullTema.slice(fullTema.indexOf(".")+1);

		//cloneKerdes = document.getElementById(priorKerdesID).cloneNode(true);
		//cloneKerdes.id = "clone";
		//document.getElementById("kerdeslocation").appendChild(cloneKerdes)
		//cloneKerdes.style.display = 'block';
		document.getElementById("kerdeslocation").innerHTML = document.getElementById(priorKerdesID).innerHTML;
		document.getElementById("kerdeslocation").style.display = 'block';
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
		var n = document.getElementById(priorKerdesID).className.search("open");
		if ( n != -1 ) {
			document.getElementById("kerdeslocation").open = true;
			var c = document.getElementById("kerdeslocation").children;
			for (i = 0; i < c.length; i++) {
				if ( "SUMMARY" == c[i].tagName ) {
					c[i].innerHTML = "kérdés"
				}
				if ( "UL" == c[i].tagName ) {
					var x = c[i].children;
					for (j = 0; j < x.length; j++) {
						//alert(x[j].tagName)
						if ( "DETAILS" == x[j].tagName ) {
							x[j].open = false
						}
					}
				}
			}
		} else {
			document.getElementById("kerdeslocation").open = false;
		}

		if ( localStorage.getItem(priorKerdesID+"_skip") == "skip" ) {
			document.getElementById("button_skipID").style.backgroundColor = "black"
		} else {
			document.getElementById("button_skipID").style.backgroundColor = "lightgrey"
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

		if ( localStorage.getItem(priorKerdesID+'_missFix') == "progress" || localStorage.getItem(priorKerdesID+"_skip") == "repeat" ) {
			document.getElementById('jegy').disabled = true;
			document.getElementById('rank').disabled = true;
			if ( localStorage.getItem(priorKerdesID+'_missFix') == "progress" ) {
				document.getElementById("button_missFix").style.backgroundColor = "purple";
			}
		} else {
			document.getElementById('jegy').disabled = false;
			document.getElementById('rank').disabled = false;
			if ( localStorage.getItem(priorKerdesID+'_missFix') == "miss" ) {
				document.getElementById("button_missFix").style.backgroundColor = "lightpink";
			} else if ( localStorage.getItem(priorKerdesID+'_missFix') == "fix" ) {
				document.getElementById("button_missFix").style.backgroundColor = "red";
			} else {
				document.getElementById("button_missFix").style.backgroundColor = "lightgrey";
			}
		}

		var date = new Date();
		var min_diff = date.getMinutes() - localStorage.getItem(priorKerdesID+'_min');
		var hour_diff = date.getHours() - localStorage.getItem(priorKerdesID+'_hour');
		var day_diff = date.getDate() - localStorage.getItem(priorKerdesID+'_day');
		var month_diff = 1 + date.getMonth() - localStorage.getItem(priorKerdesID+'_month');
		var year_diff = date.getFullYear() - localStorage.getItem(priorKerdesID+'_year');
		var idopont = min_diff + hour_diff*60 + day_diff*24*60 + month_diff*30*24*60 + year_diff*365*30*24*60; // kicsit hibás, mert egy honap nem feltétlen 30nap illetve év se 365
		/*if ( 60 > idopont ) {
			document.getElementById('jegy').disabled = true;
			document.getElementById('rank').disabled = true;
		}*/

		if ( priorKerdesID+'_jegy' in localStorage ) {
			document.getElementById("jegy").value = localStorage.getItem(priorKerdesID+'_jegy');
			document.getElementById("rank").value = localStorage.getItem(priorKerdesID+'_rank');
			if ( priorKerdesID+'_jegy' in localStorage ) {
				if ( priorKerdesID+'_timeDiff' in localStorage ) {
					document.getElementById("repeat").textContent = idopont + " vs " + localStorage.getItem(priorKerdesID+'_timeDiff')
				} else {
					document.getElementById("repeat").textContent = idopont
				}
				if ( localStorage.getItem(priorKerdesID+'_jegyDiff') == "good" ) {
					document.getElementById("repeat").className = "done";
				} else {
					document.getElementById("repeat").className = "white";
				}
			} else {
				document.getElementById("repeat").textContent = "\xa0 \xa0"
			}
		}
	}

	func_calcJegy()
	func_calcDate()
	func_calcOldNew();
}

function missFix(){
	if ( priorKerdesID != "nincs") {
		if ( document.getElementById("button_missFix").style.backgroundColor == "lightpink" ) {
			document.getElementById("button_missFix").style.backgroundColor = "red";
		} else if ( document.getElementById("button_missFix").style.backgroundColor == "red" ) {
			document.getElementById('jegy').disabled = true;
			document.getElementById('rank').disabled = true;
			document.getElementById("button_missFix").style.backgroundColor = "purple";
		} else {
			document.getElementById('jegy').disabled = false;
			document.getElementById('rank').disabled = false;
			if ( document.getElementById("button_missFix").style.backgroundColor == "lightgrey" ) {
				document.getElementById("button_missFix").style.backgroundColor = "lightpink";
			} else if ( document.getElementById("button_missFix").style.backgroundColor == "purple" ) {
				document.getElementById("button_missFix").style.backgroundColor = "lightgrey";
			}
		}
	}
}

function func_skipID(){
	if ( priorKerdesID != "nincs") {
		if ( document.getElementById("button_skipID").style.backgroundColor == "black" ) {
			document.getElementById("button_skipID").style.backgroundColor = "lightgrey";
		} else if ( document.getElementById("button_skipID").style.backgroundColor == "lightgrey" ) {
			document.getElementById("button_skipID").style.backgroundColor = "yellow";
		} else if ( document.getElementById("button_skipID").style.backgroundColor == "yellow" ) {
			document.getElementById("button_skipID").style.backgroundColor = "black";
		}
	}
}

function show_Status(status){
	var string = ""
	for ( var id in table_Status ) {
		if ( table_Status[id] == status ) {
			string += id.slice(id.indexOf(".")+1) + ', '
		}
	}
	alert(string)
}

function show_StatusSkip(){
	var string = ""
	for ( var id in table_StatusSkip ) {
		if ( table_StatusSkip[id] == "true" ) {
			string += id.slice(id.indexOf(".")+1) + ', '
		}
	}
	alert(string)
}

func_calcOldNew();
func_calcJegy()
func_calcDate()
















