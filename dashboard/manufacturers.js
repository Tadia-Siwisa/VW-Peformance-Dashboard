(async function () {
  const yearSelect = document.getElementById('manufacturerYear');
  const bars = document.getElementById('manufacturerBars');
  const summary = document.getElementById('manufacturerTotal');
  async function load(path) {
    const response = await fetch(path);
    if (!response.ok) throw new Error(path);
    return response.json();
  }
  try {
    const [years, marks] = await Promise.all([
      load('assets/manufacturer-comparisons.json'),
      load('assets/manufacturer-logos/mapping.json')
    ]);
    function draw() {
      const year = yearSelect.value;
      const {years: periods, months, totals, groups} = years[year];
      const range = periods.length === 1 ? year : periods[0] + '–' + year;
      document.getElementById('manufacturerPeriod').textContent =
        (months === 12 ? 'Full calendar years · ' : 'January–October · ') + range;
      summary.textContent = 'Top 10 by ' + year + ' domestic sales';
      const legend = document.getElementById('manufacturerLegend');
      legend.replaceChildren();
      periods.forEach((period, i) => {
        const item = document.createElement('span');
        item.className = 'manufacturer-year tone-' + i;
        item.textContent = period;
        legend.append(item);
      });
      const maximum = Math.max(...groups.flatMap(([, values]) => values));
      document.getElementById('manufacturerDetail').textContent = 'Select a bar for market share and year-on-year growth.';
      bars.replaceChildren();
      for (const [name, values] of groups) {
        const row = document.createElement('li');
        row.className = 'manufacturer-bar';
        row.innerHTML = '<div class="manufacturer-plot"></div><div class="manufacturer-label"><div class="manufacturer-symbol" aria-hidden="true"></div><span></span></div>';
        const plot = row.querySelector('.manufacturer-plot');
        values.forEach((units, i) => {
          const bar = document.createElement('div');
          bar.className = 'manufacturer-series tone-' + i;
          bar.style.setProperty('--ratio', (units || 0) / maximum);
          const value = units === null ? '—' : formatVehicleCount(units);
          let detail = name + ' · ' + periods[i] + ' · ';
          if (units === null) detail += 'No separate reported sales figure';
          else {
            detail += value + ' vehicles · ' + (100 * units / totals[i]).toFixed(2) + '% market share';
            if (i && values[i-1] > 0) {
              const growth = 100 * (units / values[i-1] - 1);
              detail += ' · ' + (growth > 0 ? '+' : '') + growth.toFixed(1) + '% year on year';
            }
          }
          bar.innerHTML = '<i class="manufacturer-fill"></i><span class="manufacturer-value"></span>';
          bar.lastElementChild.textContent = value;
          bar.title = detail;
          bar.tabIndex = 0;
          bar.setAttribute('aria-label', detail);
          const show = () => { document.getElementById('manufacturerDetail').textContent = detail; };
          for (const event of ['click','focus','pointerenter']) bar.addEventListener(event,show);
          plot.append(bar);
        });
        row.querySelector('.manufacturer-label > span').textContent = name;
        const symbol = row.querySelector('.manufacturer-symbol');
        const filename = marks[name]?.file;
        if (filename) {
          const image = new Image();
          image.alt = '';
          image.src = 'assets/manufacturer-logos/' + filename;
          symbol.append(image);
        }
        if (!symbol.children.length) {
          const mark = document.createElement('span');
          mark.textContent = name === 'Others' ? '•••' : '◉ ◉';
          symbol.append(mark);
        }
        bars.append(row);
      }
    }
    for (const year of Object.keys(years).sort().reverse()) yearSelect.add(new Option(year, year));
    yearSelect.disabled = false;
    yearSelect.addEventListener('change', draw);
    draw();
  } catch {
    summary.textContent = 'The chart could not load. Open the Excel workbook below for the sales figures.';
  }
})();
