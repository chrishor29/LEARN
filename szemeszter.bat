
set source=D:\LEARN
set destination=C:\Users\Kristof\Desktop\MIX\learn
set learnStuff=C:\Users\Kristof\Desktop\MIX\learnStuff

robocopy %source%\Sajat %destination%\Sajat /mir /max:50000000
robocopy %source%\images %destination%\images /mir /max:50000000
robocopy %source%\videos %destination%\videos /mir /max:50000000
xcopy /y %source%\expqs.html %destination%\ /d
xcopy /y %source%\targyvalasztas.html %destination%\ /d
xcopy /y %source%\targyvalasztasNEW.html %destination%\ /d
xcopy /y %source%\javascript.js %destination%\ /d
xcopy /y %source%\javascriptNEW.js %destination%\ /d
xcopy /y %source%\style.css %destination%\ /d
xcopy /y %source%\favicon.png %destination%\ /d


REM 5.év
xcopy /y %source%\Belgyogy\HIIRLm\hiirlm.html %destination%\Belgyogy\HIIRLm\ /d
xcopy /y %source%\Neurologia\neurologia.html %destination%\Neurologia\ /d
xcopy /y %source%\IgOr\igor.html %destination%\IgOr\ /d
xcopy /y %source%\done\Urologia\urologia.html %destination%\done\Urologia\ /d

REM 4.év
xcopy /y %source%\Sebeszet\sebeszet.html %destination%\Sebeszet\ /d
xcopy /y %source%\Sebeszet\2011_0001_524_Sebeszet.pdf %learnStuff%\Sebeszet\ /d
robocopy %source%\Belgyogy\könyvek %destination%\Belgyogy\könyvek /mir /max:50000000
xcopy /y %source%\Belgyogy\Nefro\favicon.bmp %destination%\Belgyogy\Nefro\ /d
xcopy /y %source%\Belgyogy\Nefro\nephro.html %destination%\Belgyogy\Nefro\ /d
xcopy /y %source%\done\Borgyogy\borgyogy.html %destination%\done\Borgyogy\ /d
xcopy /y %source%\done\Onkologia\onko.html %destination%\done\Onkologia\ /d
xcopy /y %source%\done\Ortopedia\ortop.html %destination%\done\Ortopedia\ /d
xcopy /y %source%\done\Pulmo\pulmo.html %destination%\done\Pulmo\ /d
xcopy /y %source%\done\Pulmo\favicon.bmp %destination%\done\Pulmo\ /d
xcopy /y %source%\done\Radiologia\radio.html %destination%\done\Radiologia\ /d
xcopy /y %source%\done\Farmak\favicon.bmp %destination%\done\Farmak\ /d
xcopy /y %source%\done\Farmak\farmak.html %destination%\done\Farmak\ /d
xcopy /y %source%\done\Farmak\farmak1.html %destination%\done\Farmak\ /d
xcopy /y %source%\done\Farmak\2011_0001_524_Farmakologia.pdf %learnStuff%\done\Farmak\ /d
xcopy /y %source%\done\Trauma\trauma.html %destination%\done\Trauma\ /d
xcopy /y %source%\done\Szajseb\szajseb.html %destination%\done\Szajseb\ /d
xcopy /y %source%\done\FOG\FOG.html %destination%\done\FOG\ /d
xcopy /y %source%\done\FOG\tankonyv.pdf %learnStuff%\done\FOG\ /d
xcopy /y %source%\done\Kardio\favicon.bmp %destination%\done\Kardio\ /d
xcopy /y %source%\done\Kardio\kardio.html %destination%\done\Kardio\ /d

