
document.body.style.backgroundColor = "azure"
document.body.style.margin = "2px" // ez valahol nagyobbra van állítva, visszakéne

var ua = navigator.userAgent.toLowerCase()
var isAndroid = ua.indexOf("android") > -1 

if ( isAndroid ) { // ezis egy variáció, font size hejett, de pl. middle img problem (bonyolultabb?)
	andrScale = 2.5
	//var divBody = document.body
	var divBody = document.getElementById("div_body")
	divBody.style.transform = 'scale('+andrScale+')'
	divBody.style.transformOrigin = '0 0'
	var width = 100 / andrScale
	var height = 100 / andrScale
	divBody.style.maxWidth = width+'%'
	divBody.style.maxHeight = height+'%'
	
	document.body.appendChild(document.getElementById("div_centVideoBg"))
	document.body.appendChild(document.getElementById("div_centImgBg"))
}


function F_getTime() {
	var myDate = new Date()
	//var time = myDate.getTime() /1000
	//return time
	return myDate.getTime() /1000
}
var lastClickTime = F_getTime()
function F_getImpID(detElem){
	var impID = undefined
	var begin = detElem.className.indexOf("[")
	var end = detElem.className.indexOf("]")
	impID = detElem.className.slice(begin+1,end)
	if ( impID == undefined ) { console.log("# nincs impID-je: "+detElem.className) }
	return impID
}
function F_offsetXY(detElem) { // absolute x & y position-t lekéri!
	// azért kell, mert az offsetLeft nem elég, ha table-ban van egy element (akkor nem a body-hoz viszonyatva adja meg, hanem a table-hoz)
	/* alap pozíció lekérés kommandok:
		// var x = event.clientX
			// klikkelés/mouseover-kor az egér fixed x-pozíciója (tehát a képernyőn hol,scrollbartól független)
			// fixed position-re jó
		// var posX = this.offsetLeft 
			// ez a scrollt is beleszámítja --> absolute position-re jó
			// és element pozícióját kéri, de ez részlet kérdés szinte
			// table-ban magában nem jó, azért kell az F_offsetXY funkció
	*/
	var rect = detElem.getBoundingClientRect(),
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	
	/*if(!detElem) detElem = this; // másik módszer, ha a fennti nem lesz jó valamiért

	var x = detElem.offsetLeft;
	var y = detElem.offsetTop;

	while (detElem = detElem.offsetParent) {
		x += detElem.offsetLeft;
		y += detElem.offsetTop;
	}

	return { left: x, top: y };*/
}
function F_fixedXY(detElem) { // fixed x & y position-t lekéri!
	var rect = detElem.getBoundingClientRect()
	return { top: rect.top, left: rect.left, bottom: rect.bottom }
}

// –––––––––––––––  impQs BEGIN   –––––––––––––––
var pageImpQs = [] // path to impQs --> tárgyak {expQ}-jait lementi ide is
var pageTexts = [] // path to txt --> tárgyak textjét lementi ide is
var pageLinks = document.getElementsByClassName("page")
var currPath = null // betöltött tárgyé (ami látható is)
var prevScrollTop = 0 // midQ betöltése után, ha bezárom ugyanott legyen a scrollbar

function F_saveImpQs(path) {
	pageImpQs[path] = {}
	if ( document.getElementById("span_ExpQs") == null ) {
		var span = document.createElement("span")
		document.body.appendChild(span)
		span.style.display = "none"
		span.id = "span_ExpQs"
	}
	var span = document.getElementById("span_ExpQs")
	var pageText = pageTexts[path]
	span.innerHTML = pageText
	var childs = span.getElementsByTagName("*");
	for ( var i = 0; i < childs.length; i++ ) {
		var impQ = childs[i]
		if ( impQ.className.indexOf("[") == -1 ) { continue }
		if ( impQ.tagName != "DETAILS" ) { continue }
		if ( impQ.className.indexOf("imp") != -1 ) { continue } // ez már fölös igazából, de nem baj biztos ami biztos
		if ( impQ.className.indexOf("midQ") != -1 ) { continue } // ez már fölös igazából, de nem baj biztos ami biztos
		var impID = F_getImpID(impQ)
		pageImpQs[path][impID] = '<details class="'+impQ.className+'">'+impQ.innerHTML+'</details>'
	}
}
function F_getQPath(detElem,impID) {
	var path = currPath
	if ( detElem.dataset.src ) { 
		path = detElem.dataset.src
	} else {
		var parent = detElem
		do {
			parent = parent.parentElement
		} while ( parent.tagName != "BODY" && parent.dataset.src == undefined )
		if ( parent.dataset.src ) { path = parent.dataset.src }
	}
	//console.log(impID+": "+path)
	if ( path != currPath ) {
		var count = 0
		for ( var pagePath in pageTexts ) { if ( pagePath.indexOf(path) != -1 ) { 
			count = count +1
			path = pagePath
		} }
		if ( count != 1 ) { console.log("ERROR: ["+impID+"] dataset-src("+count+"): nem található(0) / több page-re utal(1+)") }
	}
	return path
}
function F_getQText(path,impID) {
	if ( pageImpQs[path] == undefined ) { F_saveImpQs(path) }
	var qText = pageImpQs[path][impID]
	return qText
}
function F_loadImpQs(detElem,full) {
/* Hogyan?
  'gyakori hibák:' 
		adott tárgy impQ-it nézzem meg, nincsenek-e véletlen az alján üres 1,2,3 impQ-k, mert akkor azok felülírják a fenntieket!
		impQs-nál még {}-van, pedig már [] kell!!
	✔ megnézi a detElem összes imp child-ját
	✔ feltételek: visible, van benne [], még nem volt betöltve
		detElem = amit megnyitottam (details / page)
		visible feltétel nem mindig! -> pl. Qing esetén, az első kiválasztásnál betölti összeset
	✔ ha talált köztük egyet, ami a feltételnek megfelel, akkor újra visszaugrik az elejére és végigmegy rajtuk, de ezt nem fogja már még1x (return) -> azért kell, hogy mindegyiket betöltse, tehát pl. ha van a betöltöttben is egy, azt is (biztos van ennél jobb módszer is, de én ezt választottam)
	✔ path beállítása: ha nincs 'data-source', akkor az aktuális megnyitott tárgy lesz
	✔ parentek között(detElem-ig) nem-e volt már? végtelen loop elkerülése
	✔ más Page-ről származás
		tárgyválasztásnál a tárgy teljes linkjét kell másolnom "data-src"-ba
		ha azon belül is van impQ, akkor azt is abból a tárgyból fogja értelemszerűen (kivéve, ha meg van adva más)
*/
	var repeat
	function F_loadNextImpQ(detElem) {
		var error = ""
		var repeat = false
		var impQs = detElem.getElementsByClassName("imp")
		for ( var i=0; i<impQs.length; i++ ) { 
			if ( impQs[i].offsetParent === null && full != "full" ) { continue }
			if ( impQs[i].className.indexOf("[") == -1 ) { continue }
			if ( impQs[i].dataset.loaded == "true" ) { continue } else { impQs[i].dataset.loaded = "true" }
			repeat = true
			
			var impID = F_getImpID(impQs[i])
			
			// path beállítása
			var path = F_getQPath(impQs[i],impID)
			
			// parentek között volt-e már (loop elkerülése)
			var contains = false
			function F_checkParents() {
				var parent = impQs[i]
				do {
					parent = parent.parentElement
					// checkolja, hogy az [impID]-jük megyegyezik-e --> ha nem, akkor nézi a kövi parentet
					if ( parent.className.indexOf("["+impID+"]") == -1 ) { continue } 
					// checkolja hogy a path-jük megegyezik-e --> ha nem, akkor nézi a kövi parentet
					if ( parent.dataset.src == undefined && path == currPath ) { contains = true }
					if ( path.indexOf(parent.dataset.src) != -1 ) { contains = true }
					/* ha átakarom írni, változtatás után teszteljem: ..
						span/div/midQ + datasrc(akár ugyanez az oldalé) + full load(tehát kiveszem feltételből, hogy csak akkor ha visible)
					*/
				} while ( parent != detElem && contains == false )
			}
			F_checkParents()
			if ( contains == true ) { continue }
			
			// betöltés
			var qText = F_getQText(path,impID)
			if ( qText == undefined ) { // ha hiányozna az [impQ]
				var string = i+" ["+impID+"] - "+path +"\n"
				if ( error.indexOf(string) == -1 ) { error = error + string }
				continue
			}
			if ( impQs[i].tagName == "div" || impQs[i].tagName == "DIV" ) {
				qText = qText.slice(qText.indexOf('</summary>')+10)
				qText = qText.slice(0,qText.lastIndexOf('</details>'))
			}
			impQs[i].innerHTML = qText
		}
		// ha hiányzott valamelyik [impQ]
		if ( error != "" ) { 
			console.log(error)
			alert("hiányzik impQ (lásd console.log)")
		}
		return repeat
	}
	do { repeat = F_loadNextImpQ(detElem) } while ( repeat == true )
}

