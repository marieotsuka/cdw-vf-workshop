
// This script updates the target text 
// depending on the position of the cursor

const animationTarget = document.getElementById('a-jsanimate');
const maxwidth = 150; 
const minwidth = 50;
const maxwght = 900;
const minwght = 100;

function updateText(e) {
  //get the x,y of the mouse in terms of a percentage of the window
  let widthRatio = e.clientX / window.innerWidth;   
  let heightRatio = e.clientY / window.innerHeight; 

  //apply the percentage along the axis range of the variable fonts
  let width =  widthRatio * (maxwidth - minwidth) + minwidth;
  let weight =  heightRatio * (maxwght - minwght) + minwght;

  //apply to the target element by updating the CSS variable
  animationTarget.style.setProperty('--wdth', width);
  animationTarget.style.setProperty('--wght', weight);
}

window.addEventListener("mousemove", updateText)