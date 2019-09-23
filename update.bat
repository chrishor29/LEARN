
set source=D:\LEARN
set destination=C:\Users\chrishor\Desktop\mix\learn

robocopy %source%\done\Kortan\images %destination%\done\Kortan\images /mir
robocopy %source%\done\Patosz\images %destination%\done\Patosz\images /mir
robocopy %source%\done\Patosz\II %destination%\done\Patosz\II /mir
robocopy %source%\done\Patosz\I %destination%\done\Patosz\I /mir
robocopy %source%\Mikrobi\images %destination%\Mikrobi\images /mir
robocopy %source%\Pszicho\images %destination%\Pszicho\images /mir
robocopy %source%\LabMed\images %destination%\LabMed\images /mir
robocopy %source%\done\Genetika\images %destination%\done\Genetika\images /mir
robocopy %source%\Belgyogy\images %destination%\Belgyogy\images /mir

robocopy %source%\Belgyogy\videos %destination%\Belgyogy\videos /mir

xcopy /y %source%\done\Mutettan\mutettan.html %destination%\done\Mutettan\
xcopy /y %source%\done\Kortan\kortan.html %destination%\done\Kortan\
xcopy /y %source%\done\Patosz\patosz.html %destination%\done\Patosz\
xcopy /y %source%\done\Genetika\genetika.html %destination%\done\Genetika\
xcopy /y %source%\Mikrobi\mikrobi.html %destination%\Mikrobi\
xcopy /y %source%\Pszicho\pszicho.html %destination%\Pszicho\
xcopy /y %source%\LabMed\labmed.html %destination%\LabMed\
xcopy /y %source%\Belgyogy\kortan.html %destination%\Belgyogy\
xcopy /y %source%\sajat\sajat.html %destination%\sajat\

xcopy /y %source%\done\Kortan\favicon.bmp %destination%\done\Kortan\
xcopy /y %source%\done\Patosz\favicon.bmp %destination%\done\Patosz\
xcopy /y %source%\done\Genetika\favicon.bmp %destination%\done\Genetika\
xcopy /y %source%\Mikrobi\favicon.bmp %destination%\Mikrobi\
xcopy /y %source%\Pszicho\favicon.bmp %destination%\Pszicho\
xcopy /y %source%\LabMed\favicon.bmp %destination%\LabMed\
xcopy /y %source%\Belgyogy\favicon.bmp %destination%\Belgyogy\

robocopy %source%\images %destination%\images /mir
xcopy /y %source%\expqs.html %destination%\
xcopy /y %source%\targyvalasztas.html %destination%\
xcopy /y %source%\javascript.js %destination%\
xcopy /y %source%\style.css %destination%\
xcopy /y %source%\favicon.png %destination%\

