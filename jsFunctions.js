



var fileName
var arrImpQs = []  // ez is kell a végén még
var txtLS = [] // Qtxt to LSid --> cseréljem le erre: localStorage.getItem(Qname)
var elems = document.body.getElementsByTagName("*");
function F_checkEXPs(){ /* ez egyenlore elobb kell legyen, mint a CheckQs különben id-t kapnak az import Q-ek, amibol baj lesz.. Vegyem ki az id-t, mert az fölös amúgy is */
	for ( var i = 0; i < elems.length; i++ ) {
		var elem = elems[i]
		if ( elem.className.indexOf("{") > -1 && elem.className.indexOf("imp") == -1 && elem.className.indexOf("midQ") == -1 ) {
			var begin = elem.className.indexOf("{")
			var end = elem.className.indexOf("}")
			var EXPid = elem.className.slice(begin+1,end)
			var Qtext = '<details class="' +elem.className+ '">' +elem.innerHTML+ "</details>"
			
			if ( Number(EXPid) > localStorage.getItem("hkExp.max") && fileName == "expqs.html" ) {
				localStorage.setItem("hkExp.max",EXPid) 
			}
			
			var LSid = false
			if ( fileName == "expqs.html" ) {
				if ( localStorage.getItem("hkExpQ."+EXPid) ) {
					var string = localStorage.getItem("hkExpQ."+EXPid)
					LSid = string.slice(0,string.indexOf(" "))
					if ( LSid.slice(0,8) == "hkQ.hkQ." || LSid == "hkQ.null" ) {
						alert("hiba a kódban: "+LSid)
						LSid = F_newLSid()
					}
				} else {
					LSid = F_newLSid()
				}
			/* } else {
				//alert("{"+EXPid+"}")
				LSid = F_newLSid() */
			}
			if ( fileName == "expqs.html" ) {
				localStorage.setItem(LSid,Qtext)
				localStorage.setItem("hkExpQ."+EXPid,LSid+" "+htmlIMGloc)
			} else {
				arrImpQs[EXPid] = Qtext
			}
			txtLS[Qtext] = LSid
		}
	}
}

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
function F_loadQtxt(impID,divSpan){
	var begin,end,hidden
	//console.log(impID+" "+divSpan)
	if ( impID.indexOf("hide") != -1 ) { hidden = true }
	if ( impID.indexOf("[") != -1 ) {
		begin = impID.indexOf("[") +1
		end = impID.indexOf("]")
		impID = impID.slice(begin,end)

		var pageName = window.location.pathname;
		pageName = pageName.split("/").pop();
		Qtxt = arrImpQs[impID]
		impID = "["+impID+"]"
	} else {
		begin = impID.indexOf("{") +1
		end = impID.indexOf("}")
		impID = impID.slice(begin,end)
		Qtxt = localStorage.getItem("hkExpQ."+impID)
		//console.log(impID+" "+Qtxt)
		if ( Qtxt != null )  {
			var LSid = Qtxt.slice(0,Qtxt.indexOf(" "))
			Qtxt = localStorage.getItem(LSid)
		}
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
			title = "<strong>"+title+"</strong>"
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
		if ( locTXT.indexOf(' class="imp [',startP) == -1 ) { break }
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
				if ( newTXT == true ) { 
					newTXT = localStorage.getItem("hkExpQ."+EXPid)
					if ( newTXT != null ) {
						var LSid = newTXT.slice(0,newTXT.indexOf(" "))
						newTXT = localStorage.getItem(LSid)
					}
				}
			} else { 
				newTXT = localStorage.getItem("hkExpQ."+EXPid)
				if ( newTXT != null ) {
					var LSid = newTXT.slice(0,newTXT.indexOf(" "))
					newTXT = localStorage.getItem(LSid)
				}
			}
		}
		if ( nextQtype == "impQ" ) {
			EXPid = EXPid.slice(0,EXPid.indexOf(']'))
			if ( prevQtxt.lastIndexOf("["+EXPid+"]") != -1 ) {
				var elemType = prevQtxt.slice(0,prevQtxt.lastIndexOf('class="imp ['+EXPid+']'))
				F_checkSearchTXT(prevQtxt,elemType)
				if ( newTXT == true ) { newTXT = arrImpQs[EXPid] } 
			} else { 
				newTXT = arrImpQs[EXPid] 
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

	document.getElementById("div_MidQ").style.display = "block"
	//F_impQfew(document.getElementById("div_MidQText"))
	F_detailsToggle(document.getElementById("div_MidQText"))
	//F_imgClick(document.getElementById("div_MidQText"))
	//F_titleChange(document.getElementById("div_MidQText"))
}
function F_midQ(detElem){
	var midQs = detElem.getElementsByClassName("midQ")
	for ( var x=0; x<midQs.length; x++ ) {
		var midQ = midQs[x]
		midQ.style.backgroundColor = "yellow"
		midQ.style.paddingLeft = "1px"
		midQ.style.paddingRight = "1px"
		midQ.style.cursor = "pointer"; 
		midQ.onmouseover = function(){ this.style.backgroundColor = "Chartreuse" }
		midQ.onmouseout = function(){ this.style.backgroundColor = "yellow" }
		midQ.onclick = function(){ 
			midQloaded = false
			var impID = this.className
			F_loadQtxt(impID,this.tagName)
			F_midQText(Qtxt)
		}
	}
}
F_midQ(document)

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
function F_loadImgVideo(detElem){
	//console.clear()
	//console.log("F_loadImgVideo")
	
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
		if ( isExp == true ) {
			imgs[x].src = "images/" + imgs[x].dataset.src
			imgs[x].removeAttribute("data-src")
		} else {
			imgs[x].src = htmlIMGloc +"images/"+ imgs[x].dataset.src
			imgs[x].removeAttribute("data-src")
		}
		if ( imgs[x].className.indexOf("mwsw") != -1 ) {
			var width = imgs[x].className.slice(imgs[x].className.indexOf("mwsw")+5)
			width = Number(width) * screen.width /100
			width = Math.floor(width)
			imgs[x].style.maxWidth = width+"px"
			console.log(width)
		}
	}
	
	F_abbrSet(detElem)
	
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
		source.setAttribute('src', allVideo[i].dataset.src)
		source.onerror = function(){
			var textVar = this.src.slice(this.src.lastIndexOf("/")+1)
			if ( missImgs.indexOf(textVar) == -1 ) {
				missImgs = missImgs+"\n"+textVar
			}
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
	tooltipSpan.style.zIndex = "3";
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
		tooltipStatus = "show"
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
		if ( tooltipStatus != "show" ) { tooltipSpan.style.visibility = "hidden" }
	}
}
function F_titleChange(detElem){
	var abbrok = detElem.querySelectorAll("*[title]");
	for ( var i = 0; i < abbrok.length; i++ ) { func_titleVerChange(abbrok[i]) }
}
F_titleChange(document)

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
		if ( imgs[i].classList.contains("mini") == true ) {
			imgs[i].onmouseover = function() { 
				this.style.position = "absolute"
				this.style.transform = "scale(8,8)";
				//this.style.maxHeight = "140px";
			}
			imgs[i].onmouseout = function() {
				this.style.position = ""
				this.style.transform = "scale(1,1)";
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
	centerDiv.style.zIndex = "3"
	var centerImage = document.createElement("img")
	centerImage.id = "img_centIMG"
	centerDiv.appendChild(centerImage)
	centerImage.style.maxWidth = "none"
	centerImage.style.float = "none"
	
	document.body.onclick = function(){
		if ( imgStatus == "hide" ) { centerDiv.style.visibility = "hidden" }
		imgStatus = "hide"

		tooltipSpan.style.visibility = "hidden";
		tooltipStatus = "hide"
	}
}
F_centIMG()

// SAVE LS
var downA = document.createElement('a');
function download(filename,text) { // (netről copyztam) --> (azért kellett, mert androidon máshogy nemtudom lementeni)
	/*var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.appendChild(document.createTextNode("Save file"));
  
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
	*/

	function F_downloadTXT(text,filename){
		downA.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		downA.setAttribute('download', filename);
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
			filename = filename.replace(".txt","_"+i+".txt")
			F_downloadTXT(acText,filename)
		}
	} else { */
		F_downloadTXT(text,filename)
	// }
}
function F_saveLS() {
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
	var filename = 'localStorage'+count+'.txt'
	download(filename, text);
	
	if ( document.getElementById("btn_saveLS") ) {
		document.getElementById("btn_saveLS").style.backgroundColor = "Chartreuse"
		document.getElementById("btn_saveLS").style.color = ""
	}
}
//JSON.stringify(localStorage)




















































