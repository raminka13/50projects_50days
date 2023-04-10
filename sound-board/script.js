const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}

sounds.forEach((sound, index) => {
  const btn = document.createElement('button');
  btn.classList.add('button');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs();
    document.getElementById(sound).play();
    document.querySelector('body').style.backdropFilter = `blur(${6 + index * 3}px)`;
    setTimeout(() => {
      document.querySelector('body').style.backdropFilter = 'blur(0px)';
    }, 1800);
  });

  document.getElementById('buttons').appendChild(btn);
});
