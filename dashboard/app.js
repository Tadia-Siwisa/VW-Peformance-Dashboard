const reportSources={"2025":[{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/02/20250203-Flash-Report-January-2025.pdf","market":"https://naamsa.net/wp-content/uploads/2026/02/20260202-Flash-Report-January-2026.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/03/20250303-Flash-Report-February-2025.pdf","market":"https://naamsa.net/wp-content/uploads/2026/03/20260302-Flash-Report-February-2026.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/04/FLASH_STD_202503-updated.pdf","market":"https://naamsa.net/wp-content/uploads/2026/04/20260401-Flash-Report-March-2026-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/05/20250502-Flash-Report-April-2025.pdf","market":"https://naamsa.net/wp-content/uploads/2026/05/FLASH_STD_202604-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/06/20250602-Flash-Report-Standard.pdf","market":"https://naamsa.net/wp-content/uploads/2026/06/20260601-Flash-Report-May-2026-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/07/20250701-Flash-Report-Standard.pdf","market":"https://naamsa.net/wp-content/uploads/2026/07/20260701-Flash-Report-June-2026.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/08/FLASH_STD_202507.pdf","market":"https://naamsa.net/wp-content/uploads/2026/08/FLASH_STD_202607-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/09/FLASH_STD_202508.pdf","market":"https://naamsa.net/wp-content/uploads/2026/09/20260901-Flash-Report-August-2026.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/10/20251002-Flash-Report-September-2025-Standard.pdf","market":"https://naamsa.net/wp-content/uploads/2026/10/20261001-Flash-Report-September-2026-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/11/20251104-Flash-Report-October-2025-Standard.pdf","market":"https://naamsa.net/wp-content/uploads/2026/11/FLASH_STD_202610.pdf"}],"2026":[{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/02/20260202-Flash-Report-January-2026.pdf","market":"https://naamsa.net/wp-content/uploads/2026/03/20260302-Flash-Report-February-2026.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/03/20260302-Flash-Report-February-2026.pdf","market":"https://naamsa.net/wp-content/uploads/2026/04/20260401-Flash-Report-March-2026-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/04/20260401-Flash-Report-March-2026-1.pdf","market":"https://naamsa.net/wp-content/uploads/2026/05/FLASH_STD_202604-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/05/FLASH_STD_202604-1.pdf","market":"https://naamsa.net/wp-content/uploads/2026/06/20260601-Flash-Report-May-2026-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/06/20260601-Flash-Report-May-2026-1.pdf","market":"https://naamsa.net/wp-content/uploads/2026/07/20260701-Flash-Report-June-2026.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/07/20260701-Flash-Report-June-2026.pdf","market":"https://naamsa.net/wp-content/uploads/2026/08/FLASH_STD_202607-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/08/FLASH_STD_202607-1.pdf","market":"https://naamsa.net/wp-content/uploads/2026/09/20260901-Flash-Report-August-2026.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/09/20260901-Flash-Report-August-2026.pdf","market":"https://naamsa.net/wp-content/uploads/2026/10/20261001-Flash-Report-September-2026-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/10/20261001-Flash-Report-September-2026-1.pdf","market":"https://naamsa.net/wp-content/uploads/2026/11/FLASH_STD_202610.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/11/FLASH_STD_202610.pdf","market":"https://naamsa.net/wp-content/uploads/2026/11/FLASH_STD_202610.pdf"}]};
const months=['January','February','March','April','May','June','July','August','September','October'];
const data={"2025":[[5676,12152,6399,1913,46594],[5249,11743,6044,1924,47994],[4913,11660,5284,1902,49500],[3973,10363,5977,1852,42467],[4582,10330,5536,1995,45287],[4973,11690,5221,2101,47269],[5738,12694,6257,2160,51558],[5521,13276,6534,2228,51960],[5763,14146,6072,2264,54706],[6221,13559,6890,2210,56051]],"2026":[[4774,11786,6410,2258,50521],[4895,12272,6562,2312,53383],[5574,13323,5047,2390,58064],[4814,10188,5363,2462,47892],[5295,10667,5546,2569,50987],[5613,12417,5689,2602,54405],[5799,14142,5994,2709,57733],[5668,13814,6505,2763,57761],[5968,15366,6668,3004,61656],[6515,14495,7292,2754,61890]]};
function formatVehicleCount(count) {
 return Math.abs(count) < 1000 ? String(count) : Number((count / 1000).toFixed(1)) + 'K';
}
const fmt=formatVehicleCount,pct=n=>n.toFixed(1)+'%',signed=n=>(n>=0?'+':'')+pct(n),growth=(i,k)=>100*(data[2026][i][k]/data[2025][i][k]-1);
// Rows contain VW Group domestic sales and the Local Market series for the same month.
const vwPeriods = {"2012":[[9803,48203],[9002,52388],[9153,56152],[7168,42608],[8835,50247],[8523,51872],[9409,54076],[9947,56270],[9512,55093],[10125,57844],[9056,53144],[7852,46016]],"2013":[[10511,56899],[9100,53187],[9337,55450],[9342,51498],[9644,54490],[10620,54088],[10613,58561],[8910,56489],[8961,54571],[8748,56608],[7765,50630],[8172,46482]],"2014":[[10064,52948],[9383,51784],[8800,55440],[8075,46016],[8358,49449],[9020,52785],[9798,57636],[8617,55722],[9967,60782],[9057,59335],[7491,51096],[9179,51421]],"2015":[[8342,52228],[8367,52385],[8361,55389],[7157,44469],[7564,47832],[6934,50250],[8475,54105],[8472,50985],[9586,55303],[8883,54239],[7170,51338],[8869,49158]],"2016":[[8714,48514],[7595,48144],[7360,47514],[6262,40348],[6678,42912],[7170,44932],[6814,44870],[7648,46131],[8000,47357],[8055,48782],[6197,46397],[6082,41644]],"2017":[[8454,50386],[8176,48201],[7360,48698],[5761,35086],[6386,41962],[7447,45332],[7386,46671],[7299,49198],[8012,50644],[7898,51022],[7438,49751],[5343,40751]],"2018":[[7070,45772],[7519,46267],[7541,49230],[6261,36528],[6524,42950],[6715,46663],[7691,47856],[7932,47977],[8553,49630],[8983,51856],[8503,47478],[6594,40020]],"2019":[[7318,42956],[7529,43805],[6754,47695],[5961,36787],[6333,40428],[7234,45953],[7617,46042],[7271,45484],[8641,49140],[9527,51968],[8317,44670],[6850,41683]],"2020":[[7944,40413],[7674,43296],[5499,33546],[0,574],[2749,12874],[4448,31643],[5075,32405],[5181,33259],[5458,37237],[6365,38694],[6950,39015],[6139,37250]],"2021":[[5857,34639],[6652,37369],[6301,43423],[6017,35591],[5579,38358],[5530,38131],[5078,33312],[6930,41533],[7029,43147],[5975,41251],[5498,41795],[5131,35944]],"2022":[[5393,41503],[6153,44224],[6433,50465],[5084,37195],[4778,39101],[5672,41052],[6204,42822],[6693,47155],[6750,47984],[4904,46350],[6406,49986],[5331,41721]],"2023":[[5081,43294],[5288,45162],[6139,50114],[4644,37358],[5259,43242],[5578,46603],[5797,43572],[5972,45854],[6316,45970],[6595,45418],[5513,44927],[5274,40250]],"2024":[[5522,42023],[5333,44723],[5219,43989],[4758,37899],[4939,37139],[5514,39850],[6178,44452],[5645,43692],[5885,44000],[6340,48222],[6321,48783],[4832,41101]],"2025":[[5676,46594],[5249,47994],[4913,49500],[3973,42467],[4582,45287],[4973,47269],[5738,51558],[5521,51960],[5763,54706],[6221,56051],[6044,54765],[5014,48980]],"2026":[[4774,50521],[4895,53383],[5574,58064],[4814,47892],[5295,50987],[5613,54405],[5799,57733],[5668,57761],[5968,61656],[6515,61890]]};
const calendarMonths = [...months, 'November', 'December'];
const vwYears = Object.keys(vwPeriods).reverse();
const yearOptions = vwYears.map(y => '<option>'+y+'</option>').join('');
const month = document.getElementById('month');
const kpiYear = document.getElementById('vwKpiYear');
kpiYear.innerHTML = yearOptions;
function selectKpiMonths() {
 const count = vwPeriods[kpiYear.value].length;
 const index = month.value === '' ? count - 1 : Math.min(Number(month.value), count - 1);
 month.innerHTML = calendarMonths.slice(0,count).map((name,i) => '<option value="'+i+'">'+name+'</option>').join('');
 month.value = String(index);
 update();
}
function update() {
 const y = Number(kpiYear.value), i = Number(month.value);
 const [sales, market] = vwPeriods[y][i], prior = vwPeriods[y-1]?.[i];
 const name = calendarMonths[i], share = 100 * sales / market;
 const compare = name+' '+(y-1), unavailable = 'Prior-year month unavailable';
 const salesGrowth = prior?.[0] > 0 ? 100*(sales/prior[0]-1) : null;
 const marketGrowth = prior ? 100*(market/prior[1]-1) : null;
 const oldShare = prior ? 100*prior[0]/prior[1] : null;
 const yearRows = vwPeriods[y];
 const yearSales = yearRows.reduce((total, row) => total + row[0], 0);
 const yearPeriod = yearRows.length === 12 ? 'Full year' : 'January–'+calendarMonths[yearRows.length-1];
 const card = (label,value,delta,note) => '<div class="kpi"><div class="label">'+label+'</div><div class="value">'+value+'</div><div class="delta">'+delta+'</div><div class="muted">'+note+'</div></div>';
 document.getElementById('kpis').innerHTML =
  card('Volkswagen Group sales',fmt(sales),salesGrowth===null?'Year-on-year rate unavailable':signed(salesGrowth)+' year on year',prior?compare+': '+fmt(prior[0]):unavailable)+
  card('Volkswagen Group sales · '+y,fmt(yearSales),yearPeriod+' '+y,'Domestic new vehicles sold')+
  card('Volkswagen market share',pct(share),prior?((share-oldShare)>=0?'+':'')+(share-oldShare).toFixed(2)+' percentage points':'',prior?compare+': '+pct(oldShare):unavailable);
 document.getElementById('takeaway').innerHTML='<li>'+name+' '+y+': Volkswagen Group accounted for '+fmt(sales)+' of '+fmt(market)+' domestic sales.</li>'+
  (salesGrowth===null?'':'<li>Volkswagen sales growth '+(salesGrowth>=marketGrowth?'exceeded':'trailed')+' market growth by '+Math.abs(salesGrowth-marketGrowth).toFixed(1)+' percentage points.</li>')+
  (i===3 && (y===2020||y===2021)?'<li>April 2020 is recorded as zero after reconciliation of a dash in the source report.</li>':'');
}
kpiYear.addEventListener('change',selectKpiMonths);
month.addEventListener('change',update);
selectKpiMonths();
function arrow(n){return `<span class="trend ${n>=0?'up':'down'}" aria-label="${n>=0?'Increase':'Decrease'}">${n>=0?'↑':'↓'}</span>`}
// Consistent markers and line samples make each series distinguishable without relying on color.
// All line charts use solid strokes and consistent, solid circular markers.
// Consistent filled circle markers and solid legend lines for all data series.
function svgMarker(z,x,y,size){
 return '<circle cx="'+x+'" cy="'+y+'" r="'+size+'" fill="'+z.color+'" stroke="'+z.color+'" stroke-width="1" style="fill:'+z.color+';stroke:'+z.color+'"/>';
}
function legendSwatch(z){
 return '<svg class="legend-line" width="46" height="20" viewBox="0 0 46 20" aria-hidden="true"><line x1="2" x2="44" y1="10" y2="10" stroke="'+z.color+'" stroke-width="2.7" stroke-dasharray="none"/>'+svgMarker(z,23,10,4.4)+'</svg>';
}
function chart(id,series,min,max,step,unit,readout,labels=months,title='Monthly sales growth'){
 const dense=series.length>=3,W=1120,L=82,R=35,T=dense?150:48,bottom=dense?430:345,monthY=bottom+34,H=monthY+38;
 const x=i=>L+i*(W-L-R)/(labels.length-1),y=v=>T+(max-v)*(bottom-T)/(max-min);
 const value=v=>v===null?'Unavailable':unit==='%'?signed(v):fmt(v);
 let s='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+title+'">';
 s+='<text x="'+L+'" y="'+(T-16)+'">'+unit+'</text>';
 for(let v=min;v<=max+step*.001;v+=step){
  s+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+y(v)+'" y2="'+y(v)+'" stroke="'+(v===0?'#a6b1be':'#e7ecf2')+'"/>';
  s+='<text x="'+(L-12)+'" y="'+(y(v)+4)+'" text-anchor="end">'+fmt(v)+(unit==='%'?'%':'')+'</text>';
 }
 labels.forEach((m,i)=>{s+='<text class="month-label" data-month="'+i+'" x="'+x(i)+'" y="'+monthY+'" text-anchor="middle">'+(/^\d{4}$/.test(m)?m:m.slice(0,3))+'</text>';});
 series.forEach((z,j)=>{
  s+='<path d="'+z.values.map((v,i)=>v===null?'':((i===0||z.values[i-1]===null)?'M':'L')+x(i)+','+y(v)).join(' ')+'" fill="none" stroke="'+z.color+'" class="series-line" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.7" stroke-dasharray="none" style="stroke-dasharray:none"/>';
  z.values.forEach((v,i)=>{
   if(v===null)return;
   s+='<g>'+svgMarker(z,x(i),y(v),4.8)+'<title>'+labels[i]+' · '+z.name+': '+value(v)+'</title></g>';
   if(!dense){
    const other=series.length===2?series[1-j].values[i]:null;
    const above=other===null||v>=other;
    const ly=Math.max(T+15,Math.min(bottom-9,y(v)+(above?-19:23)));
    s+='<text class="point-label" x="'+(id==='salesChart'&&i===0?x(i)+4:x(i))+'" y="'+ly+'" text-anchor="'+(id==='salesChart'&&i===0?'start':'middle')+'" style="fill:'+z.color+'">'+value(v)+'</text>';
   }
  });
 });
 if(dense)s+='<g class="focus-overlay" style="display:none" aria-hidden="true" pointer-events="none"></g>';
 labels.forEach((m,i)=>{
  const aria=series.map(z=>z.name+': '+value(z.values[i])+(unit==='%'?'':' vehicles')).join('; ');
  s+='<rect class="hit" data-i="'+i+'" tabindex="0" role="button" aria-label="'+m+' - '+aria+'" x="'+(x(i)-(W-L-R)/(2*(labels.length-1)))+'" y="'+T+'" width="'+((W-L-R)/(labels.length-1))+'" height="'+(monthY-T+12)+'" fill="transparent"/>';
 });
 s+='</svg>';
 const el=document.getElementById(id);el.innerHTML=s;
 const overlay=dense?el.querySelector('.focus-overlay'):null;
 let pinned=null;
 function showMonth(i){
  if(!overlay)return;
  const ranked=unit==='Vehicles'?[...series].sort((a,b)=>b.values[i]-a.values[i]||a.name.localeCompare(b.name)):series;
  const heading=labels[i]+': '+(unit==='%'?'Year-on-year growth':'Domestic sales');
  const panelHeight=51+ranked.length*30;

  let g='<line class="focus-guide" x1="'+x(i)+'" x2="'+x(i)+'" y1="'+T+'" y2="'+bottom+'"/>';
  series.forEach(z=>{
   g+='<circle class="focus-ring" cx="'+x(i)+'" cy="'+y(z.values[i])+'" r="8.5" fill="'+z.color+'" stroke="#fff" stroke-width="2.5" style="fill:'+z.color+';stroke:#fff"/>';
  });

  // Render one column: colored bullet, "year: exact number", with highest sales first.
  // Measure real SVG text widths before sizing and positioning the panel.
  g+='<g class="focus-tooltip">';
  g+='<rect class="focus-panel" x="0" y="9" width="300" height="'+panelHeight+'" rx="14" fill="#fff" stroke="#c7d3e2" stroke-width="1.4" style="fill:#fff;stroke:#c7d3e2"/>';
  g+='<text class="focus-heading" x="17" y="38" fill="#162539" style="fill:#162539;font-size:18px;font-weight:750">'+heading+'</text>';
  ranked.forEach((z,j)=>{
   const ty=70+j*30;
   const name=unit==='%'?(z.name==='Total market'?'Market':'VW Group'):z.name;
   g+='<circle cx="23" cy="'+(ty-5)+'" r="5" fill="'+z.color+'" style="fill:'+z.color+'"/>';
   g+='<text class="focus-value" x="38" y="'+ty+'" fill="#162539" style="fill:#162539;font-size:17px;font-weight:750">'+name+': '+value(z.values[i])+'</text>';
  });
  g+='</g>';
  overlay.innerHTML=g;
  overlay.style.display='';

  const tip=overlay.querySelector('.focus-tooltip');
  const titleWidth=tip.querySelector('.focus-heading').getComputedTextLength();
  const entryWidths=[...tip.querySelectorAll('.focus-value')].map(el=>el.getComputedTextLength()+38);
  const panelWidth=Math.ceil(Math.max(titleWidth+34,...entryWidths)+1);
  const left=Math.max(L,Math.min(x(i)-panelWidth/2,W-R-panelWidth));
  tip.querySelector('.focus-panel').setAttribute('width',String(panelWidth));
  tip.setAttribute('transform','translate('+left+',0)');
 }
 function restore(){if(!overlay)return;if(pinned===null){overlay.style.display='none';overlay.innerHTML='';}else showMonth(pinned);}
 el.querySelectorAll('.hit').forEach(hit=>{
  const i=+hit.dataset.i;
  function choose(){
   pinned=i;if(dense)showMonth(i);
   if(id==='salesChart'){document.getElementById(readout).textContent=labels[i]+' · '+series[0].name+': '+fmt(series[0].values[i])+' vehicles';return;}
   if(id==='growthChart'){selectedGrowthMonth=i;renderGrowthReadout(series,i);return;}
   document.getElementById(readout).textContent=labels[i]+' · '+series.map(z=>z.name+': '+value(z.values[i])).join('  | ');
  }
  hit.addEventListener('pointerenter',()=>{if(dense)showMonth(i);});
  hit.addEventListener('pointerleave',restore);
  hit.addEventListener('focus',()=>{if(dense)showMonth(i);});
  hit.addEventListener('blur',restore);
  hit.addEventListener('click',choose);
  hit.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();choose();}});
 });
}
const salesYear = document.getElementById('vwSalesYear');
salesYear.innerHTML = yearOptions;
function drawSales() {
 const year = salesYear.value;
 const values = vwPeriods[year].map(row => row[0]);
 const labels = calendarMonths.slice(0,values.length);
 const name = 'VW Group '+year;
 const step = Math.max(1000,Math.ceil(Math.max(...values)/5000)*1000);
 document.getElementById('salesModeNote').textContent = labels[0]+'–'+labels.at(-1)+' '+year;
 document.getElementById('salesReadout').textContent = '';
 chart('salesChart',[{name,color:'#001e50',values}],0,Math.ceil(Math.max(...values)/step)*step,step,'Vehicles','salesReadout',labels,name);
}
salesYear.addEventListener('change',drawSales);
drawSales();

