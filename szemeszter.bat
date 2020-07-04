
set source=D:\LEARN
set destination=C:\Users\chrishor\Desktop\MIX\learn
set learnStuff=C:\Users\chrishor\Desktop\MIX\learnStuff

robocopy %source%\Sajat %destination%\Sajat /mir
robocopy %source%\images %destination%\images /mir
xcopy /y %source%\expqs.html %destination%\ /d
xcopy /y %source%\targyvalasztas.html %destination%\ /d
xcopy /y %source%\javascript.js %destination%\ /d
xcopy /y %source%\jsFunctions.js %destination%\ /d
xcopy /y %source%\lz-string.js %destination%\ /d
xcopy /y %source%\style.css %destination%\ /d
xcopy /y %source%\favicon.png %destination%\ /d

robocopy %source%\Pszicho\images %destination%\Pszicho\images /mir
xcopy /y %source%\Pszicho\pszicho.html %destination%\Pszicho\ /d
robocopy %source%\Pulmo\images %destination%\Pulmo\images /mir
xcopy /y %source%\Pulmo\pulmo.html %destination%\Pulmo\ /d
robocopy %source%\Ortopedia\images %destination%\Ortopedia\images /mir
xcopy /y %source%\Ortopedia\ortop.html %destination%\Ortopedia\ /d
xcopy /y %source%\Radiologia\radio.html %destination%\Radiologia\ /d

REM 4.év
xcopy /y %source%\Sebeszet\sebeszet.html %destination%\Sebeszet\ /d
xcopy /y %source%\Sebeszet\2011_0001_524_Sebeszet.pdf %learnStuff%\Sebeszet\ /d
robocopy %source%\Belgyogy\könyvek %destination%\Belgyogy\könyvek /mir
robocopy %source%\Belgyogy\Nefro\images %destination%\Belgyogy\Nefro\images /mir
xcopy /y %source%\Belgyogy\Nefro\favicon.bmp %destination%\Belgyogy\Nefro\ /d
xcopy /y %source%\Belgyogy\Nefro\nephro.html %destination%\Belgyogy\Nefro\ /d
robocopy %source%\done\Onkologia\images %destination%\Onkologia\images /mir
xcopy /y %source%\done\Onkologia\onko.html %destination%\Onkologia\ /d
robocopy %source%\done\Borgyogy\images %destination%\done\Borgyogy\images /mir
xcopy /y %source%\done\Borgyogy\borgyogy.html %destination%\done\Borgyogy\ /d
robocopy %source%\done\Farmak\images %destination%\done\Farmak\images /mir
robocopy %source%\done\Farmak\videos %destination%\done\Farmak\videos /mir
xcopy /y %source%\done\Farmak\favicon.bmp %destination%\done\Farmak\ /d
xcopy /y %source%\done\Farmak\farmak.html %destination%\done\Farmak\ /d
xcopy /y %source%\done\Farmak\farmak1.html %destination%\done\Farmak\ /d
xcopy /y %source%\done\Farmak\2011_0001_524_Farmakologia.pdf %learnStuff%\done\Farmak\ /d
xcopy /y %source%\done\Trauma\trauma.html %destination%\done\Trauma\ /d
xcopy /y %source%\done\Szajseb\szajseb.html %destination%\done\Szajseb\ /d
robocopy %source%\done\FOG\images %destination%\done\FOG\images /mir
robocopy %source%\done\FOG\videos %destination%\done\FOG\videos /mir
xcopy /y %source%\done\FOG\FOG.html %destination%\done\FOG\ /d
xcopy /y %source%\done\FOG\tankonyv.pdf %learnStuff%\done\FOG\ /d
robocopy %source%\done\Kardio\images %destination%\done\Kardio\images /mir
robocopy %source%\done\Kardio\videos %destination%\done\Kardio\videos /mir
xcopy /y %source%\done\Kardio\favicon.bmp %destination%\done\Kardio\ /d
xcopy /y %source%\done\Kardio\kardio.html %destination%\done\Kardio\ /d

