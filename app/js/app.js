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