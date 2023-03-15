/* eslint-disable no-tabs */
/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */
const app = document.querySelector('#app');
const lang = document.querySelector('#lang');
let config = {};

function getWeek(cur) {
  const date = new Date(cur.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  const week = new Date(date.getFullYear(), 0, 4);
  return 1 + Math.round(((date.getTime() - week.getTime()) / 86400000 - 3 + (week.getDay() + 6) % 7) / 7);
}

function kalEl(settings = {}) {
  const pad = (val) => (val + 1).toString().padStart(2, '0');

  const render = (date, locale) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const numOfDays = new Date(year, month + 1, 0).getDate();
    const renderToday = (year === config.today.year) && (month === config.today.month);

    const weekdays = (firstDay, locale) => {
      const date = new Date(0);
      const arr = [...Array(7).keys()].map((i) => {
        date.setDate(5 + i);
        return {
          long: new Intl.DateTimeFormat([locale], { weekday: 'long' }).format(date),
          short: new Intl.DateTimeFormat([locale], { weekday: 'short' }).format(date),
        };
      });
      for (let i = 0; i < 8 - firstDay; i += 1) arr.splice(0, 0, arr.pop());
      return arr;
    };

    return `<kal-el data-firstday="${config.info.firstDay}">
			<time datetime="${year}-${(pad(month))}">${new Intl.DateTimeFormat(locale, { month: 'long' }).format(date)} <i>${year}</i></time>
			<ul>${weekdays(config.info.firstDay, locale).map((name) => `<li><abbr title="${name.long}">${name.short}</abbr></li>`).join('')}</ul>
			<ol>
			${[...Array(numOfDays).keys()].map((i) => {
    const cur = new Date(year, month, i + 1);
    let day = cur.getDay(); if (day === 0) day = 7;
    const today = renderToday && (config.today.day === i + 1) ? ' data-today' : '';
    return `<li data-day="${day}"${today}${i === 0 || day === config.info.firstDay ? ` data-weeknumber="${new Intl.NumberFormat(locale).format(getWeek(cur))}"` : ''}${config.info.weekend.includes(day) ? ' data-weekend' : ''}>
					<time datetime="${year}-${(pad(month))}-${pad(i)}" tabindex="0">${new Intl.NumberFormat(locale).format(i + 1)}</time>
				</li>`;
  }).join('')}
			</ol>
		</kal-el>`;
  };

  const today = new Date();
  config = { locale: (document.documentElement.getAttribute('lang') || 'en-US'), today: { day: today.getDate(), month: today.getMonth(), year: today.getFullYear() }, ...settings };
  const date = config.date ? new Date(config.date) : today;
  if (!config.info) config.info = new Intl.Locale(config.locale).weekInfo || { firstDay: 7, weekend: [6, 7] };
  return config.year ? [...Array(12).keys()].map((i) => render(new Date(date.getFullYear(), i, date.getDate()), config.locale, date.getMonth())).join('') : render(date, config.locale);
}

/* Init Demo */
app.innerHTML = kalEl(app.dataset);
lang.addEventListener('change', () => {
  document.documentElement.lang = lang.value;
  app.innerHTML = kalEl(app.dataset);
});