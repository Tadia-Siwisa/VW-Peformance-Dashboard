(()=>{"use strict";
const $=id=>document.getElementById(id), fmt=n=>n.toLocaleString("en-ZA"), mname=s=>new Date(s+"T00:00:00Z").toLocaleDateString("en-GB",{month:"short",year:"numeric",timeZone:"UTC"});
const sum=a=>a.reduce((s,r)=>s+r.sales,0), year=r=>Number(r.month.slice(0,4)), mo=r=>Number(r.month.slice(5,7));
const pct=n=>(n>=0?"+":"")+n.toFixed(1)+"%";
async function init(){
const response=await fetch("assets/market-sales-2012-2026.csv");if(!response.ok)throw Error("CSV unavailable");
const data=(await response.text()).trim().split(/\r?\n/).slice(1).map(line=>{const [month,sales]=line.split(",");return {month,sales:Number(sales)};});
if(data.length!==178||data.some((r,i)=>r.month!==String(2012+Math.floor(i/12))+"-"+String(i%12+1).padStart(2,"0")+"-01"||!Number.isInteger(r.sales)||r.sales<0))throw Error("Invalid monthly series");
const years=[...new Set(data.map(year))];for(const id of ["marketStart","marketEnd"]){$(id).innerHTML=years.map(y=>'<option value="'+y+'">'+y+'</option>').join("");}
function render(){
let start=Number($("marketStart").value),end=Number($("marketEnd").value);if(start>end){end=start;$("marketEnd").value=String(end);}
const mode=$("marketMode").value, selected=data.filter(r=>year(r)>=start&&year(r)<=end);
const latest=selected[selected.length-1], y=year(latest), m=mo(latest);
const current=sum(data.filter(r=>year(r)===y&&mo(r)<=m)), prior=data.filter(r=>year(r)===y-1&&mo(r)<=m), yoy=prior.length===m?pct((current/sum(prior)-1)*100):"N/A";
$("marketKpis").innerHTML='<div class="market-metric"><small>Latest month in selection</small><strong>'+fmt(latest.sales)+'</strong><small>'+mname(latest.month)+'</small></div><div class="market-metric"><small>Year-to-date sales · '+y+'</small><strong>'+fmt(current)+'</strong><small>January–'+mname(latest.month).split(" ")[0]+'</small></div><div class="market-metric"><small>Year-to-date growth</small><strong>'+yoy+'</strong><small>Against equivalent months in '+(y-1)+'</small></div>';
let points=selected.map(r=>({label:mname(r.month),value:r.sales,short:r.month.slice(0,4),month:r.month}));
let note="Monthly domestic sales · "+mname(selected[0].month)+" to "+mname(latest.month)+".";
if(mode!=="monthly"){
const months=mode==="annual"?12:10;
points=years.filter(v=>v>=start&&v<=end).flatMap(v=>{const group=data.filter(r=>year(r)===v&&mo(r)<=months);return group.length===months?[{label:String(v)+(months===10?" · Jan–Oct":""),value:sum(group),short:String(v)}]:[];});
note=mode==="annual"?"Full calendar years only. 2026 is excluded because November and December are outside the dataset.":"Equivalent January–October periods for each selected year; includes 2026.";
}
$("marketChartTitle").textContent=mode==="monthly"?"Monthly new vehicle sales":mode==="annual"?"Annual new vehicle sales":"January–October market sales";
$("marketChartNote").textContent=note+" KPIs above use the latest month in the selected years.";
if(!points.length){$("marketChart").innerHTML='<p class="source">No complete calendar year in this selection. Choose monthly or January–October view.</p>';$("marketReadout").textContent="No observations in this view.";return;}
const W=900,H=340,L=72,R=20,T=24,B=48, plotW=W-L-R, plotH=H-T-B, max=Math.max(...points.map(p=>p.value)), step=mode==="monthly"?10000:100000, top=Math.ceil(max/step)*step||step, x=i=>L+(points.length===1?plotW/2:i*plotW/(points.length-1)), yy=v=>T+plotH*(1-v/top);
let svg='<svg viewBox="0 0 '+W+' '+H+'" role="group" aria-label="New vehicle market sales in vehicles">';
for(let v=0;v<=top;v+=step)svg+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+yy(v)+'" y2="'+yy(v)+'" stroke="#dfe4e9"/><text x="'+(L-9)+'" y="'+(yy(v)+4)+'" text-anchor="end">'+(v/1000)+'k</text>';
const ticks=points.length<=15?points.map((_,i)=>i):points.map((p,i)=>p.month&&p.month.slice(5,7)==="01"?i:-1).filter(i=>i>=0).filter((_,j)=>j%2===0);
for(const i of ticks)svg+='<text x="'+x(i)+'" y="'+(H-14)+'" text-anchor="middle">'+(mode==="monthly"&&points.length<=15?points[i].label:points[i].short)+'</text>';
svg+='<polyline points="'+points.map((p,i)=>x(i)+","+yy(p.value)).join(" ")+'" fill="none" stroke="#001e50" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>';
if(points.length<=25)for(let i=0;i<points.length;i++)svg+='<circle cx="'+x(i)+'" cy="'+yy(points[i].value)+'" r="3.5" fill="#001e50"/>';
const width=points.length===1?plotW:plotW/(points.length-1);for(let i=0;i<points.length;i++){const left=Math.max(L,x(i)-width/2),right=Math.min(W-R,x(i)+width/2);svg+='<rect class="market-mark" data-i="'+i+'" tabindex="0" role="button" aria-label="'+points[i].label+': '+fmt(points[i].value)+' vehicles" x="'+left+'" y="'+T+'" width="'+(right-left)+'" height="'+plotH+'" fill="transparent"><title>'+points[i].label+': '+fmt(points[i].value)+' vehicles</title></rect>';}
svg+='<g id="marketFocus" pointer-events="none"></g></svg>';$("marketChart").innerHTML=svg;
function focus(i){const p=points[i];$("marketFocus").innerHTML='<line x1="'+x(i)+'" x2="'+x(i)+'" y1="'+T+'" y2="'+(T+plotH)+'" stroke="#007fa3" stroke-dasharray="4 4"/><circle cx="'+x(i)+'" cy="'+yy(p.value)+'" r="5" stroke="white" stroke-width="2" fill="#007fa3"/>';$("marketReadout").textContent=p.label+" · "+fmt(p.value)+" vehicles";}
$("marketChart").querySelectorAll(".market-mark").forEach(el=>{const i=Number(el.dataset.i);for(const evt of ["pointerenter","focus","click"])el.addEventListener(evt,()=>focus(i));el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();focus(i);}});});focus(points.length-1);
}
function reset(){$("marketStart").value=String(years[0]);$("marketEnd").value=String(years[years.length-1]);$("marketMode").value="monthly";render();}
for(const id of ["marketStart","marketEnd","marketMode"])$(id).addEventListener("change",()=>{if(id==="marketEnd"&&Number($("marketEnd").value)<Number($("marketStart").value))$("marketStart").value=$("marketEnd").value;render();});$("marketReset").addEventListener("click",reset);reset();
}
init().catch(e=>{$("marketChartNote").textContent="Historical market data could not load. Download the CSV below.";console.error(e);});
})();