REM 3.év
robocopy %source%\done\III %destination%\done\III /mir
robocopy %source%\Belgyogy\Endokrin\images %destination%\Belgyogy\Endokrin\images /mir
robocopy %source%\Belgyogy\Endokrin\videos %destination%\Belgyogy\Endokrin\videos /mir
xcopy /y %source%\Belgyogy\Endokrin\favicon.bmp %destination%\Belgyogy\Endokrin\ /d
xcopy /y %source%\Belgyogy\Endokrin\belgyogy.html %destination%\Belgyogy\Endokrin\ /d
xcopy /y %source%\Belgyogy\Endokrin\favicon.bmp %destination%\Belgyogy\Endokrin\ /d
robocopy %source%\done\Genetika\images %destination%\done\Genetika\images /mir
xcopy /y %source%\done\Genetika\favicon.bmp %destination%\done\Genetika\ /d
xcopy /y %source%\done\Genetika\genetika.html %destination%\done\Genetika\ /d
xcopy /y %source%\done\Genetika\Genetika_genomika_2018.pdf %learnStuff%\done\Genetika\ /d
robocopy %source%\done\Immunologia\images %destination%\done\Immunologia\images /mir
xcopy /y %source%\done\Immunologia\favicon.bmp %destination%\done\Immunologia\ /d
xcopy /y %source%\done\Immunologia\immun.html %destination%\done\Immunologia\
xcopy /y %source%\done\Immunologia\Az Immunologia Alapjai.pdf %learnStuff%\done\Immunologia\ /d
robocopy %source%\done\Kortan\images %destination%\done\Kortan\images /mir
xcopy /y %source%\done\Kortan\favicon.bmp %destination%\done\Kortan\ /d
xcopy /y %source%\done\Kortan\kortan.html %destination%\done\Kortan\ /d
xcopy /y %source%\done\Kortan\referencia_ertekek.pdf %learnStuff%\done\Kortan\ /d
xcopy /y %source%\done\LabMed\labmed.html %destination%\done\LabMed\ /d
xcopy /y %source%\done\LabMed\FullTeszt.pdf %learnStuff%\done\LabMed\ /d
robocopy %source%\done\Mikrobi\images %destination%\done\Mikrobi\images /mir
robocopy %source%\done\Mikrobi\videos %destination%\done\Mikrobi\videos /mir
xcopy /y %source%\done\Mikrobi\favicon.bmp %destination%\done\Mikrobi\ /d
xcopy /y %source%\done\Mikrobi\mikrobi.html %destination%\done\Mikrobi\ /d
xcopy /y %source%\done\Mikrobi\mikrobi1.html %destination%\done\Mikrobi\ /d
xcopy /y %source%\done\Mikrobi\Pál, Tibor - Orvosi Mikrobiológia (2013).pdf %learnStuff%\done\Mikrobi\ /d
xcopy /y %source%\done\Mikrobi\Orvosi Mikrobiológia Gyakorlatok.pdf %learnStuff%\done\Mikrobi\ /d
xcopy /y %source%\done\Mikrobi\Mikrobiológia Ádám Éva.pdf %learnStuff%\done\Mikrobi\ /d
robocopy %source%\done\Mutettan\images %destination%\done\Mutettan\images /mir
robocopy %source%\done\Mutettan\videos %destination%\done\Mutettan\videos /mir
xcopy /y %source%\done\Mutettan\mutettan.html %destination%\done\Mutettan\ /d
xcopy /y %source%\done\Mutettan\Wéber Gy., Ferencz A., Sándor J. - Műtéttan (2015).pdf %learnStuff%\done\Mutettan\ /d
robocopy %source%\done\Patosz\images %destination%\done\Patosz\images /mir
xcopy /y %source%\done\Patosz\patosz.html %destination%\done\Patosz\ /d
robocopy %source%\done\Proped\images %destination%\done\Proped\images /mir
robocopy %source%\done\Proped\videos %destination%\done\Proped\videos /mir
xcopy /y %source%\done\Proped\proped.html %destination%\done\Proped\ /d


