const reportSources={"2025":[{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/02/20250203-Flash-Report-January-2025.pdf","market":"https://naamsa.net/wp-content/uploads/2026/02/20260202-Flash-Report-January-2026.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/03/20250303-Flash-Report-February-2025.pdf","market":"https://naamsa.net/wp-content/uploads/2026/03/20260302-Flash-Report-February-2026.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/04/FLASH_STD_202503-updated.pdf","market":"https://naamsa.net/wp-content/uploads/2026/04/20260401-Flash-Report-March-2026-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/05/20250502-Flash-Report-April-2025.pdf","market":"https://naamsa.net/wp-content/uploads/2026/05/FLASH_STD_202604-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/06/20250602-Flash-Report-Standard.pdf","market":"https://naamsa.net/wp-content/uploads/2026/06/20260601-Flash-Report-May-2026-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/07/20250701-Flash-Report-Standard.pdf","market":"https://naamsa.net/wp-content/uploads/2026/07/20260701-Flash-Report-June-2026.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/08/FLASH_STD_202507.pdf","market":"https://naamsa.net/wp-content/uploads/2026/08/FLASH_STD_202607-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/09/FLASH_STD_202508.pdf","market":"https://naamsa.net/wp-content/uploads/2026/09/20260901-Flash-Report-August-2026.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/10/20251002-Flash-Report-September-2025-Standard.pdf","market":"https://naamsa.net/wp-content/uploads/2026/10/20261001-Flash-Report-September-2026-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2025/11/20251104-Flash-Report-October-2025-Standard.pdf","market":"https://naamsa.net/wp-content/uploads/2026/11/FLASH_STD_202610.pdf"}],"2026":[{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/02/20260202-Flash-Report-January-2026.pdf","market":"https://naamsa.net/wp-content/uploads/2026/03/20260302-Flash-Report-February-2026.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/03/20260302-Flash-Report-February-2026.pdf","market":"https://naamsa.net/wp-content/uploads/2026/04/20260401-Flash-Report-March-2026-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/04/20260401-Flash-Report-March-2026-1.pdf","market":"https://naamsa.net/wp-content/uploads/2026/05/FLASH_STD_202604-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/05/FLASH_STD_202604-1.pdf","market":"https://naamsa.net/wp-content/uploads/2026/06/20260601-Flash-Report-May-2026-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/06/20260601-Flash-Report-May-2026-1.pdf","market":"https://naamsa.net/wp-content/uploads/2026/07/20260701-Flash-Report-June-2026.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/07/20260701-Flash-Report-June-2026.pdf","market":"https://naamsa.net/wp-content/uploads/2026/08/FLASH_STD_202607-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/08/FLASH_STD_202607-1.pdf","market":"https://naamsa.net/wp-content/uploads/2026/09/20260901-Flash-Report-August-2026.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/09/20260901-Flash-Report-August-2026.pdf","market":"https://naamsa.net/wp-content/uploads/2026/10/20261001-Flash-Report-September-2026-1.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/10/20261001-Flash-Report-September-2026-1.pdf","market":"https://naamsa.net/wp-content/uploads/2026/11/FLASH_STD_202610.pdf"},{"manufacturer":"https://naamsa.net/wp-content/uploads/2026/11/FLASH_STD_202610.pdf","market":"https://naamsa.net/wp-content/uploads/2026/11/FLASH_STD_202610.pdf"}]};
const months=['January','February','March','April','May','June','July','August','September','October'];
const data={"2025":[[5676,12152,6399,1913,46594],[5249,11743,6044,1924,47994],[4913,11660,5284,1902,49500],[3973,10363,5977,1852,42467],[4582,10330,5536,1995,45287],[4973,11690,5221,2101,47269],[5738,12694,6257,2160,51558],[5521,13276,6534,2228,51960],[5763,14146,6072,2264,54706],[6221,13559,6890,2210,56051]],"2026":[[4774,11786,6410,2258,50521],[4895,12272,6562,2312,53383],[5574,13323,5047,2390,58064],[4814,10188,5363,2462,47892],[5295,10667,5546,2569,50987],[5613,12417,5689,2602,54405],[5799,14142,5994,2709,57733],[5668,13814,6505,2763,57761],[5968,15366,6668,3004,61656],[6515,14495,7292,2754,61890]]};
const fmt=n=>n.toLocaleString('en-ZA'),pct=n=>n.toFixed(1)+'%',signed=n=>(n>=0?'+':'')+pct(n),growth=(i,k)=>100*(data[2026][i][k]/data[2025][i][k]-1);
const month=document.querySelector('#month');month.innerHTML=months.map((m,i)=>`<option value="${i}" ${i===9?'selected':''}>${m} 2026</option>`).join('');
function arrow(n){return `<span class="trend ${n>=0?'up':'down'}" aria-label="${n>=0?'Increase':'Decrease'}">${n>=0?'↑':'↓'}</span>`}
function update(){const i=+month.value,a=data[2025][i],b=data[2026][i],v=growth(i,0),m=growth(i,4),share=100*b[0]/b[4],old=100*a[0]/a[4],short=months[i].slice(0,3);document.querySelector('#kpis').innerHTML=`<div class="kpi"><div class="label">Volkswagen Group sales</div><div class="value">${fmt(b[0])}</div><div class="delta">${arrow(v)} ${pct(Math.abs(v))} from ${short} 2025</div><div class="muted">${short} 2025: ${fmt(a[0])}</div></div><div class="kpi"><div class="label">Total market growth</div><div class="value">${arrow(m)} ${pct(Math.abs(m))}</div><div class="delta">${short} 2026: ${fmt(b[4])}</div><div class="muted">${short} 2025: ${fmt(a[4])}</div></div><div class="kpi"><div class="label">Volkswagen market share</div><div class="value">${pct(share)}</div><div class="delta">${arrow(share-old)} ${Math.abs(share-old).toFixed(2)} percentage points</div><div class="muted">${short} 2025: ${pct(old)}</div></div>`;document.querySelector('#takeaway').innerHTML=`<li>${months[i]}: Volkswagen’s sales ${v>=0?'rose':'fell'} ${pct(Math.abs(v))} year on year.</li><li>Growth ${v>=m?'exceeded':'trailed'} the market by ${Math.abs(v-m).toFixed(1)} percentage points.</li>`;}
month.addEventListener('change',update);update();
// Consistent markers and line samples make each series distinguishable without relying on color.
// All line charts use solid strokes and consistent, solid circular markers.
// Consistent filled circle markers and solid legend lines for all data series.
function svgMarker(z,x,y,size){
 return '<circle cx="'+x+'" cy="'+y+'" r="'+size+'" fill="'+z.color+'" stroke="'+z.color+'" stroke-width="1" style="fill:'+z.color+';stroke:'+z.color+'"/>';
}
function legendSwatch(z){
 return '<svg class="legend-line" width="46" height="20" viewBox="0 0 46 20" aria-hidden="true"><line x1="2" x2="44" y1="10" y2="10" stroke="'+z.color+'" stroke-width="2.7" stroke-dasharray="none"/>'+svgMarker(z,23,10,4.4)+'</svg>';
}
function chart(id,series,min,max,step,unit,readout){
 const dense=series.length>=3,W=1120,L=82,R=35,T=dense?150:48,bottom=dense?430:345,monthY=bottom+34,H=monthY+38;
 const x=i=>L+i*(W-L-R)/9,y=v=>T+(max-v)*(bottom-T)/(max-min);
 const value=v=>unit==='%'?signed(v):fmt(v);
 let s='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+(id==='salesChart'?'Monthly Volkswagen sales by year':'Monthly sales growth')+'">';
 s+='<text x="'+L+'" y="'+(T-16)+'">'+unit+'</text>';
 for(let v=min;v<=max+step*.001;v+=step){
  s+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+y(v)+'" y2="'+y(v)+'" stroke="'+(v===0?'#a6b1be':'#e7ecf2')+'"/>';
  s+='<text x="'+(L-12)+'" y="'+(y(v)+4)+'" text-anchor="end">'+(unit==='Vehicles'?(v/1000)+'K':fmt(v))+(unit==='%'?'%':'')+'</text>';
 }
 months.forEach((m,i)=>{s+='<text class="month-label" data-month="'+i+'" x="'+x(i)+'" y="'+monthY+'" text-anchor="middle">'+m.slice(0,3)+'</text>';});
 series.forEach((z,j)=>{
  s+='<polyline points="'+z.values.map((v,i)=>x(i)+','+y(v)).join(' ')+'" fill="none" stroke="'+z.color+'" class="series-line" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.7" stroke-dasharray="none" style="stroke-dasharray:none"/>';
  z.values.forEach((v,i)=>{
   s+='<g>'+svgMarker(z,x(i),y(v),4.8)+'<title>'+months[i]+' · '+z.name+': '+value(v)+'</title></g>';
   if(!dense){
    const other=series.length===2?series[1-j].values[i]:null;
    const above=other===null||v>=other;
    const ly=Math.max(T+15,Math.min(bottom-9,y(v)+(above?-19:23)));
    s+='<text class="point-label" x="'+x(i)+'" y="'+ly+'" text-anchor="middle" style="fill:'+z.color+'">'+value(v)+'</text>';
   }
  });
 });
 if(dense)s+='<g class="focus-overlay" style="display:none" aria-hidden="true" pointer-events="none"></g>';
 months.forEach((m,i)=>{
  const aria=series.map(z=>z.name+': '+value(z.values[i])+(unit==='%'?'':' vehicles')).join('; ');
  s+='<rect class="hit" data-i="'+i+'" tabindex="0" role="button" aria-label="'+m+' - '+aria+'" x="'+(x(i)-(W-L-R)/18)+'" y="'+T+'" width="'+((W-L-R)/9)+'" height="'+(monthY-T+12)+'" fill="transparent"/>';
 });
 s+='</svg>';
 const el=document.getElementById(id);el.innerHTML=s;
 const overlay=dense?el.querySelector('.focus-overlay'):null;
 let pinned=null;
 function showMonth(i){
  if(!overlay)return;
  const ranked=unit==='Vehicles'?[...series].sort((a,b)=>b.values[i]-a.values[i]||a.name.localeCompare(b.name)):series;
  const heading=months[i]+': '+(unit==='%'?'Year-on-year growth':'VW Group SA domestic sales');
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
   if(id==='salesChart'){selectedSalesMonth=i;renderSalesReadout(series,i);return;}
   if(id==='growthChart'){selectedGrowthMonth=i;renderGrowthReadout(series,i);return;}
   document.getElementById(readout).textContent=months[i]+' · '+series.map(z=>z.name+': '+value(z.values[i])).join('  | ');
  }
  hit.addEventListener('pointerenter',()=>{if(dense)showMonth(i);});
  hit.addEventListener('pointerleave',restore);
  hit.addEventListener('focus',()=>{if(dense)showMonth(i);});
  hit.addEventListener('blur',restore);
  hit.addEventListener('click',choose);
  hit.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();choose();}});
 });
}
const historicalSales={"2023": [5081, 5288, 6139, 4644, 5259, 5578, 5797, 5972, 6316, 6595], "2024": [5522, 5333, 5219, 4758, 4939, 5514, 6178, 5645, 5885, 6340], "2025": [5676, 5249, 4913, 3973, 4582, 4973, 5738, 5521, 5763, 6221], "2026": [4774, 4895, 5574, 4814, 5295, 5613, 5799, 5668, 5968, 6515]};
let selectedSalesMonth=0;
const yearColors={'2023':'#007fa3','2024':'#9b6423','2025':'#61758d','2026':'#001e50'};
function renderSalesReadout(series,i){
 document.querySelectorAll('#salesChart .month-label').forEach(el=>el.classList.toggle('active-month',+el.dataset.month===i));
 document.querySelectorAll('#salesChart .hit').forEach(el=>el.setAttribute('aria-pressed',String(+el.dataset.i===i)));
}
function drawSales(){
 const years=[...document.querySelectorAll('.sales-year:checked')].map(e=>e.value), indexed=false;
 const series=years.map(y=>({name:y,color:yearColors[y],values:historicalSales[y].map(v=>indexed?100*v/historicalSales[y][0]:v)}));
 document.querySelector('#salesLegend').innerHTML=series.map(z=>'<span>'+legendSwatch(z)+z.name+'</span>').join('');
 document.querySelector('#historicalNote').hidden=!years.some(y=>Number(y)<2025);
 document.querySelector('#salesModeNote').textContent=years.length>=3?'Hover over or tap a month or point to see exact sales for all selected years. Tap to keep that month selected.':'Exact monthly sales are labeled beside each point. Select a month for more details.';
 if(!series.length){document.querySelector('#salesChart').innerHTML='<p class="empty-years">Choose at least one year above.</p>';return;}
 chart('salesChart',series,indexed?60:3000,indexed?160:7000,indexed?20:1000,indexed?'Index':'Vehicles','salesReadout');
 if(selectedSalesMonth!==null)renderSalesReadout(series,selectedSalesMonth);
}
document.querySelectorAll('.sales-year').forEach(el=>el.addEventListener('change',drawSales));