robocopy %source%\done\Immunologia\images %destination%\done\Immunologia\images /mir
xcopy /y %source%\done\Immunologia\immun.html %destination%\done\Immunologia\
xcopy /y %source%\done\Immunologia\favicon.bmp %destination%\done\Immunologia\
robocopy %source%\done\Proped\images %destination%\done\Proped\images /mir
xcopy /y %source%\done\Proped\proped.html %destination%\done\Proped\
xcopy /y %source%\done\Proped\favicon.bmp %destination%\done\Proped\
robocopy %source%\done\Mutettan\images %destination%\done\Mutettan\images /mir
xcopy /y %source%\done\Mutettan\mutettan.html %destination%\done\Mutettan\
xcopy /y %source%\done\Mutettan\favicon.bmp %destination%\done\Mutettan\
robocopy %source%\done\Elettan\images %destination%\done\Elettan\images /mir
robocopy %source%\done\Elettan\video %destination%\done\Elettan\video /mir
xcopy /y %source%\done\Elettan\elettan1.html %destination%\done\Elettan\
xcopy /y %source%\done\Elettan\elettan1old.html %destination%\done\Elettan\
xcopy /y %source%\done\Elettan\elettan2.html %destination%\done\Elettan\
xcopy /y %source%\done\Elettan\favicon.bmp %destination%\done\Elettan\
robocopy %source%\done\BioFizika\images %destination%\done\BioFizika\images /mir
xcopy /y %source%\done\BioFizika\bifiz.html %destination%\done\BioFizika\
xcopy /y %source%\done\BioFizika\favicon.bmp %destination%\done\BioFizika\
robocopy %source%\done\BioKemia\I\images %destination%\done\BioKemia\I\images /mir
robocopy %source%\done\BioKemia\II\images %destination%\done\BioKemia\II\images /mir
robocopy %source%\done\BioKemia\III\images %destination%\done\BioKemia\III\images /mir
xcopy /y %source%\done\BioKemia\favicon.bmp %destination%\done\BioKemia\
xcopy /y %source%\done\BioKemia\I\biokemiaI.html %destination%\done\BioKemia\I\
xcopy /y %source%\done\BioKemia\II\biokemiaII.html %destination%\done\BioKemia\II\
xcopy /y %source%\done\BioKemia\III\biokemiaIII.html %destination%\done\BioKemia\III\
xcopy /y %source%\done\BioKemia\III\biokemia.html %destination%\done\BioKemia\III\
xcopy /y %source%\done\BioKemia\I\favicon.bmp %destination%\done\BioKemia\I\
xcopy /y %source%\done\BioKemia\II\favicon.bmp %destination%\done\BioKemia\II\
xcopy /y %source%\done\BioKemia\III\favicon.bmp %destination%\done\BioKemia\III\
robocopy %source%\done\ANAT\images %destination%\done\ANAT\images /mir
xcopy /y %source%\done\ANAT\anat.html %destination%\done\ANAT\
xcopy /y %source%\done\ANAT\favicon.bmp %destination%\done\ANAT\
robocopy %source%\done\ANAT\Fejlodestan\images %destination%\done\ANAT\Fejlodestan\images /mir
xcopy /y %source%\done\ANAT\Fejlodestan\embrio.html %destination%\done\ANAT\Fejlodestan\
xcopy /y %source%\done\ANAT\Fejlodestan\favicon.bmp %destination%\done\ANAT\Fejlodestan\
robocopy %source%\done\ANAT\Histology\images %destination%\done\ANAT\Histology\images /mir
xcopy /y %source%\done\ANAT\Histology\histo.html %destination%\done\ANAT\Histology\
xcopy /y %source%\done\ANAT\Histology\favicon.bmp %destination%\done\ANAT\Histology\
robocopy %source%\done\Sejtbiosz\images %destination%\done\Sejtbiosz\images /mir
xcopy /y %source%\done\Sejtbiosz\sejtbiosz1.html %destination%\done\Sejtbiosz\
xcopy /y %source%\done\Sejtbiosz\sejtbiosz2.html %destination%\done\Sejtbiosz\
xcopy /y %source%\done\Sejtbiosz\favicon.bmp %destination%\done\Sejtbiosz\
robocopy %source%\done\Biologia\images %destination%\done\Biologia\images /mir
xcopy /y %source%\done\Biologia\biosz.html %destination%\done\Biologia\
xcopy /y %source%\done\Biologia\favicon.bmp %destination%\done\Biologia\
robocopy %source%\done\FejlodesBiosz\images %destination%\done\FejlodesBiosz\images /mir
xcopy /y %source%\done\FejlodesBiosz\FejlBiosz.html %destination%\done\FejlodesBiosz\
xcopy /y %source%\done\FejlodesBiosz\favicon.bmp %destination%\done\FejlodesBiosz\
robocopy %source%\done\Kemia\images %destination%\done\Kemia\images /mir
xcopy /y %source%\done\Kemia\kemia.html %destination%\done\Kemia\
xcopy /y %source%\done\Kemia\favicon.bmp %destination%\done\Kemia\
robocopy %source%\done\ModMem\images %destination%\done\ModMem\images /mir
xcopy /y %source%\done\ModMem\ModMem.html %destination%\done\ModMem\



git remote add origin
git pull origin master
git add .
git commit -m "make some changes"
git push origin master

pause
