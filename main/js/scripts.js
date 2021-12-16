// document.addEventListener('ready', () => {
const animation = document.querySelector('.animation')

for (let i = 0; i < 30; i++) {
  const div = document.createElement('div');
  div.className = 'point'
  animation.appendChild(div)
}

document.querySelector(".wrap").addEventListener('mousemove', function(e) {
  let _w = window.innerWidth;
  let _mouseX = e.clientX;
  animation.style.left = `${(_w - _mouseX) / 80}px`
})
