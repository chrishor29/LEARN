
document.body.style.backgroundColor = "azure"
document.body.style.margin = "2px" // ez valahol nagyobbra van állítva, visszakéne

function F_isAndroid() {
	var ua = navigator.userAgent.toLowerCase()
	return ua.indexOf("android") > -1 
}
function F_getTime() {
	var myDate = new Date()
	//var time = myDate.getTime() /1000
	//return time
	return myDate.getTime() /1000
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
		if ( impQ.className.indexOf("{") == -1 ) { continue }
		if ( impQ.className.indexOf("imp") != -1 ) { continue }
		if ( impQ.className.indexOf("midQ") != -1 ) { continue }
		var begin = impQ.className.indexOf("{")
		var end = impQ.className.indexOf("}")
		var impID = impQ.className.slice(begin+1,end)
		pageImpQs[path][impID] = '<details class="'+impQ.className+'">'+impQ.innerHTML+'</details>'
	}
}
function F_getQPath(detElem,impID) {
	var path = currPath
	if ( detElem.dataset.src ) { 
		var count = 0
		for ( var pagePath in pageTexts ) { if ( pagePath.indexOf(detElem.dataset.src) != -1 ) { 
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
function F_setAltQsPath(detElem,path) {
	if ( currPath == path ) { return }
	var altImpQs = detElem.getElementsByClassName("imp")
	for ( var x=0; x<altImpQs.length; x++ ) { 
		if ( altImpQs[x].className.indexOf("[") == -1 ) { continue }
		if ( altImpQs[x].dataset.src ) { continue } // kivéve ha az altImpQ-nak van jelölve path már
		altImpQs[x].dataset.src = path
	}
	
	var altMidQs = detElem.getElementsByClassName("midQ")
	for ( var x=0; x<altMidQs.length; x++ ) { 
		if ( altMidQs[x].className.indexOf("[") == -1 ) { continue }
		if ( altMidQs[x].dataset.src ) { continue } // kivéve ha az altImpQ-nak van jelölve path már
		altMidQs[x].dataset.src = path
	}
}
function F_loadImpQs(detElem) {
/* Hogyan?
	✔ megnézi a detElem összes imp child-ját
	✔ feltételek: visible, van benne [], még nem volt betöltve
		detElem = amit megnyitottam (details / page)
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
			if ( impQs[i].offsetParent === null ) { continue }
			if ( impQs[i].className.indexOf("[") == -1 ) { continue }
			if ( impQs[i].dataset.loaded == "true" ) { continue } else { impQs[i].dataset.loaded = "true" }
			repeat = true
			
			var begin = impQs[i].className.indexOf("[")
			var end = impQs[i].className.indexOf("]")
			var impID = impQs[i].className.slice(begin+1,end)
			
			// path beállítása
			var path = F_getQPath(impQs[i],impID)
			
			// parentek között volt-e már (loop elkerülése)
			var contains = false
			function F_checkParents() {
				var parent = impQs[i]
				do {
					parent = parent.parentElement
					// checkolja, hogy az [impID]-jük megyegyezik-e
					if ( parent.className.indexOf("["+impID+"]") == -1 ) { continue } 
					// checkolja hogy a path-jük megegyezik-e
					if ( path == currPath ) { 
						if ( parent.dataset.src ) { continue }
					} else {
						if ( parent.dataset.src == undefined ) { continue }
						if ( path.indexOf(parent.dataset.src) == -1 ) { continue }
					}
					contains = true
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
				qText = qText.slice(qText.indexOf('<ul class="normal">')+19)
				qText = qText.slice(0,qText.lastIndexOf('</ul></details>'))
			}
			impQs[i].innerHTML = qText
			
			// ha más pageről származik, akkor az altImpQ-i is onnan származzanak!
			F_setAltQsPath(impQs[i],path)
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
function F_loadAndSavePageText(path,click) {
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
	for ( var i=0; i<pageLinks.length; i++ ) { F_loadIDB(pageLinks[i]) }
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
var F_seekBar = window.setInterval(function(){
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
			document.getElementById("div_pageQTargy").style.display = "block"
			document.getElementById("table_weboldalak").style.display = "block"
			document.body.scrollTop = prevScrollTop
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
	document.getElementById("div_MidQ").style.display = "block" // ez előbb kell legyen, mint az F_loadElem --> hogy láthatók legyenek az impQ-k, amiket be kell töltenie
	document.getElementById("div_pageQTargy").style.display = "none"
	document.getElementById("table_weboldalak").style.display = "none"
	
	//console.log(prevMidQs)
	qText = qText.slice(qText.indexOf("<summary"),qText.lastIndexOf("</details"))
	var qTitle = qText.slice(qText.indexOf(">")+1,qText.indexOf("</summary"))
	document.getElementById("btn_MidQ").innerHTML = qTitle
	
	qText = qText.slice(qText.indexOf("</summary"))
	qText = qText.slice(qText.indexOf(">")+1)
	document.getElementById("div_MidQText").innerHTML = qText
	
	F_setAltQsPath(document.getElementById("div_MidQText"),path)
	F_loadElem(document.getElementById("div_MidQText"))

	prevScrollTop = document.body.scrollTop
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
			var begin = this.className.indexOf("[")
			var end = this.className.indexOf("]")
			var impID = this.className.slice(begin+1,end)
			var path = F_getQPath(this,impID) 
			prevMidQs.push(impID+" - "+path)
			var qText = F_getQText(path,impID)
			F_setMidQ(qText,path) 
		}
	}
}
// –––––––––––––––  midQs END   –––––––––––––––

// –––––––––––––––  Videos BEGIN  –––––––––––––––
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
	seekBarSpan.style.width = thisVideo.offsetWidth *thisVideo.currentTime /thisVideo.duration
	seekBarSpan.style.left = thisVideo.offsetLeft
}
function F_stopVideo(thisVideo){
	thisVideo.id = ""
	thisVideo.style.borderColor = "black"
	thisVideo.pause()
	F_setSeekBarWidth(thisVideo)
}
function F_playVideo(thisVideo){
	if ( document.getElementById("playedVideo") ) { F_stopVideo(document.getElementById("playedVideo")) }
	thisVideo.id = "playedVideo"
	thisVideo.style.borderColor = "springgreen"
	thisVideo.play()
	var F_seekBar = window.setInterval(function(){
		F_setSeekBarWidth(thisVideo)
		if ( thisVideo != document.getElementById("playedVideo") ) { clearInterval(F_seekBar) }
	}, 1000)
}
function F_setVideoSource(videoElem,srcTxt){
	videoElem.setAttribute('src', "videos/"+srcTxt)
	videoElem.onerror = function(){
		srcTxt = srcTxt.slice(srcTxt.lastIndexOf("/")+1)
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
				parentDiv.style.width = videoElem.offsetWidth
				parentDiv.style.float = "right"
				
				var seekBarDiv = document.createElement("div") // szürke háttér
				seekBarDiv.className = "seekBar"
				parentDiv.appendChild(seekBarDiv)
				seekBarDiv.style.width = videoElem.offsetWidth
				seekBarDiv.style.opacity = "1"; 
				seekBarDiv.onclick = function(e){ F_clickSeekBar(this,e) }
				
				var seekBarSpan = document.createElement("span") // sárga, hogy hol tart
				seekBarSpan.className = "seekBar"
				seekBarSpan.innerHTML = "&nbsp;"
				seekBarDiv.appendChild(seekBarSpan)
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
		allVideoCent[i].onclick = function(){
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
	
	var centVideoBG = document.getElementById("div_centVideoBg")
	centVideoBG.onclick = function(){
		if ( keepVideo != true ) { 
			this.style.visibility = 'hidden'
			F_stopVideo(centVideo)
		}
		keepVideo = false
	}

	var centVideoSeek = document.getElementById("div_centVideoSeek")
	
	centVideoSeek.onclick = function(e){
		var rect = e.target.getBoundingClientRect();
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
	}
}
F_loadCentVideo()
// –––––––––––––––  Videos END  –––––––––––––––

// –––––––––––––––  Search BEGIN  –––––––––––––––
var breakSearch = false
var objSearchTexts = {} // Qname to Qtxt (ráklikk a resultra, dobja ki a szöveget)
function F_searchStart() { // search-re klikkelésnél vagy enter lenyomásnál ez történik először
	document.getElementById("btn_searchBreak").style.display = "block"
	document.getElementById("div_searchingBg").style.display = "block"
	document.getElementById("btn_SearchW").style.backgroundColor = "black"
	document.getElementById("btn_SearchW").style.color = "white"
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
		spanStatus.style.width = spanStatus.parentElement.offsetWidth * x / paths.length
		
		var path = paths[x]
		x = x +1
		if ( Number(x) == Number(paths.length) || breakSearch == true ) { // ha a végére ért / megszakítom
			clearInterval(int_Click)
			breakSearch = false
			spanStatus.parentElement.style.display = "none" 
			spanStatus.style.width = 0
			document.getElementById("btn_searchBreak").style.display = "none"
			document.getElementById("div_searchingBg").style.display = "none"
			document.getElementById("btn_SearchW").style.color = ""
			document.getElementById("btn_SearchW").style.backgroundColor = ""
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
		document.getElementById("div_searchResults").innerHTML = fullText
		
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
		document.getElementById("table_weboldalak").parentElement.appendChild(button)
		document.getElementById("table_weboldalak").parentElement.style.position = "relative"
		button.style.position = "absolute"
		button.style.right = "0px"
		button.style.bottom = "0px" // parent position-jént relative-ra kellett állítani, illetve ezt absolute-ra, hogy működjön!!
		button.style.width = "90px"
		button.style.height = "90px"
		button.value = "🔍"
		button.style.fontSize = '300%'
		button.style.cursor = "pointer"

		button.onclick = function(){ 
			if ( document.getElementById("div_searchBg").style.display == "none" ) {
				this.style.backgroundColor  = "black"
				this.style.color  = "white"
			}
			var int_Click = window.setInterval(function(){
				document.getElementById("table_weboldalak").style.display = 'none'
				document.getElementById("div_pageQTargy").style.display = 'none'
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
		document.body.appendChild(div)
		div.id = "div_searchBg"
		div.style.backgroundColor = "white"
		div.style.overflow = "auto"
		div.style.border = "8px solid black"
		div.style.outline = "5px solid aqua"
		div.style.display = "none"
		div.style.position = "fixed"
		div.style.left = "5px"
		div.style.right = "5px"
		div.style.top = "4px"
		div.style.bottom = "4px"
		div.style.zIndex = "1"
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
		//button.style.width = "50px"
		button.onclick = function(){
			document.getElementById("table_weboldalak").style.display = 'block';
			document.getElementById("div_pageQTargy").style.display = 'block';
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
		input.style.left = "50%"
		input.style.paddingLeft = "3px"
		input.style.paddingRight = "3px"
		input.style.transform = "translate(-50%)"
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
	F_btnSearch()
	
	function F_divResults() { // ebbe írja a találati eredmény(eke)t
		var divText = document.createElement("div") 
		divBg.appendChild(divText)
		divText.id = "div_searchResults"
		divText.style.marginLeft = "3px"
		divText.style.paddingBottom = "10px"
		divText.style.paddingTop = "10px"
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
		var spanStatus = document.createElement("span")
		document.body.appendChild(spanStatus)
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
		spanStatusChild.innerHTML = "&nbsp;"
		spanStatusChild.style.height = "21px"
	}
	F_spanStatus()
}
F_createSearchElems()
// –––––––––––––––  Search END  –––––––––––––––

// –––––––––––––––  Qing BEGIN  –––––––––––––––
function F_clickTetel(detElem) {
	if ( detElem.style.backgroundColor == "lightgreen" ) {
		detElem.style.backgroundColor = ""
	} else {
		detElem.style.backgroundColor = "lightgreen"
	}
}
function F_loadTetels() {
	var elems = document.getElementById("div_QingTargyText").getElementsByTagName("*")
	var string = ""
	var titleStyle = ' style="background-color:gainsboro; font-size:140%; font-weight:bold; color:black;"'
	var spanStyle = ' style="font-size:120%; font-weight:bold; cursor:pointer" onclick="F_clickTetel(this)"'
	for ( var x = 0;   x < elems.length;   x++ ) {
		if ( elems[x].className.indexOf("mainTitle") != -1 ) {
			string = string+ "<details><summary" +titleStyle+ ">" +elems[x].innerHTML+ "</summary>"
			var childs = elems[x].parentElement.getElementsByTagName("*")
			for ( var y = 0;   y < childs.length;   y++ ) {
				if ( childs[y].className.indexOf("phase") != -1 || childs[y].className.indexOf("status") != -1 ) {
					string = string+ "<div><span" +spanStyle+ ">" +childs[y].innerHTML+ "</span></div>"
				}
			}
			string = string+ "</details>"
			x = x + childs.length
		} else if ( elems[x].className.indexOf("phase") != -1 || elems[x].className.indexOf("status") != -1 ) {
			string = string + "<div><span>" +elems[x].innerHTML+ "</span></div>"
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

		var lastClickTime = 0
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
		div.style.marginBottom = "2px"
		div.style.paddingBottom = "10px"
		div.style.height = "80px" // 17vh
	}
	F_divUpperPart()
	function F_divLowerPart() { // alsó nagy rész: Q amit kidob
		var div = document.createElement("div")
		div.id = "div_QingLowerPart"
		div.className = "normal"
		div.style.backgroundColor = "yellow"
		document.getElementById("div_QingMain").appendChild(div)
	}
	F_divLowerPart()
	
	function F_divSettings() { // bal felső sarok kiírások: tételszám, Q szám, ...
		var div = document.createElement("div")
		document.getElementById("div_QingUpperPart").appendChild(div)
		div.id = "div_QingSettings"
		div.style.height = "80px"
	}
	F_divSettings()
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
		button.onclick = function(){ 
			/*
			F_getTime()
			var diffTime = myTime - lastClickTime
			//console.log(myTime+" vs "+lastClickTime)
			if ( diffTime < 1 ) { return }
			if ( this.style.backgroundColor == "aqua" ) { 
				document.body.style.backgroundColor = "Gainsboro"
			} else {
				this.style.backgroundColor  = "black"
				this.style.color  = "white"
			}
			var int_Click = window.setInterval(function(){
				F_nextQ()
				clearInterval(int_Click) 
				document.body.style.backgroundColor = ""
			}, 100)
			*/
		}
	}
	F_btnNextQ()
	// 1st line
	function F_btnTetels() {
		var button = document.createElement("button")
		document.getElementById("div_QingSettings").appendChild(button)
		button.id = "btn_QingTetels"
		button.style.border = "3px solid black"
		button.style.backgroundColor = "Bisque"
		button.style.cursor = "pointer"
		button.innerHTML = "tétel"
		var firstime = true
		button.onclick = function(){ 
			if ( this.style.borderColor == "limegreen" ) {
				document.getElementById("div_QingLowerPart").style.display = "block"
				this.style.borderColor = "black"
				document.getElementById("div_QingTetels").style.display = "none"
			} else {
				if ( firstime == true ) {
					firstime = false
					F_loadTetels()
				}
				F_hideAllower()
				this.style.borderColor = "limegreen"
				document.getElementById("div_QingTetels").style.display = "block"
			}
		}
	}
	F_btnTetels()
	function F_spanTime() { // mennyi ideje oldottam meg átlagosan őket
		var span = document.createElement("span")
		document.getElementById("div_QingSettings").appendChild(span)
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
		document.getElementById("div_QingSettings").appendChild(button)
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
		document.getElementById("div_QingSettings").appendChild(span)
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
		document.getElementById("div_QingSettings").appendChild(button)
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
	document.getElementById("div_QingSettings").appendChild(br)
	var br = document.createElement("br")
	document.getElementById("div_QingSettings").appendChild(br)
	function F_btnNewQ() {
		var button = document.createElement("button")
		button.id = "span_newQuest"
		document.getElementById("div_QingSettings").appendChild(button)
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
		document.getElementById("div_QingSettings").appendChild(span)
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
		document.getElementById("div_QingSettings").appendChild(button)
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
		document.getElementById("div_QingSettings").appendChild(span)
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
		div.style.height =  document.body.clientHeight - 80 - 20/*border*/ - 25/*passz, de még vannak margin & padding-ek*/
		div.style.overflow = "auto"
		
		div.innerHTML = "tételek"
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
function F_toggleQing() {
	if ( document.getElementById("div_pageQTargy").style.display == 'none' ) {
		localStorage.removeItem("hk.ToggleAll")
		document.getElementById("table_weboldalak").parentElement.style.display = 'block';
		document.getElementById("div_pageQTargy").style.display = 'block';
		document.getElementById("div_QingMain").style.display = 'none';
	} else {
		localStorage.setItem("hk.ToggleAll","true")
		document.getElementById("table_weboldalak").parentElement.style.display = 'none';
		document.getElementById("div_pageQTargy").style.display = 'none';
		document.getElementById("div_QingMain").style.display = 'block';
		
		document.getElementById("div_QingTargyText").innerHTML = document.getElementById("div_pageQTargy").innerHTML
	}
}
// –––––––––––––––  Qing END  –––––––––––––––


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
		imgs[i].style.maxWidth = "40%"
		imgs[i].style.float = "right"
	
		imgs[i].onclick = function() { // középen kinagyítja
			document.getElementById("div_centImgBg").style.visibility = "visible"
			document.getElementById("img_cent").src = this.src
		}
		if ( imgs[i].classList.contains("mini") == true ) {
			imgs[i].style.border = "2px solid DeepSkyBlue"
			imgs[i].style.maxHeight = "14px"
			imgs[i].style.marginBottom = "-2px"
			imgs[i].style.float = "none"
			if ( F_isAndroid == false ) {
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
		}
	}
}
function F_loadCentImg() {
	var keepImg = false
	document.getElementById("img_cent").onclick = function() {
		keepImg = true
	}
	document.getElementById("div_centImgBg").onclick = function() {
		if ( keepImg != true ) { this.style.visibility = "hidden" }
		keepImg = false
	}
}
F_loadCentImg()

function F_loadElem(detElem){ // detailsok megnyitásánál is ezt a funkciót használjam!
	//console.log(detElem.innerHTML)
	F_loadImpQs(detElem)
	F_loadMidQs(detElem)
	F_loadIMGs(detElem)
	F_loadVideos(detElem)
	
	var allDetails = detElem.getElementsByTagName("details")
	for ( var i=0; i<allDetails.length; i++ ) { allDetails[i].ontoggle = function(){ F_loadElem(this) } }
	
	// img-ek is!
	// stb.
}
















