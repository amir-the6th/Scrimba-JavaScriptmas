const player = document.getElementById("player");
const iframe = document.querySelector('iframe');

function playSong(id) {
  // Challenge: Add code here to make the youtube player play the new YouTube song
  iframe.removeAttribute('hidden');
  player.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1&showinfo=0&controls=1&autohide=1&modestbranding=1`)
}