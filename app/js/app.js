//DOM-i18n
var langButton = document.querySelectorAll('.js-lang'),
    langActive = document.querySelector(".js-lang.active"),  
    deflang = 'en-US';  
var i18n = domI18n({       
  selector: '[data-translatable]',
  separator: ' // ',
  languages: ['en-US', 'ua'],  
  defaultLanguage: deflang
});
if(!langActive){
  langButton.forEach(button => {      
    if( button.name === deflang){
      langActive = button;        
    }
  });    
  langActive.classList.add("active");  
}else{
  i18n.changeLanguage(langActive.name);
} 

langButton.forEach(button => {
  button.addEventListener("click", changeLang);              
});



function changeLang(e){
  e.preventDefault();

  if ( e.target.name !== langActive.name ){

    langActive.classList.remove("active");
    e.target.classList.add("active");
    langActive = e.target;    
    
    i18n.changeLanguage(langActive.name);    
  }
}


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
  reset: true,
  mobile: true,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});
rev.reveal('.reveal',{
  viewFactor: 0.3,
  opacity: 0,  
  scale: 0.9,              
  origin: 'bottom',
  distance: '20px',
  duration: 1500,
  delay: 0, 
});

rev.reveal('.reveal-title',{
  viewFactor: 0.3,
  opacity: 0,  
  scale: 0,              
  origin: 'right',
  distance: '20px',
  duration: 1500,
  delay: 0,
});


// city-button & cityAtlas

const cityButton = document.querySelectorAll(".city-button");
const cityAtlas = document.querySelectorAll(".js-atlas");

if(cityAtlas&&(cityAtlas.length>0)&&cityButton&&(cityButton.length>0)) {
  var cityButtonActive = document.querySelector(".city-button.active"),
      cityAtlasOpen = document.querySelector(".js-atlas.open");  

  if(!cityButtonActive && !cityAtlasOpen){
    cityButtonActive = document.querySelectorAll(".city-button")[0];
    cityButtonActive.classList.add("active");
  }  

  if(cityButtonActive && !cityAtlasOpen){
    cityAtlas.forEach(atlas => {
      if( cityButtonActive.name === atlas.id){
        cityAtlasOpen = atlas;        
      }        
    });   
    cityAtlasOpen.classList.add("open");
  }

  if(!cityButtonActive && cityAtlasOpen){
    cityButton.forEach(button => {      
      if( cityAtlasOpen.id === button.name){
        cityButtonActive = button;        
      }
    });   
    cityButtonActive.classList.add("active");
  }  

  cityButton.forEach(button => {
    button.addEventListener("click", changeCityAtlas);              
  });
}

function changeCityAtlas(e) {  
  e.preventDefault();  
  if ( e.target.name !== cityAtlasOpen.id ){

    cityButtonActive.classList.remove("active");
    e.target.classList.add("active");
    cityButtonActive = e.target;    

    cityAtlasOpen.classList.remove("open");
    cityAtlas.forEach(function(city) {
      if (city.id===e.target.name) {
        city.classList.add("open");
        cityAtlasOpen = city;        
      }
    });
  }  
}


/*================== Full View ====================*/

var fullViewButton = document.querySelector('#full-view'); 
if (fullViewButton){
  fullViewButton.addEventListener("click", fullViewAnaliz);    
}


function fullViewAnaliz(e) { 
  e.preventDefault();  
  var linkFullView = document.querySelector('.js-atlas.open iframe').src;
  console.log(linkFullView);
  if(linkFullView){
    window.open(linkFullView); 
  }  
}


/*======================= index-link instruction-link===========================*/
var instructionLink = document.querySelector('#instruction-link'),
indexLink = document.querySelector('#index-link'),
instructionSection = document.querySelector('#instruction-section'),
indexSection = document.querySelector('#index-section');

indexLink.addEventListener("click", indexOpen); 
instructionLink.addEventListener("click", instructionOpen); 

function indexOpen(e){
  e.preventDefault();
  if(instructionSection && indexSection){
    if(!indexSection.classList.contains("open")){
      if(instructionSection.classList.contains("open")){
        instructionSection.classList.remove("open")
      }      
      indexSection.classList.add("open")
      window.scrollTo(0, 0);
      rev.reveal('.reveal',{
        viewFactor: 0.3,
        opacity: 0,  
        scale: 0.9,              
        origin: 'bottom',
        distance: '20px',
        duration: 1500,
        delay: 0, 
      });
      rev.reveal('.reveal-title',{
        viewFactor: 0.3,
        opacity: 0,  
        scale: 0,              
        origin: 'right',
        distance: '20px',
        duration: 1500,
        delay: 0,
      });      
    }    
  }    
}
function instructionOpen(e){
  e.preventDefault();
  if(instructionSection && indexSection){
    if(!instructionSection.classList.contains("open")){
      if(indexSection.classList.contains("open")){
        indexSection.classList.remove("open")
      }    
      instructionSection.classList.add("open");
      window.scrollTo(0, 0);
      rev.reveal('.reveal',{
        viewFactor: 0.3,
        opacity: 0,  
        scale: 0.9,              
        origin: 'bottom',
        distance: '20px',
        duration: 1500,
        delay: 0, 
      });
      rev.reveal('.reveal-title',{
        viewFactor: 0.3,
        opacity: 0,  
        scale: 0,              
        origin: 'right',
        distance: '20px',
        duration: 1500,
        delay: 0,
      });    
    }
  }     
}