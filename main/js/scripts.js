// document.addEventListener('ready', () => {
  const animWrap = document.querySelector('.animation')
  console.log(animWrap)
  for (let i = 0; i < 30; i++) {
    const div = document.createElement('div');
    div.className = 'point'
    animWrap.appendChild(div)
  }
  
// })