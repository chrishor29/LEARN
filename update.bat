copy C:\Kristof\MIRROR\LEARN\javascript.js C:\Users\chrishor29\Desktop\LEARN\javascript.js
copy C:\Kristof\MIRROR\LEARN\style.css C:\Users\chrishor29\Desktop\LEARN\style.css

robocopy C:\Kristof\MIRROR\LEARN\done\Orvosi_Biologia\images C:\Users\chrishor29\Desktop\LEARN\done\Orvosi_Biologia\images /mir
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Biologia\ob.html C:\Users\chrishor29\Desktop\LEARN\done\Orvosi_Biologia\ob.html
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Biologia\favicon.bmp C:\Users\chrishor29\Desktop\LEARN\done\Orvosi_Biologia\favicon.bmp
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Biologia\javascript.js C:\Users\chrishor29\Desktop\LEARN\done\Orvosi_Biologia\javascript.js
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Biologia\style.css C:\Users\chrishor29\Desktop\LEARN\done\Orvosi_Biologia\style.css

robocopy C:\Kristof\MIRROR\LEARN\done\FejlodesBiologia_I\images C:\Users\chrishor29\Desktop\LEARN\done\FejlodesBiologia_I\images /mir
copy C:\Kristof\MIRROR\LEARN\done\FejlodesBiologia_I\FejlBiosz.html C:\Users\chrishor29\Desktop\LEARN\done\FejlodesBiologia_I\FejlBiosz.html
copy C:\Kristof\MIRROR\LEARN\done\FejlodesBiologia_I\favicon.bmp C:\Users\chrishor29\Desktop\LEARN\done\FejlodesBiologia_I\favicon.bmp
copy C:\Kristof\MIRROR\LEARN\done\FejlodesBiologia_I\style.css C:\Users\chrishor29\Desktop\LEARN\done\FejlodesBiologia_I\style.css

robocopy C:\Kristof\MIRROR\LEARN\done\Orvosi_Kemia\images C:\Users\chrishor29\Desktop\LEARN\done\Orvosi_Kemia\images /mir
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Kemia\kemia.html C:\Users\chrishor29\Desktop\LEARN\done\Orvosi_Kemia\kemia.html
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Kemia\favicon.bmp C:\Users\chrishor29\Desktop\LEARN\done\Orvosi_Kemia\favicon.bmp
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Kemia\javascript.js C:\Users\chrishor29\Desktop\LEARN\done\Orvosi_Kemia\javascript.js
copy C:\Kristof\MIRROR\LEARN\done\Orvosi_Kemia\style.css C:\Users\chrishor29\Desktop\LEARN\done\Orvosi_Kemia\style.css

robocopy C:\Kristof\MIRROR\LEARN\done\BioFizika\images C:\Users\chrishor29\Desktop\LEARN\done\BioFizika\images /mir
copy C:\Kristof\MIRROR\LEARN\done\BioFizika\bifiz.html C:\Users\chrishor29\Desktop\LEARN\done\BioFizika\bifiz.html
copy C:\Kristof\MIRROR\LEARN\done\BioFizika\favicon.bmp C:\Users\chrishor29\Desktop\LEARN\done\BioFizika\favicon.bmp
copy C:\Kristof\MIRROR\LEARN\done\BioFizika\style.css C:\Users\chrishor29\Desktop\LEARN\done\BioFizika\style.css

robocopy C:\Kristof\MIRROR\LEARN\ANAT\images C:\Users\chrishor29\Desktop\LEARN\ANAT\images /mir
copy C:\Kristof\MIRROR\LEARN\ANAT\anat.html C:\Users\chrishor29\Desktop\LEARN\ANAT\anat.html 
copy C:\Kristof\MIRROR\LEARN\ANAT\favicon.bmp C:\Users\chrishor29\Desktop\LEARN\ANAT\favicon.bmp

robocopy C:\Kristof\MIRROR\LEARN\ANAT\Histology\100 C:\Users\chrishor29\Desktop\LEARN\ANAT\Histology\100 /mir
copy C:\Kristof\MIRROR\LEARN\ANAT\Histology\histo.html C:\Users\chrishor29\Desktop\LEARN\ANAT\Histology\histo.html 
copy C:\Kristof\MIRROR\LEARN\ANAT\Histology\favicon.bmp C:\Users\chrishor29\Desktop\LEARN\ANAT\Histology\favicon.bmp

robocopy C:\Kristof\MIRROR\LEARN\BioKemia\I\images C:\Users\chrishor29\Desktop\LEARN\BioKemia\I\images /mir
copy C:\Kristof\MIRROR\LEARN\BioKemia\I\biokemia.html C:\Users\chrishor29\Desktop\LEARN\BioKemia\I\biokemia.html 
copy C:\Kristof\MIRROR\LEARN\BioKemia\I\favicon.bmp C:\Users\chrishor29\Desktop\LEARN\BioKemia\I\favicon.bmp

robocopy C:\Kristof\MIRROR\LEARN\SejtBiosz\I\images C:\Users\chrishor29\Desktop\LEARN\SejtBiosz\I\images /mir
copy C:\Kristof\MIRROR\LEARN\SejtBiosz\I\sejtbiosz.html C:\Users\chrishor29\Desktop\LEARN\SejtBiosz\I\sejtbiosz.html 
copy C:\Kristof\MIRROR\LEARN\SejtBiosz\I\favicon.bmp C:\Users\chrishor29\Desktop\LEARN\SejtBiosz\I\favicon.bmp


git remote add origin
git pull origin master
git add .
git commit -m "make some changes"
git mv done/Biofizika tmp
git mv tmp done/BioFizika
git push origin master
Pause