const fullSalesYears = Object.keys(vwPeriods).filter(year => vwPeriods[year].length === 12);
const annualSales = fullSalesYears.map(year => vwPeriods[year].reduce((sum, row) => sum + row[0], 0));
chart('annualSalesChart', [{name: 'VW Group', color: '#001e50', values: annualSales}],
 0, Math.ceil(Math.max(...annualSales) / 20000) * 20000, 20000, 'Vehicles',
 'annualSalesReadout', fullSalesYears, 'VW Group SA annual domestic sales');

let selectedGrowthMonth=0;
const growthPeriod=document.querySelector('#growthPeriod');
growthPeriod.replaceChildren(...Object.keys(vwPeriods).filter(year => vwPeriods[year-1]).map(year => new Option(year+' versus '+(year-1),year)));
growthPeriod.value = vwYears[0];
function growthCount(year,i,col){return vwPeriods[year][i][col===0?0:1];}
function renderGrowthReadout(series,i){
 const year=+growthPeriod.value,prior=year-1;
 document.querySelectorAll('#growthChart .month-label').forEach(el=>el.classList.toggle('active-month',+el.dataset.month===i));
 document.querySelectorAll('#growthChart .hit').forEach(el=>el.setAttribute('aria-pressed',String(+el.dataset.i===i)));
 document.querySelector('#growthReadout').innerHTML=`<h3 class="readout-month">${calendarMonths[i]} ${year} versus ${calendarMonths[i]} ${prior}</h3><div class="sales-value-grid">${series.map((z,k)=>{const col=k===0?0:4;return `<div class="sales-value-card" style="--series-color:${z.color}"><div class="sales-value-year"><i></i>${z.name}</div><strong>${z.values[i]===null?'Unavailable':signed(z.values[i])}</strong><span>${z.values[i]===null?'Zero sales in the comparison month':'sales change from the same month in '+prior}</span><div class="growth-volumes"><a href="assets/growth-2012-2026.xlsx" target="_blank" rel="noopener">${prior}: ${fmt(growthCount(prior,i,col))} vehicles</a><a href="assets/growth-2012-2026.xlsx" target="_blank" rel="noopener">${year}: ${fmt(growthCount(year,i,col))} vehicles</a></div></div>`}).join('')}</div>`;
}
function drawGrowth(){
 const year=+growthPeriod.value,prior=year-1;
 const labels=calendarMonths.slice(0,vwPeriods[year].length);
 selectedGrowthMonth=Math.min(selectedGrowthMonth,labels.length-1);
 const picker=document.getElementById('growthMonthPicker');
 if(picker){picker.replaceChildren(...labels.map((m,i)=>new Option(m,i)));picker.value=selectedGrowthMonth;}
 document.querySelector('#growthSubtitle').textContent=labels[0]+'–'+labels.at(-1)+' '+year+' · Each point compares sales with the same month in '+prior+'.';
 const series=[{name:'Volkswagen Group SA',color:'#001e50'},{name:'Total market',color:'#007fa3'}].map((s,k)=>({...s,values:vwPeriods[year].map((row,i)=>vwPeriods[prior][i][k]>0?100*(row[k]/vwPeriods[prior][i][k]-1):null)}));
 document.querySelector('#growthLegend').innerHTML=series.map(z=>'<span>'+legendSwatch(z)+z.name+'</span>').join('');
 const values=series.flatMap(z=>z.values).filter(Number.isFinite),lo=Math.min(-20,Math.floor((Math.min(...values)-3)/10)*10),hi=Math.max(30,Math.ceil((Math.max(...values)+3)/10)*10);
 chart('growthChart',series,lo,hi,Math.max(10,Math.ceil((hi-lo)/150)*10),'%','growthReadout',labels);renderGrowthReadout(series,selectedGrowthMonth);
}
growthPeriod.addEventListener('change',drawGrowth);drawGrowth();
const archivedMonthlyTable='<thead><tr><th>Month</th><th>Volkswagen Group SA</th><th>Toyota</th><th>Suzuki Auto</th><th>Chery Auto SA</th><th>Total market</th></tr></thead><tbody>'+[2025,2026].map(yr=>data[yr].map((r,i)=>`<tr><td>${months[i]} ${yr}</td>${r.map((v,k)=>`<td><a href="https://raw.githubusercontent.com/Tadia-Siwisa/VW-Peformance-Dashboard/main/data/charts/03_Growth_comparison_2024-2026.xlsx" download title="Download underlying monthly counts in Excel">${v.toLocaleString('en-ZA')}</a></td>`).join('')}</tr>`).join('')).join('')+'</tbody>';