function F_clickAutoLoadPagesBtn(btn) {
	if ( localStorage.getItem("autoLoadPages") == "true" ) {
		localStorage.setItem("autoLoadPages", "false")
		btn.style.backgroundColor = ""
	} else {
		localStorage.setItem("autoLoadPages", "true")
		btn.style.backgroundColor = "green"
	}
	console.log("– F_clickAutoLoadPagesBtn – "+localStorage.getItem("autoLoadPages"))
}
function F_loadAutoLoadPagesBtn() {
	var btn = document.getElementById("btn_toggleLoad")
	if ( localStorage.getItem("autoLoadPages") == "true" ) {
		btn.style.backgroundColor = "green"
	} else {
		btn.style.backgroundColor = ""
	}
}
F_loadAutoLoadPagesBtn()
function F_loadAndSavePageText(path,click,toggle) {
	if ( document.getElementById("iframe_targyak") == null ) {
		var iframe = document.createElement("iframe") // ebbe tölti be a webpage-ket, majd innen másolja ki innerhtml-üket
		document.body.appendChild(iframe)
		iframe.style.display = "none"
		iframe.id = "iframe_targyak"
	}
	function F_loadPage(pageText,id) { // ráklikkeléskor kiírja az aktuális tárgyat
		pageLinks[id].style.backgroundColor = "yellow"
		var pageDiv = document.getElementById("div_pageQTargy")
		pageDiv.innerHTML = pageText
		/* */var startTime = F_getTime()
		F_loadElem(pageDiv)
		/* */var endTime = F_getTime()
		/* */console.log(endTime-startTime)
		if ( toggle == true ) { F_toggleQing()  }
	}
	
	document.getElementById("iframe_targyak").src = path
	var handler = function(e) {
		removeEventListener('message', handler, false)
		var pageText = e.data[1]
		pageTexts[path] = pageText
		
		var id
		for ( var i=0; i<pageLinks.length; i++ ) { if ( pageLinks[i].dataset.src == path ) { id = i } }
		F_saveIDB(path,pageText,id)
		if ( click == true ) { F_loadPage(pageText,id) }
	}
	window.addEventListener('message', handler, false)
}
function F_loadPageLinks() { // IDB, favicons, setClick
	function F_loadFavIcons() {
		var table = document.getElementById("table_weboldalak")
		var favicons = table.getElementsByClassName("targy")
		for ( var i=0; i<favicons.length; i++ ) {
			if ( favicons[i].src ) { continue }
			var path = favicons[i].parentElement.dataset.src
			favicons[i].src = path.slice(0,path.lastIndexOf("/")+1)+"favicon.bmp"
		}
	}
	F_loadFavIcons()
	
	function F_setPageClick() {
		for ( var i=0; i<pageLinks.length; i++ ) { 
			pageLinks[i].onclick = function() {
				threeSec = 0 // ez azért kéne, hogy auto betöltésnél ne essen szét, hogy egyszerre kettőt akar
				for ( var x=0; x<pageLinks.length; x++ ) { pageLinks[x].style.backgroundColor = "" }
				// loadAllPage = false // ez gondolom azért kéne, hogy megálljon a search speed-betöltése !?
				currPath = this.dataset.src
				targyPath = this.dataset.src
				F_loadAndSavePageText(this.dataset.src,true)
			}
		}
	}
	F_setPageClick()
	
	function F_loadIDB(page) {
		var path = page.dataset.src
		var request = indexedDB.open(path, 1);
		request.onerror = function(event) { console.log("database ERROR: " + event.target.errorCode) }
		request.onsuccess = function(event) {
			var db = event.target.result;
			//console.log(path+" – "+db.objectStoreNames.contains('webpage'))
			//console.log(db.objectStoreNames)
			if ( db.objectStoreNames.contains('webpage') != true ) { return }
			var transaction = db.transaction("webpage","readwrite")
			var store = transaction.objectStore("webpage");  
			store.get(1).onsuccess = function(event) { 
				var text = this.result[0]["pageHTML"]
				//console.log(path+" : "+text)
				if ( this.result.length == 1 ) { // ez azért kell...
					// a time-ot idb-be régen nem mentette el, így amikor leakarom hívni hibát ír ki. ezért akik abban az 1hónapban felmentek weboldalra, azoknál hiba lenne, így kell egy 'frissítés' (későbbiekben is, ha hozzáakarok majd adni egy új változót idb-be a path-hez lehet ez ilyen fog kelleni)
					clearIDB(path,page)
					return
				}
				
				pageTexts[path] = text
				var time = F_getTime() - this.result[1]["pageTIME"]
				//console.log(path+" : "+this.result[1]["pageTIME"])
				if ( time < 604800 ) { // 1 hét
					page.style.color = "blue"
					page.dataset.loaded = true
				} else {
					page.style.color = "red"
				}
			}
			transaction.oncomplete = function() { db.close() }
		}
	}
	for ( var i=0; i<pageLinks.length; i++ ) { 
		F_loadIDB(pageLinks[i])
		if ( i == pageLinks.length-1 ) { // betöltötte mindegyik tárgyat
			setTimeout(function(){ // kell fél sec wait még
				if ( localStorage.getItem("hk.ToggleAll") != null ) { 
					currPath = localStorage.getItem("hk.ToggleAll")
					targyPath = localStorage.getItem("hk.ToggleAll")
					F_loadAndSavePageText(localStorage.getItem("hk.ToggleAll"),true,true)
				}
			}, 500)
		}
	}
}
F_loadPageLinks()

function F_saveIDB(path,pageText,id) {
	var currTime = F_getTime()
	var objectData = [ { pageHTML: pageText }, { pageTIME: currTime } ]
	clearIDB(path,pageLinks[id])
	
	var request = indexedDB.open(path, 1);
	request.onupgradeneeded = function (event) {
		var db = event.target.result;
		var store = db.createObjectStore("webpage", { keyPath: "id", autoIncrement: true });
		store.put(objectData)
	}
	request.onerror = function(event) { console.log("database ERROR: " + event.target.errorCode) }
	request.onsuccess = function(event) {
		var db = event.target.result;
		var transaction = db.transaction("webpage","readwrite")
		var store = transaction.objectStore("webpage");  
		//store.get(1).onsuccess = function(event) { console.log("database SAVED – "+path /* this.result */) }
		transaction.oncomplete = function() { db.close() }
		
		pageLinks[id].style.color = "blue"
	}
}
function clearIDB(path,page) {
	var request = indexedDB.deleteDatabase(path);
	//request.onsuccess = function(event) { console.log("database DELETE – "+path) }
	if ( pageTexts[path] == undefined ) { 
		page.style.color = ""
	} else {
		page.style.color = "darkviolet"
	}
}
function clearFullIDB() { for ( var i=0; i<pageLinks.length; i++ ) { clearIDB(pageLinks[i].dataset.src,pageLinks[i]) } }

var threeSec = 0
var F_seekBar = window.setInterval(function() {
	threeSec = threeSec +1
	if ( localStorage.getItem("autoLoadPages") == "true" ) {
		//console.log(threeSec)
		var loadTime = 3
		if ( threeSec > loadTime ) {
			for ( var i=0; i<pageLinks.length; i++ ) { 
				if ( pageLinks[i].style.color != "blue" ) {
					F_loadAndSavePageText(pageLinks[i].dataset.src,false)
					break
				}
			}
			threeSec = 0
		}
	}
}, 1000);
// –––––––––––––––  impQs END   –––––––––––––––

// –––––––––––––––  midQs BEGIN   –––––––––––––––
var prevMidQs = []
function F_divMidQ() { // lekreálja középre a divet, ahova kidobja majd a midQ/searchQ-kat
	function F_divMidQ() { // mainDiv: ebbe lesz minden, sárga bordere van ...
		var div = document.createElement("div")
		document.getElementById("div_body").appendChild(div)
		//document.body.appendChild(div)
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
		div.style.opacity = "1"
		div.style.zIndex = "3"
	}
	F_divMidQ()
	var div = document.getElementById("div_MidQ")
	function F_btnBack() { // bal felső sarokban a vissza
		var button = document.createElement("span")
		div.appendChild(button)
		button.id = "btn_MidQback"
		button.style.backgroundColor = "Gainsboro"
		button.style.fontWeight = "bold"
		button.style.border = "3px solid black"
		button.style.cursor = "pointer";
		button.innerHTML = "&#x27A4;"
		button.style.transform = "scale(-1, 1)"
		button.style.width = "30px"
		button.style.position = "absolute"
		button.style.textAlign = "center"
		button.onclick = function(){ 
			prevMidQs.pop() // uccsót (ami a jelenlegi letörli)
			var text = prevMidQs[prevMidQs.length-1] // uccsót (ami így már az előző lett) betölti
			var impID = text.slice(0,text.indexOf("-")-1)
			var path = text.slice(text.indexOf("-")+2)
			var qText = F_getQText(path,impID)
			F_setMidQ(qText,path)
			//F_midQload(prevMidQs[prevMidQs.length-1]) 
		}
	}
	F_btnBack()
	function F_btnTitle() { // Q title-je középen fenn
		var title = document.createElement("div")
		div.appendChild(title)
		title.style.textAlign = "center"
		title.style.height = "30px"
		var span = document.createElement("span")
		title.appendChild(span)
		span.id = "btn_MidQ"
		//span.style.fontWeight = "bold"
		span.style.border = "3px solid black"
		span.style.fontSize  = "large"
		span.style.backgroundColor = "red"
		span.style.color = "white"
		span.style.cursor = "pointer";
		span.onclick = function(){ 
			prevMidQs = []
			document.getElementById("div_MidQ").style.display = "none" 
			if ( document.getElementById("div_searchBg").style.display != "block" ) {
				document.getElementById("div_pageQTargy").style.display = "block"
				document.getElementById("table_weboldalak").style.display = "block"
				document.getElementById("btn_toggleQing").style.display = "block"
				document.body.parentElement.scrollTop = prevScrollTop
			}
			
			//currPath = targyPath
		}
	}
	F_btnTitle()
	function F_divText() { // Q szövege ide jön
		var divText = document.createElement("div")
		div.appendChild(divText)
		divText.id = "div_MidQText"
		divText.style.paddingBottom = "10px"
		//divText.style.paddingTop = "30px"
	}
	F_divText()
}
F_divMidQ()
function F_setMidQ(qText,path) { // középen megjeleníti a div-et, benne a szöveggel
	if ( document.getElementById("div_MidQ").style.display == "none" ) {
		prevScrollTop = document.body.parentElement.scrollTop // ez előbb kell legyen, minthogy megjelenne a div_MidQ --> elmentse, hogy hol voltam az oldalon(mondjuk a közepe tájékán), hogy miután bezárom oda scrolloljon vissza(ne a tetejére ugorjon!)
	}
	
	document.getElementById("div_MidQ").style.display = "block" // ez előbb kell legyen, mint az F_loadElem --> hogy láthatók legyenek az impQ-k, amiket be kell töltenie
	document.getElementById("div_pageQTargy").style.display = "none"
	document.getElementById("table_weboldalak").style.display = "none"
	document.getElementById("btn_toggleQing").style.display = "none"
	
	//console.log(prevMidQs)
	qText = qText.slice(qText.indexOf("<summary"),qText.lastIndexOf("</details"))
	var qTitle = qText.slice(qText.indexOf(">")+1,qText.indexOf("</summary"))
	document.getElementById("btn_MidQ").innerHTML = qTitle
	
	qText = qText.slice(qText.indexOf("</summary"))
	qText = qText.slice(qText.indexOf(">")+1)
	document.getElementById("div_MidQText").innerHTML = qText
	
	document.getElementById("div_MidQText").dataset.src = path // kell, h a benne lévő impQ-k path-jét lekérhesse: F_getQPath()
	F_loadElem(document.getElementById("div_MidQText"))
	if ( prevMidQs.length > 1 ) {
		document.getElementById("btn_MidQback").style.display = "block"
	} else {
		document.getElementById("btn_MidQback").style.display = "none"
	}
}
function F_loadMidQs(detElem) { // midQ[x] elemeket beállítja: kék fontColor, rájuk click-elve mi történjen
	var midQs = detElem.getElementsByClassName("midQ")
	for ( var x=0; x<midQs.length; x++ ) {
		var midQ = midQs[x]
		//console.log(midQ.innerHTML)
		midQ.style.color = "blue"
		midQ.style.textShadow = "0 0 1px yellow, 0 0 1px black"
		midQ.style.cursor = "pointer"
		midQ.onmouseover = function(){ this.style.color = "green" }
		midQ.onmouseout = function(){ this.style.color = "blue" }
		midQ.onclick = function() {
			var impID = F_getImpID(this)
			var path = F_getQPath(this,impID) 
			prevMidQs.push(impID+" - "+path)
			var qText = F_getQText(path,impID)
			F_setMidQ(qText,path) 
		}
	}
}
// –––––––––––––––  midQs END   –––––––––––––––

