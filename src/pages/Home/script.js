document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      if (isElementInViewport(section)) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
});
  
function isElementInViewport(element) {
const rect = element.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}