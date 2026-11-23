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
      load('assets/manufacturer-rankings.json'),
      load('assets/manufacturer-logos/mapping.json')
    ]);
    function draw() {
      const year = yearSelect.value;
      const {total, months, bars: entries} = years[year];
      const period = months === 12 ? year : 'January–October ' + year;
      const maximum = Math.max(...entries.map(([, units]) => units));
      document.getElementById('manufacturerPeriod').textContent = period;
      summary.textContent = formatVehicleCount(total) + ' domestic new vehicles · Top 10 and Others';
      bars.replaceChildren();
      for (const [name, units] of entries) {
        const row = document.createElement('li');
        row.className = 'manufacturer-bar' + (name === 'Others' ? ' manufacturer-other' : '');
        row.style.setProperty('--ratio', units / maximum);
        row.innerHTML = '<div class="manufacturer-plot"><span class="manufacturer-value"></span><i class="manufacturer-fill"></i></div><div class="manufacturer-label"><div class="manufacturer-symbol" aria-hidden="true"></div><span></span></div>';
        row.querySelector('.manufacturer-value').textContent = formatVehicleCount(units);
        row.querySelector('.manufacturer-label > span').textContent = name;
        row.setAttribute('aria-label', name + ', ' + formatVehicleCount(units) + ' vehicles');
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