// –––––––––––––––  title(abbr) BEGIN   –––––––––––––––
function F_tooltipFuncs(){
	var span = document.createElement("span")
	span.id = "span_abbrTitle"
	document.body.appendChild(span)
	span.style.display = "none"
	span.style.border = "2px solid black"
	span.style.backgroundColor = "azure"
	span.style.position = "absolute"
	span.style.maxWidth = "300px"
	span.style.fontSize = "smaller"
	span.style.padding = "2px 2px 2px 5px"
	span.style.zIndex = "4"
	span.onclick = function() { event.stopPropagation() /* ne tűnjön el, mert a document.body-ra is klikkelek közben! */ }
}
F_tooltipFuncs()
function F_titleVerChange(velement){
	function F_posTitle(detElem,mouseX) {
		var span = document.getElementById("span_abbrTitle")
		// title
		span.style.display = "block"
		if ( detElem.title != '' ) {
			detElem.dataset.title = detElem.title
			detElem.title = '' // ezzel akadályozom meg, hogy az eredeti ne jelenjen meg
		}
		span.innerHTML = detElem.dataset.title
		
		// Y pozíció
		var posY = F_offsetXY(detElem).top
		span.style.top = posY + detElem.offsetHeight +2 +"px"
		  // ide kéne valami, hogy ha uccsó sorban van (midQ) a title, akkor ha nem fér ki, akkor felfele tolja.. (mint X-nél)
		
		// X pozíció
		var posX = F_offsetXY(detElem).left
		if ( span.offsetWidth > document.body.offsetWidth - posX -10 ) {
			span.style.left = document.body.offsetWidth - span.offsetWidth - 10 +"px"
		} else {
			span.style.left = mouseX +"px"
		}
	}
	var span = document.getElementById("span_abbrTitle")
	velement.onclick = function(event) {
		F_posTitle(this,event.clientX)
		span.dataset.status = 1 // ne tűnjön el, ha egeret lehúzom
		event.stopPropagation() // ne tűnjön el, mert a document.body-ra is klikkelek közben (azonban így csak az első klikk számít: lásd w3school)
	}
	velement.onmouseover = function(event) { F_posTitle(this,event.clientX) }
	velement.onmouseout = function() { if ( span.dataset.status != 1 ) { span.style.display = "none" } }
}
function F_titleChange(detElem){
	var abbrok = detElem.querySelectorAll("*[title]");
	for ( var i = 0; i < abbrok.length; i++ ) { F_titleVerChange(abbrok[i]) }
}
// –––––––––––––––  title(abbr) END   –––––––––––––––

// –––––––––––––––  videos BEGIN  –––––––––––––––
/* how to - tutorial
	mute: <video muted data-src...
	max-width: alapból 60%; <video data-width="30%" data-src
*/
function F_clickSeekBar(seekBarDiv,e){
	var parentDiv = seekBarDiv.parentElement
	var videoElems = parentDiv.getElementsByTagName("video")
	var thisVideo = videoElems[0]
	x = e.pageX - thisVideo.offsetLeft
	clickedValue = x * thisVideo.max / thisVideo.offsetWidth
	var percent = x / thisVideo.offsetWidth
	var currTime = percent * thisVideo.duration
	currTime = Math.floor(currTime)
	thisVideo.currentTime = currTime
	F_stopVideo(thisVideo)
}
function F_setSeekBarWidth(thisVideo){
	var parentDiv = thisVideo.parentElement
	var seekBars = parentDiv.getElementsByTagName("span")
	var seekBarSpan = seekBars[0]
	//var seekBarSpan = document.getElementById("centVideoBar")
	seekBarSpan.style.width = thisVideo.offsetWidth *thisVideo.currentTime /thisVideo.duration +"px"
	seekBarSpan.style.left = thisVideo.offsetLeft
}
function F_stopVideo(thisVideo){
	if ( thisVideo.id != "video_cent" ) { thisVideo.id = "" }
	thisVideo.style.borderColor = "black"
	thisVideo.pause()
	F_setSeekBarWidth(thisVideo)
}
function F_playVideo(thisVideo){
	if ( document.getElementById("playedVideo") ) { F_stopVideo(document.getElementById("playedVideo")) }
	if ( thisVideo.id != "video_cent" ) { thisVideo.id = "playedVideo" }
	thisVideo.style.borderColor = "springgreen"
	thisVideo.play()
	var F_seekBar = window.setInterval(function(){
		F_setSeekBarWidth(thisVideo)
		if ( thisVideo.id != "playedVideo" && thisVideo.id != "video_cent" ) { clearInterval(F_seekBar) }
	}, 1000)
}
function F_setVideoSource(videoElem,srcTxt){
	srcTxt = srcTxt.slice(srcTxt.lastIndexOf("/")+1) // a régi jegyzetekben még benne van, hogy 'videos/', ezért kell
	videoElem.setAttribute('src', "videos/"+srcTxt)
	videoElem.onerror = function(){
		console.log("'"+srcTxt+"' video is missing!") 
		alert("'"+srcTxt+"' video is missing! --> console.log: line number") 
	}
}

function F_loadVideos(detElem){
	var allVideo = detElem.getElementsByTagName("video")
	for ( var i=0; i<allVideo.length; i++ ) {
		var videoElem = allVideo[i]
		if ( videoElem.offsetParent === null ) { continue }
		if ( videoElem.dataset.src == undefined ) { continue } 
		
		function F_setSource(videoElem){
			//var source = document.createElement('source')
			F_setVideoSource(videoElem,videoElem.dataset.src)
			videoElem.removeAttribute("data-src")
			//videoElem.appendChild(source)
		}
		F_setSource(videoElem)
		
		videoElem.style.borderColor = "black"
		videoElem.style.cursor = "pointer"
		videoElem.style.maxWidth = "100%" // kell! különben kilóg a képernyőről, ha nagyobb, mint 60%
		
		videoElem.onloadeddata = function() { // meg kell várja, különben seekBar mérete nem jó
			var videoElem = this
			function F_createSeekBar(){ 
				var parentDiv = document.createElement("div") // border, ebbe van a video + szürke + sárga
				var parent = videoElem.parentNode
				parent.insertBefore(parentDiv,videoElem)
				parentDiv.appendChild(videoElem)
				parentDiv.style.border = "15px solid black"
				parentDiv.style.maxWidth = "60%"
				if ( videoElem.dataset.width ) { parentDiv.style.maxWidth = videoElem.dataset.width }
				parentDiv.style.width = videoElem.offsetWidth
				parentDiv.style.float = "right"
				
				var seekBarDiv = document.createElement("div") // szürke háttér
				seekBarDiv.className = "seekBar"
				parentDiv.appendChild(seekBarDiv)
				seekBarDiv.style.width = videoElem.offsetWidth
				seekBarDiv.style.opacity = "1"; 
				seekBarDiv.style.backgroundColor = "grey"; 
				seekBarDiv.style.height = "21px"; 
				seekBarDiv.onclick = function(e){ F_clickSeekBar(this,e) }
				
				var seekBarSpan = document.createElement("span") // sárga, hogy hol tart
				seekBarSpan.className = "seekBar"
				seekBarDiv.appendChild(seekBarSpan)
				seekBarSpan.style.backgroundColor = "gold"; 
				seekBarSpan.style.height = "21px"; 
				seekBarSpan.style.position = "absolute"; 
			}
			F_createSeekBar()
		}
		videoElem.onclick = function(){
			var videoElem = this
			if ( videoElem.paused == false ) {
				F_stopVideo(videoElem)
			} else {
				F_playVideo(videoElem)
			}
		}
	}

	var allVideoCent = detElem.getElementsByClassName("video")
	for ( var i=0; i<allVideoCent.length; i++ ) {
		allVideoCent[i].onclick = function() {
			document.getElementById("div_centVideoBg").style.visibility = 'visible'
			var centVideo = document.getElementById("video_cent")
			F_setVideoSource(centVideo,this.dataset.src)
			F_playVideo(centVideo)
		}
	}
}
function F_loadCentVideo(){
	var keepVideo
	var centVideo = document.getElementById("video_cent")
	centVideo.onclick = function(){
		var thisVideo = this
		if ( thisVideo.paused == false ) {
			F_stopVideo(thisVideo)
		} else {
			F_playVideo(thisVideo)
		}
		keepVideo = true
	}

	var centVideoSeek = document.getElementById("div_centVideoSeek")
	centVideoSeek.onclick = function(e){
		var rect = e.target.getBoundingClientRect()
		//var testX = e.clientX - centVideoSeek.left
		//var testX = rect.left
		var x = e.pageX - rect.left
		var percent = x / this.offsetWidth
		//alert(e.pageX+" - "+rect.left+" = "+x)
		//alert(x+" "+this.offsetWidth+" "+percent)
		var currTime = percent * centVideo.duration
		currTime = Math.floor(currTime);
		centVideo.currentTime = currTime
		F_stopVideo(centVideo)
		
		keepVideo = true
	}
	
	var centVideoBG = document.getElementById("div_centVideoBg")
	centVideoBG.onclick = function(){
		if ( keepVideo != true ) { 
			this.style.visibility = 'hidden'
			F_stopVideo(centVideo)
		}
		keepVideo = false
	}
}
F_loadCentVideo()
// –––––––––––––––  videos END  –––––––––––––––

