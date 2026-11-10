(()=>{
const EMAIL='help@bulkmunchies.com',CDN='https://cdn.faire.com/fastly/';
const R=[['Cadbury Clinkers Pascall 160Gx12','Chocolate','Australia',12,10.99,21.99,'3fd57221c6b1a74e5aab8f669ea954264850e7ff460a8c671ea8d909a7d4a569.jpeg'],['Donsuemor Traditional Madeleines 28OZx6','Cookie','United States',6,16,28,'84e7110cd7d1081d643619d7528f7362121b25d517edd2f463de912161512b1c.jpeg'],['Frooti Mango Drink 7OZ x 12','Fruit Juice','India',12,0.75,1.5,'997398fca9384bf77f214b6236d62e17d4375876b19f13378ece07b21900e5f9.jpeg'],['Kurkure Chili Chatka 74Gx12','Chips','India',12,2.49,4.98,'assets/products/03-kurkure-chili-chatka-74gx12.webp'],['Kurkure Masala Munch 80Gx12','Chips','India',12,2.49,4.98,'assets/products/04-kurkure-masala-munch-80gx12.webp'],['Lays American Cream & Onion 52Gx12','Chips','India',12,2.49,4.98,'assets/products/05-lays-american-cream-onion-52gx12.webp'],['Lays Chile Limon 52Gx12','Chips','India',12,2.49,4.98,'assets/products/06-lays-chile-limon-52gx12.webp'],['Lays Magic Masala 52Gx12','Chips','India',12,2.49,4.98,'assets/products/07-lays-magic-masala-52gx12.webp'],['Lays Sizzling Hot 52Gx12','Chips','India',12,2.49,4.98,'assets/products/08-lays-sizzling-hot-52gx12.webp'],['Lays Spanish Tomato Tango 52Gx12','Chips','India',12,2.49,4.98,'assets/products/09-lays-spanish-tomato-tango-52gx12.webp'],['Lays West Indies Hot N Sweet Chilli 50Gx12','Chips','India',12,2.49,4.98,'assets/products/10-lays-west-indies-hot-n-sweet-chilli-50gx12.webp'],['Pakola Soft Drink 8OZ','Soda/Carbonated Drink','Pakistan',12,2.49,4.98,'assets/products/11-pakola-soft-drink-8oz.webp'],['Royal Family Mochi - Strawberry Cheese Cake 180gX12','Jam/Jelly','Taiwan',12,3.99,6.49,'assets/products/12-royal-family-mochi-strawberry-cheese-cake-180gx12.webp'],['Royal Family Mochi - Chocolate 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'assets/products/13-royal-family-mochi-chocolate-180gx12.webp'],['Royal Family Mochi - Creamy Coconut 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'assets/products/14-royal-family-mochi-creamy-coconut-180gx12.webp'],['Royal Family Mochi - Maple Pancake 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'assets/products/15-royal-family-mochi-maple-pancake-180gx12.webp'],['Royal Family Mochi - Mint Chocolate Chip 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'assets/products/16-royal-family-mochi-mint-chocolate-chip-180gx12.webp'],['Royal Family Mochi - Peanut Butter 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'assets/products/17-royal-family-mochi-peanut-butter-180gx12.webp'],['Royal Family Mochi - Salted Caramel 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'assets/products/18-royal-family-mochi-salted-caramel-180gx12.webp'],['Royal Family Mochi - Tiramisu & Creme 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'assets/products/19-royal-family-mochi-tiramisu-creme-180gx12.webp'],['Royal Family Mochi - Vanilla Creme 180Gx12','Jam/Jelly','Taiwan',12,3.99,6.49,'assets/products/20-royal-family-mochi-vanilla-creme-180gx12.webp'],['Tiger Chilli and Lemon Flavored Chips 90Gx12','Chips','Egypt',12,2.99,5.99,'assets/products/21-tiger-chilli-and-lemon-flavored-chips-90gx12.webp'],['Tiger Chips - Seasoned Cheese 90gx12','Chips','Egypt',12,2.99,5.99,'assets/products/22-tiger-chips-seasoned-cheese-90gx12.webp'],['Tiger Chips - Tomato flavor 90gx12','Chips','Egypt',12,2.99,5.99,'assets/products/23-tiger-chips-tomato-flavor-90gx12.webp'],['Tiger Chips Kebab Flavor Egypt 90gx12','Chips','Egypt',12,2.99,5.99,'assets/products/24-tiger-chips-kebab-flavor-egypt-90gx12.webp'],['Tiger Chips Paprika Flavored Chips - 90gx12','Chips','Egypt',12,2.99,5.99,'assets/products/25-tiger-chips-paprika-flavored-chips-90gx12.webp'],['Tiger Excellence Thai Sweet Chili Chips 80Gx10','Chips','Egypt',10,2.99,5.99,'assets/products/26-tiger-excellence-thai-sweet-chili-chips-80gx10.webp'],['Tiger Kettle Dill Pickle & White Cheese 90gx10','Chips','Egypt',10,2.99,5.99,'assets/products/27-tiger-kettle-dill-pickle-white-cheese-90gx10.webp'],['Tiger Kettle Prime Glazed Ribs 90g*10','Chips','Egypt',10,2.99,5.99,'assets/products/28-tiger-kettle-prime-glazed-ribs-90g-10.webp'],['Oreo Pistach-YO Cookie 34gx12','Cookie','United Arab Emirates',12,2.66,4.5,'assets/products/29-oreo-pistach-yo-cookie-34gx12.webp'],['Snickers Coffee Chocolate Bar 44gx24','Chocolate','Australia',24,3.16,5.99,'assets/products/30-snickers-coffee-chocolate-bar-44gx24.webp'],['Twix Tiramisu Chocolate Bar 46gx24','Chocolate','United Arab Emirates',24,3.16,5.99,'assets/products/31-twix-tiramisu-chocolate-bar-46gx24.webp']];
const P=R.map((r,i)=>({id:i,name:r[0],cat:r[1],origin:r[2],pack:r[3],unit:r[4],retail:r[5],img:r[6].startsWith('assets/')?r[6]:CDN+r[6],case:Math.round(r[3]*r[4]*100)/100}));
const LB={'Jam/Jelly':'Mochi','Soda/Carbonated Drink':'Soda','Fruit Juice':'Juice'},lab=c=>LB[c]||c;
const $=id=>document.getElementById(id),money=n=>'$'+n.toFixed(2);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let cat='',cart={};
try{cart=JSON.parse(localStorage.getItem('bm-quote')||'{}')}catch(e){}
const save=()=>{try{localStorage.setItem('bm-quote',JSON.stringify(cart))}catch(e){}drawCart()};

$('sP').textContent=P.length;$('sC').textContent=new Set(P.map(p=>p.origin)).size;$('yr').textContent=new Date().getFullYear();
const cats=[...new Set(P.map(p=>p.cat))];
function drawCats(){
  $('cats').innerHTML=[['','All products',P.length],...cats.map(c=>[c,lab(c),P.filter(p=>p.cat==c).length])]
   .map(([c,l,n])=>`<button type="button" class="cat glass" data-cat="${esc(c)}" aria-pressed="${cat==c}"><b>${esc(l)}</b><small>${n} item${n>1?'s':''}</small></button>`).join('');
}
$('og').innerHTML+=[...new Set(P.map(p=>p.origin))].sort().map(o=>`<option>${esc(o)}</option>`).join('');

function render(){
  const q=$('q').value.trim().toLowerCase(),o=$('og').value,s=$('so').value;
  let l=P.filter(p=>(!cat||p.cat==cat)&&(!o||p.origin==o)&&(p.name+' '+p.cat+' '+lab(p.cat)+' '+p.origin).toLowerCase().includes(q));
  l.sort((a,b)=>s=='l'?a.case-b.case:s=='h'?b.case-a.case:a.name.localeCompare(b.name));
  $('count').textContent=`Showing ${l.length} of ${P.length} products`;
  $('grid').innerHTML=l.length?l.map(p=>`<article class="p glass">
    <button type="button" class="im" data-show="${p.id}" aria-label="View ${esc(p.name)}"><span class="tg">${esc(lab(p.cat))}</span><img loading="lazy" decoding="async" src="${p.img}" alt="${esc(p.name)}" width="400" height="400"></button>
    <div class="bd"><h3>${esc(p.name)}</h3><div class="meta">${p.pack} per case · ${money(p.unit)}/unit · ${esc(p.origin)}</div>
    <div class="pr">${money(p.case)} <small>/ case</small></div><div class="meta">Suggested retail ${money(p.retail)}</div>
    <button type="button" class="btn btn-glass btn-sm" data-add="${p.id}">Add to quote</button></div></article>`).join('')
    :'<p class="empty">No matches. Try another search or filter.</p>';
}
function setCat(c){cat=c;drawCats();render()}

function openDrawer(o){$('dr').classList.toggle('open',o);$('dr').setAttribute('aria-hidden',!o);$('scrim').classList.toggle('on',o);if(o)$('closeQuote').focus()}
function add(i){cart[i]=(cart[i]||0)+1;save();openDrawer(true)}
function change(i,d){cart[i]=(cart[i]||0)+d;if(cart[i]<=0)delete cart[i];save()}
function drawCart(){
  let n=0,t=0;
  const h=Object.entries(cart).map(([i,q])=>{const p=P[i];if(!p)return'';n+=q;t+=q*p.case;
    return `<div class="ci"><img src="${p.img}" alt=""><div class="nm"><b>${esc(p.name)}</b><br><span>${money(p.case)} / case</span></div><div class="qt"><button type="button" data-chg="${i}" data-d="-1" aria-label="Remove one case">−</button><span>${q}</span><button type="button" data-chg="${i}" data-d="1" aria-label="Add one case">+</button></div></div>`}).join('');
  $('it').innerHTML=h||'<p>Your quote is empty. Add cases from the catalog.</p>';
  $('qc').textContent=n;$('tt').textContent=money(t);
}
function showProduct(i){const p=P[i];$('mi').src=p.img;$('mi').alt=p.name;
  $('mt').innerHTML=`<h3>${esc(p.name)}</h3><p>${esc(lab(p.cat))} · Made in ${esc(p.origin)}</p><div class="pr">${money(p.case)} <small>/ case of ${p.pack}</small></div><p>${money(p.unit)} per unit · suggested retail ${money(p.retail)}</p><button type="button" class="btn btn-y" data-add="${i}" data-close="1">Add to quote</button>`;
  $('md').classList.add('open');$('closeModal').focus()}
const closeModal=()=>$('md').classList.remove('open');

async function send(subject,data,el,ok){
  el.className='status';el.textContent='Sending...';
  try{const r=await fetch('https://formsubmit.co/ajax/'+EMAIL,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(Object.assign({_subject:subject,_captcha:'false',_template:'table'},data))});
    const j=await r.json();if(r.ok&&String(j.success)!=='false'){el.className='status ok';el.textContent=ok;return true}throw new Error('fail')}
  catch(e){el.className='status err';el.textContent='Could not send. Please email '+EMAIL+' directly.';return false}
}
async function sendQuote(){
  const el=$('qs');
  if(!Object.keys(cart).length){el.className='status err';el.textContent='Add items to your quote first.';return}
  const b=$('qb').value.trim(),em=$('qe').value.trim();
  if(!b||!/^\S+@\S+\.\S+$/.test(em)){el.className='status err';el.textContent='Please enter your business name and a valid email.';return}
  let t=0;const lines=Object.entries(cart).map(([i,q])=>{const p=P[i];t+=q*p.case;return q+' case(s) - '+p.name+' @ '+money(p.case)});
  if(await send('Quote request: '+b,{Business:b,email:em,Items:lines.join('\n'),Estimated_total:money(t)},el,'Quote sent. We will reply by email.')){cart={};save()}
}

document.addEventListener('click',e=>{
  const t=e.target.closest('[data-cat],[data-add],[data-show],[data-chg]');if(!t)return;
  if(t.dataset.cat!==undefined)setCat(t.dataset.cat);
  else if(t.dataset.add!==undefined){if(t.dataset.close)closeModal();add(+t.dataset.add)}
  else if(t.dataset.show!==undefined)showProduct(+t.dataset.show);
  else if(t.dataset.chg!==undefined)change(+t.dataset.chg,+t.dataset.d);
});
$('openQuote').onclick=()=>openDrawer(true);$('closeQuote').onclick=()=>openDrawer(false);$('scrim').onclick=()=>openDrawer(false);
$('closeModal').onclick=closeModal;$('md').onclick=e=>{if(e.target===$('md'))closeModal()};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();openDrawer(false)}});
$('sendQuote').onclick=sendQuote;
$('af').onsubmit=async e=>{e.preventDefault();const f=e.target;
  if(!f.checkValidity()){$('as').className='status err';$('as').textContent='Please fill in business name, your name and a valid email.';return}
  const d=Object.fromEntries(new FormData(f));
  if(await send('Wholesale application: '+d.Business,d,$('as'),'Thanks. We received your application and will be in touch.'))f.reset()};
['q','og','so'].forEach(i=>$(i).addEventListener('input',render));
drawCats();render();drawCart();
})();
