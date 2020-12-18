// code from https://github.com/owenmcateer/Motus-Art

const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

if (screenWidth > screenHeight) document.body.classList.add('page--wider');
else document.body.classList.add('page--taller');