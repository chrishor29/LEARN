
set source=D:\LEARN
set destination=C:\Users\chrishor\Desktop\learn

robocopy %source%\Kortan\images %destination%\Kortan\images /mir
robocopy %source%\Patosz\images %destination%\Patosz\images /mir
robocopy %source%\Mikrobi\images %destination%\Mikrobi\images /mir
robocopy %source%\Pszicho\images %destination%\Pszicho\images /mir
robocopy %source%\LabMed\images %destination%\LabMed\images /mir
robocopy %source%\Genetika\images %destination%\Genetika\images /mir
robocopy %source%\Belgyogy\images %destination%\Belgyogy\images /mir

robocopy %source%\Belgyogy\videos %destination%\Belgyogy\videos /mir

copy %source%\Kortan\kortan.html %destination%\Kortan\kortan.html
copy %source%\Patosz\patosz.html %destination%\Patosz\patosz.html
copy %source%\Mikrobi\mikrobi.html %destination%\Patosz\mikrobi.html
copy %source%\Pszicho\pszicho.html %destination%\Pszicho\pszicho.html
copy %source%\LabMed\labmed.html %destination%\LabMed\labmed.html
copy %source%\Genetika\genetika.html %destination%\Genetika\genetika.html
copy %source%\Belgyogy\belgyogy.html %destination%\Belgyogy\belgyogy.html

copy %source%\Kortan\favicon.png %destination%\Kortan\favicon.png
copy %source%\Patosz\favicon.png %destination%\Patosz\favicon.png
copy %source%\Mikrobi\favicon.png %destination%\Mikrobi\favicon.png
copy %source%\Pszicho\favicon.bmp %destination%\Pszicho\favicon.bmp
copy %source%\LabMed\favicon.png %destination%\LabMed\favicon.png
copy %source%\Genetika\favicon.bmp %destination%\Genetika\favicon.bmp
copy %source%\Belgyogy\favicon.bmp %destination%\Belgyogy\favicon.bmp

robocopy %source%\images %destination%\images /mir
copy %source%\expqs.html %destination%\expqs.html
copy %source%\targyvalasztas.html %destination%\targyvalasztas.html
copy %source%\javascript.js %destination%\javascript.js
copy %source%\style.css %destination%\style.css
copy %source%\favicon.png %destination%\favicon.png

