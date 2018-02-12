const dnd = $('body');

var touchY;
dnd.on('touchstart', function(e) {
  touchY = e.pageY;
  console.log(touchY);
});

var clickY;
dnd.on('click', function(e) {
  clickY = e.pageY;
  console.log(clickY);
});


// const dnd = $('body');
// var currentElement;
// var touchY;
//
// dnd.on('click', function(e) {
//   currentElement = dnd;
//   clickY = e.pageY;
//   console.log(clickY);
// });
// dnd.addEventListener('touchend', function() {
//   currentElement = null;
// });
//
// document.addEventListener('touchmove', function(e) {
//   console.log(e.clientY);
//   if (e.clientY > startY) {
//     currentTop -= step;
//     ops.style.top = currentTop + 'vh';
//   }
// });
