(()=>{"use strict";
const $=id=>document.getElementById(id), fmt=n=>n.toLocaleString("en-ZA"), mname=s=>new Date(s+"T00:00:00Z").toLocaleDateString("en-GB",{month:"short",year:"numeric",timeZone:"UTC"});
const sum=a=>a.reduce((s,r)=>s+r.sales,0), year=r=>Number(r.month.slice(0,4)), mo=r=>Number(r.month.slice(5,7));
const pct=n=>(n>=0?"+":"")+n.toFixed(1)+"%";
function setupViews(){
 const market=$("market"), others=[...document.querySelectorAll("main > section, main > .jump")].filter(e=>e!==market && e.id!=="sources");
 function route(){
  const hash=location.hash;
  const local=!hash||hash==="#market"||hash==="#marketPanel"||hash==="#marketTitle"||hash==="#manufacturers";
  market.hidden=!local;others.forEach(e=>e.hidden=local);
  [["localTab",local],["vwTab",!local]].forEach(([id,active])=>{const a=$(id);a.classList.toggle("active",active);if(active)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});
  const target=hash&&document.getElementById(hash.slice(1));if(target)requestAnimationFrame(()=>target.scrollIntoView({block:"start"}));else window.scrollTo(0,0);
 }
 window.addEventListener("hashchange",route);route();
}
setupViews();
const embedded=[["2012-01-01",48203],["2012-02-01",52388],["2012-03-01",56152],["2012-04-01",42608],["2012-05-01",50247],["2012-06-01",51872],["2012-07-01",54076],["2012-08-01",56270],["2012-09-01",55093],["2012-10-01",57844],["2012-11-01",53144],["2012-12-01",46016],["2013-01-01",56899],["2013-02-01",53187],["2013-03-01",55450],["2013-04-01",51498],["2013-05-01",54490],["2013-06-01",54088],["2013-07-01",58561],["2013-08-01",56489],["2013-09-01",54571],["2013-10-01",56608],["2013-11-01",50630],["2013-12-01",46482],["2014-01-01",52948],["2014-02-01",51784],["2014-03-01",55440],["2014-04-01",46016],["2014-05-01",49449],["2014-06-01",52785],["2014-07-01",57636],["2014-08-01",55722],["2014-09-01",60782],["2014-10-01",59335],["2014-11-01",51096],["2014-12-01",51421],["2015-01-01",52228],["2015-02-01",52385],["2015-03-01",55389],["2015-04-01",44469],["2015-05-01",47832],["2015-06-01",50250],["2015-07-01",54105],["2015-08-01",50985],["2015-09-01",55303],["2015-10-01",54239],["2015-11-01",51338],["2015-12-01",49158],["2016-01-01",48514],["2016-02-01",48144],["2016-03-01",47514],["2016-04-01",40348],["2016-05-01",42912],["2016-06-01",44932],["2016-07-01",44870],["2016-08-01",46131],["2016-09-01",47357],["2016-10-01",48782],["2016-11-01",46397],["2016-12-01",41644],["2017-01-01",50386],["2017-02-01",48201],["2017-03-01",48698],["2017-04-01",35086],["2017-05-01",41962],["2017-06-01",45332],["2017-07-01",46671],["2017-08-01",49198],["2017-09-01",50644],["2017-10-01",51022],["2017-11-01",49751],["2017-12-01",40751],["2018-01-01",45772],["2018-02-01",46267],["2018-03-01",49230],["2018-04-01",36528],["2018-05-01",42950],["2018-06-01",46663],["2018-07-01",47856],["2018-08-01",47977],["2018-09-01",49630],["2018-10-01",51856],["2018-11-01",47478],["2018-12-01",40020],["2019-01-01",42956],["2019-02-01",43805],["2019-03-01",47695],["2019-04-01",36787],["2019-05-01",40428],["2019-06-01",45953],["2019-07-01",46042],["2019-08-01",45484],["2019-09-01",49140],["2019-10-01",51968],["2019-11-01",44670],["2019-12-01",41683],["2020-01-01",40413],["2020-02-01",43296],["2020-03-01",33546],["2020-04-01",574],["2020-05-01",12874],["2020-06-01",31643],["2020-07-01",32405],["2020-08-01",33259],["2020-09-01",37237],["2020-10-01",38694],["2020-11-01",39015],["2020-12-01",37250],["2021-01-01",34639],["2021-02-01",37369],["2021-03-01",43423],["2021-04-01",35591],["2021-05-01",38358],["2021-06-01",38131],["2021-07-01",33312],["2021-08-01",41533],["2021-09-01",43147],["2021-10-01",41251],["2021-11-01",41795],["2021-12-01",35944],["2022-01-01",41503],["2022-02-01",44224],["2022-03-01",50465],["2022-04-01",37195],["2022-05-01",39101],["2022-06-01",41052],["2022-07-01",42822],["2022-08-01",47155],["2022-09-01",47984],["2022-10-01",46350],["2022-11-01",49986],["2022-12-01",41721],["2023-01-01",43294],["2023-02-01",45162],["2023-03-01",50114],["2023-04-01",37358],["2023-05-01",43242],["2023-06-01",46603],["2023-07-01",43572],["2023-08-01",45854],["2023-09-01",45970],["2023-10-01",45418],["2023-11-01",44927],["2023-12-01",40250],["2024-01-01",42023],["2024-02-01",44723],["2024-03-01",43989],["2024-04-01",37899],["2024-05-01",37139],["2024-06-01",39850],["2024-07-01",44452],["2024-08-01",43692],["2024-09-01",44000],["2024-10-01",48222],["2024-11-01",48783],["2024-12-01",41101],["2025-01-01",46594],["2025-02-01",47994],["2025-03-01",49500],["2025-04-01",42467],["2025-05-01",45287],["2025-06-01",47269],["2025-07-01",51558],["2025-08-01",51960],["2025-09-01",54706],["2025-10-01",56051],["2025-11-01",54765],["2025-12-01",48980],["2026-01-01",50521],["2026-02-01",53383],["2026-03-01",58064],["2026-04-01",47892],["2026-05-01",50987],["2026-06-01",54405],["2026-07-01",57733],["2026-08-01",57761],["2026-09-01",61656],["2026-10-01",61890]];
async function init(){
 const data=embedded.map(([month,sales])=>({month,sales}));
 const valid=rows=>rows.length===178&&rows.every((r,i)=>r.month===String(2012+Math.floor(i/12))+"-"+String(i%12+1).padStart(2,"0")+"-01"&&Number.isInteger(r.sales)&&r.sales>0);
 // Snapshot generated from the tracked CSV; no network dependency for initial render.
 if(!valid(data))throw Error("Invalid embedded monthly data");
 function marketMetrics(data,r){
 const y=Number(r.month.slice(0,4)),m=Number(r.month.slice(5,7));
 const period=n=>{const rows=data.filter(v=>Number(v.month.slice(0,4))===n&&Number(v.month.slice(5,7))<=m);return rows.length===m?rows.reduce((s,v)=>s+v.sales,0):null};
 const change=(a,b)=>a!==null&&b!==null&&b>0?100*(a/b-1):null;
 const old=data.find(v=>v.month===String(y-1)+r.month.slice(4)),cur=period(y),prior=period(y-1),earlier=period(y-2);
 const a=change(r.sales,old?.sales??null),b=change(cur,prior),p=change(prior,earlier);
 return {y,m,old,cur,prior,a,b,p,d:b!==null&&p!==null?b-p:null};
}
 const picker=$("marketMonth"), yearPicker=document.createElement("select"), monthContainer=picker.closest("label"), yearLabel=document.createElement("label"), controls=document.createElement("div");
 controls.style.cssText="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;width:100%;";
 yearPicker.id="marketKpiYear";yearPicker.setAttribute("aria-label","Year");
 yearLabel.className=monthContainer.className;yearLabel.textContent="Year";yearLabel.append(yearPicker);
 monthContainer.before(controls);controls.append(yearLabel,monthContainer);monthContainer.firstChild.textContent="Month";picker.setAttribute("aria-label","Month");
 for(const label of [yearLabel,monthContainer])label.style.cssText="min-width:0;width:140px;max-width:45%;";
 const pickerYears=[...new Set(data.map(year))].reverse();
 yearPicker.innerHTML=pickerYears.map(y=>'<option value="'+y+'">'+y+'</option>').join("");
 function setMonths(preferred){const rows=data.filter(r=>year(r)===Number(yearPicker.value));picker.innerHTML=rows.map(r=>'<option value="'+r.month+'">'+new Date(r.month+"T00:00:00Z").toLocaleDateString("en-GB",{month:"long",timeZone:"UTC"})+'</option>').join("");picker.value=(rows.find(r=>mo(r)===preferred)||rows[rows.length-1]).month;}
 setMonths(mo(data[data.length-1]));
 const trend=v=>v===null?"Prior year unavailable":'<span class="trend '+(v>=0?"up":"down")+'">'+(v>=0?"↑":"↓")+'</span> '+pct(v)+' year on year';
 const points=v=>(v>=0?"+":"")+v.toFixed(1)+" pp";
 const movement=v=>Math.abs(v)<0.05?"unchanged":Math.abs(v).toFixed(1)+" percentage points "+(v>0?"higher":"lower");
 function renderKpis(){
  const r=data.find(r=>r.month===picker.value);if(!r)return;
  const {y,m,old,cur,prior,a,b,p,d}=marketMetrics(data,r),monthLabel=mname(r.month),monthShort=monthLabel.split(" ")[0],period=m===1?"Jan":"Jan–"+monthShort,priorLabel=monthShort+" "+(y-1);
  const card=(label,value,delta,detail)=>'<div class="kpi"><div class="label">'+label+'</div><div class="value">'+value+'</div><div class="delta">'+delta+'</div><div class="muted">'+detail+'</div></div>';
  $("marketKpis").innerHTML=card("Monthly market sales · "+monthLabel,fmt(r.sales),trend(a),old?priorLabel+": "+fmt(old.sales):"Prior year unavailable")+card("Year-to-date sales · "+y,fmt(cur),trend(b),prior!==null?period+" "+(y-1)+": "+fmt(prior):"Prior year unavailable")+card("Market growth · "+y,b===null?"N/A":pct(b),d===null?"Growth-rate comparison unavailable":points(d)+" vs previous year",p===null?"Prior growth rate unavailable":period+" "+(y-1)+": "+pct(p)+" year on year");
  const marketDirection=b===null?"Year-on-year market growth cannot be calculated from the available history.":Math.abs(b)<0.05?"The market is broadly unchanged year on year.":"The market is "+(b>0?"expanding":"contracting")+" year on year ("+pct(b)+").";
  let growthInsight=marketDirection;
  if(d!==null)growthInsight+=" The growth rate is "+movement(d)+" than in the equivalent period of "+(y-1)+" ("+pct(p)+").".replace(" than"," than");
  if(d!==null&&Math.abs(d)<0.05)growthInsight=marketDirection+" The growth rate is unchanged at one decimal place versus "+(y-1)+".";
  $("marketTakeaway").innerHTML='<li><strong>Monthly performance:</strong> '+monthLabel+': '+fmt(r.sales)+' new vehicles sold'+(a===null?'; no prior-year comparison available.':', '+(a>=0?'up ':'down ')+Math.abs(a).toFixed(1)+'% versus '+priorLabel+'.')+'</li><li><strong>Year-to-date performance:</strong> '+period+' '+y+': '+fmt(cur)+' vehicles'+(b===null?'; no prior-year comparison available.':', '+(b>=0?'up ':'down ')+Math.abs(b).toFixed(1)+'% versus the same period in '+(y-1)+'.')+'</li><li><strong>Market growth:</strong> '+growthInsight+'</li>';
 }
 yearPicker.addEventListener("change",()=>{const previous=Number(picker.value.slice(5,7));setMonths(previous);renderKpis();});
 picker.addEventListener("change",renderKpis);renderKpis();
if(data.length!==178||data.some((r,i)=>r.month!==String(2012+Math.floor(i/12))+"-"+String(i%12+1).padStart(2,"0")+"-01"||!Number.isInteger(r.sales)||r.sales<0))throw Error("Invalid monthly series");
const years=[...new Set(data.map(year))];for(const id of ["marketStart","marketEnd"]){$(id).innerHTML=years.map(y=>'<option value="'+y+'">'+y+'</option>').join("");}
function render(){
let start=Number($("marketStart").value),end=Number($("marketEnd").value);if(start>end){end=start;$("marketEnd").value=String(end);}
const mode=$("marketMode").value, selected=data.filter(r=>year(r)>=start&&year(r)<=end);
const latest=selected[selected.length-1], y=year(latest), m=mo(latest);
let points=selected.map(r=>({label:mname(r.month),value:r.sales,short:r.month.slice(0,4),month:r.month}));
let note="Monthly domestic sales · "+mname(selected[0].month)+" to "+mname(latest.month)+".";
if(mode!=="monthly"){
const months=12;
points=years.filter(v=>v>=start&&v<=end).flatMap(v=>{const group=data.filter(r=>year(r)===v&&mo(r)<=months);return group.length===months?[{label:String(v)+(months===10?" · Jan–Oct":""),value:sum(group),short:String(v)}]:[];});
note="Full calendar years only. 2026 is excluded because November and December are outside the dataset.";
}
$("marketChartTitle").textContent=mode==="monthly"?"Monthly new vehicle sales":"Annual new vehicle sales";
$("marketChartNote").textContent=note;
if(!points.length){$("marketChart").innerHTML='<p class="source">No complete calendar year in this selection. Choose monthly view or expand the year range.</p>';$("marketReadout").textContent="No observations in this view.";return;}
const W=900,H=380,L=72,R=20,T=60,B=48, plotW=W-L-R, plotH=H-T-B, max=Math.max(...points.map(p=>p.value)), step=mode==="monthly"?10000:100000, top=Math.ceil(max/step)*step||step, x=i=>L+(points.length===1?plotW/2:i*plotW/(points.length-1)), yy=v=>T+plotH*(1-v/top);
let svg='<svg viewBox="0 0 '+W+' '+H+'" role="group" aria-label="New vehicle market sales in vehicles">';
for(let v=0;v<=top;v+=step)svg+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+yy(v)+'" y2="'+yy(v)+'" stroke="#dfe4e9"/><text x="'+(L-9)+'" y="'+(yy(v)+4)+'" text-anchor="end">'+(v/1000)+'k</text>';
const ticks=points.length<=15?points.map((_,i)=>i):points.map((p,i)=>p.month&&p.month.slice(5,7)==="01"?i:-1).filter(i=>i>=0).filter((_,j)=>j%2===0);
for(const i of ticks)svg+='<text x="'+x(i)+'" y="'+(H-14)+'" text-anchor="middle">'+(mode==="monthly"&&points.length<=15?points[i].label.split(" ")[0]:points[i].short)+'</text>';
svg+='<polyline points="'+points.map((p,i)=>x(i)+","+yy(p.value)).join(" ")+'" fill="none" stroke="#001e50" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>';
if(points.length<=25)for(let i=0;i<points.length;i++)svg+='<circle cx="'+x(i)+'" cy="'+yy(points[i].value)+'" r="3.5" fill="#001e50"/>';
const width=points.length===1?plotW:plotW/(points.length-1);for(let i=0;i<points.length;i++){const left=Math.max(L,x(i)-width/2),right=Math.min(W-R,x(i)+width/2);svg+='<rect class="market-mark" data-i="'+i+'" tabindex="0" role="button" aria-label="'+points[i].label+': '+fmt(points[i].value)+' vehicles" x="'+left+'" y="'+T+'" width="'+(right-left)+'" height="'+plotH+'" fill="transparent"><title>'+points[i].label+': '+fmt(points[i].value)+' vehicles</title></rect>';}
svg+='<g id="marketFocus" pointer-events="none"></g></svg>';$("marketChart").innerHTML=svg;
function focus(i){const p=points[i];$("marketFocus").innerHTML='<line x1="'+x(i)+'" x2="'+x(i)+'" y1="'+T+'" y2="'+(T+plotH)+'" stroke="#007fa3" stroke-dasharray="4 4"/><circle cx="'+x(i)+'" cy="'+yy(p.value)+'" r="5" stroke="white" stroke-width="2" fill="#007fa3"/>';const tx=Math.max(L,Math.min(x(i)-105,W-R-210));$("marketFocus").innerHTML+='<g class="market-tooltip" transform="translate('+tx+',4)"><rect width="210" height="49" rx="7" fill="white" stroke="#c7d3e2"/><text x="12" y="19" style="fill:#001e50;font-weight:700">'+p.label+'</text><text x="12" y="37" style="fill:#001e50;font-weight:700">'+fmt(p.value)+' vehicles</text></g>';$("marketReadout").textContent=p.label+" · "+fmt(p.value)+" vehicles";}
$("marketChart").querySelectorAll(".market-mark").forEach(el=>{const i=Number(el.dataset.i);for(const evt of ["pointerenter","focus","click"])el.addEventListener(evt,()=>focus(i));el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();focus(i);}});});focus(points.length-1);
}
function reset(){$("marketStart").value=String(years[0]);$("marketEnd").value=String(years[years.length-1]);$("marketMode").value="monthly";render();}
for(const id of ["marketStart","marketEnd","marketMode"])$(id).addEventListener("change",()=>{if(id==="marketEnd"&&Number($("marketEnd").value)<Number($("marketStart").value))$("marketStart").value=$("marketEnd").value;render();});$("marketReset").addEventListener("click",reset);reset();
}
init().catch(e=>{$("marketChartNote").textContent="Historical market data could not load. Download the CSV below.";console.error(e);});
})();