robocopy %source%\done\II %destination%\done\II /mir
robocopy %source%\done\III %destination%\done\III /mir
robocopy %source%\done\Immunologia\images %destination%\done\Immunologia\images /mir
copy %source%\done\Immunologia\immun.html %destination%\done\Immunologia\immun.html
copy %source%\done\Immunologia\favicon.bmp %destination%\done\Immunologia\favicon.bmp
robocopy %source%\done\Mutettan\images %destination%\done\Mutettan\images /mir
copy %source%\done\Mutettan\mutettan.html %destination%\done\Mutettan\mutettan.html
copy %source%\done\Mutettan\favicon.bmp %destination%\done\Mutettan\favicon.bmp
robocopy %source%\done\Elettan\images %destination%\done\Elettan\images /mir
robocopy %source%\done\Elettan\video %destination%\done\Elettan\video /mir
copy %source%\done\Elettan\elettan1.html %destination%\done\Elettan\elettan1.html
copy %source%\done\Elettan\elettan1old.html %destination%\done\Elettan\elettan1old.html
copy %source%\done\Elettan\elettan2.html %destination%\done\Elettan\elettan2.html
copy %source%\done\Elettan\favicon.bmp %destination%\done\Elettan\favicon.bmp
robocopy %source%\done\BioFizika\images %destination%\done\BioFizika\images /mir
copy %source%\done\BioFizika\bifiz.html %destination%\done\BioFizika\bifiz.html
copy %source%\done\BioFizika\favicon.bmp %destination%\done\BioFizika\favicon.bmp
robocopy %source%\done\BioKemia\I\images %destination%\done\BioKemia\I\images /mir
robocopy %source%\done\BioKemia\II\images %destination%\done\BioKemia\II\images /mir
robocopy %source%\done\BioKemia\III\images %destination%\done\BioKemia\III\images /mir
copy %source%\done\BioKemia\favicon.bmp %destination%\done\BioKemia\favicon.bmp
copy %source%\done\BioKemia\I\biokemiaI.html %destination%\done\BioKemia\I\biokemiaI.html
copy %source%\done\BioKemia\II\biokemiaII.html %destination%\done\BioKemia\II\biokemiaII.html
copy %source%\done\BioKemia\III\biokemiaIII.html %destination%\done\BioKemia\III\biokemiaIII.html
copy %source%\done\BioKemia\III\biokemia.html %destination%\done\BioKemia\III\biokemia.html
copy %source%\done\BioKemia\I\favicon.bmp %destination%\done\BioKemia\I\favicon.bmp
copy %source%\done\BioKemia\II\favicon.bmp %destination%\done\BioKemia\II\favicon.bmp
copy %source%\done\BioKemia\III\favicon.bmp %destination%\done\BioKemia\III\favicon.bmp
robocopy %source%\done\ANAT\images %destination%\done\ANAT\images /mir
copy %source%\done\ANAT\anat.html %destination%\done\ANAT\anat.html
copy %source%\done\ANAT\favicon.bmp %destination%\done\ANAT\favicon.bmp
robocopy %source%\done\ANAT\Fejlodestan\images %destination%\done\ANAT\Fejlodestan\images /mir
copy %source%\done\ANAT\Fejlodestan\embrio.html %destination%\done\ANAT\Fejlodestan\embrio.html
copy %source%\done\ANAT\Fejlodestan\favicon.bmp %destination%\done\ANAT\Fejlodestan\favicon.bmp
robocopy %source%\done\ANAT\Histology\images %destination%\done\ANAT\Histology\images /mir
copy %source%\done\ANAT\Histology\histo.html %destination%\done\ANAT\Histology\histo.html
copy %source%\done\ANAT\Histology\favicon.bmp %destination%\done\ANAT\Histology\favicon.bmp
robocopy %source%\done\Sejtbiosz\images %destination%\done\Sejtbiosz\images /mir
copy %source%\done\Sejtbiosz\sejtbiosz1.html %destination%\done\Sejtbiosz\sejtbiosz1.html
copy %source%\done\Sejtbiosz\sejtbiosz2.html %destination%\done\Sejtbiosz\sejtbiosz2.html
copy %source%\done\Sejtbiosz\favicon.bmp %destination%\done\Sejtbiosz\favicon.bmp
robocopy %source%\done\Biologia\images %destination%\done\Biologia\images /mir
copy %source%\done\Biologia\biosz.html %destination%\done\Biologia\biosz.html
copy %source%\done\Biologia\favicon.bmp %destination%\done\Biologia\favicon.bmp
robocopy %source%\done\FejlodesBiosz\images %destination%\done\FejlodesBiosz\images /mir
copy %source%\done\FejlodesBiosz\FejlBiosz.html %destination%\done\FejlodesBiosz\FejlBiosz.html
copy %source%\done\FejlodesBiosz\favicon.bmp %destination%\done\FejlodesBiosz\favicon.bmp
copy %source%\done\FejlodesBiosz\style.css %destination%\done\FejlodesBiosz\style.css
robocopy %source%\done\Kemia\images %destination%\done\Kemia\images /mir
copy %source%\done\Kemia\kemia.html %destination%\done\Kemia\kemia.html
copy %source%\done\Kemia\favicon.bmp %destination%\done\Kemia\favicon.bmp
copy %source%\done\Kemia\style.css %destination%\done\Kemia\style.css
copy %source%\done\Kemia\javascript.js %destination%\done\Kemia\javascript.js
robocopy %source%\done\ModMem\images %destination%\done\ModMem\images /mir
copy %source%\done\ModMem\ModMem.html %destination%\done\ModMem\ModMem.html



git remote add origin
git pull origin master
git add .
git commit -m "make some changes"
git push origin master

pause
