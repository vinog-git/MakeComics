#COMIC book reading from images
Create PDF from images / load images to read as a comic.

Using Angular JS load all images with the same file name pattern for comic book reading experience.

#Eg.
RC0001.png

RC0002.png

RC0003.png

#standAloneApp.html:
Download the standAloneApp.html -> open it in a browser and the you'd not have to install xampp or use local host that way.

#Steps:

#1. Download
Download the index.html & angular.min.js files and place them in the same folder as the images. Make sure you have the entire folder in your localhost i.e. xampp\htdocs\... (once done, your folder will contain all your comics issue' images, index.html & angular.min.js)

#2. Rename
Rename the files so that their naming pattern is same
i) Select all images


ii) Hit F2 for renaming


iii) Enter a new file name (eg., RCimages.png)

iv) Ensure the order of images is correct
Note that the images will be renamed as RCimages.png, RCimages (2).png, RCimages (3).png and so on.

#3. Open the index.html through localhost.
![Reference Image](https://raw.githubusercontent.com/vinog-git/App/master/MakeComics/ref-img.jpg)
#Values / Parameters
From this example,

1) Image file template name will be 'RCimages' (without the quotes).

2) Extension is 'png' (without quotes or preceeding dot)

3) Start From 2

4) Number of pages 3

![Reference Image - 2](https://raw.githubusercontent.com/vinog-git/App/master/MakeComics/ref-img-2.jpg)
#NOTE: 
While renaming the files, select the last file then 'SHIFT + select the first image file', then rename to maintain order.

Once the images are loaded, print / Save as PDF like a normal webpage. While printing as pdf to avoid image breaking in two pages, adjust the image size using the slider given.

#Disclaimer:
Images used are downloaded from the internet. I do not hold or claim any right over the images referred to. 
