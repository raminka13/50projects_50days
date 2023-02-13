const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}
jokeBtn.addEventListener('click', generateJoke);

function startTimer(duration, display) {
  let timer = duration; let minutes; let
    seconds;
  const int = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    display.textContent = `${minutes}:${seconds}`;
    timer -= 1;

    if (timer < 0) {
      clearInterval(int);
      generateJoke();
    }
  }, 1000);
}

window.onload = () => {
  const time = 5;
  const display = jokeEl;
  startTimer(time, display);
};