// –––––––––––––––  search BEGIN  –––––––––––––––
var breakSearch = false
var objSearchTexts = {} // Qname to Qtxt (ráklikk a resultra, dobja ki a szöveget)
function F_searchStart() { // search-re klikkelésnél vagy enter lenyomásnál ez történik először
	document.getElementById("btn_searchBreak").style.display = "block"
	document.getElementById("div_searchingBg").style.display = "block"
	if ( document.getElementById("btn_SearchW") ) {
		document.getElementById("btn_SearchW").style.backgroundColor = "black"
		document.getElementById("btn_SearchW").style.color = "white"
	}
	var int_Click = window.setInterval(function(){
		F_searchResult()
		clearInterval(int_Click) 
	}, 100)
}
function F_searchResult() { // találati eredmények betöltése...
	/* method
		+ adott oldal szövegét stringbe teszi -> targyText
		+ ebbe megnézi, hol van először a keresett szó -> utána megkeresi az előtte lévő details-t, ami parentje + a végét -> azt elmenti egy array/object-be
		+ utána következőt találatnál ugyanez
		+ de! ha annál is ugyanaz a details lenne a parent, akkor azt nem menti el fölösen még1x
	*/
	var paths = Object.keys(pageTexts)
	var searchText = document.getElementById("input_SearchW").value
	searchText = searchText.toLowerCase() // kis és nagybetű ellen gondolom
	document.getElementById("div_searchResults").innerHTML = ""
	var fullText = ""
	var hianyzik = ""
	
	var spanStatus = document.getElementById("span_searchStatus")
	spanStatus.parentElement.style.display = "block" 
	//spanStatus.parentElement.style.top = "60px"
	
	var x = 0
	var summaryID = 0
	var progress = false
	var int_Click = window.setInterval(function(){
		if (progress == true) { return } 
		progress = true
		var statusWidth = spanStatus.parentElement.offsetWidth * x / paths.length
		spanStatus.style.width = statusWidth+"px"
		console.log(spanStatus.parentElement.offsetWidth)
		console.log(x / paths.length)
		console.log(spanStatus.parentElement.offsetWidth * x / paths.length)
		
		var path = paths[x]
		x = x +1
		if ( Number(x) == Number(paths.length) || breakSearch == true ) { // ha a végére ért / megszakítom
			clearInterval(int_Click)
			breakSearch = false
			spanStatus.parentElement.style.display = "none" 
			spanStatus.style.width = 0
			document.getElementById("btn_searchBreak").style.display = "none"
			document.getElementById("div_searchingBg").style.display = "none"
			if ( document.getElementById("btn_SearchW") ) {
				document.getElementById("btn_SearchW").style.color = ""
				document.getElementById("btn_SearchW").style.backgroundColor = ""
			}
		}
		var targyText = pageTexts[path]
		if ( targyText == null ) { 
			hianyzik = hianyzik +path.slice(path.lastIndexOf("/"))+" "
			progress = false
			return
		}
		if ( targyText.toLowerCase().indexOf(searchText) == -1 ) {
			progress = false
			return
		}
		fullText = fullText+ path

		var locST = 0 // keresett szó heje a targytext-ben; végén mindig növelem +1el, hogy a következőre keressen utána
		var detaLocs = "" // amikor ráklikkelek a kidobott találatra akkor betölt egy detailst; ebben a string-ben azoknak a location-je van felsorolva a targytext-ben; azért kell, hogy 2x ugyanazt ne tegye ki (hiába van 1detan belül 2x a keresett szó) -> ezzel tudom ellenőrizni, hogy volt-e már
		do {
			locST = targyText.toLowerCase().indexOf(searchText,locST+1)
			var prevText, postText, positive, index
			function F_searchPrevText(){
				positive = false
				prevText = targyText.slice(0 , locST)
				var string
				do {
					// megkeresi a parent details-ét (lehet közben 'testvér' is, amit kiszűr!)
					index = prevText.lastIndexOf("<details")
					string = prevText.slice(prevText.lastIndexOf("<details"))
					prevText = prevText.slice(0 , prevText.lastIndexOf("<details"))
					if ( string.indexOf("</details") == -1 ) { positive = true }
				} while ( prevText.indexOf("<details") != -1 && positive != true )
				// előbbi feltétel csak azért kell, különben végtelen loop lenne
				if ( positive == true ) { prevText = targyText.slice(index , locST) }
			}
			F_searchPrevText()
			if ( detaLocs.indexOf(index+", ") != -1 ) { continue } // ha már volt az a details, akkor ne dobja ki még1x (hiába van 2x benne a keresett szó)
			detaLocs = detaLocs + index + ", "
			function F_searchPostText(){
				positive = false
				postText = targyText.slice(locST)
				var string
				index = 0
				do {
					index = index + postText.indexOf("</details") +10
					string = postText.slice(0 , postText.indexOf("</details"))
					postText = postText.slice(postText.indexOf("</details")+10)
					if ( string.indexOf("<details") == -1 ) { positive = true }
				} while ( postText.indexOf("</details") != -1 && positive != true )
				if ( positive = true ) { postText = targyText.slice(locST , locST +index) }
			}
			if ( positive == true ) { F_searchPostText() }
			
			if ( positive == false ) { continue }
			var resultText = prevText + postText
			/*console.clear()
			console.log(detaLocs)
			console.log(prevText)
			console.log(postText)
			alert(searchText)*/
			
			var summaryText = resultText.slice(resultText.indexOf("summary")+2)
			summaryText = summaryText.slice(summaryText.indexOf(">")+1)
			summaryText = summaryText.slice(0,summaryText.indexOf("</summary"))
			summaryID = summaryID +1
			objSearchTexts[summaryID] = resultText
			
			fullText = fullText+ "<li><span data-id='"+summaryID+"' data-path='"+path+"' style='color:green; cursor:pointer' onclick='F_clickSearchResult(this)'>"+summaryText+"</span></li>"
			//targyText = targyText.slice(targyText.indexOf(resultText)+resultText.length)
		} while ( targyText.toLowerCase().indexOf(searchText,locST+1) != -1 )
		document.getElementById("div_searchResults").innerHTML = "<ul class='normal'>" +fullText+ "</ul>"
		
		//console.log(x+" "+progress+" "+path)
		progress = false
	}, 10);
	if ( hianyzik != "" ) { console.log("HIÁNYZIK:"+hianyzik) }
}
function F_clickSearchResult(detElem) { // egy találati eredményre klikk
	detElem.style.backgroundColor  = "yellow"
	var int_Click = window.setInterval(function(){
		var qTxt = objSearchTexts[detElem.dataset.id]
		var path = detElem.dataset.path
		F_setMidQ(qTxt,path)
		
		detElem.style.backgroundColor = ""
		clearInterval(int_Click) 
	}, 100);
}
function F_createSearchElems() {
	function F_btnNagyito() { // fő oldalon a nagyító
		var button = document.createElement("input")
		button.type = "button"
		button.id = "btn_toggleSearch"
		document.getElementById("table_weboldalak").parentElement.parentElement.appendChild(button)
		document.getElementById("table_weboldalak").parentElement.parentElement.style.position = "relative"
		button.style.position = "absolute"
		button.style.right = "0px"
		button.style.bottom = "0px" // parent position-jént relative-ra kellett állítani, illetve ezt absolute-ra, hogy működjön!!
		//button.style.width = "90px"
		button.style.maxWidth = "90px"
		//button.style.height = "90px"
		button.style.maxHeight = "90px"
		button.value = "🔍"
		button.style.cursor = "pointer"

		button.onclick = function(){ 
			if ( document.getElementById("div_searchBg").style.display == "none" ) {
				this.style.backgroundColor  = "black"
				this.style.color  = "white"
			}
			var int_Click = window.setInterval(function(){
				document.getElementById("btn_toggleQing").style.display = 'none'
				document.getElementById("table_weboldalak").style.display = 'none'
				document.getElementById("div_pageQTargy").style.display = 'none'
				document.getElementById("btn_toggleSearch").style.display = 'none'
				// első kettő azért kell, hogy a fölös scrollbar eltűnjön bal oldalt (pl. megvan nyitva farmakológia, majd ráklikkelnék nagyítóra...)
				document.getElementById("div_searchBg").style.display = "block"
				button.style.color = ""
				button.style.backgroundColor = ""
				clearInterval(int_Click)
			}, 100)
		}
	}
	F_btnNagyito()
	function F_divBg() { // ezt nyitom meg, ez a mainDiv --> ebbe az összes többi
		var div = document.createElement("div")
		document.getElementById("div_body").appendChild(div)
		//document.body.appendChild(div)
		div.id = "div_searchBg"
		div.style.backgroundColor = "white"
		div.style.overflow = "auto"
		div.style.border = "8px solid black"
		div.style.outline = "5px solid aqua"
		div.style.display = "none"
		div.style.position = "absolute"
		div.style.left = "5px"
		div.style.right = "5px"
		div.style.top = "4px"
		div.style.bottom = "4px"
		//div.style.zIndex = "3"
	}
	F_divBg()
	var divBg = document.getElementById("div_searchBg")
	function F_btnClose() { // jobb felső sarok, close btn
		var button = document.createElement("input")
		button.type = "button"
		divBg.appendChild(button)
		button.style.position = "absolute"
		button.style.right = "2px"
		button.style.top = "2px"
		button.value = "✖"
		button.style.fontSize = 'xx-large'
		button.style.cursor = "pointer"
		button.style.color = "white"
		button.style.backgroundColor = "red"
		button.style.border = "3px solid black"
		if ( isAndroid ) { button.style.width = "50px" }
		button.onclick = function(){
			document.getElementById("table_weboldalak").style.display = 'block';
			document.getElementById("div_pageQTargy").style.display = 'block';
			document.getElementById("btn_toggleQing").style.display = 'block'
			document.getElementById("btn_toggleSearch").style.display = 'block'
			document.getElementById("div_searchBg").style.display = "none"
		}
	}
	F_btnClose()
	function F_inpText() { // ebbe írom a keresett szót -> entert lenyomva megkezdi a keresést
		var input = document.createElement("input")
		divBg.appendChild(input)
		input.type = "text"
		input.id = "input_SearchW"
		input.style.fontSize = "xx-large"
		input.style.position = "absolute"
		input.style.top = "1%"
		if ( isAndroid ) {
			input.style.left = "1%"
			var width = screen.width -53
			input.style.width = width+"px"
		} else {
			input.style.left = "50%"
			input.style.paddingLeft = "3px"
			input.style.paddingRight = "3px"
			input.style.transform = "translate(-50%)"
		}
		input.addEventListener("keyup", function(event) { if (event.keyCode === 13) { 
			// entert ha lenyomom search!
			F_searchStart()
		} })
	}
	F_inpText()
	function F_btnSearch() { // bal felső sarokban SEARCH -> erre klikkelve megkezdi a keresést
		var button = document.createElement("button")
		divBg.appendChild(button)
		button.id = "btn_SearchW"
		button.style.fontSize = "xx-large"
		button.innerHTML = "search"
		button.style.position = "relative"
		button.style.top = "1%"
		button.style.cursor = "pointer"
		button.onclick = function(){ F_searchStart() }
	}
	if ( isAndroid == false ) { F_btnSearch() }
	function F_divResults() { // ebbe írja a találati eredmény(eke)t
		var divText = document.createElement("div") 
		divBg.appendChild(divText)
		divText.id = "div_searchResults"
		divText.style.marginLeft = "3px"
		divText.style.paddingBottom = "10px"
		if ( isAndroid ) { divText.style.paddingTop = "15px" } else { divText.style.paddingTop = "10px" }
		divText.style.fontSize = "x-large"
	}
	F_divResults()
	function F_divSearchingBg() { // search alatt elszürkül (+a cancel btn ezen lesz)
		var div = document.createElement("div")
		document.body.appendChild(div)
		div.id = "div_searchingBg"
		div.style.backgroundColor = "black"
		div.style.opacity = "0.35"
		div.style.overflow = "auto"
		div.style.display = "none"
		div.style.position = "fixed"
		div.style.left = "5px"
		div.style.right = "5px"
		div.style.top = "4px"
		div.style.bottom = "4px"
		div.style.zIndex = "1"
	}
	F_divSearchingBg()
	function F_btnBreak() { // ha ojan szóra keresnék, ami túl sok találat 
		var button = document.createElement("button")
		document.body.appendChild(button)
		button.id = "btn_searchBreak"
		button.innerHTML = "cancel"
		
		button.style.fontSize = "xx-large"
		button.style.color = "white"
		button.style.backgroundColor = "red"
		button.style.border = "3px solid black"
		button.style.cursor = "pointer"
		
		button.style.zIndex = "2"
		button.style.display = "none"
		button.style.position = "fixed"
		button.style.top = "30%"
		button.style.left = "50%"
		button.style.transform = "translate(-50%)"
		button.onclick = function() { breakSearch = true }
	}
	F_btnBreak()
	function F_spanStatus() { // statusbar, hogy a search hol tart
		// szürke háttér & fehér border fojton látszik
		var spanStatus = document.createElement("div")
		divBg.appendChild(spanStatus)
		spanStatus.style.display = "none"
		spanStatus.style.position = "absolute"
		spanStatus.style.backgroundColor = "grey"
		spanStatus.style.border = "2px solid white"
		spanStatus.style.width = "30%"
		spanStatus.style.height = "21px"
		spanStatus.style.top = "20%"
		spanStatus.style.left = "50%"
		spanStatus.style.transform = "translate(-50%)"
		spanStatus.style.zIndex = "2"
		
		// gold színű, ami 0-ról indul és 100-ig jut el
		var spanStatusChild = document.createElement("span")
		spanStatus.appendChild(spanStatusChild)
		spanStatusChild.id = "span_searchStatus"
		spanStatusChild.style.backgroundColor = "gold"
		spanStatusChild.style.position = "absolute"
		spanStatusChild.style.height = "21px"
	}
	F_spanStatus()
}
F_createSearchElems()
// –––––––––––––––  search END  –––––––––––––––

