import os
f = open('gallery-seven.html','a')
f.write('<!DOCTYPE html>\n<html>\n<head>\n\t<title></title>\n\t<link rel="stylesheet" type="text/css" href="../style.css">\n'+
	'</head>\n<body>\n\t<div class=\'galleryContainer\'>'+
	'\n\t\t<div class=\'galleryMenu\'>'+
	'\n\t\t\t<ul>'+
	'\n\t\t\t\t<li><a href="../index.html">Home</a></li>'+
	'\n\t\t\t\t<li><a href=\'\'>Gallery</a></li>'+
	'\n\t\t\t\t<li><a href=\'\'>Gallery</a></li>'+
	'\n\t\t\t<ul>'+
	'\n\t\t</div>'+
	'\n\n\t\t<div class=\'imgContainer\'>')

for filename in os.listdir('gallery-seven'):
    if filename.endswith(".asm") or filename.endswith(".jpg"): 
    	f.write('\n\t\t\t<div class=\'imgWrapper\'>\n\t\t\t\t<span class=\'imgHelper\'></span>\n\t\t\t\t<img src=\''+filename+'\' />\n\t\t\t</div>')
	continue
    else:
        continue
f.write('\n\t\t</div>\n\t</div>\n</body>')
