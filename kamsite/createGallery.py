import os
f = open('gallery.html','a')
f.write('<!DOCTYPE html>\n<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<div class=\'imgContainer\'>')

for filename in os.listdir('gallery3'):
    if filename.endswith(".asm") or filename.endswith(".jpg"): 
    	f.write('\n\t<div class=\'imgFlex\'>\n\t<img src=\''+filename+'\' />\n\t</div>')
	continue
    else:
        continue