// –––––––––––––––  Qing BEGIN  –––––––––––––––
var arrTetelQs = {} // mainTitle-k, azon belül phase/status-ok, azok pedig egy stringet tartalmaznak, hogy mely Q-k
var arrActTetels = [] // active tételek
var arrQnev = [] // (i) -> qNev + tartalom
var arrOldQs = [] // (i) -> LS-ben mentett Q-k
var arrNewQs = [] // (i) -> LS-ben még nem mentett Q-k (nem osztályzott)
function F_saveLS() {
	// osztályzott Q-k: jegy, név --> LSid rendel hozzá
	var maxNum = document.getElementById("div_QingLowerPart").dataset.numQ // hány db Q látszik összesen
	if ( maxNum == undefined ) { return }
	
	var currTime = F_getTime()
	currTime = Math.round(currTime)
	for ( var num=1;  num<Number(maxNum)+1;  num++ ) { // (hagyomános számozás itt 1el el van tolva pozitív irányba)
		var jegy = document.getElementById("span.1."+num).innerHTML
		var i = document.getElementById('parSpan.'+num).dataset.elemi
		
		document.getElementById("span.1."+num).innerHTML = "&nbsp;"
		document.getElementById('parSpan.'+num).style.display = "none"
		document.getElementById('parSpan.'+num).dataset.elemi = ""
		
		if ( jegy == "&nbsp;" ) { continue }
		var qNev = arrQnev[i].qNev
		
		localStorage.setItem(currPath+" | "+qNev,jegy+" , "+currTime)
	}
}
function F_loadLS() {
	function F_checkTetels() {
		arrActTetels = JSON.parse(localStorage.getItem(currPath+" | activeTetels"))
		//console.log(arrActTetels)
		if ( arrActTetels == null ) { 
			arrActTetels = []
			return 
		}
		var allTetels = document.getElementById("div_QingTetels").getElementsByClassName("tetel")
		for ( var i=0; i<allTetels.length; i++ ) {
			var tetel = allTetels[i].innerHTML
			if ( arrActTetels.includes(tetel) == true ) { 
				allTetels[i].style.backgroundColor = "lightgreen"
				//console.log(tetel)
			}
		}
	}
	F_checkTetels()
	
	function F_checkQs() {
		// phase 1 --> megnézi, melyek az aktuális questek
		var actQs = ""
		var allTetels = document.getElementById("div_QingTetels").getElementsByClassName("tetel")
		for ( var x=0; x<allTetels.length; x++ ) {
			if ( allTetels[x].style.backgroundColor == "lightgreen" ) { 
				var tetelName = allTetels[x].innerHTML
				//console.log(tetelName)
				//console.log(arrTetelQs[tetelName])
				actQs = actQs + arrTetelQs[tetelName] +","
			}
		}
		actQs = actQs.substring(0, actQs.length - 1) // végén lévő vesszőt kiveszi, hogy ne legyen empty Q benne
		actQs = actQs.split(",")
		
		// phase 2 --> egyesével lehívja qNev, és megnézi, hogy benne van-e LS-ben
			// ha nincs --> arrNewQs-ba adja a nevét (ha még nincs benne)
			// ha igen --> arrOldQs-ba adja a nevét (ha még nincs benne)
		arrOldQs = []
		arrNewQs = []
		for ( var x=0; x<actQs.length; x++ ) {
			if ( actQs[x] == "" ) { continue }
			var qNev = arrQnev[actQs[x]].qNev
			//console.log(actQs[x]+": "+qNev)
			
			if ( localStorage.getItem(currPath+" | "+qNev) != null ) { 
				if ( arrOldQs.includes(actQs[x]) != true ) { arrOldQs.push(actQs[x]) }
			} else {
				if ( arrNewQs.includes(actQs[x]) != true ) { arrNewQs.push(actQs[x]) }
			}
		}
		document.getElementById("btn_newQuest").innerHTML = arrNewQs.length
		//console.log("newQs: "+arrNewQs)
		//console.log("oldQs: "+arrOldQs)
		
		for ( var x=0; x<arrOldQs.length; x++ ) {
			var i = arrOldQs[x]
			var qNev = arrQnev[i].qNev
			var jegyName = localStorage.getItem(currPath+" | "+qNev)
			var jegy = jegyName.slice(0,jegyName.indexOf(" , "))
			var date = jegyName.slice(jegyName.indexOf(" , ")+3)
		}
	}
	F_checkQs()
}
function F_clickTetel(detElem) {
	//console.log(detElem.innerHTML)
	//console.log(arrTetelQs[detElem.innerHTML])
	if ( detElem.style.backgroundColor == "lightgreen" ) {
		detElem.style.backgroundColor = ""
		arrActTetels.splice(arrActTetels.indexOf(detElem.innerHTML),1)
		//console.log(arrActTetels)
		localStorage.setItem(currPath+" | activeTetels", JSON.stringify(arrActTetels))
	} else {
		detElem.style.backgroundColor = "lightgreen"
		arrActTetels.push(detElem.innerHTML)
		//console.log(arrActTetels)
		localStorage.setItem(currPath+" | activeTetels", JSON.stringify(arrActTetels))
	}
	F_loadLS()
}
function F_loadTetels() {
	var elems = document.getElementById("div_QingTargyText").getElementsByTagName("*")
	var string = ""
	var fontSize
	if ( isAndroid ) { fontSize = 420 } else { fontSize = 140 }
	var titleStyle = ' style="background-color:gainsboro; font-size:'+fontSize+'%; font-weight:bold; color:black;"'
	if ( isAndroid ) { fontSize = 360 } else { fontSize = 120 }
	var tetelStyle = ' style="font-size:'+fontSize+'%; font-weight:bold; cursor:pointer" onclick="F_clickTetel(this)"'
	for ( var x = 0;   x < elems.length;   x++ ) {
		if ( elems[x].className.indexOf("mainTitle") != -1 ) {
			string = string+ "<details><summary" +titleStyle+ ">" +elems[x].innerHTML+ "</summary>"
			var childs = elems[x].parentElement.getElementsByTagName("*")
			for ( var y = 0;   y < childs.length;   y++ ) {
				if ( childs[y].className.indexOf("phase") != -1 || childs[y].className.indexOf("status") != -1 ) {
					string = string+ '<div><span class="tetel"' +tetelStyle+ ">" +childs[y].innerHTML+ " <!--" +elems[x].innerHTML+ "--></span></div>"
				}
			}
			string = string+ "</details>"
			x = x + childs.length
		} else if ( elems[x].className.indexOf("phase") != -1 || elems[x].className.indexOf("status") != -1 ) {
			string = string + '<div><span class="tetel"' +tetelStyle+ ">" +elems[x].innerHTML+ "</span></div>"
		}
	}
	document.getElementById("div_QingTetels").innerHTML = string
}
function F_createQingElems() {
	function F_btnToggleQing() { // jobb felső sarokban a Toggle ... mindig látható
		var button = document.createElement("input")
		button.id = "btn_toggleQing"
		button.type = "button"
		document.body.appendChild(button)
		button.style.width = "90px"
		button.style.height = "90px"
		button.style.position = "absolute"
		button.style.right = "2px"
		button.style.top = "2px"
		button.style.cursor = "pointer"
		button.style.zIndex = "2"

		button.onclick = function(){ 
			var currTime = F_getTime()
			var diffTime = currTime - lastClickTime
			//console.log(myTime+" vs "+lastClickTime)
			if ( diffTime < 1 ) { return }
			lastClickTime = currTime
			document.getElementById("div_QingBg").style.display = "block"
			this.style.backgroundColor  = "black"
			var int_Click = window.setInterval(function(){
				clearInterval(int_Click) 
				F_toggleQing()
				document.getElementById("div_QingBg").style.display = "none"
				document.getElementById("btn_toggleQing").style.backgroundColor = ""
			}, 100)
		}
	}
	F_btnToggleQing()
	function F_divQingBg() { // töltés(toggle,) alatt elszürkül
		var div = document.createElement("div")
		document.body.appendChild(div)
		div.id = "div_QingBg"
		div.style.backgroundColor = "black"
		div.style.opacity = "0.35"
		div.style.overflow = "auto"
		div.style.display = "none"
		div.style.position = "fixed"
		div.style.left = "5px"
		div.style.right = "5px"
		div.style.top = "4px"
		div.style.bottom = "4px"
		div.style.zIndex = "1"
	}
	F_divQingBg()
	function F_divMain() { // ebbe az összes Qing element --> elhide-lásuk easy legyen, azért kell
		var div = document.createElement("div")
		div.id = "div_QingMain"
		div.style.display = "none"
		div.style.position = "relative"
		document.body.appendChild(div)
		/*var parent = document.body
		parent.insertBefore(div,parent.firstChild)*/
	}
	F_divMain()
	function F_divUpperPart() { // felső kis rész: kiírások (tételszám, Q szám) + Q-ek osztájzása
		var div = document.createElement("div")
		document.getElementById("div_QingMain").appendChild(div)
		div.id = "div_QingUpperPart"
		//div.className = "normal"
		div.style.borderBottom = "4px solid black"
		//div.style.marginBottom = "2px"
		div.style.paddingBottom = "5px"
		div.style.height = "85px" // 17vh
	}
	F_divUpperPart()
	function F_divLowerPart() { // alsó nagy rész: Q amit kidob
		var div = document.createElement("div")
		div.id = "div_QingLowerPart"
		//div.className = "normal"
		//div.style.backgroundColor = "yellow"
		document.getElementById("div_QingMain").appendChild(div)
	}
	F_divLowerPart()
	function F_divMarkPart() { // jobb felső rész: Q-ek osztájzása
		var span = document.createElement("span")
		document.getElementById("div_QingUpperPart").appendChild(span)
		span.id = "span_QingMarkPart"
		
		span.style.position = "absolute"
		span.style.left = "290px"
		span.style.right = "90px"
		span.style.top = "0px"
		span.style.height = "111px"
		span.style.maxHeight = "300px"
		
		span.style.overflowX = "auto"
	}
	F_divMarkPart()
	function F_spanSettings() { // bal felső sarok kiírások: tételszám, Q szám, ...
		var span = document.createElement("span")
		document.getElementById("div_QingUpperPart").appendChild(span)
		span.id = "span_QingSettings"
		span.style.height = "80px"
	}
	F_spanSettings()
	function F_btnNextQ() {
		var button = document.createElement("button")
		button.id = "btn_QingNextQ"
		document.getElementById("div_QingUpperPart").appendChild(button)
		button.innerHTML = " ► "
		
		button.style.height = "50px"
		button.style.width = "50px"
		button.style.border = "3px solid black"
		button.style.backgroundColor = "white"
		button.style.cursor = "pointer"
		
		button.style.position = "absolute"
		button.style.left = "235px"
		button.style.top = "18px"
		button.style.right = "90px"
		button.style.overflow = "auto"
		
		button.onclick = function() { 
			var thisTime = F_getTime()
			var diffTime = thisTime - lastClickTime
			//console.log(myTime+" vs "+lastClickTime)
			if ( diffTime < 1 ) { return }
			if ( this.style.backgroundColor == "aqua" ) { 
				document.body.style.backgroundColor = "Gainsboro"
			} else {
				this.style.backgroundColor  = "black"
				this.style.color  = "white"
			}
			var int_Click = window.setInterval(function(){
				clearInterval(int_Click) 
				lastClickTime = F_getTime()
				F_nextQ()
				document.body.style.backgroundColor = ""
			}, 100)
		}
	}
	F_btnNextQ()
	// 1st line
	function F_btnTetels() {
		var button = document.createElement("button")
		document.getElementById("span_QingSettings").appendChild(button)
		button.id = "btn_QingTetels"
		button.style.border = "3px solid black"
		button.style.backgroundColor = "Bisque"
		button.style.cursor = "pointer"
		button.innerHTML = "tétel"
		button.onclick = function(){ 
			if ( this.style.borderColor == "limegreen" ) {
				document.getElementById("div_QingLowerPart").style.display = "block"
				this.style.borderColor = "black"
				document.getElementById("div_QingTetels").style.display = "none"
			} else {
				F_hideAllower()
				this.style.borderColor = "limegreen"
				document.getElementById("div_QingTetels").style.display = "block"
			}
		}
	}
	F_btnTetels()
	function F_spanTime() { // mennyi ideje oldottam meg átlagosan őket
		var span = document.createElement("span")
		document.getElementById("span_QingSettings").appendChild(span)
		span.id = "span_QingTime"
		span.style.border = "1px solid black"
		span.style.backgroundColor = "White"

		span.style.paddingLeft = "5px"
		span.style.paddingRight = "5px"
		span.style.paddingTop = "1px"
		span.style.paddingBottom = "2px"
		
		span.innerHTML = "?"
	}
	F_spanTime()
	function F_btnQingMenu() { // nagy menü lehívása részletekért (saveLS, loadLS...)
		var button = document.createElement("button")
		document.getElementById("span_QingSettings").appendChild(button)
		button.id = "btn_QingMenu"
		button.style.border = "3px solid black"
		button.style.backgroundColor = "Bisque"
		button.style.cursor = "pointer"
		button.innerHTML = "&#9881;"
		button.onclick = function(){ 
			if ( this.style.borderColor == "limegreen" ) {
				document.getElementById("div_QingLowerPart").style.display = "block"
				this.style.borderColor = "black"
				document.getElementById("div_QingMenu").style.display = "none"
			} else {
				F_hideAllower()
				this.style.borderColor = "limegreen"
				document.getElementById("div_QingMenu").style.display = "block"
			}
		}
	}
	F_btnQingMenu()
	function F_spanJegy() { // mennyi az átlag jegy
		var span = document.createElement("span")
		document.getElementById("span_QingSettings").appendChild(span)
		span.id = "span_QingJegy"
		span.style.border = "1px solid black"
		span.style.backgroundColor = "White"

		span.style.paddingLeft = "5px"
		span.style.paddingRight = "5px"
		span.style.paddingTop = "1px"
		span.style.paddingBottom = "2px"
		
		span.innerHTML = "?"
	}
	F_spanJegy()
	function F_btnQuests() {
		var button = document.createElement("button")
		document.getElementById("span_QingSettings").appendChild(button)
		button.id = "btn_QingQuests"
		button.style.border = "3px solid black"
		button.style.backgroundColor = "Bisque"
		button.style.cursor = "pointer"
		button.onclick = function(){ 
			if ( this.style.borderColor == "limegreen" ) {
				document.getElementById("div_QingLowerPart").style.display = "block"
				this.style.borderColor = "black"
				document.getElementById("div_QingQuests").style.display = "none"
			} else {
				F_hideAllower()
				this.style.borderColor = "limegreen"
				document.getElementById("div_QingQuests").style.display = "block"
			}
		}
		
		button.innerHTML = "?"
	}
	F_btnQuests()
	// 2nd line
	var br = document.createElement("br")
	document.getElementById("span_QingSettings").appendChild(br)
	var br = document.createElement("br")
	document.getElementById("span_QingSettings").appendChild(br)
	function F_btnNewQ() {
		var button = document.createElement("button")
		button.id = "btn_newQuest"
		document.getElementById("span_QingSettings").appendChild(button)
		button.style.border = "3px solid black"
		button.style.backgroundColor = "White"
		button.style.cursor = "pointer"

		button.onclick = function(){ 
			if ( this.style.borderColor == "limegreen" ) {
				this.style.borderColor = "black"
				localStorage.removeItem("hk.newQ")
			} else {
				this.style.borderColor = "limegreen"
				localStorage.setItem("hk.newQ",true)
			}
		}
		
		button.innerHTML = "?"
	}
	F_btnNewQ()
	function F_spanRepSlow() {
		var span = document.createElement("span")
		span.id = "span_RepSlow"
		document.getElementById("span_QingSettings").appendChild(span)
		span.style.border = "1px solid black"
		span.style.backgroundColor = "Gainsboro"

		span.style.paddingLeft = "5px"
		span.style.paddingRight = "5px"
		span.style.paddingTop = "1px"
		span.style.paddingBottom = "2px"
		
		span.innerHTML = "?"
	}
	F_spanRepSlow()
	function F_btnRepFast() {
		var button = document.createElement("button")
		button.id = "span_repFast"
		document.getElementById("span_QingSettings").appendChild(button)
		button.style.border = "3px solid black"
		button.style.backgroundColor = "pink"
		button.style.cursor = "pointer"
		
		button.onclick = function(){ 
			if ( this.style.borderColor == "limegreen" ) {
				this.style.borderColor = "black"
			} else {
				this.style.borderColor = "limegreen"
			}
		}
		
		button.innerHTML = "?"
	}
	F_btnRepFast()
	function F_spanNewOldBorder() {
		var span = document.createElement("span")
		span.id = "span_QingNewOldBorder"
		document.getElementById("span_QingSettings").appendChild(span)
		span.style.border = "3px solid limegreen"
		span.style.cursor = "ponter"

		span.style.paddingTop = "1px"
		span.style.paddingBottom = "2px"
		span.onclick = function(){ 
			if ( this.style.borderColor == "limegreen" ) {
				this.style.borderColor = "black"
			} else {
				this.style.borderColor = "limegreen"
			}
		}
	}
	F_spanNewOldBorder()
	function F_spanRepNew() {
		var span = document.createElement("span")
		span.id = "span_QingRepNew"
		document.getElementById("span_QingNewOldBorder").appendChild(span)
		span.style.backgroundColor = "White"

		span.style.paddingLeft = "5px"
		span.style.paddingRight = "5px"
		span.style.paddingTop = "1px"
		span.style.paddingBottom = "2px"
		
		span.innerHTML = "?"
	}
	F_spanRepNew()
	function F_spanRepOld() {
		var span = document.createElement("span")
		span.id = "span_QingRepOld"
		document.getElementById("span_QingNewOldBorder").appendChild(span)
		span.style.backgroundColor = "Gainsboro"

		span.style.paddingLeft = "5px"
		span.style.paddingRight = "5px"
		span.style.paddingTop = "1px"
		span.style.paddingBottom = "2px"
		
		span.innerHTML = "?"
	}
	F_spanRepOld()
	
	function F_divMenu() { // specific: save/clear/load LS, stb. ennél
		var div = document.createElement("div")
		div.id = "div_QingMenu"
		document.getElementById("div_QingMain").appendChild(div)
		div.style.backgroundColor = "white"
		div.style.border = "10px solid black"
		div.style.display = "none"
		div.style.height =  document.body.clientHeight - 80 - 20/*border*/ - 25/*passz, de még vannak margin & padding-ek*/
		div.style.overflow = "auto"
	}
	F_divMenu()
	function F_btnSaveLS() {
		var button = document.createElement("button")
		document.getElementById("div_QingMenu").appendChild(button)
		button.id = "btn_saveLS"
		button.innerHTML = "LS"
		button.style.cursor = "pointer"
		
		button.style.fontWeight = "bold"
		button.style.backgroundColor = "Chartreuse"
		button.style.border = "3px solid black"
		
		button.style.width = "90px"
		button.style.height = "90px"
		var lastClickTime = 0
		button.onclick = function() {
			var currTime = F_getTime()
			var diffTime = currTime - lastClickTime
			if ( diffTime < 1 ) { return }
			lastClickTime = currTime
			
			this.style.backgroundColor = "aqua"
			var int_Click = window.setInterval(function(){
				// saveLS
				document.getElementById('btn_saveLS').style.backgroundColor = "Chartreuse"
			}, 500)
		}
	}
	F_btnSaveLS()
	function F_btnLoadLS() {
		var button = document.createElement("button")
		document.getElementById("div_QingMenu").appendChild(button)
		button.id = "btn_clearLS"
		button.innerHTML = "LS"
		button.style.cursor = "pointer"
		
		button.style.fontWeight = "bold"
		button.style.border = "3px solid black"
		
		button.style.width = "90px"
		button.style.height = "90px"
		var lastClickTime = 0
		button.onclick = function() {
			var currTime = F_getTime()
			var diffTime = currTime - lastClickTime
			if ( diffTime < 1 ) { return }
			lastClickTime = currTime
			
			this.style.backgroundColor = "aqua"
			var int_Click = window.setInterval(function(){
				document.getElementById('fileinput').click()
				document.getElementById('btn_clearLS').style.backgroundColor = ""
			}, 500)
		}
	}
	F_btnLoadLS()
	function F_btnClearLS() {
		var button = document.createElement("button")
		document.getElementById("div_QingMenu").appendChild(button)
		button.innerHTML = "LS"
		button.style.cursor = "pointer"
		
		button.style.color = "white"
		button.style.backgroundColor = "red"
		button.style.fontWeight = "bold"
		button.style.border = "3px solid black"
		
		button.style.width = "90px"
		button.style.height = "90px"
		var lastClickTime = 0
		button.onclick = function() {
			var currTime = F_getTime()
			var diffTime = currTime - lastClickTime
			if ( diffTime < 1 ) { return }
			lastClickTime = currTime
			
			this.style.backgroundColor = "aqua"
			var int_Click = window.setInterval(function(){
				localStorage.clear()
				localStorage.setItem("lsCount",0)
				document.getElementById('btn_saveLS').style.backgroundColor = "red"
			}, 500)
		}
	}
	F_btnClearLS()
	
	function F_divTargyText() { // láthatatlan -> tárgy full textje ebben
		var div = document.createElement("div")
		div.id = "div_QingTargyText"
		div.className = "normal"
		div.style.display = "none"
		document.body.appendChild(div)
	}
	F_divTargyText()
	function F_divTetels() { // tételválasztás
		var div = document.createElement("div")
		div.id = "div_QingTetels"
		document.getElementById("div_QingMain").appendChild(div)
		div.style.backgroundColor = "white"
		div.style.border = "10px solid black"
		div.style.display = "none"
		div.style.maxHeight = "90%"
		//div.style.height = document.body.clientHeight - 80 - 20/*border*/ - 25/*passz, de még vannak margin & padding-ek*/
		div.style.overflow = "auto"
		
		//div.innerHTML = "tételek"
	}
	F_divTetels()
	function F_divQuests() { // questek státusza
		var div = document.createElement("div")
		div.id = "div_QingQuests"
		document.getElementById("div_QingMain").appendChild(div)
		div.style.backgroundColor = "white"
		div.style.border = "10px solid black"
		div.style.display = "none"
		div.style.height =  document.body.clientHeight - 80 - 20/*border*/ - 25/*passz, de még vannak margin & padding-ek*/
		div.style.overflow = "auto"
		
		div.innerHTML = "questek"
	}
	F_divQuests()
	
	function F_divSelectJegy() {
		var div = document.createElement("div")
		div.id = "div_selectJegy"
		document.getElementById("div_QingUpperPart").appendChild(div)
		div.style.position = "absolute"
		div.style.top = "60px"
		div.style.width = "45px"
		div.style.display = "none"
		div.style.backgroundColor = "#f1f1f1"
		div.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.4)"
		div.style.border = "1px solid grey"
		div.style.zIndex = "2"
		div.style.textAlign = "center"
		var array = ["&nbsp","1","2","3"]
		for ( var x=0;  x<array.length;  x++ ) {
			var a = document.createElement("a")
			div.appendChild(a)
			a.innerHTML = array[x]
			a.style.padding = "5px 10px"
			a.style.display = "block"
			a.style.cursor = "pointer"
			a.onclick = function() { 
				var i = this.parentElement.dataset.numQ
				document.getElementById("span.1."+i).innerHTML = this.innerHTML
			}
			a.onmouseover = function() { this.style.backgroundColor = "grey" }
			a.onmouseout = function() { this.style.backgroundColor = "" }
		}
	}
	F_divSelectJegy()
	
	function F_hideAllower() {
		document.getElementById("div_QingLowerPart").style.display = "none"
		document.getElementById("div_QingMenu").style.display = "none"
		document.getElementById("div_QingTetels").style.display = "none"
		document.getElementById("div_QingQuests").style.display = "none"
		
		document.getElementById("btn_QingMenu").style.borderColor = "black"
		document.getElementById("btn_QingTetels").style.borderColor = "black"
		document.getElementById("btn_QingQuests").style.borderColor = "black"
	}
}
F_createQingElems()
function F_getQnev(detElem){
	var qNev = undefined
	if ( detElem.tagName == "DETAILS" ) { qNev = detElem.firstChild.innerHTML }
	if ( detElem.tagName == "TH" ) { qNev = detElem.innerHTML }
	if ( detElem.tagName == "TD" ) { qNev = detElem.innerHTML }
	if ( detElem.tagName == "LI" ) { qNev = detElem.innerHTML }
	if ( detElem.classList.contains("abbr") ) { qNev = detElem.innerHTML }
	if ( detElem.classList.contains("midQ") ) { qNev = detElem.innerHTML }
	if ( qNev == undefined ) { // div, span
		qNev = detElem.firstChild.innerHTML
		console.log('A <'+detElem.tagName+' class="'+detElem.className+'">-nek a qNeve: '+qNev)
	}
	
	if ( detElem.className.indexOf("[") != -1 ) { 
		var impID = F_getImpID(detElem)
		// de! csak akkor teszi mögé, ha ezen oldalról származik
		var path = F_getQPath(detElem,impID)
		if ( path == currPath ) { qNev = qNev + " <!--["+impID+"]-->" }
	}
	// var impID = F_getImpID(detElem)
	return qNev
}
function F_arrQs(){
	var allQs = document.getElementById("div_QingTargyText").getElementsByClassName("kerdes")
	var arrQnevMulti = [] // csak, amelyik ismétlődik
	for ( var i=0; i<allQs.length; i++ ) { 
		var qNev = F_getQnev(allQs[i])
		//console.log(qNev)
		// if ( typeof arrQnev[qNev] === 'undefined' ) { // does not exist
		if ( arrQnev.includes(qNev) == false ) { // does not exist
			arrQnev.push(qNev)
		} else if ( arrQnevMulti.includes(qNev) == false && qNev.indexOf("[") == -1 ) {  // does not exist
			arrQnevMulti.push(qNev)
			//var impID = F_getImpID(allQs[i])
			//console.log("# "+i+": "+allQs[i].className+": "+qNev)
		}
	}
	arrQnev = []
	for ( var i=0; i<allQs.length; i++ ) { 
		var qNev = F_getQnev(allQs[i])
		var qText = allQs[i].innerHTML
		//console.log(i+": "+qNev)
		
		// ha többször van a qNev, akkor hozzáadja note-ba a shortent
		var noteText = ""
		if ( arrQnevMulti.includes(qNev) == true ) {
			if ( qText.length > 100 ) {
				noteText = "<!-- "+qText.length+" -->"
			} else {
				var string = qText
				string = string.replaceAll("<!--","")
				string = string.replaceAll("-->","")
				noteText = "<!-- "+string+" -->"
			}
		}
		
		arrQnev[i] = {}
		arrQnev[i].qNev = qNev +noteText
		arrQnev[i].content = qText
		
		var inTetel = false
		var inTitle = false
		var parent = allQs[i]
		do {
			if ( parent.firstChild.className == "phase" ) { inTetel = parent.firstChild.innerHTML }
			if ( parent.firstChild.className == "status" ) { inTetel = parent.firstChild.innerHTML }
			parent = parent.parentElement
		} while ( inTetel == false && parent != document.body )
		if ( inTetel != false ) {
			do {
				if ( parent.firstChild.className == "mainTitle" ) { 
					inTitle = parent.firstChild.innerHTML
					inTetel = inTetel+" <!--"+inTitle+"-->"
				}
				parent = parent.parentElement
			} while ( inTitle == false && parent != document.body )
			if ( arrTetelQs[inTetel] ) {
				arrTetelQs[inTetel] = arrTetelQs[inTetel] +","+ i
			} else {
				arrTetelQs[inTetel] = i
			}
			//console.log(i+": "+inTetel+": "+arrTetelQs[inTetel])
		}
		
		/*if ( typeof arrQnevMulti[qNev] != 'undefined' ) { // többször van
			//console.log(i+": "+qNev)
			if ( arrQnevMulti.includes(qNev) == true ) { 
				arrQnevMulti[qNev] = i+""
				//console.log("new: "+i)
			} else {
				var skip = false
				var string = arrQnevMulti[qNev]
				//console.log(string)
				var arrPrev = string.split(" ")
				for ( var x in arrPrev ) {
					var num = arrPrev[x]
					var numText = arrQnev[num].content
					//console.log(num)
					//console.log(numText)
					//console.log(qText)
					if ( qText == numText ) { 
						skip = true
						break
					}
				}
				if ( skip == true ) { continue }
				arrQnevMulti[qNev] = arrQnevMulti[qNev] +" "+ i 
				//console.log(arrQnevMulti[qNev])
				//alert("stop")
			}
		}*/
	}
}
function F_toggleQing() {
	if ( document.getElementById("div_pageQTargy").style.display == 'none' ) {
		localStorage.removeItem("hk.ToggleAll")
		document.getElementById("table_weboldalak").parentElement.parentElement.style.display = 'block';
		document.getElementById("div_pageQTargy").style.display = 'block';
		document.getElementById("div_QingMain").style.display = 'none';
	} else {
		localStorage.setItem("hk.ToggleAll",currPath)
		document.getElementById("table_weboldalak").parentElement.parentElement.style.display = 'none';
		document.getElementById("div_pageQTargy").style.display = 'none';
		document.getElementById("div_QingMain").style.display = 'block';
		
		document.getElementById("div_QingTargyText").innerHTML = pageTexts[currPath]
		//console.log(allQs.length)
		F_loadImpQs(document.getElementById("div_QingTargyText"),"full")
		//console.log(allQs.length)
		//console.log(document.getElementById("div_QingTargyText").innerHTML)
		
		F_arrQs()
		F_loadTetels()
		F_loadLS()
	}
}
function F_calcNextQ(){
	var questID = "none"
	var currTime = F_getTime()
	currTime = Math.round(currTime)
	
	/* prior
		newQ, ha engedélyezve(btn_newQuest) és van is még olyan
	*/
	if ( document.getElementById("btn_newQuest").style.borderColor == "limegreen" ) {
		if ( arrNewQs.length > 0 ) { questID = arrNewQs[0] }
	} else {
		var qPoint = 0
		for ( var x=0; x<arrOldQs.length; x++ ) {
			var i = arrOldQs[x]
			var qNev = arrQnev[i].qNev
			var jegyName = localStorage.getItem(currPath+" | "+qNev)
			var jegy = jegyName.slice(0,jegyName.indexOf(" , "))
			var date = jegyName.slice(jegyName.indexOf(" , ")+3)
			var diffTime = Number(currTime) - Number(date)
			var currPoint = Number(diffTime) / Number(jegy)
			if ( Number(currPoint) > Number(qPoint) ) {
				qPoint = currPoint
				questID = i
			}
			//console.log(i+" "+jegy+" "+diffTime)
		}
	}
	return questID
}
function F_nextQ() {
	var currTime = F_getTime()
	currTime = Math.round(currTime)
	
	F_saveLS()
	F_loadLS()
	var questID = F_calcNextQ()  // megnézi melyik Q lesz a kövi
	if ( questID == "none" ) { 
		alert("elfogytak a kérdések")
		return
	}
	
	var allQs = document.getElementById("div_QingTargyText").getElementsByClassName("kerdes")
	var qElem = allQs[questID]
	
	// felmegy document.body -> ha status van, az lesz amit bemásol; (de! a Q ami ugye ki lesz jelölve változatlan)
	function F_getParentQ(qElem) {
		var parent = qElem
		var parQ = false
		var parQtype = "status"
		do {
			if ( parent.firstChild.className == "status" ) { parQ = parent }
			if ( parent.parentElement.firstChild.className == "phase" ) { parQ = parent }
			parent = parent.parentElement
		} while ( parQ == false && parent != document.body )
		if ( parQ == false ) { parQ = qElem }
		return parQ
	}
	var parQ = F_getParentQ(qElem)
	
	var xTOi = [] // x = amit kidob kérdések, ott hányadik fenntről lefele; i = tárgy összes kérdése közül hányadik
	var iTOnum = [] // num = amit kidob kérdések, ott hányadik fenntről lefele DE! ami többször van, az ugyanazt kapja!
	var QsNum = 0 // számozásnál kell
	
	// kérdéseket kiírja
	/*function F_writeQs() {
		var text = ""
		text = parQ.outerHTML
		var stuff = ""
		if ( parQ.classList.contains("kerdes") ) { stuff = ' class="kerdes"' }
		if ( parQ.classList.contains("open") ) { stuff = stuff+ " open" }
		text = "<details"+stuff+">"+parQ.innerHTML+"</details>"
		document.getElementById("div_QingLowerPart").innerHTML = text
	}
	F_writeQs()*/
	
	// megnézi mindegyik Q-t, hogy az allQs-ban hányadik --> ugyanis úgy tudom lekérni a nevét majd
	function F_checkNum() { 
		var x = 0
		if ( parQ.classList.contains("kerdes") ) { 
			for ( var i=0; i<allQs.length; i++ ) { 
				if ( parQ == allQs[i] ) {
					xTOi[x] = i
					// ellenőrzésnek: 
					// parQ.firstChild.innerHTML = "["+x+","+i+"] "+parQ.firstChild.innerHTML
					continue
				}
			}
		}
		var parQs = parQ.getElementsByClassName("kerdes")
		for ( var count=0; count<parQs.length; count++ ) { 
			x = x +1
			for ( var i=0; i<allQs.length; i++ ) { 
				if ( parQs[count] == allQs[i] ) {
					xTOi[x] = i
					// ellenőrzésnek: 
					// parQs[count].firstChild.innerHTML = "["+x+","+i+"] "+parQs[count].firstChild.innerHTML
					continue
				}
			}
		}
	}
	F_checkNum()
	
	document.getElementById("div_QingLowerPart").innerHTML = parQ.outerHTML
	
	// lehívja(/craftolja) az osztályzás opciókat mellé!
	function F_createMarks() {
		function F_getNum(i) { // lekéri a kidobott Q számozását (ami többször szerepel, az ugyanazt kapja)
			if ( iTOnum[i] ) {
				num = iTOnum[i]
			} else {
				QsNum = QsNum +1
				iTOnum[i] = QsNum
			}
			return QsNum
		}
		function F_createSelect(num) {
			var parSpan = document.createElement("span")
			parSpan.id = "parSpan."+num
			parSpan.style.position = "absolute"
			var leftPos = num*48 -48
			parSpan.style.left = leftPos +"px"
			document.getElementById("span_QingMarkPart").appendChild(parSpan)
			for ( var x=0;  x<3;  x++ ) {
				var span = document.createElement("span")
				span.id = "span."+x+"."+num
				parSpan.appendChild(span)
				span.style.textAlign = "center"
				
				span.style.position = "absolute"
				span.style.width = "45px"
				span.style.height = "27px"
				span.style.lineHeight = "27px" // hogy középen legyen vertically(y-tengely) is a text
				span.style.border = "2px solid black"
				
				if ( x == 0 ) {
					span.style.top = "0px"
					span.innerHTML = num
					span.style.fontWeight = "bold"
					/*if ( isAndroid == true ) { 
						td.onclick = function(){
							var div = document.getElementById("div_qProp")
							var span = document.getElementById("span_qProp")
							
							var num = this.innerHTML
							var LSid = activeQs[num]
							var jegy = localStorage.getItem(LSid+'_jegy')
							var repeat = localStorage.getItem(LSid+'_repeat')
							
							if ( div.style.display == "none" ) {
								F_hideQArea()
								div.style.display = "block"
								span.innerHTML = num+"<br>"+LSid+"<br> Jegy:"+jegy+"<br>Repeat:"+repeat+"<br>"
							} else {
								F_hideQArea()
								document.getElementById("divQloc").style.display = "block"
							}
						}
					}*/
				} else if ( x == 1 ) {
					var div = document.createElement("DIV")
					span.appendChild(div)
					span.style.top = "30px"
					span.innerHTML = "&nbsp"
					var jegyStatus = "hide"
					span.onclick = function(){ 
						var dropdown = document.getElementById("div_selectJegy")
						var num = this.id
						num = num.slice(num.lastIndexOf(".")+1)
						dropdown.dataset.numQ = num
						
						dropdown.style.left = F_offsetXY(this).left -1 +"px"
						
						// this.parentElement.appendChild(dropdown)
						
						dropdown.style.display = "block"
						jegyStatus = "show"
						window.onclick = function(event) { 
							if ( jegyStatus == "hide" ) { document.getElementById("div_selectJegy").style.display = "none" }
							jegyStatus = "hide"
						}
						
						// repeatest beállítja vastagbetusre
						var i = document.getElementById('parSpan.'+num).dataset.elemi
						var qNev = arrQnev[i].qNev
						if ( localStorage.getItem(currPath+" | "+qNev) ) {
							var jegyName = localStorage.getItem(currPath+" | "+qNev)
							var jegy = jegyName.slice(0,jegyName.indexOf(" , "))
							var child = dropdown.childNodes
							for ( var y=0; y < child.length; y++ ) {
								if ( child[y].innerHTML == jegy ) {
									child[y].style.fontWeight = "bolder"
								} else {
									child[y].style.fontWeight = "normal"
								}
							}
						}
					}
				} else if ( x == 2 ) {
					span.style.top = "60px"
					span.style.fontSize = "x-small"
				}
			}
		}
		var Qs = document.getElementById("div_QingLowerPart").getElementsByClassName("kerdes")
		for ( var x=0; x<Qs.length; x++ ) { 
			if ( Qs[x].offsetParent === null ) { continue }
			if ( Qs[x].dataset.numed == "true" ) { continue }
			var i = xTOi[x]
			var num = F_getNum(i)
			document.getElementById("div_QingLowerPart").dataset.numQ = num // hány db Q látszik összesen
			
			// Q elé beírja a számát
			Qs[x].firstChild.innerHTML = "["+num+"] "+Qs[x].firstChild.innerHTML
			Qs[x].dataset.numed = "true"
			
			if ( !document.getElementById('parSpan.'+num) ) { F_createSelect(num) }
			document.getElementById('parSpan.'+num).style.display = "block"
			document.getElementById('parSpan.'+num).dataset.elemi = i
			
			// sárga keretet tesz az aktuális Q-ra
			if ( questID == i ) { 
				document.getElementById('span.0.'+num).style.border = "2px solid gold"
			} else {
				document.getElementById('span.0.'+num).style.border = "2px solid black"
			}
			
			// beírja a dátumot, ha van
			var qNev = arrQnev[i].qNev
			if ( localStorage.getItem(currPath+" | "+qNev) ) {
				var jegyName = localStorage.getItem(currPath+" | "+qNev)
				var date = jegyName.slice(jegyName.indexOf(" , ")+3)
				var diffTime = Number(currTime) - Number(date)
				diffTime = Number(diffTime)
				diffTime = diffTime/60
				diffTime = Math.floor(diffTime)
				if ( diffTime > 99 ) {
					document.getElementById("span.2."+num).innerHTML = Math.floor(diffTime/60)
				} else {
					document.getElementById("span.2."+num).innerHTML = "<strong>"+diffTime+"</strong>"
				}
			} else {
				document.getElementById('span.1.'+num).innerHTML = "&nbsp"
				document.getElementById('span.2.'+num).innerHTML = "&nbsp"
			}
		}
	}
	F_createMarks()
	
	function F_onToggle() {
		var arrayDetails = document.getElementById("div_QingLowerPart").getElementsByTagName("details")
		//for ( var i=0; i<arrayDetails.length; i++ ) { arrayDetails[i].addEventListener("toggle", alert("toggle")) } 
		for ( var i=0; i<arrayDetails.length; i++ ) { arrayDetails[i].ontoggle = function() { 
			F_createMarks() 
			/*F_loadDetails(this)
			F_highlightQ()*/
			//F_onToggle()
		} }
	}
	F_onToggle()
	
	// bejelöli melyik a main!
	
	
	/* document.getElementById("btn_QingNextQ").style.color = ""
	if ( localStorage.getItem("hk.lastSavedLS") > 4 ) { 
		document.getElementById("btn_QingNextQ").style.backgroundColor = "aqua" 
	} else {
		document.getElementById("btn_QingNextQ").style.backgroundColor = "white"
	} */
	
}
// –––––––––––––––  Qing END  –––––––––––––––