REM 3.év
xcopy /y %source%\Belgyogy\Endokrin\favicon.bmp %destination%\Belgyogy\Endokrin\ /d
xcopy /y %source%\Belgyogy\Endokrin\belgyogy.html %destination%\Belgyogy\Endokrin\ /d
xcopy /y %source%\Belgyogy\Endokrin\favicon.bmp %destination%\Belgyogy\Endokrin\ /d
xcopy /y %source%\done\Genetika\favicon.bmp %destination%\done\Genetika\ /d
xcopy /y %source%\done\Genetika\genetika.html %destination%\done\Genetika\ /d
xcopy /y %source%\done\Genetika\Genetika_genomika_2018.pdf %learnStuff%\done\Genetika\ /d
xcopy /y %source%\done\Immunologia\favicon.bmp %destination%\done\Immunologia\ /d
xcopy /y %source%\done\Immunologia\immun.html %destination%\done\Immunologia\
xcopy /y %source%\done\Immunologia\Az Immunologia Alapjai.pdf %learnStuff%\done\Immunologia\ /d
xcopy /y %source%\done\Kortan\favicon.bmp %destination%\done\Kortan\ /d
xcopy /y %source%\done\Kortan\kortan.html %destination%\done\Kortan\ /d
xcopy /y %source%\done\Kortan\referencia_ertekek.pdf %learnStuff%\done\Kortan\ /d
xcopy /y %source%\done\LabMed\labmed.html %destination%\done\LabMed\ /d
xcopy /y %source%\done\LabMed\FullTeszt.pdf %learnStuff%\done\LabMed\ /d
xcopy /y %source%\done\Mikrobi\favicon.bmp %destination%\done\Mikrobi\ /d
xcopy /y %source%\done\Mikrobi\mikrobi.html %destination%\done\Mikrobi\ /d
xcopy /y %source%\done\Mikrobi\mikrobi1.html %destination%\done\Mikrobi\ /d
xcopy /y %source%\done\Mikrobi\Pál, Tibor - Orvosi Mikrobiológia (2013).pdf %learnStuff%\done\Mikrobi\ /d
xcopy /y %source%\done\Mikrobi\Orvosi Mikrobiológia Gyakorlatok.pdf %learnStuff%\done\Mikrobi\ /d
xcopy /y %source%\done\Mikrobi\Mikrobiológia Ádám Éva.pdf %learnStuff%\done\Mikrobi\ /d
xcopy /y %source%\done\Mutettan\mutettan.html %destination%\done\Mutettan\ /d
xcopy /y %source%\done\Mutettan\Wéber Gy., Ferencz A., Sándor J. - Műtéttan (2015).pdf %learnStuff%\done\Mutettan\ /d
xcopy /y %source%\done\Patosz\patosz.html %destination%\done\Patosz\ /d
xcopy /y %source%\done\Patosz\favicon.bmp %destination%\done\Patosz\ /d
xcopy /y %source%\Belgyogy\\Proped\proped.html %destination%\Belgyogy\\Proped\ /d
xcopy /y %source%\done\Pszicho\pszicho.html %destination%\done\Pszicho\ /d
xcopy /y %source%\done\Pszicho\favicon.bmp %destination%\done\Pszicho\ /d


REM 1-2.év
xcopy /y %source%\done\Elettan\elettan1.html %destination%\done\Elettan\ /d
xcopy /y %source%\done\Elettan\elettan1old.html %destination%\done\Elettan\ /d
xcopy /y %source%\done\Elettan\elettan2.html %destination%\done\Elettan\ /d
xcopy /y %source%\done\Elettan\favicon.bmp %destination%\done\Elettan\ /d
xcopy /y %source%\done\BioFizika\bifiz.html %destination%\done\BioFizika\ /d
xcopy /y %source%\done\BioFizika\favicon.bmp %destination%\done\BioFizika\ /d
xcopy /y %source%\done\BioKemia\favicon.bmp %destination%\done\BioKemia\ /d
xcopy /y %source%\done\BioKemia\I\biokemiaI.html %destination%\done\BioKemia\I\ /d
xcopy /y %source%\done\BioKemia\II\biokemiaII.html %destination%\done\BioKemia\II\ /d
xcopy /y %source%\done\BioKemia\III\biokemiaIII.html %destination%\done\BioKemia\III\ /d
xcopy /y %source%\done\BioKemia\III\biokemia.html %destination%\done\BioKemia\III\ /d
xcopy /y %source%\done\BioKemia\I\favicon.bmp %destination%\done\BioKemia\I\ /d
xcopy /y %source%\done\BioKemia\II\favicon.bmp %destination%\done\BioKemia\II\ /d
xcopy /y %source%\done\BioKemia\III\favicon.bmp %destination%\done\BioKemia\III\ /d
xcopy /y %source%\done\ANAT\anat.html %destination%\done\ANAT\ /d
xcopy /y %source%\done\ANAT\favicon.bmp %destination%\done\ANAT\ /d
xcopy /y %source%\done\ANAT\Fejlodestan\embrio.html %destination%\done\ANAT\Fejlodestan\ /d
xcopy /y %source%\done\ANAT\Fejlodestan\favicon.bmp %destination%\done\ANAT\Fejlodestan\ /d
xcopy /y %source%\done\ANAT\Histology\histo.html %destination%\done\ANAT\Histology\ /d
xcopy /y %source%\done\ANAT\Histology\favicon.bmp %destination%\done\ANAT\Histology\ /d
xcopy /y %source%\done\Sejtbiosz\sejtbiosz1.html %destination%\done\Sejtbiosz\ /d
xcopy /y %source%\done\Sejtbiosz\sejtbiosz2.html %destination%\done\Sejtbiosz\ /d
xcopy /y %source%\done\Sejtbiosz\favicon.bmp %destination%\done\Sejtbiosz\ /d
xcopy /y %source%\done\Kemia\kemia.html %destination%\done\Kemia\ /d
xcopy /y %source%\done\Kemia\favicon.bmp %destination%\done\Kemia\ /d
xcopy /y %source%\done\Biologia\biosz.html %destination%\done\Biologia\ /d
xcopy /y %source%\done\Biologia\favicon.bmp %destination%\done\Biologia\ /d
xcopy /y %source%\done\FejlodesBiosz\FejlBiosz.html %destination%\done\FejlodesBiosz\ /d
xcopy /y %source%\done\FejlodesBiosz\favicon.bmp %destination%\done\FejlodesBiosz\ /d
xcopy /y %source%\done\ModMem\ModMem.html %destination%\done\ModMem\ /d
xcopy /y %source%\done\ModMem\favicon.bmp %destination%\done\ModMem\ /d


goto commonexit





















