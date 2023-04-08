
const animationTarget = document.getElementById('a-jsanimate');
const maxwidth = 150;
const minwidth = 50;
const maxwght = 900;
const minwght = 100;

function updateText(e) {
  widthRatio = e.clientX / window.innerWidth;
  heightRatio = e.clientY / window.innerHeight;
  width =  widthRatio * (maxwidth - minwidth) + minwidth;
  weight =  heightRatio * (maxwght - minwght) + minwght;
  animationTarget.style.setProperty('--wdth', width);
  animationTarget.style.setProperty('--wght', weight);
}

window.addEventListener("mousemove", updateText)