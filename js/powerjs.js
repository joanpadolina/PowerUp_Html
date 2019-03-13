console.log('hi');


var navSide = document.querySelector('.navcontain');
var menuKnop = document.querySelector('.menu');
var sluitNav = document.querySelector('.sluitmenu');

menuKnop.addEventListener('click', function(){
  navSide.classList.toggle('show-nav');
});

sluitNav.addEventListener('click', function(){
  navSide.classList.toggle('show-nav');
});
