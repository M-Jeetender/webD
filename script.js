

let outer = document.getElementsByClassName('outer-grid')[0];
let nav = document.getElementsByTagName('nav')[0];

console.log(outer.className);

function togglenav(){

   const outerGrid = document.querySelector('.outer-grid');
   outerGrid.classList.toggle('outer-grid-extended');

   const nav = document.querySelector('nav');
   nav.classList.toggle('hide-nav');

}