;(() => {
 const track=document.querySelector('.model-grid');
 const prev=document.getElementById('modelPrev'),next=document.getElementById('modelNext');
 const update=()=>{prev.disabled=track.scrollLeft<=2;next.disabled=track.scrollLeft>=track.scrollWidth-track.clientWidth-2;};
 const move=d=>track.scrollBy({left:d*(track.querySelector('.model-card').offsetWidth+parseFloat(getComputedStyle(track).columnGap)),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 prev.onclick=()=>move(-1);next.onclick=()=>move(1);
 track.addEventListener('keydown',e=>{if(e.target===track && ['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();move(e.key==='ArrowRight'?1:-1);}});
 track.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();
})();

// A native selector makes every chart month accessible on a narrow touch screen.
for (const [chartId, labelText] of [['growthChart','Growth chart month']]) {
 const plot=document.getElementById(chartId);
 const label=document.createElement('label');label.className='phone-chart-control';label.textContent=labelText;
 const picker=document.createElement('select');picker.setAttribute('aria-label',labelText);
 picker.id='growthMonthPicker';
 picker.innerHTML=calendarMonths.slice(0,vwPeriods[growthPeriod.value].length).map((m,i)=>`<option value="${i}">${m}</option>`).join('');
 label.append(picker);plot.before(label);
 const hint=document.createElement('p');hint.className='scroll-hint';hint.textContent=chartId==='salesChart'?'Swipe to explore months. Tap a month for exact domestic sales.':'Swipe to explore months. Tap a month for percentage changes and their source figures.';plot.before(hint);
 picker.addEventListener('change',()=>plot.querySelector(`[data-i="${picker.value}"]`)?.dispatchEvent(new MouseEvent('click',{bubbles:true})));
 plot.addEventListener('click',e=>{const hit=e.target.closest('[data-i]');if(hit)picker.value=hit.dataset.i;});
 plot.addEventListener('focusin',e=>{const hit=e.target.closest('[data-i]');if(hit)picker.value=hit.dataset.i;});
}
document.querySelectorAll('.tablewrap').forEach(w=>{
 const hint=document.createElement('p');hint.className='scroll-hint';hint.textContent='Swipe the table sideways to compare all columns.';w.before(hint);
});
