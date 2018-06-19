// HEADROOM.JS
var headroomEl = document.querySelector("header");
var options = {
  offset : 0,
  tolerance: { up: 5, down: 10 }
};
var headroom  = new Headroom(headroomEl, options);
headroom.init();

//PARALLAX
const p0 = new Parallax('.parallax_scene0',{
  offsetYBounds: 50,
  intensity: 20,
  center: 0.5,
  safeHeight: 0.15
}).init();

const p1 = new Parallax('.parallax_scene1',{
  offsetYBounds: 50,
  intensity: 50,
  center: 0.5,
  safeHeight: 0.15
}).init();

const p2 = new Parallax('.parallax_scene2',{
  offsetYBounds: 50,
  intensity: 50,
  center: 0.5,
  safeHeight: 0.15
}).init();

//VANILLA-MODAL
const vanillaModal = new VanillaModal.default({
  modal: '.modal',
  modalInner: '.modal-inner',
  modalContent: '.modal-content',
  open: '[data-modal-open]',
  close: '[data-modal-close]',
  page: 'body',
  loadClass: 'vanilla-modal',
  class: 'modal-visible',
  clickOutside: true,
  closeKeys: [27],
  transitions: true,
  onBeforeOpen: null,
  onBeforeClose: null,
  onOpen: null,
  onClose: null
})

//REVEAL
const rev = new ScrollReveal({
  reset: false,
  mobile: true,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});
rev.reveal('.reveal',{
  viewFactor: 0.3,
  opacity: 0,  
  scale: 0.9,              
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 100, 
});

rev.reveal('.reveal-title',{
  viewFactor: 0.3,
  opacity: 0,  
  scale: 0.5,              
  origin: 'right',
  distance: '100px',
  duration: 1500,
  delay: 0,
});