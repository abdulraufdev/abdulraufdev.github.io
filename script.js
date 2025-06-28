let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if(isDark){
  document.documentElement.classList.toggle("second");
}



// window.addEventListener('scroll', () => {
//   document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false)