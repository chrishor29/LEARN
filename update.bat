copy C:\Kristof\MIRROR\LEARN\javascript.js C:\Users\chrishor\Desktop\GITHUB\learn\javascript.js
copy C:\Kristof\MIRROR\LEARN\lz-string.js C:\Users\chrishor\Desktop\GITHUB\learn\lz-string.js        
copy C:\Kristof\MIRROR\LEARN\style.css C:\Users\chrishor\Desktop\GITHUB\learn\style.css
robocopy C:\Kristof\MIRROR\LEARN\favicon.bmp C:\Users\chrishor\Desktop\GITHUB\learn\favicon.bmp /mir

robocopy C:\Kristof\MIRROR\LEARN\done\Orvosi_Biologia\images C:\Users\chrishor\Desktop\GITHUB\learn\done\Orvosi_Biologia\images /mir
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Biologia\ob.html C:\Users\chrishor\Desktop\GITHUB\learn\done\Orvosi_Biologia\ob.html
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Biologia\favicon.bmp C:\Users\chrishor\Desktop\GITHUB\learn\done\Orvosi_Biologia\favicon.bmp
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Biologia\javascript.js C:\Users\chrishor\Desktop\GITHUB\learn\done\Orvosi_Biologia\javascript.js
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Biologia\style.css C:\Users\chrishor\Desktop\GITHUB\learn\done\Orvosi_Biologia\style.css

robocopy C:\Kristof\MIRROR\LEARN\done\FejlodesBiologia_I\images C:\Users\chrishor\Desktop\GITHUB\learn\done\FejlodesBiologia_I\images /mir
copy C:\Kristof\MIRROR\LEARN\done\FejlodesBiologia_I\FejlBiosz.html C:\Users\chrishor\Desktop\GITHUB\learn\done\FejlodesBiologia_I\FejlBiosz.html
copy C:\Kristof\MIRROR\LEARN\done\FejlodesBiologia_I\favicon.bmp C:\Users\chrishor\Desktop\GITHUB\learn\done\FejlodesBiologia_I\favicon.bmp
copy C:\Kristof\MIRROR\LEARN\done\FejlodesBiologia_I\style.css C:\Users\chrishor\Desktop\GITHUB\learn\done\FejlodesBiologia_I\style.css

robocopy C:\Kristof\MIRROR\LEARN\done\Orvosi_Kemia\images C:\Users\chrishor\Desktop\GITHUB\learn\done\Orvosi_Kemia\images /mir
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Kemia\kemia.html C:\Users\chrishor\Desktop\GITHUB\learn\done\Orvosi_Kemia\kemia.html
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Kemia\favicon.bmp C:\Users\chrishor\Desktop\GITHUB\learn\done\Orvosi_Kemia\favicon.bmp
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Kemia\javascript.js C:\Users\chrishor\Desktop\GITHUB\learn\done\Orvosi_Kemia\javascript.js
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Kemia\style.css C:\Users\chrishor\Desktop\GITHUB\learn\done\Orvosi_Kemia\style.css

robocopy C:\Kristof\MIRROR\LEARN\done\BioFizika\images C:\Users\chrishor\Desktop\GITHUB\learn\done\BioFizika\images /mir
copy C:\Kristof\MIRROR\LEARN\done\BioFizika\bifiz.html C:\Users\chrishor\Desktop\GITHUB\learn\done\BioFizika\bifiz.html
copy C:\Kristof\MIRROR\LEARN\done\BioFizika\favicon.bmp C:\Users\chrishor\Desktop\GITHUB\learn\done\BioFizika\favicon.bmp
copy C:\Kristof\MIRROR\LEARN\done\BioFizika\style.css C:\Users\chrishor\Desktop\GITHUB\learn\done\BioFizika\style.css

robocopy C:\Kristof\MIRROR\LEARN\ANAT\images C:\Users\chrishor\Desktop\GITHUB\learn\ANAT\images /mir
copy C:\Kristof\MIRROR\LEARN\ANAT\anat.html C:\Users\chrishor\Desktop\GITHUB\learn\ANAT\anat.html 
copy C:\Kristof\MIRROR\LEARN\ANAT\favicon.bmp C:\Users\chrishor\Desktop\GITHUB\learn\ANAT\favicon.bmp

robocopy C:\Kristof\MIRROR\LEARN\ANAT\Histology\100 C:\Users\chrishor\Desktop\GITHUB\learn\ANAT\Histology\100 /mir
copy C:\Kristof\MIRROR\LEARN\ANAT\Histology\histo.html C:\Users\chrishor\Desktop\GITHUB\learn\ANAT\Histology\histo.html 
copy C:\Kristof\MIRROR\LEARN\ANAT\Histology\favicon.bmp C:\Users\chrishor\Desktop\GITHUB\learn\ANAT\Histology\favicon.bmp

robocopy C:\Kristof\MIRROR\LEARN\BioKemia\I\images C:\Users\chrishor\Desktop\GITHUB\learn\BioKemia\I\images /mir
copy C:\Kristof\MIRROR\LEARN\BioKemia\I\biokemia.html C:\Users\chrishor\Desktop\GITHUB\learn\BioKemia\I\biokemia.html 
copy C:\Kristof\MIRROR\LEARN\BioKemia\I\favicon.bmp C:\Users\chrishor\Desktop\GITHUB\learn\BioKemia\I\favicon.bmp

robocopy C:\Kristof\MIRROR\LEARN\SejtBiosz\images C:\Users\chrishor\Desktop\GITHUB\learn\SejtBiosz\images /mir
copy C:\Kristof\MIRROR\LEARN\SejtBiosz\sejtbiosz.html C:\Users\chrishor\Desktop\GITHUB\learn\SejtBiosz\sejtbiosz.html 
copy C:\Kristof\MIRROR\LEARN\SejtBiosz\favicon.bmp C:\Users\chrishor\Desktop\GITHUB\learn\SejtBiosz\favicon.bmp

robocopy C:\Kristof\MIRROR\LEARN\done\ModMem\images C:\Users\chrishor\Desktop\GITHUB\learn\done\ModMem\images /mir
copy C:\Kristof\MIRROR\LEARN\done\ModMem\ModMem.html C:\Users\chrishor\Desktop\GITHUB\learn\done\ModMem\ModMem.html 

robocopy C:\Kristof\MIRROR\LEARN\Elettan\images C:\Users\chrishor\Desktop\GITHUB\learn\Elettan\images /mir
copy C:\Kristof\MIRROR\LEARN\Elettan\elettan.html C:\Users\chrishor\Desktop\GITHUB\learn\Elettan\elettan.html 



git remote add origin
git pull origin master
git add .
git commit -m "make some changes"
rem git mv done/Biofizika tmp
rem git mv tmp done/BioFizika
git push origin master
Pause