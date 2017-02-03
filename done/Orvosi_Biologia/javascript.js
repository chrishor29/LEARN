﻿<head>
	<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="shortcut icon" href="favicon.bmp?v=2">
	<title>Orvosi Biológia</title>
</head>

<input onclick="toggleAll();" type="button" id="input_toggleAll" value="0" style="position:fixed; right: 0px;"><div id="quest" style="display:none;">
	
	<details><summary class="phase">tételek</summary><div id="container"></div></details>
	<input type="checkbox" id="miss_checkbox"/><input type="button" class="MISS" onclick="show_Status('miss');" id="show_miss" value="0">
	<input type="checkbox" id="fix_checkbox"/><input type="button" class="FIX" onclick="show_Status('fix');" id="show_fix" value="0">
	<input type="checkbox" id="progress_checkbox"/><input type="button" class="progress" onclick="show_Status('progress');" id="show_progress" value="0">
	<input type="checkbox" id="checkbox_skipID"/><input class="dark" onclick="show_StatusSkip;" type="button" id="show_skipID" value="&nbsp;">

	<input type="checkbox" id="checkbox_New"/><span class="WHITE" id="cont_New"></span><span class="VOCAB" id="cont_Old"></span>
	<span class="WHITE" id="span_Jegy"></span><span class="VOCAB" id="span_Date"></span>
	<input type="checkbox" id="checkbox_RepNew"/><span class="WHITE" id="cont_RepNew"></span><span class="VOCAB" id="cont_RepOld"></span>


	<br>
	<center>
		<input onclick="toggleNote();" type="button" value="&#10045;"> &nbsp;
		<label>Jegy:<input type="text" id="jegy" size="1" maxlength="2" style="width:25px;"></label> &nbsp;&nbsp;&nbsp;&nbsp;
		<input onclick="missFix();" type="button" id="button_missFix" style="background-color:lightgrey; height:25px; width:30px;">&nbsp;&nbsp;
		<input onclick="func_skipID();" type="button" id="button_skipID" style="background-color:lightgrey; height:25px; width:30px;">
		<label>Rank:<input type="text" id="rank" size="1" maxlength="1" style="width:30px;"></label> &nbsp;&nbsp;&nbsp;&nbsp;
		<input onclick="koviKerdes();" type="button" value="következő kérdés">
		<span id="repeat" class="WHITE">&nbsp; &nbsp;</span>
	</center>
	<center><textarea style="display:none; position:fixed; left: 40%; top: 70%;" id="note" rows="4" cols="40"></textarea></center>
	<div style="font-weight: bold;font-size: large;" id="questTitle"></div>
	<details id="kerdeslocation"></details>
	<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>

<table><tr><td class="dark">TÉTELEK</td>
	<td class="important">1</td>
	<td class="done">2</td>
	<td class="done">3</td>
	<td class="done">4</td>
	<td class="important">5</td>
	<td class="important">6</td>
	<td class="done">7</td>
	<td class="done">8</td>
	<td class="done">9</td>
	<td class="done">10</td>
	<td class="important">11</td>
	<td class="done">12</td>
	<td class="done">13</td>
	<td class="important">14</td>
	<td class="done">15</td>
	<td class="done">16</td>
	<td class="done">17</td>
	<td class="done">18</td>
	<td class="done">19</td>
	<td class="miss">20</td>
	<td class="important">21</td>
	<td class="miss">22</td>
	<td class="miss">23</td>
	<td>24</td>
	<td class="done">25</td>
	<td class="important">26</td>
</tr></table>

<summary class="phase">források</summary><div class="normal">
	<li>előadások</li>
	<li>internet</li>
	<li>könyvek: Darvas Zsuzsa & László Valéria - Sejtbiológia</li>
</div>

<div class="header"><strong>Megjegyzések</strong>
	<li>Sajnos hibák vannak benne, az ember bármennyire is próbálja (tartalmi és helyesírási egyaránt), megértést köszönöm</li>
	<li>tételekre klikk és megnyílik || képekre klikk és nagyítva lesz || (jobb felső sarokban lévő számmal nem kell foglalkozni!)</li>
	<li>tétel kidolgozottsága a tetején lévő táblázatban van jelölve színekkel &#10140; <span class="Done">teljesen</span> <span class="Important">nagyjából</span> <span class="miss">kevés</span> <span class="white">nincs</span></li>
	<li>(LP) = nem annyira fontos(lowprior) // (HP) = nagyon fontos(highprior)</li>
	<li><i>dőlt betűs rész</i> &#10140; eléggé szvsz alapján írtam, azaz &#10140; nem jártam utána hogy tényleg jól gondolom-e, vagy nem találtam rá bizonyítást (nagyobb a rizikó, hogy hibás)</li>
	<li><span class="WHITE">JR</span> = just read</li>
	<li><span class="MISS">rózsaszín</span> <span class="FIX">piros</span> &#10140; nem pontosan értem, félig kidolgozott</li>
	<li><span class="Important">kék</span> &#10140; különösen fontosnak gondoltam</li>
	<li><abbr title="szöveg">sárga</abbr> <abbr title="ez alacsony prioritású megjegyzés">&#10045;</abbr> &#10140; egeret ráhúzva szöveg jelenik meg</li>
	<li>készités éve: 2016/2017 Orvosi Biológia (főként előadások és internet alapján)</li>
	<li>Utolsó frissítés: ???</li>
</div>


<details><summary class="MISS">kidolgozni</summary><ul>
	<li><span class="WHITE">enzimcitokémia</span> &#10140; <span class="WHITE">obgy11.11</span> + <span class="WHITE">diák</span></li>
	<li><span class="WHITE">human.pdf</span></li>
	<div> ––––––––––––––––––––––––– </div>
	<li><span class="WHITE">11</span> réskapcsolat felépítése és működése (konnexonok, konnexin)</li>
	<li>apikális sejtfelszini specializációk (tavalyi anat-vázlatból)</li>
	<li><span class="WHITE">13</span> &#10140; pdf.43 kolera & koffein</li>
	<li><span class="WHITE">26</span> mindegyik festésnél legyen leírva, hogy mi célja? (mint pl. Feulgennél)</li>
	<li><span class="WHITE">26</span> "festés típusa", nem mindegyik fogható fel festésként, van amely csak reakcióként, ízokat írjam át</li>
	<div> ––––––––––––––––––––––––– </div>
	<li><span class="WHITE">1</span> életkeletkezési elméleteket csak érintőlegesen dolgoztam ki</li>
	<li><span class="WHITE">1</span> Az eukaryoták keletkezésének két hipotézise 56/83.ppt</li>
	<li><span class="WHITE">1</span> vírusok birodalma 57-58/83.ppt</li>
	<li><span class="WHITE">10</span> 134-135 nem teljesen dolgoztam ki</li>
	<li><span class="WHITE">10</span> 137-138 nem dolgoztam ki</li>
	<li><span class="WHITE">13</span> GF-eket kihagytam &#10140; 184legalsó bekezdés & 185legfelső</li>
	<li><span class="WHITE">13</span> S-fázist kihagytam (191o) &#10140; de ez elvileg nincs benne a tételben</li>
	<li><span class="WHITE">16</span> 230o nem minden betegséget írtam le</li>
	<li><span class="WHITE">18</span> pdf.32 & 46♫ &#10140; Wnt, Myc, APC, &beta;-catenin</li>
	<li><span class="WHITE">18</span> 1:05♫ immunterápia</li>
	<li><span class="WHITE">19</span> 1:23♫-tól kihagytam pdf88</li>
	<li><span class="WHITE">20</span> [I Fenymikroszkopia.pdf : 3-4.oldal] beállításának menete</li>
	<li><span class="WHITE">21</span> [I fénymikroszkópia.pdf] A festési mechanizmusokkal kapcsolatban leggyakrabban előforduló fogalmak</li>
	<li><span class="WHITE">21</span> [I fénymikroszkópia.pdf] citológiai festések csoportosításánál nem soroltam be a festéseket (mindegyik kémiai-e)</li>
	<li><span class="WHITE">21</span> [III Citokemia.pdf] 7-8oldal enzimcitokémia mechanizmusát kihagytam</li>
</ul></details>


<!-- ////////////////////////////////////////-->	<div><div class="mainTitle">elmélet</div>		<!--///////////////////////////////////////////////////-->

<!----><details><summary class="phase">1. A sejt az élet alapegysége. Élet keletkezési elméletek, a sejtes szerveződés. A pro- és az eukarióta sejt.</summary><div class="normal">
 <div><div class="title">A sejt az élet alapegysége.</div>
	<details class="kerdes 1" id="sb.648"><summary>sejt definíció?</summary><ul class="normal">
		<li>olyan membránnal határolt rendszer, mely képes fenntartani szerkezetét és képes reprodukcióra</li>
	</ul></details>
	<details class="kerdes 1" id="sb.649"><summary>minden ismert élőlény sejtekből épül fel &#10140; igaz v hamis?</summary><ul class="normal">
		<li>igaz</li>
	</ul></details>
	<details class="kerdes 1" id="sb.650"><summary>élet alapvető és legkisebb egysége a sejt &#10140; igaz v hamis?</summary><ul class="normal">
		<li>igaz</li>
	</ul></details>
	<details class="kerdes 1" id="sb.651"><summary>legnagyobb / legkisebb emberi sejt mérete?</summary><ul class="normal">
		<li>1&micro;m spermium</li>
		<li>1mm petesejt</li>
	</ul></details>
 </div>
 <div><div class="title">Élet keletkezési elméletek, a sejtes szerveződés.</div>
	<details class="kerdes 2" id="sb.122"><summary style="color:Magenta"><font color="Green"><abbr title="főbb">&#10045;</abbr>élétkeletkezési elméletek &#10140; felsorolás?(3)</font></summary><ul class="normal">
		<li>spontán</li>
		<li>pánspermia</li>
		<li>Oparin-elmélet</li>
	</ul></details>
	<details class="kerdes 1" id="sb.109"><summary>legelső életkeletkezési elmélet &#10140; származása? lényege?</summary><ul class="normal">
		<li>Arisztotelész vetette fel</li>
		<li>élet spontán keletkezik &#10140; pl. Húsokon „megteremtek” a legyek / szennyvízben és szemétben „megteremtek” a patkányok</li>
	</ul></details>
	<details class="kerdes 1" id="sb.110"><summary>spontán keletkezési elmélet &#10140; megdöntése?</summary><ul class="normal">
		<li>Louis Pasteur</li>
		<li>S-alakú flaska, a mikróbák nem, csak a levegő jutott be &#10140; igazolta, hogy a mikróbák csak más mikróbákból származhattak</li>
		<a href="images/e1_spntnkrdv.png"><img src="images/e1_spntnkrdv.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.111"><summary>pánspermia-elmélet &#10140; lényege?(1) "hibája"?(1)</summary><ul class="normal">
		<li>Földön kívül keletkezett az élet, pl. meteoriton keresztül jött ide</li>
		<li>"hiba" &#10140; nem magyarázza az élet keletkezését</li>
	</ul></details>
	<details class="kerdes 1" id="sb.112"><summary>Oparin-elmélet &#10140; lényege?(1mondatban) mit kell bizonyítani?</summary><ul class="normal">
		<li>az élő rendszerek élettelen kémiai anyagokból keletkezhettek a Földön <i>&#10140; abiogén úton (nem volt élő rendszerre szükség hozzá) jöttek létre</i></li>
		<li>mit kell bizonyítani? &#10140; aminósavak létrejötte, nukleinsavak létrejötte <abbr title="előbbi bizonyítva van már, utóbbi még nincs">&#10045;</abbr></li>
		<div><span class="white">§</span> aminosavak összeállítását proteinekké minden esetben nukleinsavak irányítják, így a legfontosabb kérdés az, hogy a nukleinsavak miként jöttek létre</div>
	</ul></details>
	<details class="kerdes 1" id="sb.113"><summary>Miller-kísérlet &#10140; mit igazol? lényege?</summary><ul class="normal">
		<img src="images/e1_mlrrksrét.png">
		<li>igazolja, hogy <strong>aminosavak</strong> abiogén úton is létrejöhettek</li>
		<li>abiogén úton = éllettelen anyagokból jön létre <abbr title="élettől független, tehát pl. villámcsapás ilyen, de fotoszintézis nem">természetes</abbr> kémiai reakcióval (nincs szükség élő rendszerre hozzá)</li>
		<li>lényege ➜ bal alsó "ősóceán" lombik forralása + fölötte őslégköri gázok ➜ csövön eljutva elektródák elektromos kisülései (szimbolizálva villám stb.) hatnak rájuk ➜ 2hét után keletkeztek molekulák (aminosav)</li>
		<li><i>Oparin-elmélet "aminosav részét" bizonyítja</i></li>
	</ul></details>
	<details class="kerdes 1" id="sb.646"><summary>mi volt az első makromolekula?(LP)</summary><ul class="normal">
		<li>egyenlőre nem lehet biztosan tudni</li>
		<li>lehetett DNS vagy RNS vagy fehérje</li>
		<div><span class="white">§</span> jelenleg talán az RNS a legvalószínűbb</div>
	</ul></details>
	<details class="kerdes 2" id="sb.645"><summary>'RNS-világ hipotézis' &#10140; alapja? lényege?</summary><ul class="normal">
		<img src="images/1_ribozim.png">
		<li>RNS képes információt hordozni és enzimként működni <i>(míg DNS csak előbbit, fehérje pedig utóbbit)</i></li>
		<div> –––––––– </div>
		<li>a nukleotidok random polimerizációja &#10140; <abbr title="RNS, mely enzimként funkcionál">ribozimok</abbr> létrejötte</li>
		<li>szelekció hatására olyan ribozimok jöttek létre, melyek a kis fehérjék szintézisét katalizálták: majd az oligopeptidek RNS-sel képeztek komplexet &#10140; első riboszóma &#10140; fehérjeszintézis</li>
		<li>a proteinek jobb <abbr title="enzimnek">katalizátornak</abbr> bizonyultak a ribozimoknál, ezért váltak domináló biopolimerré</li>
		<li>a nukleinsavakat <abbr title="információ hordozás">genom</abbr> célra használták a szervezetek inkább</li>
	</ul></details>
 </div>
 <div><div class="title">Kémiai evolúció, a légkör eredete.</div>
	<details class="kerdes 3" id="sb.117"><summary>légkör oxigén tartalma kezdetben?(1) első sejtek milyenek voltak?(2) légköt oxigénszint emelkedése?</summary><ul class="normal">
		<li>nem volt oxigén a levegőben</li>
		<li>első sejtek kemoheterotrófok voltak, azaz szénforrásuk(hetero) és enerigaforrásuk(kemo) szerves-vegyület lebontásából származott</li>
		<li>ezután jöttek a vizet felhasználva fotoszintetizáló sejtek (kb.3,5 milliárd éve) &#10140; cianobaktériumok(kékalgák) lehettek az elsők &#10140; O<sub>2</sub> bekerült a légkörbe</li>
		<li>azonban O<sub>2</sub> nem gyűlhetett össze a légkörben, míg a kőzetfelszínek nem szaturálódtak &#10140; ~2 milliárd éve kezdődhetett a légköri O<sub>2</sub> koncentráció növekedése</li>
	</ul></details>
 </div>
 <div><div class="title">sejtmembrán létrejötte.</div>
	<details class="kerdes 2" id="sb.116"><summary>foszfolipidek felépítése?(alkotói!)</summary><ul class="normal">
		<li>2zsírsav + glicerin + foszfát + nitrogéntartalmú vegyület(pl.kolin)</li>
		<img src="images/e1_fszglpd.png">
	</ul></details>
	<details class="kerdes 2" id="sb.115"><summary>foszfolipidek miért alkalmasak membránalkotásra?</summary><ul class="normal">
		<li>farok részük apoláris &#10140; két zsírsav része</li>
		<li>fej részük poláris &#10140; <abbr title="nembiztos, hogy mind3 ebbe tartozik!!">&#10045;</abbr> glicerin+foszfát+N(pl.kolin) molekularészlet</li>
		<div> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ </div>
		<li>fej részük hidrofil(vízkedvelő,"vonzódik felé") / farok része hidrofób(víztaszító)</li>
		<li>poláris közegben(pl. víz) eldugják, egymás felé fordítják farok részük, fej részük pedig a víz felé fordul</li>
		<a href="images/e1_fszglpd.png"><img src="images/e1_fszglpd.png"></a>
	</ul></details>
 </div>
 <div><div class="title">A pro- és az eukarióta sejt.</div>
	<details class="kerdes 1" id="sb.118"><summary>eukarióta sejt eredete &#10140; elmélet neve, mely magyarázza? kinek a nevéhez fűződik?</summary><ul class="normal">
		<li>endoszimbionta-elmélet</li>
		<li>Lynn Margulis</li>
	</ul></details>
	<details class="kerdes 3" id="sb.119"><summary>endoszimbionta-elmélet lépései?(6)</summary><ul class="normal">
		<li><abbr title="szervetlen anyagokból van szénforrása">heterotróf</abbr> prokarióta sejtek számára előny a nagy méret</li>
		<li>így idővel megnőttek</li>
		<li>közben elvesztették sejtfalukat</li>
		<li>betüremkedések is közben egyre nőttek (különben relatív felületük csökkent volna, és ez a környezettel való anyagcserét gátolná)</li>
		<li>betüremkedések leszakadtak belül és így kialakult &#10140; ER, magmembrán, lizoszóma, Golgi</li>
		<li>emelett más prokarióták bekebelezésekor, néhánnyal szimbiózis alakult ki &#10140; mitokondrium</li>
		<a href="images/e1_ndszomblmtlt.png"><img src="images/e1_ndszomblmtlt.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.120"><summary>endoszimbionta-elmélet bizonyítása mitokondrium példáján?(8)</summary><ul class="normal">
		<li>kettős membrán, ráadásul...</li><ul>
			<li>külső_membránban akvaporinok</li>
			<li>belső_membránban elektronszállító rendszer</li>
		</ul>
		<li>mtDNS</li><ul>
			<li>cirkuláris</li>
			<li>intronjuk szinte nincs</li>
			<li>hiszton & nukleoszóma nincs</li>
		</ul>
		<li><abbr title="metionin + formilcsoport (-HC=O)">N-formilmetioninnal</abbr> kezdődik a fehérje-szintézis</li>
		<li>osztódása &#10140; hasadásra hasonlít, sejtétől független</li>
	</ul></details>
	<details class="kerdes 2" id="sb.121"><summary>mely molekula konzervált az összes sejtes életformában? mire bizonyíték?</summary><ul class="normal">
		<li><span class="WHITE">16S rRNS</span> (prokarióták 30S riboszóma-alegységének alkotója)</li>
		<li>archeák,prokarióták,eukarióták közös_őstől(LUCA) való származására</li>
		<a href="images/e1_luca.png"><img src="images/e1_luca.png"></a>
	</ul></details>
	<details class="kerdes 4 open" id="sb.107"><summary>prokarióta vs eukarióta(nyisd meg!)</summary><ul class="normal"><table>
			<tr><th>prokarióta</th>  <th>eukarióta</th></tr>
			
			<tr><td colspan="2"><details><summary>DNS?</summary>
				gyűrű alakú <div class="mirror">&#10140;</div>&#10140; <abbr title="interfázisos/metafázisos">()</abbr>kromoszómákat alkotnak
			</details></td></tr>
			<tr><td colspan="2"><details><summary>sejtmag?</summary>
				nincs<abbr title="nem 100%, de előadásan ez volt, és nem is akarom bonyolítani">&#10045;</abbr> <div class="mirror">&#10140;</div>&#10140; kettős magmembránnal elválasztott sejtmag van
			</details></td></tr>
			<tr><td colspan="2"><details><summary>osztódás?</summary>
				hasadás <div class="mirror">&#10140;</div>&#10140; mitózis / meiózis
			</details></td></tr>
			<tr><td colspan="2"><details><summary>méret(általános)?</summary>
				~2&mu;m<abbr title="lehet 10is, de általában ekkorák">&#10045;</abbr> <div class="mirror">&#10140;</div>&#10140; ~10&mu;m<abbr title="lehet kisebb(pl.spermium)/nagyobb(pl. óriásamőba), de általában ekkorák">&#10045;</abbr>
			</details></td></tr>
			<tr><td colspan="2"><details><summary>belső membránrendszer?</summary>
				nincs, így sejtszervecske sincs <div class="mirror">&#10140;</div>&#10140; van, és sejtszervecske is
			</details></td></tr>
			<tr><td colspan="2"><details><summary>kialakulásuk mikor?</summary>
				~4milliárd éve <div class="mirror">&#10140;</div>&#10140; ~2milliárd éve
			</details></td></tr>
	</table></ul></details>
	<details class="kerdes 2" id="sb.647"><summary>eukarióta génje a prokarióta/archea-val milyen kapcsolatban?</summary><ul class="normal">
		<li>eukaryota gének többsége a bakteriális homológiát mutat, kevés az archaea-homológ gén</li>
		<li>archaea-homológ gének az információ-feldolgozás fehérjéit kódolják (pl. transzláció, transzkripció és replikáció)</li>
		<li>baktérium-homológ gének többnyire alapműködéssel összefüggő fehérjéket kódolnak (pl. metabolikus enzimek, membrán transzporterek)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.686"><summary>megjelenés alapján tedd sorrendbe &#10140; mitokondrium, sejtváz, peroxiszóma</summary><ul class="normal">
		<li><i>előbb sejtváz, aztán peroxiszóma, végül mitokondrium</i></li>
	</ul></details>
 </div>
<!-- ///--></div></details>

<!----><details><summary class="phase">2. A sejtmembrán felépítése és működése.</summary><div class="normal">
 <div><div class="title">sejtmembrán.</div>
	<details class="kerdes 2" id="sb.123"><summary style="color:Magenta"><font color="Green">felépítésének alapja? fő alkotói?</font></summary><ul class="normal">
		<li>felépítésük &#10140; kettős_lipidréteg</li>
		<li>kettős_lipidréteg alkotói</li><ul>
			<li>lipidek</li>
			<li>fehérjék</li>
		</ul>
		<a href="images/e2_plasmamembran.png"><img src="images/e2_plasmamembran.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.124"><summary>foszfolipidek miért alkalmasak membránalkotásra?</summary><ul class="normal">
		<li>farok részük apoláris &#10140; két zsírsav része</li>
		<li>fej részük poláris &#10140; glicerin+foszfát+N(pl.kolin) molekularészlet</li>
		<div> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ </div>
		<li>fej részük hidrofil(vízkedvelő,"vonzódik felé") / farok része hidrofób(víztaszító)</li>
		<li>poláris közegben(pl. víz) eldugják, egymás felé fordítják farok részük, fej részük pedig a víz felé fordul</li>
		<a href="images/e1_fszglpd.png"><img src="images/e1_fszglpd.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.128"><summary>zsírsav fő típusai foszfolipidekben?(3)</summary><ul class="normal">
		<li>palmitinsav</li>
		<li>sztearinsav</li>
		<li>olajsav</li>
	</ul></details>
	<details class="kerdes 2" id="sb.130"><summary>foszfolipidek felépítése?(alkotói!)</summary><ul class="normal">
		<li>2zsírsav + glicerin + foszfát + nitrogéntartalmú vegyület(pl.kolin)</li>
		<img src="images/e2_foszfolipid.png">
	</ul></details>
	<details class="kerdes 2" id="sb.125"><summary>lipidkomponensek fő típusainak felsorolása?(3)</summary><ul class="normal">
		<li>foszfolipidek</li>
		<li>koleszterin</li>
		<li>glikolipidek</li>
	</ul></details>
	<details class="kerdes 2" id="sb.131"><summary>foszfolipidkomponensek fő típusainak felsorolása?(4)</summary><ul class="normal">
		<li>foszfatidil-kolin</li>
		<li>foszfatidil-szerin</li>
		<li>foszfatidil-etanolamin</li>
		<li>szfingomielin</li>
	</ul></details>
	<details class="kerdes 2" id="sb.126"><summary>koleszterin &#10140; felépítése? elhelyezkedése? funkciója? mennyisége?</summary><ul class="normal">
		<li>felépítése</li><ul>
			<li>apoláris &#10140; szénhidrogén-rész + szteránváz &#10140; foszfolipidek-farok részénél helyezkedik el</li>
			<li>poláris &#10140; fej-rész &#10140; foszfolipidek fej-részénél helyezkedik el</li>
		</ul>
		<li>szteránváz részével merevíti a membránt</li>
		<li>~foszfolipidekkel azonos mennyiségben</li>
		<a href="images/e2_koleszterin.png"><img src="images/e2_koleszterin.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.127"><summary style="color:Magenta"><font color="Green">mi a raft?</font></summary><ul class="normal">
		<li>raft &#10140; egyes részein vastagabb a membrán</li>
		<a href="images/e2_raft.png"><img src="images/e2_raft.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.132"><summary>glikolipidek &#10140; hol helyezkednek el? "miért?"</summary><ul class="normal">
		<li>külső_rétegben &#10140; ugyanis ...</li>
		<li>glikolipid = lipid + hozzákapcsolódó szénhidrát-lánc</li>
		<li>szénhidrát-lánc pedig glikokalix alkotója</li>
		<a href="images/e2_glikolipid.png"><img src="images/e2_glikolipid.png"></a>
	</ul></details>
	<details class="kerdes 3" id="sb.129"><summary>membránalkotók "mozgáslehetőségei"?</summary><ul class="normal">
		<table><tr><th>mozgásforma</th><th>foszfolipid</th><th>membránfehérje</th></tr>
			<tr><td><abbr title="oldalirányú mozgás, azaz saját rétegén belüli mozgás">laterális diffúzió</abbr></td>
				<td>képes</td>
				<td>képes</td>
			</tr>
			<tr><td>rotáció</td>
				<td>képes</td>
				<td>képes</td>
			</tr>
			<tr><td><abbr title="''zsírsavláncok hajlása''">flexió</abbr></td>
				<td>képes</td>
				<td>képtelen</td>
			</tr>
			<tr><td>flip-flop</td>
				<td>nagyon ritka <abbr title="koleszterinnél gyakoribb">()</abbr></td>
				<td>képtelen</td>
			</tr>
		</table>
		<a href="images/e2_mozgáslehets.png"><img src="images/e2_mozgáslehets.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.135"><summary>membránfehérjék csoportosítása kapcsolódás alapján?</summary><ul class="normal">
		<li>integránsnak van apoláris része amivel mélyen kötődik a lipidrétegbe, perifériás csak felszínesen kötődik</li>
		<li>transzmembrán &#10140; integráns, mely teljesen átér</li>
		<a href="images/e2_membranprotein.png"><img src="images/e2_membranprotein.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.140"><summary>’Multidrog rezisztencia protein’ &#10140; mi? funkció? előfordulásra pl?</summary><div class="normal">
		<li>karrier-fehérje</li>
		<li>apoláris molekulákat pumpálnak ki a sejtből &#10140; pl. gyógyszer, toxikus fehérje</li>
		<li>tumorsejtekben sok van belőlük &#10140; rezisztensek az osztódásukat gátló gyógyszerekre</li>
	</div></details>
 </div>
 <div><div class="title">glikokalix.</div>
	<details class="kerdes 1" id="sb.670"><summary>szinonima?</summary><ul class="normal">
		<li>sejtburok</li>
	</ul></details>
	<details class="kerdes 2" id="sb.133"><summary>szerkezete?</summary><ul class="normal">
		<li>szénhidrátban gazdag</li>
		<li>ugyanis kívülről szénhidrát-láncok kapcsolódnak a fehérjékhez(glikoprotein,proteoglikán) és lipidekhez(glikolipid)</li>
		<img src="images/e2_if_glikokalix.png">
	</ul></details>
	<details class="kerdes 2" id="sb.134"><summary>funkciója?</summary><ul class="normal">
		<li>mechanikai és kémiai védelmet nyújt</li>
		<li>sok vizet képes megkötni</li>
	</ul></details>
	<details class="kerdes 1 open" id="sb.173"><summary><span class="Vocab">IF</span></summary><ul class="normal">
		<br><details><summary>megoldás</summary><ul class="normal">
			<div><span class="WHITE">1</span> (transzmembrán) glikoprotein</div>
			<div><span class="WHITE">2</span> (perifériás) glikoprotein</div>
			<div><span class="WHITE">3</span> (transzmembrán) proteoglikán</div>
			<div><span class="WHITE">4</span> glikolipid</div>
			<div><span class="WHITE">5</span> glikokalix</div>
		</ul></details>
		<img src="images/2_gklklx.png">
	</ul></details>
 </div>
 <div><div class="title">membrántranszport folyamatok.</div>
	<details class="kerdes 4" id="sb.141"><summary style="color:Magenta"><font color="Green">"membránátjutás" lehetőségeinek felsorolása?</font></summary><ul class="normal">
		<img src="images/e2_memntrnrszport.png">
		<table>
			<tr>
				<th rowspan="2">egyszerű_diffúzió</th>
				<th colspan="2">transzport</th>
			</tr><tr>
				<th>passzív = facilitált_diffúzió</th>
				<th>aktív</th>
			</tr>
			<tr><td colspan="3"><details><summary>transzportfehérje? <abbr title="transzport-fehérje =/= transzporter-fehérje">!!</abbr></summary>
				<li>egyszerű_diffúzió &#10140; nincs</li>
				<li>facilitált_diffúzió &#10140; csatornafehérje vagy transzport<strong>er</strong>-fehérje</li>
				<li>aktív_transzport &#10140; transzport<strong>er</strong>-fehérje <abbr title="pumpa">(=)</abbr></li>
			</details></td></tr>
			<tr><td colspan="3"><details><summary>nagyobb / kisebb koncentrációjú térbe megy a szállítandó?</summary>
				<li>egyszerű_diffúzió &#10140; nagyobbtól kisebb koncentráció fele</li>
				<li>facilitált_diffúzió &#10140; nagyobbtól kisebb koncentráció fele <abbr title="ha az összes ioncsatorna facilitált diffúziót végez, akkor  nincs olyan, hogy: kinnt van 50Cl- és 50K+ bennt 49Cl-, és a Cl- a töltéskülönbség miatt kifele megy, tehát a nagyobb koncentráció fele">&#10045;</abbr></li>
				<li>aktív_transzport &#10140; kisebbtől nagyobb koncentrációjú fele</li>
			</details></td></tr>
			<tr><td colspan="3"><details><summary style="color:Magenta"><font color="Green">energiáját mi fedezi?</font></summary>
				<li>egyszerű_diffúzió &#10140; koncentrációkiegyenlítődés</li>
				<li>facilitált_diffúzió &#10140; koncentrációkiegyenlítődés <span class="FIX">+/-</span> töltéskiegyenlítődés</li>
				<li>aktív_transzport &#10140; ATP közvetlenül vagy közvetve</li>
			</details></td></tr>
		</table>
		<details><summary>töltéskiegyenlítődés egyszerű/facilitált diffúziónál miért van/nincs?</summary><ul class="normal">
			<li>egyszerűnél ionok nem juthatnak át, facilitáltnál igen</li>
		</ul></details>
		<details><summary style="color:Magenta"><font color="Green">(töltéskiegyenlítődés facilitáltnál mi a gondom?)</font></summary><ul class="normal">
			<li>az, hogy elméletben a töltéskiegyenlítődés mind segítheti, mind gátolhatja a transzportot</li>
			<li><span class="WHITE">segítheti pl</span> &#10140; van 10000db <span class="WHITE">A<sup>+</sup></span> molekula kinnt, és 1db <span class="WHITE">A<sup>+</sup></span> bennt &#10140; befele megy az A<sup>+</sup> szállítása hisz töltéskül. és koncentrációkül. is azt diktálja</li>
			<li><span class="WHITE">gátolhatja pl</span> &#10140; van 10000db <span class="WHITE">A<sup>+</sup></span> és 10000db <span class="WHITE">B<sup>-</sup></span> kinnt, és 1db <span class="WHITE">A<sup>+</sup></span> bennt &#10140; csak A<sup>+</sup> transzportja engedélyezett &#10140; nyilván befele megy az A szállítása hisz koncentrációkül nagyon ezt diktálja, de itt a töltéskül. ellene szól</li>
			<li>problémám, hogy nincs konkrét példám ezekre, hogy milyen lehet (illetve az se világos, hogy csatorna és transzporter esetében is vannak-e ilyenek)</li>
		</ul></details>
	</ul></details>
	<details class="kerdes 2" id="sb.143"><summary>egyszerű diffúzióval mik jutnak át és mik nem?</summary><ul class="normal">
		<li>átjutnak &#10140; apoláros molekulák <span class="Important">oxigén & lipid</span> + kis poláros molekulák <span class="Important">H<sub>2</sub>O & CO<sub>2</sub></span></li>
		<li>nem jutnak át &#10140; ionok + nagy poláros molekulák</li>
	</ul></details>
	<details class="kerdes 2" id="sb.671"><summary>különbség a facilitált és egyszerű diffúzió között?(2)(LP)</summary><ul class="normal">
		<img src="images/2_trnamn.png">
		<li>transzmembránfehérjét igényel a facilitált</li>
		<li>egyszerű sebessége arányos a <abbr title="konkrétan mellyel az nem világos, de nem érdekel">transzportálódó anyag koncenátrációjával</abbr>, míg faciláltnál a "kémián enzimeknél tanult fv." van</li>
	</ul></details>
	<details class="kerdes 3" id="sb.144"><summary>transzportfehérjék típusainak felsorolása?</summary><ul class="normal">
		<table>
			<tr><th colspan="2">transzportfehérjék <abbr title="transzportfehérje =/= transzporter-fehérje">!!!!!!!!!</abbr> </th></tr>
			<tr>
				<th>csatorna</th>
				<th>karrier (hordozó,transzporter)</th>
			</tr>
			<tr><td colspan="2"><details><summary>kötés az átjutó anyag és transzportfehérje között...</summary>
				nem jön létre ||||||||||||| létrejön
			</details></td></tr>
			<tr><td colspan="2"><details><summary>átjuttatás módja?</summary>
				fehérje belsejében lévő csatornán diffúzióval átjut az anyag ||||||||||||| membrán másik oldalára "átpumpálja és elengedi"
			</details></td></tr>
			<tr><td colspan="2"><details><summary>transzportfehérje szerkezetével mi történik?</summary>
				nem változik meg ||||||||||||| megváltozik a folyamat során
			</details></td></tr>
			<tr><td colspan="2"><details><summary>folyamat sebessége?</summary>
				gyorsabb ||||||||||||| lassabb
			</details></td></tr>
			<tr><td colspan="2"><details><summary>milyen transzportra képes(passzív/aktív)?</summary>
				csak passzív ||||||||||||| passzív / aktív
			</details></td></tr>
		</table>
		<a href="images/2_trnaszpfhtjrjk.png">(kép)</a>
	</ul></details>
	<details class="kerdes 1" id="sb.258"><summary>1pl szekunder_aktív transzportra?</summary><ul class="normal">
		<li>pl. glükóz felszívás bélhámsejtekben</li>
		<li>(azért nem facilitált, mert a glükóz a nagyobb koncentráció irányába megy, hiába passzív a lépés maga)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.672"><summary>2pl primer_aktív transzportra?</summary><ul class="normal">
		<li>pl. Na-K-ATP-áz</li>
		<li><i>pl. proton-pumpa &#10140; mitokondrium elektrontranszport rendszerében, illetve lizoszómákban</i> <abbr title="illetve gyomorban is van 1 elvileg">&#10045;</abbr></li>
	</ul></details>
	<details class="kerdes 3" id="sb.673"><summary>bélhámsejtek "glükóz-felszívó mechanizmusának" bemutatása?(6) <span class="FIX">KÉP!</span></summary><ul class="normal">
		<li>Na-K-ATP-áz a sejt bazális oldalán kipumpál 3Na<sub>+</sub> és közben beenged 2K<sup>+</sup> a sejtbe &#10140; 1ATP fedezi!</li>
		<li>ennek következtében csökken az Na<sup>+</sup> és a töltés a sejtben</li>
		<li>a glükóz-Na<sup>+</sup> transzporter felhasználja az előbbit, és Na<sup>+</sup> szimportál glükózzal a setjbe</li>
		<li><i>glükóz koncentrációja ugyan nagyobb, a sejtben, de az Na<sup>+</sup>-é kisebb</i></li>
		<li>Na-K esetében primer_aktív transzport volt</li>
		<li>glükóz-Na<sup>+</sup> esetében pedig szekunder_aktív transzport volt</li>
		<div><i>(tehét szekundernél egy másik részecske koncentrációkiegyenlítődése fedezte az energiát, de lehet töltés is gondolom, sőt az is lehet itt volt az is, ki tudja...)</i></div>
	</ul></details>
	<details class="kerdes 1" id="sb.259"><summary>csatorna-fehérjékre 2pl?</summary><ul class="normal">
		<li>akvaporinok</li>
		<li>ioncsatornák</li>
	</ul></details>
	<details class="kerdes 2" id="sb.674"><summary>ioncsatornák szabályozásának módjai?(3)</summary><ul class="normal">
		<div>zárt állapotban vannak alapvetően &#10140; szignál hatására nyílnak, a szignál lehet:</div>
		<li>feszültség-változás &#10140; pl. Na<sup>+</sup>- és K<sup>+</sup>- és Ca<sup>2+</sup>-csatornák működését szabályozzák</li>
		<li>ligand &#10140; pl. neurotranszmitter (pl. acetilkolin, glicin, &gamma;-aminovajsav, <strong><i>IP3</i></strong>)</li>
		<li>mechanikai hatás</li>
	</ul></details>
	<details class="kerdes 1" id="sb.675"><summary>ioncsatornákra a részleges szelektivitás jellemző &#10140; mit jelent? igaz v hamis?(LP)</summary><ul class="normal">
		<li>azonos méretű és töltésű ion között nem tesz különbséget</li>
		<li>igaz</li>
	</ul></details>
	<details class="kerdes 1" id="sb.676"><summary>csatornafehérjék működését csak a koncentrációkülönbség határozza meg &#10140; igaz v hamis?</summary><ul class="normal">
		<li>hamis, mert a töltéskülönbség is befolyásolja</li>
	</ul></details>
	<details class="kerdes 1" id="sb.677"><summary>csatornafehérjék működése energiaigényes? miért?</summary><ul class="normal">
		<li>nem (sejt részéről mármint) &#10140; töltés- <abbr title="konkrét példát nemtudok, illetve elméletben ez nem feltétlen így kéne legyen(hisz elég lenne csak egyik, illetve dolgozhatnak egymás ellen is)">és</abbr> koncentrációkiegyenlítődés fedezi az energiát</li>
	</ul></details>
	<details class="kerdes 2" id="sb.145"><summary>primer/szekunder aktív transzport mi?</summary><ul class="normal">
		<li>primer &#10140; energiaszükségletet közvetlenül fedezi ATP</li>
		<li>szekunder &#10140; energiaszükségletet közvetve fedezi ATP &#10140; lásd "bélhámsejtek-kérdés"</li>
	</ul></details>
	<details class="kerdes 2" id="sb.136"><summary>aktív-transzport csoportosítása "molekulaszállítás-alapján"?</summary><ul class="normal">
		<li>uniport &#10140; 1féle</li>
		<li>kotranszport &#10140; 2féle</li><ul>
			<li>szimport &#10140; 1irányba</li>
			<li>antiport &#10140; ellentétes irányba</li>
		</ul>
		<a href="images/e2_trnapormolekl.png"><img src="images/e2_trnapormolekl.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.142"><summary>Na-K &#10140; milyen transzport?</summary><ul class="normal">
		<li>ATP fedezi energiát &#10140; primer aktív-transzport</li>
		<li>antiport &#10140; 3Na-t sejtből kipumpálja / 2K-t bepumpálja sejtbe a kerrier-fehérje</li>
		<video controls>
			<source src="images/NaK.mp4" type="video/mp4">
		</video>
	</ul></details>
 </div>
 <div><div class="title">vízpórusok.</div>
	<details class="kerdes 1" id="sb.137"><summary>szinonima?</summary><ul class="normal">
		<li>akvaporinok</li>
	</ul></details>
	<details class="kerdes 1" id="sb.138"><summary>mik?</summary><ul class="normal">
		<li>csatorna-fehérjék &#10140; 6szor érik át a membránt</li>
	</ul></details>
	<details class="kerdes 1" id="sb.139"><summary>csoportosításuk?</summary><ul class="normal">
		<li>csak vizet enged át</li>
		<li>pár egyéb dolgot is (pl.glicerin,urea)</li>
	</ul></details>
 </div>
<!-- ///--></div></details>

<!----><details><summary class="phase">3. A sejtmag felépítése és működése.</summary><div class="normal">
 <div><div class="title">sejtmag</div>
	<details class="kerdes 1" id="sb.5"><summary>sejtmag latinul?</summary><ul class="normal">
		<li>nucleus</li>
	</ul></details>
	<details class="kerdes 1" id="sb.7"><summary>sejtmag evolúciójának elmélete?</summary><ul class="normal">
		<li>a plazmamembránon betüremkedések keletkeztek, majd ezek leszakadva elváltak a plazmamembrántól</li>
		<li>ezért az eukarióták nucleusa, már kettős-membránnal elválasztott a citoplazmától</li>
		<a href="images/e3_vltnmgmmbr.png"><img src="images/e3_vltnmgmmbr.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.102"><summary>prokarióták sejtmagjának szerkezete?</summary><ul class="normal">
		<li>nincs sejtmagjuk <abbr title="egész pontosan inkább magmembránjuk nincs, és valódi sejtmagjuk nincs, de ez ne érdekeljen">&#10045;</abbr> &#10140; gyűrű-alakú DNS ott van a citoplazmában</li>
	</ul></details>
	<details class="kerdes 2" id="sb.103"><summary>"betüremkedés-leszakadás" &#10140; mik jöttek így létre?(4)</summary><ul class="normal">
		<li>magmembrán, ER, lizoszóma, Golgi</li>
	</ul></details>
	<details class="kerdes 2" id="sb.42"><summary style="color:Magenta"><font color="Green">sejtmag fő folyamatai, funkciói?</font></summary><ul class="normal">
		<li>transzkripció</li>
		<li>replikáció</li>
		<li>magtranszport <abbr title="ez egyenlő kaputranszport">!?</abbr></li>
	</ul></details>
	<details class="kerdes 5" id="sb.8"><summary>sejtmag felosztása?(17)</summary><ul class="normal">
		<li>magmembrán</li>
		<li>nukleoplazma</li><ul>
			<li>nucleolus</li><ul>
				<li>pars_amorpha</li>
				<li>pars_fibrosa</li>
				<li>pars_granulosa</li>
			</ul>
			<li>kromatin</li><ul>
				<li>eukromatin</li>
				<li>heterokromatin</li><ul>
					<li>konstitútív</li>
					<li>fakultatív</li>
				</ul>
			</ul>
			<li>interkromatin</li><ul>
				<li>nukleoszol <img title="magnedv" class="HUN"> &#10140; víz, stb. &#10140; folyadékállomány</li>
				<li>nukleáris_mátrix <img title="magmátrix" class="HUN"></li><ul>
					<li>nukleoszkeleton =  &#10140; ez adja a vázat</li><ul>
						<li>lamina_fibrosa</li>
						<li>intranukleáris_filamentumok</li>
					</ul>
					<li>(nukleáris testek)</li>
					<li>(makromolekuláris testek)</li>
				</ul>
			</ul>
		</ul>
	</ul></details>
	<details class="kerdes 1" id="sb.33"><summary>sejtmagot milyen molekulák alkotják és milyen arányban?(pl. szénhidrátok 1:2 fehérjék)</summary><ul class="normal">
		<li>DNS 50% : 50% fehérjék</li>
	</ul></details>
	<details class="kerdes 1" id="sb.79"><summary>génexpresszió mi?</summary><ul class="normal">
		<li>adott gén "transzkripciója és transzlációja együtt"</li>
	</ul></details>
 </div>
 <div><div class="title">magmembrán</div>
	<details><summary><span class="WHITE">JR</span> magmembrán alapfelépítése</summary><ul class="normal">
		<li>kettős membrán alkotja, köztük perinukleáris tér</li>
		<li>külső/belső rétegnek eltérő komponensei vannak, így szerkezetük és funkciójuk is más</li>
		<li>nem folyamatos a kettős membrán &#10140; magpórusok szakítják meg</li>
	</ul></details>
	<details class="kerdes 1" id="sb.678"><summary>külső/belső réteg komponensei megegyeznek, így szerkezetük és funkciójuk is &#10140; igaz v hamis?</summary><ul class="normal">
		<li>h-h &#10140; komponenseik, így szerkezetük és funkciójuk is eltérő</li>
	</ul></details>
	<details class="kerdes 1" id="sb.679"><summary>perinukleáris tér &#10140; mi? mit tudjak róla?</summary><ul class="normal">
		<li>két membrán közti tér</li>
		<li>ER-el folytonos</li>
		<img src="images/3_membran.png">
	</ul></details>
	<details class="kerdes 1" id="sb.78"><summary>kettős membrán hány lipidréteg?</summary><ul class="normal">
		<li>4</li>
	</ul></details>
	<details class="kerdes 2" id="sb.10"><summary>külső magmembrán &#10140; felépítése? funkciója?</summary><ul class="normal">
		<li>riboszómák vannak rajta</li>
		<li>ER-el folyamatos (&#10140; perinukleáris tér is az ER-el<abbr title="előadáson mondták, a kép ne tévesszen meg">&#10045;</abbr>)</li>
		<li>funkció &#10140; magmembrán fehérjéinek szintézise</li>
		<img src="images/3_membran.png">
	</ul></details>
	<details class="kerdes 1" id="sb.11"><summary>belső magmembrán funkciója?</summary><ul class="normal">
		<li>lamina_fibrosa<abbr title="nukleáris_lamina">(=)</abbr>-val van kapcsolatban &#10140; ezen keresztül kötődik a kromatinhoz (nem közvetlenül)</li>
		<a href="images/3_lamina.png"><img src="images/3_lamina.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.12"><summary>magpórusok száma/sejtmag?</summary><ul class="normal">
		<li>2000-3000db</li>
	</ul></details>
	<details class="kerdes 1" id="sb.13"><summary>magpórust alkotó molekulák?</summary><ul class="normal">
		<li>nukleoporinok alkotják (kb. ~30féle fehérje)</li>
	</ul></details>
	<details class="kerdes 2" id="sb.14"><summary>magpórus szerkezete?</summary><ul class="normal">
		<li>8alegységből épül fel, középen centralis_csatorna</li>
		<li>láthatók rajta még fibrillumok (mind2 oldalt) és kosár (mag felőli oldalon)</li>
		<a href="images/3_porus.png"><img src="images/3_porus.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.253"><summary>magpórus 8alegységén mik juthatnak át és hogy?(LP)</summary><ul class="normal">
		<li>ionok,kismolekulák,monomerek diffúzióval</li>
	</ul></details>
 </div>
 <div><div class="title">nukleoszkeleton</div>
	<details class="kerdes 3" id="sb.108"><summary>interkromatin felosztása?</summary><ul class="normal">
		<li>nukleoszol <img title="magnedv" class="HUN"> &#10140; víz, stb. &#10140; folyadékállomány</li>
		<li>nukleáris_mátrix <img title="magmátrix" class="HUN"></li><ul>
			<li>nukleoszkeleton =  &#10140; ez adja a vázat</li><ul>
				<li>lamina_fibrosa</li>
				<li>intranukleáris_filamentumok</li>
			</ul>
			<li>(nukleáris testek)</li>
			<li>(makromolekuláris testek)</li>
		</ul>
	</ul></details>
	<details class="kerdes 2" id="sb.15"><summary>nukleoszkeleton &#10140; felosztása? mi alapján? <span class="MISS">KÉP</span></summary><ul class="normal">
		<li>lamina_fibrosa &#10140; belső magmembránhoz kapcsolódva</li>
		<li>intranukleáris_filamentumok &#10140; mag belsejében van</li>
	</ul></details>
	<details class="kerdes 2" id="sb.16"><summary>lamina_fibrosa &#10140; milyen típusú váz? alkotói és azok funkciói? <span class="FIX">KÉP</span></summary><ul class="normal">
		<div>intermedier_filamentum &#10140; alkotói a lamin nevű fehérjék</div>
		<li>lamin A/C &#10140; kromatinhoz kapcsolja</li>
		<li>lamin B &#10140; belső_magmembránhoz kapcsolja</li>
	</ul></details>
	<details class="kerdes 2" id="sb.17"><summary>lamina_fibrosa funkció?(2)</summary><ul class="normal">
		<li>belső_magmembránt kapcsolja kromatinhoz</li>
		<li>magmembrán integritását biztosítja</li><ul>
			<li>sejtosztódás elején a laminok foszforilációja megy végbe &#10140; magmembrán szétesik vezikulumokra</li>
			<li>sejtosztódás végén azonban defoszforilációval összeáll ismét a magmembrán</li>
		</ul>
	</ul></details>
 </div>
 <div><div class="title">kromatin</div>
	<details class="kerdes 1" id="sb.6"><summary>definíciója? mi alkotja?</summary><ul class="normal">
		<li>interfázisos (sejciklusban) kromoszóma &#10140; DNS + hozzá kapcsolódó fehérjék</li>
	</ul></details>
	<details class="kerdes 1" id="sb.43"><summary>kromoszóma "felosztása" fázisonként?</summary><ul class="normal">
		<li>interfázisos_kromoszóma &#10140; interfázisban (sejtciklus)</li>
		<li>metafázisos_kromoszóma &#10140; mitózisban (sejtciklus)</li>
	</ul></details>
	<details class="kerdes 2" id="sb.18"><summary>alap felosztása?(2) &#10140; funkció/szerkezet/EM képen?</summary><ul class="normal">
		<table>
			<tr><th></th>  <th>eukromatin</th>  <th>heterokromatin</th></tr>
			
			<tr><th>funkció</th>  <td>aktív &#10140; transzkripciót végez</td>  <td>inaktív &#10140; nincs transzkripcó</td></tr>
			<tr><th>szerkezete</th>  <td>laza</td>  <td>tömör(feltekeredett)</td></tr>
			<tr><th>EM képen</th>  <td>világos</td>  <td>sötét</td></tr>
		</table>
		<a href="images/3_kromatin.png"><img src="images/3_kromatin.png"></a>
	</ul></details>
	<details class="kerdes 3" id="sb.19"><summary style="color:Magenta"><font color="Green">heterokromatin &#10140; típusai? jellemzésük (1szóval)?</font></summary><ul class="normal">
		<li>konstitutív &#10140; transzkripció sosincs</li>
		<li>fakultatív &#10140; ingerre átalakulhat eukromatinná <abbr title="hiszton-acetiláció az inger?">!?</abbr></li>
		<div> ~~~~~~~~~~~~~~~~~~ </div>
		<li>ezenkívül perinukleáris_heterokromatin &#10140; lamina_nuclearishoz kapcsolódva található</li>
		<details><summary>konstitútív & fakultatív szemléltetése 1pl-án?</summary><ul class="normal">
			<li>ha terhes a nő, akkor a tejmirigyek elkezdenek tejfehérjét termelni</li>
			<li>oka &#10140; fakultatív_heterokromatin átalakul eukromatinná, terhesség után pedig visszaalakulnak</li>
			<li>férfiakban ez azonban mindvégig konstitutív</li>
		</ul></details>
	</ul></details>
	<details class="kerdes 1 open" id="sb.20"><summary><span class="WHITE">JR</span> kromoszómák helye interfázis során</summary><ul class="normal">
		<a href="images/e3_krmtintrfzhlyzt.png"><img src="images/e3_krmtintrfzhlyzt.png"></a>
		<li>minden kromoszóma specifikus helyet (nem random) foglal el a sejtmagban interfázisban is (kromatin formában)</li>
	</ul></details>
	<details class="kerdes 2" id="sb.34"><summary style="color:Red"><font color="Green">sejtmag fehérjéinek csoportosítása?</font></summary><ul class="normal">
		<li>hiszton</a>
		<li>non-hiszton</a><ul>
			<li><span class="miss">vázalkotó fehérjék (scaffold-proteinek)</span></li>
			<li><span class="miss">kromatin szerkezetét módosító fehérjék</span></li>
			<li>génreguláló_fehérjék (=speciális_transzkripciós_faktorok) <abbr title="reguláló = szabályozó">&#10045;</abbr></li>
		</ul>
	</ul></details>
 </div>
 <div><div class="title">DNS szerveződés = kromatin kondenzálódás</div>
	<details class="kerdes 1" id="sb.101"><summary>kromatint hány DNS alkotja? <abbr title="+fehérjék is alkotják ugye, de most nem az a kérdés">()</abbr></summary><ul class="normal">
		<li><i>diploid sejt esetében</i> 46db (1/kromoszóma)</li>
		<li><i>haploid sejt (ivarsejt) esetében csak 23db (1/kromoszóma)</i></li>
	</ul></details>
	<details class="kerdes 1" id="sb.35"><summary>mi a feladat? (DNS-hossz vs kromoszóma-hossz)</summary><ul class="normal">
		<li><abbr title="ha 1DNS alatt 1 kromatidot értek, akkor ennyi szvsz (bár lehet, hogy 46db, de sztem nem)"><i>23db</i></abbr> DNS együttes hossza 2m &#10140; ezt kell elhelyezni ~10&mu;m átmérőjű sejtben</a>
	</ul></details>
	<details class="kerdes 1" id="sb.21"><summary>kromoszóma alapegységének neve?</summary><ul class="normal">
		<li>nukleoszóma</li>
		<li>/az eukromatin esetében <abbr title="heterokromatin pedig mégjobban feltekeredett állapotban van">is</abbr> már nukleoszómára tekeredett a DNS! &#10140; tehát kromatin alapegysége is/ &#10140; ezt majd valahova elteszem</li>
	</ul></details>
	<details class="kerdes 2" id="sb.104"><summary>nukleoszóma &#10140; felépítése? régiói?</summary><ul class="normal">
		<li>nukleoszóma áll 8db hisztonból &#10140; <span class="WHITE">H<sub>2A</sub></span> <span class="WHITE">H<sub>2B</sub></span> <span class="WHITE">H<sub>3</sub></span> <span class="WHITE">H<sub>4</sub></span>, mindegyikből 2db</li>
		<li>nukleoszómára a DNS 2x tekeredik fel</li>
		<li>DNS 2 régiója</li><ul>
			<li>linker régió &#10140; ~60 bázispár hosszú</li>
			<li>nukleoszómán lévő rész &#10140; ~146-147 bázispár hosszú</li>
		</ul>
		<a href="images/3_nukleoszoma.png"><img src="images/3_nukleoszoma.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.22"><summary>hiszton fehérjék &#10140; felsorolás & funkció?</summary><ul class="normal">
		<li><span class="WHITE">H<sub>2A</sub></span> <span class="WHITE">H<sub>2B</sub></span> <span class="WHITE">H<sub>3</sub></span> <span class="WHITE">H<sub>4</sub></span> &#10140; nukleoszómákat alkotják</li>
		<li><span class="WHITE">H<sub>1</sub></span> &#10140; nukleoszómákat kapcsolják össze &#10140; kialakul a kromatin-szál = szolenoid (30nm átmérőjú)</li>
		<a href="images/3_histon.png"><img src="images/3_histon.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.257"><summary>"DNS-ből kromoszómába útvonal első 3 lépcsőfoka"?</summary><ul class="normal">
		<li>DNS</li>
		<li>kromatin-filamentum &#10140; nikleoszómák</li>
		<li>kromatin-szál = szolenoid &#10140; nikleoszómák + H1</li>
		<a href="images/3_histon.png"><img src="images/3_histon.png"></a>
	</ul></details>
 </div>
 <div><div class="title">hiszton módosítások</div>
	<details class="kerdes 2" id="sb.36"><summary>hol történnek?</summary><ul class="normal">
		<a href="images/e3_hstnntrml.png"><img src="images/e3_hstnntrml.png"></a>
		<li>nukleoszómát alkotó hisztonoknak van 1-1 "kilógó része"</a><ul>
			<li>NH<sub>2</sub>-re végződnek</li>
			<li>20-35aminosavból állnak és lizin(K) + arginin(R)ben gazdagok)</li>
		</ul>
		<li>ezen részek aminosavjaival történnek a módosítások</li>
		<li>(ezenkívül a H2A és H2B-nek van 1-1 C-re végződő kilógó része is)</li>
	</ul></details>
	<details class="kerdes 2" id="sb.37"><summary>módosítások típusainak felsorolása?</summary><ul class="normal">
		<li>acetiláció és deacetiláció</li>
		<li>metiláció</li>
		<li>foszforiláció</li>
		<li><abbr title="van még ubiquitiniláció (,,jubikutin''), szerepe még nem ismert">&#10045;</abbr></li>
		<div>/// módosítások mindegyike "kovalens-kötésű"</div>
	</ul></details>
	<details class="kerdes 2" id="sb.38"><summary style="color:Magenta"><font color="Green">(de)acetiláció &#10140; mi történik? funkció?</font></summary><ul class="normal">
		<li>acetiláció</li><ul>
			<li>acetilcsoport <span class="WHITE">-COCH<sub>3</sub></span> adódik <span class="WHITE">K</span>lizin vagy <span class="WHITE">R</span>arginin aminósavhoz</li>
			<li>funkció &#10140; aktiválja az adott DNS-részt (tehát lefűzi) &#10140; transzkripcióhoz kell</li>
		</ul>
		<li>deacetiláció pont az ellentetjét váltja ki &#10140; kromatin kondenzálódik (visszafűződik) &#10140; sejtosztódáshoz kell</li>
		<li><span class="MISS">Képet a kromatin lefűződés, kondenzálódásról</span></li>
		<a href="images/e3_ctldhzls.png"><img src="images/e3_ctldhzls.png"></a>
		<a href="images/e3_hstnntrml.png"><img src="images/e3_hstnntrml.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.39"><summary>metiláció &#10140; mi történik? funkció?</summary><ul class="normal">
		<li>metilcsoport <span class="WHITE">-CH<sub>3</sub></span> adódik <span class="WHITE">K</span>lizin vagy <span class="WHITE">R</span>arginin aminósavhoz</li>
		<li>funkció &#10140; inaktívvá teszi a DNS-azon részét</li>
	</ul></details>
	<details class="kerdes 2" id="sb.40"><summary>foszforiláció &#10140; mi történik? funkció?(LP)</summary><ul class="normal">
		<li>foszfátcsoport adódik <span class="WHITE">S</span>szerin vagy <span class="WHITE">T</span>treonin aminósavhoz</li>
		<li>funkció &#10140; kromatin átrendeződésben fontos</li>
	</ul></details>
 </div>
 <div><div class="title">nucleolus</div>
	<details class="kerdes 1" id="sb.44"><summary>membránjának szerkezete?</summary><ul class="normal">
		<li>nincs membránja</li>
	</ul></details>
	<details class="kerdes 2" id="sb.23"><summary>szerkezete &#10140; funkció?</summary><ul class="normal">
		<table>
			<tr><th>rész neve</th> <th>rész funkció</th></tr>
			<tr><th><span class="WHITE">A</span> pars_amorpha</th>
				<td>45S pre_rRNS-szintézis</td>
			</tr>
			<tr><th><span class="WHITE">PF</span> pars_fibrosa</th>
				<td>pre_rRNS-átalakítás &#10140; 1db <span class="WHITE">45S rRNS</span> lebomlik <span class="WHITE">3db kisebb rRNS-re</span></td>
			</tr>
			<tr><th><span class="WHITE">PG</span> pars_granulosa</th>
				<td>40S és 60S riboszóma_alegységet készít a következőképpen &#10140; <span class="WHITE">3db kisebb rRNS-hez</span> hozzákapcsolja a szabad_riboszómákban szintetizálódott majd beérkezett fehérjéket</td>
			</tr>
		</table>
		<li>felismerni NEM kell tudni őket!</li>
		<a href="images/3_nucleolus.png"><img src="images/3_nucleolus.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.24"><summary>funkciói?(2)</summary><ul class="normal">
		<li>2db riboszóma_alegység-szintézis</li><ul>
			<li>rRNS-t szintetizál</li>
			<li>majd az itt szintetizált rRNS-t a kaputranszporttal beérkezett fehérjékkel "kombinálja"</li>
		</ul>
		<li>telomeráz(enzim)-szintézis</li>
	</ul></details>
	<details class="kerdes 1" id="sb.25"><summary>NOR micsoda?</summary><ul class="normal">
		<li>sejtciklus során interfázisban 3 része van a nucleolusnak &#10140; pars amorpha / fibrosa / granulosa</li>
		<li>prometaphaseben nucleolus megszűnik &#10140; rDNS-ek feltekerednek 5 kromoszómára</li>
		<li>NOR [Nucleolus organizer region] &#10140; 5 kromoszóma azon része ahova feltekeredett a nucleolus</li>
		<li>tehát lényegében a nucleolus = interfázisos NOR</li>
	</ul></details>
	<details class="kerdes 1" id="sb.45"><summary>mely kromoszóma tartalmaz NORt?</summary><ul class="normal">
		<li>13,14,15,21,22</li>
	</ul></details>
 </div>
 <div><div class="title">kaputranszport</div>
	<details class="kerdes 1" id="sb.4"><summary>mik áramolnak ki/be és hol?</summary><ul class="normal">
		<li>centralis csatornán át...</li><ul>
			<li>fehérjék/RNS ki citoplazmába</li>
			<li>fehérjék be nucleusba</li>
		</ul>
	</ul></details>
	<details class="kerdes 1" id="sb.681"><summary>funkció?</summary><ul class="normal">
		<li>biztosítja, a citoplazma és nucleus eltérő makromolekuláris szerkezetét (szabályozott transzport)</li>
	</ul></details>
	<details class="kerdes 2" id="sb.3"><summary>résztvevők felsorolása?(4)</summary><ul class="normal">
		<details><summary>cargo &#10140; mi?</summary><ul class="normal">
			<li>transzportált molekula</li>
		</ul></details>
		<details><summary>karrierek &#10140; mik?</summary><ul class="normal">
			<li>átjuttatják a cargot a magpóruson (transzporter-fehérjék)</li>
		</ul></details>
		<details><summary>nukleoporinok &#10140; mik?</summary><ul class="normal">
			<li>magpórus alkotó fehérjék</li>
		</ul></details>
		<details><summary>Ran &#10140; mi?</summary><ul class="normal">
			<li>transzportot szabályozó fehérje</li>
		</ul></details>
	</ul></details>
	<details class="kerdes 2" id="sb.2"><summary>szignál &#10140; definíció? mikor hol? mikor milyen?</summary><ul class="normal">
		<div>szignál &#10140; jel, melyet a receptor felismer és megköt</div>
		<li>import esetében &#10140; cargo csak fehérje lehet, rajta <span class="WHITE">NLS</span>-szignál, transzporteren a receptor</li>
		<li>export esetében</li><ul>
			<li>ha a cargo fehérje, rajta <span class="WHITE">NES</span>-szignál, transzporteren a receptor</li>
			<li>ha a cargo RNS, akkor a <abbr title="talán transzporterek, de passz">kísérő fehérjéken</abbr> van <span class="WHITE">NES</span>-szignál</li>
		</ul>
	</ul></details>
	<details class="kerdes 3" id="sb.46"><summary>import/export &#10140; lépései? különbség?</summary><ul class="normal">
		<li><span class="WHITE">1</span> cargo + transzporter (+Ran-GTP exportnál) összekapcsolódik</li>
		<li><span class="WHITE">2</span> átmennek a magpóruson</li>
		<li><span class="WHITE">3</span> disszociálnak</li>
		<li><span class="WHITE">4</span> transzporter(+Ran-GTP importnál) visszamegy a magpóruson</li>
		<li>---------------</li>
		<li>Ran-GTP mindig a sejtmagban kötődik a cargo+transzport komplexhez</li>
		<li>Ran-GTP mindig a citoszolba érve hidrolizál Ran-GDP-re</li>
		<a href="images/e3_import.png"><img src="images/e3_import.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.1"><summary>export és import energiaigényessége?</summary><ul class="normal">
		<li>export energiaigényes <abbr title="import szvsz azért nem, mert Ran-GTP hozzákötődve szétdisszociálnak, energiaigény csak ahhoz kell, hogy a transzporter kijutva citoszolba ismét működőképes legyen">(!?)</abbr></li>
	</ul></details>
 </div>
 <div><div class="title">transzkripció</div>
	<details class="kerdes 2" id="sb.41"><summary>RNS-ek &#10140; típusai?(4) funkciójuk? <abbr title="ezek csak a föbb típusa, amiket elvárok">&#10045;</abbr></summary><ul class="normal">
		<li><span class="Important">mRNS</span> (messanger) &#10140; kódot az aminosav-sorrendről szállítja a transzlációhoz(riboszóma)</li>
		<li><span class="Important">tRNS</span> (transfer) &#10140; aminosavakat szállítja transzlációhoz(riboszóma)</li>
		<li><span class="Important">rRNS</span> (ribosomal) &#10140; riboszóma két alegységének alkotója</li>
		<li><span class="Important">snRNS</span> ("sznörpök") &#10140; splicingban vesznek részt</li>
		<li>((vannak egyép típusai, lásd Darvas37 + <a href="images/e4_rnsek.png">kép</a>))</li>
	</ul></details>
	<details class="kerdes 2" id="sb.212"><summary>transzkripció lépéseinek felsorolása?</summary><ul class="normal">
		<li>iniciáció(lánckezdés)</li>
		<li>elongáció(láncnövekedés)</li>
		<li>termináció(befejezés)</li>
		<div>transzlációé ugyanezek</div>
	</ul></details>
	<details class="kerdes 2" id="sb.47"><summary>prokarióta és eukarióta transzkripció közti eltérések? <abbr title="főbb eltérések">&#10045;</abbr></summary><ul class="normal"><table>
			<tr><th>prokarióta</th><th>eukarióta</th></tr>
			
			<tr>
				<td>mind3 fajta RNS-szintézist ugyanazon típusú RNS-polimeráz enzim végzi</td>
				<td>
					<div><span class="WHITE">#</span> RNS-polimeráz I &#10140; rRNS-szintézist végzi</div>
					<div><span class="WHITE">#</span> RNS-polimeráz II &#10140; mRNS-szintézist végzi</div>
					<div><span class="WHITE">#</span> RNS-polimeráz III &#10140; tRNS-szintézist végzi</div>
				</td>
			</tr>
			<tr>
				<td>átírás során képződött RNS már nem fog változni, hanem megegyezik a végleges formájával (rRNS/tRNS/mRNS)</td>
				<td>átírás során képződött pre_RNS (pre rRNS / pre mRNS / pre tRNS) még átalakításon megy át</td>
			</tr>
	</table></ul></details>
	<details class="kerdes 2" id="sb.48"><summary>(eukarióta) képződő RNS-molekulához egyből kapcsolódó fehérjék (2<sub>+1</sub>) &#10140; típusai? funkciójuk?</summary><ul class="normal">
		<li><span class="Important">snRNP = snurps("sznörpök")</span></li><ul>
			<li>alkotói &#10140; fehérjék + snRNS</li>
			<li>intronok kivágásában játszanak szerepet</li>
		</ul>
		<li><span class="Important">kísérő fehérjék</span> &#10140; átalakított_RNS-t viszik magpórushoz, és a export-kaputranszportban részt vesznek</li>
		<li>(hnRNP &#10140; pre_RNS-t stabilizálják, átalakítják és szállítják)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.51"><summary>transzkripció milyen irányba zajlik?</summary><ul class="normal">
		<li>5' &#10140; 3'</li>
	</ul></details>
	<details class="kerdes 1" id="sb.88"><summary>transzkripciót mik végzik?</summary><ul class="normal">
		<li>transzkriptoszómák &#10140; RNS-polimeráz <abbr title="valamelyik a 3közül, ugye attól függ mit">&#10045;</abbr> + egyéb TF-ek</li>
	</ul></details>
	<details class="kerdes 2" id="sb.60"><summary>transzkripciós-faktorok típusai és funkciójuk?(2)</summary><ul class="normal">
		<li>általános_transzkripciós_faktorok &#10140; melyek az <span class="WHITE">RNS-polimeráz II enzim</span> működéséhez szükségesek</li>
		<li>speciális_transzkripciós_faktorok &#10140; egyéb specifikus dologhoz szükségesek</li>
		<div>--------------</div>
		<div><span class="white">§</span> <i>génreguláló-fehérjékbe tartoznak</i></div>
		<div><span class="white">§</span> transzkriptoszóma alkotói (RNS polimeráz mellett)</div>
	</ul></details>
	<details class="kerdes 2" id="sb.62"><summary>rRNS-transzkripció lépései?</summary><ul class="normal">
		<table>
			<tr><th>rész neve</th> <th>rész funkció</th></tr>
			<tr><th><span class="WHITE">A</span> pars_amorpha</th>
				<td>45S pre_rRNS-szintézis</td>
			</tr>
			<tr><th><span class="WHITE">PF</span> pars_fibrosa</th>
				<td>pre_rRNS-átalakítás &#10140; 1db <span class="WHITE">45S rRNS</span> lebomlik <span class="WHITE">3db kisebb rRNS-re</span></td>
			</tr>
			<tr><th><span class="WHITE">PG</span> pars_granulosa</th>
				<td>40S és 60S riboszóma_alegységet készít a következőképpen &#10140; <span class="WHITE">3db kisebb rRNS-hez</span> hozzákapcsolja a szabad_riboszómákban szintetizálódott majd beérkezett fehérjéket</td>
			</tr>
		</table>
		<li>felismerni NEM kell tudni őket!</li>
		<a href="images/3_nucleolus.png"><img src="images/3_nucleolus.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.74"><summary>mRNS-transzkripció során az RNS-polimeráz II hova kötődik?</summary><ul class="normal">
		<li>promoter régióban lévő TATA-boxhoz</li>
		<a href="images/e3_tata.png"><img src="images/e3_tata.png"></a>
	</ul></details>
 </div>
 <div><div class="title">pre_mRNS érés</div>
	<details class="kerdes 2" id="sb.50"><summary>lépéseinek felsorolása?</summary><ul class="normal">
		<li>capping ("sapkaképzés")</li>
		<li>poliadeniláció ("poliA farokképzés")</li>
		<li>splicing ("kivágás")</li>
	</ul></details>
	<details class="kerdes 1" id="sb.105"><summary>capping &#10140; lényege, mikor?</summary><ul class="normal">
		<li><span class="Important">transzkripció megkezdése után kicsivel, a képződő pre_mRNS <span class="WHITE">5'</span>végén képződik egy "sapka"</span></li>
		<li>(lépései)</li><ul>
			<li>egy foszfatáz(enzim) eltávolítja a pre_mRNS <span class="WHITE">5'</span> végén lévő foszfátcsoportot</li>
			<li>guanil-transzferáz(enzim) &#10140; guanin-monofoszfátot tesz előbbi helyére</li>
			<li>metil-transzferáz(enzim) &#10140; metilcsoportot tesz a guanin-monofoszfáthoz</li>
		</ul>
	</ul></details>
	<details class="kerdes 1" id="sb.53"><summary>capping funkciója?</summary><ul class="normal">
		<li>transzláció kezdeti lépéseihez kell</li>
	</ul></details>
	<details class="kerdes 2" id="sb.56"><summary>mikor történnek &#10140; capping / poliA-farokképzés / splicing?</summary><ul class="normal">
		<li>ko-transzkripcionális &#10140; pre_mRNS-szintézis közben</li><ul>
			<li>capping <abbr title="megkezdése után röviddel">&#10045;</abbr></li>
			<li>splicing</li>
		</ul>
		<li>poszt-transzkripcionális &#10140; pre_mRNS-szintézis befejezése után</li><ul>
			<li>poliA-farokképzés</li>
		</ul>
	</ul></details>
	<details class="kerdes 2" id="sb.54"><summary>poliadeniláció &#10140; mikor? folyamat lényege?(1-1mondat)</summary><ul class="normal">
		<li><strong>poszt-transzkripciós</strong> &#10140; akkor történik, mikor a pre_mRNS-szintézis befejeződött</li>
		<li>ekkor egy <strong>poliA-polimeráz</strong> enzim hozzákapcsol a pre_mRNS <span class="WHITE"><strong>3'</strong></span> végéhez egy <strong>200adenin-tartalmú</strong> poliA-tail nevű nukleotidot</li>
		<video controls><source src="videos\mRNA 5 prime cap and poly-A tail.mp4" type="video/mp4"></video>
	</ul></details>
	<details class="kerdes 1" id="sb.55"><summary>poliA funkciója?</summary><ul class="normal">
		<li>riboszóma számára felismerő szignál</li>
		<li>(mRNS transzportját segíti)</li>
		<li>(mRNS stabilitását segíti)</li>
	</ul></details>
	<details class="kerdes 2" id="sb.49"><summary>splicing lényege?</summary><ul class="normal">
		<li>pre_mRNS még tartalmaz exonokat és intronokat is</li>
		<li>splicing során intronok kivágodnak &#10140; átalakított_mRNS már csak exonokat tartalmaz</li>
		<div> –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– </div>
		<li>exon &#10140; fehérjét kódoló modul(kisebb egység)</li>
		<li>intron &#10140; fehérjét <span class="Important">NEM</span> kódoló modul (általában hosszabb)</li>
	</ul></details>
	<details class="kerdes 2" id="sb.58"><summary>splicing lépései?</summary><ul class="normal">
		<li>intron két végéhez kapcsolódnak sznörpök</li>
		<li>egymás felé közelítenek</li>
		<li>a pre_mRNS 5' vége felé lévő intron_véghez <span class="WHITE">GU</span> kapcsolódott sznörp elvágja az exon/intron határt</li>
		<li>elhasított szál az intron 3' végén lévő Adeninhez kapcsolódik</li>
		<li>a pre_mRNS 3' végénél felé lévő intron_véghez <span class="WHITE">AG</span> kapcsolódott sznörp elvágja az exon/intron határt</li>
		<li>2 exon összakapcsolódik</li>
		<li>intron összakapcsolódik</li>
		<a href="images/e3_slicing.png"><img src="images/e3_slicing.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.59"><summary>alternatív_splicing &#10140; lényege? következménye?</summary><ul class="normal">
		<li>alternatív_splicing &#10140; intron kivágódás többféleképp is végbemehet</li><ul>
			<li>ez nem feltétlen hiba &#10140; pl. N-CAM (sejtadhéziós molekula) esetében kb.20 féle fehérje képződhet</li>
			<li>de hibát is okozhat &#10140; splicing_mutáció, ez lehet az oka pl. thalassaemia (vvt nemjól képződik) betegségnek</li>
		</ul>
		<li>következménye &#10140; hozzájárul ahhoz, hogy egy sejtben expresszálódó fehérjék száma jóval meghaladja a gének számát</li>
	</ul></details>
	<details class="kerdes 1" id="sb.680"><summary>thalassaemia &#10140; lényege? oka feltételezhetően?</summary><ul class="normal">
		<li>vvt nemjól képződik</li>
		<li>oka feltételezhetően a splicing_mutáció(alternatív_splicing hibát okoz)</li>
	</ul></details>
	<details class="kerdes 2" id="sb.61"><summary style="color:Magenta"><font color="Green">Cajal-testek mik?</font></summary><ul class="normal">
		<li>intekromatinban lévő makromolekula-halmazok</li>
		<li>tartalmaznak</li><ul>
			<li>TF-eket</li>
			<li>sznörpöket</li>
			<li><span class="miss">reguláló molekulákat</span></li>
		</ul>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">4. A génműködés szabályozása.</summary><div class="normal">
 <div><div class="title">génműködés szabályozása</div>
	<details class="kerdes 2" id="sb.63"><summary>szabályozási szintek felsorolása?</summary><ul class="normal">
		<li>transzkripciós</li>
		<li>poszt-transzkripciós = pre_mRNS-érés szabályozás</li>
		<li>transzlációs</li>
		<li>poszt-transzlációs = fehérje módosítás</li>
	</ul></details>
	<details class="kerdes 1" id="sb.68"><summary>gén definíció?</summary><ul class="normal">
		<li>fehérjét kódoló DNS-szakasz</li>
	</ul></details>
	<details class="kerdes 3" id="sb.64"><summary style="color:Magenta"><font color="Green">poszt-transzkripciós_szabályozás(mRNS) &#10140; 2pl?</font></summary><ul class="normal">
		<div><span class="WHITE">1.pl</span> <i>poliadeniláció</i></div>
		<div><span class="WHITE">2.pl</span> mikroRNS és/vagy siRNS lebontja/elcsendesíti az mRNS-t</div>
		<details><summary>mRNS magpóruson átjutásának feltételei?(2)</summary><ul class="normal">
			<li>csak az érett_mRNS (poliA-farok + sapkával rendelkező) jut el magpórushoz, és azon át</li>
			<li><i>kísérő fehérje jelenléte, hisz azon van a NES szignál</i></li>
		</ul></details>
		<details><summary>mRNS életidejét mi szabja meg?</summary><ul class="normal">
			<li>poliA-farok és a 2 végén elhelyezkedő citoplazmatikus_faktorok</li>
		</ul></details>
	</ul></details>
	<details class="kerdes 2" id="sb.65"><summary>DURVA transzkripciós_szabályozás lényege eukariótában?</summary><ul class="normal">
		<li>hiszton acetiláció &#10140; kromatin fellazítása &#10140; serkenti a transzkripciót</li>
		<li>hiszton deacetiláció &#10140; kromatin visszafűzése &#10140; gátolja transzkripciót</li>
	</ul></details>
	<details class="kerdes 1" id="sb.66"><summary>transzkripciós_szabályozás típusai prokariótában és eukariótákban?</summary><ul class="normal"><table>
		<tr><th></th><th>prokarióta</th><th>eukarióta</th></tr>
		
		<tr><th>durva</th> <td>nincs (hiszen nincs kromatinja)</td> <td>van</td> </tr>
		<tr><th>finom</th> <td>van</td> <td>van</td> </tr>
	</table></ul></details>
	<details class="kerdes 2" id="sb.67"><summary>finom_transzkripciós_szabályozásban a két fő különbség prokarióta és eukarióta között?</summary><ul class="normal"><table><tr><th>prokarióta</th>  <th>eukarióta</th></tr><tr><td>
			<div><span class="WHITE">&#10045;</span> policisztronos_mRNS (több gént tartalmaz) képződik &#10140; szabályozása több fehérjére van hatással</div>
			<div>---------------------</div>
			<div><span class="WHITE">&#10045;</span> pre_mRNS-érés nincs (sapka,poliA,splicing)</div>
		</td><td>
			<div><span class="WHITE">&#10045;</span> monocisztronos_mRNS (1gént tartalmaz) képződik &#10140; szabályozása 1 fehérjére van hatással</div>
			<div>---------------------</div>
			<div><span class="WHITE">&#10045;</span> pre_mRNS-érés van (sapka,poliA,splicing)</div>
		</td></tr>
	</table></ul></details>
	<details class="kerdes 3" id="sb.69"><summary>prokarióta finom_transzkripciós_szabályozás típusainak felsorolása és lényegük?</summary><ul class="normal">
		<li>típusai &#10140; negatív és pozitív</li>
		<li>negatív</li><ul>
			<li>alapja &#10140; operátor-hoz kötődve a génreguláló_fehérje<abbr title="represszor_fehérje">&#10045;</abbr> gátolja transzkripció megkezdését &#10140; ha leválik, a transzkripció megindul</li>
			<div><span class="WHITE">&#10045;</span> génreguláló_fehérjéhez ha ligandum kapcsolódik, leválik az operátorról</div>
			<div><span class="WHITE">&#10045;</span> génreguláló_fehérjén alapból ott a ligandum, és ha külön válnak, akkor válik le operátorról</div>
		</ul>
		<li>pozitív</li><ul>
			<li>alapja &#10140; operátor-hoz kötődve a génreguláló_fehérje<abbr title="aktivátor_fehérje">&#10045;</abbr> serkenti a transzkripciót &#10140; ha leválik a transzkripció abbamarad</li>
			<div><span class="WHITE">&#10045;</span> génreguláló_fehérjéhez ha ligandum kapcsolódik, leválik az operátorról</div>
			<div><span class="WHITE">&#10045;</span> génreguláló_fehérjén alapból ott a ligandum, és ha külön válnak, akkor válik le operátorról</div>
		</ul>
		<li><span class="MISS">KÉP/VIDEÓ keressek</span></li>
	</ul></details>
 </div>
 <div><div class="title">eukarióta finom_transzkripciós_szabályozása</div>
	<details class="kerdes 2" id="sb.70"><summary>résztvevők csoportosítása?</summary><ul class="normal">
		<li>cisz-elemek = génszabályozó-régiók &#10140; DNS része(szekvencia), melyhez transzkripciós-faktorok és génreguláló-fehérjék kötődnek majd</li>
		<li>transz-elemek = génreguláló_fehérjék</li>
	</ul></details>
	<details class="kerdes 2" id="sb.71"><summary>cisz-elemekre 3pl?</summary><ul class="normal">
		<li>promoter-régió és TATA-box</li>
		<li>enchancer-régió</li>
		<li>silencer-régió</li>
		<a href="images/e3_génfelépítés.png"><img src="images/e3_génfelépítés.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.73"><summary>TATA-box jelentősége?(2)</summary><ul class="normal">
		<li>RNS-polimeráz II ide kötődik</li>
		<li><i>szabályozza a génműködést (gátlás/fokozás)</i> <abbr title="hiszen ez is cisz, tehát DNS-szekvencia melyhez reguláló-fehérjék kapcsolódnak">&#10045;</abbr></li>
	</ul></details>
	<details class="kerdes 2" id="sb.75"><summary>enhancer és silencer szerepe?</summary><ul class="normal">
		<li>enhancer-régió &#10140; génreguláló-fehérjét megkötve az átírást fokozzák</li>
		<li>silencer-régió &#10140; génreguláló-fehérjét megkötve az átírást gátolják</li>
		<a href="images/e3_tata.png"><img src="images/e3_tata.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.72"><summary style="color:Red"><font color="Green">génreguláló-fehérjék &#10140; mik? típusaik?</font></summary><ul class="normal">
		<li>szabályozzák a génműködést (gátlás/fokozás)</li>
		<div>--------------</div>
		<li>transzkripciós-faktorok</li>
		<li>aktivárorok &#10140; fokozzák transzkripciót</li>
		<li>represszorok &#10140; gátolják transzkripciót</li>
	</ul></details>
	<details class="kerdes 2" id="sb.76"><summary>alap transzkripcióhoz szükséges elemek?(3)</summary><ul class="normal">
		<li>TATA &#10140; + általános_TF-ek + RNS-polimeráz II</li>
		<li>UPE (upstream promote elements)</li>
		<a href="images/e3_alptranszkripció.png"><img src="images/e3_alptranszkripció.png"></a>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">5. Az endoplazmatikus retikulum.</summary><div class="normal">
 <div><div class="title">endoplazmatikus retikulum</div>
	<details class="kerdes 3" id="sb.193"><summary>sER funkciói?(6)</summary><ul class="normal">
		<table>
			<tr><th>általános</th>  <th>speciális</th></tr>
			
			<tr>
				<td>
					<div><span class="WHITE">#</span> foszfolipid-szintézis</div>
					<div><span class="WHITE">#</span> lipid-szintézis &#10140; pl. koleszterin (májban különösen intenzív)</div>
					<div><span class="WHITE">#</span> Ca<sup>2+</sup> tárolás &#10140; harántcsíkolt izomban különösen intenzív!!!!</div>
				</td>
				<td>
					<div><span class="WHITE">#</span> szteroid-szintézis (mellékvesében,herékben,petefészekben)</div>
					<div><span class="WHITE">#</span> "méregtelenítés" (májban)</div>
					<div><span class="WHITE">#</span> glükóz-6-foszfát "lebontása" glükózzá + foszfátionná (májban)</div>
				</td>
			</tr>
		</table>
	</ul></details>
	<details class="kerdes 2" id="sb.194"><summary>sER hogyan "méregtelenít"? "rizikó"?</summary><ul class="normal">
		<li>membránra veszélyes apoláros anyagokat (pl.gyógyszer) polárossá alakítja</li>
		<li>fennáll a veszélye, hogy mutagén(mutációt okozó)/karcinogén(rákkeltő) anyagot hoznak létre helyette</li>
	</ul></details>
	<details class="kerdes 3" id="sb.206"><summary style="color:Magenta"><font color="Green">glükóz-6-foszfát "lebontása" glükózzá?</font></summary><ul class="normal">
		<li>sER membránjában lévő glükóz-6-transzporteren keresztül bejut a glükóz-6-foszfát</li>
		<li>sER lumenében lévő glükóz-6-foszfatáz lehasítja a foszfátion, és így marad 1 glükóz + 1 foszfátion</li>
		<li>(glükóz végül kimegy citoszolba egy másik transzporteren facilitált_diffúzióval, majd onnan a vérbe jut)</li>
		<li>ez a folyamat egy lépése annak a folyamatnak, mikor a májban raktározott glikogén lebontódik glükózzá, hogy a vércsukorszint állandó legyen</li>
		<li>von Gierke-betegség</li><ul>
			<li>autoszomális_recesszív öröklődésű</li>
			<li>gükóz-6-foszfát-transzporter hiány &#10140; nem tudja lebontani a glikogént glükózzá</li>
		</ul>
		<a href="images/e5_glkukzbntsfszft.png"><img src="images/e5_glkukzbntsfszft.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.217"><summary>antibiotikumok működésének alapja?(1)</summary><ul class="normal">
		<li>gátolják a prokarióták transzlációját</li>
	</ul></details>
 </div>
 <div><div class="title">riboszóma</div>
	<details class="kerdes 1" id="sb.200"><summary>milyen típusú molekulák alkotják?</summary><ul class="normal">
		<li>rRNS + fehérje</li>
	</ul></details>
	<details class="kerdes 1" id="sb.201"><summary>szintézise hol zajlik?</summary><ul class="normal">
		<li>nucleolusban</li>
		<li>(de! az őket alkotó fehérjék szabad_riboszómában szintetizálódnak, majd onnan mennek be nucleolus, és 3kis rRNS-el egyesülve hozzák létre 40S és 60S)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.202"><summary>szerkezete?</summary><ul class="normal">
		<li>alapvetően 2db alegység formában találhatók a citoszolban &#10140; 40S + 60S</li>
		<li>transzláció megkezdésekor egyesülnek riboszómává = 80S (ez lehet szabad vagy rER-hez kötött)</li>
		<a href="images/e5_riboszóma.png"><img src="images/e5_riboszóma.png"></a>
	</ul></details>
 </div>
 <div><div class="title">transzláció</div>
	<details class="kerdes 2" id="sb.207"><summary>megkezdéséhez mik szükségesek?(3)</summary><ul class="normal">
		<li>riboszóma</li>
		<li>mRNS</li>
		<li>tRNS</li>
		<div>(elég megjegyezni hogy a 3fő RNS fajta, és onnan már easy!)</div>
	</ul></details>
	<details class="kerdes 2" id="sb.208"><summary>nukleobázisok csoportosítása?</summary><ul class="normal">
		<li>purin &#10140; adenin, guanin</li>
		<li>pirimidin &#10140; citozin, timin/uracil</li>
		<div>RNS-ben van uracil, DNS-ben timin</div>
	</ul></details>
	<details class="kerdes 2" id="sb.209"><summary>bázispárok?</summary><ul class="normal">
		<li>adenin - timin/uracil</li>
		<li>gunanin - citozin</li>
		<div>RNS-ben van uracil, DNS-ben timin</div>
	</ul></details>
	<details class="kerdes 2" id="sb.210"><summary>tRNS szerkezete?</summary><ul class="normal">
		<div>ezeket tudjam:</div>
		<li>3' végén van a mindig <span class="Important">CCA</span>-ra végződő aminósav-kötőhely</li>
		<li>másodlagos-szerkezetének alakját jegyezzem meg</li><ul>
			<li>amelyik oldalon fentebb van a hurok(+van egy "minihurok" alatta), az a riboszóma-kötőhely, másik oldalon pedig az enzim-kötőhely</li>
			<li>alsó hurok az antikodon rész &#10140; azzal kapcsolódik mRNS</li>
		</ul>
		<li>harmadlagos-szerkezete L-alakú &#10140; felül aminósav-kötőhelyre végződik, alul antikodonra</li>
		<a href="images/e5_tRNSszerk.png"><img src="images/e5_tRNSszerk.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.211"><summary>transzláció lépéseinek felsorolása?</summary><ul class="normal">
		<li>iniciáció(lánckezdés)</li>
		<li>elongáció(láncnövekedés)</li>
		<li>termináció(befejezés)</li>
		<div>transzkripcióé ugyanezek</div>
	</ul></details>
	<details class="kerdes 2" id="sb.213"><summary style="color:Red"><font color="Green">iniciáció lényege?</font></summary><ul class="normal">
		<li>40S alegység P-helyéhez kötődik metionin(aminósav) <abbr title="mármint tRNS közvetve!?">!?</abbr></li>
		<li>így csatlakozik az mRNS-en lévő START-kodonhoz(AUG)</li>
		<li>60S is csatlakozik</li>
		<video controls><source src="videos\DNA transcription and translation [HD animation].mp4" type="video/mp4"></video>
	</ul></details>
	<details class="kerdes 2" id="sb.214"><summary>termináció lényege?</summary><ul class="normal">
		<li>STOP-kodonhoz<abbr title="UAA vagy UAG vagy UGA">&#10045;</abbr> érve az A-helyre érkezik a release_faktor(fehérje)</li>
		<li>release_faktor hatására a P-helyen lévő tRNS elengedi az aminósavat(így a fehérjét)</li>
		<li>a riboszóma is a 2db alegységére szétesve elválik az mRNS-től</li>
		<video controls><source src="videos\DNA transcription and translation [HD animation].mp4" type="video/mp4"></video>
	</ul></details>
	<details class="kerdes 3" id="sb.203"><summary>"rER-riboszóma" <abbr title="kotranszlációs membrántranszport a neve, de nemérdekel különösebben">&#10045;</abbr> transzláció lépései?</summary><ul class="normal">
		<li>kezdeti lépés ugyanaz mint a riboszómánál</li>
		<li>de mikor megkezdött a fehérjeszintézis, megérkezik az <strong>SRP(GTP)</strong>, és felismeri a <abbr title="valamilyen fajta aminósav-sorrend a képződő fehérjén">szignál-szekvenciát</abbr> a képződő fehérjén</li>
		<div>tehát csak az megy rER, melyiken van szignál-szekvencia</div>
		<li>hozzákapcsolódik és a szintézis_szünetel, majd a rER-hez viszi</li>
		<li>a rER-en lévő SRP(GTP)-receptorhoz kötődnek</li>
		<li>2GTP átalakul 2GDP + SRP leválik + szintézis_folytatódik</li>
		<li>szintézis során a <strong>transzlokon</strong> nevű csatornán bemegy a képződő fehérje</li>
		<li>innen kétféleképp alakulhat sorsa</li><ul>
			<li>ha nem membránfehérje-szintetizálódik, akkor a <strong>szignál-peptidáz</strong> a szignál-szekvenciát levágja a fehérjéről &#10140; a végén a fehérje az ER-lumenébe kerül</li>
			<li>ha membránfehérje-szintetizálódik, akkor többféleképp alakulhat sorsa megint (külön kérdésbe lesz tárgyalva)</li>
		</ul>
		<li>a riboszóma ismét 2alegységre bomolva a citoszolba jut</li>
		<a href="images/e5_rerszint.png"><img src="images/e5_rerszint.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.215"><summary style="color:Magenta"><font color="Green">ER membránfehérje-szintetizálódás során, hogy alakul a fehérje "sorsa" (START/STOP)?</font></summary><ul class="normal">
		<li>fehérjék egyik vége <span class="WHITE">-NH2</span>, másik <span class="WHITE">-COOH</span></li>
		<li>az, hogy ezek közül melyik lesz a citoszol fele, és melyik a lumen(ER) fele itt dől el</li>
		<div> ~~~~~~~~~~~~~~~~~ </div>
		<li>ha a <abbr title="szignál-szekvencia">START-szekvencia</abbr> nem vágódik le &#10140; <span class="WHITE">-NH2</span> a citoszol fele, ellenkező esetben a lumen fele</li>
		<li>ha a START = STOP <abbr title="mármint a szekvenciák száma">&#10045;</abbr> &#10140; akkor <span class="WHITE">-COOH</span> és <span class="WHITE">-NH2</span> egy oldalon, ha nem akkor ellentétes oldalon</li>
		<a href="images/e5_strtstp.png"><img src="images/e5_strtstp.png"></a>
		<a href="images/e5_startstop.png">egyéb</a>
	</ul></details>
	<details class="kerdes 2" id="sb.204"><summary>rER lumenébe jutott fehérje sorsa?</summary><ul class="normal">
		<li>először is végbemegy mindegyiken az N-glikoziláció (kifejtését lásd máshol)</li>
		<li>ezután 3féleképp rendeződhet sorsa</li><ul>
			<li>ittmarad</li>
			<li>ER membránba épül</li>
			<li>Golgiba megy</li>
		</ul>
	</ul></details>
	<details class="kerdes 2" id="sb.216"><summary>ER fehérje minőség ellenőrzés lényege?</summary><ul class="normal">
		<li>mielőtt tovább megy a Golgiba a fehérje, itt leellenőrzik, hogy helyes-e a szerkezete</li>
		<li>ha nem akkor kijavítják, vagy citoszolba juttatva a <strong>proteoszómák</strong> lebontják</li>
		<li><strong>csaperon</strong> nevű enzimek végzik a feladatot <abbr title="ezeknek van több típusa, pl. PDI, kalnexin stb.">&#10045;</abbr></li>
	</ul></details>
	<details class="kerdes 1" id="sb.205"><summary>N-glikoziláció &#10140; milyen szintű szabályozás? hol történik?</summary><ul class="normal">
		<li>ko-transzlációs</li>
		<li>ER</li>
	</ul></details>
	<details class="kerdes 1" id="sb.255"><summary>N-glikoziláció &#10140; lényege?</summary><ul class="normal">
		<li>rER-ben minden fehérje kap oligoszacharid-láncot az <span class="WHITE">aszpargin(Asn)-aminósav oldalláncán lévő N-csoporthoz</span> kötődve</li>
		<li>(dolikol-foszfát szintetizálja az oligoszacharid-láncot<abbr title="prekurzort">&#10045;</abbr>)</li>
		<a href="images/e5_nglikozil.png"><img src="images/e5_nglikozil.png"></a>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">6. A Golgi-apparátus felépítése és működése.</summary><div class="normal">
 <div><div class="title">Golgi-apparátus</div>
	<details class="kerdes 2" id="sb.188"><summary>mik között folytat transzportot?(4) ezek milyen típusúak?</summary><ul class="normal">
		<li>endoszomális_lizoszomális kompartment</li>
		<li>plazmamembrán</li>
		<li>ER</li>
		<li>ECM</li>
		<div> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ </div>
		<li>összes vezikuláris &#10140; de azon belül már másfajták</li>
	</ul></details>
	<details class="kerdes 1" id="sb.190"><summary>Golgi és rER mennyisége közti összefüggés?</summary><ul class="normal">
		<li>mind2 nagy mennyiségben fordul elő szekréciót végző sejtekben</li>
		<li>(logikus, hisz ha belegondolok a "fehérjesors" ábrán egymásutáni két állomás)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.191"><summary>funkció?</summary><ul class="normal">
		<li>ER-ből érkező fehérjéket és lipideket átalakítja ➜ továbbküldi (ER/plazmamembrán/késői_endoszóma)</li>
		<li>átalakítás során szénhidrátot adhat az anyaghoz ➜ pl. glikolipidet készít lipidből, glikoproteint fehérjéből</li>
	</ul></details>
	<details class="kerdes 1" id="sb.219"><summary>polarizáltsága alatt mit értünk?</summary><ul class="normal">
		<li>ER irányába lévő része a <span class="WHITE">cisz</span>-Golgi-Network CGN</li>
		<li>plazmamembrán irányába lévő része a <span class="WHITE">transz</span>-Golgi-Network TGN</li>
		<a href="images/e6_golgi.png"><img src="images/e6_golgi.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.218"><summary>szerkezete?</summary><ul class="normal">
		<a href="images/e6_golgiszerk.png"><img src="images/e6_golgiszerk.png"></a>
		<li>1 Golgi-apparatus = több Golgi-komplex<abbr title="dictyosoma">(=)</abbr></li>
		<li>Golgi-komplex alkotói &#10140; 3-7db ciszterna + ezeket körülvevő vezikulák</li>
	</ul></details>
	<details class="kerdes 2" id="sb.222"><summary>milyen fehérje-"címkézéseket" kell ismernem (csak soroljam fel őket!)?(3)</summary><ul class="normal">
		<li>M6P (foszforiláció)</li>
		<li>N-glikoziláció</li>
		<li>O-glikoziláció</li>
	</ul></details>
	<details class="kerdes 2" id="sb.220"><summary>M6P &#10140; mit kell tudni róla?</summary><ul class="normal">
		<li>azon fehérjék melyek a lizoszómába mennek, a CGN-nél "megcímkéződnek"</li>
		<li>innentől semmilyen további módosítás nem éri már</li>
		<li>a "címkézés" lényege</li><ul>
			<li>enzim(GlcNAc) felismeri a fehérjét, majd hozzákapcsolódik</li>
			<li>fehérjén lévő <abbr title="lásd ER-nél felkerült oligoszacharid-lánc, annak része">mannóz-csoportok</abbr> közül 1-2 foszforilál(foszfát-csoportot kap!) &#10140; <span class="Important">M6P-szignál</span> lesz belőle</li>
			<li>enzim leválik</li>
		</ul>
		<img src="images/e6_lzszmlprtn.png">
	</ul></details>
	<details class="kerdes 1" id="sb.221"><summary>O-glikoziláció &#10140; milyen szintű szabályozás? lényege?</summary><ul class="normal">
		<li>poszt-transzlációs</li>
		<li>szénhidrátok kapcsolódnak egyes aminósavak oldalláncaihoz</li>
		<li>(Ser, Thr, hidroxiprolin és hidroxilizin oldalláncainak hidroxil csoportjához 1-3 cukor egység kapcsolódik)</li>
	</ul></details>
	<details class="kerdes 2" id="sb.223"><summary>milyen lipid-átalakításokat végez?</summary><ul class="normal">
		<li>ER készíti a membránlipidek nagyrészét, de itt is "készül" 2 fontos, az ER-ből érkező <strong>ceramid</strong> felhasználásával</li><ul>
			<li>glikolipidek</li>
			<li>szfingomielin</li>
		</ul>
	</ul></details>
	<details class="kerdes 3" id="sb.225"><summary>Golgiból hova távozhatnak a fehérjék?</summary><ul class="normal">
		<li>exocitózis = konstitutív_szekréció &#10140; folyamatosan megy</li>
		<li>szekréció = regulált_szekréció<abbr title="regulált = szabályozott">&#10045;</abbr> &#10140; adott jelre ürülnek ki</li>
		<li>késői_endoszómába</li>
		<li>vissza ER</li>
		<div>(szekrécióval/exocitózissal vagy ECM-be vagy plazmamembránba jutnak)</div>
		<a href="images/fehérjesors.png"><img src="images/fehérjesors.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.189"><summary>szekréció &#10140; definíció? szinonimák?(2) (HP)</summary><ul class="normal">
		<li>hasznos anyagok kijuttatása a sejtből (szervezet számára hasznos)</li>
		<li>elválasztás = regulált_szekréció</li>
		<li>(nem tévesztendő össze az exkrécióval, ami a sejtek és a szervezet számára káros/felesleges anyagok eltávolítását jelenti)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.227"><summary>szekréció mely sejtekben fordul elő?</summary><ul class="normal">
		<li>mirigysejtek</li>
		<li>neuronok</li>
		<li><abbr title="lehet van minden sejtben, de ezeknél lényeges!!">&#10045;</abbr></li>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">7. Az endocitózis. A sejten belüli emésztés.</summary><div class="normal">
 <div><div class="title">endocitózis.</div>
	<details class="kerdes 1" id="sb.146"><summary>endocitózis és exocitózis &#10140; mi a legfőbb különbség a 2.tételben tárgyalt membrántranszportokkal szemben?</summary><ul class="normal">
		<li>membránnal körülvéve zajlanak</li>
	</ul></details>
	<details class="kerdes 1" id="sb.254"><summary style="color:Magenta"><font color="Green">endocitózis és exocitózis &#10140; energiaigényesség?</font> <abbr title="Kérdés túl egyszerű, próbáljam membrántranszportokkal stb egybe venni">!!!</abbr></summary><ul class="normal">
		<li>energiaigényesek</li>
	</ul></details>
	<details class="kerdes 2" id="sb.147"><summary>endocitózis típusai? melyik gyakoribb és következménye?</summary><ul class="normal">
		<li>fagocitózis &#10140; szilárd anyag felvétele</li>
		<li>pinocitózis &#10140; folyékony anyag felvétele, vezikulum veszi körbe</li>
		<div> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ </div>
		<li>pinocitózist minden (eukarióta)sejt végez, míg fagocitózis sokkal ritkább (pl. egysejtűek,makrofágok,mikrofágok)</li>
		<li>&#10140; endocitózis alatt, alapvetően a pinocitózist értjük</li>
	</ul></details>
	<details class="kerdes 1" id="sb.148"><summary>fagocitózis funkciói?(2)</summary><ul class="normal">
		<li>immunfolyamatokban baktériumok bekebelezése &#10140; makrofágok, mikrofágok [pl. neutrofil_granulocita] végzik</li>
		<li>elöregedett sejtek/sejttörmelékek bekebelezése</li>
	</ul></details>
	<details class="kerdes 2" id="sb.149"><summary>pinocitózis típusai?(4)</summary><ul class="normal">
		<li>klatrinburkos <abbr title="klatrin_mediált">(=)</abbr></li>
		<li>nem klatrinburkos</li><ul>
			<li>makropinocitózis</li>
			<li>konstitutív</li>
			<li>kaveolákkal történő</li>
		</ul>
	</ul></details>
	<details class="kerdes 1" id="sb.153"><summary>folyadékfázisú endocitózis mi?(LP)</summary><ul class="normal">
		<li>minden endocitózis során kis mennyiségben bejut válogatás nélkül néhány molekula,ion</li>
	</ul></details>
	<details class="kerdes 1" id="sb.158"><summary>transzcitózis lényege? 1pl?</summary><ul class="normal">
		<li>vezikulum lefűződés után átmegy a sejten és a másik oldalon kijut exocitózissal &#10140; anélkül, hogy lizoszóma/ER/Golgi stb.-vel érintkezett volna</li>
		<li>pl. endothel sejtekkel az <strong>albumin</strong> szállítása</li>
	</ul></details>
	<details class="kerdes 1" id="sb.169"><summary>felvett anyag sorsainak felsorolása?</summary><ul class="normal">
		<li>endoszomális-lizoszomális rendszerbe jut</li>
		<li>transzcitózissal átmegy</li>
	</ul></details>
	<details class="kerdes 1" id="sb.256"><summary>Hanta-vírus hogy jut be?</summary><ul class="normal">
		<li>klatrinburkos endocitózis potyautasaként (egy integrin molekulát használ receptorként<abbr title="nem szignálként?">?!</abbr>)</li>
	</ul></details>
 </div>
 <div><div class="title">klatrinburkos.</div>
	<details class="kerdes 1" id="sb.694"><summary>szinonima?</summary><ul class="normal">
		<div>receptor-mediált endocitózis</div>
	</ul></details>
	<details class="kerdes 2" id="sb.150"><summary>lépései?</summary><ul class="normal">
		<li>plazmamembránon receptorok vannak</li><ul>
			<li>extracelluláris tér részéhez kötődik a ligand</li>
			<li>intracelluláris tér részéhez kötődik az <strong>adaptin</strong> és rajta keresztül a <strong>klatrinburok</strong></li>
		</ul>
		<li>gödör &#10140; lefűződés &#10140; kialakul a vezikulum</li>
		<li>klatrin-burok leválik utána róla röviddel</li>
		<img src="images/e7_klatrinburkos.png">
	</ul></details>
	<details class="kerdes 2" id="sb.151"><summary>mik jutnak vele a sejtbe így?(3)</summary><ul class="normal">
		<li>vas-transzferrin komplex</li>
		<li>LDL</li>
		<li>növekedési faktor</li>
	</ul></details>
	<details class="kerdes 1" id="sb.152"><summary>funkciója általánosan?</summary><ul class="normal">
		<li>ez a sejtekre legjellemzőbb <span class="Important">szelektív</span> anyagfelvételi mód</li>
		<div><span class="white">§</span> <i>hisz receptorok vannak !!!!</i></div>
	</ul></details>
	<details class="kerdes 1" id="sb.154"><summary>mi jut be, aminek nem kéne vele?</summary><ul class="normal">
		<li>Hanta-vírus potyautasként (egy integrin molekulát használ receptorként<abbr title="nem szignálként?">?!</abbr>)</li>
	</ul></details>
 </div>
 <div><div class="title">nem klatrinburkos.</div>
	<details class="kerdes 1" id="sb.155"><summary>gyakoriságuk?(JR)</summary><ul class="normal">
		<li>nem lehet tudni, hogy mennyire általánosak vagy sejtspecifikusak, de egyre többféle sejtben mutatták ki</li>
	</ul></details>
	<details class="kerdes 1" id="sb.160"><summary>makropinocitózis &#10140; mechanizmusa? funkció? <span class="FIX">KÉP</span></summary><ul class="normal">
		<li>a sejt felszínén, a sejtmembrán alatti (’kérgi’) aktin segítségével sűrű, finom nyúlványrendszer alakul ki (’raffling’, ’ruffle border’), ezek veszik körül a ’bekebelezendőt’</li>
		<li>nem szelektív, gyakran ’tájékozódó’ jellegű (mi is van a környezetben?)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.156"><summary>kaveolákkal történő lényege? <span class="FIX">KÉP</span> </summary><ul class="normal">
		<li>vezikulum membránjában <strong>kaveolin</strong> nevű fehérje</li>
		<li>palack alakú &#10140; <span class="MISS">KÉP</span></li>
	</ul></details>
	<details class="kerdes 2" id="sb.157"><summary>potocitózis &#10140; mi? lényege?(2)</summary><ul class="normal">
		<li>kaveolákkal történő egy típusa</li>
		<li>a létrejött vezikula nem fűződik le, csak időlegesen bezárul, majd újra kinyílik</li>
		<li>bezáródás közben a belekerült anyagok carrierrekel kerülnek át a citoszólba</li>
	</ul></details>
	<details class="kerdes 1" id="sb.159"><summary>konstitutív_endocitózis funkciója?</summary><ul class="normal">
		<li>membrán összetételének szabályozása</li>
	</ul></details>
 </div>
 <div><div class="title">A saját anyag lebontása.</div>
	<details class="kerdes 1" id="sb.164"><summary>módjainak felsorolása?</summary><ul class="normal">
		<li>autofágia</li>
		<li>karrier mediált proteolízis</li>
	</ul></details>
	<details class="kerdes 1" id="sb.161"><summary>funkcióra 1pl?</summary><ul class="normal">
		<li>elöregedett sejtorganellumok lebontása</li>
	</ul></details>
	<details class="kerdes 3" id="sb.162"><summary>autofágia &#10140; mi váltja ki? lépései?(3)</summary><ul class="normal">
		<li>bizonyos indukciós hatásra megkezdődik (pl. éhezés, stressz, kórokozó)</li>
		<li><abbr title="izolációs_">()</abbr>membrán körbeveszi a sejtorganellumot &#10140; <strong>autofagoszóma</strong> kialakul</li>
		<li>autofagoszóma megérik, majd fúzionál a <strong>endoszomális-lizoszomális kompartmenttel</strong></li>
		<li>megemésztődik a tartalom <strong>savas_hidrolázokkal</strong></li>
	</ul></details>
 </div>
 <div><div class="title">endoszomális-lizoszomális kompartment.</div>
	<details class="kerdes 2" id="sb.163"><summary>endoszomális-lizoszomális kompartment &#10140; alkotóinak felsorolása? funkciójuk?</summary><ul class="normal">
		<li>endoszomális kompartment &#10140; endocitózissal érkező anyagok szortírozása, továbbküldése</li><ul>
			<li><span class="Vocab">1</span>korai_endoszóma</li>
			<li><span class="Vocab">2</span>késői_endoszóma</li>
		</ul>
		<li><span class="Vocab">5</span>lizoszóma &#10140; anyagok bontása</li>
		<img src="images/e7_ndcztslpsk.png">
	</ul></details>
	<details class="kerdes 3" id="sb.291"><summary><span class="book">RAJZ</span> pino/fago/autofago</summary><ul class="normal">
		<div><span class="Vocab">1</span>korai_endoszóma</div>
		<div><span class="Vocab">2</span>késői_endoszóma</div>
		<div><span class="Vocab">3</span>klatrinburkos vezikulum hoz enzimeket(M6P) Golgi-ból</div>
		<div><span class="Vocab">4</span>H<sup>+</sup>-pumpát tartalmazó vezikulum &#10140; biztosítják majd az enzimek működéséhez szükséges pH-t</div>
		<div><span class="Vocab">5</span>lizoszóma <abbr title="nagyobb barna cucc, a fagoszóma/autofagoszóma tartalmát szimbolizálja">&#10045;</abbr></div>
		<div><span class="Vocab">6</span>reziduális_test (bonthatatlan anyagokat tartalmaz) &#10140; exocitózissal ki jut</div>
		<img src="images/e7_ndcztslpsk.png">
	</ul></details>
	<details class="kerdes 1" id="sb.292"><summary>exocitózis vs szekréció?</summary><ul class="normal">
		<li>szekréció olyan exocitózis, mikor a sejt a saját anyagát juttatja ki</li>
		<li>exocitózisnál <strong>lehet</strong> idegen anyag kijuttatása is (pl. reziduális test)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.293"><summary><span class="Vocab">JR</span> exocitózis vs szekréció</summary><ul class="normal">
		<li>lizoszómák "tök máshogy" néznek ki, mert tartalmukban a lebontott/lebontatlan anyagok aránya, típusai stb. igen sokféle lehet</li>
		<img src="images/e7_lzszmkp.png">
	</ul></details>
	<details class="kerdes 1" id="sb.168"><summary style="color:Red"><font color="Green">endoszomális-kompartment és Golgi közti különbség?</font></summary><ul class="normal">
		<li>endoszomális kompartment &#10140; <span class="Important">endocitózissal</span> érkező anyagok szortírozása, továbbküldése</li>
		<li>Golgi &#10140; <span class="Important">exocitózissal</span> <abbr title="tehát itt gondolom arra céloztam, hogy innen mennek majd tovább exoictózisba végül">érkező</abbr> anyagok szortírozása, továbbküldése</li>
		<li><abbr title="átalakításuk? pl. Golgiban a fehérjéhez szénhidrátok hozzáadása/elvétele?)">!?</abbr></li>
	</ul></details>
	<details class="kerdes 1" id="sb.165"><summary>anyagok milyen módszerrel szállítódnak tovább?</summary><ul class="normal">
		<li>vezikuláris transzporttal</li>
	</ul></details>
	<details class="kerdes 1" id="sb.167"><summary>pH &#10140; milyen? mi biztosítja?</summary><ul class="normal">
		<li>citoszol > korai > késői > lizoszóma (egyre savasabb)</li>
		<li>ezt a kompartmentek membránjában lévő proton-pumpa biztosítja</li>
	</ul></details>
	<details class="kerdes 2" id="sb.166"><summary>klatrinburkos endocitózissal bekerült vezikulum sorsa &#10140; vas-transzferrin / LDL / epidermális_növekedési_faktor?</summary><ul class="normal">
		<li>korai_endoszómába jut</li><ul>
			<li>vas-transzferrin &#10140; vas ittmarad majd továbbmegy késői_endoszóma | transzferrin+receptorok visszajutnak a plazmamembránba</li>
			<li>LDL &#10140; LDL ittmarad majd továbbmegy késői_endoszóma  | receptorok visszajutnak a plazmamembránba</li>
			<li>epidermális_növekedési_faktor(EGF) &#10140; EGF + receptor is ittmarad majd továbbmegy késői_endoszóma</li>
		</ul>
		<li>továbbhaladnak lizoszómába és lebomlanak (EGF_receptor is lebomlik, így csökken a számuk plazmamembránban (nem lesz túl intenzív az EGF endocitózis)</li>
		<a href="images/e7_enlzszm.png"><img src="images/e7_enlzszm.png"></a>
	</ul></details>
 </div>
 <div><div class="title">proteaszóma.</div>
	<details class="kerdes 1" id="sb.170"><summary>mi ez?(felépítését tekintve)</summary><ul class="normal">
		<li>multienzim-komplex</li>
	</ul></details>
	<details class="kerdes 1" id="sb.171"><summary>funkciója?</summary><ul class="normal">
		<li>fehérjéket bont le ...</li><ul>
			<li>hibásakat</li>
			<li>vagy csak folyamatot szabályoz vele</li>
		</ul>
	</ul></details>
	<details class="kerdes 1" id="sb.172"><summary>folyamat-szabályozására 1pl?</summary><ul class="normal">
		<li>sejtciklus szabályozásánál az "APC és szekurin / B-ciklin"</li>
		<li>APC megjelöli a fennti kettőt, ami következtében a proteoszóma lebontja őket</li>
		<div><span class="white">!!!</span> lásd bővebben sejtciklus-tétel</div>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">8. A vezikuláris transzport és az exocitózis.</summary><div class="normal">
 <div><div class="title">általános.</div>
	<details class="kerdes 3" id="sb.192"><summary><span class="WHITE">RAJZ</span> fehérjék "életútja"?</summary><ul class="normal">
		<li>ha a fehérje a szabad riboszómában 100% elkészült már, akkor <span class="WHITE">1</span></li>
		<li>ha még rER-ben fog befejződni, akkor <span class="WHITE">2</span></li>
		<a href="images/fehérjesors.png"><img src="images/fehérjesors.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.174"><summary>transzportok típusainak felsorolása?(3)</summary><ul class="normal">
		<li>kaputranszport (&#10140; magmembránon át)</li>
		<li>membrántranszport (&#10140; plazmamembránon át)</li>
		<li>vezikuláris-transzport</li>
	</ul></details>
	<details class="kerdes 2" id="sb.176"><summary>burkos_vezikulumok típusainak felsorolása?</summary><ul class="normal">
		<li>klatrin</li>
		<li>coatomer("kotomer")</li><ul>
			<li>COPI</li>
			<li>COPII</li>
		</ul>
	</ul></details>
	<details class="kerdes 2" id="sb.177"><summary>klatrin_burkos vezikulum előfordulása?</summary><ul class="normal">
		<li>receptor_mediált_endocitózis során a plazmamembrán és endoszomális-lizoszomális kompartmentek között</li>
		<li>TGN és ...</li><ul>
			<li>lizoszóma között</li>
			<li>plazmamembrán között regulált-szekréció esetében (konstitutív-szekréciónál nem!)</li>
		</ul>
		<a href="images/e7_enlzszm.png"><img src="images/e7_enlzszm.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.175"><summary>coatomer_burkos vezikulum előfordulása?</summary><ul class="normal">
		<li>ER és Golgi-apparátus között</li>
		<li>Golgi-zsákok között</li>
		<a href="images/e7_enlzszm.png"><img src="images/e7_enlzszm.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.178"><summary>coatomer &#10140; mi? típusai? előfordulásuk?</summary><ul class="normal">
		<li>fehérjék</li>
		<li>típusai</li><ul>
			<li>COPI &#10140; Golgi-ból ER felé tartó vezikulum</li>
			<li>COPII &#10140; ER-ből Golgi felé tartó vezikulum</li>
		</ul>
		<a href="images/e8_coptransport.png"><img src="images/e8_coptransport.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.179"><summary>kétféle vezikulum-burok közti 2 fő különbség?</summary><ul class="normal">
		<li>COP-burok létrehozása energiaigényes (klatrin nem)</li>
		<li>COP-burok nem válik le egyből (klatrin igen)</li>
	</ul></details>
	<details class="kerdes" id="sb.180"><summary>coatomer_burkos vezikulum képződése ás lefűződése <span class="MISS">tk.106kép</span>?</summary><ul class="normal">
		<li>KIDOLGOZNI!!!! (COPI van a képen, COPII-nél az ARF helyett Sar1)</li>
	</ul></details>
 </div>
 <div><div class="title">vezikuláris transzport és az exocitózis &#10140; résztvevő molekulák.</div>
	<details class="kerdes 2" id="sb.182"><summary>csoportosításuk?(4) <abbr title="főbbek">&#10045;</abbr></summary><ul class="normal">
		<li>szignálok</li>
		<li>burokképző fehérjék (adaptin,klatrin,COPI,COPII)</li>
		<li>tSNARE és vSNARE</li>
		<li>szabályozó fehérjék</li>
	</ul></details>
	<details class="kerdes 1" id="sb.181"><summary style="color:Red"><font color="Green">szignálok funkciójára 1példa?</font></summary><ul class="normal">
		<li>pl. receptor_mediált_endocitózis során <abbr title="ez a szignál">tirozin_tartalmú_peptid</abbr> kell a receptorok összetoborzásához, lefűződéséhez</li>
	</ul></details>
	<details class="kerdes 2" id="sb.184"><summary>szabályozó fehérjék &#10140; mik? funkciójuk?</summary><ul class="normal">
		<li><span class="WHITE">Rab</span> és <span class="WHITE">ARF</span></li>
		<li>ezek G-fehérjék, és mint minden más G-fehérje (pl.Ran) GTP vagy GDP <abbr title="kapcsolódik hozzájuk">kötött</abbr> formában fordulnak elő</li>
		<li>ARF &#10140; COP-burok képződését szabályozza</li>
		<li>Rab &#10140; vezikulumok kikötését szabályozza</li>
	</ul></details>
 </div>
 <div><div class="title">exocitózis.</div>
	<details class="kerdes 1" id="sb.185"><summary><span class="WHITE">JR</span> lépései</summary><ul class="normal">
		<li>SNARE + Rab vegyem észre!</li>
		<a href="images/e8_Exocitózis.png"><img src="images/e8_Exocitózis.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.224"><summary>másnéven?</summary><ul class="normal">
		<li>konstitutív_szekréció</li>
	</ul></details>
	<details class="kerdes 1" id="sb.186"><summary>honnan-hova?</summary><ul class="normal">
		<li>Golgi &#10140; plazmamembrán</li>
	</ul></details>
	<details class="kerdes 1" id="sb.226"><summary>fő funkciója?</summary><ul class="normal">
		<li>plazmamembrán méretét állandó szinten tartsa, hisz endocitózisnál csökken</li>
	</ul></details>
	<details class="kerdes 1" id="sb.187"><summary>miért fontos az exo- és endocitotikus folyamatok egyensúlya?</summary><ul class="normal">
		<li>ha az exo- és endocitózis nem lenne egyensúlyban, a plazmamembrán mérete változna</li>
	</ul></details>
 </div>
 <div><div class="title">vezikuláris transzport lépései, szabályozása.</div>
	<details class="kerdes 2" id="sb.195"><summary>mi az első lépés?</summary><ul class="normal">
		<li>fehérjék kiválogatása a donor sejtalkotóban</li><ul>
			<li>szignál &#10140; fehérjén</li>
			<li>receptor &#10140; donor membrán belső felszínén</li>
		</ul>
		<a href="images/e8_fststep.png"><img src="images/e8_fststep.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.196"><summary>fehérjék kiválogatása a donor sejtalkotóban &#10140; ezután milyen lépés jön?</summary><ul class="normal">
		<li>vezikulum képződés és lefűződése</li><ul>
			<li>szignál &#10140; receptor külső felszínén</li>
			<li>burok</li><ul>
				<li>citoplazmatikus felszínen</li>
				<li>lehet COPI/II vagy klatrin</li>
			</ul>
		</ul>
		<a href="images/e8_scndstp.png"><img src="images/e8_scndstp.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.197"><summary>vezikulum képződés és lefűződése &#10140; ezután milyen lépés jön?</summary><ul class="normal">
		<li>vezikulumok a citoszkeleton segítségével szállítódnak &#10140; aktin vagy mikrotubuluson "át"</li>
		<a href="images/e8_vezktransport.png"><img src="images/e8_vezktransport.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.198"><summary>vezikulumok a citoszkeleton segítségével szállítódnak &#10140; ezután milyen lépés jön?</summary><ul class="normal">
		<li>kihorgonyzás &#10140; avagy hogy találják meg a vezikulumok a célmembránjukat?</li><ul>
			<li>erre funkcionál a tSNARE(membráné) és vSNARE(vezikulumon)</li>
			<li>ugyanis vezikula mikor megérkezik a "célmembránhoz" ezek a fehérjék felismerik egymást és összekapcsolódnak</li>
		</ul>
		<li>dokkolás</li><ul>
			<li>Rab-fehérje végzi</li>
			<li>energiaigényes</li>
		</ul>
		<li>fúzió</li>
		<a href="images/e8_snareprot.png"><img src="images/e8_snareprot.png"></a>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">9. A mitokondrium és a peroxiszóma.</summary><div class="normal">
 <div><div class="title">mitokondrium.</div>
	<details class="kerdes 1" id="sb.330"><summary>mérete?</summary><ul class="normal">
		<li>0,5-1&micro;m</li>
	</ul></details>
	<details class="kerdes 2" id="sb.334"><summary><span class="WHITE">JR</span> milyen főbb funkciók zajlanak</summary><ul class="normal">
		<li>"energiatermelés" (citrátkör & oxidatív_foszforiláció & terminális_oxidáció)</li>
		<li>mitokondriális fehérjeszintézis</li>
		<li>mitokondriális lipidszintézis</li>
		<li>transzport folyamatok</li><ul>
			<li>általános</li>
			<li>fehérje-import</li>
			<li>(RNS-import)</li>
		</ul>
		<li>apoptózisbeli szerepe</li>
		<li>osztódás</li>
	</ul></details>
	<details class="kerdes open 2" id="sb.329"><summary>felépítése</summary><ul class="normal">
		<img src="images/9_felepites.png">
		<br><details><summary>1-4</summary><ul class="normal">
			<div><span class="WHITE">1</span> mátrix</div>
			<div><span class="WHITE">2</span> belső_membrán</div>
			<div><span class="WHITE">3</span> külső_membrán</div>
			<div><span class="WHITE">4</span> intermembán tér</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 4" id="sb.331"><summary>membránok felépítése?</summary><ul class="normal">
		<li>külső_membrán</li><ul>
			<li>50%-lipid & 50%-fehérje</li>
			<li>jellemző fehérjekomponense a porin</li>
			<details><summary>porin?</summary><ul class="normal">
				<li>&beta;-redőket formáló transzmembrán fehérje</li>
				<li>nagy akvaporinokat(vizes_csatornákat) alkotnak &#10140; áteresztőbb a molekulákkal szemben, mint az átlagos membrán (5000dalton méretűeket vagy annál kisebb tömegű molekulákat átengedi)</li>
			</ul></details>
		</ul>
		<li>belső_membrán</li><ul>
			<li>80%-fehérje & 20%-lipid</li>
			<li>fontos lipidkomponense a kardiolipin &#10140; ionok átjutását gátolja (átlagos membránnál kevésbé engedi át)</li>
			<details><summary>ezen fehérjék között van..?(3)</summary><ul class="normal">
				<li>elektronszállító rendszer 3 nagy enzimkomplexe</li>
				<li>ATP-szintetizáló enzim</li>
				<li>transzportehérjék (mitokondrium és citoplazma között)</li>
			</ul></details>
		</ul>
	</ul></details>
	<details class="kerdes 2" id="sb.332"><summary>mátrix alkotói?(4)</summary><ul class="normal">
		<li>sok <strong>enzim</strong> van itt, melyek a &#10140; Szentgyörgyi-Krebs ciklus(szénhidrátok lebontásának egy lépése), &beta;-oxidáció(zsírsavak lebontásának egy lépése), illetve mtDNS megkettőződéséhez szükségesek</li>
		<li>mtDNS (mitokondriális DNS)</li>
		<li>tRNS</li>
		<li>riboszóma</li>
		<li>(mitokondriumban található összes fehérje 2/3a itt van)</li>
	</ul></details>
	<details class="kerdes 4" id="sb.333"><summary>oxidatív_foszforiláció & terminális oxidáció lényege?</summary><ul class="normal">
		<div style="float:right;max-width:40%">
			<img src="images/9_xdtvfszfrlc.png">
		</div>
		<li>citoplazmából beérkezik a mátrixba a glikolízis során keletkezett piroszőlősav <abbr title="zsír lebontásából származó zsírsav">(vagy)</abbr></li>
		<li>ez "hozzáadódva" a CoA-hoz képződik acetil-CoA <abbr title="ugyanez a termék keletkezik a zsírsavak lebontásából is">&#10045;</abbr></li>
		<li>acetil-CoA "elindítja" a citromsav-ciklust</li>
		<li>citromsav-ciklus során "2 termék keletkezik" &#10140; CO<sub>2</sub> illetve NAD<sup>+</sup> redukálódik NADH-vá <abbr title="FAD/FADH kihagytam">&#10045;</abbr></li>
		<li>a keletkezett NADH ezután visszaoxidál NAD<sup>+</sup>-ra &#10140;</li><ul>
			<li>az elektront az elektronszállító transzportrendszernek adja</li>
			<li>a proton a mátrixban van a belső membrán mellett</li>
		</ul>
		<li><span class="Important">x</span>a nagy energiájú elektron az elektronszállító rendszeren végigmegy és lecsökken az energiája &#10140; az energia arra használódik fel, hogy a protonokat a mátrixból kipumpálja az intermembrán térbe</li>
		<li>az elektron végül O<sub>2</sub> csatlakozik a mátrixban &#10140; az O<sub>2</sub> egyből fel is veszi a mátrixban lévő protonokat és így keletkezik belőle víz<span class="Important">x</span></li>
		<li>így a mátrixban lévő protonok száma alacsony (hisz ki lett pumpálva intermembrán térbe, illetve "oxigénbe" is valamennyit elvesz)</li>
		<li>az intermembrán térbe pedig nagy lesz a koncentrációja a protonnak, hiszen a belső_membrán gátolja a passzív visszajutását</li>
		<li>így a mátrix és intermembrán tér között pH(koncentráció) és feszültség(potenciál) különbség lép fel</li>
		<li><span class="Important">y</span> ATP-szintetizáló enzim ezt felhasználva visszaengedi fokozatosan a protonokat, miközben az energiát belőle ADP-ből ATP képzésre fordítja <span class="Important">y</span></li>
		<div> –––––––––––––––––––––––– </div>
		<li>terminális_oxidáció <span class="Important">x</span></li>
		<li>oxidatív_foszforiláció <span class="Important">y</span></li>
		<li>egyenlőre így osztottam be őket <abbr title="~80% esély hogy nem tévedek nagyot, de egyenlőre elég ennyi, márha egyáltalán lesz valaha pontosabb egyértelmű behatárolás">&#10045;</abbr></li>
	</ul></details>
	<details class="kerdes 1" id="sb.335"><summary>milyen feherjek szintezise zajlik?</summary><ul class="normal">
		<li>csak 13polipeptidlánc szintézise zajlik itt, összes többi a [sejtmag-citoplazmában]</li>
		<li>ezek alkotói az elektronszállító láncnak illetve ATP-szintézis enzimkomplexnek</li>
	</ul></details>
	<details class="kerdes 1" id="sb.579"><summary>fehérjeszintézis "egyedisége", orvosi jelentősége?</summary><ul class="normal">
		<li><abbr title="metionin + formilcsoport (-HC=O)">N-formilmetioninnal</abbr> kezdődik a szintézis, csakúgy mint baktériumok esetében (ellenben eukariótáknál a citoplazmában alapvetően ugye metioninnal kezdődik!)</li>
		<li>fontos, hogy antibiotikumokkal gátolható a fehérjeszintézis</li>
	</ul></details>
	<details class="kerdes 1" id="sb.578"><summary>mitokondriális fehérjeszintézis hol zajlik?</summary><ul class="normal">
		<li>riboszómák (mátrixban)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.336"><summary>mitokondriális lipidszintézis lényege?</summary><ul class="normal">
		<li>itt lényegében csak néhány ER-ben szintetizálódott lipid átalakítása történik</li>
		<li>ezek közül a legfontosabb a kardiolipin szintézise &#10140; ez a belső_membrán egyik alkotója, mely gátolja az ionáteresztést</li>
	</ul></details>
	<details class="kerdes 3" id="sb.337"><summary>"általános" transzport lényege &#10140; mik? energiaigényét mi fedezi?</summary><ul class="normal">
		<div><span class="white">§</span> mitokondriumok működése a különböző anyagcseretermékek folyamatos ki- és beáramlása mellett biztosítható</div>
		<li>mivel a <span class="Important">belső membrán</span> e molekulák számára nem átjárható, szállításukat a belső membránba épült <abbr title="integráns transzlokáló">()</abbr>fehérjék végzik</li>
		<li>ezek felhasználják az eltérő proton koncentrációt a belső membrán két oldalán &#10140; tehát az energiát nemcsak ATP-szintáz használja, hanem ezek is</li>
		<li><span class="Important">koncentrációgrádiens(pH) alapján</span> működik <span class="Important">pl. piroszőlősav & zsírsavak & foszfát & Ca<sup>2+</sup> importja</span> <abbr title="wtf? Ca2+ nekem nagyon potenciálkülönbség alapján akar bejönninek tűnik....">?!</abbr></li>
		<li><span class="Important">feszültség alapján</span> működik <span class="Important">pl. ADP/ATP antiport</span> &#10140; ennek lényege, hogy ADP 3x negatív töltésű, ATP 4x negatív &#10140; ADP megy be a mátrixba és ATP megy ki &#10140; így csökken a potenciálkülönbség, azaz feszültség, hiszen alapból kinnt volt pozitívabb</li>
		<div><span class="white">§</span> Ca<sup>2+</sup> transzport normál esetben csak a saját ionszükséglet fedezésére szolgál, de a sejt sérülése esetén fontos szerepe lehet a citoszol Ca-szintjének szabályozásában</div>
		<div><span class="white">§</span> piroszőlősav(acetát) szimporttal jut be OH<sup>-</sup>al <abbr title="wtf? alapból kifele kéne menjen a negatív töltés, ráadásul pH-nak se kedvez... nah mind1">?!</abbr></div>
		<div><span class="white">§</span> foszfát antiporttal jut be, és helyére OH<sup>-</sup> megy</div>
	</ul></details>
	<details class="kerdes 3" id="sb.338"><summary>fehérjetranszport lényege?</summary><ul class="normal">
		<div style="float:right;max-width:40%">
			<img src="images/9_fhrjtrnszprt.png">
		</div>
		<li>mitokondrium fehérjéinek nagyrésze a [sejtmag-citoplazmában] szintetizálódott, mitokondriumban mindössze 13 peptidlánc készül</li>
		<li>ezért az előbbi fehérjéknek be kell jutnia</li>
		<li>ezeknek az N-terminális végén van egy szignál &#10140; kb.20-50 aminósavból álló &alpha;-helix</li>
		<li>&alpha;-helix egyik oldala (+++++) <abbr title="pl. lizin, arginin aminósavak alkotják">pozitív töltésű</abbr> tehát hidrofil, míg másik oldala hidrofób (szvsz apoláros)</li>
		<li>szignál jellegzetességét ez adja, nem a konkrét aminósav sorrend</li>
		<li>amikor elkészült a fehérje, akkor a szignált a csaperonok = hősokk_proteinekhez kötődik</li>
		<li>ezek kiegyensítve a fehérjét biztosítják az alagúton(TOM & TIM) való átjutást</li>
		<li>ATP fedezi az energiaszükségletét a csaperonoknak</li>
		<li>külső membránon a <abbr title="translocon outer membran">TOM</abbr> fehérjéken keresztül jutnak be &#10140; ATP igényes</li>
		<li>belső membránon a TIM fehérjéken keresztül jutnak be &#10140; feszültség fedezi az energiát</li>
		<li>mátrixba bejutva egy szignál_peptidáz levágja a szignál részét</li>
	</ul></details>
	<details class="kerdes 1" id="sb.339"><summary>apoptózisbeli szerepe<span class="MISS">?</span></summary><ul class="normal">
		<li>kardiolipin megköt egy fehérjét (tBid), melynek a mitokondriális membrán labilizásában és a citrokróm C kibocsátásában van szerepe</li>
		<li><span class="MISS">/részletesebben apoptózis fejeztben ír róla 117o/</span></li>
	</ul></details>
	<details class="kerdes 1" id="sb.340"><summary>mtDNS szerkezete?(3)</summary><ul class="normal">
		<li><span class="Important">cirkuláris</span></li>
		<li>nincs benne hiszton,nukleoszóma</li>
		<li>nincs benne intron</li>
	</ul></details>
	<details class="kerdes 1" id="sb.471"><summary>mtDNS mit kódol?</summary><ul class="normal">
		<li>22tRNS</li>
		<li>2rRNS</li>
		<li><span class="Important">13polipeptid</span></li>
	</ul></details>
	<details class="kerdes 1" id="sb.472"><summary>mtDNS és Mendeli-szabály közti összefüggés?</summary><ul class="normal">
		<li>Mendeli-szabály nem érvényes rá, hisz megtermékenyítéskor csak a spermium feji része jut be, így 100%-ban petesejt szabja meg</li>
	</ul></details>
	<details class="kerdes 1" id="sb.341"><summary>mtDNS mutációs rátája milyen és miért?</summary><ul class="normal">
		<li><span class="Important">mutációs rátája magas</span></li>
		<li><span class="Important">nincs benne intron &#10140; 93%-a az mtDNS-nek kódoló(fehérje/RNS) régió, míg sejtmagi DNS-nek csupán 3%</span> (hisz annak nagyrésze intron, aminek nincs jelentősége ha mutálódik)</li>
		<li>oxidatív foszforiláció során reaktív <span class="Important">oxigén gyökök keletkeznek</span>, melyek károsítják az mtDNS-t (/fehérjéket)</li>
		<li>(hisztonok hiánya is növeli)</li>
		<div><span class="white">§</span> de vannak hibajavító enzimek itt is</div>
	</ul></details>
	<details class="kerdes 2" id="sb.342"><summary>mitokondriumok osztódása?</summary><ul class="normal">
		<li>hasonlít a baktériumok hasadására &#10140; belső membrán betüremkedik és kettéválasztja a mátrixot, ezután a külső membrán is benyomul és kettéválik</li>
		<li>osztódásuk nem szinkron a sejtfázissal (bármely fázisban végbemehet)</li>
		<li>osztódáskór nem minden mtDNS kettőződik meg, illetve nem feltétlen csak 1x kettőződhet</li>
		<div><span class="white">§</span> új mitokondriumok nem "születnek", hanem a meglévők osztódása hozza őket létre kizárólag</div>
	</ul></details>
	<details class="kerdes 3" id="sb.343"><summary>mitokondriumok evolúciós eredete és bizonyítása?(8)</summary><ul class="normal">
		<div><strong>endoszimbionta elmélet a legelfogadottabb &#10140; bizonyításai: (hasonlóságuk)</strong></div>
		<li>kettős membrán, ráadásul...</li><ul>
			<li>külső_membránban akvaporinok</li>
			<li>belső_membránban elektronszállító rendszer</li>
		</ul>
		<li>mtDNS</li><ul>
			<li>cirkuláris</li>
			<li>intronjuk szinte nincs</li>
			<li>hiszton & nukleoszóma nincs</li>
		</ul>
		<li><abbr title="metionin + formilcsoport (-HC=O)">N-formilmetioninnal</abbr> kezdődik a fehérje-szintézis</li>
		<li>osztódása hasadásra hasonlít</li>
		<details><summary>őse mi?</summary><ul class="normal">
			<div><span class="white">§</span> mai mitokondriumok között jelentős eltérések is vannak már &#10140; de a közös ős feltételezhetően a fotoszintetizáló_bíbor_baktérium lehetett</div>
		</ul></details>
	</ul></details>
 </div>
 <div><div class="title">peroxiszóma.</div>
	<details class="kerdes 1" id="sb.350"><summary style="color:Red"><font color="Green">krisztalloid mi?</font></summary><ul class="normal">
		<li>121.oldal</li>
	</ul></details>
	<details class="kerdes 2" id="sb.346"><summary>evolúciós eredete?(2<abbr title="természetesen nem ellenérv, de így fogom fel a kérdést">"ellen"</abbr>érv +1)</summary><ul class="normal">
		<div>endoszimbionta elmélet a legelfogadottabb &#10140; mitokondriumnál előbb mehetett végbe, azért...</div>
		<li>van 1rétegű membránja már csak</li>
		<li>nincs saját DNS-e</li>
		<li>azonban osztódása kb. ugyanaz, mint mitokondriumé (megnagyobbodik és osztódik)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.345"><summary>membránja hány rétegű?</summary><ul class="normal">
		<li>1</li>
	</ul></details>
	<details class="kerdes 2" id="sb.344"><summary>főbb funkcióinak felsorolása?</summary><ul class="normal">
		<li>oxidációval lebontása az alábbiaknak &#10140; zsírsavak, purin bázisok, aminosavak</li>
		<li>egyes toxikus anyagokat pl. etanolt,formaldehidet eloxidálva eliminálja</li>
		<li>alábbiak szintézise</li><ul>
			<li>koleszterinéhez hozzájárul</li>
			<li>epesavakéhoz hozzájárul</li>
			<li>éter-lipidek szintézise csak itt van</li>
			<li>plazmalogén-szintézis első lépése</li>
		</ul>
	</ul></details>
	<details class="kerdes 3" id="sb.347"><summary>oxidációval lebontás lényege &#10140; miket-mi bont le? mi keletkezik? energiaigény?</summary><ul class="normal">
		<li>alábbiakat oxidálja &#10140; zsírsavak, purin bázisok, aminosavak</li>
		<li>ezeket lebontva első lépésben <strong>hidrogén-peroxid</strong>(H<sub>2</sub>O<sub>2</sub>) keletkezik (R-H<sub>2</sub> + O<sub>2</sub> &#10140; R + H<sub>2</sub>O<sub>2</sub>)</li>
		<li>ezt a benne lévő <strong>kataláz</strong> enzim átalakítja vízzé</li><ul>
			<li>közvetve pl. <strong>etanolt, formaldehidet</strong> oxidálva vele</li>
			<li>közvetlenül, ha nagy mennyiségben van</li>
		</ul>
		<li>így előnye, hogy egyes <span class="Important">toxikus anyagokat pl. etanolt,formaldehidet eloxidálva eliminálja</span></li>
		<li>azonban fontos, hogy itt a lebontás során felszabadult energia, <span class="Important">nem fordítok ATP-szintézisre, hanem hővé alakul</span></li>
		<div><span class="white">§</span> H<sub>2</sub>O<sub>2</sub> károsító hatású, így ha nem lenne lebontva mutációt stb okozna !!!</div>
	</ul></details>
	<details class="kerdes 3" id="sb.348"><summary>toxikus anyagok eliminálásának lényege?</summary><ul class="normal">
		<li>alábbiakat oxidálja &#10140; zsírsavak, purin bázisok, aminosavak</li>
		<li>ezeket lebontva első lépésben <strong>hidrogén-peroxid</strong>(H<sub>2</sub>O<sub>2</sub>) keletkezik (R-H<sub>2</sub> + O<sub>2</sub> &#10140; R + H<sub>2</sub>O<sub>2</sub>)</li>
		<li>ezt a benne lévő <strong>kataláz</strong> enzim átalakítja vízzé</li><ul>
			<li>közvetve pl. <strong>etanolt, formaldehidet</strong> oxidálva vele</li>
			<li>közvetlenül, ha nagy mennyiségben van</li>
		</ul>
		<li>így előnye, hogy egyes <span class="Important">toxikus anyagokat pl. etanolt,formaldehidet eloxidálva eliminálja</span></li>
		<li>azonban fontos, hogy itt a lebontás során felszabadult energia, <span class="Important">nem fordítok ATP-szintézisre, hanem hővé alakul</span></li>
		<div><span class="white">§</span> H<sub>2</sub>O<sub>2</sub> károsító hatású, így ha nem lenne lebontva mutációt stb okozna !!!</div>
	</ul></details>
	<details class="kerdes 2" id="sb.349"><summary>miket szintetizál?</summary><ul class="normal">
		<li>éter-lipidek szintézise csak itt van</li>
		<li>koleszterin szintézishez hozzájárul</li>
		<li>epesavak szintéziséhez hozzájárul</li>
		<li>plazmalogén-szintézis első lépése itt van</li>
	</ul></details>
	<details class="kerdes 1" id="sb.473"><summary style="color:Magenta"><font color="Green">plazmalogén lényege?(3)</font></summary><ul class="normal">
		<li>a myelinhüvelyben nagy mennyiségben előforduló foszfolipid</li>
		<li>így érthető, hogy a peroxiszómát érintő hiba idegrendszeri tünetek okoz</li>
		<li>csupán a szintézis első lépése zajlik itt</li>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">10. A sejtváz.</summary><div class="normal">
 <div><div class="title">sejtváz.</div>
	<details class="kerdes 1" id="sb.357"><summary>másnéven?</summary><ul class="normal">
		<li>citoszkeleton</li>
	</ul></details>
	<details class="kerdes 2 open" id="sb.687"><summary><span class="WHITE">IF</span> (LP2)</summary><ul class="normal">
		<img src="images/10_iflkmnt.png">
		<br><details><summary>megoldás</summary><ul class="normal">
			<div><span class="WHITE">1</span> mikrofilamentum</div>
			<div><span class="WHITE">2</span> mikrotubulus</div>
			<div><span class="WHITE">3</span> intermedier filamentum</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.688"><summary><span class="WHITE">IF</span> (LP2)</summary><ul class="normal">
		<img src="images/10_filifmnt.png">
		<br><details><summary>megoldás</summary><ul class="normal">
			<div><span class="WHITE">1</span> mikrofilamentum</div>
			<div><span class="WHITE">2</span> intermedier filamentum</div>
			<div><span class="WHITE">3</span> mikrotubulus</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.689"><summary><span class="WHITE">IF</span> (LP2)</summary><ul class="normal">
		<img src="images/10_flmnt.png">
		<br><details><summary>megoldás</summary><ul class="normal">
			<div><span class="WHITE">1</span> mikrofilamentum</div>
			<div><span class="WHITE">2</span> intermedier filamentum</div>
			<div><span class="WHITE">3</span> mikrotubulus</div>
		</ul></details>
	</ul></details>
	<details><summary><span class="white">JR</span> eredete</summary><ul class="normal">
		<li>evolúció során előbb megjelent mint pl. peroxiszóma, mitokondrium</li>
	</ul></details>
	<details class="kerdes 1" id="sb.352"><summary>baktériumokban van?</summary><ul class="normal">
		<li>nincs, de a sejtváz két elemének (aktin + tubulin) őse kimutatható bennük</li>
	</ul></details>
	<details class="kerdes 1" id="sb.693"><summary>plektin &#10140; mi? funkció?</summary><ul class="normal">
		<li>IFAP</li>
		<li>egymáshoz kapcsolja a sejtváz elemeit(imf-mf-mt)</li>
	</ul></details>
	<details class="kerdes 2" id="sb.353"><summary>sejtváz elemeinek felsorolása? (HP)</summary><ul class="normal">
		<li>intermedier filamentum</li>
		<li>mikrofilamentum</li>
		<li>mikrotubulus</li>
		<img src="images/10_elemek.png">
	</ul></details>
	<details class="kerdes 2" id="sb.376"><summary>sejtváz elemeinek (imf-mf-mt) funkcióit hogy érdemes felfogni?</summary><ul class="normal">
		<li>intermedier filamentum &#10140; szilárd váz</li>
		<li>mikrofilamentum & mikrotubulus &#10140; sejt alakváltozása, sejtorganellumok mozgatása</li>
	</ul></details>
	<details class="kerdes 2" id="sb.354"><summary>asszociált proteinek &#10140; funkció?(3) 1-1pl?</summary><ul class="normal">
		<li>szabályozzák az elemek(pl. mikrotubulus) felépülését / lebomlását &#10140; pl. timozin, prolifin</li>
		<li>kapcsolódásukért felelősek &#10140; pl. plektin, tau</li>
		<li>motoros_proteinek <abbr title="asszociált egy típusa, de lehet külön csoportba is venni">&#10045;</abbr> pedig mozgatnak valamilyen anyagot a mikrotubulus/mikrofilamentum mentén &#10140; pl. miozin I-II, kinezin, dinein</li>
	</ul></details>
	<details class="kerdes 3" id="sb.356"><summary>mt/mf/imf &#10140; felépítésük jellemzése?(2) alkotóik?(2) polarizáció? átmérő?</summary><ul class="normal">
		<table>
			<tr><th bgcolor="black"></th>
				<th>mikrotubulus</th>
				<th>mikrofilamentum</th>
				<th>intermedier filamentum</th>
			</tr>
			<tr><th rowspan="4">felépítés</th>
				<td colspan="3">folyamatosan felépülnek/lebomlanak</td>
				</tr><tr>
				<td colspan="3">monomerek alkotják (alegységek)</td>
				</tr><tr>
				<td colspan="2"><abbr title="gömbszerű">globuláris</abbr>-fehérjék</td>
				<td><abbr title="hosszúkásak">fibrilláris</abbr>-fehérjék</td>
				</tr><tr>
				<td>&alpha;/&beta;-tubulin</td>
				<td>G-aktin</td>
				<td>sejttípustól függ</td>
			</tr>
			<tr><th><abbr title="nem elektromos értelemben">polarizált</abbr> vég <span class="Book">- / +</span></th>
				<td colspan="2">van</td>
				<td>nincs</td>
			</tr>
			<tr><th>átmérő</th>
				<td colspan="3">mikrotubulus 25nm <strong>></strong> intermedier 10nm <strong>></strong> aktin 8nm</td>
			</tr>
		</table>
		<img src="images/10_felepetis.png">
	</ul></details>
	<details class="kerdes 1" id="sb.364"><summary>tau &#10140; mi? funkció?</summary><ul class="normal">
		<li>MAP</li>
		<li>ez közreműködik az idegsejtek axonjában lévő sok mikrotubulus kötegbe rendezésében</li>
		<li>a mikrotubulus-kötegek pedig közreműködnek a neurotranszmitter(ingerületátvivő anyag) tartalmú vezikulumok szállításában</li>
	</ul></details>
	<details class="kerdes 2" id="sb.365"><summary>kinezin + dinein &#10140; mik? + funkció?</summary><ul class="normal">
		<div>MAP, azon belül motorfehérjék</div>
		<li>kinezin &#10140; sejtorganellumokat a mikrotubulus <strong>+</strong> vége felé mozgatják</li>
		<li>dinein &#10140; sejtorganellumokat a mikrotubulus <strong>–</strong> vége felé mozgatják</li>
		<details><summary>dinein minek a felépítésében vesz részt?</summary><ul class="normal">
			<div>ostorok és csillók</div>
		</ul></details>
		<details><summary>mozgás energiagényessége?</summary><ul class="normal">
			<div>ATP igényes, minden lépése -1ATP !!</div>
		</ul></details>
	</ul></details>
 </div>
 <div><div class="title">mikrotubulus.</div>
	<details class="kerdes 3" id="sb.358"><summary>szerkezete?(5)</summary><ul class="normal">
		<li>13 protofilamentumból áll 1mikrotubulus</li>
		<li>1protofilamentum sok dimer-ből áll</li>
		<li>1dimer = 1&alpha;-tubulin és 1&beta;-tubulin</li>
		<li>dimerek azonos irányítottságúak &#10140; mikrotubulus 1ik végén &alpha; / másikon &beta; tubulin van csak</li>
		<li>mikrotubulus &alpha;-vége - <abbr title="nem töltés szvsz, lényeg hogy citocentrumban lesz a negatív vége">negatív</abbr> / &beta;-vége + pozitív</li>
		<details><summary>milyen kötések vannak?</summary><ul class="normal">
			<li>&alpha;-tubulin és &beta;-tubulin között kovalens</li>
			<li>dimerek között oldalirányba ionos és H-kötés</li>
		</ul></details>
		<img src="images/10_microtbulue.png">
	</ul></details>
	<details class="kerdes 1" id="sb.359"><summary>átmérője?</summary><ul class="normal">
		<li>25nm</li>
	</ul></details>
	<details class="kerdes 3" id="sb.360"><summary>felépülés/lebomlás &#10140; lényege? szinonima?</summary><ul class="normal">
		<li>mikrobubulus 2 végén illetve a citoszolban lévő tubulinok GTP-t tartalmaznak</li>
		<li>amikor egy dimer a citoszolból ráépül a mikrobulus egyik végére, akkor amelyik kettő között létrejön a kovalens kötés, azoknál a GTP hidrolizál GDP-re</li>
		<li>pl. mikrotubulus negatív végén &alpha;-tubulinok vannak GTP-vel &#10140; dimer &beta;-tubulinrésszel kapcsolódik hozzá, és mind2 GTP hidrolizál GDP-re, így megint egy GTP-s &alpha;-tubulin (dimernek ez a tubulinja nem hidrolizált GDP-re) lesz legkívül</li>
		<li>azonban ha a mikrotubulus végén lévő tubulin GTP-je előbb hidrolizál GDP-re, mielőtt a dimer beépülne, akkor a felépülés megszakad és lebomlás lesz belőle</li>
		<li>(épülés sebessége 1,5m/perc –––––– lebomlásé 25m/perc) <abbr title="itt szerintem valamit nagyon elírtam, mert ez végiggondolva abszurd. 2,5cm/sec seems legit... majd járjak utána">!!!!!!</abbr> </li>
		<li>polimerizáció = felépülés ///// depolimerizáció = lebomlás</li>
	</ul></details>
	<details class="kerdes 2" id="sb.361"><summary>MAP-ok &#10140; minek a rövidítése? 2pl?</summary><ul class="normal">
		<div>MAP = Mikrotubulus Asszociált Proteinek</div>
		<li>kapcsolódásukért felelős pl. tau</li>
		<li>motorfehérjék &#10140; pl. kinezin & dinein</li>
	</ul></details>
	<details class="kerdes 2" id="sb.362"><summary>toxikus anyagok?</summary><ul class="normal">
		<li>taxol &#10140; tiszafa anyaga &#10140; depolimerizációt gátolja</li>
		<li>kolhicin &#10140; őszi kikerics anyaga &#10140; polimerizációt gátolja (ennek következtében a sejtosztódást!)</li>
	</ul></details>
	<details class="kerdes 2" id="sb.363"><summary>MTOC &#10140; jelentése? mik?(2) funkció?</summary><ul class="normal">
		<li>MikroTubulus_Organizáló_Centrum</li>
		<li>centroszóma illetve bazális_test is ilyen</li>
		<li>funkció &#10140; mikrotubulusok szerveződési és eredési helye</li>
		<details><summary>mikrotubulus mely vége néz MTOC irányába?</summary><ul class="normal">
			<li>negatív</li>
		</ul></details>
	</ul></details>
 </div>
 <div><div class="title">mikrofilamentum.</div>
	<details class="kerdes 1" id="sb.366"><summary>másik neve?</summary><ul class="normal">
		<div>aktin_filamentum</div>
	</ul></details>
	<details class="kerdes 1" id="sb.367"><summary>monomerje?</summary><ul class="normal">
		<div>G-aktin</div>
		<img src="images/10_felepetis.png">
	</ul></details>
	<details class="kerdes 1" id="sb.369"><summary>felépülés/lebomlás &#10140; energiaigény? sebesség?</summary><ul class="normal">
		<li>2 G-aktin összekapcsolódásakor 1 ATP hidrolizál ADP-re</li>
		<li>+ végén a polimerizáció(felépülés) kb. 10x gyorsabb</li>
	</ul></details>
	<details class="kerdes 1" id="sb.355"><summary style="color:Magenta"><font color="Green">szerkezet?</font></summary><ul class="normal">
		<li>aktin_fehérjék egymáshoz kapcsolódva létrehoznak egy szálat</li>
		<li>2 szál hélixszerű összekapcsolódásából jön létre a mikrofilamentum &#10140; - és + vége szintén van(mikrotubulusnál is)</li>
	</ul></details>
	<details class="kerdes 2" id="sb.370"><summary>toxikus anyagok?</summary><ul class="normal">
		<li>citokalazin &#10140; polimerizációt gátolja</li>
		<li>falloidin &#10140; depolimerizációt gátolja</li>
		<div><span class="white">§</span> mindkettő egyes gombákban fordul elő &#10140; falloidin pl. van gyilkos galócában (de konkrétan nem ettől olyan halálos)</div>
	</ul></details>
	<details class="kerdes 1" id="sb.690"><summary>motorfehérjék &#10140; 2pl? hol fordulnak elő?</summary><ul class="normal">
		<div>motorfehérjék &#10140; miozinok (~40féle van)</div>
		<li>miozin_I &#10140; minden sejtben van</li>
		<li>miozin_II &#10140; harántcsíkolt izomban</li>
	</ul></details>
	<details class="kerdes 1" id="sb.691"><summary>kapcsolódásért felelős asszociált proteinek &#10140; 2pl? hol fordulnak elő & funkció?</summary><ul class="normal">
		<div><span class="WHITE">pl</span> <strong>troponin</strong> izomsejteknél fordul elő &#10140; Ca<sup>2+</sup>megkötődésével elfordítja az aktin szálat</div>
		<div><span class="WHITE">pl</span> <strong>tropomiozin</strong> izomsejteknél fordul elő &#10140; meggátolja aktin miozinhoz kötődését</div>
	</ul></details>
	<details class="kerdes 1" id="sb.692"><summary>felépülés / lebomlást szabályozó asszociált proteinek &#10140; 2pl funkcióval?</summary><ul class="normal">
		<div><span class="WHITE">pl</span> timozin &#10140; polimerizációt gátolja</div>
		<div><span class="WHITE">pl</span> prolifin &#10140; polimerizációt serkenti</div>
	</ul></details>
	<details class="kerdes 3" id="sb.371"><summary>ABP-k &#10140; minek a rövidítése? funkció?(3) mindegyikhez 2pl?</summary><ul class="normal">
		<div>Actin Binding Protein -ek</div>
		<li>felépülés / lebomlást szabályozzák</li><ul>
			<div><span class="WHITE">pl</span> timozin &#10140; polimerizációt gátolja</div>
			<div><span class="WHITE">pl</span> prolifin &#10140; polimerizációt serkenti</div>
		</ul>
		<li>kapcsolódásukért felelős</li><ul>
			<div><span class="WHITE">pl</span> <strong>troponin</strong> izomsejteknél fordul elő &#10140; Ca<sup>2+</sup>megkötődésével elfordítja az aktin szálat</div>
			<div><span class="WHITE">pl</span> <strong>tropomiozin</strong> izomsejteknél fordul elő &#10140; meggátolja aktin miozinhoz kötődését</div>
		</ul>
		<li>motorfehérjék &#10140; miozinok (~40féle van)</li><ul>
			<div><span class="WHITE">pl</span> <strong>miozin_I</strong> &#10140; minden sejtben van</div>
			<div><span class="WHITE">pl</span> <strong>miozin_II</strong> &#10140; harántcsíkolt izomban</div>
		</ul>
		<img src="images/10_moizosn.png">
	</ul></details>
	<details class="kerdes 3" id="sb.372"><summary style="color:Red"><font color="Green">mikroboholy felépítése?</font></summary><ul class="normal">
		<li>20-30 aktin filamentumból áll</li>
		<li>pozitív végük van a csúcs résznél mindig</li>
		<li>ezeket <strong>villin</strong> és <strong>fimbrin</strong> kapcsolja egymáshoz (így egy kötegnek tekinthetők lényegében) <abbr title="most akkor ezek is kapcsolódásért felelős ABP-k ????">!?</abbr></li>
		<li>membránhoz <strong>miozin_I</strong> kapcsolja őket</li>
		<li>terminal_web területen <strong>spektrin</strong> kapcsolja a citoszkeletonhoz (intermedier- & mikrofilamentumokhoz)</li>
		<img src="images/10_microvillus.png">
	</ul></details>
	<details class="kerdes 1" id="sb.373"><summary><span class="white">JR</span> funkció, elrendeződés</summary><ul class="normal">
		<li>stress-fonalak &#10140; egész sejtet átérik, pl. sebgyógyuláskor összehúzódnak</li>
		<li>amöboid mozgás</li>
		<li>izommozgás</li>
		<li>citokenezisnél kontrakciós gyűrű</li>
		<li>membránszkeleton (membrán alatti réteg, 91.KÉP)</li>
		<li>mikroboholy=microvilli alkotója</li>
		<li>stereocilium alkotója</li>
		<img src="images/10_flszvhmsjt.png">
	</ul></details>
 </div>
 <div><div class="title">intermedier-filamentumok.</div>
	<details class="kerdes 1" id="sb.368"><summary>monomer mi?</summary><ul class="normal">
		<li>fibrilláris-fehérje &#10140; 7aminósavból áll</li>
		<li>egyik vége <span class="WHITE">-NH<sub>2</sub></span> másik <span class="WHITE">-COOH</span></li>
	</ul></details>
	<details class="kerdes 1" id="sb.374"><summary>monomer sejttípustól függése mire használható fel?</summary><ul class="normal">
		<div>tumorsejt eredete meghatározható, hisz olyat termel, amilyen szövetből származott</div>
	</ul></details>
	<details class="kerdes 2" id="sb.375"><summary>felépítés?</summary><ul class="normal">
		<li>monomerek egyik végén <span class="Book">NH2</span>, másik végén <span class="Book">COOH</span></li>
		<li>dimer &#10140; 2monomer összecsavarodik</li>
		<li>tetramer <i>= protofilamentum</i></li>
		<li>8protofilamentum &#10140; intermedier filamentum</li>
		<img src="images/10_intremdfl.png">
	</ul></details>
	<details class="kerdes 2" id="sb.377"><summary>osztályaik?</summary><ul class="normal">
		<li>keratinok &#10140; hámszövet</li>
		<li>neurofilamentumok &#10140; könnyű / közepes / nehéz &#10140; idegsejteknél</li>
		<li>laminok &#10140; pl. A/B/C a lamina_fibrosánál</li>
	</ul></details>
	<details class="kerdes 2" id="sb.378"><summary style="color:Magenta"><font color="Green">szerepük, előfordulásukra 2<sub>+1</sub> pl?</font></summary><ul class="normal">
		<li>dezmoszóma & hemidezmoszóma ehhez kapcsolódik (sejten belül!)</li>
		<li>lamina_fibrosa a magmembrán stabilitását biztosítja</li>
		<li><i>tumorsejtek eredete ebből meghatározható, mert minden sejtben más a monomer &#10140; tumorsejt monomerje megegyezik azzal a szövetével, ahonnan származik</i></li>
	</ul></details>
	<details class="kerdes 1" id="sb.379"><summary>IFAP &#10140; jelentése? 1pl?</summary><ul class="normal">
		<li>Intermedier Filamentum Asszociált Protein</li>
		<li>pl. plektin &#10140; összekapcsolja egymással a sejtváz elemeit (imf-mf-mt)</li>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">11. A sejtek kapcsolódása egymáshoz és környezetükhöz. Az extracelluláris mátrix (ECM).</summary><div class="normal">
 <div><div class="title">általános.</div>
	<details class="kerdes 1" id="sb.247"><summary>sejt mivel tud kapcsolódni?</summary><ul class="normal">
		<li>sejt-sejt (másik sejttel)</li>
		<li>sejt-ECM (ECM-el)</li>
	</ul></details>
	<details class="kerdes 2" id="sb.235"><summary>lamina_basalis milyen sejtek körül van?(4)</summary><ul class="normal">
		<li>izom (sima+haránt)</li>
		<li>hám (nem körül, hanem alatt)</li>
		<li>zsír</li>
		<li>Schwann</li>
	</ul></details>
	<details class="kerdes 2" id="sb.237"><summary>membrán asszimetriára 3pl?</summary><ul class="normal">
		<li><span class="Important">glikolipidek csak a külső rétegben vannak</span></li>
		<li>bélhámsejtek_polaritása &#10140; apikális és bazolaterális membránján eltérő összetétel <span class="Book">KÉP</span></li>
		<li>nyugalmi_potenciál &#10140; membrán belseje negatívabb töltésű</li>
		<img src="images/e11_latdiff_barrier.png">
	</ul></details>
	<details class="kerdes 2" id="sb.238"><summary>bélhámsejtek_polaritása &#10140; funkció? mi biztosítja?</summary><ul class="normal">
		<li>bélhámsejt felszívás lépéseit biztosítja</li><ul>
			<li>1) apikális-membránon keresztül sejtbe kerülnek</li>
			<li>2) bazolaterális-membránon keresztül az intersticiális térbe</li>
			<li>3) végül onnan a véráramba</li>
		</ul>
		<li>zonula_occludens</li>
		<details><summary>zonula_occludens konkrétabban mit akadályoz meg?</summary><ul class="normal">
			<li>nem engedi, hogy <strong>laterális diffúzióval</strong> keveredjenek a membránkomponensek a 2 területen</li>
		</ul></details>
		<img src="images/e11_latdiff_barrier.png">
	</ul></details>
 </div>
 <div><div class="title">molekulák.</div>
	<details class="kerdes 3" id="sb.244"><summary>ECM felépítő molekulák felsorolása csoportosítva?(HP)</summary><ul class="normal">
		<li>alapállományt felépítők &#10140; <span class="WHITE">proteoglikánok</span> <span class="WHITE">hyaluronsav</span></li>
		<li>szerkezeti elemek &#10140; <span class="WHITE">kollagén<strong>ek</strong></span> <span class="WHITE">elasztin</span></li>
		<li>adhéziós elemek &#10140; (egyes) glikoproteinek = <span class="WHITE">laminin</span> <span class="WHITE">fibronektin</span> stb.</li>
		<li><abbr title="szerkezeti elemek is részt vesznek adhézióban, de fő funkciójuk nem az">&#10045;</abbr> <abbr title="lehet nem csak glikoproteinek tartoznak adhéziósba, de elég azokat tudnom">&#10045;</abbr></li>
		<div><span class="white">§</span> alapállományba van beágyazódva a többi (többi = fibrilláris = szerkezeti + adhéziós)</div>
	</ul></details>
	<details class="kerdes 1" id="sb.385"><summary>fibronektin &#10140; mi? funkciójára 1pl?</summary><ul class="normal">
		<li>ECM felépítő adhéziós elem (glikoprotein)</li>
		<li>kötőszöveti ECM jellemző alkotója</li>
		<li>(de lamina_densat is elvileg ez köti össze lamina_fibroreticularissal)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.383"><summary>kollagének &#10140; mik? funkciójukra 1pl?</summary><ul class="normal">
		<li>ECM felépítő szerkezeti elemek</li>
		<li>lamina_densa alkotója a IV.típusú_kollagén</li>
		<img src="images/11_membranalis.png">
	</ul></details>
	<details class="kerdes 1" id="sb.382"><summary>laminin &#10140; mi? funkciójára 1pl?</summary><ul class="normal">
		<li>ECM felépítő adhéziós elem (glikoprotein)</li>
		<li>lamina_rara alkotója &#10140; lamina_densat kihorgonyozzák a sejthez</li>
		<img src="images/11_membranalis.png">
	</ul></details>
	<details class="kerdes 1" id="sb.384"><summary><span class="white">JR</span> integrinek</summary><ul class="normal">
		<li>transzmembrán heterodimer fehérjék</li>
		<li>heterodimer, ugyanis két különböző (α,β) alegységből épülnek fel</li>
		<li>α-alegység 2 részből áll, melyet diszulfid-híd köt össze</li>
		<img src="images/11_integrin.png">
	</ul></details>
	<details class="kerdes 1" id="sb.387"><summary>integrin extracellulárisan mihez kapcsolódik?</summary><ul class="normal">
		<li>mátrixban lévő <abbr title="(R)arginin-(G)glicin-(D)aszparaginsav">RGD</abbr> nevű aminósav-szekvenciához</li>
		<li>α-alegységnek és β-alegységnek vannak különböző típusai (α1,α2 stb. β-nál ugyanez)</li>
		<li>attól függően, hogy milyen 2fajta alegység kapcsolódik (pl. α2-β3), attól függ, hogy az ECM mely molekulájának RGD-jéhez fog kötődni (fibronektin, laminin, kollagén stb.)</li>
		<img src="images/11_integrin.png">
		<img src="images/11_rgdbind.png">
	</ul></details>
	<details class="kerdes 2" id="sb.388"><summary>proteoglikán funkciójára 1pl?</summary><ul class="normal">
		<li>a <strong>disztroglikán</strong> nevű proteoglikán részt vesz a harántcsíkolt izomsejtek <strong>lamina_basalis</strong>hoz kötődésében</li>
		<li><strong>disztrofin</strong>nal teremt kapcsolatot a sejtváz fele</li>
		<details><summary>muszkuláris_disztrófia &#10140; oka? következménye, prognózis?</summary><ul class="normal">
			<li>oka &#10140; disztrofint kódoló gén hibás</li>
			<li>következtében az izomösszehúdást a lamina_basalis alig követi, amihez pedig az ín kapcsolódik</li>
			<li>páciensek fiatalon meghalnak légzési elégtelenségben (gyógyíthatatlan)</li>
		</ul></details>
		<img src="images/11_disztrofin.png">
	</ul></details>
	<details class="kerdes 2" id="sb.695"><summary>muszkuláris_disztrófia &#10140; oka? következménye, prognózis?</summary><ul class="normal">
		<li>oka &#10140; <strong>disztrofin</strong>t kódoló gén hibás</li>
		<li>következtében az izomösszehúdást a lamina_basalis alig követi, amihez pedig az ín kapcsolódik</li>
		<li>páciensek fiatalon meghalnak légzési elégtelenségben (gyógyíthatatlan)</li>
		<img src="images/11_disztrofin.png">
	</ul></details>
	<details class="kerdes 1 open" id="sb.386"><summary><span class="white">IF</span></summary><ul class="normal">
		<br><br><details><summary>megoldás</summary><ul class="normal">
			<li><span class="Important">integrin</span></li>
			<div><i>transzmembrán heterodimer fehérjék</i></div>
			<div><i>heterodimer, ugyanis két különböző (α,β) alegységből épülnek fel</i></div>
			<div><i>α-alegység 2 részből áll, melyet diszulfid-híd köt össze</i></div>
		</ul></details>
		<img src="images/11_integrin.png">
	</ul></details>
	<details class="kerdes 1" id="sb.380"><summary>protokadherinek mik?</summary><ul class="normal">
		<li>kadherinek egy speciális típusai</li>
		<li>(ezen belül még van kb. 50 fajta)</li>
		<li>idegsejtekben találhatók a szinapszisok területén</li>
	</ul></details>
	<details class="kerdes 1" id="sb.381"><summary>Ca<sup>2+</sup> funkciója kadherineknél?</summary><ul class="normal">
		<li>szükséges ahhoz hogy merevek legyenek és így képesek legyenek kapcsolódás kialakítására</li>
		<li>hiányában tehát a kadherin szerkezete megváltozik és nem képesek dimereket képezni</li>
		<img src="images/e11_ifmlkls.png">
	</ul></details>
	<details class="kerdes 2" id="sb.243"><summary>adhéziós_fehérjék &#10140; csoportosítása + mivel kötődnek?</summary><ul class="normal">
		<li>CAM &#10140; cell adhesion molekula = sejt-sejt kapcsolatot létesít &#10140; homofil-kötődés<abbr title="nem mindig, de főként">&#10045;</abbr>, kivéve ha a CAM szelektin!</li>
		<li>SAM &#10140; substrate adhesion molekula = sejt-ECM kapcsolatot létesít &#10140; heterofil-kötődés<abbr title="nem mindig, de főként">&#10045;</abbr></li>
		<div> ––––––––––––––––––––––––––––––––––––––––––––– </div>
		<li>homofil-kötődés &#10140; két ugyanolyan molekula kötődik össze</li>
		<li>heterofil-kötődés &#10140; két különböző molekula kötődik össze</li>
	</ul></details>
	<details class="kerdes 4" id="sb.246"><summary><span class="Vocab">TAB</span> adhéziós_fehérjék &#10140; típusainak felsorolása?(5)</summary><ul class="normal"><table>
			<tr><td>kadherinek</td>
				<td><details><summary>Ca<sup>2+</sup> / Mg<sup>2+</sup></summary>függő</details></td>
				<td><details><summary><abbr title="amihez kapcsolódik">sejtváz</abbr></summary>
					<li>aktin filamentum &#10140; zonula_adherens estében</li>
					<li>intermedier filamentum &#10140; dezmoszóma esetében</li>
				</details></td>
				<td><details><summary>CAM/SAM</summary>CAM</details></td>
				<td><details><summary>kötődés típus</summary>homofil</details></td>
			</tr>
			<tr><td>"Ig-szerű molekulák"</td>
				<td><details><summary>Ca<sup>2+</sup> / Mg<sup>2+</sup></summary>független</details></td>
				<td><details><summary>sejtváz</summary>aktin-filamentum</details></td>
				<td><details><summary>CAM/SAM</summary>CAM</details></td>
				<td><details><summary>kötődés típus</summary>homofil</details></td>
			</tr>
			<tr><td>szelektinek</td>
				<td><details><summary>Ca<sup>2+</sup> / Mg<sup>2+</sup></summary>függő</details></td>
				<td><details><summary>sejtváz</summary>aktin-filamentum</details></td>
				<td><details><summary>CAM/SAM</summary>CAM</details></td>
				<td><details><summary>kötődés típus</summary>heterofil</details></td>
			</tr>
			<tr><td>integrinek</td>
				<td><details><summary>Ca<sup>2+</sup> / Mg<sup>2+</sup></summary>függő</details></td>
				<td><details><summary>sejtváz</summary>
					<li>aktin filamentum &#10140; fokális_kontaktus estében</li>
					<li>intermedier filamentum &#10140; hemidezmoszóma esetében</li>
				</details></td>
				<td><details><summary>CAM/SAM</summary>SAM <abbr title="CAM">(&)</abbr></details></td>
				<td><details><summary>kötődés típus</summary>heterofil</details></td>
			</tr>
			<tr><td>proteoglikánok</td>
				<td><details><summary>Ca<sup>2+</sup> / Mg<sup>2+</sup></summary>független</details></td>
				<td><details><summary>sejtváz</summary>aktin-filamentum</details></td>
				<td><details><summary>CAM/SAM</summary>SAM</details></td>
				<td><details><summary>kötődés típus</summary>heterofil</details></td>
			</tr>
	</table></ul></details>
	<details class="kerdes 1" id="sb.248"><summary>integrinek &#10140; 1pl, amihez kapcsolódnak?</summary><ul class="normal">
		<li><span class="Important">lamininhez, és ezen keresztül a lamina_densa-hoz(IV-kollagén)</span> <span class="Important">KÉP</span></li>
		<li>fibronektinhez, és ezen keresztül kollagénhez</li>
		<img src="images/lamina_basalis.png">
	</ul></details>
	<details class="kerdes 1 open" id="sb.250"><summary><span class="Vocab">IF</span></summary><ul class="normal">
		<br><br><details><summary>megoldás</summary><ul class="normal">
			<li><span class="Important">KADHERIN</span></li>
			<li>5db ectracelluláris domén</li>
			<li>köztük Ca2+ kötőhely (ha nincs Ca2+, nem tudnak egymáshpz kapcsolódni, lásd kép)</li>
			<li>aktin</li>
			<li>(N-C vége)</li>
			<li>(kateninek)</li>
		</ul></details>
		<img src="images/e11_ifmlkls.png">
	</ul></details>
	<details class="kerdes 1 open" id="sb.251"><summary style="color:Magenta"><font color="Green"><span class="Vocab">IF</span></font></summary><ul class="normal">
		<br><br><details><summary>megoldás</summary><ul class="normal">
			<li><span class="Important">"Ig-szerű molekula"</span></li>
		</ul></details>
		<img src="images/e11_ifigdcama.png">
	</ul></details>
	<details class="kerdes 1" id="sb.252"><summary>szelektinek funkciójára 1példa?</summary><ul class="normal">
		<li>pl. gyulladás esetén, a neutrofil_granulocitát az endothel sejteken lévő szelektinek lelassítják &#10140; majd később az integrinek kijuttatják az érfalon</li>
		<a href="images/e11_szelektin.png"><img src="images/e11_szelektin.png"></a>
	</ul></details>
 </div>
 <div><div class="title">sejtkapcsoló struktúrák.</div>
	<details class="kerdes 1" id="sb.242"><summary>felépítő molekulák &#10140; csoportosítása + mivel kötődnek?</summary><ul class="normal">
		<li>adhéziós_fehérjék (CAM & SAM)</li>
		<li>sejten belüli kapcsoló fehérjék &#10140; adhéziós_fehérjét kötik a sejtvázhoz</li>
	</ul></details>
	<details class="kerdes 1" id="sb.234"><summary>milyen típusú kötődés van a sejt-sejt és sejt-ECM között?(adhéziós-fehérjék alapján)</summary><ul class="normal">
		<li>sejt-sejt &#10140; homofil-kötődés, kivéve ha a CAM szelektin!</li>
		<li>sejt-ECM &#10140; heterofil-kötődés</li>
	</ul></details>
	<details class="kerdes 1" id="sb.236"><summary>zonula_occludens &#10140; mely sejtekben fordul elő? és azon belül hol?</summary><ul class="normal">
		<li>hámsejt<abbr title="epitéliális-sejt">(=)</abbr></li>
		<li>azok oldalsó membránfelszínén, a sejtek csúcsi részén</li>
		<a href="images/e11_latdiff_barrier.png"><img src="images/e11_latdiff_barrier.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.241"><summary>zonula_adherens &#10140; hol van?</summary><ul class="normal">
		<li>oldalsó membránfelszínen, zonula_occludens alatt</li>
		<a href="images/e11_latdiff_barrier.png"><img src="images/e11_latdiff_barrier.png"></a>
	</ul></details>
	<details class="kerdes 3" id="sb.239"><summary><span class="Vocab">TAB</span> típusaik felsorolása?</summary><ul class="normal"><table>
			<tr><td>zonula_occludens</td>
				<td><details><summary>fő CAM</summary>okkludin</details></td>
				<td><details><summary><abbr title="amihez kapcsolódik">sejtváz</abbr></summary>aktin filamentum</details></td>
				<td><details><summary>mi között</summary>sejt-sejt</details></td>
			</tr>
			<tr><td>zonula_adherens</td>
				<td><details><summary>fő CAM</summary>kadherin-ek</details></td>
				<td><details><summary>sejtváz</summary>aktin filamentum</details></td>
				<td><details><summary>mi között</summary>sejt-sejt</details></td>
				<td><details><summary><font color="Black">&#9609;</font>mi kapcsolja a sejtvázhoz<abbr title="aktin-filamentum">()</abbr>?</summary>vinkulin + katenin(alfa/beta/gamma)</details></td>
			</tr>
			<tr><td>dezmoszóma = macula_adherens</td>
				<td><details><summary>fő CAM</summary>kadherin-ek</details></td>
				<td><details><summary>sejtváz</summary>intermedier filamentum</details></td>
				<td><details><summary>mi között</summary>sejt-sejt</details></td>
			</tr>
			<tr><td>fél-dezmoszóma</td>
				<td><details><summary>fő CAM</summary>integrin-ek</details></td>
				<td><details><summary>sejtváz</summary>intermedier filamentum</details></td>
				<td><details><summary>mi között</summary>sejt-ECM</details></td>
			</tr>
			<tr><td>fokális_kontaktus = fokális_adhéziós_komplex</td>
				<td><details><summary>fő CAM</summary>integrin-ek</details></td>
				<td><details><summary>sejtváz</summary>aktin filamentum</details></td>
				<td><details><summary>mi között</summary>sejt-ECM</details></td>
				<td><details><summary><font color="Black">&#9609;</font>mi kapcsolja a sejtvázhoz<abbr title="aktin-filamentum">()</abbr>?</summary>vinkulin + talin</details></td>
			</tr>
			<tr><td>gap_junction = nexus</td>
				<td><details><summary>fő CAM</summary>konnexin-ek</details></td>
				<td colspan="2"><details><summary>szerepe</summary>jusxtakrin jelátvitel (sejt-sejt között) &#10140; ionok átjuttatása</details></td>
			</tr>
	</table></ul></details>
	<details class="kerdes 2 open" id="sb.240"><summary><span class="Important">IF</span></summary><ul class="normal">
		<a href="images/e11_ifkpmndfl.png"><img src="images/e11_ifkpmndfl.png"></a>
		<br><br><br><br><details><summary>megoldás</summary><ul class="normal">
			<div><span class="WHITE">1</span> zonula_occludens</div>
			<div><span class="WHITE">2</span> zonula_adherens</div>
			<div><span class="WHITE">3</span> dezmoszóma</div>
			<div><span class="WHITE">4</span> gap_junction</div>
			<div><span class="WHITE">5</span> fokális_kontaktus</div>
			<div><span class="WHITE">6</span> fél-dezmoszóma</div>
		</ul></details>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">12. Sejtosztódás, mitózis, meiózis.</summary><div class="normal">
Az M-fázis (mitózis szakaszai és a citokinézis; kromoszóma kialakulás és szerkezet, mitotikus orsó felépítése, a kromoszóma-vándorlás mechanizmusa). A homológ kromoszómapárok ill. a haploid – diploid sejt fogalma. A meiózis szakaszai (az első osztódás profázisa: leptotén, zigotén, pachitén, diplotén, diakinézis, szinaptonémás komplex, tetrádképződés, crossing over) genetikai variabilitás, kromoszómapárok random szétválása. A második osztódás: testvérkromatidák szétválása
 <div><div class="title">általános.</div>
	<details class="kerdes 1" id="sb.324"><summary>testvérkromatidák mik?(HP)</summary><ul class="normal">
		<img src="images/12_kromszom.png">
		<li>2kromatidás kromoszómában találhatóakat nevezzük így &#10140; lásd pl. S fázis</li>
		<li>ezekben a szekvenciák (így allélok) azonosak (bár azért ha belegondolok crossing-over után ez se igaz már!)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.326"><summary>haploid vs diploid sejt?</summary><ul class="normal">
		<li>diploid sejt kromoszómaszáma 46db (1 vagy 2 kromatidás)</li>
		<li>haploid sejt kromoszómaszáma 23db (1 vagy 2 kromatidás)</li>
		<img src="images/sztdskrmszmszm.png">
	</ul></details>
	<details class="kerdes 1 open" id="sb.318"><summary><span class="Vocab">IF</span>(HP)</summary><ul class="normal">
		<img src="images/12_rkmskzm.png">
		<br><br><details><summary>milyen fázisú ez a kromoszóma?</summary><ul class="normal">
			<li>metafázisú</li>
		</ul></details>
	</ul></details>
	<details class="kerdes 2" id="sb.320"><summary>homológ kromoszómapár mi?(HP)</summary><ul class="normal">
		<li>diploid sejtben az azonos számú kromoszómapárok</li>
		<li>egyik apai, másik anyai erdetű</li>
		<li>pl. 1es számú kromoszómából van 2db egy apai és egy anyai, ezek homológ kromoszómapárok. 2db 2es számúnál ugyanez. De 1db 1es számú és 1db 3as számú nem homológ kromoszómapár.</li>
		<li>ezek azonos géneket (tulajdonság, pl. szemszín) tartalmaznak, de eltérő allélúak (apai pl.barna, anyai zöld)</li>
		<div>/// mivel egy diploid sejtben 46db kromoszóma van, ezekben 23db homológ kromoszómapár van (márha a gonoszómák is azok, de ez nem biztos)</div>
	</ul></details>
	<details class="kerdes 1" id="sb.446"><summary>kondenzinek funkció?</summary><ul class="normal">
		<li>kromoszóma szerkezet kialakításában játszik szerepet</li>
	</ul></details>
	<details class="kerdes 1" id="sb.447"><summary>kohezin funkció?</summary><ul class="normal">
		<li>testvérkromatidák összetartása (centromernél)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.448"><summary>scleroderma?(LP)</summary><ul class="normal">
		<li>autoimmun betegség</li>
		<li>kinetochor fehérje ellen termel antitestet a szervezet</li>
	</ul></details>
 </div>
 <div><div class="title">mitózis.</div>
	<details class="kerdes 1" id="sb.317"><summary>mitózis milyen típusú sejtosztódás és miért?</summary><ul class="normal">
		<li>számtartó = kromoszómaszáma nemváltozik</li>
	</ul></details>
	<details class="kerdes 3" id="sb.315"><summary>diploid sejt sejtciklusa mitózissal &#10140; DNS és kromoszómaszám a fázisok során?</summary><ul>
		<details><summary>1DNS mi?</summary><ul class="normal">
			<li>1kromatid = 1DNS</li>
		</ul></details>
		<details><summary>kiinduló helyzetben (G1) miért annyi DNS-e van?</summary><ul class="normal">
			<li>mivel diploid, ezért 23pár kromoszóma van <div class="mirror">&#10140;</div> azért pár, mert van egy apai meg egy anyai eredetű</li>
			<li>1kromoszóma állhat 1db vagy 2db kromatidból &#10140; G1-ben még csak 1db-ból</li>
			<div>kromoszómaszám jelölésénél jobb-alsó index azt mutatja, hogy hány kromatidból áll!</div>
		</ul></details>
		<details><summary>testvérkromatidákban miért azonosak a DNS-szekvenciák?(LP)</summary><ul class="normal">
			<li>mert a DNS duplikációja ún. szemikonzervatív</li>
			<li>tehát a mind2 termékben az egyik helix a "szülői", míg a másik az új, amit most készült</li>
			<img src="images/12_szkmnzrvtv.png">
		</ul></details>
		<li>interfázisban persze a kromoszómák kromatin formában vannak, de a számuk ettől még ennyi</li>
		<table>
			<tr><th></th><th>G1</th><th>S</th><th>G2</th><th>P</th><th>M</th><th>A</th><th>T</th></tr>
			
			<tr><th>DNS</th>
				<td>46</td>
				<td>92</td>
				<td>92</td>
				<td>92</td>
				<td>92</td>
				<td>46 & 46</td>
				<td>46</td>
			</tr>
			<tr><th>kromoszóma</th>
				<td>46<sub>1</sub></td>
				<td>46<sub>2</sub></td>
				<td>46<sub>2</sub></td>
				<td>46<sub>2</sub></td>
				<td>46<sub>2</sub></td>
				<td>46<sub>1</sub> & 46<sub>1</sub></td>
				<td>46<sub>1</sub></td>
			</tr>
		</table>
	</ul></details>
	<details class="kerdes 1" id="sb.440"><summary>prophase lényege?(3)</summary><ul class="normal">
		<li>kromatin kromoszómává alakul (nucleolus megszűnik)</li>
		<li>2 centroszóma elindul a sejt két ellenkező pólusára</li>
		<li>2 centroszóma megkezdi közbe a mitotikus_orsók-szintézisét</li>
	</ul></details>
	<details class="kerdes 1" id="sb.441"><summary>prometaphase lényege?(3)</summary><ul class="normal">
		<li>nucleolus feltekeredik kromoszómákra és befejeződik kialakulásuk</li>
		<li>magmembrán felbomlik</li>
		<li>kromoszómák centromerjénál kialakul a kinetokor</li>
		<img src="images/12_kinetokor.png">
	</ul></details>
	<details class="kerdes 1" id="sb.442"><summary>metaphase lényege?(3)</summary><ul class="normal">
		<li>kromatidonként 1 kinetokorhoz kapcsolódnak a kinetokor_mikrotubulusok (kb.30-40)</li>
		<li>kromoszómák felsorakoznak a sejt egyenlítője mentén</li>
		<li>M-ellenőrzési pont &#10140; kinetokorokhoz kapcsolódik-e mikrotubulus?</li>
	</ul></details>
	<details class="kerdes 1" id="sb.443"><summary>anaphase lényege?(1)</summary><ul class="normal">
		<li>testvérkromatidák szétválnak, a kinetokor-mikrotubulusok elhúzzák őket a citocentrum közelébe</li>
	</ul></details>
	<details class="kerdes 1" id="sb.444"><summary>telophase lényege?(2)</summary><ul class="normal">
		<li>kromoszómák kromatinná alakulnak (nucleolus újra kialakul)</li>
		<li>magmembrán újra kialakul</li>
	</ul></details>
	<details class="kerdes 1" id="sb.445"><summary>citokinezis &#10140; mikor? lényege?(2)</summary><ul class="normal">
		<li>anaphase-ben kezdődik és telophase után fejeződik be</li>
		<li>aktin és miozinból álló ún. kontraktilis_gyűrű alakul ki az egyenlítő mentén</li>
		<li>ez összehúzódva kettéválasztja a citoplazmát</li>
		<img src="images/13_sejtciklus.png">
	</ul></details>
	<details class="kerdes 2" id="sb.449"><summary>mitózis fázisainak felsorolása?</summary><ul class="normal">
		<li>pro- / prometa- / meta- / ana- / telophase</li>
	</ul></details>
 </div>
 <div><div class="title">meiózis.</div>
	<details class="kerdes 1" id="sb.321"><summary>meiózis milyen típusú sejtosztódás és miért?</summary><ul class="normal">
		<li>meiózis I számfelező (redukciós) = kromoszómaszáma fele annyi lesz</li>
		<li>meiózis II számtartó = kromoszómaszáma nem változik</li>
	</ul></details>
	<details class="kerdes 1" id="sb.451"><summary>genetikai rekombináció hol történik?(HP)</summary><ul class="normal">
		<li>meiózis I prophase pachitén szakaszában crossing-over</li>
		<li>meiózis I anaphase-ben a homológ_kromoszómapárok szétválása random</li>
	</ul></details>
	<details class="kerdes 3" id="sb.452"><summary>meiózis P1 szakaszainak felsorolása?</summary><ul class="normal">
		<li><span class="WHITE">1</span> leptotén</li>
		<details><summary><span class="WHITE">2</span> zigotén &#10140; lényege?</summary><ul class="normal">
			<li>megkezdődik a homológ_kromoszómák párba állása, másnéven szinapszisa</li>
			<li>szinaptonémás komplex végzi</li>
		</ul></details>
		<details><summary><span class="WHITE">3</span> pachitén &#10140; lényege?</summary><ul class="normal">
			<li>párba állás befejeződik &#10140; tetrádok lesznek 23<sub>4</sub> (kromoszómaszám látszólagosan megfeleződött)</li>
			<li>crossing over ekkor megy végbe</li>
		</ul></details>
		<li><span class="WHITE">4</span> diplotén</li>
		<li><span class="WHITE">5</span> diakinezis &#10140; szinaptonémás komplex eltűnik</li>
		<img src="images/12_meiosisp1.png">
	</ul></details>
	<details class="kerdes 1" id="sb.453"><summary>meiózis II lényege?</summary><ul class="normal">
		<li>szinte ugyanaz mint a mitózis (p/m/a/t phase ugyanaz a lényegük)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.322"><summary>meiózis A1-ben mik válnak szét?(HP)</summary><ul class="normal">
		<li>homológ kromoszómapárok</li>
	</ul></details>
	<details class="kerdes 1" id="sb.323"><summary>meiózis A2-ben mik válnak szét?(HP)</summary><ul class="normal">
		<li>testvér-kromatidák</li>
	</ul></details>
	<details class="kerdes 1" id="sb.325"><summary>meiózis mely osztódása során keletkezik haploid sejt?</summary><ul class="normal">
		<li>1. osztódás után már haploid sejt keletkezik, hiszen számfelező, tehát már csak 23<sub>2</sub>db kromoszómás sejtek keletkeznek</li>
	</ul></details>
	<details class="kerdes 3" id="sb.319"><summary>(diploid) sejt sejtciklusa meiózissal &#10140; DNS és kromoszómaszám a fázisok során?</summary><ul>
		<details><summary>P1-ben mi történik?</summary><ul class="normal">
			<li>2db 2kromatidás kromoszóma (melyek homológok) egymás mellé állva tetrádot alkotnak (ezért lesz crossing-over)</li>
		</ul></details>
		<table>
			<tr><th></th><th>G1</th><th>S</th><th>G2</th><th>P1</th><th>M1</th><th>A1</th><th>T1</th><th>P2</th><th>M2</th><th>A2</th><th>T2</th></tr>
			
			<tr><th>DNS</th>
				<td>46</td>
				<td>92</td>
				<td>92</td>
				<td>92</td>
				<td>92</td>
				<td>46 & 46</td>
				<td>46</td>
				<td>46</td>
				<td>46</td>
				<td>23 & 23</td>
				<td>23</td>
			</tr>
			<tr><th>kromoszóma</th>
				<td>46<sub>1</sub></td>
				<td>46<sub>2</sub></td>
				<td>46<sub>2</sub></td>
				<td>23<sub>4</sub><img style="max-height:15px" src="images/12_tetrad.png"></td>
				<td>23<sub>4</sub></td>
				<td>23<sub>2</sub> & 23<sub>2</sub></td>
				<td>23<sub>2</sub></td>
				<td>23<sub>2</sub></td>
				<td>23<sub>2</sub></td>
				<td>23<sub>1</sub> & 23<sub>1</sub></td>
				<td>23<sub>1</sub></td>
			</tr>
		</table>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">13. A sejtciklus és szabályozása, aszimmetrikus sejtosztódás.</summary><div class="normal">
A sejtciklus fogalma (interfázis: G1-, S-, G2- valamint az M-fázis). Szabályozó molekulák és ellenőrzési pontok (Cdk-k, ciklinek, Cdk-gátlók, foszfatázok). Korai embrionális és a standard sejtciklus jellemzői (SPF (start kináz), MPF és szubsztrátjai, APC hatásai). A soksejtűek sejtjeire jellemző sejtciklus (G0 szakasz, növekedési faktorok és jelátviteli mechanizmusuk, protoonkogének és tumor-szuppresszor gének hatásai, mutációk hatásai, G0-ból G1-be, a G1- ből az S-fázisba és a G2-ből az M-fázisba való átmenet). A centroszóma ciklusa. Az M-fázis (mitózis szakaszai és a citokinézis; mitotikus orsó felépítése. Ellenőrzési pontok működése.
 <div><div class="title">általános.</div>
	<details class="kerdes 2" id="sb.408"><summary>sejtciklusok típusainak felsorolása?</summary><ul class="normal">
		<li>korai_embrionális</li>
		<li>standard</li>
		<li>soksejtűek sejtjeire jellemző</li>
		<img src="images/13_sjcklj.png">
	</ul></details>
	<details class="kerdes 1" id="sb.410"><summary><span class="WHITE">JR</span> sejtciklus hossza</summary><ul class="normal">
		<img src="images/13_cychisz.png">
	</ul></details>
	<details class="kerdes 1" id="sb.411"><summary>tumorsejtek sejtciklusának hossza?</summary><ul class="normal">
		<li>a tumor sejtek sejtciklusának hossza azonos vagy hosszabb, mint a normál sejteké!</li>
		<li>azonban a tumorban a sejtciklusban levő sejtek aránya sokkal nagyobb a G0 sejtekhez képest &#10140; a sejtszám nő</li>
	</ul></details>
	<details class="kerdes 1" id="sb.413"><summary>sejtciklus során ellenőrzési pontok mely fázisban?</summary><ul class="normal">
		<li><span class="WHITE">G1</span> fázis végén (DNS nem-e sérült)</li>
		<li><span class="WHITE">G2</span> fázis végén (DNS nem-e sérült)</li>
		<li><span class="WHITE">metafázis</span> (jól álltak-e fel a kromoszómák)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.422"><summary>egysejtű és soksejtű szervezetek sejtjei mikor osztódnak?</summary><ul class="normal">
		<li>egysejtű &#10140; addig osztódik, amíg valamely kedvezőtlen környezeti körülmény (negatív hatás) le nem állítja a sejtciklust</li>
		<li>többsejtű &#10140; felnőtt szervezetben a sejtek addig nem osztódnak, amíg a környezetükből pozitív stimulust nem kapnak</li>
	</ul></details>
	<details class="kerdes 3" id="sb.423"><summary>sejtciklust szabályozó főbb molekulák felsorolása?(5)</summary><ul class="normal">
		<li>ciklin dependens kinázok (Cdk)</li>
		<li>ciklinek</li>
		<li>foszfatázok</li>
		<li>ubikquitin ligázok</li>
		<li>aktiváló és gátló kinázok és kináz inhibitorok</li>
		<div> –––––––––––––––––––––––––––––––––––––––– </div>
		<div><span class="white">§</span> kináz &#10140; foszfátot tesz fel</div>
		<div><span class="white">§</span> foszfatáz &#10140; foszfátot vesz le</div>
	</ul></details>
	<details class="kerdes 3" id="sb.431"><summary><span class="Vocab">TAB</span> ciklinek és Cdk-k felsorolása?</summary><ul class="normal">
		<li>korai embrionális sejtciklusnál csak a legalsó sor</li>
		<li>standard sejtciklusnál alsó 2 sor</li>
		<li>soksejtűek sejtciklusánál mind a 4 sor</li>
		<img src="images/13_tabcdkc.png">
	</ul></details>
	<details class="kerdes 3" id="sb.433"><summary>APC &#10140; mi? funkciói?(2)</summary><ul class="normal">
		<li>ubiquitin-ligáz (ligáz egy enzim típus!)</li>
		<li><strong>szekurin</strong>t "megjelöli", ami által proteoszóma lebontja &#10140; szeparáz aktívvá válik és lebontja a kinetokort alkotó kohezineket a centromernél &#10140; testvérkromatidák a kinetokor_mikrotubulusok már szétválaszthatják</li>
		<li><strong>B-ciklin</strong>t "megjelöli", ami által proteoszóma lebontja &#10140; MPF inaktív lesz citokenezis megindulhat</li>
		<div><span class="WHITE">!!!!</span> kinetokorhoz kapcsolódnak a kinetokor_mikrotubulusok (tehát a kettő nem ugyanaz)</div>
		<img src="images/13_apcfunkc.png">
	</ul></details>
 </div>
 <div><div class="title">Korai embrionális sejtciklus.</div>
	<details class="kerdes 1" id="sb.414"><summary>fázisainak felsorolása?</summary><ul class="normal">
		<li><span class="WHITE">S</span> <span class="WHITE">M</span></li>
		<li>nincs G1 és G2, tehát a sejtek mérete csökken</li>
	</ul></details>
	<details class="kerdes 2" id="sb.415"><summary>mi vezérli? annak lényege?</summary><ul class="normal">
		<li><abbr title="M-fázis Promoting Faktor">MPF</abbr> = M-Cdk</li>
		<li>az M-Cdk vezérli &#10140; Cdk-1 és M-ciklin(=B-ciklin) komplexe</li>
		<li>tehát ha van B-ciklin az kapcsolódik a Cdk-1-hez és létrejön az aktív MPF &#10140; sejt belép M-fázisba</li>
		<li>osztódás után a B-ciklin elbomlik és az MPF inaktíválódik &#10140; sejt belép S-fázisba</li>
	</ul></details>
	<details class="kerdes 1" id="sb.416"><summary>ellenőrzési pontok mely fázisban?</summary><ul class="normal">
		<li>nincsenek</li>
	</ul></details>
	<details class="kerdes 1" id="sb.666"><summary>mi biztosítja, hogy ne lépjen túl korán M-fázisba?</summary><ul class="normal">
		<div>az, hogy a B-ciklin szintetizálódása tovább tart, mint a DNS megkettőződése</div>
	</ul></details>
 </div>
 <div><div class="title">standard sejtciklus.</div>
	<details class="kerdes 2" id="sb.407"><summary>fázisainak felsorolása?</summary><ul class="normal">
		<img src="images/13_sejtciklus.png">
		<li>interfázis &#10140; <span class="WHITE">G1</span> <span class="WHITE">S</span> <span class="WHITE">G2</span></li>
		<li>M-fázis (mitózis vagy meiózis)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.412"><summary><span class="WHITE">G1</span> <span class="WHITE">S</span> <span class="WHITE">G2</span> fázisban mi van?</summary><ul class="normal">
		<li><span class="WHITE">G1</span> sejtnövekedés</li>
		<li><span class="WHITE">S</span> DNS-duplikáció</li>
		<li><span class="WHITE">G2</span> felkészülés az osztódásra</li>
		<img src="images/13_sejtciklus.png">
	</ul></details>
	<details class="kerdes 2" id="sb.417"><summary>Cdk & ciklin a fázisokban?</summary><ul class="normal">
		<li>Cdk van végig</li>
		<li>G1 fázis végén S-ciklin(=A-ciklin) szintézise befejeződik és hozzákapcsolódik &#10140; létrejön SPF = S-Cdk &#10140; S fázisba lép</li>
		<li>S fázis végén S-ciklin lebomlik</li>
		<li>G2 fázis végén M-ciklin(=B-ciklin) szintézise befejeződik és hozzákapcsolódik &#10140; létrejön MPF = M-Cdk &#10140; M fázisba lép</li>
		<li>M fázis végén M-ciklin lebomlik</li>
		<img src="images/13_stcdk.png">
	</ul></details>
 </div>
 <div><div class="title">A soksejtűek sejtjeire jellemző sejtciklus.</div>
	<details class="kerdes 1" id="sb.409"><summary>sejtek milyen fázisban vannak?</summary><ul class="normal">
		<li>vagy a sejtciklus valamely fázisában</li>
		<li>vagy a G0 fázisban &#10140; legtöbb sejt ebben a fázisban van (felnőtt szervezetben)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.424"><summary style="color:Magenta"><font color="Green">miért van a legtöbb sejt G0 fázisban?</font> <abbr title="elég hülyén van megfogalmazva a kérdés">&#10045;</abbr></summary><ul class="normal">
		<li>mert a ciklinek hiányoznak</li>
	</ul></details>
	<details class="kerdes 1" id="sb.425"><summary>milyen szignál kell a G0 fázisból kilépéshez?</summary><ul class="normal">
		<li>növekedési faktorok</li>
		<div><span class="white">§</span> plazmamembrán receptoraihoz kötődnek (többnyire parakrin jelátvitel)</div>
	</ul></details>
	<details class="kerdes 1" id="sb.667"><summary>GF-re 1pl &#10140; hol termelődik? mit serkent?</summary><ul class="normal">
		<div>EGF</div>
		<li>termelik &#10140; vese és emlő mirigyhámsejtjei</li>
		<li>serkenti &#10140; hámsejtek, mesenchymasejtek, gliasejtek szaporodását</li>
		<div>IGF</div>
		<li>termelik &#10140; májsejtek</li>
		<li>serkenti &#10140; pl. kondroblasztra és fibroblasztra hat</li>
	</ul></details>
	<details class="kerdes 1" id="sb.426"><summary>EGF &#10140; mi termeli? mit serkent?(LP)</summary><ul class="normal">
		<li>termelik &#10140; vese és emlő mirigyhámsejtjei</li>
		<li>serkenti &#10140; hámsejtek, mesenchymasejtek, gliasejtek szaporodását</li>
	</ul></details>
	<details class="kerdes 1" id="sb.427"><summary>IGF &#10140; mi termeli? mit serkent?(LP)</summary><ul class="normal">
		<li>termelik &#10140; májsejtek</li>
		<li>serkenti &#10140; pl. kondroblasztra és fibroblasztra hat</li>
	</ul></details>
	<details class="kerdes 3" id="sb.428"><summary>G0-G1-S átmenet lényege?</summary><ul class="normal">
		<div><span class="white">§</span> ha a sejt itt pozitív szignálokat kap (sejtméret, jó tápanyagellátás és növekedési faktorok), akkor osztódik</div>
		<div><span class="white">§</span> ha nem kap pozitív szignálokat &#10140; kilép G0-ba</div>
		<div> –––––––––––––––––––––––––––––––––––––––––––––––––– </div>
		<li>GF hatására D-ciklin szintetizálódik <abbr title="nem csak GF válthatja ki, hanem más extracelluláris komponens is">&#10045;</abbr></li>
		<li>így a ciklin csatlakozva a Cdk-hoz létrejön az aktív D-Cdk <abbr title="kicsit bonyolultabb, mert eleinte van ami gátolja, de ne érdekeljen (189)">&#10045;</abbr></li>
		<li>itt ha a DNS károsodott, akkor a p53 gátolja a folytatást, és visszaáll G0-ba <div class="mirror">&#10140;</div> ez az ellenőrzési pont, szóval innen már S</li>
		<li>ha nem, akkor a <abbr title="protein Retinoblasztoma">pRb</abbr>-E2F foszforilására a kettő külön válik &#10140; pRb & E2F</li>
		<li>E2F ezután elindítja a ciklin-A és ciklin-E expresszióját</li>
		<li>a ciklin-E pozitív visszacsatolással serkenti a pRb-E2F foszforilálást &#10140; gyorsan lejátszódik</li>
		<li>a ciklin-A -val pedig átlép S fázisba</li>
		<img src="images/13_g0g1.png">
	</ul></details>
	<details class="kerdes 3" id="sb.439"><summary>G2-M átmenet lényege?</summary><ul class="normal">
		<li>ennek a lényege az MPF aktiváció</li>
		<li>Cdk1 és B-ciklin(=M-ciklin) kapcsolódik &#10140; M-Cdk még inaktív</li>
		<li>egy gátló_kináz és aktiváló_kináz foszforilálja, egész pontosan 1-1 foszfátcsoportot rá tesznek &#10140; M-Cdk még inaktív</li>
		<li>ezután amennyiben károsodás DNS-ben</li><ul>
			<li>nem történt &#10140; aktiváló_foszfatáz(Cdc25) defoszforilál, ugyanis lehasítja a gátló_kináz által felrakott foszfátcsoportot &#10140; M-Cdk már aktív</li>
			<li>történt &#10140; aktiváló_foszfatáz(Cdc25) nem fog defoszforilálni, mert inaktív (van rajta foszfát csoport)</li>
		</ul>
		<div><span class="white">§</span> kináz &#10140; foszfátot tesz fel</div>
		<div><span class="white">§</span> foszfatáz &#10140; foszfátot vesz le</div>
		<img src="images/13_mpfact.png">
		<img src="images/13_dnsrep.png">
	</ul></details>
	<details class="kerdes 3" id="sb.430"><summary>MPF aktiváció &#10140; mikor? lényege?</summary><ul class="normal">
		<li>G2-M átmenetnél</li>
		<li>Cdk1 és B-ciklin(=M-ciklin) kapcsolódik &#10140; M-Cdk még inaktív</li>
		<li>egy gátló_kináz és aktiváló_kináz foszforilálja, egész pontosan 1-1 foszfátcsoportot rá tesznek &#10140; M-Cdk még inaktív</li>
		<li>ezután amennyiben károsodás DNS-ben</li><ul>
			<li>nem történt &#10140; aktiváló_foszfatáz(Cdc25) defoszforilál, ugyanis lehasítja a gátló_kináz által felrakott foszfátcsoportot &#10140; M-Cdk már aktív</li>
			<li>történt &#10140; aktiváló_foszfatáz(Cdc25) nem fog defoszforilálni, mert inaktív (van rajta foszfát csoport)</li>
		</ul>
		<div><span class="white">§</span> kináz &#10140; foszfátot tesz fel</div>
		<div><span class="white">§</span> foszfatáz &#10140; foszfátot vesz le</div>
		<img src="images/13_mpfact.png">
		<img src="images/13_dnsrep.png">
	</ul></details>
	<details class="kerdes 1" id="sb.429"><summary>ciklin és Cdk összekapcsolódásakor mi történik? (molekuláris szinten)</summary><ul class="normal">
		<li>egy szubsztrát foszforilálódik közben</li>
		<img src="images/13_cdkcik.png">
	</ul></details>
	<details class="kerdes 2" id="sb.432"><summary>MPF szubsztrátokra példák?(4)</summary><ul class="normal">
		<li>Cdc25 foszfatázt foszforilálva aktiválja &#10140; ez további MPF-eket aktivál, hogy leveszi róluk a gátló_kináz foszfátcsoportját &#10140; pozitív_visszacsatolás ("láncreakció")</li>
		<li>lamina_fibrosat foszforilálja &#10140; szétesik a maghártya</li>
		<li>MAP (mikrotubulus asszociált proteinek) &#10140; mitotikus orsó kialakulása</li>
		<li>APC</li>
		<img src="images/13_mpfsfsztz.png">
		<img src="images/13_mpfact.png">
		<img src="images/13_mapok.png">
	</ul></details>
	<details class="kerdes 2" id="sb.438"><summary>sejtosztódás főbb feltételei?(3) <abbr title="25.tételben még van tápanyag pH stb. de most a főbbek lettek csak megemlítve">!!</abbr></summary><ul class="normal">
		<li>növekedési faktor</li>
		<li>szilárd aljzatra letapadás &#10140; Fokális Adhéziós Kinázokat aktivál</li>
		<li>sűrűségfüggő sejtosztódás gátlás &#10140; aljzaton legyen még szabad felület</li>
	</ul></details>
 </div>
 <div><div class="title">osztódást szabályozó gének.</div>
	<details class="kerdes 1" id="sb.434"><summary>felsorolásuk?</summary><ul class="normal">
		<li>protoonkogének</li>
		<li>tumor szupresszor gének</li>
	</ul></details>
	<details class="kerdes 2" id="sb.435"><summary>protoonkogének &#10140; funkciójuk? mutációjuk?</summary><ul class="normal">
		<li>olyan fehérjét kódolnak, melyek szükségesek az osztódáshoz &#10140; főként a jelátvitelben résztvevő fehérjéket</li>
		<li>mutációja az onkogén</li><ul>
			<li>domináns (tehát heterozigóta esetében is probléma)</li>
			<li>következtében a fehérjék nagyobb mennyiségben termelődnek vagy aktívabbak működnek</li>
			<li>részt vehetnek tumorok kialakulásában (hisz nő a serkentés)</li>
		</ul>
	</ul></details>
	<details class="kerdes 2" id="sb.436"><summary>tumor szupresszor gének &#10140; funkciójuk? mutációjuk?</summary><ul class="normal">
		<li>olyan fehérjét kódolnak melyek gátolják az osztódást</li>
		<li>mutációja</li><ul>
			<li>recesszív (tehát csak homozigóta esetében probléma)</li>
			<li>következtében a fehérjék kisebb mennyiségben termelődnek vagy kevésbé aktívan működnek</li>
			<li>részt vehetnek tumorok kialakulásában (hisz csökken a gátlás)</li>
		</ul>
	</ul></details>
	<details class="kerdes 3" id="sb.437"><summary>GF jelátviteli út lényege?(6)</summary><ul class="normal">
		<li>RTK (Receptor_Tirozin_Kináz) transzmembrán fehérje megköti a GF-et</li>
		<li>ez aktiválja a RAS-t (monomer G protein)</li>
		<li>ez aktiválja a MAP-kináz-kináz-kinázt</li>
		<li>ez aktiválja a MAP-kináz-kinázt</li>
		<li>ez aktiválja a MAP-kinázt</li>
		<div>... (itt kimaradt pár lépés, (korai gének expressziója) nem olyan fontos) ...</div>
		<li>ezek (késői) gének expresszióját serkentik, pl. D-ciklinét, mellyel beléphet G0-ból G1 fázisba</li>
		<img src="images/13_jeltvtl.png">
		<img src="images/13_rasprtnk.png">
	</ul></details>
	<details class="kerdes 1" id="sb.585"><summary>tumor_szupresszor_gének által kódolt fehérjékre 2pl?</summary><ul class="normal">
		<li>p53</li>
		<li>pRb</li>
	</ul></details>
	<details class="kerdes 1" id="sb.586"><summary>protoonkogének által kódolt fehérjékre 3pl?</summary><ul class="normal">
		<li>ciklinek</li>
		<li>Cdk-k</li>
		<li>RAS</li>
	</ul></details>
	<details class="kerdes 1" id="sb.587"><summary>mely protoonkogén mutációja nagyon gyakori onkogénre? lényege?</summary><ul class="normal">
		<li>RAS</li>
		<li>RAS aktiválódik anélkül, hogy RTK megkötné a szignált(GF) &#10140; beindul a jelátvitel magától &#10140; tumorsejt növekedési szignáloktól független</li>
		<img src="images/13_jeltvtl.png">
	</ul></details>
	<details class="kerdes 2" id="sb.591"><summary>p53 &#10140; mi? funkció?</summary><ul class="normal">
		<li>tumor szupresszor gén (által kódolt fehérje)</li>
		<li>gátolja az osztódást &#10140; ellenőrzési pontoknál checkolja, hogy nem-e sérült a DNS &#10140; ha igen, repair, ha az sem elég apoptózis</li>
	</ul></details>
	<details class="kerdes 2" id="sb.592"><summary>pRb &#10140; mi? funkció? mutációja?</summary><ul class="normal">
		<li>tumor szupresszor gén (által kódolt fehérje)</li>
		<li>gátolja az S fázisba lépést</li>
		<li>ugyanis alapvetően az E2F nevű TF-hez kapcsolódva inaktívan tartja</li>
		<li>azonban foszforilálódva (pl. normál osztódásnál) leválik róla, és E2F aktiválva kiváltja az S fázisba lépést</li>
		<li>ha a pRb mutálódik, akkor nincs ami inaktívan tartaná E2F-et így S fázisba lép a sejt</li>
		<img src="images/13_g1sprb.png">
	</ul></details>
 </div>
 <div><div class="title">centroszóma.</div>
	<details class="kerdes 1" id="sb.316"><summary>szinonima?(1)</summary><ul class="normal">
		<li>citocentrum</li>
	</ul></details>
	<details class="kerdes 2" id="sb.669"><summary>MTOC &#10140; jelentése? mik?(2) funkció?</summary><ul class="normal">
		<li>MikroTubulus_Organizáló_Centrum</li>
		<li>centroszóma illetve bazális_test is ilyen</li>
		<li>funkció &#10140; mikrotubulusok szerveződési és eredési helye</li>
		<details><summary>mikrotubulus mely vége néz MTOC irányába?</summary><ul class="normal">
			<li>negatív</li>
		</ul></details>
	</ul></details>
	<details class="kerdes 2" id="sb.418"><summary>szerkezete?</summary><ul class="normal">
		<li>2 egymásra merőleges centriolumból áll[9×3 mikrotubulus] + PCM</li>
		<li>PCM az a körülötte lévő kis terület, ebbe vannak γ-tubulinok</li>
		<li>γ-tubulinok &#10140; mikrotubulusok negatív végükkel innen erednek</li>
		<img src="images/sz12_centrszm.png">
	</ul></details>
	<details class="kerdes 1" id="sb.419"><summary>funkció?</summary><ul class="normal">
		<li>prophaseben mitotikus_orsók szintézise</li>
		<li>majd utána vándorolva metaphasere a sejt két szélére jutnak és onnan fogják a mikrotubulusukon keresztül széthúzni a kromoszómát/kromatidát</li>
	</ul></details>
	<details class="kerdes 1" id="sb.420"><summary>mitotikus_orsók &#10140; szerkezete? típusai?</summary><ul class="normal">
		<li>mikrotubulosokból állnak</li>
		<li>2típusa &#10140; kinetokor és poláros</li>
	</ul></details>
	<details class="kerdes 1" id="sb.421"><summary>centriólumok száma a sejtben fázisonként?</summary><ul class="normal">
		<li>G1-től S fázis végéig 1pár van, akkor duplikálódnak 2párrá</li>
		<li>profázisban elkezd szétválni a 2pár, és metafázisba már szét is válnak (így telofázistól ismét 1pár lesz majd /sejt)</li>
		<img src="images/sz12_centriolumcount.png">
		<img src="images/13_centrocyc.png">
	</ul></details>
	<details class="kerdes 1" id="sb.450"><summary>mi szabályozza megkettőződését?</summary><ul class="normal">
		<li>Cdk-2 (hasonlóan a DNS-replikációhoz!)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.668"><summary>centriólum szerkezete?</summary><ul class="normal">
		<li>9×3 mikrotubulus</li>
		<img src="images/sz12_centrszm.png">
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">14. A sejtmozgás; mechanikus jelek átvitele.</summary><div class="normal">
A sejtmozgás biológiai és orvosi jelentősége; típusai: taxisok, kinezisek (kemotaxis, haptotaxis, nekrotaxis). A sejtmozgást kiváltó anyagok főbb csoportjai (formilált peptidek, kemokinek) és ezek receptorai. Szöveti elaszticitás eltérései. A migráló sejt és környezetének mechanikai jellege, a sejt preferenciái.
<br><br>A csilló és az ostor szerkezete és működése (A és B mikrotubulus, protofilamentum, dinein-kar, küllő, bazális testek). A csillós mozgás molekuláris mechanizmusa: a mikrotubulus sliding mechanizmus. Az amöboid mozgás.
 <div><div class="title">sejtmozgás.</div>
	<details class="kerdes 1" id="sb.391"><summary>milyen fajta mozgásra képes a sejt?</summary><ul class="normal">
		<li>sejten belül a kompartmentek mozgatására</li>
		<li>maga a sejt is képes elmozdulásra (egy része / vagy a teljes akár)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.389"><summary>mely részüket használják fel a sejtek mozgásukhoz?(HP)</summary><ul class="normal">
		<li>sejtváz</li>
	</ul></details>
	<details class="kerdes 2" id="sb.390"><summary>mozgás elemeinek csoportosítása?</summary><ul class="normal">
		<li>két csoportra osztjuk elemeit &#10140; <span class="Important">passzív elemek (sínként,útként funkcionálnak) és aktív elemek (motorként funkcionálnak)</span></li>
		<li>kétféle mozgás van a passzív és aktív elemek kombója alapján</li>
		<li>ha a passzív elem mikrofilamentum, akkor az aktív elem miozin</li>
		<li>ha a passzív elem mikrotubulus, akkor az aktív elem dinein vagy kinezin</li>
		<table>
			<tr><th>passzív elem</th><th>aktív elem</th></tr>
			<tr><td>mikrofilamentum</td><td>miozin</td></tr>
			<tr><td>mikrotubulus</td><td>kinezin<abbr title="pozitív vég felé mozgatják a vezikulumokat">+</abbr> & dinein<abbr title="negatív vég felé mozgatják a vezikulumokat">-</abbr></td></tr>
		</table>
	</ul></details>
	<details class="kerdes 3" id="sb.637"><summary style="color:Magenta"><font color="Green">sejtmozgások tipusai (mozgás tipusa & "kiváltó dolog" alapján)?</font></summary><ul class="normal">
		<img src="images/14_migtip.png">
	</ul></details>
	<details class="kerdes 2" id="sb.405"><summary>kemotaxis &#10140; mi?</summary><ul class="normal">
		<li>kemotaxis &#10140; sejtek egyirányú helyváltoztató mozgása, melyet <strong>molekula</strong> (koncentrációjának változása) befolyásol</li>
		<li>kemoattraktáns &#10140; molekula, mely vonzza a sejtet</li>
		<li>kemorepellens &#10140; molekula, mely taszitja a sejtet</li>
		<img src="images/14_kemotax.png">
	</ul></details>
	<details class="kerdes 3" id="sb.636"><summary>kemotaxisra 3pl? aka. sejtmozgás biológiai és orvosi jelentősége (HP)</summary><ul class="normal">
		<div><span class="WHITE">1.pl</span> neutrofil_granulocita érzékeli a bakteriális fehérjéket, ugyanis azok N-formil-metioninnal kezdődnek (<i>kemoattraktáns a bakterális fehérje</i>)</div>
		<div><span class="WHITE">2.pl</span> ivarsejtek egymásra találása</div>
		<div><span class="WHITE">3.pl</span> embrionális fejlődés során számos sejt vándorlása</div>
	</ul></details>
	<details class="kerdes 2" id="sb.638"><summary>kemo-/ orto-/ klino<strong>kinezis</strong> lényege?</summary><ul class="normal">
		<li>kemokinezis &#10140; kémiai anyagok hatására random módon változtatják meg mozgási jellemzőiket (sebesség nagysága/iránya, frekvencia vagy amplitúdó) &#10140; a kemotaxissal ellentétben, a kemokinézis esetében véletlenszerű, nem vektoriális jelleggel módosul a sejt mozgásállapota</li>
		<li>ortokinezis &#10140; sebesség nagysága változik, iránya nem</li>
		<li>klinokinezis &#10140; E.coli baktlriumnál használják, a mozgásának frekvenciája és amplitúdója változik, iránya nem</li>
		<img src="images/14_kemokin.png">
	</ul></details>
	<details class="kerdes 2" id="sb.639"><summary style="color:Magenta"><font color="green">haptotaxis &#10140; mikre jellemző? lényege 1mondatban?</font></summary><ul class="normal">
		<li>a szöveti térben mozgó sejtekre jellemző</li>
		<li>grádiens a felszínhez kötötten van</li>
		<div><span class="white">§</span> kemotaxis fluid térben is lejátszódhat, nem csak felülethez kötötten</div>
		<img src="images/14_haptotax.png">
	</ul></details>
	<details class="kerdes 1" id="sb.640"><summary>nekrotaxis?</summary><ul class="normal">
		<li>a kemotaxis speciális formája, mely esetben elpusztult sejtekből felszabaduló, biológiailag aktív anyagok hatnak a környezetükben lévő sejtekre vonzó vagy taszító módon</li>
		<img src="images/14_nekrotax.png">
	</ul></details>
	<details class="kerdes 1" id="sb.641"><summary>sejtmozgást kiváltó anyagok <abbr title="van több is lásd ppt">főbb</abbr> csoportjainak felsrolása?(2)</summary><ul class="normal">
		<li>formilált peptidek</li>
		<li>kemokinek</li>
	</ul></details>
	<details class="kerdes 2" id="sb.642"><summary>formilált peptid és receptor bemutatás 1pl-án?</summary><ul class="normal">
		<li>bakteriális tripeptid &#10140; fMLP = formil–Metionin–Leucin–Fenil-alanin</li>
		<li>ezeket érzékeli az erre specializálódott receptor, az ún FPR (formilált-peptid-receptor)</li>
		<li>ez 7x éri át a membránt</li>
		<img src="images/14_firmilpp.png">
	</ul></details>
	<details class="kerdes 2" id="sb.643"><summary>kemokinek &#10140; osztályozásuk? lényegük?</summary><ul class="normal">
		<li>főbb típusaik &#10140; C, CC, CXC, CX<sub>3</sub>C (szerkezetüket tudjam: C-ek + diszulfid-híd + peptidlánc)</li>
		<li>alapvetően számos fehérvérsejt kemotaxisát váltják ki</li>
		<li>CX<sub>3</sub>C haptotaxist vált ki</li>
		<img src="images/14_kemomkin.png">
	</ul></details>
	<details class="kerdes 2" id="sb.644"><summary style="color:Magenta"><font color="green">A migráló sejt és környezetének mechanikai jellege, a sejt preferenciái &#10140; lényege? (HP)</font></summary><ul class="normal">
		<div><span class="WHITE">JR</span> A sejt és környezete között kialakuló kapcsolat – a sejtvázra hatva befolyásolja a sejtmozgást &#10140; Eltérő mechanikai jellemzőjű anyagai a sejt környezetének más-más választ eredményeznek</div>
		<li>nagyobb adhéziós protein denzitás(sűrűség) a "lágy_alapnál"</li>
		<li>"lágy_alap" fele mozog</li>
		<li><span class="MISS">!? F-aktin mozgása !?</span></li>
		<li><span class="MISS">!? ellenállás !?</span></li>
		<img src="images/14_körny.png">
	</ul></details>
 </div>
 <div><div class="title">csillós és ostoros mozgás.</div>
	<details class="kerdes 1" id="sb.392"><summary>átmérőjük?</summary><ul class="normal">
		<li>0,4&micro;m</li>
	</ul></details>
	<details class="kerdes 2" id="sb.393"><summary>milyen mozgásra képesek velük? 1-1pl?</summary><ul class="normal">
		<li>vagy a teljes sejt mozog &#10140; pl. spermium, egysejtűek</li>
		<li>vagy a felettük található közeget mozgatják &#10140; pl. trachea csillós tmsHH</li>
	</ul></details>
	<details class="kerdes 1" id="sb.394"><summary>hosszuk &#10140; mikroboholy,csilló,ostor?</summary><ul class="normal">
		<li>mikroboholy &lt; csilló(2-10&micro;m) &lt; ostor(100-200&micro;m)</li>
		<div><span class="white">§</span> képen pl. csillók(G) és mikrobolyhok(nyíl) láthatók &#10140; ostor még ezeknél is hosszabb</div>
		<img src="images/14_cslltr.png">
	</ul></details>
	<details class="kerdes 2" id="sb.395"><summary>csillók és ostorok összhasonlítás &#10140; átmérő? hossz? számuk? alapszerkezet?</summary><ul class="normal">
		<li>hosszuk eltérő &#10140; ostor(100-200µm) > csilló(2-10µm)</li>
		<li>számuk eltérő &#10140; csilló esetében sok van belőlük, ostorból 1 vagy 2db</li>
		<li>átmérőjük megegyezik</li>
		<li>alapfelépítésük megegyezik</li>
	</ul></details>
	<details class="kerdes 3" id="sb.396"><summary><span class="Vocab">RAJZ</span> csillók és ostorok keresztmetszete?</summary><ul class="normal">
		<li>(9+1)pár mikrotubulus alkotja</li>
		<div><span class="WHITE">1</span>A mikrotubulus 13protofilamentumból tevődik ki, és ebből <span class="WHITE">4</span>dinein karok nyúlnak a szomszédos pár fele</div>
		<div><span class="WHITE">2</span>B mikrotubulus 10-11protofilamentumból tevődik ki</div>
		<div><span class="WHITE">3</span>nexin &#10140; szomszédos párokat tartja össze</div>
		<div><span class="WHITE">5</span> plazmamembrán</div>
		<div><span class="WHITE">6</span> küllő &#10140; centrál és szélső mikrotubulusokat köti össze (A mikrotubulusból ered!)</div>
		<img src="images/14_cllkrsztm.png">
	</ul></details>
	<details class="kerdes 3 open" id="sb.397"><summary><span class="Vocab">IF</span></summary><ul class="normal">
		<img src="images/14_cllkrsztm.png">
		<br><br><details><summary>megoldás</summary><ul class="normal">
			<li>csilló / ostor keresztmetszet</li>
			<div><span class="WHITE">1</span> A mikrotubulus</div>
			<div><span class="WHITE">2</span> B mikrotubulus</div>
			<div><span class="WHITE">3</span> nexin</div>
			<div><span class="WHITE">4</span> dinein</div>
			<div><span class="WHITE">5</span> plazmamembrán</div>
			<div><span class="WHITE">6</span> küllő</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2" id="sb.398"><summary>bazális test &#10140; helye? funkció? felépítése?</summary><ul class="normal">
		<li>csillók és ostorok alatt található</li>
		<li>ez is MTOC, csakúgy mint a centro<strong>szóma</strong> &#10140; mikrotubulusok kialakulását szabályozza</li>
		<li>9x3 mikrotubulus építi fel, csakúgy mint egy centr<strong>iólumot</strong></li>
		<div><span class="WHITE">KÉP</span> (alsó keresztmetszet csak le van kicsinyítve, de kb. ugyanolyan egy mikrotubulus ott is mint a fenntin)</div>
		<img src="images/14_centromer.png">
	</ul></details>
	<details class="kerdes 2" id="sb.399"><summary>dinein funkciója?</summary><ul class="normal">
		<div><span class="WHITE">4</span> dinein</div>
		<li>mikrotubulus pár ennek segítségével elmozdul a szomszéd mikrotubulus-páron mint sínen, annak negatív pólusa felé</li>
		<li>de ez csak kis mértékben megy végbe, így elhajlás fog bekövetkezni &#10140; ez indukálja a mozgást</li>
		<img src="images/14_splicing.png">
		<img src="images/14_cllkrsztm.png">
	</ul></details>
	<details class="kerdes 3" id="sb.400"><summary>mikrotubulus slicing?</summary><ul class="normal">
		<li>mikrotubulus pár ennek segítségével elmozdul a szomszéd mikrotubulus-páron mint sínen, annak negatív pólusa felé</li>
		<li>slicing lényege</li><ul>
			<li>ATP-t megkötve a dinein kar elengedi a mikrotubulust, majd újra megfogja "negativabb irányba"</li>
			<li>ATP-t lebontva ADP-re "behajlik" a dinein kar</li>
		</ul>
		<li>de ez csak kis mértékben megy végbe, így elhajlás fog bekövetkezni &#10140; ez indukálja a mozgást</li>
		<div><span class="WHITE">4</span> dinein</div>
		<div><i>két piros pötty az előző kapcsolódási helyet szimbolizálja</i></div>
		<img src="images/14_splicing.png">
		<img src="images/14_cllkrsztm.png">
	</ul></details>
 </div>
 <div><div class="title">amöboid mozgás.</div>
	<details class="kerdes 1" id="sb.401"><summary>lényege 1 mondatban?</summary><ul class="normal">
		<li><span class="Important">szilárd_aljzaton</span> <span class="Important">állábak használatával</span> helyváltoztatást végez a sejt</li>
	</ul></details>
	<details class="kerdes 3" id="sb.402"><summary>milyen sejtekre jellemző?(3+2)</summary><ul class="normal">
		<div><span class="WHITE">1.pl</span> egysejtűek, pl. amőba</div>
		<div><span class="important">2.pl</span> embrionális fejlődés során számos sejt vándorlása</div>
		<div><span class="important">3.pl</span> monociták & makrofágok</div>
		<div><span class="important">4.pl</span> tumorsejtek metasztázis képzése hasonló módon</div>
		<div><span class="WHITE">5.pl</span> szövettenyészetben tartott sejtekre</div>
	</ul></details>
	<details class="kerdes 2" id="sb.403"><summary>állábak tipusai?</summary><ul class="normal">
		<li>filo<strong>podium</strong> (vékony,ujjszerű)</li>
		<li>lamelli<strong>podium</strong> (széles,lapos)</li>
		<img src="images/14_filamel.png">
	</ul></details>
	<details class="kerdes 3" id="sb.404"><summary>lépései?</summary><ul class="normal">
		<br><details><summary>sejt polarizációja és állábak kinyújtása?</summary><ul class="normal">
			<li>plazmamembránban a receptorok asszimmetrikusan oszlanak el &#10140; sejt polarizált (van eleje és hátulja)</li>
			<li>a receptorok ligandot kötnek meg és ez kiváltja az aktin filamentumok polimerizációját</li>
			<li>ez pedig létrehozza az állábakat</li>
		</ul></details>
		<br><details><summary>új kapcsolódások kialakulása?</summary><ul class="normal">
			<li><span class="Important">fokális_kontaktus</span>-al kapcsolódik az álláb a <span class="Important">szilárd aljzathoz</span></li>
		</ul></details>
		<br><li>sejt hátulsó felének a mozgás irányába történő húzódása</li>
		<img src="images/14_amobmozg.png">
	</ul></details>
	<details class="kerdes 2" id="sb.406"><summary>LAD mi?</summary><ul class="normal">
		<li>Leukocita Adhéziós Deficiens</li>
		<li>fehérvérsejtek plazmamembránjában hiányoznak a FAK létrehozásához szükséges integrinek</li>
		<li>fehérvérsejtek igy nem képesek az érből a fertőzés helyére jutni</li>
		<div><span class="white">§</span> autoszomális recessziv</div>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">15. Sejtek közti kommunikáció, extracelluláris vezikula szekréció, trogocitózis.</summary><div class="normal">
Kommunikáció prokaryota és eukaryota sejtek között. Juxtakrin, autokrin, parakrin és endokrin kommunikáció. Trogocytosis, membrán nanocsövek. Az extracelluláris vezikulák alapszerkezete, termelődési mechanizmusai és fő típusai (exoszómák, mikrovezikulák, apoptotikus testek). Extracelluláris ligandok és receptoraik (citoszól/magreceptorok, membránreceptorok (ioncsatorna receptorok, trimer G fehérjéhez kötött receptorok, enzimkötött receptorok)).
 <div><div class="title">sejtek közti kommunikáció.</div>
	<details class="kerdes 2" id="sb.454"><summary>jelátviteli folyamatok által kiváltott sejtválasz típusai?(4)</summary><ul class="normal">
		<li>túlélés</li>
		<li>osztódás</li>
		<li>differenciálódás</li>
		<li>apoptózis</li>
	</ul></details>
	<details class="kerdes 2" id="sb.455"><summary>prokarióták közti kommunikáció neve és lényege?</summary><ul class="normal">
		<img src="images/15_quormsens.png">
		<li>neve &#10140; quorom_sensing</li>
		<li>lényege &#10140; a közelben lévő baktérium-"sűrűség" megindítja egyes gének expresszióját</li>
		<li>pl. kis létszám esetén nem, de nagy létszám esetében a biofilmképzés, toxin termelés megindul</li>
		<div><span class="white">§</span> biofilm &#10140; mikroorganizmusok egy felületen összetapadt, egybefüggő bevonatot képező sejtjeiből áll. A sejtek gyakran az általuk termelt, nyálkának is nevezett extracelluláris polimer anyagokba (extracellular polymeric substance, EPS) ágyazódva helyezkednek el.</div>
	</ul></details>
	<details class="kerdes 3" id="sb.456"><summary>eukarióták közti kommunikáció típusainak felsorolása?(5)</summary><ul class="normal">
		<li>juxtakrin</li>
		<li>parakrin</li>
		<li>endokrin</li>
		<li>autokrin</li>
		<li>trogocytosis</li>
	</ul></details>
	<details class="kerdes 2" id="sb.457"><summary>juxtakrin típusainak felsorolása?(2<sub>+1</sub>)</summary><ul class="normal">
		<img src="images/15_plsdmds.png">
		<li><span class="Important">membránban van a receptor és ligandum is</span></li>
		<li><span class="Important">GAP junction</span></li>
		<li>plasmodesmata &#10140; növényeknél</li>
	</ul></details>
	<details class="kerdes 1" id="sb.458"><summary>juxtakrin "membránban van a receptor és ligandum" jelátvitelre 1pl?</summary><ul class="normal">
		<img src="images/15_reclig.png">
		<div><span class="WHITE">1.pl</span> Notch-jelátvitel</div>
		<div><span class="WHITE">2.pl</span> immunológiai szinapszis</div>
	</ul></details>
	<details class="kerdes 1" id="sb.459"><summary style="color:Magenta"><font color="Green">trogocitózis lényege?</font></summary><ul class="normal">
		<img src="images/15_trgctzs.png">
		<li>membránrészletek átjutása egyik sejtről a másikra</li>
		<li><i>ez történik, amikor lymphocyta találkozik olyan sejttel melyben van antigén &#10140; összekapcsolódnak, majd a lymphocyta kivág az "antigénes-sejt" membránjából egy részt és a sajátjába teszi &#10140; immunológiai_szinapszisnak is nevezik, csak akkor azt nem értem előadáson miért van az a juxtakrinnél példaként</i> (wikipedia a dőlt betűs)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.460"><summary>membrán nanocsövek általi kommunikáció lényegére 3pl?</summary><ul class="normal">
		<img src="images/15_nancstrnszport.png">
	</ul></details>
	<details class="kerdes 1" id="sb.461"><summary>citokinek &#10140; mik? mire hozhatók fel pl-nak?</summary><ul class="normal">
		<li>jelzőmolekulák, melyek immunválaszt szabályozásában játszanak szerepet</li>
		<li>autokrin, parakrin és endokrin úton is szabályozhatnak</li>
	</ul></details>
	<details class="kerdes 1" id="sb.462"><summary>autokrin jelátvitel lényege?</summary><ul class="normal">
		<img src="images/15_autokrin.png">
		<li>szekretoros és célsejt megegyezik &#10140; sejtek a saját maguk által termelt anyagokra reagálnak</li>
		<details><summary>ligandumra 1pl?</summary><ul class="normal">
			<li>citokinek</li>
		</ul></details>
	</ul></details>
	<details class="kerdes 2" id="sb.463"><summary>parakrin lényege?</summary><ul class="normal">
		<img src="images/15_parakrin.png">
		<li>jelkibocsátó sejt az extracelluláris térbe szekretálja a ligandumot &#10140; <span class="Important">közelben lévő sejtek</span> receptorai fogják meg</li>
		<details><summary>ligandumra 2pl?</summary><ul class="normal">
			<li>citokinek</li>
			<li>extracelluláris vezikulák</li>
		</ul></details>
	</ul></details>
	<details class="kerdes 2" id="sb.464"><summary>endokrin lényege?</summary><ul class="normal">
		<img src="images/15_endokrin.png">
		<li>jelkibocsátó sejttől a ligandum a <span class="Important">véráramon keresztül</span> jut el a test távolabbi pontjaira &#10140; <span class="Important">távolban lévő sejtek</span> receptorai fogják meg</li>
		<details><summary>ligandumra 2pl?</summary><ul class="normal">
			<li>hormonok (<i>beleértve citokinek</i>)</li>
			<li>extracelluláris vezikulák</li>
		</ul></details>
	</ul></details>
	<details class="kerdes 2" id="sb.465"><summary>jel hatásának sebessége?</summary><ul class="normal">
		<li><i>gyors, amennyiben a citoplazmában található fehérjék funkciójának megváltoztatása megy végbe</i></li>
		<li><i>lassú, amennyiben a génexpresszión keresztül változik meg a citoplazmában lévő fehérjék</i></li>
		<img src="images/15_jelhtsseb.png">
	</ul></details>
	<details class="kerdes 1" id="sb.466"><summary>jelátvitel definíció?</summary><ul class="normal">
		<li>az a több lépcsős folyamat, melyben a <abbr title="ez a 2 szvsz ugyanaz, ezenkívül nevezhető elsődleges_hírvívőnek és mivel receptor fogja meg ligandumnak is">jelek/szignálok</abbr> hatására a sejtválasz létrejön</li>
	</ul></details>
	<details class="kerdes 1" id="sb.682"><summary>jelátvitel szinonima?</summary><ul class="normal">
		<li>szignál transzdukció</li>
	</ul></details>
	<details class="kerdes 2" id="sb.468"><summary>receptorok csoportosítása?</summary><ul class="normal">
		<li>sejtfelszíni = membránreceptorok &#10140; amennyiben a szignál hifrofil</li>
		<li>intracelluláris <abbr title="citoszol/magreceptorok">(=)</abbr> &#10140; amennyiben a szignál hirofób (hisz apoláros molekula átjut a plazmamembránon)</li>
		<img src="images/15_recptrtp.png">
	</ul></details>
	<details class="kerdes 2" id="sb.496"><summary>intracelluláris receptor ligandumok &#10140; jellemzőjük? 2pl?</summary><ul class="normal">
		<li>hidrofóbok &#10140; ezért jutnak át plazmamembránon</li>
		<li>pl. tiroxin(=T4), tesztoszteron, kortizol, retinsav</li>
		<img src="images/15_ligdnas.png">
	</ul></details>
	<details class="kerdes 1" id="sb.497"><summary>kortizol &#10140; mi?</summary><ul class="normal">
		<li>intracelluláris receptor <span class="Important">ligand</span>ja</li>
		<img src="images/15_kortizol.png">
	</ul></details>
	<details class="kerdes 3" id="sb.683"><summary>alábbi hírvívők besorolása receptor (és enzim) &#10140; kortizol? ADH? acetil-kolin? tesztoszteron? T4? GF? retinsav? adrenalin? thrombin?</summary><ul class="normal">
		<li>membránreceptor</li><ul>
			<li>GPCR</li><ul>
				<li>adenilát-cikláz &#10140; <span class="WHITE">adrenalin</span></li>
				<li>PLC &#10140; <span class="WHITE">acetil-kolin</span> <span class="WHITE">ADH</span> <span class="WHITE">thrombin</span></li>
			</ul>
			<li>RTK &#10140; <span class="WHITE">GF</span></li>
		</ul>
		<li>intracelluláris receptor &#10140; <span class="WHITE">kortizol</span> <span class="WHITE">tesztoszteron</span> <span class="WHITE">retinsav</span> <span class="WHITE">T4</span></li>
	</ul></details>
 </div>
 <div><div class="title">membránreceptorok.</div>
	<details class="kerdes 4" id="sb.469"><summary>csoportosításuk?</summary><ul class="normal">
		<br><details><summary>ioncsatornák &#10140; lényege?</summary><ul class="normal">
			<img src="images/15_ioncsat.png">
		</ul></details>
		<br><details><summary>G-fehérjéhez kötött receptorok = <abbr title="G protein coupled receptor">GPCR</abbr> &#10140; lényege?</summary><ul class="normal">
			<img src="images/15_gpcr.png">
		</ul></details>
		<br><details><summary>enzim-kötött receptorok &#10140; 1pl?</summary><ul class="normal">
			<li>pl. <abbr title="receptor tirozin kináz">RTK</abbr></li>
		</ul></details>
		<br><details><summary>számos további receptor(&#10140; jelpálya) létezik</summary><ul class="normal">
			<li>képpel ne foglalkozzak, csak a lényeg, hogy nem ez a 3 van mindössze</li>
			<img src="images/15_sztvkrsl.png">
		</ul></details>
	</ul></details>
	<details class="kerdes 3" id="sb.467"><summary>hírvívők csoportosítása?</summary><ul class="normal">
		<br><details><summary>elsődleges hírvívő &#10140; mi? 1pl?</summary><ul class="normal">
			<li>ezt köti meg a receptor</li>
			<li>pl. citokinek, adrenalin, neurotranszmitterek</li>
		</ul></details>
		<br><details><summary>másodlagos hírvívő &#10140; mi? 5pl?</summary><ul class="normal">
			<li>átalakítja, felerősíti a jelet (sejtválaszra lefordítja)</li>
			<li>pl. cAMP, cGMP, <abbr title="Diacylglycerol">DAG</abbr>, <abbr title="inosotol triphosphate">IP3</abbr>, Ca<sup>2+</sup></li>
		</ul></details>
	</ul></details>
	<details class="kerdes 1" id="sb.477"><summary>GPCR szerkezete?</summary><ul class="normal">
		<li>7x éri át a membránt (transzmembrán fehérje!)</li>
		<img src="images/15_gpcr.png">
	</ul></details>
	<details class="kerdes 1" id="sb.476"><summary>"GPCR receptoros jelátvitel" esetében a ligandra 2pl?</summary><ul class="normal">
		<li>adrenalin</li>
		<li>neurotranszmitterek</li>
	</ul></details>
	<details class="kerdes 1" id="sb.474"><summary>G-fehérjék csoportosítása?</summary><ul class="normal">
		<li>monomer</li>
		<li>trimer</li>
		<img src="images/15_heterotrim.png">
	</ul></details>
	<details class="kerdes 1" id="sb.475"><summary>"GPCR receptoros jelátvitel" esetében az enzimre 2pl?</summary><ul class="normal">
		<li>adenilát-cikláz</li>
		<li>foszfolipáz-C (=PLC)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.479"><summary>adenilát-cikláz &#10140; mi? funkció?</summary><ul class="normal">
		<li>enzim a GPCR receptoros jelátvitelnél</li>
		<li>ATP-t átalakítja cAMP-vá, mely másodlagos_hírvívő</li>
		<img src="images/15_adenilcikl.png">
	</ul></details>
	<details class="kerdes 1" id="sb.470"><summary>adrenalin szignál esetében mi a ... receptor? enzim? másodlagos hírvívő? <abbr title="nembiztos, hogy csak ilyen jelátvitelt csinál adrenalin">&#10045;</abbr></summary><ul class="normal">
		<li>GPCR a receptor</li>
		<li>adenilát-cikláz az enzim</li>
		<li>cAMP a másodlagos hírvívő</li>
		<img src="images/15_adrendalis.png">
	</ul></details>
	<details class="kerdes 1" id="sb.490"><summary><span class="WHITE">JR</span> szignál amplifikáció, azaz 1db szignál molekulából "hány lesz"</summary><ul class="normal">
		<img src="images/15_adrnempr.png">
	</ul></details>
	<details class="kerdes 3" id="sb.478"><summary>PLC enzimes jelátvitel &#10140; receptor mi? ligandra 1pl? lényege?</summary><ul class="normal">
		<img src="images/15_foszplcl.png">
		<li>GPCR a receptor</li>
		<li>ligand pl. acetil-kolin, <abbr title="vazopresszin = anti-diuretikus-hormon">ADH</abbr>, thrombin</li>
		<div><strong>lényege</strong></div>
		<li>receptor megköti a ligandot</li>
		<li>G-protein aktiválja PLC enzimet &#10140; addig membránban horgyonyzott IP<sub>2</sub> kettéválik két másodlagos hírvívőre:</li><ul>
			<li><abbr title="diacil-glicerin">DAG</abbr> ( &#10140; PKC nevű kinázt aktiválja)</li>
			<li>IP<sub>3</sub> &#10140; sER Ca<sup>2+</sup>-csatornáját megnyitja</li>
		</ul>
		<li>Ca<sup>2+</sup> is másodlagos hírvívő</li>
	</ul></details>
	<details class="kerdes 2" id="sb.491"><summary>acetil-kolin szignál esetében mi a ... receptor? enzim? másodlagos hírvívő?</summary><ul class="normal">
		<li>GPCR a receptor</li>
		<li>PLC az enzim</li>
		<li>másodlagos hírvívők &#10140; Ca<sup>2+</sup>, DAG, IP<sub>3</sub></li>
		<img src="images/15_acetilkolin.png">
	</ul></details>
	<details class="kerdes 2" id="sb.492"><summary>kináz és foszfatáz enzimek működésének lényege?</summary><ul class="normal">
		<li>kináz &#10140; szubsztrátra foszfátcsoportot tesz &#10140; ATP/GTP közben ADP/GDP lesz</li><ul>
			<li>ATP-t felhasznál közben és ADP lesz, hisz ebből nyeri a foszfátcsoportot <i>és energiát</i></li>
			<li>vagy a kináz GTP-t kötő fehérje, ez esetben GTP-ből lesz GDP</li>
		</ul>
		<li>foszfatáz &#10140; szubsztrátról foszfátcsoportot vesz le <i>(itt nem ADP-ből ATP lesz)</i></li>
		<img src="images/15_fehrjefzsoftrl.png">
	</ul></details>
	<details class="kerdes 1" id="sb.493"><summary>RTK receptor ligandumjára egy jellemző példa?</summary><ul class="normal">
		<li>GF-ek</li>
	</ul></details>
	<details class="kerdes 1" id="sb.494"><summary>RTK működésének lényege?(LP)</summary><ul class="normal">
		<img src="images/15_kinatrtk.png">
	</ul></details>
	<details class="kerdes 1" id="sb.495"><summary><span class="WHITE">JR</span> (LP)</summary><ul class="normal">
		<img src="images/15_jrlp.png">
	</ul></details>
 </div>
 <div><div class="title">extracelluláris vezikulák</div>
	<details class="kerdes 2" id="sb.498"><summary>csoportosításuk?(HP)</summary><ul class="normal">
		<li>exoszóma <span class="WHITE">30-100nm</span></li>
		<li>mikrovezikula <span class="WHITE">100-800nm</span></li>
		<li>apoptotikus test <span class="FIX">vagy</span> nagy onkoszóma <span class="WHITE">800nm-5&micro;m</span></li>
		<img src="images/15_extracelvezk.png">
	</ul></details>
	<details class="kerdes 2" id="sb.499"><summary style="color:Magenta"><font color="Green">főbb alkotóik?(4)</font></summary><ul class="normal">
		<img src="images/15_extrsclszkr.png">
	</ul></details>
	<details class="kerdes 1" id="sb.500"><summary><span class="WHITE">JR</span> definíció (LP)</summary><ul class="normal">
		<li>a sejtek által aktívan, evolúciósan konzervált módon termelt szubcelluláris képletek</li>
	</ul></details>
	<details class="kerdes 1" id="sb.501"><summary><span class="WHITE">JR</span> képek</summary><ul class="normal">
		<img src="images/15_exoszoma.png">
	</ul></details>
	<details class="kerdes 1" id="sb.502"><summary><span class="WHITE">JR</span> extrcelluláris vezikulák funkciói</summary><ul class="normal">
		<img src="images/15_ecsfnk.png">
	</ul></details>
	<details class="kerdes 2" id="sb.503"><summary>4pl mely sejtek termelik?(HP)</summary><ul class="normal">
		<img src="images/15_extrclvezkl.png">
	</ul></details>
	<details class="kerdes 1" id="sb.504"><summary><span class="WHITE">JR</span> emberben extracelluláris_vezikula miben van</summary><ul class="normal">
		<img src="images/15_ebmrvzkl.png">
	</ul></details>
	<details class="kerdes 1" id="sb.505"><summary>mi fokozza termelését?</summary><ul class="normal">
		<img src="images/15_strnsz.png">
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">16. A sejtöregedés és a sejthalál.</summary><div class="normal">
A sejtek öregedését okozó magyarázó elméletek; külső és genetikai tényezők szerepe. A sejtek halála: a nekrózis és apoptózis definiciója és összehasonlítása. az apoptotikus vezikulák létrejöttének mechanizmusai Az apoptózist kiváltó és gátló szignálok, receptorok, jelátviteli útvonalak (<span class="MISS">TNF receptor család /haláldomén/</span>, mitokondriális útvonal, túlélési faktorok. Az apoptózis effektor mechanizmusai: kaszpázok, transzglutaminázok és endo-nukleázok. Az apoptózis jelentősége az egyedfejlődésben és a betegségekben. A nekroptózis és piroptózis definiciója és előfordulásuk.
 <div><div class="title">sejtek öregedését magyarázó elméletek.</div>
	<details class="kerdes 2" id="sb.506"><summary>2pl felgyorsult öregedés <strong>szindrómára</strong> és lényegük 1 mondatban?</summary><ul class="normal">
		<li>Hutchinson-Gilford szindróma &#10140; lamin_A gén mutációja</li>
		<li>Werner szindróma &#10140; helikáz mutációja</li>
		<details><summary>helikáz mi?</summary><ul class="normal">
			<li>fehérje, mely "kibontja" a DNS-t</li>
			<img src="images/16_helicase.png">
		</ul></details>
	</ul></details>
	<details class="kerdes 1" id="sb.507"><summary>melléktermék felhalmozódási elmélet lényege?</summary><ul class="normal">
		<li>egyre több bomlástermék keletkezik, mint amitől meg tud szabadulni &#10140; egyre jobban gátolják a sejtek működését</li>
		<li>pl. lipofuszcin = öregedési_pigment száma nő a korral, de nincs bizonyítva, hogy gátolná a sejtek működését</li>
	</ul></details>
	<details class="kerdes 1" id="sb.508"><summary>keresztkötési elmélet lényege?(LP)</summary><ul class="normal">
		<li>bevezetés &#10140; kollagének (ktsz-ben) közötti keresztkötések száma nő a korral &#10140; pl. bőr ezért egyre kevésbé rugalmas</li>
		<li>elmélet lényege &#10140; feltételezik, hogy pl. DNS-ben is kialakulhatnak keresztkötések, melyek befolyásolják az expressziót</li>
	</ul></details>
 </div>
 <div><div class="title">szabad gyökök elmélet.</div>
	<details class="kerdes 1" id="sb.509"><summary>szabad gyökök kémiai tulajdonsága és mit okoz?</summary><ul class="normal">
		<li>rendkívül nagy a reakciókészségük, bármivel amivel találkoznak azt "szétcseszik"</li>
		<li>legrosszabb, ha a DNS-t károsítják (mutáció)</li>
		<li>(szerepet játszanak az öregedés-pigmentek és keresztkötések kialakításában)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.510"><summary>számuk a korral hogyan változik?</summary><ul class="normal">
		<li>egyre több szabad gyök keletkezik a kor előrehaladtával</li>
	</ul></details>
	<details class="kerdes 3" id="sb.511"><summary>mi véd ellenük?</summary><ul class="normal">
		<li>egyrészt vannak olyan enzimek, melyek ezeket megsemmisítik</li>
		<li>kataláz & peroxidáz & szuperoxid-diszmutáz</li>
		<div> –––––––––––––––––––––––––––––––––––––––––––––––– </div>
		<li>másrészt antioxidánsok gátolják a keletkezésük illetve semlegesítik őket</li>
		<li>antioxidánsok &#10140; A/C/E-vitamin, glutation</li>
	</ul></details>
	<details class="kerdes 1" id="sb.512"><summary>mire támaszkodik az elmélet?</summary><ul class="normal">
		<li>antioxidánsok megnövelik az élettartamot (késleltetik pl. szív-érrendszeri betegség, rák megjelenését)</li>
	</ul></details>
	<details class="kerdes 2" id="sb.516"><summary>kalória megvonás elmélet &#10140; lényege? bizonyíték(2)</summary><ul class="normal">
		<li>tápanyagok lebontása során a mitokondriumban szabad gyökök keletkeznek</li>
		<li>ezért minél több tápanyagot fogyasztunk, annál nagyobb az esély a mutációra (főként mtDNS)</li>
		<li>tehát ha diétára fogják az az állatot, akkor nő az életkora</li>
		<div>diéta esetében alultáplált, de ez nem egyenlő a rosszul tápláltal (tehát vitamin, ásványi anyag van elég, csak kalória a kevés)</div>
		<li>bizonyíték</li><ul>
			<li>egereken tesztelték és igazolta (diétásan tovább éltek)</li>
			<li>Okinawa szigeten élő japánok átlagéletkora magas</li>
		</ul>
	</ul></details>
 </div>
 <div><div class="title">hiba- és javítási elmélet.</div>
	<details class="kerdes 1" id="sb.514"><summary style="color:Magenta"><font color="Green">mik tartoznak ide?</font> <abbr title="nem mindet írtam ide">&#10045;</abbr></summary><ul class="normal">
		<li>"mitokondriumok száma"</li>
		<li>"proteoszómák száma"</li>
	</ul></details>
	<details class="kerdes 2" id="sb.513"><summary>"mitokondriumok száma" lényege?</summary><ul class="normal">
		<li>mutációkat a repair enzimek korrigálják</li>
		<li>azonban az mtDNS mutációk száma nagyobb, és kevésbé hatékonyan javítódnak ki <abbr title="nohde wtf? a zigótában lévő mitokondrium DNS-ek ha annyira elmutálódtak, akkor a következő gyereknek a mtDNS-e már olyan gatyi állapotról indul, szóval nemigen kapizsgálom ennek mi értelme van --> közbe asszem rájöttem, mert ha nem kerül kijatívásra, attól még apoptózist kapnak, és ezért számuk csökken, de ettől még a normálisak öröklődnek tovább">(!?)</abbr></li><ul>
			<li>mivel 93% exon &#10140; mutáció szinte biztosan a gént éri</li>
			<li>nincs hiszton &#10140; nincs védve</li>
			<li>oxidatív_foszforiláció során mellette keletkeznek szabad oxigén gyökök</li>
		</ul>
		<li>mitokondriumok száma így a korral csökken</li>
	</ul></details>
	<details class="kerdes 1" id="sb.515"><summary>"proteoszómák száma" lényege?</summary><ul class="normal">
		<li>proteoszómák működése a kor előrehaladtával csökken</li>
		<li>és ezek bontják le a hibás/fölös fehérjéket</li>
	</ul></details>
 </div>
 <div><div class="title">genetikai óra elmélet.</div>
	<details class="kerdes 1" id="sb.517"><summary>telomer mi?</summary><ul class="normal">
		<li>TTAGGG szekvencia a DNS két végén</li>
		<li>pár ezer bázispár hosszú</li>
	</ul></details>
	<details class="kerdes 3" id="sb.518"><summary>telomerrel mi történik?</summary><ul class="normal">
		<img src="images/16_telomer.png">
		<li>osztódáskor a <abbr title="az eredetin is? mert arra nem találtam utalást, de nyilván valahogy kéne annak is">keletkező</abbr> DNS-en csökken a hossza</li>
		<li>primer részek pótlódnak mindenhol, kivéve a telomer részen (videót nézzem meg és megértem!!)</li>
		<li>ott ugyanis levágódik, ez kb. mínusz 20bázispárt jelent, azonban osztódásonként 50-100 bázispárral rövidül (annak feltételezhető oka a telomer oxidatív károsodás, mert a telomer extrém módon érzékeny az oxidatív stresszre)</li>
		<li>https://www.youtube.com/watch?v=TNKWgcFPHqw</li>
		<li>https://youtu.be/OjPcT1uUZiE?t=1m46s</li>
		<video controls>
			<source src="videos/DNA replication - 3D.mp4" type="video/mp4">
		</video>
	</ul></details>
	<details class="kerdes 1" id="sb.519"><summary>telomeráz funkciója?</summary><ul class="normal">
		<li>őssejtekben, tumorsejtekben ez pótolja az osztódás után az elveszett telomer részt</li>
	</ul></details>
	<details class="kerdes 1" id="sb.520"><summary>telomer rövidülés mit eredményez?(2)</summary><ul class="normal">
		<li>maximálisan kivitelezhető osztódások száma csökken &#10140; ugyanis egy hossz után nem osztódhat tovább a sejt, ha mégis akkor elhal <i>(hisz onnantól az "értékes rész tűnne el fokozatosan")</i></li>
		<li>ahogy rövidül egyre több tumor szupresszor gén expressziója megy végbe</li>
	</ul></details>
	<details class="kerdes 1" id="sb.521"><summary>telomeráz orvosi jelentősége?</summary><ul class="normal">
		<li>szomatikus sejtek nagyrészében nincs &#10140; tumorsejtekben van</li>
		<li>rákos betegség kezelésére így alkalmazható lehet (azonban ez még kezdeti stádiumban van)</li>
		<li><i>(illetve az is problem, h csak vannak a felnőttben olyan sejtek, pl. bőrben olyan őssejtek melyekben van telomeráz, hisz ott azért osztódniuk kell folyton)</i></li>
	</ul></details>
 </div>
 <div><div class="title">sejtek halála.</div>
	<details class="kerdes 1" id="sb.522"><summary>nekrózis vs apoptózis &#10140; energiaigényesség?</summary><ul class="normal">
		<li>nekrózis nem igényel energiát</li>
		<li>apoptózis energiaigényes</li>
	</ul></details>
	<details class="kerdes 2" id="sb.523"><summary>nekrózis &#10140; mi váltja ki? sejt alakja hogy változik? mit vált ki?</summary><ul class="normal">
		<li>általában egy sejt fizikai/kémiai sérülés váltja ki</li>
		<li>következtében a sejt megduzzad &#10140; plazmamembrán-felszakad</li>
		<li>tartalmuk kijut extracelluláris térbe &#10140; gyulladást vált ki</li>
		<li>környező sejteknek is nekrózisa lesz</li>
	</ul></details>
	<details class="kerdes 2" id="sb.524"><summary>apoptózis &#10140; sejt alakja hogy változik? mit vált ki? sorsa?</summary><ul class="normal">
		<li>vízveszteség következtében a sejt zsugorodik &#10140; plazmamembrán nem szakad fel</li>
		<li>tartalmuk NEM jut ki extracelluláris térbe &#10140; nem vált ki gyulladást</li>
		<li>ezenkívül a foszfolipid asszimetria megszűnik &#10140; foszfatidil-szerin jut a külső rétegbe</li>
		<li>ezt felismerik makrofágok és fagocitózissal bekebelezik</li>
	</ul></details>
	<details class="kerdes 1" id="sb.525"><summary>apoptózis &#10140; sejtmag sorsa?</summary><ul class="normal">
		<li>kromatinállomány kondenzálódik, magmembránhoz kapcsolódik, majd feldarabolódik</li>
	</ul></details>
	<details class="kerdes 1" id="sb.526"><summary>apoptózist kiváltó okok csoportosítása?(2)</summary><ul class="normal">
		<li>genetikailag programozva van</li>
		<li>környezeti hatás</li>
	</ul></details>
	<details class="kerdes 2" id="sb.527"><summary>apoptózisban résztvevő enzimcsaládok felsorolása?(3)</summary><ul class="normal">
		<li>endonukleázok</li>
		<li>transzglutaminázok</li>
		<li>kaszpázok</li>
	</ul></details>
	<details class="kerdes 1" id="sb.528"><summary>endonukleázok &#10140; működésük mitől függ? funkciója?</summary><ul class="normal">
		<li>Ca<sup>2+</sup> kell működésükhöz <abbr title="nyilván lehet kell más is, de elég ezt tudnom">&#10045;</abbr></li>
		<li>DNS-t feldarabolják</li>
		<li>(először 50-300kiló bázispárnyi nagyobb fragmentumokra, utána 180bázispárnyi kisebbekre)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.529"><summary>transzglutaminázok &#10140; működésük mitől függ? funkciója?</summary><ul class="normal">
		<li>Ca<sup>2+</sup> kell működésükhöz <abbr title="nyilván lehet kell más is, de elég ezt tudnom">&#10045;</abbr></li>
		<li>fehérjék között keresztkötéseket alakítanak ki</li>
		<div><span class="white">§</span> véralvadásban a fibrinszálak összekötésében és a keratinociták elszarusodásában is részt vesznek</div>
	</ul></details>
	<details class="kerdes 2" id="sb.530"><summary>kaszpázok csoportosításuk?</summary><ul class="normal">
		<li>iniciátorok &#10140; apoptózist elindítják (aktiválják egymást)</li>
		<li>effektorok &#10140; apoptózist végrehajtják</li>
	</ul></details>
	<details class="kerdes 2" id="sb.531"><summary>IAP?</summary><ul class="normal">
		<div><strong>IAP = inhibitor of apoptosis</strong></div>
		<li>kaszpázhoz kötődve gátolják annak aktivitását</li>
		<li>vírusokban is van, ezzel meggátolják a gazdasejt apoptózisát, ami által a vírus élettere megszűnne</li>
	</ul></details>
	<details class="kerdes 3" id="sb.532"><summary>pro-apoptotikus hatások felsorolása csoportosítva?(5) <abbr title="nyilván nem az összes">&#10045;</abbr></summary><ul class="normal">
		<li>extracelluláris &#10140; <span class="WHITE">T-limfociták</span> <span class="WHITE">FasL</span> <span class="WHITE">TNF-&alpha;</span> </li>
		<li>intracelluláris &#10140; <span class="WHITE">"mitokondriumos"</span> <span class="WHITE">"DNS & p-53"</span></li>
	</ul></details>
	<details class="kerdes 2" id="sb.538"><summary>anti-apoptotikus hatások felsorolása csoportosítva?(3) <abbr title="nyilván nem az összes">&#10045;</abbr></summary><ul class="normal">
		<li>intracelluláris &#10140; <span class="WHITE">IAP</span> <span class="WHITE">Bcl-2</span></li>
		<li>extracelluláris &#10140; túlélési növekedési faktorok, pl. NGF</li>
	</ul></details>
	<details class="kerdes 2" id="sb.533"><summary>T-limfociták extracelluláris pro-apoptotikus hatása?</summary><ul class="normal">
		<div>kétféleképp teszik:</div>
		<li>T-limfocita <strong>perforinnal</strong> lyukat képez a célsejt plazmamembránjában, melyen keresztül a <strong>granzim</strong> bejut és (kaszpázok aktiválásával) apoptózist vált ki</li>
		<li>ezenkívül membránjukon <span class="WHITE">FasL</span> nevű ligandum van, melyet a célsejt <span class="WHITE">Fas</span> nevű receptora megköti, és ez benne apoptózist vált ki <div class="mirror">&#10140;</div> <i>juxtakrin</i></li>
	</ul></details>
	<details class="kerdes 2" id="sb.534"><summary style="color:Magenta"><font color="Green">TNF receptor család /haláldomén/ ?</font></summary><ul class="normal">
		<li>zöld beindítja apoptózist, piros gátolja</li>
		<li>TRADD = TNF receptor associated death domain</li>
		<li>FADD = Fas associated death domain</li>
		<img src="images/16_tnfjltvtl.png">
	</ul></details>
	<details class="kerdes 1" id="sb.535"><summary>két fő apoptózis indukáló útvonal felsorolása?</summary><ul class="normal">
		<li>death domaines</li>
		<li>mitokondriumos</li>
	</ul></details>
	<details class="kerdes 2" id="sb.536"><summary>mitokondriumos apoptózis indukáló útvonal lényege?</summary><ul class="normal">
		<li>mitokondrium <strong>intermembrán ter</strong>éből kiszabadulnak fehérjék, köztük kiemelkedő jelentőségű a <span class="WHITE">citokróm-C</span></li>
		<li>ez kapcsolódik a citoszolban lévő <span class="WHITE">Apaf-1</span> és így megindítják az apoptózist (aktiválják a kaszpáz-9et)</li>
		<li><abbr title="van egyéb is 228o">&#10045;</abbr></li>
	</ul></details>
	<details class="kerdes 1" id="sb.537"><summary>"DNS & p-53"?</summary><ul class="normal">
		<li>amennyiben a DNS káros, és nem sikerül kijavítani...</li>
		<li>... akkor a p53 fokozza a pro-apoptotikus hatású fehérjék szintézisét, míg az anti-apoptotikusokét <span class="WHITE">pl. Bcl-2</span> csökkenti</li>
	</ul></details>
	<details class="kerdes 1" id="sb.684"><summary>piroptózis, apoptózis, nekrózis, nekroptózis &#10140; melyik programozott?</summary><ul class="normal">
		<li>összes, kivéve nekrózis</li>
	</ul></details>
	<details class="kerdes 1" id="sb.685"><summary>piroptózis, apoptózis, nekrózis, nekroptózis &#10140; melyik vált ki gyulladást?</summary><ul class="normal">
		<li>nekrózis és piroptózis biztosan, illetve nekroptózis is feltételezhetően <abbr title="nem számomra feltételezhetően, hanem a tudomány számára">&#10045;</abbr></li>
	</ul></details>
	<details class="kerdes 3" id="sb.539"><summary>piroptózis &#10140; lényege?(3) 2pl?</summary><ul class="normal">
		<li><strong>gyulladással jár</strong></li>
		<li>főleg <strong>intracelluláris kórokozó</strong>val történt fertőzés során megy végbe (Lásd Immunológiában!)</li>
		<li><strong>kaszpáz 1 aktiváció történik</strong> (apoptózis során kaszpáz 8, 9, 7, 3 stb.)</li>
		<li>pl. Salmonella fertőzött makrofág, HIV fertőzött T-sejt</li>
		<div><span class="white">§</span> programozott sejthalál</div>
		<div><span class="white">§</span> (képen látható oldalon van részletesebben, de azt nem kell csak megőriztem)</div>
		<img src="images/16_piroptózis.png">
	</ul></details>
	<details class="kerdes 2 open " id="sb.545"><summary>kép - nyisd meg</summary><ul class="normal">
		<img src="images/16_gyullads.png">
		<br><details><summary>mit kell tudni leolvasni róla?</summary><ul class="normal">
			<li>apoptózis "eat-me" szignálokat "eredményez"</li>
			<li>nekrózis gyulladást(inflamattory) kiváltó szignálokat "eredményez"</li>
			<li><i>nekroptózis feltételezhetően szintúgy gyulladást(inflamattory) kiváltó szignálokat "eredményez"</i></li>
		</ul></details>
	</ul></details>
	<details class="kerdes 2" id="sb.540"><summary>nekroptózis &#10140; definíció? lényege? orvosi jelentősége?</summary><ul class="normal">
		<li>definíció &#10140; nekrózis programozott formája</li>
		<li>death-receptorok aktiválásán keresztül megy végbe de úgy, hogy a kaszpázok gátolva vannak &#10140; nekrózis fenotípusú, tehát nincsenek apoptotikus testek, hanem  a sejt tartalma a extracelluláris térbe „folyik”</li>
		<li>orvosi jelentőség &#10140; vírus fertőzött sejtek halála lehetséges akkor is, ha a vírus kaszpáz gátlókat termeltet</li>
		<div><span class="white">§</span> (képen látható oldalon van részletesebben, de azt nem kell csak megőriztem)</div>
		<img src="images/16_nekroptózis.png">
	</ul></details>
	<details class="kerdes 1" id="sb.541"><summary>sejtek számát mi tartja egyensúlyban?</summary><ul class="normal">
		<li>apoptózis és az osztódás kiegyenlíti egymást (egészséges felnőttben)</li>
	</ul></details>
 </div>
 <div><div class="title">"sejthalálhoz kapcsolódó betegségek".</div>
	<details class="kerdes 2" id="sb.542"><summary>degeneratív betegségek &#10140; hátterükben mi állhat? 1pl és lényege?</summary><ul class="normal">
		<li>fokozott mértékű apoptózis</li>
		<li>pl. <strong>SMA = spinal_muscular_atrophy</strong> &#10140; <strong>IAP-ok hiánya/rossz működése</strong> következtében az apoptózis nincs rendesen gátolva &#10140; <strong>gerincvelő mozgatóneuronjai</strong> elhalnak</li>
		<div><span class="white">§</span> normál esetben az apoptózis és az osztódás kiegyenlíti egymást (egészséges felnőttben)</div>
	</ul></details>
	<details class="kerdes 1" id="sb.543"><summary>HIV-fetőzés ezzel való összefüggése?</summary><ul class="normal">
		<li>immunrendszer CD4,CD8 sejtjei apoptózissal elhalnak</li>
	</ul></details>
	<details class="kerdes 1" id="sb.544"><summary>csökkent mértékű apoptózis hátterű betegségre 1pl?</summary><ul class="normal">
		<li>egyes vírusfertőzések &#10140; pl. herpesz, himlő &#10140; hisz ezek anti-apoptotikus géneket tartalmaznak (lásd pl. IAP)</li>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">17. Őssejtbiológia, differenciáció.</summary><div class="normal">
Sejtsors, sejtdifferenciáció. Totipotens, pluripotens, multipotens, oligopotens és unipotens sejtek. Az őssejtek típusai (embrionális, magzati, felnőtt, indukált pluripotens őssejtek). Az őssejtek fogalma, jellegzetességeik. Az őssejtek sejtciklusa és annak szabályozása. Az őssejt niche. Az őssejtek biológiai és terápiás jelentősége. Regeneratív medicina.
 <div><div class="title"></div>
	<details class="kerdes 2" id="sb.547"><summary>sejt potenciálja &#10140; mit értünk alatta? tipusainak felsorolása?</summary><ul class="normal">
		<li>adott sejtből még hány fajta sejt képes kifejlődni</li>
		<li>minél nagyobb, annál többféle tud még</li>
		<li>ez alapján a sejteket 4 csoportba osztjuk: totipotens > pluripotens > multipotens > unipotens</li>
		<img src="images/17_fejlpot.png">
	</ul></details>
	<details class="kerdes 1" id="sb.548"><summary>totipotens_sejtek?</summary><ul class="normal">
		<li>embrionális és extraembrionális sejtek is képesek még belőle kialakulni</li>
		<li>ilyen <abbr title="a pontos határ még vitatott, de a 8sejtes stádiumban lévő sejtek lehetnek még legeljebb ezek">egyedül</abbr> a zigóta</li>
	</ul></details>
	<details class="kerdes 1" id="sb.549"><summary>pluripotens_sejtek?</summary><ul class="normal">
		<li>pluripotens-sejtek alatt az embrioblast-sejteket értjük, ugyanis ezekből bármilyen embrionális sejt kialakulhat még, de extraembrionális sejt már nem</li>
		<li>(epiblast sejtek még ide sorolhatók esetleg)</li>
		<div><span class="white">§</span> blasztociszta stádiumban a sejtek 2 csoportja: trophoblast-sejtek, és embrioblast-sejtek(=inner-cell-mass)</div>
	</ul></details>
	<details class="kerdes 1" id="sb.550"><summary>multipotens sejtek?</summary><ul class="normal">
		<li>gasztrulációtól már multipotens sejtekről beszélünk</li>
		<li>Ilyenek pl. a felnőttkori őssejtek</li>
	</ul></details>
	<details class="kerdes 1" id="sb.551"><summary>unipotens_sejtek?</summary><ul class="normal">
		<li>már sejtspecifikus, tehát egyféle sejtté tud már csak differenciálódni</li>
	</ul></details>
	<details class="kerdes 2" id="sb.546"><summary>őssejtek jellegzetességeik?(3)</summary><ul class="normal">
		<li>korlátlan osztódóképességgel rendelkeznek &#10140; ömegújúlás (fenntartják az "őssejt készletet")</li>
		<li>emelett képesek differenciálódni különböző tipusú sejtekké &#10140; az, hogy hány fajtára a potenciáljáól(toti/pluri) függ</li>
		<li>csak akkor differenciálódik, ha valamilyen szignált kap</li>
	</ul></details>
	<details class="kerdes 2" id="sb.552"><summary>őssejtek tipusai?(4)</summary><ul class="normal">
		<li>embrionális</li>
		<li>felnőttkori</li>
		<li>foetalis = köldökzsinóri</li>
		<li>indukált</li>
	</ul></details>
	<details class="kerdes 2" id="sb.553"><summary>felnőttkori őssejtek &#10140; fő tulajdonsága 1pl-val bemutatva?</summary><ul class="normal">
		<li>nagyrészük már <strong>szövetspecifikus</strong> &#10140; egy szövetet alkotó sejtek létrehozására képesek csak</li>
		<li>pl. <strong>hematopoetikus őssejt</strong>ből determinációval <strong>kialakulhat többféle progenitor-sejt</strong> &#10140; ezekből differenciációval már csak egyféle sejttípus alakul ki, tehát azok már sejtspecifikusak</li>
		<div><span class="white">§</span> ha a felnőttkori őssejt nem szövetspecifikus, akkor az nagy valószínűséggel tumor őssejt</div>
	</ul></details>
	<details class="kerdes 1" id="sb.554"><summary>felnőttkori differenciált sejtet mi pótolja?</summary><ul class="normal">
		<li>adott szövethez tartozó felnőttkori őssejt</li>
		<li>vagy a fenntiből származó progenitor sejt</li>
	</ul></details>
	<details class="kerdes 2" id="sb.555"><summary>embrionális őssejtek &#10140; mik? potenciáljuk? fontos gén-expressziójuk?</summary><ul class="normal">
		<li>embrioblast-sejtek (esetleg epiblast-sejtek) <abbr title="ha ez igy van(márpedig előadás és en/hun wikipedia is ezt irja), akkor embrionális őssejtek után, már csak a felnőttkori őssejtek lettek egyedül elnevezve még(EG és fötálistól eltekintve). Tehát a köztük lévő pluri/multipotens átmenő sejtek akkor nem sorolhatók semmilyen őssejt típusba --> pedig nyilván azok is őssejtek, hisz azok tulajdonágai is szvsz megfelel az őssejt definícióban leírtaknak (nem hinném, hogy a természet kitalálta, hogy azokkal kivételt tesz)">!?</abbr></li>
		<li>pluripotensek</li>
		<li>Oct-4 TF-et expresszálnak</li>
		<div><span class="white">§</span> Oct-4 a többi sejttel ellentétben aktív, tehát felhasználható kimutatásukra (pl. gasztruláció után az embrionális csírasejtekben aktív már csak az Oct-4 &#10140; ezt felhasználva meghatározható pl. helyük)</div>
	</ul></details>
	<details class="kerdes 2" id="sb.556"><summary>X inaktiváció?(LP)</summary><ul class="normal">
		<li>Nőkben a 23as kromoszóma 2X kromoszóma. Ha mindkettő aktív lenne, akkor 2x annyi termék lenne mint kéne, ezért az egyik inaktíválódik. Ez úgy történik, hogy amelyik inaktív lesz, transzkriptál egy nagy RNS-t (XIST a neve), amely nem fog transzlációt csinálni, hanem inaktívvá teszi az X-kromoszómát. Az, hogy az apai vagy anyai lesz-e inaktív blastocysta-stádium után dől el (előtte még az apai inaktív mindenképp és utána derül ki)</li>
		<li>embrionális őssejt esetében még mind2 X-kromoszóma aktív</li>
		<img src="images/17_xinactiv.png">
	</ul></details>
	<details class="kerdes 1" id="sb.557"><summary>embrionális őssejtek terápiás felhasználásának problémája és következménye?<abbr title="van egyéb is">&#10045;</abbr></summary><ul class="normal">
		<li>kevés emberi embrionális őssejt van</li>
		<li>ugyanis nem megengedett létrehozásuk (etikailag)</li>
		<div>&#10140; felnőttkori őssejtekkel foglalkozik a kutatás inkább</div>
	</ul></details>
	<details class="kerdes 1" id="sb.558"><summary>legrégebbi felnőttkori őssejt, melyet terápiára használnak?</summary><ul class="normal">
		<li>csontvelő átültetésnél a hematopoeticus_őssejtek kerülnek át</li>
		<img src="images/17_hematop.png">
	</ul></details>
	<details class="kerdes 2" id="sb.559"><summary>mesenchymalis őssejtek terápiára való felhasználása a jövőben &#10140; előnyök?</summary><ul class="normal">
		<li><strong>multipotens, ugyanis több irányba képes még differenciálni</strong> (csont,porc,izom,zsírsejt,ínak)</li>
		<li>immunszupresszív tulajdonságúak &#10140; <strong>elnyomják az ellenük irányuló immunválaszt &#10140; nincs szöveti összeférhetetlenség</strong></li>
	</ul></details>
	<details class="kerdes 2" id="sb.560"><summary>szív őssejt terápia problémái?</summary><ul class="normal">
		<li>amennyiben csontvelőből való őssejt átültetéssel probálják "pótolni/fixálni" a károsodást felléphet pl.arritmia, stb.</li>
		<li>amennyiben szív progenitor átültetéssel probálják "pótolni/fixálni" &#10140; hogyan kell kiszedni a progenitort, amelyre szükség van? (meg kéne találni a megfelelő a markert, amivel kimutathatók)</li>
		<img src="images/17_szivprog.png">
	</ul></details>
	<details class="kerdes 2" id="sb.561"><summary>mi teszi lehetővé az őssejtek egyszerre képesek ömegújulásra és differenciálódásra?</summary><ul class="normal">
		<div>asszimetrikus osztódás &#10140; ennek során sem változik DNS-ük, hisz mitózis</div>
		<li>egyik utódsejt marad őssejt</li>
		<li>másik differenciálódik</li>
		<img src="images/17_aszosz.png">
	</ul></details>
 </div>
 <div><div class="title">asszimetrikus osztódás</div>
	<details class="kerdes 1" id="sb.562"><summary>konkrét pl?</summary><ul class="normal">
		<li>ivarsejtek osztódása</li>
		<img src="images/17_agmtgt.png">
	</ul></details>
	<details class="kerdes 2" id="sb.563"><summary>mik teszik lehetővé? 1-1pl?(2+2)</summary><ul class="normal">
		<li>osztódás előtt a citoplazmában bizonyos_anyagok(pl.TF-ek) eloszlása nem szimmetrikus</li>
		<div><span class="WHITE">pl</span> petesejtnek már a feritilizáció előtt van a citoplazmájának összetétele alapján bizonyos polaritása, azaz 2 részre osztható &#10140; van egy animális fele, és egy vegetális fele (utóbbiban több a szikanyag, míg előbbiben a maganyag több)</div>
		<li>ezenkívül az osztódás síkja sem feltétlen szimmetrikus pl. neuroblast-osztódás, <i>szekunder_oocyta és sarki_sejt</i></li>
		<img src="images/17_polus.png">
	</ul></details>
	<details class="kerdes 1" id="sb.564"><summary>citoplazmában lévő TF-ek hatása?</summary><ul class="normal">
		<li>DNS ugye megegyezik, de az eltérő utódsejtekben más TF-ek vannak, melyek más gének expresszióját engedélyezik majd</li>
		<img src="images/17_tfszab.png">
	</ul></details>
	<details class="kerdes 1" id="sb.565"><summary>osztódás síkja asszimetrikus &#10140; magyarázata?(LP)</summary><ul class="normal">
		<li>kinetochor és poláris_mikrotubulusok húzóereje eltér egyik és másik pólusnál <abbr title="ennyi nekem elég, képet csak megőriztem, de ne foglalkozzak vele">&#10045;</abbr></li>
		<img src="images/17_knmrtkbls.png">
	</ul></details>
	<details class="kerdes 1" id="sb.566"><summary>niche &#10140; mi? funkciója?</summary><ul class="normal">
		<li>differenciálódó sejt környezete</li>
		<li>szabályozza az osztódást, hogy inkább önmegújulás vagy differenciálódás legyen (hogy asszimetrikus legyen-e vagy sem)</li>
		<div><span class="WHITE">kép</span> differenciálódást gátolja, azaz önmegújulást serkenti</div>
		<img src="images/17_niche.png">
	</ul></details>
	<details class="kerdes 1" id="sb.567"><summary><span class="WHITE">JR</span> (indukált pluripotens sejtek)</summary><ul class="normal">
		<li>terápiás felhasználása még "in progress", okai ♫</li>
		<img src="images/17_ipsc.png">
	</ul></details>
 </div>
 http://web.med.u-szeged.hu/mdbio/hun/anyagok/2011-2012/II.felev/smge/12/1.Ossejtek-es-Regenerativ-Medicina-word.pdf
<!----></div></details>

<!----><details><summary class="phase">18. Tumorsejt biológia, tumor őssejtek.</summary><div class="normal">
A tumorok keletkezésének többlépcsős elmélete. A sejtciklus ellenőrzési pontjainak átlépése a tumorsejtek esetében. <abbr title="13.tételben">Protoonkogének/onkogének, tumor szuppresszor gének szerepe, anti apoptotikus gének, telomeráz</abbr>. A tumorsejtek jellemzői: növekedési szignáloktól való függetlenség, korlátlan proliferációs képesség, növekedést gátló útvonalak hiánya, apoptózis elkerülése, angiogenezis, metasztatizáló képesség. Tumor stroma, tumor mikrokörnyezet. Tumorsejt heterogenitás. Beningnus és malignus tumorok. Karcinogének/mutagének. Tumor őssejtek jelentősége.
 <div><div class="title">tumor.</div>
	<details class="kerdes 1" id="sb.568"><summary>daganatos megbetegedések csoportosítása?(HP)</summary><ul class="normal">
		<li><strong>jóindulatú = benignus</strong> &#10140; bár ez is kontrollálhatatlanul növekedik, általában <span class="Important">nem tör be a környező szövetekbe</span>, és nem pusztítja el őket (nincs infiltráció és áttét). A jóindulatú daganatokat ugyanis egy hártya borítja, amely elszigeteli őket a környezetüktől, és általában lassan növekednek. Rendszerint eltávolíthatók, és legtöbbször nem újulnak ki. A belőlük származó sejtek nem szóródnak szét a szervezetben, és ami legfontosabb, a jóindulatú daganatok általában nem veszélyeztetik az életet</li>
		<li><strong>rosszindulatú = malignus = rákos</strong> &#10140; ezeket szinte soha nem borítja határoló hártya, és rendszerint gyorsan növekednek, betörve a környező szövetekbe (infiltráció)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.569"><summary>hipertrófia & hiperplázia mi?</summary><ul class="normal">
		<li>hiperplázia &#10140; sejtszaporulat következtében nő a sejtek száma &#10140; szövet/szerv normálisnál nagyobb</li>
		<li>hipertrófia &#10140; sejtek térfogata megnő &#10140; szövet/szerv normálisnál nagyobb</li>
	</ul></details>
	<details class="kerdes 1" id="sb.570"><summary>daganat szinonimák?(2)</summary><ul class="normal">
		<li>neoplázia = tumor</li>
	</ul></details>
	<details class="kerdes 1" id="sb.571"><summary>rák előjelére 1pl? <abbr title="nembiztos h jólértelmezem">&#10045;</abbr></summary><ul class="normal">
		<li>hiperplázia</li>
	</ul></details>
	<details class="kerdes 1" id="sb.572"><summary>hány féle daganatos megbetegedés van?</summary><ul class="normal">
		<li>~200</li>
	</ul></details>
	<details class="kerdes 2" id="sb.573"><summary>mely külső faktorok okoznak rákot?(5)</summary><ul class="normal">
		<li>kémiai anyagok, sugárzás, vírusok, baktériumok, életmód</li>
	</ul></details>
	<details class="kerdes 2" id="sb.664"><summary>mely belső faktorok okoznak rákot?(3)</summary><ul class="normal">
		<li>hormonok, immunológiai tényezők, örökletes mutációk</li>
	</ul></details>
	<details class="kerdes 2" id="sb.574"><summary>daganatos megbetegedés nevezéktana mi alapján? 1-1pl?</summary><ul class="normal">
		<li>az alapján, hogy mely szövetből ered &#10140; pl.karcinóma hámszövet eredetű</li>
		<li>vagy az alapján, hogy mely szervből ered &#10140; pl.emlőrák</li>
	</ul></details>
	<details class="kerdes 2" id="sb.575"><summary>mutációk típusai az alapján, hogy honnan származik?</summary><ul class="normal">
		<li>örökletes &#10140; egyik szülő ivarsejtjében volt a mutáns allél &#10140; összes sejtben megvan</li>
		<li>sporadikus &#10140; szülők ivarsejtjében nem volt mutáns allél, hanem valamely testi_sejtben jelent meg később &#10140; csak abban van mutáns allél</li>
		<img src="images/18_sporadiköröl.png">
	</ul></details>
	<details class="kerdes 2" id="sb.583"><summary>sporadikus_mutáció kiváltására 3pl?</summary><ul class="normal">
		<li><span class="Important">vírusok: pl. HPV &#10140; méhnyakrák</span></li>
		<li><span class="Important">UV és ionizáló sugárzás &#10140; bőrrák</span></li>
		<li><span class="Important">kémiai anyagok: pl. dohányzás &#10140; tüdőrák</span></li>
		<li>baktériumok: pl. Helicobacter pylori &#10140; gyomorrák</li>
	</ul></details>
	<details class="kerdes 1" id="sb.584"><summary><span class="WHITE">JR</span> sporadikus mutáció</summary><ul class="normal">
		<li>ha egyik sejtben történik egy mutáció mely a tumor irányába tereli az még nem elég</li>
		<li>több mutáció szükséges 1 sejten belül ahhoz hogy tumorsejtté váljon</li>
		<li>így akár több évtizedig lappanganak egyes mutláódott sejtek amelyek gyűjtik a mutációk számát, és bármikor elérhetik a szükségest</li>
		<div><i>bár gondolom ezen sejtek száma azért nem 1-2, hanem sok, de nagy részüket meg ki is szelektálja a szervezet</i></div>
	</ul></details>
	<details class="kerdes 1" id="sb.603"><summary>utóbbi években mely terápia jelentett áttörést a kezelésére? lényege? hátránya?</summary><ul class="normal">
		<li>immunterápia</li>
		<li>immunrendszer "felerősítve kiírtja" a tumorsejteket</li>
		<li>16-20millió FT / páciens</li>
	</ul></details>
 </div>
 <div><div class="title">tumorsejtek.</div>
	<details><summary><span class="WHITE">JR</span> 6 fő ismérve a daganatos sejteknek(LP)</summary><ul class="normal">
		<li>növekedési szignáloktól való függetlenség &#10140; <span class="Important">folyamatosan aktív a GF jelátvitel</span></li>
		<li>rezisztensek a növekedést gátló szignálokra &#10140; sejtciklus ellenőrző pontok inaktvitáltak</li>
		<li>immortalitás <i>(telomeráz)</i></li>
		<li>sejthalállal szembeni rezisztencia &#10140; aktivált anti-sejthalál jelátvitel</li>
		<li>érújdonképződés (angiogenezis) &#10140; tumorsejtes szaporulat környezetében új erek képződnek</li>
		<li><span class="Important">invázió és metasztázis</span> &#10140; sejt-sejt kölcsönhatás elvesztése (pl. E-kadherin) &#10140; ez csak rosszindulató esetében</li>
	</ul></details>
	<details class="kerdes 1" id="sb.576"><summary>GF-ektől hogy függenek?</summary><ul class="normal">
		<li>sehogy &#10140; hiába nincs a környezetben GF, nekik folyamatosan aktív a GF jelátvitel</li>
		<li>emellett a GF gátló jelátvitel is inaktív</li>
	</ul></details>
	<details class="kerdes 1" id="sb.581"><summary>osztódóképességük?</summary><ul class="normal">
		<li>korlátlan, azaz immortál <i>(oka pl. telomeráz)</i></li>
	</ul></details>
	<details class="kerdes 1" id="sb.582"><summary>metasztatizáló képességük, metasztázis lépései?</summary><ul class="normal">
		<li><span class="Important">invázió és metasztázis</span> &#10140; csak malignus esetében</li>
		––––––––––––––––––––––––––––––––––––––––
		<li>epithelialis sejtek mesenchmyalissá alakulnak <abbr title="epithelio-mesenchymalis átalakulás(transfer)">(EMT)</abbr> &#10140; alacsony E-kadherin, adhézió(sejt-sejt, sejt-ECM kölcsönhatás) megszűnik</li>
		<li>intravazáció &#10140; betörnek erek lumenébe <abbr title="vérér/nyirokér lehet egyaránt">&#10045;</abbr></li>
		<li>elvándorolnak máshova</li>
		<li>extravazáció &#10140; kilépnek az erekből</li>
		<li>távoli metasztázist(áttét) képeznek</li>
		<div>(képeket csak megőriztem, LP)</div>
		<img src="images/18_metsztp.png">
	</ul></details>
	<details class="kerdes 2" id="sb.588"><summary>1pl-val mutasd be miért függetlenek a tumorsejtek a növekedési szignáloktól!</summary><ul class="normal">
		<li>RAS normál esetben protoonkogén</li>
		<li>tumorsejtekben gyakran mutációval hiperaktívvá válik, és így ún. onkogén lesz</li>
		<li>eredménye, hogy Ras aktiválódik anélkül, hogy RTK megkötné a szignált(GF) &#10140; beindul a jelátvitel magától &#10140; tumorsejt GF szignáloktól független</li>
		<div><span class="white">()</span> A rákos transzformációért főként a 12, 13, és 61. kodonok mutációi felelősek, aminek fő oka az, hogy ezek a mutációk inaktiválják a RAS fehérje GTPáz aktivitását, s így az nem képes saját magát az aktív RAS-GTP-ből az inaktív RAS-GDP állapotba alakítani. Magyarul, a RAS fehérje befagy az aktív állapotba, azaz mitogén indukció nélkül is aktiválja a downstream folyamatokat (pl. MAP kinázokat)</div>
		<img src="images/13_jeltvtl.png">
	</ul></details>
	<details class="kerdes 1" id="sb.589"><summary><span class="WHITE">JR</span> Ras folyamatos aktiváltságának okára másik 2pl</summary><ul class="normal">
		<li>emlőrák esetében a receptorok száma túl nagy, így mindig aktiválják a Rast</li>
		<li>glioblasztóma esetében pedig a receptor szignál nélkül aktiválódik, aminek következtében folyamatosan aktív, és így a Ras is</li>
		<img src="images/18_ras.png">
	</ul></details>
	<details class="kerdes 1" id="sb.590"><summary>mutációk típusai az alapján, hogy milyen gént éri?</summary><ul class="normal">
		<li>driver &#10140; ilyenkor "nagy fontosságú" gént éri, pl. Ras,p53,pRb (lásd 13.tétel)</li>
		<li>passenger &#10140; többi</li>
	</ul></details>
	<details class="kerdes 3" id="sb.593"><summary>Warburg-hatás &#10140; mi? oka? következménye?</summary><ul class="normal">
		<li>1 glükóz lebontása során keletkezik &#10140; glikolízisnél 2ATP és citromsav-ciklus + oxidatív foszforilációnál ~36ATP</li>
		<li>amennyiben nincs elég oxigén, a glikolízis során keletkezik csak 2ATP</li>
		<div> –––––––––––––––––––––––––––––––– </div>
		<li>Warburg-hatás &#10140; tumorsejtek energiatermelésének megváltozása</li>
		<li>tumorsejteknél a glükózok nagyrésze anaerob úton bomlik le és kis része aerob módon &#10140; átlagosan 1 glükóz lebontása során kb ~4ATP keletkezik</li>
		<li><i>oka &#10140; anaerob glikolízis esetében gyorsabban termelődik összeségében az energia (igaz hogy jóval alacsonyabb hatásfok / glükóz, de összeségében több ATP/sec) &#10140; tumorsejtek hiperaktív osztódása pedig megigényli</i></li>
		<li>következménye</li><ul>
			<li>tumorsejtek glükóz-felhasználása sokszorosa(100x) a normál sejtekének (& tejsav felhalmozódás)</li>
			<li>tehát daganatos beteg nagy mennyiségű szénhidrát(cukor) bevitele növeli a tumorsejtek túlélési valószínűségét</li>
			<li><i>illetve angiogenezisre is ezért van szükségük</i></li>
		</ul>
		<div> –––––––––––––––––––––––––––––––– </div>
		<li><span class="WHITE">1</span> <span class="WHITE">glikolízis</span> 1glükóz(C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) + NAD<sup>+</sup> &#10140; 2piruvát(C<sub>3</sub>H<sub>3</sub>O<sub>3</sub><sup>-</sup>) + 2H<sup>+</sup> + 2ATP + 2H<sub>2</sub>O + 2NADH</li>
		<li><span class="WHITE">2A</span> <span class="WHITE">ha van oxigén</span> citromsav ciklus & oxidatív foszforiláció &#10140; <abbr title="nem kőbe vésett szabály, kicsivel lehet több/kevesebb, asszem 32 és 40 talán, de passz">+36ATP</abbr></li>
		<li><span class="WHITE">2B</span> <span class="WHITE">ha nincs elég oxigén</span> 2piruvát + 2H<sup>+</sup> + 2NADH <abbr title="1NADH ad 1 protont és 2elektront, így lényegében 2piruvát + 4H-ból lesz 2 laktát">&#10140;</abbr> 2laktát(C<sub>3</sub>H<sub>5</sub>O<sub>3</sub><sup>-</sup>) + 2NAD<sup>+</sup> <abbr title="lásd orvosi_kémia 21.tétel reverzibilis!">!!!!!!!!!!!!!!!!!!!!!</abbr></li>
		<img src="images/16_glkzflhsnz.png">
	</ul></details>
	<details class="kerdes 1" id="sb.594"><summary>angiogenezis &#10140; mi? hogyan? oka?</summary><ul class="normal">
		<li>tumorsejtek környezetében erek képződnek</li>
		<li>ezt a tumorsejtek indukálják parakrin módon</li>
		<li>ugyanis magas szintű tápanyagellátásra van szükségük a <i>fokozott mértékű osztódás biztosításához</i></li>
		<img src="images/18_tumordeath.png">
	</ul></details>
	<details class="kerdes 1" id="sb.595"><summary>daganatos betegségek fő halálozási oka?</summary><ul class="normal">
		<li>metasztázis képzése (csak malignus képes rá)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.597"><summary>tumorsejt heterogenitás?</summary><ul class="normal">
		<li>tumorok sejtösszetétele heterogén</li>
		<li>vannak pl. maguk a tumorsejtek, az angiogenezis során létrejött endothel-sejtek, immunsejtek, fibroblast-sejtek</li>
		<li><i>ezenkívül a tumor őssejt és differenciált leszármazottjai is felfogható heterogenitásként</i> (lásd 600.miért ezek a "kritikus problémák"?)</li>
		<img src="images/18_heterogén.png">
	</ul></details>
 </div>
 <div><div class="title">tumor őssejtek.</div>
	<details class="kerdes 1" id="sb.596"><summary>immunválasszal szemben milyenek?</summary><ul class="normal">
		<li>nagyon rezisztensek</li>
	</ul></details>
	<details class="kerdes 1" id="sb.598"><summary>markerük?</summary><ul class="normal">
		<li>nincs egyedi markerük &#10140; pedig ezen sejteket kéne csak hatástalanítani</li>
	</ul></details>
	<details class="kerdes 2" id="sb.599"><summary>kialakulásuk? 1-1pl!</summary><ul class="normal">
		<li>felnőttkori őssejtek mutációja révén alakulnak ki</li>
		<li>de differenciált sejtek vissza-differenciálódásával is létrejöhetnek</li>
		––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
		<li>pl. kolorektális_karcinóma esetében, ha őssejt mutációja megy végbe (mivel az a kripták mélyén van kétoldalt), akkor "bottom-up" lesz</li>
		<li>pl. kolorektális_karcinóma esetében, ha differenciált sejt vissza-differenciálódásával megy végbe, akkor "top-down" lesz</li>
		<img src="images/18_corlcetcrn.png">
	</ul></details>
	<details class="kerdes 1" id="sb.600"><summary style="color:Magenta"><font color="Green">miért ezek a "kritikus problémák"?</font></summary><ul class="normal">
		<li>ezek képesek önmegújításra &#10140; hosszú távú fenntartására a tumornak ezek képesek</li>
		<li>logika a kép alapján &#10140; ha ezek el vannak távolítva, akkor pl. ha megnézem a legfelső szürke-sejtet, oké hogy az is sok tumorsejtet létrehoz még, de következtében a számuk csökkeni fog &#10140; tehát ha nincs több tumor őssejt, akkor ha folyamatosan megfelezem a tumorsejtek számát, akkor egy idő után elfogynak <i>&#10140; ugyanis a többi tumorsejtnél pl. nincs telomeráz így meg van szabva, hogy hány osztódásra képesek max</i></li>
		<img src="images/18_tumrpathc.png">
	</ul></details>
	<details class="kerdes 1" id="sb.601"><summary>kemoterápia <i>fő</i> problémája?</summary><ul class="normal">
		<li>ha tumor őssejt túléli, akkor relapszus lesz</li>
		<li>(illetve legyengíti immunrendszert stb.)</li>
		<img src="images/19_kemoter.png">
	</ul></details>
	<details class="kerdes 2" id="sb.602"><summary>tumor őssejt miért különösen rezisztens kemoterápiára?</summary><ul class="normal">
		<li>multidrog rezisztencia proteinek nagy számban vannak bennük</li>
		<li>ez karrier-fehérje</li>
		<li>apoláris molekulákat pumpálnak ki a sejtből &#10140; pl. gyógyszer, toxikus fehérje</li>
		<li>így kipumpálják magukból a gyógyszereket</li>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">19. Az evolúció. Prokarióta és eukarióta sejtek. A szervezet mint ökoszisztéma; a mikrobiom.</summary><div class="normal">
A biológiai evolúció definiciója és bizonyítékai. Evolúció és kreáció, félreértelmezések és ideologisztikus szélsőségek. A földi élet jellegzetességei. Elméletek az élet kialakulásáról, prokariota és eukariota sejtek és szervezetek megjelenése földtörténeti dimenzióban. A mikrobiom, mint “másik” saját. A mikrobiom kialakulása, összetétele, diverzitása és biológiai hatásai egészségben és betegségben.
 <div><div class="title">evolúció.</div>
	<details class="kerdes 1" id="sb.604"><summary>mikor jelentek meg a prokarióták?</summary><ul class="normal">
		<li>4milliárd éve</li>
	</ul></details>
	<details class="kerdes 1" id="sb.605"><summary>mikor jelentek meg az eukarióták?</summary><ul class="normal">
		<li>2milliárd éve</li>
	</ul></details>
	<details class="kerdes 1" id="sb.606"><summary><abbr title="ezt nemtudtam szebben fogalmazni, de ezek azok, melyeket csak az adott nemű szülők szabhat meg">"Ádám-Éva"</abbr> gének?</summary><ul class="normal">
		<li>Éva &#10140; mitokondriális DNS</li>
		<li>Ádám &#10140; Y kromoszóma</li>
	</ul></details>
	<details class="kerdes 1" id="sb.607"><summary><strong>hol</strong> jelent meg a homo_sapiens és <strong>mikor</strong>?</summary><ul class="normal">
		<li>Afrikában</li>
		<li>50-60ezer éve</li>
	</ul></details>
	<details class="kerdes 1" id="sb.608"><summary>biológiai élet feltétele?(3)</summary><ul class="normal">
		<li>szaporodás, változékonyság, öröklődés</li>
	</ul></details>
	<details class="kerdes 1" id="sb.609"><summary>mi volt az első makromolekula?</summary><ul class="normal">
		<li>egyenlőre nem lehet biztosan tudni</li>
		<li>lehetett DNS vagy RNS vagy fehérje</li>
		<div><span class="white">§</span> jelenleg talán az RNS a legvalószínűbb</div>
	</ul></details>
	<details class="kerdes 1" id="sb.610"><summary>élőlények közös pontjai(alrendszerei) egyszerűsítve?(3)</summary><ul class="normal">
		<li>programvezérlő alrendszer &#10140; DNS</li>
		<li>határoló alrendszer &#10140; membrán</li>
		<li>anyagcsere alrendszer <img style="max-height:15px; float: none;" src="images/19_anyglrndsz.png"></li>
		<img src="images/19_eloleny.png">
	</ul></details>
	<details class="kerdes 2" id="sb.611"><summary>motorjai &#10140; felsorolásuk? lényegük?</summary><ul class="normal">
		<li>mutáció &#10140; új genetikai változatok jönnek létre <span class="WHITE">random</span></li>
		<li>szelekció &#10140; következtében a nagyobb rátermettségű genetikai változat terjed el <span class="WHITE">NEM random</span> ("optimum-keresés")</li>
	</ul></details>
	<details class="kerdes 2" id="sb.612"><summary style="color:Magenta"><font color="Green">mutáció &#10140; oka?</font></summary><ul class="normal">
		<li><abbr title="szvsz haploid">egy sejtben</abbr> 3,2milliárd bázispárhossznyi DNS van</li>
		<li>minden másolása során történik másolási hiba &#10140; ugyanis lehetetlen, hogy ne történjen (még ha minden környezeti feltétel jó lenne akkoris)</li>
		<li>egy DNS-replikáció során 4<sup>3,2milliárd</sup> variáció keletkezhet &#10140; ezek közül 1 egyezik meg az eredetivel, összes többi mutáns</li>
		<div><span class="white">§</span> ezen számok természetesen nem azt jelentik, hogy tele vannak másolási hibával a keletkezett DNS-ek, csak a lehetőséget mutatja, hogy mennyi változat alakulhat ki</div>
	</ul></details>
	<details class="kerdes 2" id="sb.613"><summary>mutációnak ha van biológiai jelentősége milyen lehet?(3)</summary><ul class="normal">
		<div>mutációk kis részének van biológiai következménye...</div>
		<li>ezek nagyrésze káros, pl. Dawn-kór</li>
		<li>kisrésze előnyös, pl. barna színű a rovar, így a madár nem veszi észre a fakérgen, míg az eredeti kék színűt igen</li>
		<li>persze lehet mind2 is, pl. sarlósejtes vérszegénységgel élők &#10140; <span class="WHITE">+</span> rezisztensebbek a maláriára || azonban ha mind2 allél mutáns, akkor fiatalon elhaláloznak <span class="WHITE">–</span></li>
	</ul></details>
	<details class="kerdes 2" id="sb.665"><summary>mutációnak mekkora az esélye, hogy van biológiai jelentősége és miért?(2)</summary><ul class="normal">
		<div>másolási hibáknak nagyon kicsi az esélye, hogy bármiféle biológiai jelentőségük legyen, ugyanis...</div>
		<li>DNS kis százaléka <i>(1,3%)</i> kódol fehérjét csak <abbr title="ha ezekbe van változás, az is lehet ugyanazt az aminosavat kódolja még, ergó nem változtat semmit">(sőt)</abbr></li>
		<li>ezenkívül még a telomer, RNS-eket kódoló szakaszok, melyek változást okoznak, de ezek együtt se több sokkal</li>
		<li>(DNS nagy részét úgy fogjam fel, mint egy pajzs, ami következtében csökken az esély, hogy a mutáció biológiai változást eredményez &#10140; hisz mtDNS ezért gyenge, mert nincs ezen pajzsa)</li>
		<li><abbr title="ez nem konkrétan így van (szvsz ugyanis pl. intronoknak  szintén van funkciójuk alternatív_splicing), de nagyjából ez a lényeg">(!!!)</abbr></li>
		<div><span class="white">§</span> úgy érdemes felfogni, mint a könyvet(vagy épp ezt a kidolgozott jegyzetem) amikor olvasom, abba is vannak hibák és egy részén át is fut a szemem, mert annyira jelentéktelen, hogy fel se fogom, mert csak a tartalmát értelmezi az agyam kb.</div>
		<div><span class="white">§</span> előbbi könyben van 1-2 olyan helyesírási hiba, amin megütközik az ember szeme (pl. vér vs. ver) (persze itt a kettő aránya más, mert azért nagyobb eséllyel veszek észre helyesírási hibát, mint amekkora esélye annak van, hogy biológiai következménye legyen)</div>
	</ul></details>
	<details class="kerdes 1" id="sb.614"><summary>definíciója?</summary><ul class="normal">
		<li><span class="Important">élővilág genetikai transzformációja</span> &#10140; diverzitás (sokféleség) növekszik</li>
		<div><span class="white">§</span> fejlődésről szó sincs <abbr title="pl. pinty vs virág vs hölgy --> nemlehet azt mondani egyikre, hogy fejletebb lenne mint a másik">!!!</abbr> &#10140; lényeg, hogy nem szabad magasabbrendűnek tekinteni pl. az emlőst a baktériumnál, ugyanis a komplexitás más egyiknél és más másiknál</div>
	</ul></details>
	<details class="kerdes 2" id="sb.615"><summary style="color:Red"><font color="Green">Lamarck evolúciós elmélete &#10140; mikor? lényege? 1pl?</font></summary><ul class="normal">
		<li>1800 tájékán</li>
		<li>a szerzett tulajdonságok öröklése az utódokra</li>
		<li>pl. a zsiráf nyaka azért lett hosszú, mert azok maradtak életbe melyek nyújtva tartották a nyakukat és tudtak enni, így ezek tudtak utódott létrehozni</li>
		<li><abbr title="no offense, de Mendel öröklődési elmélete illetve Darwin szelekciós elmélete miért zárja ki ezt? Nem éppen pontosítanak rajta? Hisz szvsz alapvetően a zsiráf ezért lett hosszú nyakú, már nemazért...">(ez az elmélet végül elbukott, mert jött Darwiné)</abbr></li>
	</ul></details>
	<details class="kerdes 1" id="sb.616"><summary>Darwin evolúciós elmélete &#10140; mikor?</summary><ul class="normal">
		<li>19.sz közepe</li>
	</ul></details>
	<details class="kerdes 2" id="sb.617"><summary>Darwin evolúciós elmélete &#10140; lényege?(1+4)</summary><ul class="normal">
		<li>a fajok nem változatlanok, hanem egy korábbi (ősi) alakból alakultak ki</li>
		<li>az evolúció mechanizmusa &#10140; természetes kiválogatódás, migráció, izoláció, új fajok létrejötte</li>
	</ul></details>
	<details class="kerdes 3" id="sb.618"><summary>bizonyítékainak felsorolása?(6)</summary><ul class="normal">
		<li>biogeográfiai</li>
		<li>paleontológiai</li>
		<li>taxonomiai</li>
		<li>homológ struktúrák</li>
		<li>embriológiai</li>
		<li>molekuláris</li>
	</ul></details>
	<details class="kerdes 1" id="sb.619"><summary>biogeográfiai bizonyításra 1pl?</summary><ul class="normal">
		<li>(fajok földrajzi izolációja)</li>
		<li>pl. Galapagos-szigeteken Darwin megfigyelte, hogy egyik szigeten egy fajta komodói varánusz volt csak, míg másikon csak másik fajta</li>
		<img src="images/19_glapag.png">
	</ul></details>
	<details class="kerdes 2" id="sb.620"><summary>paleontológiai bizonyítás lényege 1pl-n bemutatva?</summary><ul class="normal">
		<li>őslénytani maradványok</li>
		<li>pl. egy hal halála után az iszapban fosszilizálódik</li>
		<li>korára lehet következteteni &#10140; rétegek sorrendjéből illetve izotópos vizsgálattal</li>
		<img src="images/19_paleont.png">
	</ul></details>
	<details class="kerdes 1" id="sb.621"><summary>taxonomiai bizonyítás lényege?</summary><ul class="normal">
		<li>lényege, hogy a legidősebb maradványok alapján a rendszertani kategóriák (pl. osztályok a képen: halak, kétéltű, hüllő, madár, emlős) megjelenése kiépíthető "fa-szerűen"</li>
		<img src="images/19_taxo.png">
	</ul></details>
	<details class="kerdes 1" id="sb.622"><summary>homológ struktúrák lényege? 1pl?</summary><ul class="normal">
		<li>azonos eredetű, különböző életmódot élő élőlények különbözővé alakulása</li>
		<li>pl. szárazföldi emlősök végtagjai a képen igencsak különböznek ránézésre (szárny vs kar), de alapszerkezetük(csontok) megegyezik</li>
		<img src="images/19_homologszerv.png">
	</ul></details>
	<details class="kerdes 1" id="sb.623"><summary>embriológiai bizonyítás &#10140; kinek a nevéhez fűződik? lényege?</summary><ul class="normal">
		<li>lényege &#10140; Haeckel nevéhez fűződik, és az egyedfejlődés első pár hetében nagyon hasonlít egymásra a különböző rendszertani kategóriába tartozó egyedek fejlődése</li>
		<li>pl. GF-ek hasonlítanak stb.</li>
		<img src="images/19_haecekl.png">
	</ul></details>
	<details class="kerdes 2" id="sb.624"><summary>molekuláris bizonyításra 1pl?</summary><ul class="normal">
		<li>pl. antibiotikum-rezisztencia</li>
		<li>ennek lényege, hogy a baktériumok az elején szaporodnak, random létrejön közük mutációval egy, mely rezisztens az antibiotikumra</li>
		<li>antibiotikummal való kezelésnél csak az éli túl, a többi mesterségesen kiszelektálódik (ez nem random!)</li>
		<li>így egyes fajokon belül a rezisztensek kezdenek elterjedni</li>
		<img src="images/19_antibiotikum.png">
	</ul></details>
 </div>
 <div><div class="title">koevolúció a <abbr title="baktériumok, vírusok stb.">mikrobákkal</abbr>.</div>
	<details class="kerdes 2" id="sb.625"><summary>2 típusuk? 1-1pl?</summary><ul class="normal">
		<li>kórokozók &#10140; pl. malária, tbc, AIDS</li>
		<li>szimbionták &#10140; pl. bélbaktériumok</li>
	</ul></details>
	<details class="kerdes 1" id="sb.626"><summary>emberben hány "saját"-sejt és hány mikróba van?</summary><ul class="normal">
		<li>10<sup>14</sup> saját és 100x annyi 10<sup>16</sup> mikróba</li>
		<li><abbr title="(méltóságunkat sérti, de lényegében prokarióták vagyunk :) )">&#10045;</abbr></li>
	</ul></details>
	<details class="kerdes 1" id="sb.627"><summary>emberben hány "saját"-gén és hány mikróba-gén van?</summary><ul class="normal">
		<li>humán genom &#10140; 25.000 <abbr title="elvileg ennyi fehérjét kódóló van, és ezenkívül kb ennyi RNS-t">"saját"</abbr>-gén</li>
		<li>mikrobiom &#10140; 8millió mikróba gén</li>
	</ul></details>
	<details class="kerdes 1" id="sb.628"><summary>mikrobiom &#10140; mi? száma? humán genom száma?</summary><ul class="normal">
		<li><i>mikroorganizmusok(vírus,baktérium) genomja az adott ember szervezetében(/szervében)</i></li>
		<li>mikrobiom &#10140; 8millió mikróba gén &#10140; egy emberben ennyi van</li>
		<li>humán genom &#10140; 25.000 <abbr title="elvileg ennyi fehérjét kódóló van, és ezenkívül kb ennyi RNS-t">"saját"</abbr>-gén  &#10140; egy emberben ennyi van</li>
	</ul></details>
	<details class="kerdes 1" id="sb.629"><summary>mikrobiom apai és/vagy anyai eredetű?</summary><ul class="normal">
		<li>elsősorban anyai</li>
	</ul></details>
	<details class="kerdes 1" id="sb.630"><summary style="color:Magenta"><font color="Green">mikrobiom elsősorban mi szabja meg? 1pl?</font></summary><ul class="normal">
		<li>epigenetikus hatások</li>
		<li>pl. ha van egy egypetéjű ikerpár és közülük egyik elhízik másik nem, akkor nagyban különbözni fog a mikrobiomjuk</li>
		<li>pl. valaki antibiotikumos kezelést kap az is befolyásolja</li>
		<div><span class="white">§</span> epigenetikus hatás lényege &#10140; <i>környezeti hatások hogyan befolyásolják az öröklődést</i></div>
		<div><span class="white">§</span> epigenetikus hatás pontosan &#10140; nem a bászissorendben történik változás (DNS szerkezete változatlan), hanem a szabályozó régiók hozzáférhetőségében. Ide tartoznak pl. a hiszton-módosítások</div>
	</ul></details>
	<details class="kerdes 1" id="sb.631"><summary>virom &#10140; mi? mit kell róla tudni?</summary><ul class="normal">
		<li>mikrobiom vírusokra vonatkozó része</li>
		<li>emberi szervezet tele van szabad bakteriofágokkal</li>
		<div><span class="white">§</span> van olyan elmélet, hogy a hörgőkben vannak bakteriofágok, amik kiszűrik az odatévedő baktériumokat <i>&#10140; tehát lényegében segítenek ezek a vírusok</i></div>
	</ul></details>
	<details class="kerdes 3" id="sb.632"><summary>(szimbionta) mikrobiom funkcióinak felsorolása?(6)</summary><ul class="normal">
		<li>tápanyag feltárása (pl.cellulóz lebontás)</li>
		<li>rövid szénláncú zsírsavak termelése (SCFA: ecetsav, tejsav, vajsav, stb.)</li>
		<li>vitaminok és kofaktorok termelése (B12, folsav, K vitamin, stb.)</li>
		<li>kompetíció révén kórokozók szaporodásának gátlása</li>
		<li>növényi-rovar (környezeti) toxinok lebontása</li>
		<li>adaptív immunrendszer „oktatása” (hogy mi a veszélyes és mi nem)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.633"><summary>dohányzás hatása mikrobiomra?</summary><ul class="normal">
		<li>miszkolonizáció &#10140; <abbr title="tüdőben lévő mikróbák genomja">tüdő_mikrobiom</abbr> átalakul olyanra, mint a bél_mikrobiom</li>
	</ul></details>
	<details class="kerdes 1" id="sb.634"><summary>anyai mikrobiom jelentősége terhességnél?</summary><ul class="normal">
		<li>befolyásolja, hogy a gyerek túlsúlyosan/normális/soványan jön-e világra</li>
	</ul></details>
	<details class="kerdes 2" id="sb.635"><summary>depresszió & krónikus stressz?</summary><ul class="normal">
		<li>mikrobiom és depresszió között is összefüggés van &#10140; melyik váltja ki melyiket az nem teljesen tiszta, de...</li>
		<li>krónikus stressz megváltoztatja a mikrobiom összetételét</li>
	</ul></details>
 </div>
<!----></div></details>

<!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// --></div>


<!-- ////////////////////////////////////////-->	<div><div class="mainTitle">gyakorlat</div>		<!--///////////////////////////////////////////////////-->

<!----><details><summary class="phase">20. A fénymikroszkóp és a fénymikroszkópos mikrotechnika.</summary><div class="normal">
Az FM részei és legfontosabb paraméterei (feloldás, Abbe-képlet és nagyítás), a mikroszkóp kezelése és beállítása. Immerziós objektív. Az FM mikrotechnika fajtái: (vér)kenet- és metszetkészítés (fixálás, beágyazás, metszés, lefedés); fagyasztva metszés. A félvékony metszetek fogalma és jelentősége.
 <div><div class="title">Az FM részei és legfontosabb paraméterei (feloldás, Abbe-képlet és nagyítás).</div>
	<details class="kerdes 2" id="sb.26"><summary style="color:Magenta"><font color="Green">Abbe-elv?</font></summary><ul class="normal">
		<li><span class="WHITE">d</span> felbontási_határ = annak a két legközelebbi pontnak a távolsága, amelyek még külön pontként láthatók</li>
		<li><span class="WHITE">R</span> felbontóképesség</li>
		<li><span class="WHITE">n</span> objektív és a tárgy közötti közeg törésmutatója</li>
		<li><span class="WHITE">&lambda;</span> megvilágító fény hullámhossza</li>
		<li><span class="WHITE">&alpha;</span> objektív(be jutó fény) félnyílásszöge <span class="Miss">idk what it means</span></li>
		<li><span class="WHITE">n*&alpha;</span> numerikus_apertúra <a href="images/fnymkrszkp.png">(objektíven rajta van <span class="WHITE">2</span>)</a></li>
		<a href="images/abbelv.png"><img src="images/abbelv.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.27"><summary>FM nagyításának képlete?</summary><ul class="normal">
		<li>N<sub>objektív</sub> * N<sub>okulár</sub> * N<sub>tubus</sub></li>
		<li>(ugyanis tubusban is van egy prizma ami nagyít)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.28"><summary>felbontási határ kb. mekkora?</summary><ul class="normal">
		<li>d=0,1-0,2&mu;m</li>
	</ul></details>
	<details class="kerdes 2 open" id="sb.29"><summary style="color:Magenta"><font color="Green"><span class="book">IF</span> objektív feliratok?</font></summary><ul class="normal">
		<img src="images/fnymkrszkp.png">
		<br><details><summary>megoldás</summary><ul class="normal">
			<div><span class="WHITE">1</span> nagyítás <abbr title="mármint objektívé!?">!?</abbr></div>
			<div><span class="WHITE">2</span> numerikus_apertúra</div>
			<div><span class="WHITE">3</span> fedőlemez vastagság</div>
			<div><span class="WHITE">4</span> tubushossz</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2" id="sb.30"><summary>milyen kép keletkezik("fizika-értelemben")? következményei? orvoslása?</summary><ul class="normal">
		<li>abszorpciós &#10140; </li><ul>
			<li>1-10&mu;m lehet a preparátum <i>vastagsága</i></li>
			<li>egyes részei közt a fényelnyelés alig mutat különbséget &#10140; festési-eljárásokkal ez javítható</li>
		</ul>
	</ul></details>
	<details class="kerdes 3 open" id="sb.31"><summary><span class="book">IF</span> FM-részei?</summary><ul class="normal">
		<img src="images/if_mkrszkfnyrszk.png">
		<br><details><summary>megoldás</summary><ul class="normal">
			<div><span class="WHITE">1</span> tubus</div>
			<div><span class="WHITE">2</span> oszlop</div>
			<div><span class="WHITE">3</span> mintatartó</div>
			<div><span class="WHITE">4</span> talp</div>
			<div><span class="important">5</span> kondenzor</div>
			<div><span class="important">6</span> okulár</div>
		</ul></details>
	</ul></details>
	<details class="kerdes" id="sb.32"><summary><span class="white">JR</span> FM részei</summary><ul class="normal">
		<table>
			<tr><th>mechanikai</th><th>optikai</th></tr>
			
			<tr>
				<td>
					<li>talp</li>
					<li>oszlop</li>
					<li>tubus(okulárhoz)</li>
					<li>revolver-foglalat(objektívhez)</li>
					<li>tárgyasztal</li>
					<li>állító_csavarok</li><ul>
						<li>fényerősség</li>
						<li><abbr title="ez a két csavar, melyet szövettanon használtam 0-24">fókusz(makro/mikro)</abbr></li>
						<li>kondenzorállító</li>
						<li><abbr title="ha egyik szemmel nemúgy látok mint kéne, ezt lehet az objektíven beállítani">objektíven dioptria-állító</abbr></li>
					</ul>
				</td>
				<td>
					<li>objektív</li>
					<li>okulár</li>
					<li>kondenzor</li>
					<li>megvilágító rendszer</li>
				</td>
			</tr>
		</table>
	</ul></details>
 </div>
 <div><div class="title">A mikroszkóp kezelése és beállítása</div>
 </div>
 <div><div class="title">Az FM mikrotechnika</div>
	<details class="kerdes 3" id="sb.89"><summary>metszetkészítés főbb lépései?(HP)</summary><ul class="normal">
		<li>(mintavétel)</li>
		<li><span class="Important">fixálás</span></li>
		<li>(mosás vízzel)</li>
		<li>(vízelvonás &#10140; felszálló alkohol)</li>
		<li>(intermedium anyag használata)</li>
		<li><span class="Important">beágyazás</span></li>
		<li><span class="Important">metszés</span></li>
		<li><span class="Important">festés</span></li>
		<li><span class="Important">lefedés</span></li>
	</ul></details>
	<details class="kerdes 1" id="sb.90"><summary>fixálás célja?</summary><ul class="normal">
		<li>eredeti, élőre jellemző szerkezet megőrzése ...</li>
		<li>... ugyanis fehérjék denaturálódnak, illetve enzimek működése megváltoztatja a szerkezetet</li>
	</ul></details>
	<details class="kerdes 2" id="sb.91"><summary>fixálás módjainak csoportosítása?</summary><ul class="normal">
		<li>fizikai &#10140; pl. fagyasztás (ez után rögtön a metszés jön)</li>
		<li>kémiai &#10140; fixálószerekkel</li>
	</ul></details>
	<details class="kerdes 1" id="sb.92"><summary>fixálószerek funkciója?</summary><ul class="normal">
		<li>keresztkötik a molekulákat &#10140; stabilizálja szerkezetük és helyük</li>
	</ul></details>
	<details class="kerdes 2" id="sb.93"><summary>fixálószerek típusai?</summary><ul class="normal">
		<li>aldehidek (pl.formaldehid)</li>
		<li>vízelvonó szerek (pl.alkohol) &#10140; zsugorít</li>
		<li>szerves savak (pl.ecetsav) &#10140; duzzaszt</li>
	</ul></details>
	<details class="kerdes 3" id="sb.94"><summary>kémiai_fixálás módjai &#10140; felsorolás? lényege? előny/hátrány?</summary><ul class="normal">
		<table>
			<tr><th></th>  <th>immerziós</th>  <th>perfúziós</th></tr>
			
			<tr><th>lényege</th>  <td>mintát bele a fixálószerbe</td>  <td>erekbe a fixálószert &#10140; élőt belülről feltöltik</td></tr>
			<tr><th>előny</th>  <td>sok mintát lehet egyszerre fixálni</td>  <td>jobban megőrzi szerkezetét (nem indul rothadásnal)</td></tr>
			<tr><th>hátrány</th>  <td>mire diffúzióval bejut a mintába a fixálószer, a belseje elrohadhat</td>  <td>élve végzik el az egyeden, és belehal &#10140; emberen nem végezhető, csak állatokon</td></tr>
		</table>
		<a href="images/gy3_immerziosfixálás.png"><img src="images/gy3_immerziosfixálás.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.95"><summary>beágyazás lényege?</summary><ul class="normal">
		<li>infiltrálás &#10140; paraffint folyékonnyá téve (56°) benne áztatom a mintát</li>
		<li>blokk létrehozása &#10140; ezután szobahőmérsékleten visszanyeri szilárd halmazállapotát</li>
		<li><abbr title="ez a paraffinba ágyazás, mert lehet másba is egyébként">&#10045;</abbr></li>
	</ul></details>
	<details class="kerdes 1" id="sb.96"><summary>metszés típusai?(2)</summary><ul class="normal">
		<li>mikrotómmal(speciális kés) történő</li>
		<li>kriosztát &#10140; ez akkor, ha fagyasztással történt a fixálás</li>
	</ul></details>
	<details class="kerdes 2" id="sb.97"><summary>fagyasztva metszés lépései?</summary><ul class="normal">
		<li>(mintavétel)</li>
		<li><span class="Important">fixálás</span></li>
		<li><span class="Important">metszés</span></li>
		<li><span class="Important">festés</span></li>
		<li><span class="Important">lefedés</span></li>
	</ul></details>
	<details class="kerdes 1" id="sb.98"><summary>fagyasztva metszést mikor végeznek? miért</summary><ul class="normal">
		<li>biopsziánál, ugyanis ez gyors (nem kell beágyazás stb.)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.99"><summary>lefedés lényege?</summary><ul class="normal">
		<li>tárgylemez és fedőlemez közé műgyantával a mintát &#10140; összeragadnak</li>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">21. Citológiai festések és cito(hiszto)kémiai reakciók<abbr title="A konkrét festési eljárások közül csak azok, amelyek az alábbi preparátumokban előfordulnak (lásd 14. pontban) ), de az  általános ismeretek a festésekről és citokémiai reakciókról kellenek">&#10045;</abbr>.</summary><div class="normal">
H- és HE-festés. Giemsa és MGG. Toluidinkék. Krezilibolya. Feulgen-reakció, PAS és triPAS. Aoyama-festés. Fizikai festés. Vitális festés és natív preparátumok. Enzimcitokémia: A savanyú foszfatáz enzim kimutatása.
 <div><div class="title">általános.</div>
	<details class="kerdes 2" id="sb.261"><summary>"festési eljárások" csoportosítása és típusai?</summary><ul class="normal">
		<li>általános &#10140; citológiai festések</li>
		<li>speciális</li><ul>
			<li>citokémiai reakciók</li>
			<li>immuncitokémiai reakciók</li>
		</ul>
	</ul></details>
	<details class="kerdes 1" id="sb.229"><summary>citológiai festések és citokémiai reakciók mikor végezhetők?</summary><ul class="normal">
		<li>metszés után a fedés előtt</li>
		<li><abbr title="esetleg beágyazás/metszés előtt">&#10045;</abbr></li>
	</ul></details>
	<details class="kerdes 2" id="sb.703"><summary>glikogén mely festéssel mutatható ki? lényege?</summary><ul class="normal">
		<li>PAS</li>
		<div><span class="Vocab">1</span> perjódsav(PA) hozzáadása &#10140; glikogénben a hexóz(gyűrűforma) kinyílik és aldehid lesz belőle</div>
		<div><span class="Vocab">2</span> Schiff-reagens használata</div>
		<img src="images/gy_pas.png">
	</ul></details>
 </div>
 <div><div class="title">Cito(hiszto)lógiai festések.</div>
	<details class="kerdes 2" id="sb.230"><summary>típusainak csoportosítása?</summary><ul class="normal">
		<li>fizikai festés</li>
		<li>kémiai festés (pl.HE)</li>
		<li>metakromázia</li>
		<li><abbr title="lehet van egyéb is, de ennyit elég tudni">&#10045;</abbr></li>
	</ul></details>
	<details class="kerdes 1" id="sb.228"><summary><span class="Vocab">JR</span> metakromázia</summary><ul class="normal">
		<li>festékoldat színétől eltérő színűre festődnek egyes képletek. A bázikus anilinfestékek kék színével szemben a megfestett granulumok ibolyáspiros színűek lesznek. A jelenség azzal magyarázható, hogy a festékmolekulák rendezetlenül (pl. vízben) kék színt adnak, rendezett állapotban (pl. párhuzamosan orientált molekulák között párhuzamosan orientált festékmolekulák) ibolyáspirosat</li>
	</ul></details>
	<details class="kerdes 2" id="sb.652"><summary>HE szukcedán? indokold válaszod!</summary><ul class="normal">
		<li>igen</li>
		<li>szukcedán festések olyanok, hogy a festékanyagok hozzáadás nem egyszerre megy végbe</li>
		<li>jelen esetben hematoxilin van hozzáadva először, majd utána az eozin</li>
	</ul></details>
	<details class="kerdes 3" id="sb.100"><summary>HE &#10140; mit fest? hogyan? milyen színűre?(HP-BUKTATÓ!)</summary><ul class="normal">
		<table>
			<tr><th>hematoxilin</th>
				<td bgcolor="blueviolet" style="color:white"><strong>lila(-kék, <i>sötét</i>)</strong></td>
				<td>bázikus-festék, tehát <span class="WHITE">+</span> töltésű</td>
				<td>bazofil<abbr title="savanyú">(=)</abbr>-struktúrát, tehát <span class="WHITE">–</span> töltésűt fest &#10140; DNS és RNS-t pl. sejtmag</td>
			</tr>
			<tr><th>eozin</th>
				<td bgcolor="hotpink"><strong>rózsaszín(-vörös, <i>világos</i>)</strong></td>
				<td>savas<abbr title="savanyú">(=)</abbr>-festék, tehát <span class="WHITE">–</span> töltésű</td>
				<td>acidofil-struktúrát, tehát <span class="WHITE">+</span> töltésűt fest &#10140; fehérje tartalmút pl. citoplazma</td>
			</tr>
		</table>
		<li>sejtmag &#10140; bazofil-struktúra, bázikus-festék festi, bazofil festődésű</li>
		<li>citoplazma &#10140; acidofil-struktúra, savas-festék festi, acidofil festődésű</li>
		<img src="images/21_hemeos.png">
	</ul></details>
	<details class="kerdes 1" id="sb.199"><summary>hematoxilin miért festi a DNS-t és RNS-t?</summary><ul class="normal">
		<li>mert azokat nukleotidokat építi fel, amelyekben pedig ott <span class="WHITE">–</span> töltéső foszfátion</li>
	</ul></details>
	<details class="kerdes 1" id="sb.710"><summary>HE &#10140; mely metszetnél van?</summary><ul class="normal">
		<li>máj (patkány)</li>
		<li>hasnyálmirigy</li>
		<img src="images/26_8v1.png">
		<img src="images/26_8v2.png">
		<img src="images/26_13.png">
	</ul></details>
	<details class="kerdes 1" id="sb.653"><summary>Giemsa– (G) és a May–Grünwald–Giemsa–festés (MGG) &#10140; előnye?</summary><ul class="normal">
		<li>gyors festési eljárás</li>
		<li>(alkalmazott festékek ui. metilalkoholban vannak oldva (s ha a megfelelően vékony preparátum előállításához, nincs szükség metszésre) a fixálás, a víztelenítés és a festés egy lépésben történik)</li>
		<details><summary>miért gyors?</summary><ul class="normal">
			<li><i>a fixálás és festés rögtön egymás után zajlik</i> <abbr title="legalábbis MGG esetében biztosan">()</abbr></li>
		</ul></details>
	</ul></details>
	<details class="kerdes 1" id="sb.654"><summary>Giemsa-festésnél a struktúrák milyen színűre festődnek?</summary><ul class="normal">
		<li><span style="background-color:blueviolet; color:white"><strong>bazofil struktúrák lila(-kék, <i>sötét</i>)</strong></span></li>
		<li><span style="background-color:hotpink;"><strong>acidofil struktúrák rózsaszín(-vörös, <i>világos</i>)</strong></span></li>
		<li>(<i>ugyanolyan mint HE !!!!!!!!!!!!!!!!</i>)</li>
		<img src="images/21_giemsa.png">
	</ul></details>
	<details class="kerdes 1" id="sb.655"><summary>May–Grünwald–Giemsa–festés (MGG) &#10140; struktúrák milyen színűre festődnek?(LP)</summary><ul class="normal">
		<li>A festés eredményeként a bazofil struktúrák élénk kékre, az acidofil képletek narancsvörösre, a neutrofil részek pedig rózsaszínűre festődnek <span class="MISS">&#10140; valami egyértelmű kép nemártana</span></li>
		<img src="images/25_9hela.png">
	</ul></details>
	<details class="kerdes 1" id="sb.656"><summary>MGG festés &#10140; minek a rövidítése? mely preparatumnal van?</summary><ul class="normal">
		<li>May–Grünwald–Giemsa</li>
		<li>HeLa</li>
		<img src="images/25_9hela.png">
	</ul></details>
	<details class="kerdes 2" id="sb.657"><summary>toulidinkék festés &#10140; milyen festék? festési színei? </summary><ul class="normal">
		<li>bázikus</li>
		<li>tömörebb bázikus struktúrák több festéket kötnek, ezért sötétebbek, a lazább szerkezetek pedig világosabbak</li>
		<div><span class="white">§</span> mint kationos festék, a savanyú poliszacharidokat (pl. heparin) metakromáziásan lilára festi. Az egyéb szövetalkotókat ortokromáziásan kékre színezi</div>
		<details><summary>GSI - mely metszetnél van?</summary><ul class="normal">
			<li><abbr title="peritoneum=hashártya">peritoneális</abbr>_folyadék, benne hízósejtek </li>
			<li>a hízósejtekben lévő szekréciós_szemcsék tartalmaznak <abbr title="heparin származékokat egész pontosan">heparint</abbr> illetve hisztamint</li>
			<img src="images/26_11.png">
			<img src="images/26_11v2.png">
		</ul></details>
		<details><summary>(ANAT - mely metszetnél van?)</summary><ul class="normal">
			<li>hashártya hízósejtekkel &#10140; ugyanis a hízósejtekben lévő szekréciós_szemcsék tartalmaznak <abbr title="heparin származékokat egész pontosan">heparint</abbr> illetve hisztamint</li>
		</ul></details>
	</ul></details>
	<details class="kerdes 1" id="sb.708"><summary>HeLa &#10140; mi? mi figyelhető meg benne?</summary><ul class="normal">
		<li>HeLa (Henrietta Lacks volt a neve akitől kivették)</li>
		<li>legrégebbi humán sejtvonal <div class="mirror">&#10140;</div> ~1950ben egy páciens méhnyakrák tumorsejtjeit kezdték el tenyészteni és azóta van (tehát immortál!!!)</li>
		<li>mivel nagyon régi, in_vitro evolúció jelei nagyon kivehetők benne már (53kromoszómaszámúak már a sejtek)</li>
		<li><span class="white">§</span> FONTOS! nagy sejtmag és benne több nucleolus &#10140; 99% hogy én a sejtmagot látom a FM-en és benne a nucleolusokat, és nem az egész sejtet (tehát a citoplazmát kb tutti nem látom) (két bal oldali képen a citoplazma azért látszik még, de FM-nél szinte biztos nem ilyen)</li>
		<img src="images/25_9hela.png">
	</ul></details>
	<details class="kerdes 3" id="sb.658"><summary>Aoyama-festés &#10140; mi? mit milyen színben?</summary><ul class="normal">
		<li><span class="Important">ezüst-impregnáció</span></li>
		<li>Golgi-diktioszómák fekete-szürke színben tűnnek elő</li>
		<li><abbr title="pdf-ben lévő mechanizmusát kihagytam! ne érdekeljen">&#10045;</abbr></li>
		<br><details><summary>GSI - mely metszetnél van?</summary><ul class="normal">
			<li>ganglion_spinale</li>
			<br><details><summary>1-3?</summary><ul class="normal">
				<div><span class="WHITE">1</span> Golgi(fekete) & citoplazma(barna)</div>
				<div><span class="WHITE">2</span> nucleus</div>
				<div><span class="WHITE">3</span> nucleolus</div>
				<br><details><summary>citoplazmát mi festi barnára?</summary><ul class="normal">
					<div>narancs G</div>
				</ul></details>
			</ul></details>
			<img src="images/26_3.png">
			<img src="images/26_3v2.png">
		</ul></details>
		<br><details><summary>(<i>ANAT - mely metszetnél van?</i>)</summary><ul class="normal">
			<li><i>ez van egyik máj metszetnél</i></li>
			<img src="images/21_majagimp.png">
		</ul></details>
	</ul></details>
	<details class="kerdes 1" id="sb.659"><summary>krezilibolya festés lényege?</summary><ul class="normal">
		<li>kékszínű bázikus anilinfesték</li>
		<li><abbr title="pdf ír róla részletesebben, de nemtudok róla hogy lenne ilyen metszet (bár nagyon nem is kerestem) szóval skippeltem">&#10045;</abbr></li>
	</ul></details>
	<details class="kerdes 2" id="sb.660"><summary>vitális festés &#10140; lényege? 1pl?</summary><ul class="normal">
		<li><abbr title="vagy csak kevéssé"><strong>nem</abbr> toxikus festék</strong>ekkel élő, <strong>fixálatlan preparátum</strong>ok festésére is van lehetőség &#10140; ez az ún. vitális festés</li>
		<div><span class="WHITE">pl</span> <strong>Tus szemcsék</strong> &#10140; <strong>papucsállatkában</strong> alkalmas a <strong>fagocitózis</strong> vizsgálatára</div>
	</ul></details>
 </div>
 <div><div class="title">Cito(hiszto)kémiai reakciók.</div>
	<details class="kerdes 1" id="sb.77"><summary>különbség a citológiai-festéssel szemben?</summary><ul class="normal">
		<li>citológiai esetében pl. a kationos festékek minden anionos makromolekulához kötődnek</li>
		<li>citokémiai specifikusabb ugyanis csak bizonyos vegyület (pl. aldehid)hez kötődik majd a festék</li>
	</ul></details>
	<details class="kerdes 1" id="sb.81"><summary>fő funkciója?</summary><ul class="normal">
		<li>konkrét molekulát lehet vele kimutatni</li>
	</ul></details>
	<details class="kerdes 1" id="sb.82"><summary>típusainak felsorolása?(2) <abbr title="van több, de ennyit elég">&#10045;</abbr></summary><ul class="normal">
		<li>Feulgen</li>
		<li>PAS & triPAS</li>
	</ul></details>
	<details class="kerdes 1" id="sb.83"><summary>színintenzitása milyen?</summary><ul class="normal">
		<li>vizsgálni kívánt molekula színintenzitása arányos a <abbr title="ugyanezen molekula">mennyiségével</abbr></li>
	</ul></details>
	<details class="kerdes 2" id="sb.84"><summary>Feulgen-reakció lépései?</summary><ul class="normal">
		<div><span class="WHITE">1</span> &#10140; HCl hatására leválnak a DNS-ről a purin-bázisok(adenin,guanin), és szabad-aldehid<abbr title="gyök">()</abbr>ek maradnak a helyükön</div>
		<div><span class="WHITE">2</span> &#10140; szabad-aldehid<abbr title="gyök">()</abbr>ekkel a Schiff-reagens reagál és színes lesz a végtermék</div>
		<a href="images/gy3_feulgen.png"><img src="images/gy3_feulgen.png"></a>
	</ul></details>
	<details class="kerdes 1" id="sb.85"><summary>Feulgen-reakció mely molekulát mutatja ki?</summary><ul class="normal">
		<li>DNS-t</li>
		<details><summary>RNS-t miért nem?</summary><ul class="normal">
			<li>sokkal kisebb molekula, és HCl hozzáadáskor szét is esik már</li>
		</ul></details>
	</ul></details>
	<details class="kerdes 1" id="sb.86"><summary>Feulgen-reakció mely lépése miatt DNS-specifikus?</summary><ul class="normal">
		<li>első lépése következtében, ugyanis purin-bázisok kivágódnak</li>
	</ul></details>
	<details class="kerdes 2" id="sb.288"><summary>PAS lényege?</summary><ul class="normal">
		<li>glikogén kimutatására alkalmas</li>
		<div><span class="Vocab">1</span> perjódsav(PA) hozzáadása &#10140; glikogénben a hexóz(gyűrűforma) kinyílik és aldehid lesz belőle</div>
		<div><span class="Vocab">2</span> Schiff-reagens használata</div>
		<img src="images/gy_pas.png">
	</ul></details>
	<details class="kerdes 2" id="sb.661"><summary>triPAS lényege?</summary><ul class="normal">
		<div>1. lépés PAS</div>
		<div>2. lépés magfestés <abbr title="hematoxilin">pl?</abbr></div>
		<div>3. lépés citoplazma festés <abbr title="narancs G">(pl?)</abbr></div>
		<li>2-3. lépés a jobb átláthatóság érdekében</li>
	</ul></details>
	<details class="kerdes 2" id="sb.715"><summary>PAS mely metszeten?</summary><ul class="normal">
		<img src="images/gy_májglikoFM.png">
		<li>máj</li>
		<br><details><summary>számok mit jelölnek?</summary><ul class="normal">
			<div><span class="WHITE">1</span> nucleus (színtelen!)</div>
			<div><span class="WHITE">2</span> citoplazma és benne <strong>glikogén-szemcsék</strong> (sötétlila)</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 3" id="sb.713"><summary>triPAS mely metszeten?</summary><ul class="normal">
		<li>vese</li>
		<br><details><summary>számok mit jelölnek?</summary><ul class="normal">
			<div><span class="WHITE">1</span> nucleus</div>
			<div><span class="WHITE">2</span> mikroboholy <span class="FIX">(PAS pozitív!)</span> <abbr title="nemártana utánanéznem mit jelent a kiemelt rész">!?</abbr></div>
			<div><span class="WHITE">3</span> vvt</div>
			<div><span class="WHITE">4</span> membrana_basalis</div>
			<div><span class="WHITE">(5)</span> bazális csíkolat</div>
			<div><span class="WHITE">6</span> nephrotubulusok</div>
		</ul></details>
		<img src="images/26_19.png">
	</ul></details>
	<details class="kerdes 2" id="sb.714"><summary>Feulgen mely metszeten?</summary><ul class="normal">
		<li>máj <abbr title="patkány">()</abbr></li>
		<br><details><summary style="color:Magenta"><font color="Green">festés célja?</font></summary><ul class="normal">
			<div>sejtmag kimutatása citokémiai eljárással a DNS tartalmán keresztül</div>
		</ul></details>
		<br><details><summary>1-2?</summary><ul class="normal">
			<div><span class="WHITE">1</span> nucleus</div>
			<div><span class="WHITE">2</span> citoplazma</div>
		</ul></details>
		<li>fukszin <abbr title="van valami itt is(rezorcin-fukszin a másik amit hallottam eddig) vele kapcsolatban, járjak utána">!?</abbr></li>
		<img src="images/26_15.png">
	</ul></details>
 </div>
 <div><div class="title">Enzimcitokémiai reakciók.</div>
	<details class="kerdes 1" id="sb.662"><summary style="color:Red"><font color="Green">mire használható fel?</font></summary><ul class="normal">
		<li>specifikus fehérje kimutatására (tehát lehet csak pár molekula eltérése van egy másikkal, de csak ezt fogom látni)</li>
		<li>adott enzim által katalizált reakció végtermékének kimutatására</li>
	</ul></details>
	<details class="kerdes 4" id="sb.663"><summary>savanyú foszfatáz enzim kimutatása?</summary><ul class="normal">
		<img src="images/21_enzimcito.png">
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">22. Az immuncitokémia.</summary><div class="normal">
Alapelve, immuncitokémiai direkt és indirekt eljárások, alkalmazási lehetőségei. Affinitás citokémia.
 <div><div class="title">immuncitokémia</div>
	<details class="kerdes" id="sb.260"><summary>mire ad választ a vizsgálat?</summary><ul class="normal">
		<li>van-e a vizsgálni kívánt fehérje</li>
		<li>ha van, akkor relatív mennyisége mennyi (sok/kevés) &#10140; szín erősségéből megsaccolható</li>
	</ul></details>
	<details class="kerdes" id="sb.262"><summary>antigén?</summary><ul class="normal">
		<li>fehérje, melyet az immunrendszer felismer és ellene antitestet termel</li>
	</ul></details>
	<details class="kerdes" id="sb.263"><summary>antitest?</summary><ul class="normal">
		<li>immunglobulin fehérje</li>
	</ul></details>
	<details class="kerdes" id="sb.264"><summary><span class="Important">IF</span> immunglobulin fehérje?</summary><ul class="normal">
		<div><span class="WHITE">1</span> antigén kötőhely</div>
		<li>2-2 nehéz/könnyű lánc</li>
		<div><span class="WHITE">2</span> variábilis régió (fajon belül különbözik)</div>
		<div><span class="WHITE">3</span> konstans régió (fajon belül megegyezik)</div>
		<img src="images/gy6_immunglobulin.png">
	</ul></details>
	<details class="kerdes" id="sb.265"><summary>eljárások típusainak csoportosítása?(csak nevük)</summary><ul class="normal">
		<li>direkt</li>
		<li>indirekt</li>
	</ul></details>
	<details class="kerdes" id="sb.266"><summary>direkt és indirekt immuncitokémiai eljárások lépései? &#10140; pl. inzulint akarok kimutatni emberi szövetben(hasnyálmirigy)</summary><ul class="normal"><table>
		<tr><th>direkt</th><th>indirekt</th></tr>
		
		<tr><td colspan="2">egérbe juttatom inzulint(emberi)</td></tr>
		<tr><td colspan="2">egér inzulin elleni AT-t termel: AntiHumán-Inzulint</td></tr>
		<tr><td colspan="2">vérvétel az egérből, és AHI-t izolálom (különválasztom, tehát csak az marad tisztán)</td></tr>
		<tr>
			<td bgcolor="black" rowspan="3"></td>
			<td>lóba juttatom egér AHI-t (immunizálom a lovat)</td>
		</tr>
		<tr><td>ló AHI elleni AT-t termel: szekunder_AT</td></tr>
		<tr><td>vérvétel a lóból, és szekunder_AT-t izolálom (különválasztom, tehát csak az marad tisztán)</td></tr>
		<tr>
			<td>AHI jelölése festékkel</td>
			<td>szekunder_AT jelölése festékkel</td>
		</tr>
		<tr><td colspan="2">AHI hozzáadása</td></tr>
		<tr>
			<td bgcolor="black">ssssssssssssssssssssssssssssssssssssssssssssssssss</td>
			<td>szekunder AT hozzáadása</td>
		</tr>
	</table></ul></details>
	<details class="kerdes" id="sb.267"><summary>direkt és indirekt közti különbség &#10140; alapvetően? funkcióját tekintve?</summary><ul class="normal">
		<li>direkt esetében primer_AT-n van megjelölve festékkel <div class="mirror">&#10140;</div> &#10140; indirektnél a szekunder_AT</li>
		<li>indirekt érzékenyebb, mert több szekunder_AT(ami festést ad) fog kapcsolódni egy</li>
		<img src="images/gy6_direktindirekt.png">
	</ul></details>
	<details class="kerdes" id="sb.269"><summary>festési módszerek?</summary><ul class="normal">
		<li>fluoreszcens</li>
		<li>enzim (ilyennel van a 31-s is)</li>
		<li>(aranykolloid)</li>
		<li>(izotópos jelölés)</li>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">23. Elektronmikroszkópok és elektronmikroszkópos mikrotechnika.</summary><div class="normal">
 <div><div class="title">általános</div>
	<details class="kerdes 2" id="sb.231"><summary>elektronmikroszkópok fajtáinak felsorolása? mire használjuk őket?(HP)</summary><ul class="normal">
		<li>transzmissziós (TEM) &#10140; sejt belsejének vizsgálata</li>
		<li>scanning (SEM) &#10140; sejt felszínének vizsgálata</li>
		<a href="images/semtem.png"><img src="images/semtem.png"></a>
	</ul></details>
	<details class="kerdes 2" id="sb.232"><summary>transzmissziós működésének alapja (fénymikroszkóppal összevetve)? felbontási határ?</summary><ul class="normal">
		<li>FM felbontási határa d=0,1-0,2&mu;m</li>
		<li>EM felbontási határa d=0,1-0,2nm</li>
		<li>ugyanis Abbe-elv következtében FM esetében a fény hullámhossza szabja meg, míg EM-nál az elektronok hullámhossza, ami jóval rövidebb</li>
	</ul></details>
	<details class="kerdes 2" id="sb.233"><summary>transzmissziós működése?</summary><ul class="normal">
		<div>(elve lényegében megegyezik FM-ével)</div>
		<li>izzó katódból elektronok lépnek ki ~100kV energiával</li>
		<li>(vákuumba haladnak, elektromágnessel fókuszálva a mintára)</li>
		<li>a minta egy részén az elektronok átjutnak &#10140; ernyőn világos_pontot(elektronnegatív) képeznek</li>
		<li>a minta másik részén az elektronok nem jutnak át, elhajolnak &#10140; ernyőn sötét_pont(elektrondenz) marad</li>
	</ul></details>
	<details class="kerdes 1" id="sb.80"><summary>hogy ismerem fel magpórust?</summary><ul class="normal">
		<li>perinukleáris_heterokromatin réteg hiányzik ott (érthetőbben körülötte világos a környék)</li>
	</ul></details>
 </div>
 <div><div class="title">EM mikrotechnikák</div>
 </div>
<!----></div></details>

<!----><details><summary class="phase">24. A sejtalkotók ultrastruktúrájának vizsgálata.</summary><div class="normal">
 <div><div class="title">s</div>
	<details class="kerdes " id="sb.696"><summary>?</summary><ul class="normal">
		<li>t</li>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">25. In vitro tenyésztési módszerek.</summary><div class="normal">
 <div><div class="title">in vitro sejttenyésztés</div>
	<details class="kerdes 1" id="sb.294"><summary>in vitro vizsgálati módszer mit jelent?</summary><ul class="normal">
		<li>in_vitro = üvegben &#10140; élő szervezeten kívül zajlik a kísérlet</li>
	</ul></details>
	<details class="kerdes 3" id="sb.295"><summary>előnye(3) és hátránya(2) ?</summary><ul class="normal">
		<li>bárhányszor ismételjük meg a kísérletet, ugyanazon körülmények létrehozhatók &#10140; nem kavarnak be hormonok, hőmérséklet stb. (ugyanis ha pl. patkányokon végzem a kísérletet, akkor ott a körülményekben mindig nagyobb az eltérés)</li><ul>
			<div><span class="white">+</span> tehát ugyanazon kísérlet megismételhető többször</div>
			<div><span class="white">–</span> nem modellezi a szervezet komplexitását &#10140; tehát pl. ha a kísérletben a sejteknél bevált a viszgált módszer, attól még a ha élő szervezetben fogom ugyanezt megcsinálni, ott nem biztos működik</div>
		</ul>
		<div><span class="white">+</span> emberi sejtek vizsgálhatók</div>
		<div><span class="white">+</span> állati kísérletek száma csökkenthető &#10140; <i>ugyanis ha sejttenyészeten pl. elvégzem azt a viszgálatot, hogy adott körülmények között hány %-ban működött a gyógyszer a betegség ellen, akkor kiderül, hogy van-e értelme foglalkozni tovább-e vele, hogy változó körülmények között is(állatkísérlet) működjön, vagy előbb módosítani kell a gyógyszert.</i></div>
		<div><span class="white">–</span> genom megváltozik a kísérlet során (in vitro evolúció)</div>
	</ul></details>
	<details class="kerdes 2" id="sb.296"><summary>típusai?</summary><ul class="normal">
		<li>primer sejttenyészet</li>
		<li>sejtvonalak</li>
		<li>sejttörzsek</li>
	</ul></details>
	<details class="kerdes 4" id="sb.297"><summary>sejttenyésztés lépései?</summary><ul class="normal">
		<li>szövetdarab kivágás</li>
		<li><strong>proteázok</strong> nevű emésztőenzimeket adok hozzá korlátozott mértékben</li><ul>
			<li>ez lebontja a sejt-ECM és sejt-sejt kapcsoló struktúrákat alkotó fehérjéket &#10140; szabaddá válnak a sejtek</li>
			<li>de azért kell korlátozott mértékben, különben ugye már maga a sejt is elpusztulna</li>
		</ul>
		<li>szabaddá vált sejteket ezután <strong>petri-csészébe</strong> helyezzük, amiben lesz <strong>médium</strong> is</li>
		<div> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ </div>
		<li>ezután a sejtek lemennek a petri-csésze aljára, odatapadnak, és elkezdenek ott osztódni</li>
		<li>következtében egy idő után befedik a petri-csésze alját</li>
		<li>ahhoz, hogy a sejtek életben maradjanak 2dolgot kell tenni</li><ul>
			<li>médium folyamatosan frissítve kell legyen (tápanyag + körülmények se változzanak)</li>
			<li>meg kell akadályozni, hogy feltöltődjön a petri-csésze alja a sejtekkel, különben nemtudnak továbbosztódni és elkezdenek elhalni</li>
		</ul>
		<li>e 2 dolgot a <strong>passzálás</strong>sal tudjuk elérni &#10140; azaz a sejteket különválasztjuk több petri-csészébe bizonyos idő elteltével</li>
		<li>primer_sejttenyészet</li>
		<img src="images/sjtvnlk.png">
	</ul></details>
	<details class="kerdes 1" id="sb.298"><summary>passzálás &#10140; mi? célja?</summary><ul class="normal">
		<li>ahhoz, hogy a sejtek életben maradjanak 2dolgot kell tenni</li><ul>
			<li>médium folyamatosan frissítve kell legyen (tápanyag + körülmények se változzanak)</li>
			<li>meg kell akadályozni, hogy feltöltődjön a petri-csésze alja a sejtekkel, különben nemtudnak továbbosztódni és elkezdenek elhalni</li>
		</ul>
		<li>e 2 dolgot a <span class="Important">passzálással</span> tudjuk elérni &#10140; azaz a sejteket különválasztjuk több petri-csészébe bizonyos idő elteltével</li>
		<img src="images/sjtvnlk.png">
	</ul></details>
	<details class="kerdes 1" id="sb.299"><summary>primer_sejttenyészet? sejtvonal?</summary><ul class="normal">
		<li>primer_sejttenyészet &#10140; 1.passzálásig lévő sejttenyészet neve</li>
		<li>(szekunder_sejttenyészet &#10140; 1.passzálástól 2.ig)</li>
		<li>sejtvonal &#10140; 2.passzálástól lévő sejttenyészet neve</li>
		<img src="images/sjtvnlk.png">
	</ul></details>
	<details class="kerdes 1" id="sb.300"><summary>primer_sejttenyészet jelentősége?</summary><ul class="normal">
		<li>még lényegesen kevesebb genomváltozás (in_vitro evolúció) ment rajta végbe</li>
		<li>ezért a nagy folyóiratokban csak ezen kísérleti eredményeket tekintik manapság elfogadottnak, a sejtvonalasat már nem (hisz azok már jelentősen különböznek az eredeti sejtektől)</li>
		<img src="images/sjtvnlk.png">
	</ul></details>
	<details class="kerdes 1" id="sb.301"><summary style="color:Magenta"><font color="Green">genom?</font></summary><ul class="normal">
		<li>teljes genetikai állomány</li>
	</ul></details>
	<details class="kerdes 2" id="sb.311"><summary>típusai kiindulási mintától függően?</summary><ul class="normal">
		<img src="images/25_mnylyrszszpn.png">
		<li>szuszpenziós sejttenyészet &#10140; immunsejtek és egyes tumorsejtek vannak ilyenbe</li>
		<li>monolayer sejttenyészet (1rétegben letapadó) &#10140; </li><ul>
			<li>többréteg már nem tud kialakulni mert azok meghalnának (tumorsejteknél is csak egy-egy helyen állnak össze "többrétegbe")</li>
			<li>többi sejt ilyenbe fordul elő (tehát immunsejteket + egyes tumorsejteket kivéve a többi itt)</li>
		</ul>
	</ul></details>
	<details class="kerdes 3" id="sb.313"><summary>médium alkotói?(3<sub>+3</sub>)</summary><ul class="normal">
		<li><span class="Important">GF</span></li>
		<li><span class="Important">glükóz</span></li>
		<li><span class="Important">fetal calf serum = FCS = fötális borjú savó (= FBC)</span></li>
		<li>aminósavak</li>
		<li>nukleotidok</li>
		<li>ionok</li>
	</ul></details>
	<details class="kerdes 3" id="sb.314"><summary>optimális feltételek?(5)</summary><ul class="normal">
		<li>medium</li>
		<li>pH</li>
		<li>hőmérséklet</li>
		<li>sterilitás</li>
		<li>O<sub>2</sub> és CO<sub>2</sub> arány</li>
	</ul></details>
 </div>
 <div><div class="title">sejtvonal típusai</div>
	<details class="kerdes 1" id="sb.302"><summary>felsorolásuk?</summary><ul class="normal">
		<li>immortalizált (halhatatlan)</li>
		<li>halandó (nem immortalizált)</li>
	</ul></details>
	<details class="kerdes 1" id="sb.303"><summary>miért van halandó/immortalizált sejtvonal?</summary><ul class="normal">
		<li>halandó</li><ul>
			<li>egészséges-sejtek csak 50-100 osztódást bírnak ki &#10140; ez a Hayflick szabály</li>
			<li>oka &#10140; telomer folyamatosan fogy osztódáskor (DNS 5' végén) kb. 30nukleotiddal &#10140; ha már sokat osztódott, a telomer nem lesz képes működni, így nem tudja stabilizálni a kromoszómákat</li>
		</ul>
		<li>immortalizált &#10140; azért mert tumorsejtekben van telomeráz aktivitás</li>
	</ul></details>
	<details class="kerdes 1" id="sb.305"><summary>immortalizált/halandó &#10140; milyen szövetből származnak?</summary><ul class="normal">
		<li>immortalizált <div class="mirror">&#10140;</div> tumorszövetből, transzformált sejtekből</li>
		<li>nem immortalizált <div class="mirror">&#10140;</div> egészséges szövetből</li>
		<details><summary>transzformált sejt mit jelent?</summary><ul class="normal">
			<li>egészséges szövetből származik, de kivétel után pl. rtg-sugárzás, toxikus anyag (stb.) kezelés hatására átalakul a genomjuk</li>
		</ul></details>
	</ul></details>
	<details class="kerdes 1" id="sb.306"><summary>transzformált sejt mit jelent?</summary><ul class="normal">
		<li>egészséges szövetből származik, de kivétel után pl. rtg-sugárzás, toxikus anyag (stb.) kezelés hatására átalakul a genomjuk</li>
	</ul></details>
	<details class="kerdes 1" id="sb.307"><summary>telomeráz aktivitás melyikben van?</summary><ul class="normal">
		<li>immortalizált</li>
	</ul></details>
	<details class="kerdes 1" id="sb.308"><summary>kontakt gátlás melyikben van?</summary><ul class="normal">
		<img src="images/25_kntkgtls.png">
		<li>halandóban van kontakt gátlás</li>
		<li>tumorsejteknél nincs, ennek következtében egy-egy helyen összeállnak ilyen "többrétegbe", de ettől még itt is monolayer</li>
		<div>(ha nincs kontakt gátlás, akkor a sejtek egymásra másznak, és nincs privát szférájuk &#10140; lásd kép)</div>
	</ul></details>
	<details class="kerdes 1" id="sb.309"><summary>genom hogy változik náluk? (relatívan, egymáshoz visszonyítva)</summary><ul class="normal">
		<li>immortalizált &#10140; nagyon megváltozik (még a kromoszómaszám is! stb.)</li>
		<li>halandónál kevésbé</li>
		<div>(tehát ezt ugye úgy kell felfogni, hogy pl. immortalizáltnál már a 3.passzálásnál van több olyan sejt aminek nem 46kromoszómája van, míg halandóknál csak a 20.nál kezd el jelentkezni ez)<abbr title="ezek kamu számok, de a lényege ez">&#10045;</abbr></div>
	</ul></details>
	<details class="kerdes 1" id="sb.310"><summary>sejttörzs mi?</summary><ul class="normal">
		<li>olyan sejtvonal, melynek sejtjei jellegzetes tulajdonsággal bírnak</li>
		<li>pl. egy adott hormonra való megfelelő érzékenység, valamilyen antigén jelenléte a sejtmembránon, bizonyos enzimaktivitás adott szintű megléte stb.</li>
	</ul></details>
 </div>
<!----></div></details>

<!----><details><summary class="phase">26. FM preparátumok.</summary><div class="normal"><div><div class="title"></div>
	<details class="kerdes 2 open" id="sb.698"><summary><span class="Vocab">3</span> v1</summary><ul class="normal">
		<img src="images/26_3.png">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>Aoyama-festés (ezüst-impregnáció!!!)</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>ganglion_spinale</div>
		</ul></details>
		<br><details><summary>1-3?</summary><ul class="normal">
			<div><span class="WHITE">1</span> Golgi(fekete) & citoplazma(barna)</div>
			<div><span class="WHITE">2</span> nucleus</div>
			<div><span class="WHITE">3</span> nucleolus</div>
			<div><span class="WHITE">(4)</span> érző <abbr title="idegsejt egy része (pl. axon is egy része),">perikarionok</abbr></div>
			<br><details><summary>citoplazmát mi festi barnára?</summary><ul class="normal">
				<div>narancs G</div>
			</ul></details>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.699"><summary><span class="Vocab">3</span> v2</summary><ul class="normal">
		<img src="images/26_3v2.png">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>Aoyama-festés (ezüst-impregnáció!!!)</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>ganglion_spinale</div>
		</ul></details>
		<br><details><summary>1-3?</summary><ul class="normal">
			<div><span class="WHITE">1</span> Golgi(fekete) & citoplazma(barna)</div>
			<div><span class="WHITE">2</span> nucleus</div>
			<div><span class="WHITE">3</span> nucleolus</div>
			<br><details><summary>citoplazmát mi festi barnára?</summary><ul class="normal">
				<div>narancs G</div>
			</ul></details>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.106"><summary><span class="Vocab">8</span> v1</summary><ul class="normal">
		<img src="images/26_8v1.png">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>HE</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>máj (patkány)</div>
		</ul></details>
		<br><details><summary>1-2?</summary><ul class="normal">
			<div><span class="WHITE">1</span> nucleus</div>
			<div><span class="WHITE">2</span> citoplazma <abbr title="itt a világos rózsaszínre mutat a nyíl (ami kitölti szinte az egészet), míg az egyes a sötétlila gömbre">()</abbr></div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.707"><summary><span class="Vocab">8</span> v2</summary><ul class="normal">
		<img src="images/26_8v2.png">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>HE</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>máj (patkány)</div>
		</ul></details>
		<br><details><summary>1-4?</summary><ul class="normal">
			<div><span class="WHITE">1</span> citoplazma</div>
			<div><span class="WHITE">2</span> intercelluláris tér</div>
			<div><span class="WHITE">3</span> nucleus</div>
			<div><span class="WHITE">4</span> nucle<strong>ol</strong>us</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.312"><summary><span class="Vocab">9</span> v1</summary><ul class="normal">
		<img src="images/26_9v1.png">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>MGG</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>HeLa</div>
		</ul></details>
		<br><details><summary>1-3?</summary><ul class="normal">
			<div><span class="WHITE">1</span> citoplazma</div>
			<div><span class="WHITE">2</span> nucleus (bennük <abbr title="mutáció következtében">több</abbr> nucleolus)</div>
			<div><span class="WHITE">3</span> citoplazma</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.709"><summary><span class="Vocab">9</span> v2</summary><ul class="normal">
		<img src="images/26_9v2.png">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>MGG</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>HeLa</div>
		</ul></details>
		<br><details><summary>1-2?</summary><ul class="normal">
			<div><span class="WHITE">1</span> nucleus (bennük <abbr title="mutáció következtében">több</abbr> nucleolus)</div>
			<div><span class="WHITE">2</span> citoplazma</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.700"><summary><span class="Vocab">11</span> v1</summary><ul class="normal">
		<img src="images/26_11.png">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>toulidinkék</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div><abbr title="peritoneum=hashártya">peritoneális</abbr>_folyadék (patkány)</div>
		</ul></details>
		<br><details><summary>1-2?</summary><ul class="normal">
			<div><span class="WHITE">1</span> hízósejtek</div>
			<div><span class="WHITE">2</span> limfocita sejtmagok</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.701"><summary><span class="Vocab">11</span> v2</summary><ul class="normal">
		<img src="images/26_11v2.png">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>toulidinkék</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div><abbr title="peritoneum=hashártya">peritoneális</abbr>_folyadék (patkány)</div>
		</ul></details>
		<br><details><summary>1?</summary><ul class="normal">
			<div>degranuláló hízósejt &#10140; sejtmag & szekréciós szemcsék(heparin,hisztamin)</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.697"><summary><span class="Vocab">13</span> </summary><ul class="normal">
		<img src="images/26_13.png">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>HE</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>hasnyálmirigy</div>
		</ul></details>
		<br><details><summary>1-3 (4)?</summary><ul class="normal">
			<div><span class="WHITE">1</span> nucleus</div>
			<div><span class="WHITE">2</span> bazofil citoplazma</div>
			<div><span class="WHITE">3</span> eozinofil citoplazma</div>
			<div><span class="WHITE">4</span> Langerhans-sziget <abbr title="csak a széle látszik, ott világos sejtek vannak">&#10045;</abbr></div>
			<div><i>külső elválasztású mirigy az 1-3</i></div>
			<div><i>belső elválasztású mirigy a 4</i></div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.87"><summary style="color:Red"><font color="Green"><span class="Vocab">15</span> </font></summary><ul class="normal">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>Feulgen</div>
		</ul></details>
		<br><details><summary style="color:Magenta"><font color="Green">festés célja?</font></summary><ul class="normal">
			<div>sejtmag kimutatása citokémiai eljárással a DNS tartalmán keresztül</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>máj <abbr title="patkány">()</abbr></div>
		</ul></details>
		<br><details><summary>1-2?</summary><ul class="normal">
			<div><span class="WHITE">1</span> nucleus</div>
			<div><span class="WHITE">2</span> citoplazma</div>
		</ul></details>
		<li>fukszin <abbr title="van valami itt is(rezorcin-fukszin a másik amit hallottam eddig) vele kapcsolatban, járjak utána">!?</abbr></li>
		<img src="images/26_15.png">
	</ul></details>
	<details class="kerdes 3 open" id="sb.702"><summary><span class="Vocab">19</span></summary><ul class="normal">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>triPAS</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>vese</div>
		</ul></details>
		<br><details><summary>számok mit jelölnek?</summary><ul class="normal">
			<div><span class="WHITE">1</span> nucleus</div>
			<div><span class="WHITE">2</span> mikroboholy <span class="FIX">(PAS pozitív!)</span> <abbr title="nemártana utánanéznem mit jelent a kiemelt rész">!?</abbr></div>
			<div><span class="WHITE">3</span> vvt</div>
			<div><span class="WHITE">4</span> membrana_basalis</div>
			<div><span class="WHITE">(5)</span> bazális csíkolat</div>
			<div><span class="WHITE">6</span> nephrotubulusok</div>
		</ul></details>
		<img src="images/26_19.png">
	</ul></details>
	<details class="kerdes 2 open" id="sb.290"><summary><span class="Vocab">29</span></summary><ul class="normal">
		<img src="images/gy_májglikoFM.png">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>PAS</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>máj</div>
		</ul></details>
		<br><details><summary>számok mit jelölnek?</summary><ul class="normal">
			<div><span class="WHITE">1</span> nucleus (színtelen!)</div>
			<div><span class="WHITE">2</span> citoplazma és benne <strong>glikogén-szemcsék</strong> (sötétlila)</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.268"><summary style="color:Red"><font color="Green"><span class="Vocab">31</span> v1</font></summary><ul class="normal">
		<img src="images/26_31.png">
		<br><details><summary>festés célja?</summary><ul class="normal">
			<li>inzulin kimutatása indirekt immuncitokémiával</li>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>pancreas &#10140; Langerhans-szigetekben lévő &beta;-sejtek termelik az inzulint</div>
			<div><span class="white">§</span> <i>lila a Langerhans-sziget, mert az inzulin lila színű</i></div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.711"><summary style="color:Red"><font color="Green"><span class="Vocab">31</span> v2</font></summary><ul class="normal">
		<img src="images/26_29v2.png">
		<br><details><summary>festés célja?</summary><ul class="normal">
			<li>inzulin kimutatása indirekt immuncitokémiával</li>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>pancreas &#10140; Langerhans-szigetekben lévő &beta;-sejtek termelik az inzulint</div>
			<div><span class="white">§</span> <i>lila a Langerhans-sziget, mert az inzulin lila színű</i></div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.704"><summary><span class="Vocab">38</span> v1?</summary><ul class="normal">
		<img src="images/26_38v1.png">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>MGG</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>emlőtumor sejtvonal</div>
		</ul></details>
		<br><details><summary>számok mit jelölnek?</summary><ul class="normal">
			<div><span class="WHITE">1</span> apoptotikus testek</div>
			<div><span class="WHITE">2</span> zsugorodó sejtek</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.705"><summary><span class="Vocab">38</span> v2?</summary><ul class="normal">
		<img src="images/26_38v2.png">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>MGG</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>emlőtumor sejtvonal</div>
		</ul></details>
		<br><details><summary>számok mit jelölnek?</summary><ul class="normal">
			<div><span class="WHITE">(1)</span> fragmentálódó sejtmag</div>
			<div><span class="WHITE">2</span> apoptotikus testek</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.706"><summary><span class="Vocab">38</span> v3?</summary><ul class="normal">
		<img src="images/38_v3.png">
		<br><details><summary>festés típusa?</summary><ul class="normal">
			<div>MGG</div>
		</ul></details>
		<br><details><summary>mi látható a képen?</summary><ul class="normal">
			<div>emlőtumor sejtvonal</div>
		</ul></details>
		<br><details><summary>számok mit jelölnek?</summary><ul class="normal">
			<div><span class="WHITE">1</span> apoptotikus test</div>
			<div><span class="WHITE">2</span> zsugorodó sejtek</div>
		</ul></details>
	</ul></details>
	<details class="kerdes 2 open" id="sb.327"><summary style="color:Red"><font color="Green"><span class="Vocab">58</span> <span class="FIX">kidolgozni</span></font></summary><ul class="normal">
		<br><details><summary>célja?</summary><ul class="normal">
			<li>mitózis fázisait szemlélteti növényi preparátumon (hagyma)</li>
			<li>különbség így emberi sejttel ellentétben, hogy ezeknek van sejtfala és nincs centrióluma</li>
		</ul></details>
		<img src="images/fm58kp.png">
	</ul></details>
<!----></div></div></details>


<details><summary class="phaseB">x. A sejtek anyag és energiatárolása.</summary><div class="normal">
 <div><div class="title">általános</div>
	<details class="kerdes" id="sb.282"><summary>energiaképzést mely sejtorganellum végzi?(HP)</summary><ul class="normal">
		<li>mitokondrium</li>
	</ul></details>
	<details class="kerdes" id="sb.270"><summary>energiaképzés hogy történik?</summary><ul class="normal">
		<li>glikogén lebontásával &#10140; rövidtávon ez a módszer</li>
		<li>lipidcseppek lebontásával &#10140; hosszútávon ez a módszer</li>
	</ul></details>
	<details class="kerdes" id="sb.276"><summary><span class="MISS">zsírsavoxid blah</span>?</summary><ul class="normal">
		<li>mitokondrium &#10140; &beta;-zsírsav oxidáció (rövid)</li>
		<li>peroxiszóma &#10140; &beta;-zsírsav oxidáció (hosszú)</li>
	</ul></details>
 </div>
 <div><div class="title">lipidek</div>
	<details class="kerdes" id="sb.277"><summary>lipidcseppek mit tartalmaznak?(LP)</summary><ul class="normal">
		<li>apoláris lipideket &#10140; trigliceridek és koleszterin észterek</li>
		<li>lipoproteineket</li>
	</ul></details>
	<details class="kerdes" id="sb.278"><summary>lipidcseppek hol fordulnak elő(sejt/szerv) fiziológiásan illetve patológiásan?(LP)</summary><ul class="normal">
		<li>fiziológiás &#10140; minden sejtben van egy kevés, zsírsejtekben pedig sok</li>
		<li>patológiás &#10140; pl. zsírmáj</li>
	</ul></details>
	<details class="kerdes" id="sb.279"><summary>lipidcseppek szerkezete?</summary><ul class="normal">
		<li>belsejét trigliceridek töltik ki (hidrofób)</li>
		<li>ezt 1 foszfolipidréteg veszi körül</li>
		<li>a foszfolipidréteghez fehérjék kapcsolódnak</li>
		<div>/// NEM membránja van (tehát nem 2rétegű foszfolipidréteg határolja)!!!</div>
		<img src="images/gy_lipidcsep.png">
	</ul></details>
	<details class="kerdes" id="sb.280"><summary>lipidcseppek membránja?</summary><ul class="normal">
		<li>NINCS membránja, csak fázishatára <div class="mirror">&#10140;</div> ugyanis csupán 1 foszfolipidréteg veszi körül (nempedig 2)</li>
		<img src="images/gy_lipidcsep.png">
	</ul></details>
	<details class="kerdes" id="sb.271"><summary>lipidkimutatás módjai?</summary><ul class="normal">
		<li><span class="Vocab">FM</span> negatív &#10140; lipid ki lesz oldva, csak a helyét látjuk <a href="images/gyx_neglipfest.png">(kép)</a></li>
		<li><span class="Vocab">FM</span> pozitív &#10140; <abbr title="festét alatt alapvetően a kémiai festést értjük">&#10045;</abbr>színezéssel azaz fizikai_festéssel történik, azaz a <span class="MISS">"festék átoldódik"</span> &#10140; pl. szudán <a href="images/gyx_sudanlipid.png">(kép)</a></li> 
		<li><span class="Vocab">TEM</span> negatív</li>
	</ul></details>
	<details class="kerdes" id="sb.272"><summary>zsírmáj lényege?</summary><ul class="normal">
		<li>máj degenerálódik</li>
		<li>kiválthatja pl. alkoholizmus</li>
		<img src="images/gyx_neglipfest.png">
	</ul></details>
	<details class="kerdes" id="sb.273"><summary>szteroid-szintézis mely szervekben zajlik?</summary><ul class="normal">
		<li>mellékvesekéreg</li>
		<li>here(Leydig-sejtek)</li>
		<li>petefészek(follicularis-sejtek)</li>
	</ul></details>
	<details class="kerdes" id="sb.274"><summary>szteroid-szintézis mely sejtalkotóban zajlik?</summary><ul class="normal">
		<li>mitokondrium</li>
		<li>SER</li>
	</ul></details>
	<details class="kerdes" id="sb.281"><summary>hol fordul elő SER és (csöves)mitokondrum és lipidcsepp egymáshoz közel?(LP)</summary><ul class="normal">
		<li>szteroidtermelő-sejtekben</li>
	</ul></details>
	<details class="kerdes" id="sb.275"><summary>lipidben gazdag sejtekre 1pl?</summary><ul class="normal">
		<li>follicularis-sejtek, hiszen szteroidot termelnek</li>
	</ul></details>
 </div>
 <div><div class="title">glikogén</div>
	<details class="kerdes" id="sb.283"><summary>felépítése?</summary><ul class="normal">
		<li>glükóz monomerekből álló elágazó poliszacharid</li>
	</ul></details>
	<details class="kerdes" id="sb.284"><summary>mely sejtekben jellemző?</summary><ul class="normal">
		<li>májsejt</li>
		<li>izomsejt</li>
	</ul></details>
	<details class="kerdes" id="sb.285"><summary>sejten belül hol található?</summary><ul class="normal">
		<li>citoplazmában, granulomok formájában</li>
	</ul></details>
	<details class="kerdes" id="sb.286"><summary>kimutatása?</summary><ul class="normal">
		<li><span class="Vocab">FM</span> &#10140; PAS-reakció <a href="images/gy_májglikoFM.png">(kép)</a></li>
		<li><span class="Vocab">TEM</span> (elektrondenz szemcsehalmazok) <a href="images/gy_glikogénTEM.png">(kép)</a></li>
	</ul></details>
	<details class="kerdes" id="sb.287"><summary>májban és izomban "funkció különbség"?</summary><ul class="normal">
		<li>májban lebontás után keletkezett glükóz formában kijuthat a vérbe</li>
		<li>izomban lebontás utás keletkezett glükóz egyből elhasználódik</li>
	</ul></details>
	<details class="kerdes" id="sb.289"><summary>glikogén granulum(=szemcse) felépítése?</summary><ul class="normal">
		<li>glikogén felszínén enzimek</li>
		<li>enzimek &#10140; lebontást/beépítést végeznek</li>
		<img src="images/gy_glikogénszemce.png">
	</ul></details>
 </div>
</div></details>

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// --></div>



<div>► ↔ ♫ • » &#9733; &#10004; &#10006; &#10010; &#10033; &#10041; &#10045; &#10067; &#10070; későbbiekben használhatók</div>




<script src="javascript.js"></script> 

<br><br><br><br><br><br><center><a href="../../targyvalasztas.html"><strong style="font-size: 150%;">tárgyválasztás</strong></a></center>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>