function F_andrSize() { if ( isAndroid ) { 
	//document.body.style.fontSize = "300%" // android font size
	document.getElementById('link_style').href = 'styleAndroid.css'; // android li,table position
	
	//imgMiniHeight = "54px"
	document.getElementById('btn_toggleSearch').style.fontSize = '100%'
	document.getElementById('btn_toggleLoad').style.width = "90px"
	document.getElementById('btn_toggleLoad').style.height = "90px"
	//document.getElementById('btn_clearIDB').style.width = "90px"
	document.getElementById('btn_clearIDB').style.height = "90px"
  } else {
	//imgMiniHeight = "18px"
	document.getElementById('btn_toggleSearch').style.fontSize = '300%'
	document.getElementById('btn_toggleLoad').style.width = "40px"
	document.getElementById('btn_toggleLoad').style.height = "40px"
	//document.getElementById('btn_clearIDB').style.width = "40px"
	document.getElementById('btn_clearIDB').style.height = "40px"
} }
F_andrSize()
function F_tableScrollable(detElem) { // table ha nem fér ki, akkor vízszintesen scrollable (ANDROID)
/* Hogyan?
	✔ megnézi a detElem összes table child-ját
		detElem = amit megnyitottam (details / page)
	✔ feltételek: (1) visible (2) parentje még nem lett le kreálva
	✔ kreál egy parent div-et, ami overflow-X:auto
*/
	var allTable = detElem.getElementsByTagName("TABLE")
	for ( var i=0; i<allTable.length; i++ ) { 
		var tableElem = allTable[i]
		
		if ( tableElem.offsetParent === null ) { continue }
		if ( tableElem.parentElement.style.overflowX == "auto" ) { continue }
		
		// `element` is the element you want to wrap
		var parent = tableElem.parentNode;
		var wrapper = document.createElement('div');

		// set the wrapper as child (instead of the element)
		parent.replaceChild(wrapper, tableElem);
		// set element as child of wrapper
		wrapper.appendChild(tableElem);
		wrapper.style.overflowX = "auto"
	}
}

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

