const e="%2F**%20%40jsx%20createElement%20*%2F%0Aimport%20%7B%20createElement%2C%20render%2C%20reactive%2C%20atom%20%7D%20from%20'axii'%0Aimport%20Tree%20from%20'..%2Fsrc%2Ftree%2FTree.jsx'%0A%0Aconst%20data%20%3D%20reactive(%5B%0A%09%7B%0A%09%09title%3A%20'title1'%2C%0A%09%09key%3A%20'title1'%2C%0A%09%09children%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09title%3A%20'sub1'%2C%0A%09%09%09%09key%3A%20'sub1'%2C%0A%09%09%09%09children%20%3A%20%5B%7B%0A%09%09%09%09%09title%3A%20'sub1%20of%20sub1'%0A%09%09%09%09%7D%5D%0A%09%09%09%7D%0A%09%09%5D%0A%09%7D%2C%20%7B%0A%09%09title%3A%20'title2'%2C%0A%09%09key%3A%20'title2'%2C%0A%09%09children%3A%20%5B%7B%0A%09%09%09title%3A%20'sub1%20of%20title2'%2C%0A%09%09%09key%3A%20'sub1%20of%20title2'%0A%09%09%7D%5D%0A%09%7D%2C%20%7B%0A%09%09title%3A%20'title3'%2C%0A%09%09key%3A%20'title3'%2C%0A%09%7D%0A%5D)%0A%0Aconst%20activeKey%20%3D%20atom('sub1')%0A%0A%0A%0Arender(%3CTree%20data%3D%7Bdata%7D%20activeKey%3D%7BactiveKey%7D%2F%3E%2C%20document.getElementById('root'))%0A";export{e as content};
