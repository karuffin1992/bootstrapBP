function onLoad() {
  window.sr = ScrollReveal();

  sr.reveal('.navbar', {
    duration: 1500,
    origin: 'top',
    distance: '300px'
  });

  sr.reveal('.showcase-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
  });

  sr.reveal('.showcase-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
  });

  sr.reveal('.testimonial', {
    duration: 3000,
    origin: 'bottom',
    distance: '300px'
  });
}
