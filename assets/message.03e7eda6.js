const e="%2F**%20%40jsx%20createElement%20*%2F%0Aimport%20%7B%20createElement%2C%20render%20%7D%20from%20'axii'%0Aimport%20message%20from%20'..%2Fsrc%2Fmessage%2Fmessage.jsx'%0A%0Afunction%20App()%20%7B%0A%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20message.success('asdfasdfsadf')%0A%20%20%20%20message.error('asdfasdfsadf')%0A%20%20%7D%2C%20100)%0A%0A%20%20return%20%3Cdiv%3E%0A%20%20%20%20%3Cbutton%20onClick%3D%7B()%20%3D%3E%20message.success('success')%7D%3Eshow%20success%20message%3C%2Fbutton%3E%0A%20%20%20%20%3Cbutton%20onClick%3D%7B()%20%3D%3E%20message.warning('warning')%7D%3Ewarning%3C%2Fbutton%3E%0A%20%20%20%20%3Cbutton%20onClick%3D%7B()%20%3D%3E%20message.info('info')%7D%3Einfo%3C%2Fbutton%3E%0A%20%20%20%20%3Cbutton%20onClick%3D%7B()%20%3D%3E%20message.error('error')%7D%3Eerror%3C%2Fbutton%3E%0A%20%20%20%20%3Cbutton%20onClick%3D%7B()%20%3D%3E%20message.show('anything')%7D%3Eshow%3C%2Fbutton%3E%0A%20%20%3C%2Fdiv%3E%0A%7D%0A%0Arender(%3CApp%20%2F%3E%2C%20document.getElementById('root'))%0A";export{e as content};
