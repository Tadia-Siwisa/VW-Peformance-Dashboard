(async function () {
  const byId = id => document.getElementById(id);
  const numbers = new Intl.NumberFormat('en-ZA');
  const colors = ['#002d55','#147d9c','#ec9a42','#725486','#4c8266','#b55049','#717faa','#ad794e','#43969a','#995e7c','#aab4c0'];
  const signed = (n, digits) => (n > 0 ? '+' : '') + n.toFixed(digits);
  async function load(path) {
    const response = await fetch('assets/' + path);
    if (!response.ok) throw new Error(path);
    return response.json();
  }
  function setupSelect(select, records, optionText, draw) {
    for (const year of Object.keys(records).sort().reverse()) select.add(new Option(optionText(year),year));
    select.disabled = false;
    select.addEventListener('change', () => draw(select.value));
    draw(select.value);
  }
  function add(parent, tag, text) {
    const el = document.createElement(tag);
    if (text !== undefined) el.textContent = text;
    parent.append(el);
    return el;
  }
  try {
    const [years, comparisons, logos] = await Promise.all([
      load('manufacturer-rankings.json'), load('manufacturer-growth.json'), load('manufacturer-logos/mapping.json')
    ]);
    setupSelect(byId('shareYear'), years, year => year, year => {
      const {total, months, bars} = years[year];
      const period = months === 12 ? year : 'January–October ' + year;
      byId('sharePeriod').textContent = period;
      byId('shareTotal').textContent = numbers.format(total) + ' domestic new vehicles';
      const legend = byId('localShareLegend');
      legend.replaceChildren();
      const svg = byId('localPie');
      svg.replaceChildren();
      svg.setAttribute('aria-label', 'Manufacturer market shares for ' + period);
      const svgNS = 'http://www.w3.org/2000/svg';
      let cumulative = 0;
      for (const [i, [name, units]] of bars.entries()) {
        const point = value => {
          const angle = 2 * Math.PI * value / total - Math.PI / 2;
          return [100 + 98 * Math.cos(angle), 100 + 98 * Math.sin(angle)].join(' ');
        };
        const start = point(cumulative);
        cumulative += units;
        const share = 100 * units / total;
        const slice = document.createElementNS(svgNS,'path');
        slice.setAttribute('d', 'M 100 100 L ' + start + ' A 98 98 0 ' + (share > 50 ? 1 : 0) + ' 1 ' + point(cumulative) + ' Z');
        slice.setAttribute('fill', colors[i]);
        const detail = name + ' · ' + share.toFixed(1) + '% · ' + numbers.format(units) + ' vehicles';
        const title = document.createElementNS(svgNS,'title');
        title.textContent = detail;
        slice.append(title);
        svg.append(slice);
        const row = add(legend,'li');
        const button = add(row,'button');
        button.type = 'button';
        button.style.setProperty('--slice', colors[i]);
        button.setAttribute('aria-label',detail);
        button.setAttribute('aria-pressed','false');
        add(button,'i').setAttribute('aria-hidden','true');
        add(button,'span',name);
        add(button,'strong',share.toFixed(1) + '%');
        function select() {
          const active = button.getAttribute('aria-pressed') !== 'true';
          for (const other of legend.querySelectorAll('button')) other.setAttribute('aria-pressed','false');
          for (const other of svg.children) other.style.opacity = active && other !== slice ? '.55' : '1';
          button.setAttribute('aria-pressed',String(active));
          byId('shareTotal').textContent = active ? detail : numbers.format(total) + ' domestic new vehicles';
        }
        slice.addEventListener('click',select);
        button.addEventListener('click',select);
      }
    });
    setupSelect(byId('gainingYears'), comparisons, y => y + ' vs ' + (y - 1), year => {
      const {months, priorMarket, currentMarket, leaders} = comparisons[year];
      const benchmark = 100 * (currentMarket / priorMarket - 1);
      const period = months === 12 ? 'Full calendar years' : 'January–October in both years';
      byId('gainingBenchmark').textContent = period + ' · ' + year + ' vs ' + (year - 1) + ' · Market sales growth ' + signed(benchmark,1) + '%';
      const body = byId('gainingTable').tBodies[0];
      body.replaceChildren();
      for (const [name, prior, current] of leaders) {
        const row = add(body,'tr');
        const label = add(row,'th');
        label.scope = 'row';
        if (logos[name]?.file) {
          const image = add(label,'img');
          image.alt = '';
          image.src = 'assets/manufacturer-logos/' + logos[name].file;
        } else {
          const mark = add(label,'span','NC2');
          mark.className = 'text-mark';
          mark.setAttribute('aria-hidden','true');
        }
        add(label,'span',name);
        const growth = 100 * (current / prior - 1);
        const cell = add(row,'td');
        add(cell,'span',signed(growth,1) + '%').className = 'gain-value';
        add(cell,'small',numbers.format(prior) + ' → ' + numbers.format(current));
        add(row,'td',signed(100 * (current / currentMarket - prior / priorMarket),2) + ' pp');
        add(row,'td',signed(growth - benchmark,1) + ' pp');
      }
    });
  } catch {
    byId('shareTotal').textContent = 'Unable to load market share data. Reload to try again.';
    byId('gainingBenchmark').textContent = 'The source workbook is available below.';
  }
})();
