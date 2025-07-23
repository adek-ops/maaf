const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');

openBtn.addEventListener('click', () => {
  envelope.classList.toggle('open');
});