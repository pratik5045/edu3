var p = gsap.timeline();

p.from('.inner-text',{
  y:100,
  duration:1.5,
  opacity:0
})

function animateImages() {
  gsap.from('.circ', {
    duration: 1.5,
    opacity: 0,
    scale: 0,
    delay: 0.1,
    stagger: 1,
    onComplete: () => {
      gsap.set('.circ', { display: 'none' });
      gsap.set('.circ1',{display: 'block'});
      animateSecondImage();
    }
  });
}

function animateSecondImage() {
  gsap.from('.circ1', {
    duration: 1.5,
    opacity: 0,
    scale: 0,
    delay: 0.1,
    stagger: 1,
    onComplete: () => {
      gsap.set('.circ1', { display: 'none' });
      gsap.set('.circ', { display: 'block' });
      animateImages();
    }
  });
}
animateImages();