document.querySelector('#allYears').onclick=()=>{document.querySelectorAll('.sales-year').forEach(e=>e.checked=true);drawSales();};drawSales();
const historicalMarket={"2023": [43294, 45162, 50114, 37358, 43242, 46603, 43572, 45854, 45970, 45418], "2024": [41636, 44749, 44237, 38172, 37105, 40072, 44229, 43588, 44081, 47924]};
const historicalMarketSources={"2024": ["https://naamsa.net/wp-content/uploads/2024/05/20240201-Flash-Report-Summary-January-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/05/20240301-Flash-Report-Summary-February-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/05/FLASH_STD_202403.pdf", "https://naamsa.net/wp-content/uploads/2024/05/FLASH_STD_202404-corrected.pdf", "https://naamsa.net/wp-content/uploads/2024/06/20240603-Flash-Report-Summary-May-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/07/20240701-Flash-Report-Summary-June-2024-1.pdf", "https://naamsa.net/wp-content/uploads/2024/08/20240801-Flash-Report-Summary-July-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/09/20240902-Flash-Report-August-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/10/20241001-Flash-Report-September-2024-1.pdf", "https://naamsa.net/wp-content/uploads/2024/11/20241101-Flash-Report-October-2024.pdf"], "2023": ["https://naamsa.net/wp-content/uploads/2024/05/20240201-Flash-Report-Summary-January-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/05/20240301-Flash-Report-Summary-February-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/05/FLASH_STD_202403.pdf", "https://naamsa.net/wp-content/uploads/2024/05/FLASH_STD_202404-corrected.pdf", "https://naamsa.net/wp-content/uploads/2024/06/20240603-Flash-Report-Summary-May-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/07/20240701-Flash-Report-Summary-June-2024-1.pdf", "https://naamsa.net/wp-content/uploads/2024/08/20240801-Flash-Report-Summary-July-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/09/20240902-Flash-Report-August-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/10/20241001-Flash-Report-September-2024-1.pdf", "https://naamsa.net/wp-content/uploads/2024/11/20241101-Flash-Report-October-2024.pdf"]};
const historicalVwSources={"2023": ["https://naamsa.net/wp-content/uploads/2024/05/20230201-Flash-Report-Summary-January-2023.pdf", "https://www.abrbuzz.co.za/publications/press-and-customers/naamsa/20230301%20-%20Flash%20Report%20Summary%20February%202023.pdf", "https://naamsa.net/wp-content/uploads/2024/05/20230403-Flash-Report-Summary-March-2023-1.pdf", "https://naamsa.net/wp-content/uploads/2023/05/20230502-Flash-Report-Summary-April-2023.pdf", "https://naamsa.net/wp-content/uploads/2024/05/20230601-Flash-Report-Summary-May-2023.pdf", "https://naamsa.net/wp-content/uploads/2024/05/20230703-Flash-Report-Summary-June-2023.pdf", "https://naamsa.net/wp-content/uploads/2024/05/20230801-Flash-Report-Summary-July-2023-1.pdf", "https://naamsa.net/wp-content/uploads/2024/05/20230901-Flash-Report-Summary-August-2023.pdf", "https://naamsa.net/wp-content/uploads/2024/05/20231002-Flash-Report-Summary-September-2023.pdf", "https://naamsa.net/wp-content/uploads/2024/05/20231101-Flash-Report-Summary-October-2023-1.pdf"], "2024": ["https://naamsa.net/wp-content/uploads/2024/05/20240201-Flash-Report-Summary-January-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/05/20240301-Flash-Report-Summary-February-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/05/FLASH_STD_202403.pdf", "https://naamsa.net/wp-content/uploads/2024/05/FLASH_STD_202404-corrected.pdf", "https://naamsa.net/wp-content/uploads/2024/06/20240603-Flash-Report-Summary-May-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/07/20240701-Flash-Report-Summary-June-2024-1.pdf", "https://naamsa.net/wp-content/uploads/2024/08/20240801-Flash-Report-Summary-July-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/09/20240902-Flash-Report-August-2024.pdf", "https://naamsa.net/wp-content/uploads/2024/10/20241001-Flash-Report-September-2024-1.pdf", "https://naamsa.net/wp-content/uploads/2024/11/20241101-Flash-Report-October-2024.pdf"]};
let selectedGrowthMonth=0;
const growthPeriod=document.querySelector('#growthPeriod');
function growthCount(year,i,col){return col===0?historicalSales[year][i]:year<2025?historicalMarket[year][i]:data[year][i][4];}
function growthSource(year,i,col){return year<2025?(col===0?historicalVwSources[year][i]:historicalMarketSources[year][i]):reportSources[year][i][col===0?'manufacturer':'market'];}
function renderGrowthReadout(series,i){
 const year=+growthPeriod.value,prior=year-1;
 document.querySelectorAll('#growthChart .month-label').forEach(el=>el.classList.toggle('active-month',+el.dataset.month===i));
 document.querySelectorAll('#growthChart .hit').forEach(el=>el.setAttribute('aria-pressed',String(+el.dataset.i===i)));
 document.querySelector('#growthReadout').innerHTML=`<h3 class="readout-month">${months[i]} ${year} versus ${months[i]} ${prior}</h3><div class="sales-value-grid">${series.map((z,k)=>{const col=k===0?0:4;return `<div class="sales-value-card" style="--series-color:${z.color}"><div class="sales-value-year"><i></i>${z.name}</div><strong>${signed(z.values[i])}</strong><span>sales change from the same month in ${prior}</span><div class="growth-volumes"><a href="${growthSource(prior,i,col)}" target="_blank" rel="noopener">${prior}: ${fmt(growthCount(prior,i,col))} vehicles</a><a href="${growthSource(year,i,col)}" target="_blank" rel="noopener">${year}: ${fmt(growthCount(year,i,col))} vehicles</a></div></div>`}).join('')}</div>`;
}
function drawGrowth(){
 const year=+growthPeriod.value,prior=year-1;
 document.querySelector('#growthSubtitle').textContent=`January–October ${year} · Each point compares sales with the same month in ${prior}.`;
 const series=[{name:'Volkswagen Group SA',color:'#001e50',values:months.map((_,i)=>100*(growthCount(year,i,0)/growthCount(prior,i,0)-1))},{name:'Total market',color:'#007fa3',values:months.map((_,i)=>100*(growthCount(year,i,4)/growthCount(prior,i,4)-1))}];
 document.querySelector('#growthLegend').innerHTML=series.map(z=>'<span>'+legendSwatch(z)+z.name+'</span>').join('');
 const values=series.flatMap(z=>z.values),lo=Math.min(-20,Math.floor((Math.min(...values)-3)/10)*10),hi=Math.max(30,Math.ceil((Math.max(...values)+3)/10)*10);
 chart('growthChart',series,lo,hi,10,'%','growthReadout');renderGrowthReadout(series,selectedGrowthMonth);
}
growthPeriod.addEventListener('change',drawGrowth);drawGrowth();
const names=['Volkswagen Group SA','Toyota','Suzuki Auto','Chery Auto SA','Everyone else'],colors=['#001e50','#007fa3','#6d8ba7','#c8a778','#dde2e7'];
const shareValues=yr=>{const r=data[yr][9];return [...r.slice(0,4),r[4]-r.slice(0,4).reduce((a,b)=>a+b,0)]};
let selectedSlice=null;
function drawPies(){
 document.querySelector('#pies').innerHTML=[2025,2026].map(yr=>{
 const vals=shareValues(yr),total=data[yr][9][4];let angle=-Math.PI/2;const labels=[];
 const slices=vals.map((v,i)=>{const portion=v/total,start=angle,end=angle+portion*2*Math.PI,mid=(start+end)/2;angle=end;const active=selectedSlice===i,offset=active?10:0,cx=150+Math.cos(mid)*offset,cy=150+Math.sin(mid)*offset,r=119;
 const path=`M ${cx} ${cy} L ${cx+r*Math.cos(start)} ${cy+r*Math.sin(start)} A ${r} ${r} 0 ${portion>.5?1:0} 1 ${cx+r*Math.cos(end)} ${cy+r*Math.sin(end)} Z`;
 const labelRadius=portion<.065?140:87;
 labels.push(`<text x="${cx+labelRadius*Math.cos(mid)}" y="${cy+labelRadius*Math.sin(mid)+4}" text-anchor="middle" style="fill:${portion<.065||i>=3?'#001e50':'white'}">${pct(portion*100)}</text>`);
 return `<g class="pie-slice" tabindex="0" role="button" data-slice="${i}" aria-pressed="${active}" aria-label="${names[i]}: ${pct(portion*100)}, ${fmt(v)} vehicles in October ${yr}"><path d="${path}" fill="${colors[i]}" stroke="white" stroke-width="3"/></g>`}).join('');
 return `<div class="piecard"><h3>October ${yr}</h3><p class="source">${fmt(total)} vehicles · Total market</p><svg class="share-pie" viewBox="-15 -15 330 330" aria-label="October ${yr} market shares">${slices}${labels.join('')}</svg><div class="slice-readout" aria-live="polite">${selectedSlice===null?'Select a slice or manufacturer to see its name and sales.':`<strong>${names[selectedSlice]}</strong><br>${fmt(vals[selectedSlice])} vehicles · ${pct(100*vals[selectedSlice]/total)}`}</div></div>`;
 }).join('');
 document.querySelector('#shareLegend').innerHTML=names.map((n,i)=>`<button type="button" data-slice="${i}" aria-pressed="${selectedSlice===i}"><i style="background:${colors[i]}"></i>${n}</button>`).join('');
 document.querySelectorAll('[data-slice]').forEach(el=>{const select=()=>{selectedSlice=selectedSlice===+el.dataset.slice?null:+el.dataset.slice;drawPies()};el.onclick=select;el.onkeydown=e=>{if(el.tagName.toLowerCase()!=='button'&&(e.key==='Enter'||e.key===' ')){e.preventDefault();select()}}});
}
drawPies();
const oldShares=shareValues(2025),newShares=shareValues(2026),marketGrowth=growth(9,4);
document.querySelector('#competitorTable').innerHTML='<thead><tr><th>Manufacturer</th><th>2025 sales</th><th>2026 sales</th><th>Sales growth</th><th>2025 share</th><th>2026 share</th><th>Share change (pp)</th><th>Versus market growth</th></tr></thead><tbody>'+[...Array(4).keys()].sort((a,b)=>newShares[b]-newShares[a]).concat(4).map(i=>{const n=names[i],g=100*(newShares[i]/oldShares[i]-1),old=100*oldShares[i]/data[2025][9][4],now=100*newShares[i]/data[2026][9][4],delta=now-old;return `<tr><th scope="row">${n}</th><td>${fmt(oldShares[i])}</td><td>${fmt(newShares[i])}</td><td>${signed(g)}</td><td>${pct(old)}</td><td>${pct(now)}</td><td class="${delta>=0?'positive':'negative'}">${delta>=0?'+':''}${delta.toFixed(2)}</td><td>${i===4?'—':g>marketGrowth?'Ahead':'Behind'}</td></tr>`}).join('')+`<tr class="model-total"><th scope="row">Total market</th><td>${fmt(data[2025][9][4])}</td><td>${fmt(data[2026][9][4])}</td><td>${signed(marketGrowth)}</td><td>100%</td><td>100%</td><td>—</td><td>Benchmark</td></tr></tbody>`;
document.querySelector('#shareInsights').innerHTML=`<div class="eyebrow">OCTOBER 2026 · VERSUS OCTOBER 2025</div><h3>Chery gained share as the other named manufacturers lost ground</h3><p>In October 2026 versus October 2025, Chery was the only one of the four named manufacturers to outgrow the market: its year-on-year sales rose <strong>${signed(growth(9,3))}</strong>, compared with <strong>${signed(marketGrowth)}</strong> for the market. Its share increased from <strong>${pct(100*oldShares[3]/data[2025][9][4])}</strong> to <strong>${pct(100*newShares[3]/data[2026][9][4])}</strong>—a gain of <strong>${(100*newShares[3]/data[2026][9][4]-100*oldShares[3]/data[2025][9][4]).toFixed(2)} percentage points</strong>.</p><div class="insight-explanations"><article><h4>What does this mean for Volkswagen?</h4><p>Volkswagen’s October sales rose ${signed(growth(9,0))}, but share fell from ${pct(100*oldShares[0]/data[2025][9][4])} to ${pct(100*newShares[0]/data[2026][9][4])}. Suzuki was the closest named manufacturer by sales volume, ahead by ${fmt(newShares[2]-newShares[0])} vehicles in October 2026.</p></article><article><h4>Where did share move?</h4><p>Toyota remained the largest named manufacturer, but Toyota and Suzuki both lost share. Chery and the combined “Everyone else” group gained share. This identifies where to investigate competition; it does not show which brands received former Volkswagen customers.</p></article></div>`;
const archivedMonthlyTable='<thead><tr><th>Month</th><th>Volkswagen Group SA</th><th>Toyota</th><th>Suzuki Auto</th><th>Chery Auto SA</th><th>Total market</th></tr></thead><tbody>'+[2025,2026].map(yr=>data[yr].map((r,i)=>`<tr><td>${months[i]} ${yr}</td>${r.map((v,k)=>`<td><a href="${reportSources[yr][i][k===4?'market':'manufacturer']}" target="_blank" rel="noopener" title="Open naamsa source report">${fmt(v)}</a></td>`).join('')}</tr>`).join('')).join('')+'</tbody>';

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
for (const [chartId, labelText] of [['salesChart','Sales chart month'],['growthChart','Growth chart month']]) {
 const plot=document.getElementById(chartId);
 const label=document.createElement('label');label.className='phone-chart-control';label.textContent=labelText;
 const picker=document.createElement('select');picker.setAttribute('aria-label',labelText);
 picker.innerHTML=months.map((m,i)=>`<option value="${i}">${m}</option>`).join('');
 label.append(picker);plot.before(label);
 const hint=document.createElement('p');hint.className='scroll-hint';hint.textContent=chartId==='salesChart'?'Swipe to explore months. Tap a month for exact domestic sales.':'Swipe to explore months. Tap a month for percentage changes and their source figures.';plot.before(hint);
 picker.addEventListener('change',()=>plot.querySelector(`[data-i="${picker.value}"]`)?.dispatchEvent(new MouseEvent('click',{bubbles:true})));
 plot.addEventListener('click',e=>{const hit=e.target.closest('[data-i]');if(hit)picker.value=hit.dataset.i;});
 plot.addEventListener('focusin',e=>{const hit=e.target.closest('[data-i]');if(hit)picker.value=hit.dataset.i;});
}
document.querySelectorAll('.tablewrap').forEach(w=>{
 const hint=document.createElement('p');hint.className='scroll-hint';hint.textContent='Swipe the table sideways to compare all columns.';w.before(hint);
});