// –––––––––––––––  img BEGIN  –––––––––––––––
function F_loadIMGs(detElem) {
	var imgs = detElem.getElementsByTagName("IMG")
	for ( var i=0; i<imgs.length; i++ ) { 
		if ( imgs[i].offsetParent === null ) { continue }
		if ( imgs[i].dataset.src == undefined ) { continue } // ha előtte a főoldalon megnyitottam már a Q-t, akkor nem kell újra betöltenie
		
		/*imgs[i].onerror = function(){
			var textVar = this.src.slice(this.src.lastIndexOf("/")+1)
			missImgs = missImgs + textVar + "\n"
		}*/
		
		imgs[i].src = "images/" + imgs[i].dataset.src
		imgs[i].removeAttribute("data-src")
		
		imgs[i].style.border = "3px solid black"
		if ( imgs[i].style.maxWidth == "" ) { imgs[i].style.maxWidth = "40%" }
		if ( imgs[i].style.float == "" ) { imgs[i].style.float = "right" }
	
		imgs[i].onclick = function() { // középen kinagyítja
			document.getElementById("div_centImgBg").style.display = "block"
			document.getElementById("img_cent").src = this.src
		}
		if ( imgs[i].classList.contains("mini") == true ) {
			imgs[i].style.border = "2px solid DeepSkyBlue"
			imgs[i].style.maxHeight = "16px"
			//imgs[i].style.maxHeight = imgMiniHeight
			imgs[i].style.marginBottom = "-2px"
			imgs[i].style.float = "none"
			if ( isAndroid == false ) {
				imgs[i].onmouseover = function() { 
					var minImg = document.getElementById("img_mini")
					minImg.style.display = "inline-block" //block esetén új sor lenne; inline esetén nem lehetne width állítani
					minImg.src = this.src
					
					minImg.width = this.width*8
					//minImg.style.transform = "scale(8,8)"

					var posX = F_offsetXY(this).left -minImg.width/2 +this.width/2
					var posXright = posX + minImg.width
					if ( posX < 0 ) {
						minImg.style.left = "0px"
					} else if ( document.body.clientWidth < posXright ) {
						posX = document.body.clientWidth - minImg.width -10/*border*/
						minImg.style.left = posX +"px"
					} else {
						minImg.style.left = posX +"px"
					}
					var posY = F_offsetXY(this).top -minImg.height/2 +this.height/2
					minImg.style.top = posY +"px"
				}
			}
		}
	}
}
function F_loadImg_cent_mini() {
	var keepImg = false
	document.getElementById("img_cent").onclick = function() {
		keepImg = true
	}
	document.getElementById("div_centImgBg").onclick = function() {
		if ( keepImg != true ) { this.style.display = "none" }
		keepImg = false
	}
	
	if ( isAndroid == false ) {
		document.getElementById("img_mini").onmouseout = function() { this.style.display = "none" }
		document.getElementById("img_mini").onclick = function() { // középen kinagyítja
			document.getElementById("div_centImgBg").style.display = "block"
			document.getElementById("img_cent").src = this.src
		}
	}
}
F_loadImg_cent_mini()
// –––––––––––––––  img END  –––––––––––––––

function F_loadElem(detElem) { // detailsok megnyitásánál is ezt a funkciót használjam!
	//console.log(detElem.innerHTML)
	F_loadImpQs(detElem)
	F_loadMidQs(detElem)
	F_loadIMGs(detElem)
	F_loadVideos(detElem)
	F_tableScrollable(detElem)
	F_synonyms(detElem)
	F_titleChange(detElem)
	
	var allDetails = detElem.getElementsByTagName("details")
	for ( var i=0; i<allDetails.length; i++ ) { allDetails[i].ontoggle = function() { F_loadElem(this) } }
	
	// img-ek is!
	// stb.
}

document.body.onclick = function(){
	var span = document.getElementById("span_abbrTitle")
	span.dataset.status = span.dataset.status -1
	if ( span.dataset.status != 1 ) { span.style.display = "none" }
}