REM 1-2.év
robocopy %source%\done\II %destination%\done\II /mir
robocopy %source%\done\Elettan\images %destination%\done\Elettan\images /mir
robocopy %source%\done\Elettan\video %destination%\done\Elettan\video /mir
xcopy /y %source%\done\Elettan\elettan1.html %destination%\done\Elettan\ /d
xcopy /y %source%\done\Elettan\elettan1old.html %destination%\done\Elettan\ /d
xcopy /y %source%\done\Elettan\elettan2.html %destination%\done\Elettan\ /d
xcopy /y %source%\done\Elettan\favicon.bmp %destination%\done\Elettan\ /d
robocopy %source%\done\BioFizika\images %destination%\done\BioFizika\images /mir
xcopy /y %source%\done\BioFizika\bifiz.html %destination%\done\BioFizika\ /d
xcopy /y %source%\done\BioFizika\favicon.bmp %destination%\done\BioFizika\ /d
robocopy %source%\done\BioKemia\I\images %destination%\done\BioKemia\I\images /mir
robocopy %source%\done\BioKemia\II\images %destination%\done\BioKemia\II\images /mir
robocopy %source%\done\BioKemia\III\images %destination%\done\BioKemia\III\images /mir
xcopy /y %source%\done\BioKemia\favicon.bmp %destination%\done\BioKemia\ /d
xcopy /y %source%\done\BioKemia\I\biokemiaI.html %destination%\done\BioKemia\I\ /d
xcopy /y %source%\done\BioKemia\II\biokemiaII.html %destination%\done\BioKemia\II\ /d
xcopy /y %source%\done\BioKemia\III\biokemiaIII.html %destination%\done\BioKemia\III\ /d
xcopy /y %source%\done\BioKemia\III\biokemia.html %destination%\done\BioKemia\III\ /d
xcopy /y %source%\done\BioKemia\I\favicon.bmp %destination%\done\BioKemia\I\ /d
xcopy /y %source%\done\BioKemia\II\favicon.bmp %destination%\done\BioKemia\II\ /d
xcopy /y %source%\done\BioKemia\III\favicon.bmp %destination%\done\BioKemia\III\ /d
robocopy %source%\done\ANAT\images %destination%\done\ANAT\images /mir
xcopy /y %source%\done\ANAT\anat.html %destination%\done\ANAT\ /d
xcopy /y %source%\done\ANAT\favicon.bmp %destination%\done\ANAT\ /d
robocopy %source%\done\ANAT\Fejlodestan\images %destination%\done\ANAT\Fejlodestan\images /mir
xcopy /y %source%\done\ANAT\Fejlodestan\embrio.html %destination%\done\ANAT\Fejlodestan\ /d
xcopy /y %source%\done\ANAT\Fejlodestan\favicon.bmp %destination%\done\ANAT\Fejlodestan\ /d
robocopy %source%\done\ANAT\Histology\images %destination%\done\ANAT\Histology\images /mir
xcopy /y %source%\done\ANAT\Histology\histo.html %destination%\done\ANAT\Histology\ /d
xcopy /y %source%\done\ANAT\Histology\favicon.bmp %destination%\done\ANAT\Histology\ /d
robocopy %source%\done\Sejtbiosz\images %destination%\done\Sejtbiosz\images /mir
xcopy /y %source%\done\Sejtbiosz\sejtbiosz1.html %destination%\done\Sejtbiosz\ /d
xcopy /y %source%\done\Sejtbiosz\sejtbiosz2.html %destination%\done\Sejtbiosz\ /d
xcopy /y %source%\done\Sejtbiosz\favicon.bmp %destination%\done\Sejtbiosz\ /d
robocopy %source%\done\Kemia\images %destination%\done\Kemia\images /mir
xcopy /y %source%\done\Kemia\kemia.html %destination%\done\Kemia\ /d
xcopy /y %source%\done\Kemia\favicon.bmp %destination%\done\Kemia\ /d
robocopy %source%\done\Biologia\images %destination%\done\Biologia\images /mir
xcopy /y %source%\done\Biologia\biosz.html %destination%\done\Biologia\ /d
xcopy /y %source%\done\Biologia\favicon.bmp %destination%\done\Biologia\ /d
robocopy %source%\done\FejlodesBiosz\images %destination%\done\FejlodesBiosz\images /mir
xcopy /y %source%\done\FejlodesBiosz\FejlBiosz.html %destination%\done\FejlodesBiosz\ /d
xcopy /y %source%\done\FejlodesBiosz\favicon.bmp %destination%\done\FejlodesBiosz\ /d
robocopy %source%\done\ModMem\images %destination%\done\ModMem\images /mir
xcopy /y %source%\done\ModMem\ModMem.html %destination%\done\ModMem\ /d
xcopy /y %source%\done\ModMem\favicon.bmp %destination%\done\ModMem\ /d


goto commonexit





















